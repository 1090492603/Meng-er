<template>
	<view class="background">
		<view class="navCard">
			<view class="titleNav">
				<view class="title">
					<view>
						<text class="title-name onCho">动态</text>
						<text class="title-circle" @click="goCircle">圈子</text>	
					</view>
					<view class="searchBox">
						<input class="searchInput" confirm-type="search" placeholder="热门搜索" :class="focus" @focus="InputFocus" @blur="InputBlur"/>
						<text class="search cuIcon-search" @click.stop="search"></text>
					</view>
				</view>
			</view>
			<view class="Nav">
				<scroll-view scroll-x="true" class="chooseCard">
				<view class="Nav-view">
					<view class="item" @click="onclick" :class="sCur=='hot'?'select':''" data-cur="hot">热门</view>
					<view class="item" @click="onclick" :class="sCur=='Focus'?'select':''" data-cur="Focus">关注</view>
					<view class="cos" @click="onclick" :class="sCur=='cos'?'select':''" data-cur="cos">COS</view>
					<view class="item" @click="onclick" :class="sCur=='game'?'select':''" data-cur="game">游戏</view>
					<view class="item" @click="onclick" :class="sCur=='weblio'?'select':''" data-cur="weblio">番剧</view>
					<view class="item" @click="onclick" :class="sCur=='music'?'select':''" data-cur="music">音乐</view>
					<view class="item" @click="onclick" :class="sCur=='figurine'?'select':''" data-cur="figurine">手办</view>
				</view>
				</scroll-view>
				<image src="../../static/base/add.png" class="addIco"></image>
			</view>
		</view>
		<swiper class="Swiper" circular="true" :current="current" @change="change" :style="{height: height-95 + 'px'}">
			<swiper-item>
				<hot></hot>
			</swiper-item>
			<swiper-item>
				<trendScrollView></trendScrollView>
			</swiper-item>
			<swiper-item>
				<trendScrollView></trendScrollView>
			</swiper-item>
			<swiper-item>
				<trendScrollView></trendScrollView>
			</swiper-item>
		</swiper>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				current: 0,
				height: 0,
				sCur: "hot",
				focus: ''
			};
		},
		created() {
			
			this.getHeight();
		},
		onShow(){
			// 用这个api可以动态修改 tabbar
			uni.setTabBarStyle({
			  color: "#969696",
			  backgroundColor: '#FFF',
			  borderStyle: 'rgba(0,0,0,0.2)',
			  selectedColor: "#79F3FE"
			})
		},
		methods: {
			getHeight(){
					const _that = this;
					uni.getSystemInfo({
					success: function (res) {
						_that.height = res.windowHeight;
					},
					
				});
			},
			onclick(e){
				this.sCur = e.target.dataset.cur
				if(this.sCur == "hot") {
					this.current = 0
				} else if(this.sCur == "Focus") {
					this.current = 1
				} else if(this.sCur == "cos") {
					this.current = 2
				} else if(this.sCur == "game") {
					this.current = 3
				}
			},
			change(e){
				if(e.target.current == 0) {
					this.sCur = "hot"
				} else if (e.target.current == 1) {
					this.sCur = "Focus"
				} else if (e.target.current == 2) {
					this.sCur = "cos"
				} else if (e.target.current == 3) {
					this.sCur = "game"
				}
			},
			search(e){
				uni.navigateTo({
					url: './../index/search?id=1'
				});
			},
			InputFocus(e) {
				console.log("123")
				this.focus = 'onFocus'
			},
			InputBlur(e) {
				this.focus = 'lostFocus'
			},
			goCircle(e)
			{
				uni.navigateTo({
					url:'InterestCircle'
				})
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
	.onFocus{
		animation: beLong  0.5s;
		animation-fill-mode:forwards;
	}
	.lostFocus{
		animation: beShort  0.5s;
		animation-fill-mode:forwards;
	}
	.chooseCard{
		padding-left: 45upx;
		height: 60upx;
		width: 678upx;
		
	}
	.Nav-view{
		display: flex;
		padding-top: 0.2em;
	}
	
	.item,.cos{
		width: 86upx;
		height: 46upx;
		font-size: 1em;
		padding: 5upx 10upx;
		text-align: center;
		/* 这个连我也不知道什么意思 使用它可以用来填充满余下的控件 */
		border-radius: 10px;
		flex: 1 0 auto;
		color: #999999;
	}
	.addIco{
		margin-top: 7upx;
		width: 46upx;
		height: 46upx;
	}
	.cos{
		padding-top: 10upx;
	}
	.Nav{
		display: flex;
		flex-direction: row;
	}
	.select{
		background-color: #B0C5FF;
		color: #FFF;
	}
	.inputBox{
		height: 10px;
		width: 100%;
	}
	.bgc{
		background-color: #FFF;
		height: 30px;
	}
	@keyframes beLong{
		from{
			width: 380upx;
		}
		to{
			width: 475upx;
		}
	}
	@keyframes beShort{
		from{
			width: 475upx;
		}
		to{
			width: 380upx;
		}
	}
</style>
