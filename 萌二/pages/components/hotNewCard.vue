<template>
	<view class="hot-news-card">
		<view>
			<text class="hot-news-card-title">
				{{title}}
			</text>
			<view class="hot-news-card-author">
				<text class="hot-news-card-authorName">@{{authorName}}</text>
				<text class="hot-news-card-authorDate">{{authorDate}}</text>
			</view>
			<view class="hot-news-card-content">
				{{content}}
			</view>
			<view class="hot-news-card-LoveAndCom">
				<view class="hot-news-card-view">
					<image class="hot-news-card-love" src="../../static/base/Love.png"></image>
					<text class="hot-news-card-LoveAndCom-num">{{love}}</text>
				</view>
				<view class="hot-news-card-view">
					<image class="hot-news-card-com" src="../../static/base/Love.png"></image>
					<text class="hot-news-card-LoveAndCom-num">{{com}}</text>
				</view>
			</view>
		</view>
		<view>
			<image class="hot-news-card-img" mode="aspectFill" :src="imgSrc"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:''
			},
			authorName:{
				type:String,
				default:''
			},
			authorDate:{
				type:String,
				default:''
			},
			content:{
				type:String,
				default:''
			},
			love:{
				type:Number,
				default:0
			},
			com:{
				type:Number,
				default:0
			},
			imgSrc:{
				type:String,
				default:''
			}
		},
	}
</script>

<style>
	.hot-news-card{
		display: flex;
		justify-content: space-between;
		height: 240upx;
		padding: 20upx 25upx;
		border-top: 1px solid rgba(255,0,0,0.1);
	}
	.hot-news-card-title{
		font-size: 28upx;
		font-weight: 700;
	}
	.hot-news-card-author{
		display: flex;
		align-items: flex-end;
	}
	.hot-news-card-authorName,.hot-news-card-authorDate{
		font-size: 20upx;
		color: #ccc;
	}
	.hot-news-card-authorDate{
		margin-left: 20upx;
	}
	.hot-news-card-content{
		padding-top: 20upx;
		font-size: 24upx;
		height: 90upx;
		width: 430upx;
		color: #999999;
	}
	.hot-news-card-LoveAndCom{
		display: flex;
		margin-top: 15upx;
		width: 400upx;
		color: #ccc;
		font-size: 20upx;
	}
	.hot-news-card-love,.hot-news-card-com{
		width: 36upx;
		height: 36upx;
		
	}
	.hot-news-card-view{
		flex: 1;
		display: flex;
		align-items: center;
	}
	.hot-news-card-LoveAndCom-num{
		padding-top: 7upx;
		margin-left: 10upx;
	}
	.hot-news-card-img{
		width: 200upx;
		height: 200upx;
	}
</style>
