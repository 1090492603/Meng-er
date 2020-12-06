<template >
	<view class="personBox" >
		<view class="backAndMore">
			<image src="../../static/shop/shezhi.png" class="sortIcon" mode="widthFix" style="width: 65upx;height: 65upx;" @click="goSheZhi"></image>
		</view>
		<image src="../../static/img/tou7.jpg" mode="widthFix" class="headerBackground"></image>
		<view class="personContent">
			<view class="personMainInfo">
				<view class="InfoContentView">
					<view style="display: flex;padding: 0 22px;">
						<image class="InfoContentImg" src="../../static/img/tou4.jpg"></image>
						<view class="buttomBox">
							 <button  plain="true" type="primary" class="buttomBox1">消息</button>
							 <button  plain="true" type="primary"  class="buttomBox2">编辑资料</button>
						</view>
					</view>
					<view class="InfoContent" style="padding: 0 22px;">
						<view class="firstLine">
							<view class="personNameView">
								劲哥哥
							</view>
							<view class="secondLine">
								<text class="cuIcon-male secondLineIco"></text>
								<text class="secondLineID">ID:5201314</text>
							</view>
						</view>
						
						<view class="fhirdLine">
							<text class="fhirdLineContent">这个人很懒，什么都没有留下</text>
						</view>
						
						<view class="fiveLine">
							<view class="fiveLineView">
								<text class="fiveLineContent11">3000</text>
								<text class="fiveLineContent12">粉丝</text>
							</view>
							<view class="fiveLineView">
								<text class="fiveLineContent11">2.3w</text>
							<text class="fiveLineContent12">获赞</text>
							</view>
							<view class="fiveLineView">
								<text class="fiveLineContent11">190</text>
								<text class="fiveLineContent12">关注</text>
							</view>
						</view>
					</view>
					<view class="swiper_Box" >
						<view class="business_Box"  > 
							<view  class="Box_text"><text   :class="sCur== 'trends'?'onChoose':' '" data-cur="trends" @tap="change">动态</text></view>
						</view>
						<view class="business_Box" >
							<view  class="Box_text"><text  :class="sCur== 'business'?'onChoose':' '" data-cur="business" @tap="change">交易</text></view>
						</view>
						<view class="business_Box" >
							<view  class="Box_text"><text  :class="sCur== 'works'?'onChoose':' '" data-cur="works" @tap="change">作品</text></view>
						</view>
						<view class="business_Box" >
							<view class="Box_text"><text  :class="sCur== 'collection'?'onChoose':' ' " data-cur="collection" @tap="change">收藏</text></view>
						</view>
					</view>
					<swiper class="achievementSwiper swiper-box" :current="current" @change="currentChange" >
						<swiper-item class="business_Swiper_B">动态</swiper-item>
						<swiper-item class="business_Swiper_B">
							<view class="business_Swiper">
								<view class="business_ImgBox">
									<image mode="aspectFit" style="height: 35upx;width: 35upx;margin-top: 6upx;" src="../../static/shop/business1.png"></image>
								</view>
								<view>
									<text class="business_Content">
										商家入驻
									</text>
								</view>
								<view class="business_1">
									<text class="business_text">已入驻</text>
									<image src="../../static/shop/you.png" mode="aspectFit" style="height: 35upx;width: 35upx;margin-top: 6upx;" ></image>
								</view>
							</view>
							<view class="business_Swiper2">
								<view class="business_ImgBox">
									<image src="../../static/shop/business2.png" mode="aspectFit" style="height: 35upx;width: 35upx;margin-top: 6upx;" ></image>
								</view>
								<view>
									<text class="business_Content">
										订单管理
									</text>
								</view>
								<view class="business_2">
									<image src="../../static/shop/you.png" mode="aspectFit" style="height: 35upx;width: 35upx;margin-top: 6upx;" ></image>
								</view>
							</view>
							<view class="business_Swiper1">
									<view class="business_Swiper1_Content">未发货</view>
									<view class="business_Swiper1_Content">已发货</view>
									<view class="business_Swiper1_Content">历史交易</view>
							</view>
							<view class="business_Swiper2">
								<view class="business_ImgBox">
									<image src="../../static/shop/business3.png" mode="aspectFit" style="height: 35upx;width: 35upx;margin-top: 6upx;" ></image>
								</view>
								<view>
									<text class="business_Content">
										在售商品
									</text>
								</view>
								<view class="business_2">
									<image src="../../static/shop/you.png" mode="aspectFit" style="height: 35upx;width: 35upx;margin-top: 6upx;" ></image>
								</view>
							</view>
							<view class="business_3_imgBox" >
								<view class="business_3_img" >
									<image style="width: 100%;height: 200upx;" mode="aspectFit" src="//img14.360buyimg.com/n1/s350x449_jfs/t17647/352/186115440/172588/d95451ee/5a61b87fN1c32ee3e.jpg!cc_350x449.jpg"></image>
								</view>
								<view class="business_3_img">
									<image style="width: 100%;height: 200upx;" mode="aspectFit" src="//img12.360buyimg.com/n1/s350x449_jfs/t1/36137/36/7836/767890/5cc927e8E93a6c023/a50f51cb4f365f79.png!cc_350x449.jpg" ></image>
							    </view>
								<view class="business_3_img">
									<image style="width: 100%;height: 200upx;" mode="aspectFit" src="//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg" ></image>
								</view>
								
							</view>
							
						</swiper-item>
						<swiper-item class="business_Swiper_B">作品</swiper-item>
						<swiper-item class="business_Swiper_B">收藏</swiper-item>
					</swiper>
				</view>
			</view>
			
		</view>
		
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				modalName: "",
				sCur: "trends",
				current: 0 ,
				worksCur: "video",
				height: 0,
				isShow: false,
				videoList:[{
					img: 'url(../../static/img/tou1.jpg)',
					id: '123'
				},{
					img: 'url(../../static/img/tou8.jpg)',
					id: '234'
				},{
					img: 'url(https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=36482708336d55fbd1cb7e740c4b242f/9825bc315c6034a84e00f357c513495408237601.jpg)',
					id: '543'
				},{
					img: 'url(../../static/img/tou3.jpg)',
					id: '435'
				},{
					img: 'url(../../static/img/tou4.jpg)',
					id: '532'
				},{
					img: 'url(../../static/img/tou8.jpg)',
					id: 'aawer'
				},{
					img: 'url(../../static/img/tou6.jpg)',
					id: 'rewd1'
				},{
					img: 'url(../../static/img/tou4.jpg)',
					id: '43gas'
				},{
					img: 'url(../../static/img/tou7.jpg)',
					id: '312arf'
				}]
			}
		},
		created() {
		},
		onShow() {
			uni.setTabBarStyle({
			  color: "#969696",
			  backgroundColor: '#FFFFFF',
			  borderStyle: 'rgba(0,0,0,0.2)',
			  selectedColor: "#D27DF9"
			})
		},
		methods:{
			change(e){
				this.sCur = e.target.dataset.cur;
				if(this.sCur == "trends") {
					this.current = 0
				} else if (this.sCur == "business") {
					this.current = 1
				} else if (this.sCur == "works") {
					this.current = 2
				} else if (this.sCur == "collection"){
					this.current = 3
				}
			},
			currentChange(e){
				if(e.target.current == 0) {
					this.sCur = "trends"
				} else if (e.target.current == 1) {
					this.sCur = "business"
				} else if (e.target.current == 2) {
					this.sCur = "works"
				} else if (e.target.current == 3) {
					this.sCur = "collection"
				}
			},
			goSheZhi(){
				uni.navigateTo({
					url: 'shezhi/shezhi'
				});
			}
		}
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	.backAndMore{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
		height: 55px;
		padding: 0 18px;
		padding-top: var(--status-bar-height);
		display: flex;
		justify-content: space-between;
	}	
	.backIcon,.sortIcon{
		margin-top: 5px;
		font-size: 1.8em;
		color: #FFFFFF;
		position: absolute;
		right: 20upx;
		display: block;
	}
	
	.personBox{
		background-color: #FFFFFF;
		height: 100%;
		font-family: 黑体;
	}
	.headerBackground{
		width: 100%;
		z-index: 0;
	}
	.personContent{
		width: 100%;
		min-height: 530px;
		position: absolute;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		top: 200px;
		background-color: #FFF;
		z-index: 99;
	}
	.personMainInfo{
		height: 110px;
		position: absolute;
		top: -40px;
		width: 100%;
	}
	.personAchievement{
		min-height: 430px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.InfoContentView{	
		flex-direction: row;
	}
	.InfoContentImg{
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: #FFFFFF solid 2px;
	}
	.InfoContent{
		flex: auto;
		height: 90px;
	}
	.firstLine{
		padding-top: 2px;
		height: 40px;
		width: 100%;
		display: flex;
	}
	.personNameView{
		position: relative;
		width: 40%;
		font-size: 34upx;
		color: #333333;
	}
	.secondLine{
		height: 20px;
		width: 100%;
	}
	.secondLineIco{
		margin-left: 0.4em;
		font-size: 16px;
		color: skyblue;
	}
	.secondLineID{
		margin-left: 2px;
		color: #999999;
		font-size: 24upx;
	}
	
	.fhirdLine{
		height: 30px;
		width: 100%;
		position: relative;
		top: -22upx;
	}
	.fhirdLineContent{
		color: #999;
		font-weight: 500;
		font-size: 24upx;
		color: #999999;
		}
	.buttomBox{
		position: relative;
		display: flex;
		color: #1CBBB4;
		top:50px;
		left: 38%;
	}
	.buttomBox1{
		margin-left: 20upx;
		width: 80upx;
		height: 60upx;
		font-size: 24upx;
		color: #1CBBB4;
		border: 1px #1CBBB4 solid;
		padding: 0;
	}
	.buttomBox2{
		margin-left: 20upx;
		width: 130upx;
		height: 60upx;
		font-size: 24upx;
		color: #1CBBB4;
		border: 1px #1CBBB4 solid;
		padding: 0;
	}
	.fiveLine{
		display: flex;
		position: relative;
		top: 5px;
		margin-left: -10px;
	}
	.fiveLineView{
		padding:  20upx;
	}
	.fiveLineContent11{
		font-size: 32upx;
		font-weight: 500;
		font-family: "黑体";
	}
	.fiveLineContent12{
		font-size: 24upx;
		color: #999999;
		padding-left: 10upx;
	}
	.swiper_Box{
		display: flex;
		position: relative;
		top: 70upx;
		font-size: 28upx;
		width: 98%;
	}
	.business_Box{
		width: 25%;
		text-align: center;
	}
	.onChoose{
		border-bottom: 3px inset skyblue;
		color: #1CBBB4;
	}
	.achievementSwiper{
		height: 800upx;
		display: flex;
		position: relative;
		top: 110upx;
		background: #FFFFFF;
		padding: 0 30upx;
	}
	.collection_Swiper{
		width: 100%;
		height: 500upx;
		background: #FFFFFF;
	}
	.business_Img{
		width: 50upx;
	}
	.business_Swiper{
		display: flex;
		padding-bottom: 65upx;
		
	}
	.business_Content{
		font-size: 26upx;
		padding-left: 20upx;
	}
	.business_1{
		font-size: 26upx;
		padding-left: 55%;
	}
	.business_text{
		padding-right: 15upx;
		color: #1CBBB4;
	}
	.business_2{
		font-size: 26upx;
		padding-left: 69%;

	}
	.business_Swiper2{
		display: flex;
		padding-bottom: 28upx;
	}
	.business_Swiper1
	{
		font-size: 24upx;
		color: #666666;
	}
	.business_Swiper1_Content{
		padding-bottom: 28upx;
		padding-left: 50upx;
	}
	.business_3_imgBox{
		width: 100%;
		height: 800upx;
		line-height: 80upx;
		display: flex;
		background: #FFFFFF;
	}
	.business_3_img{
		width: 30%;
		height: 800upx;
		line-height: 80upx;
		padding-right:30upx ;
	}
	.business_Swiper_B{
		height: 800upx;
		background: #FFFFFF;
	}
</style>
