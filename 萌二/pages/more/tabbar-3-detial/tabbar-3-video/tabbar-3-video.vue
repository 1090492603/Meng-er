<template>
	<view>
		<view class="giveUp">
			<text @click="giveUp">放弃上传</text>
		</view>
		<view class="AllBox"> 
			<template v-if="!src">
				<view class="chooseVideo" @tap="chooseVideo">
					<text class="chooseVideoText">+ 添加视频</text>
				</view>
			</template>
			<template v-else>
				<view class="publsh-video-box">
					<video :src="src" :autoplay="true" class="video"></video>
				</view>
			</template>
			<view class="briefInfo">
				<text class="briefInfo-title">简介</text>
				<textarea class="briefInfo-text" placeholder="请填写视频简介"></textarea>
				<view class="wordNum">0/180</view>
			</view>
			<view class="video-Tag">
				<text class="video-Tag-title">标签</text>
				<view class="video-Tag-content">
					<block v-for="(item,index) in tagList" :key="index">
						<view class="video-Tag-Item" @tap="onTap(index)" :class="item.isChoose?'tag-onChoose':'tap-lostChoose'">
							<text class="Tag-name">{{item.tagName}}</text>
							<view class="Tag-delete" v-if="item.isChoose">
								<view>x</view>
							</view>
						</view>
					</block>
				</view>
				<text class="cuIcon-right next"></text>
			</view>
		</view>
		<view class="submit-video">
			<view class="submit-video-btn">
				<text>上 传</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				height: 0,
				width: 0,
				src: "",
				tagList:[{
					tagName: '日常',
					isChoose: true
				},
				{
					tagName: '动漫',
					isChoose: false
				},
				{
					tagName: '番剧',
					isChoose: true
				},
				{
					tagName: '游戏',
					isChoose: false
				}]
			}
		},
		mounted(){
			this.width = uni.getSystemInfoSync().windowWidth*0.6 + "px"
			this.height = uni.getSystemInfoSync().windowHeight *0.6 + "px"
		},
		/* onLoad(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.path); //打印出上个页面传递的参数。
			this.src = option.path
			this.$forceUpdate()
		}, */
		methods: {
			chooseVideo(){
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: (res) => {
						this.src = res.tempFilePath
						
					}
				})
			},
			giveUp(){
				uni.navigateBack({
				    delta: 1
				});
			},
			onTap(index){
				this.tagList[index].isChoose = !this.tagList[index].isChoose
			}
		}
	}
</script>

<style>
	@import "../../../../colorui/main.css";
	@import "../../../../colorui/icon.css";
	page{
		background-color: #FFFFFF;
	}
	.giveUp{
		background-color: #FFFFFF;
		padding:10upx 30upx;
		font-size: 28upx;
		font-weight: 700;
		color: #de73de;
		text-align: right;
		padding-top: var(--status-bar-height);
		margin-top: 20upx;
	}
	.AllBox{
		background-color: #FFFFFF;
	}
	.chooseVideo{
		background-color: #F1F1F1;
		height: 640upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.chooseVideoText{
		font-size: 1em;
		color: #999999;
		
	}
	.publsh-video-box{
		display: flex;
		justify-content: center;
	}
	.video{
		width: 100%;
		height: 640upx;
		background-color: #1B98B3;
	}
	.briefInfo{
		width: 92%;
		height: 275upx;
		margin: 0 auto;
		box-sizing:border-box;
		padding: 0 10upx;
		margin-top: 40upx;
		border-top: 1px solid rgba(3,3,3,0.1);
		border-bottom: 1px solid rgba(3,3,3,0.1);
		display: flex;
		position: relative;
	}
	.video-Tag-title,.briefInfo-title{
		width: 4em;
		color: #333333;
		font-size: 32upx;
		font-family: 微软雅黑;
		font-weight: 700;
	}
	.briefInfo-title{
		line-height: 32upx;
		padding-top: 25upx;
	}
	.briefInfo-text{
		font-size: 28upx;
		color: #999999;
		box-sizing: border-box;
		padding: 27upx 10upx 10upx 10upx;
		height: 225upx;
	}
	.wordNum{
		position: absolute;
		font-size: 28upx;
		color: #999999;
		bottom: 15upx;
		right: 20upx;
	}
	.video-Tag{
		height: 88upx;
		width: 92%;
		box-sizing: border-box;
		padding: 0 10upx;
		margin: 0 auto;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		display: flex;
		align-items: center;
		display: flex;
		
	}
	.video-Tag-content{
		width: 100%;
		padding: 0 10upx;
		display: flex;
		flex-flow: row;
		align-items: center;
	}
	.video-Tag-Item{
		width: 100upx;
		border-radius: 50upx;
		font-size: 26upx;
		margin-right: 15upx;
		border: 1px solid #B3FAFE;
		height: 55upx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.Tag-delete{
		border-radius: 50%;
		font-size: 22upx;
		width: 30upx;
		height: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: -7upx;
		right: -5upx;
		color: #FFFFFF;
		background-color: #1B98B3;
	}
	.Tag-name{
		line-height: 28upx;
		color: #de73de;
	}
	.next{
		color: #999999;
		font-size: 32upx;
	}
	.submit-video{
		width: 100%;
		height: 80upx;
		position: absolute;
		bottom: 100upx;
	}
	.submit-video-btn{
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 34upx;
		background-color: #de73de;
		border-radius: 50upx;
		width: 180upx;
		height: 70upx;
		margin: 0 auto;
	}
	.tag-onChoose{
		animation: ontap 0.3s;
		animation-fill-mode:forwards;
	}
	.tap-lostChoose{
		animation: outtap 0.3s;
		animation-fill-mode:forwards;
	}
	@keyframes ontap{
		from{
			background-color: #FAFAFA;
		}
		to{
			background-color: #B3FAFE;
		}
	}
	@keyframes outtap{
		from{
			background-color: #B3FAFE;
		}
		to{
			background-color: #FAFAFA;
		}
	}
</style>
