<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<text class="price">38.88</text>
		</view>

		<view class="pay-type-list">

			<view class="type-item b-b" @click="changePayType(1)">
				<text class="icon yticon icon-weixinzhifu"></text>
				<view class="con">
					<text class="tit">微信支付</text>
					<text>推荐使用微信支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 1' />
					</radio>
				</label>
			</view>
			<view class="type-item b-b" @click="changePayType(2)">
				<text class="icon yticon icon-alipay"></text>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 2' />
					</radio>
				</label>
			</view>
			<view class="type-item" @click="changePayType(3)">
				<text class="icon yticon icon-erjiye-yucunkuan"></text>
				<view class="con">
					<text class="tit">预存款支付</text>
					<text>可用余额 ¥198.5</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 3' />
					</radio>
				</label>
			</view>
		</view>
		
		<text class="mix-btn" @click="confirm">确认支付</text>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				payType: 1,
				orderInfo: {}
			};
		},
		computed: {
		
		},
		onLoad(options) {
			
		},

		methods: {
			//选择支付方式
			changePayType(type) {
				this.payType = type;
			},
			//确认支付
			confirm: async function() {
				uni.redirectTo({
					url: '/pages/shop/money/paySuccess'
				})
			},
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
	}

	.price-box {
		background-color: #fff;
		height: 265upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #909399;

		.price{
			font-size: 50upx;
			color: #303133;
			margin-top: 12upx;
			&:before{
				content: '￥';
				font-size: 40upx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20upx;
		background-color: #fff;
		padding-left: 60upx;
		
		.type-item{
			height: 120upx;
			padding: 20upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60upx;
			font-size: 30upx;
			position:relative;
		}
		
		.icon{
			width: 100upx;
			font-size: 52upx;
		}
		.icon-erjiye-yucunkuan {
			color: #fe8e2e;
		}
		.icon-weixinzhifu {
			color: #36cb59;
		}
		.icon-alipay {
			color: #01aaef;
		}
		.tit{
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 4upx;
		}
		.con{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}
	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630upx;
		height: 80upx;
		margin: 80upx auto 30upx;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
				@font-face {
		font-family: yticon;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf') format('truetype');
	}
	
	.yticon {
		font-family: "yticon" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.icon-yiguoqi1:before {
		content: "\e700";
	}
	
	.icon-iconfontshanchu1:before {
		content: "\e619";
	}
	
	.icon-iconfontweixin:before {
		content: "\e611";
	}
	
	.icon-alipay:before {
		content: "\e636";
	}
	
	.icon-shang:before {
		content: "\e624";
	}
	
	.icon-shouye:before {
		content: "\e626";
	}
	
	.icon-shanchu4:before {
		content: "\e622";
	}
	
	.icon-xiaoxi:before {
		content: "\e618";
	}
	
	.icon-jiantour-copy:before {
		content: "\e600";
	}
	
	.icon-fenxiang2:before {
		content: "\e61e";
	}
	
	.icon-pingjia:before {
		content: "\e67b";
	}
	
	.icon-icon-test:before {
		content: "\e60c";
	}
	
	.icon-icon-test1:before {
		content: "\e632";
	}
	
	.icon-bianji:before {
		content: "\e646";
	}
	
	.icon-jiazailoading-A:before {
		content: "\e8fc";
	}
	
	.icon-zuoshang:before {
		content: "\e613";
	}
	
	.icon-jia2:before {
		content: "\e60a";
	}
	
	.icon-huifu:before {
		content: "\e68b";
	}
	
	.icon-sousuo:before {
		content: "\e7ce";
	}
	
	.icon-arrow-fine-up:before {
		content: "\e601";
	}
	
	.icon-hot:before {
		content: "\e60e";
	}
	
	.icon-lishijilu:before {
		content: "\e6b9";
	}
	
	.icon-zhengxinchaxun-zhifubaoceping-:before {
		content: "\e616";
	}
	
	.icon-naozhong:before {
		content: "\e64a";
	}
	
	.icon-xiatubiao--copy:before {
		content: "\e608";
	}
	
	.icon-shoucang_xuanzhongzhuangtai:before {
		content: "\e6a9";
	}
	
	.icon-jia1:before {
		content: "\e61c";
	}
	
	.icon-bangzhu1:before {
		content: "\e63d";
	}
	
	.icon-arrow-left-bottom:before {
		content: "\e602";
	}
	
	.icon-arrow-right-bottom:before {
		content: "\e603";
	}
	
	.icon-arrow-left-top:before {
		content: "\e604";
	}
	
	.icon-icon--:before {
		content: "\e744";
	}
	
	.icon-zuojiantou-up:before {
		content: "\e605";
	}
	
	.icon-xia:before {
		content: "\e62d";
	}
	
	.icon--jianhao:before {
		content: "\e60b";
	}
	
	.icon-weixinzhifu:before {
		content: "\e61a";
	}
	
	.icon-weixin:before {
		content: "\e61f";
	}
	
	.icon-fenlei1:before {
		content: "\e620";
	}
	
	.icon-erjiye-yucunkuan:before {
		content: "\e623";
	}
	
	.icon-Group-:before {
		content: "\e688";
	}
	
	.icon-you:before {
		content: "\e606";
	}
	
	.icon-forward:before {
		content: "\e607";
	}
	
	.icon-tuijian:before {
		content: "\e610";
	}
	
	.icon-bangzhu:before {
		content: "\e679";
	}
	
	.icon-share:before {
		content: "\e656";
	}
	
	.icon-yiguoqi:before {
		content: "\e997";
	}
	
	.icon-shezhi1:before {
		content: "\e61d";
	}
	
	.icon-fork:before {
		content: "\e61b";
	}
	
	.icon-kafei:before {
		content: "\e66a";
	}
	
	.icon-iLinkapp-:before {
		content: "\e654";
	}
	
	.icon-saomiao:before {
		content: "\e60d";
	}
	

</style>
