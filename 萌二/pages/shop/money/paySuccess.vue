<template>
	<view class="content">
		<text class="success-icon yticon icon-xuanzhong2" ></text>
		<text class="tit">支付成功</text>
		
		<view class="btn-group">
			<navigator url="../order/order" open-type="navigate" class="mix-btn">查看订单</navigator>
			<view open-type="navigate" class="mix-btn hollow" @tap="backHome">返回首页</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			backHome(){
				uni.switchTab({
				    url: '../home'
				});
			}
		}
	}
</script>

<style lang='scss'>
	.content{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.success-icon{
		font-size: 160upx;
		color: #fa436a;
		margin-top: 100upx;
	}
	.tit{
		font-size: 38upx;
		color: #303133;
	}
	.btn-group{
		padding-top: 100upx;
	}
	.mix-btn {
		margin-top: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 600upx;
		height: 80upx;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		&.hollow{
			background: #fff;
			color: #303133;
			border: 1px solid #ccc;
		}
	}
	@font-face {
		font-family: yticon;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf') format('truetype');
	}
	
	.yticon {
		font-family: "yticon" !important;
		font-size: 80px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.icon-xuanzhong2:before {
		content: "\e62f";
	}
	
</style>
