<template>
	<view>
		<view class="nav">
			<view class="nav-item">
				<text class="nav-text" :class="sCur=='synthetical'?'onSelect':''" @click="onclick" data-cur="synthetical">综合</text>
			</view>
			<view class="nav-item">
				<text class="nav-text" :class="sCur=='video'?'onSelect':''" @click="onclick" data-cur="video">视频</text>
			</view>
			<view class="nav-item">
				<text class="nav-text" :class="sCur=='user'?'onSelect':''" @click="onclick" data-cur="user">用户</text>
			</view>
		</view>
		<swiper skip-hidden-item-layout="true" @change="swiperChange" :current="current" :style="{height: height - 108 + 'px'}">
			 <swiper-item>
				<scroll-view v-if="sCur == 'synthetical'" class="content" :style="{height: height - 108 + 'px'}" scroll-y="true">
					<view class="navigatorBox" :class="show">
						<view @click="goTo(item.id)" v-for="(item,index) in synthetical" :key="index" class="scroll-box" :style="'top:' + sTop[index] + 'px;'">
							<image @load="loadEnd($event,index,sTop,synthetical)" class="img" :lazy-load="true" :src="item.img" mode="widthFix"></image>
							<view>
								<text class="sTitle">{{item.title}}</text>
							</view>						
							<text class="cuIcon-videofill ico"></text><text class="num"> {{item.num}}</text>												
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view v-if="sCur == 'video'" class="content" :style="{height: height - 108 + 'px'}" scroll-y="true">
					<view class="navigatorBox" :class="show">
						<view @click="goTo(item.id)" v-for="(item,index) in videoLists" :key="index" class="scroll-box" :style="'top:' + top[index] + 'px;'">
							<image @load="loadEnd($event,index,top,videoLists)" class="img" :lazy-load="true" :src="item.img" mode="widthFix" style="width: 100%; display: block;"></image>
							<view>
								<text class="sTitle">{{item.title}}</text>
							</view>
							<text class="cuIcon-videofill ico"></text><text class="num"> {{item.num}}</text>							
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view v-if="sCur == 'user'" class="content" :style="{height: height - 108 + 'px'}" scroll-y="true">
					<view class="navigatorBox" :class="show">
						<view @click="goTo(item.id)" v-for="(item,index) in userList" :key="index" class="scroll-box" :style="'top:' + uTop[index] + 'px;'">
								<image @load="loadEnd($event,index,uTop,userList)" class="img" :lazy-load="true" :src="item.img" mode="widthFix" style="width: 100%; display: block;"></image>
								<view>
									<text class="sTitle">{{item.title}}</text>
								</view>
								<text class="cuIcon-videofill ico"></text><text class="num"> {{item.num}}</text>					
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
			
		
	</view>
	
	
</template>

