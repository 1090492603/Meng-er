<template>
	<view style="background-color: #F2F2F2;height: 100%;">
		<view class="header" @tap="goback()">
			<image class="back" src="../../../static/ShopIcon/fanhuijiantou.png" ></image>
			<view class="backtext">返回</view>
		</view>
		<view class="user">
			<view class="useimgs">
				<image class="userimg" src="../../../static/img/tou1.jpg"></image>
			</view>
			<view class="username">劲哥</view>
		</view>
		<view class="order">
			<view class="orderbox">
				<view class="boximg">
					<image src="../../../static/ShopIcon/dingdan.png" class="orderimg" style="margin-left: 17%;"></image>
				</view>
					<view>我的订单</view>
			</view>
			<view class="orderbox">
				<view class="boximg">
					<image src="../../../static/ShopIcon/daifukuan.png" class="orderimg" style="margin-left: 13%;"></image>
				</view>
					<view>待付款</view>
			</view>
			<view class="orderbox">
				<view class="boximg">
					<image src="../../../static/ShopIcon/daishouhuo.png" class="orderimg" style="margin-left: 13%;"></image>
				</view>
					<view>待收货</view>
			</view>
			<view class="orderbox">
				<view class="boximg">
					<image src="../../../static/ShopIcon/liulanlishi.png" class="orderimg"></image>
				</view>
					<view>足迹</view>
			</view>
			<view class="orderbox">
				<view class="boximg">
					<image src="../../../static/ShopIcon/pingjia.png" class="orderimg"></image>
				</view>
					<view>评价</view>
			</view>
		</view>
		<view class="bigbox">
			<view class="boxfont">管理</view>
			<view class="content">
				<view class="boxcontent">
					
					<view class="imgbox">
						<view class="">
							<image class="contentImg" src="../../../static/ShopIcon/tuikuan.png" style="margin-left: 15%;"></image>
						</view>
						<view>退款售后</view>
					</view>
					<view class="imgbox">
						<view class="">
							<image class="contentImg" src="../../../static/ShopIcon/guanzhudianpu.png" style="margin-left: 15%;"></image>
						</view>
						<view>关注店铺</view>
					</view>
					<view class="imgbox">
						<view class="">
							<image class="contentImg" src="../../../static/ShopIcon/shoucang.png"></image>
						</view>
						<view>收藏</view>
					</view>
					<view class="imgbox">
						<view>
							<image class="contentImg" src="../../../static/ShopIcon/dizhi.png"></image>
						</view>
						<view>地址</view>
					</view>
				</view>
			</view>
			<view class="content">
				<view class="boxcontent">
					<view class="imgbox">
						<view class="">
							<image class="contentImg" src="../../../static/ShopIcon/qiaquanhexiao.png" style="margin-left: 15%;"></image>
						</view>
						<view>红包卡劵</view>
					</view>
					<view class="imgbox">
						<view class="">
							<image class="contentImg" src="../../../static/ShopIcon/wentifankui.png" style="margin-left: 15%;"></image>
						</view>
						<view>问题反馈</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
export default {
components: {
				MescrollUni
			},
	data() {
		return {
		}
	},
	onReady() {

	}, 
	onShow() {
	},
	onPageScroll(){
	},
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
    },
	onLoad() {
	},
	methods: {
		goback(){
			uni.navigateBack();
		},
	}
};
</script>

<style>
	.header{
		display: flex;
		flex-direction: row;
		background-color: #05f4fd;
		height: 90upx;
		padding-top: 50upx;
	}
	.backtext{
		padding-left: 5upx;
		color: #FFFFFF;
		font-size: 30upx;
	}
	.back{
		height: 45upx;
		width: 45upx;

	}
	.user{
		display: flex;
		flex-direction: row;
		background-color: #05f4fd;
		height: 300upx;
		border-bottom-right-radius: 12%;
		border-bottom-left-radius: 12%;
	}
	.useimgs{
		padding-left: 20upx;
		padding-top: 15upx;
	}
	.userimg{
		height: 128upx;
		width: 128upx;
		border: 5upx solid #05f4fd ;
		border-radius: 100%;
		}
	.username{
		font-size: 40upx;
		padding-left: 30upx;
		padding-top: 45upx;
		color: #F8F6FC;
	}
	.order{
		width: 94%;
		height: 115upx;
		background-color: #FFFFFF;
		margin: -100upx 3% 0 3%;
		padding: 6% 0 0 0;
		display: flex;
		flex-direction: row;
		border-radius: 15px;
		border: 1upx solid #FFFFFF ;
		font-size: 22upx;
		box-shadow: 0 3px 5px -3px #333333;
	}
	.orderbox{
		padding: 0 0 0 9.3%;
	}
	.orderimg
	{
		width: 48upx;
		height: 48upx;
	}
	.bigbox{
		margin: 5% 3% 0 3%;
		width: 94%;
		height: 400upx;
		background-color: #FFFFFF;
	}
	.boxfont{
		font-weight: 600;
		font-size: 35upx;
		display: block;
		padding: 5% 0 0 2%;
		border: solid 3.5upx #e9e9e9;
	}
	.content{
		padding: 6% 0 0 7%;
		display: flex;
		flex-direction: row;
	}
	.boxcontent{
		height: 80upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		font-size: 22upx;
	}
	.imgbox{
		height: 60upx;
		width: 20%;
		margin:  0 5% 0 0;
		justify-content: center;
		align-items: center;
	}
	.contentImg{
		width: 48upx;
		height: 48upx;
		justify-content: center;
		align-items: center;
		display: flex;
	}
</style>
