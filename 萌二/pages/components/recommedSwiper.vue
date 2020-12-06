<template>
	<view class="hot-recommend-box" @touchmove="touchmove">
		<text class="hot-recommend-title">{{title}}</text>
		<swiper class="hot-recommend-swiper" display-multiple-items="3.5">
			<block v-for="(item,index) in list" :key="index">
				<swiper-item class="hot-recommend-item">
					<image class="hot-recommend-img" mode="aspectFill" :src="item.src"></image>
				</swiper-item>
			</block>
		</swiper>
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
			touchmove(){
			}
		}
	}
</script>

<style>
	.hot-recommend-box{
		touch-action: none;
		height: 350upx;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
		padding: 20upx 0;
	}
	.hot-recommend-title{
		font-size: 32upx;
		padding: 0 30upx;
		font-weight: 600;
	}
	.hot-recommend-swiper{
		margin-top: 10upx;
		padding-left: 34upx;
		height: 240upx;
	}
	.hot-recommend-item{
	}
	.hot-recommend-img{
		width: 175upx;
		height: 240upx;
	}
</style>
