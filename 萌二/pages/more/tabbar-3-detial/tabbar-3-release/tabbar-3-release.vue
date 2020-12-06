<template>
	<view>
		<view class="release-content">
			<view class="backAndMore">
				<text class="cuIcon-back backIcon" @click="goBack"></text>
				<text class="release-title"> 图文创作 </text>
				<view class="sortIcon-view">
					<view class="sortIcon">发布</view>
				</view>
			</view>
			<view>
				<view>
					<input placeholder="输入标题" class="releaseTitle"></input>
					<textarea placeholder="创作内容" class="releaseContent" maxlength="-1"></textarea>
				</view>
				<view class="chooseImg">
						<!-- <image :src="item.url" class="addImgBtn" @tap="previewImg"></image> -->
						<robby-image-upload @input="getList" :value="List" limit="9"></robby-image-upload>
				</view>
			</view>
		</view>
		<view class="release-tag">
			<view class="release-title-l">添加标签</view>
			<view class="release-tag-content">
				<block v-for="(item,index) in tagList" :key="index">
					<view class="release-tag-item" :class="item.isChoose?'tag-onChoose':'tap-lostChoose'" @tap="onTap(index)">
						<view>{{item.tagName}}</view>
						<view v-if="item.isChoose" class="release-delete">
							<view>x</view>
						</view>
					</view>
				</block>
			</view>
			<view class="more">
				<text><text class="more-text">更多标签</text><text class="cuIcon-right"></text></text>
			</view>
		</view>
		<view class="empower">
			<view class="release-title-ll">作品授权</view>
			<view class="empower-content">
				<!-- :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
				 value="C" -->
				 <view class="empowerBox" @tap="empowerCheckTap">
					<checkbox class='round blue empower-checkBox' :checked="empowerCheck"></checkbox><text class="empower-text">未经作者授权禁止转载</text>
				 </view>
				 <view class="empowerBox" @tap="astrictCheckTap">
				 	<checkbox class='round blue empower-checkBox' :checked="astrictCheck"></checkbox><text class="empower-text">不限作品</text>
				 </view>
				
			</view>
		</view>
		
	</view>
	
</template>

<script>
	import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue'
	export default {
		components: {robbyImageUpload},
		data() {
			return {
				List: [],
				tagList: [
					{tagName: '日常', isChoose: false},
					{tagName: 'COS', isChoose: false},
					{tagName: '番剧', isChoose: false},
					{tagName: 'mmd', isChoose: false},
					{tagName: '手办', isChoose: false},
					{tagName: '游戏', isChoose: false},
					{tagName: '哲学', isChoose: false},
					{tagName: '王之力', isChoose: false},
				],
				color: '#1B98B3',
				empowerCheck: true,
				astrictCheck: false
				
			}
		},
		onLoad() {

		},
		watch:{
			List(news,old){
				console.log(news)
			}
		},
		methods: {
			goBack(e){
				uni.navigateBack({
				    delta: 1
				});
			},
			previewImg(e){
				var _that = this
				var list = []
				
			},
			getList(data){
				this.List = data
			},
			onTap(index){
				console.log(index)
				this.tagList[index].isChoose = !this.tagList[index].isChoose
			},
			empowerCheckTap(){
				this.empowerCheck = !this.empowerCheck
			},
			astrictCheckTap(){
				this.astrictCheck = !this.astrictCheck
			}
		}
	}
</script>

<style>
	@import "../../../../colorui/main.css";
	@import "../../../../colorui/icon.css";
	page{
		background: #FFFFFF;
	}
	.backAndMore{
		width: 100%;
		z-index: 999;
		height: 135upx;
		padding: 0 10px 0 10px;
		padding-top: var(--status-bar-height);
		display: flex;
		justify-content: space-between;
	}
	.backIcon{
		padding-left: 8px;
		margin-top: 5px;
		font-size: 1.8em;
		flex: 1;
		color: #999;
	}
	.release-title{
		margin-top: 5px;
		color: #999;
		font-size: 1.2em;
		flex: 2;
		text-align: center;
	}
	.release-content{
		padding-bottom: 20upx;
	}
	.sortIcon-view{
		flex: 1;
		text-align: right;
		display: flex;
		justify-content: flex-end;
	}
	.sortIcon{
		margin-top: 7upx;
		font-size:28upx;
		padding: 8upx 25upx;
		margin-right: 10upx;
		border-radius: 10upx;
		color: #FFF;
		height: 55upx;
		background-color: #79F3FE;
	}
	.releaseTitle{
		margin-top: 40upx;
		padding: 0 35upx;
		font-size: 1.1em;
		height: 80upx;
		width: 100%;
		border-bottom: 1px solid rgba(0,0,0,0.1);
	}
	.releaseContent{
		width: 100%;
		min-height: 300upx;
		padding: 35upx;
	}
	.chooseImg{
		display: flex;
	}
	.addImgBtn{
		margin-bottom: 10upx;
		width: 220upx;
		height: 220upx;
	}
	.addImgBtn:nth-of-type(2n){
		margin: 0 10upx;
	}
	.release-tag,.empower{
		border-top: 20upx solid #F1F1F1;
		padding: 30upx 20upx;
	}
	.release-title-l,.release-title-ll{
		font-weight: 800;
		padding-bottom: 30upx;
		font-size: 1.1em;
	}
	.release-title-ll{
		padding-bottom: 10upx;
	}
	.release-tag-content{
		padding: 0 10upx;
		display: flex;
		flex-wrap: wrap;
	}
	.release-tag-item{
		margin: 0 5px;
		width: 57px;
		height: 32px;
		display: flex;
		border-radius: 20px;
		border: 1px solid #1B9BB3;
		align-items: center;
		justify-content: center;
		background-color: #FAFAFA;
		position: relative;
		margin-bottom: 20upx;
	}
	.release-delete{
		position: absolute;
		width: 20px;
		height: 20px;
		right: -5px;
		top: -7px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1em;
		color: #FFF;
		border-radius: 50%;
		background-color: #1B98B3;
	}
	.tag-onChoose{
		animation: ontap 0.3s;
		animation-fill-mode:forwards;
	}
	.tap-lostChoose{
		animation: outtap 0.3s;
		animation-fill-mode:forwards;
	}
	.more{
		display: flex;
		justify-content: flex-end;
		padding: 0 35upx;
		font-size: 1.1em;
		color: #999999;
	}
	.more-text{
		margin-right: 3px;
	}
	.empower{
	}
	.empowerBox{
		display: flex;
		align-items: center;
		font-size: 0.9em;
	}
	.empower-text{
		margin-left: 5px;
		color: #999999;
	}
	.empower-content{
		font-size: 1.2em;
		padding: 10upx;
	}
	.empower-checkBox{
		transform: scale(0.8);
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
