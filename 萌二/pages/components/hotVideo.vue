<template>
	<view class="hot-video-box">
		<view class="hot-video-title">
			<image class="hot-video-ico" src="../../static/base/video.png"></image>
			<text class="hot-video-text">{{title}}</text>
		</view>
		<view class="hot-video-content">
			<block v-for="(item,index) in list" :key="index">
				<view class="hot-video-item">
					<image class="hot-video-img" mode="aspectFill" :src="item.imgSrc"></image>
				</view>
			</block>
			
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
			list:{
				type:Array
			}
		},
		methods:{
		}
	}
</script>

<style>
	.hot-video-box{
		background-color: #FFFFFF;
	}
	.hot-video-title{
		padding: 0 15upx;
		height: 80upx;
		background-color: #FFF;
		display: flex;
		align-items: center;
		padding: 0 15upx;
	}
	.hot-video-content{
		padding: 0 24upx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.hot-video-item{
		width: 340upx;
		height: 506upx;
		margin-bottom: 24upx;
	}
	.hot-video-ico{
		width: 48upx;
		height: 48upx;
	}
	.hot-video-text{
		font-size: 32upx;
		font-weight: 1000;
		margin-left: 15upx;
	}
</style>
