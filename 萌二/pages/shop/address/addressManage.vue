<template>
	
	<view class="content">
		<view class="w-picker"  v-if="showPicker">
			<view class="mask" :class="{'show':showPicker}" @tap="maskTap" @touchmove.stop.prevent catchtouchmove="true"></view>
			<view class="w-picker-cnt">
				<view class="w-picker-hd" @touchmove.stop.prevent catchtouchmove="true">
				  <view class="w-picker-btn" @tap="pickerCancel">取消</view>
				  <view class="w-picker-btn" :style="{'color':themeColor}" @click="pickerConfirm">确定</view>
				</view>
				<view class="w-picker" style="height: 200upx;line-height: 200upx;">
					<picker-view class="w-picker w-picker-view" :indicator-style="itemHeight" :value="pickerValue" @change="pickerChange">
						<picker-view-column>
							<view class="w-picker-item" v-for="(item,index) in provinceDataList" :key="index">{{item.label}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="w-picker-item" v-for="(item,index) in cityDataList" :key="index">{{item.label}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="w-picker-item" v-for="(item,index) in areaDataList" :key="index">{{item.label}}</view>
						</picker-view-column>
					</picker-view>
				</view>
			</view>
		</view>
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">地区</text>
			<text  @click="showOpen" :class="[OKcss ? 'textColer' : 'textColer1']">{{NowAddress}}</text>
		</view>
		<view class="row b-b"> 
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.area" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.defaule" color="#fa436a" @change="switchChange" />
		</view>
		
		<button class="add-btn" @tap="confirm">提交</button>
		<linkAddress
		        ref="linkAddress"
		        :height="height"
		        @confirmCallback="confirmCallback()"
		    >
		</linkAddress>
		

	</view>
	
</template>

<script>
	import provinceData from '../../../components/w-picker/city-data/province.js';
	import cityData from '../../../components/mpvue-citypicker/city-data/city.js';
	import areaData from '../../../components/w-picker/city-data/area.js';
	export default {
		data() {
			return {
				addressData: {
					name: '',    //联系人
					mobile: '', //手机
					data:{},
					addressName: '在地图选择',
					address: '',  //所在地区
					area: '',    //详细地址
					default: false,
					
				},
				itemHeight:`height: ${uni.upx2px(88)}px;`,
				showPicker:false,
				pickerValue: [0, 0, 0],
				OKcss:false,
				NowAddress:"点击这里选择地址~",
				provinceDataList : [{
				    "label": "北京市",
				    "value": "1"
				  },
				  {
				    "label": "天津市",
				    "value": "2",
				  },
				  {
				    "label": "南京",
				    "value": "3"
				  },
				  {
				    "label": "清新市",
				    "value": "4",
				  }
				  ],
				cityDataList : [{	
				    "label": "清远市",
				    "value": "5"
				  },
				  {
				    "label": "江门市",
				    "value": "6"
				  }],
				 areaDataList:[{
				    "label": "广州市",
				    "value": "7"
				  },
				  {
				    "label": "深圳市",
				    "value": "8"
				  }]
			}
		},
		  created() {
			this.init()
		  },
		  props: {
			/* 默认值 */
			pickerValueDefault: {
			  type: Array,
			  default(){
						return [0, 0, 0]
					}
			},
			/* 主题色 */
			themeColor: 'red'
		  },
		watch:{
			pickerValueDefault(){
				this.init();
			}
		},
		onLoad(option){
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				
				this.addressData = JSON.parse(option.data)
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			init() {
				this.handPickValueDefault(); // 对 pickerValueDefault 做兼容处理 拿到的是每一级数组的数长度
				this.provinceDataList = provinceData;
				this.cityDataList = cityData[this.pickerValueDefault[0]];
				this.areaDataList = areaData[this.pickerValueDefault[0]][this.pickerValueDefault[1]];
				this.pickerValue = this.pickerValueDefault;
			},
			handPickValueDefault() {
			  if (this.pickerValueDefault !== [0, 0, 0]) {
			    if (this.pickerValueDefault[0] > provinceData.length - 1) {
			      this.pickerValueDefault[0] = provinceData.length - 1;
			    }
			    if (this.pickerValueDefault[1] > cityData[this.pickerValueDefault[0]].length - 1) {
			      this.pickerValueDefault[1] = cityData[this.pickerValueDefault[0]].length - 1;
			    }
			    if (this.pickerValueDefault[2] > areaData[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1) {
			      this.pickerValueDefault[2] = areaData[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1;
			    }
			  }
			},
			pickerChange(e) {
			  let changePickerValue = e.mp.detail.value;
			  if (this.pickerValue[0] !== changePickerValue[0]) {
			    // 第一级发生滚动
				
				this.cityDataList = [];
				this.areaDataList = [];
				let cityDataList = cityData[changePickerValue[0]];
				let areaDataList = areaData[changePickerValue[0]][0];
			    changePickerValue[1] = 0;
			    changePickerValue[2] = 0;
				for(let t = 0 ;t < cityDataList.length;t++)
				{
					this.cityDataList.push(cityDataList[t]);
				}
				for(let t = 0 ;t < areaDataList.length;t++)
				{
					this.areaDataList.push(areaDataList[t]);
				}
				
			  } else if (this.pickerValue[1] !== changePickerValue[1]) {
			    // 第二级滚动
			    let areaDataList =
			      areaData[changePickerValue[0]][changePickerValue[1]];
			    changePickerValue[2] = 0;
				this.areaDataList = areaDataList;
			  }
			  this.pickerValue = changePickerValue;
			},
			maskTap(){
				this.showPicker = false;
			},
			pickerCancel(){
				this.showPicker = false;
			},
			pickerConfirm(){
				let a = this.pickerValue[0],b=this.pickerValue[1],c = this.pickerValue[2];
				this.NowAddress = this.provinceDataList[a].label + '-' + this.cityDataList[b].label + '-' +this.areaDataList[c].label;
				this.OKcss = true;
				this.addressData.addressName = this.NowAddress;
				this.showPicker = false;
			},
			showOpen(){
				this.showPicker = true;
			},
			//提交
			confirm(){
				let data = this.addressData;
				console.log("111");
				if(!data.name){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.address){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!data.area){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				console.log("222");
				uni.showLoading({
						title:'正在提交'
					});
				console.log("333");
				//实际应用中请提交ajax,模板定时器模拟提交效果
				console.log(data);
				uni.setStorage({
					key:'saveAddress',
					data:data,
					success() {
						uni.hideLoading();
						uni.navigateBack();
					}
				})
	/*			//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList(data, this.manageType);
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800) */
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
	.w-picker{
		position: relative;
		z-index: 888;
		.mask {
		  position: fixed;
		  z-index: 1000;
		  top: 0;
		  right: 0;
		  left: 0;
		  bottom: 0;
		  background: rgba(0, 0, 0, 0.6);
		  visibility: hidden;
		  opacity: 0;
		  transition: all 0.3s ease;
		}
		.mask.show{
			visibility: visible;
			opacity: 1;
		}
		.w-picker-cnt {
		  position: fixed;
		  top: 380upx;
		  left: 0;
		  width: 100%;
		  transition: all 0.3s ease;
		  transform: translateY(100%);
		  z-index: 3000;
		}
		.w-picker-cnt.show {
		  transform: translateY(0);
		}
		.w-picker-hd {
		  display: flex;
		  align-items: center;
		  padding: 0 30upx;
		  height: 88upx;
		  background-color: #fff;
		  position: relative;
		  text-align: center;
		  font-size: 32upx;
		  justify-content: space-between;
		  .w-picker-btn{
		  	font-size: 30upx;
		  }
		}
		
		.w-picker-hd:after {
		  content: ' ';
		  position: absolute;
		  left: 0;
		  bottom: 0;
		  right: 0;
		  height: 1px;
		  border-bottom: 1px solid #e5e5e5;
		  color: #e5e5e5;
		  transform-origin: 0 100%;
		  transform: scaleY(0.5);
		}
		.w-picker-item {
		  text-align: center;
		  width: 100%;
		  height: 88upx;
		  line-height: 88upx;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		  font-size: 30upx;
		}
		.w-picker-view {
		  width: 100%;
		  height: 476upx;
		  overflow: hidden;
		  background-color: rgba(255, 255, 255, 1);
		  z-index: 666;
		}
		picker-view{
			height: 100%;
		}
	}
	.textColer{
		color: #000000;
		font-size: 30upx;
	}
	.textColer1{
		color: #C8C7CC;
	}
</style>