<script>
export default{
	data() {
		return{
			arr:[],
			show: "",
			opacity:0,
			i:0,
			width:0,
			imgHeight: [],
			vBoxHeight: [],
			sBoxHeight: [],
			uBoxHeight:[],
			top: [], 
			sTop: [], 
			uTop: [],
			current:1,
			sCur : "video",
			height: 0,
			isShow: true,
			isShowUser: true,
			
			videoLists: [{
					title: '1',
					name: 'layout',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562140&di=5f871481f26f7ccfaf5e54cf6e79128a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F632fbfdf2c75f0a56c5ce31d8dd3c11844c5678710310-rrq6df_fw658',
					num: 2000,
					id: "111"
				},
				{
					title: '2',
					name: 'background',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "222"
				},
				{
					title: '3',
					name: 'text',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "333"
				},
				{
					title: '4',
					name: 'text',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562141&di=f80baf2def8b75bdfa63040d352ee170&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F20%2F20180620115938_jospi.jpg',
					num: 2000,
					id: "444"
				},
				{
					title: '5',
					name: 'text',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562140&di=5f871481f26f7ccfaf5e54cf6e79128a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F632fbfdf2c75f0a56c5ce31d8dd3c11844c5678710310-rrq6df_fw658',
					num: 2000,
					id: "555"
				},
				{
					title: '6',
					name: 'text',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "666"
				},
				{
					title: '7',
					name: 'text',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "777"
				}
			],
			synthetical: [
				{
					title: '1',
					name: 'background',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "111"
				},
				{
					title: '2',
					name: 'layout',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562140&di=5f871481f26f7ccfaf5e54cf6e79128a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F632fbfdf2c75f0a56c5ce31d8dd3c11844c5678710310-rrq6df_fw658',
					num: 2000,
					id: "222"
				},
				{
					title: '3',
					name: 'text',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "333"
				},
				{
					title: '4',
					name: 'text',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562141&di=f80baf2def8b75bdfa63040d352ee170&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F20%2F20180620115938_jospi.jpg',
					num: 2000,
					id: "444"
				},
				{
					title: '5',
					name: 'text',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562140&di=5f871481f26f7ccfaf5e54cf6e79128a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F632fbfdf2c75f0a56c5ce31d8dd3c11844c5678710310-rrq6df_fw658',
					num: 2000,
					id: "555"
				},
				{
					title: '6',
					name: 'background',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "666"
				}],
				
			userList:[
				{
					title: '1',
					name: 'background',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "111"
				},
				{
					title: '2',
					name: 'layout',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562140&di=5f871481f26f7ccfaf5e54cf6e79128a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F632fbfdf2c75f0a56c5ce31d8dd3c11844c5678710310-rrq6df_fw658',
					num: 2000,
					id: "222"
				},
				{
					title: '3',
					name: 'text',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "333"
				},
				{
					title: '4',
					name: 'text',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562141&di=f80baf2def8b75bdfa63040d352ee170&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F20%2F20180620115938_jospi.jpg',
					num: 2000,
					id: "444"
				},
				{
					title: '5',
					name: 'text',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567614562140&di=5f871481f26f7ccfaf5e54cf6e79128a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F632fbfdf2c75f0a56c5ce31d8dd3c11844c5678710310-rrq6df_fw658',
					num: 2000,
					id: "555"
				},
				{
					title: '6',
					name: 'background',
					img: 'http://bendipin.oss-cn-beijing.aliyuncs.com/images/product-1552213211141.png',
					num: 2000,
					id: "666"
				}],
				
		};
	},
	created(){
		this.getHeight()
		
	},
	mounted(){
		this.getEl(this.videoLists,this.vBoxHeight,this.top);
	},
	methods:{
		getHeight(){
				const _that = this;
				uni.getSystemInfo({
				success: function (res) {
					_that.height = res.windowHeight;
				},
				
			});
		},
		swiperChange(e){
			if(e.target.current == 0) {
				if(this.isShow){
					this.show = ""
					this.getEl(this.synthetical,this.sBoxHeight,this.sTop);
					this.isShow = false;
				}
				this.sCur = "synthetical"
			} else if (e.target.current == 1) {
				this.sCur = "video"
			} else if (e.target.current == 2) {
				if(this.isShowUser){
					this.show = ""
					this.getEl(this.userList,this.uBoxHeight,this.uTop);
					this.isShowUser = false;
				}
				this.sCur = "user"
			}

		},
		onclick(e){
			this.sCur = e.target.dataset.cur
			if(this.sCur == "synthetical") {
				
				this.current = 0;
			} else if (this.sCur == "video") {
				
				this.current = 1;
			} else if (this.sCur == "user") {
				
				this.current = 2;
			}
		},
		
		getEl(arr,boxHeight,top){
			const query = uni.createSelectorQuery().in(this);
			query.selectAll('.navigatorBox .scroll-box').boundingClientRect(res=>{
				let height = 0;
				this.width = res[0].width
				for (let i = 0; i < arr.length; i++) {
					height = res[i].height;
					if (i < 2) {
						boxHeight.push(height);
						top.push(0);
					}
				}
			}).exec();			
		},
		loadEnd(e,index,top,List){
			let height = e.detail.height * (this.width / e.detail.width) + 40
			this.i++;
			this.imgHeight[index] = height
			if(List.length == this.i){
				for(let i=0;i<List.length;i++){
					if(i>=2){
						this.$set(top,i,this.imgHeight[i-2] + top[i-2])
					}
				}
				this.i = 0;
				this.show = "showBox";
			}

		},
		goTo(id){
			uni.redirectTo({
				url: '../index/index?id=' + id
			});
		}
	}
	
}
	
</script>

<style>
	.content{
		padding: 0 4%;
		
	}
	
	
	.scroll-box{
		position: absolute;
		padding-bottom: 10px;
		width: calc(50% - 10upx);
		
	}
	.navigatorBox{
		position: relative;
		opacity: 0;
	}
	.showBox{
		animation: show 0.5s;
		animation-fill-mode: forwards;
	}
	.hideBox{
		animation: hide 1s;
		animation-fill-mode: forwards;
	}
	.scroll-box:nth-child(2n){
		left: 360upx;
	}
	
	
	
	.nav{
		padding: 8px;
		display: flex;
		height: 40px;
	}
	.nav-item{
		text-align: center;
		flex: 1;
		font-weight: 400;
		padding-bottom: 5px;
		font-family: 微软雅黑;
		color: #999;
		font-size: 1.2em;
		
	}
	.nav-text{
		width: 2em;
		
	}
	.sTitle{
		font-weight:800;
		font-size: 1em;
	}
	.img{
		will-change: transform;
		border-radius: 5px;
	}
	.ico,.num{
		color: #999;
		font-size: 0.8em;
	}
	.ico {
		
	}
	.num{
		margin-left: 0.2em;
	}
	.onSelect{
		border-bottom: 2px solid #000000;
		color: #000;
	}
	@keyframes show{
		from{
			opacity: 0;
		}
		to{
			opacity: 1;
		}
	}
	@keyframes hide{
		from{
			opacity: 1;
		}
		to{
			opacity: 0;
		}
	}
</style>
