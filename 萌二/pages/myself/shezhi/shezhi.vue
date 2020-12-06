<template>
	<view class="body">
		<view class="head">
			<view class="headBack" @click="goback">
				<image style="width: 100%;" mode="widthFix" src="../../../static/myself/shezhi/back.png"></image>
			</view>
			<view class="headText">设置</view>
		</view>
		<view class="zhanWei"></view>
		<view>
			<view class="midBox" v-for="(item,index) in midTextList" :key="index">
				<view class="midText">{{item.name}}</view>
				<view class="forward">
					<image style="width: 100%;" mode="widthFix" src="../../../static/myself/shezhi/forward.png"></image>
				</view>
			</view>
		</view>
		<view class="btnBox">
			<text class="btntext">退出登陆</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				midTextList : [
					{
						name : "账号与安全"
					},
					{
						name : "隐私设置"
					},
					{
						name : "通知设置"
					},
					{
						name : "动态壁纸"
					},
					{
						name : "用户协议"
					},
					{
						name : "圈子公约"
					},
					{
						name : "隐私政策"
					},
					{
						name : "关于萌二"
					},
					{
						name : "反馈与帮助"
					},
					{
						name : "清理缓存"
					},
				]
			}
		},
		methods: {
			goback(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
.body{
	font-family: "黑体";
	padding: 0;
	margin: 0;
}
.head{
	display: flex;
	position: absolute;
	top: 0;
	width: 96.7%;
	padding: 40upx 0 20upx 20upx;
	background: #FFFFFF;
}
.headBack{
	width: 39upx;
	height: 39upx;
}
.headText{
	padding-left: 38%;
	font-size: 38upx;
	font-weight: 500;
}
.zhanWei{
	background:  #EFF4FF;
	height: 120upx;
}
.midBox{
	display: flex;
	padding: 30upx 0 30upx 15upx;
}
.forward{
	position: fixed;
	right: 30upx;
	width: 40upx;
	height: 40upx;
}
.midText{
	font-size: 28upx;
	font-weight: 400;
	color: #333333;
}
.btnBox{
	width: 250upx;
	height: 80upx;
	background: #32B9d6;
	margin: 40upx 0 0 37%;
	border-radius: 40upx;
}
.btntext{
	position: relative;
	top: 20%;
	left: 20%;
	color: #FFFFFF;	
	width: 100%;
}
</style>
