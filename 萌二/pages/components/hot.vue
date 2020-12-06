<template>
	<scroll-view class="scrollView" scroll-y="true" :style="{height: height-95 + 'px'}" @touchmove="touchmove">
		<view class="rotation">
			<view class="swiperBox">
				<swiper class="swiper" :indicator-dots="true" indicator-active-color="#8E298E" autoplay interval="3000">
					<swiper-item class="swiperItem">
						<image class="swiperItemImg" src="../../static/lunbo1.jpg" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item class="swiperItem">
						<image class="swiperItemImg" src="../../static/lunbo2.jpg" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item class="swiperItem">
						<image class="swiperItemImg" src="../../static/lunbo3.jpg" mode="aspectFill"></image>
					</swiper-item>
					<swiper-item class="swiperItem">
						<image class="swiperItemImg" src="../../static/lunbo4.jpg" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="hot-news-box">
			<view class="hot-news">
				<image src="../../static/base/new.png" class="hot-news-ico"></image>
				<text class="hot-news-title">最新资讯</text>
			</view>
			<block v-for="(item,index) in hotNewsList" :key="index">
				<hotNewCard :title="item.title" :authorName="item.authorName" :authorDate="item.authorDate" 
					:content="item.content" :love="item.love" :com="item.com" :imgSrc="item.imgSrc"></hotNewCard>
			</block>
		</view>
		<recSwiper title="热门推荐" :list="recList"></recSwiper>
		<hotVideo title="热门视频" :list="videoList"></hotVideo>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return{
				height:0,
				focus: false,
				isCard: false,
				InputBottom: 0,
				hotNewsList:[
					{
						title:'【前方高萌】动画中让人萌出血的美少女',
						authorName: '润钊大大',
						authorDate: '2019-10-9',
						content: '重度家里蹲，只要有其他人出现在家中，就绝对不会走出房间。',
						love:1314,
						com: 886,
						imgSrc:'../../static/1.jpg'
					},
					{
						title:'【前方高能】让人百看不厌的动画名场景',
						authorName: '润钊大大',
						authorDate: '2019-10-9',
						content: 'saber咖喱棒，左右横跳，还是鬼灭封神一战？',
						love:1314,
						com: 886,
						imgSrc:'../../static/2.jpg'
					},
					{
						title:'【萝莉控】今天我们一起去漫展吧！',
						authorName: '润钊大大',
						authorDate: '2019-10-9',
						content: '看到了很多的漂亮小姐姐和帅气小哥哥。小江把自己认识的角色都拍了进去！！',
						love:1314,
						com: 9886,
						imgSrc:'../../static/1.jpg'
					},
					{
						title:'【羡慕】男主身边被各种美少女包围',
						authorName: '润钊大大',
						authorDate: '2019-10-9',
						content: '男主身边被各种美少女包围，这几部冒险恋爱番值得一看噢！',
						love:1314,
						com: 886,
						imgSrc:'../../static/4.jpg'
					}
				],
				recList:[
					{src:'../../static/4.jpg'},
					{src:'../../static/1.jpg'},
					{src:'../../static/2.jpg'},
					{src:'../../static/3.jpg'},
					{src:'../../static/4.jpg'},
				],
				videoList:[
					{
						id: '123',
						imgSrc: '../../static/4.jpg'
					},
					{
						id: '123',
						imgSrc: '../../static/1.jpg'
					},
					{
						id: '123',
						imgSrc: '../../static/2.jpg'
					},
					{
						id: '123',
						imgSrc: '../../static/3.jpg'
					},
					{
						id: '123',
						imgSrc: '../../static/4.jpg'
					},
					{
						id: '123',
						imgSrc: '../../static/1.jpg'
					},
					{
						id: '123',
						imgSrc: '../../static/2.jpg'
					}
				]
			}
		},
		created() {
			this.getHeight();
		},
		methods:{
			getHeight(){
					const _that = this;
					uni.getSystemInfo({
					success: function (res) {
						_that.height = res.windowHeight;
					},
					
				});
			},
			IsCard(e) {
				this.isCard = e.detail.value
			},
			goTo(){
				void plus.runtime.openWeb('https://mp.weixin.qq.com/s?__biz=MzU2ODczNjM5OA==&mid=2247484098&idx=1&sn=d8956f674b5500949e555ac3c5c47f38&chksm=fc882d23cbffa4354dbd35532ef025104d4b92ab4398b1de2e50840400bd30823c42cc7907d7&scene=0&xtrack=1&key=54e46c2d26bbf657666da8f476998d386a29f74669379da6486d632a78369e543fe58438101151468a90f18ef57c916e97a43e0f2de8ee3dbc7d980de6cbd55da5326e981b7c026d504de4e5bf0c9f2c&ascene=1&uin=MTE0NjU5MDA3MQ%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=MKJYDBpvtvKopAKB3BA24PaCsQ5GeTth0nDPGTOwl2jH5jCNKmtMZstHsTN1B7wu');
			},
			reply(e){
				this.focus = true
			},
			touchmove(e){
				//console.log(e.cancelable)
			}
		}
	}
</script>

<style>
	.scrollView{
		
		background-color: #FAFAFA;
		
	}
	.rotation{
		height: 350upx;
		padding-top: 20upx;
	}
	.swiperBox{
		width: 750upx;
	}
	.swiperItem{
		width: 750upx;
	}
	.swiperItemImg{
		width: 100%;
		height: 100%;
	}
	.hot-news-box{
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}
	.hot-news,.hot-video-title{
		height: 80upx;
		background-color: #FFF;
		display: flex;
		align-items: center;
		padding: 0 15upx;
	}
	.hot-news-ico,.hot-video-ico{
		width: 48upx;
		height: 48upx;
	}
	.hot-news-title,.hot-video-text{
		font-size: 32upx;
		font-weight: 1000;
		margin-left: 15upx;
	}
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
	.hot-recommend-box{
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
	.hot-video-box{
		background-color: #FFFFFF;
	}
	.hot-video-title{
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
</style>
