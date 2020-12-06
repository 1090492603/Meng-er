<template>
	<view class="background">
		<view class="navCard">
			<view class="titleNav">
				<view class="title">
					<view>
						<text class="title-name"  @click="goTrendsHome">动态</text>
						<text class="title-circle onCho">圈子</text>	
					</view>
					<view class="searchBox">
						<input class="searchInput" confirm-type="search" placeholder="热门搜索" :class="focus" @focus="InputFocus" @blur="InputBlur"/>
						<text class="search cuIcon-search" @click.stop="search"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="middle">
			<view>
				<text class="myCircle">我的圈子</text>
			</view>
			<view class="myCirecle_list" >
				<view class="myCirecle_box" v-for="(product,index) in CircleList" :key="index">
					<view class="myCircleBox_Boximg">
						<image :src="product.img" class="myCircleBox_img" mode="aspectFill"></image>
					</view>
					<view class="myCirecle_nameBox">
						<view class="myCirecle_name1">
							<text>{{product.name}}</text>
						</view>
						<view class="myCirecle_name2">
							<text>{{product.news}}</text>
						</view>
					</view>
					<view class="time">
						<text>{{product.time}}</text>
					</view>
				</view>
				
				
			</view>
			
		</view>
	</view>
</template>
<script>
	export default {
		data(){
			return {
				CircleList : [
					{img:"../../static/Circle/als1.jpg",name:"#手办#",news:"国劲: 爱丽丝的新手办超级漂亮，想入手",time:"13:33"},
					{img:"../../static/Circle/als2.jpg",name:"#番剧#",news:"劲哥哥：刀剑神域出第三季了哦",time:"13:33"},
					{img:"../../static/Circle/als3.jpg",name:"#COS#",news:"国劲: 亚总桐人的，爱丽丝我们的",time:"16:33"},
					{img:"../../static/Circle/als4.jpg",name:"#汉服#",news:"国劲: 亚总桐人的，爱丽丝我们的",time:"12:33"},
					{img:"../../static/Circle/als2.jpg",name:"#游戏#",news:"国劲: 亚总桐人的，爱丽丝我们的",time:"15:33"},
					{img:"../../static/Circle/als1.jpg",name:"#音乐#",news:"国劲: 亚总桐人的，爱丽丝我们的",time:"14:33"}
				],
			};
		},
		created() {
		},
		onShow(){
			
		},
		methods:{
			goTrendsHome(){
				uni.navigateBack({})
			}
		}
	}
</script>
<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	page{
		background-color: #FFFFFF;
	}
	.navCard{
		background-color: #FFFFFF;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
		box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);
	}
	.titleNav{
		height: 138upx;
		padding-top: var(--status-bar-height);
	}
	.Swiper{
		margin-top: 95px;
	}
	.title{
		height: 100%;
		display: flex;
		justify-content: space-between;
		padding: 0 40upx;
		padding-top: 15upx;
	}
	.search,.title-ico,.title-name,.title-circle{
		font-size: 1.3em;
		font-weight: 800;
	}
	.title-ico,.search{
		padding-top: 9upx;
		font-size: 1.5em;
		font-weight: 200;
	}
	.title-ico{
		
	}
	.title-name{
		color: #E6B8FC;
	}
	.title-circle{
		margin-left: 22upx;
		color: #E6B8FC;
	}
	.onCho{
		border-bottom: 2px solid #000;
		color: #000;
	}
	.searchBox{
		position: relative;
	}
	.search{
		color: #E6B8FC;
		position: absolute;
		right: 20upx;
		top: 0;
	}
	.searchInput{
		width: 380upx;
		height: 60upx;
		padding-left: 30upx;
		border-radius: 30upx;
		background-color: rgba(0,0,0,0.1);
	}
	.myCircle{
		font-size: 35upx;
		font-weight: 600;
		padding-left: 30upx;
	}
	.myCirecle_list{
		display: block;
		position: relative;
		top: 20upx;
		width: 100%;
		height: 100%;
	}
	.myCirecle_box{
		display: flex;
		height: 145upx;
		padding-bottom: 10upx;
		padding-top: 10upx;
		padding-left: 30upx;
		border-top: 2upx solid #E8E8E8;
	}
	.myCircleBox_Boximg{
		height: 115upx;
		width: 115upx;
		padding-right: 20upx;
	}
	.myCircleBox_img{
		height: 100%;
		text-align: center;
	}
	.myCirecle_nameBox{
		width: 70%;
		font-size: 30upx;
	}
	.time{
		position: relative;
		font-size: 20upx;
	}
	.myCirecle_name1{
		padding-top: 5upx;
		padding-bottom: 15upx;
		font-weight: 700;
	}
	.myCirecle_name2{
		color: #D6D6D6;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		text-align: justify;
		overflow: hidden;
		
	}
	.middle{
		position: relative;
		top:150upx
	}
</style>