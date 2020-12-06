<template>
	<view class="content" :class="{'active':active}">
		<view class="tabbar-box-wrap">
			<view class="tabbar-box">
					<view class="tabbar-box-item" @click="goToPage('./tabbar-3-detial/tabbar-3-release/tabbar-3-release')">
						<image class="box-image" src="../../static/img/circle.png"></image>
						<text class="explain">发图文</text>
					</view>
					<view class="tabbar-box-item" @click="openAlbum()">
						<image class="box-image" src="../../static/img/sendVideo.png"></image>
						<text class="explain">发视频</text>
					</view>
					<!-- goToPage('./tabbar-3-detial/tabbar-3-video/tabbar-3-video') -->
					<view class="tabbar-box-item" @click="goToPage('./../LoginAndRegister/Login')">
						<image class="box-image" src="../../static/img/ask.png"></image>
						<text class="explain">提问</text>
					</view>
			</view>
		</view>
	</view>
</template> 

<script>
export default {
	data() {
		return {
			active: false,
			src: ""
		};
	},
	onLoad() {},
	onShow() {
		// setTimeout(() => {
		this.active = true;
		// }, 500);
	},
	onHide() {
		this.active = false;
	},
	methods: {
		goToPage(url) {
			if (!url) return;
			uni.navigateTo({
				url
			});
		},
		openAlbum(){

			/* uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
							const videoFilePath = res.tempFilePath
							console.log(videoFilePath)
							uni.navigateTo({
								url: './tabbar-3-detial/tabbar-3-video/tabbar-3-video?path='+videoFilePath
							});
							
							
						}
				});	 */	
							
							/* const uper = uni.uploadFile({
								url: 'http://118.31.74.72:8088/upload/video',
								filePath:videoFilePath,
								name: 'file',
								success: (uploadFileRes) => {
									console.log(uploadFileRes);
								},
								fail:(uploadFileRes)=>{
									console.log(uploadFileRes)
								},
								complete:()=>{
									console.log("123123")
								}
							});
							uper.onProgressUpdate(function(e){
								console.log(e)
							}) */
				
				
					uni.navigateTo({
						url: './tabbar-3-detial/tabbar-3-video/tabbar-3-video'
					});
				
			
		}
	}
};
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	align-items: center;
	justify-content: center;
	/* #ifdef H5 */
	height: calc(100vh - var(--window-bottom) - var(--window-top));
	/* #endif */
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	transition: opacity 0.3s;
	opacity: 0;
	&.active {
		opacity: 1;
	}
}
.tabbar-box-wrap {
	position: absolute;
	width: 100%;
	padding:120upx 35upx;
	box-sizing: border-box;
	bottom: 0;
	left: 0;
	.tabbar-box {
		position: relative;
		background: #fff;
		display: flex;
		border-radius: 20upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 2;
	}
	.tabbar-box-item {
		// position: relative;
		width: 100%;
		z-index: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10upx;
		color: $uni-color-subtitle;
		font-size: $uni-font-size-base;
		.box-image {
			width: 100upx;
			height: 100upx;
		}
		.explain{
			font-size: 0.9em;
			color: #999999;
		}
	}
}
</style>
