<template>
	<view class="personBox">
		<view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="" :style="[{top:0+'px',height:height+ 'px',width: 600+'upx'}]">

				<scroll-view scroll-y="true" class="modalScrollView">
					<view>
						<view class="modalAuthodView">
							<image class="modalAuthodViewImg" src="../../static/img/tou4.jpg"></image>
							<view class="modalAuthodNameAndId">
								<view class="modalAuthodName">超级大骚包</view>
								<view class="modalAuthodId">ID:5201314</view>
							</view>
						</view>
						<view class="modalContent">
							<view>
								<view class="moreInfo">
									<view class="iconAndContent">
										<image class="modalContentIco" mode="widthFix" src="../../static/ico/moreInfo.svg"></image>
										<view class="iconAndContentPad">更多资料</view>
									</view>
									<text class="iconAndContentPad" :class="isShow?'cuIcon-unfold':'cuIcon-right'" @click="IsShowDra"></text>
								</view>
								<view class="moreInfosDrawer" :class="isShow ? 'drawerShow':'drawerOut'">
									<view class="moreInfoContent">123123</view>
									<view class="moreInfoContent">123123</view>
									<view class="moreInfoContent">123123</view>
									<view class="moreInfoContent">123123</view>
									<view class="moreInfoContent">123123</view>
								</view>
								
							</view>
							
							<view class="authodShare">
								<view class="iconAndContent">
									<image class="modalContentIco" mode="widthFix" src="../../static/ico/authodShare.svg"></image>
									<view class="iconAndContentPad">分享</view>
								</view>
								<text class="iconAndContentPad cuIcon-right"></text>
							</view>
							<view class="report">
								<view class="iconAndContent">
									<image class="modalContentIco" mode="widthFix" src="../../static/ico/report.svg"></image>
									<view class="iconAndContentPad">举报</view>
								</view>
								<text class="iconAndContentPad cuIcon-right"></text>
							</view>
							<view class="shield">
								<view class="iconAndContent">
									<image class="modalContentIco" mode="widthFix" src="../../static/ico/shield.svg"></image>
									<view class="iconAndContentPad">屏蔽ta的信息</view>
								</view>
								<text class="iconAndContentPad cuIcon-right"></text>
							</view>
						</view>
						
					</view>
					

				</scroll-view>
			</view>
		</view>
		<view class="backAndMore">
			<text class="cuIcon-back backIcon" @click="goBack"></text>
			<text class="cuIcon-sort sortIcon" @click="showModal"></text>
		</view>
		<image src="../../static/img/tou7.jpg" mode="widthFix" class="headerBackground"></image>
		<view class="personContent">
			<view class="personMainInfo">
				<view class="InfoContentView">
					<image class="InfoContentImg" src="../../static/img/tou4.jpg"></image>
					
					<view class="InfoContent">
						<view class="firstLine">
							<view class="personNameView">
								<text class="personName">终极大骚包</text>
							</view>
							<view class="focusPerson">
								<text class="cuIcon-mail personMail"></text>
							</view>
							<view class="sendInfo">
								<view class="sendInfoBox">
									<text class="cuIcon-add addFocusIco"></text>
									<text class="addFocus">关注</text>
								</view>
							</view>
							
						</view>
						<view class="secondLine">
							<text class="cuIcon-male secondLineIco"></text>
							<text class="secondLineID">ID:5201314</text>
						</view>
						<view class="fhirdLine">
							<text class="fhirdLineContent">今晚八点，准时来战！是兄弟，就来砍我！</text>
						</view>
					</view>
				</view>
			</view>
			<view class="personAchievement">
				<view class="achievement">
					<text class="achievementContent"><text class="number">0</text>关注</text>
					<text class="achievementContent"><text class="number">1000</text>粉丝</text>
					<text class="achievementContent"><text class="number">3000</text>点赞</text>
				</view>
				<view class="achievementNav">
					<view class="works"><text data-cur="works" @click="change" :class="sCur=='works'?'onChoose':''">作品</text></view>
					<view class="trends"><text data-cur="trends" @click="change" :class="sCur=='trends'?'onChoose':''">动态</text></view>
					<view class="collect"><text data-cur="collect" @click="change" :class="sCur=='collect'?'onChoose':''">收藏</text></view>
				</view>
				<swiper class="achievementSwiper" :current="current" @change="currentChange">
					<swiper-item>
						<scroll-view scroll-y="true" class="worksSroll">
							<view class="worksSrollNav">
								<view data-cur="video" :class="worksCur=='video'?'worksClick':''" @click="worksChange" class="worksSrollNav-video">视频</view>
								<view data-cur="forum" :class="worksCur=='forum'?'worksClick':''" @click="worksChange" class="worksSrollNav-forum">帖子</view>
							</view>
							<scroll-view scroll-y="true" class="worksScrollContent">
								<view v-if="worksCur=='video'" class="videoScroll">
									<view @click="play(item.id)" class="videoItem" v-for="(item,index) in videoList" :key="index" :style="[{'background-image': item.img}]"></view>
								</view>
								<view v-if="worksCur=='forum'" class="forumScroll">
									123123
								</view>
							</scroll-view>
						</scroll-view>
					</swiper-item>
					<swiper-item>
						<scroll-view class="trendsScroll" scroll-y="true">
							<view class="cu-card dynamic no-card trendsScrollItem">
								<view class="cu-item shadow">
									<view class="cu-list menu-avatar">
										<view class="cu-item">
											<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
											<view class="content flex-sub">
												<view>凯尔</view>
												<view class="text-gray text-sm flex justify-between">
													2019年12月3日
												</view>
											</view>
										</view>
									</view>
									<view class="text-content">
										折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
									</view>
									<view class="grid flex-sub padding-lr col-3 grid-square">
										<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
										 v-for="(item,index) in isCard?9:1" :key="index">
										</view>
									</view>
									<view class="text-gray text-sm trendsScrollItemAch">
										<view class="cuIcon-attentionfill trendsScrollItemAchItem">已看</view> 
										<view class="cuIcon-appreciatefill trendsScrollItemAchItem">点赞</view> 
										<view class="cuIcon-messagefill trendsScrollItemAchItem">评论</view> 
									</view>
								</view>
							</view>
							
							<view class="cu-card dynamic no-card trendsScrollItem">
								<view class="cu-item shadow">
									<view class="cu-list menu-avatar">
										<view class="cu-item">
											<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
											<view class="content flex-sub">
												<view>凯尔</view>
												<view class="text-gray text-sm flex justify-between">
													2019年12月3日
												</view>
											</view>
										</view>
									</view>
									<view class="text-content">
										折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！
									</view>
									<view class="grid flex-sub padding-lr col-3 grid-square">
										<view class="bg-img" :class="isCard?'':'only-img'" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
										 v-for="(item,index) in isCard?9:1" :key="index">
										</view>
									</view>
									<view class="text-gray text-sm padding ">
										<text class="cuIcon-attentionfill margin-lr-xs"></text> 10
										<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
										<text class="cuIcon-messagefill margin-lr-xs"></text> 30
									</view>
								</view>
							</view>
							
							<view class="cu-card article no-card trendsScrollItem" @click="goTo">
								<view class="cu-item shadow">
									<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
									<view class="content">
										<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
										 mode="aspectFill"></image>
										<view class="desc">
											<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
											<view>
												<view class="cu-tag bg-red light sm round">正义天使</view>
												<view class="cu-tag bg-green light sm round">史诗</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</swiper-item>
					<swiper-item>
						<scroll-view class="collectScroll" scroll-y="true">
							<view class="collectScrollItem">
								<image class="collectScrollItemImg" mode="aspectFill" src="../../static/img/tou8.jpg"></image>
								<view class="contentNum">55个妹纸</view>
								<view class="nameAndDate">
									<view class="collectScrollItemName">默认收藏夹</view>
									<view class="collectScrollItemDate">创建于2019.09.09</view>
								</view>
							</view>
							<view class="collectScrollItem">
								<image class="collectScrollItemImg" mode="aspectFill" src="../../static/img/tou1.jpg"></image>
								<view class="contentNum">55个妹纸</view>
								<view class="nameAndDate">
									<view class="collectScrollItemName">Game</view>
									<view class="collectScrollItemDate">创建于2019.09.09</view>
								</view>
							</view>
							
							<view class="addContentItem">新建收藏夹</view>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				modalName: "",
				sCur: "works",
				current: 0 ,
				worksCur: "video",
				height: 0,
				isShow: false,
				videoList:[{
					img: 'url(../../static/img/tou1.jpg)',
					id: '123'
				},{
					img: 'url(../../static/img/tou8.jpg)',
					id: '234'
				},{
					img: 'url(https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=36482708336d55fbd1cb7e740c4b242f/9825bc315c6034a84e00f357c513495408237601.jpg)',
					id: '543'
				},{
					img: 'url(../../static/img/tou3.jpg)',
					id: '435'
				},{
					img: 'url(../../static/img/tou4.jpg)',
					id: '532'
				},{
					img: 'url(../../static/img/tou8.jpg)',
					id: 'aawer'
				},{
					img: 'url(../../static/img/tou6.jpg)',
					id: 'rewd1'
				},{
					img: 'url(../../static/img/tou4.jpg)',
					id: '43gas'
				},{
					img: 'url(../../static/img/tou7.jpg)',
					id: '312arf'
				}]
			}
		},
		created() {
			this.getHeight()
		},
		methods:{
			change(e){
				this.sCur = e.target.dataset.cur
				if(this.sCur == "works") {
					this.current = 0
				} else if (this.sCur == "trends") {
					this.current = 1
				} else if (this.sCur == "collect") {
					this.current = 2
				}
			},
			getHeight(){
					const _that = this;
					uni.getSystemInfo({
					success: function (res) {
						_that.height = res.windowHeight;
					},
					
				});
			},
			currentChange(e){
				if(e.target.current == 0) {
					this.sCur = "works"
				} else if (e.target.current == 1) {
					this.sCur = "trends"
				} else if (e.target.current == 2) {
					this.sCur = "collect"
				}
			},
			worksChange(e){
				this.worksCur = e.target.dataset.cur
			},
			goBack(e){
				uni.navigateBack({
				    delta: 1
				});
			},
			goTo(e){
				void plus.runtime.openWeb('https://mp.weixin.qq.com/s?__biz=MzU2ODczNjM5OA==&mid=2247484098&idx=1&sn=d8956f674b5500949e555ac3c5c47f38&chksm=fc882d23cbffa4354dbd35532ef025104d4b92ab4398b1de2e50840400bd30823c42cc7907d7&scene=0&xtrack=1&key=54e46c2d26bbf657666da8f476998d386a29f74669379da6486d632a78369e543fe58438101151468a90f18ef57c916e97a43e0f2de8ee3dbc7d980de6cbd55da5326e981b7c026d504de4e5bf0c9f2c&ascene=1&uin=MTE0NjU5MDA3MQ%3D%3D&devicetype=Windows+10&version=62060833&lang=zh_CN&pass_ticket=MKJYDBpvtvKopAKB3BA24PaCsQ5GeTth0nDPGTOwl2jH5jCNKmtMZstHsTN1B7wu');
			},
			showModal(e){
				this.modalName = "DrawerModalR"
			},
			hideModal(e) {
				this.modalName = null
			},
			IsShowDra(e){
				this.isShow = !this.isShow;
				console.log("123");
			},
			play(id){
				
				let pages = getCurrentPages();
				pages[0].$vm.id = id
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	.backAndMore{
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
		height: 55px;
		padding: 0 18px;
		padding-top: var(--status-bar-height);
		display: flex;
		justify-content: space-between;
	}
/* 	.modalTitle{
		padding-top: var(--status-bar-height);
		font-size: 1.3em;
		padding-bottom: 4px;
		color: #333333;
		border-bottom: 1upx solid rgba(0,0,0,0.1);
	} */
	.modalScrollView{
		padding-top: 50px;
		height: 100%;
	}
	.modalAuthodViewImg{
		
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}
	.modalContent{
		background-color: yellow;
	}
	.modalAuthodView{
		border-bottom: 1upx solid rgba(0,0,0,0.1);
		height: 160upx;
		padding: 20upx 30upx;
		display: flex;
	}
	.modalAuthodNameAndId{
		flex: auto;
		text-align: left;
		position: relative;
		padding: 20upx 20upx;
	}
	.modalAuthodName{
		font-size: 1.2em;
		font-weight: 600;
	}
	.modalAuthodId{
		font-size: 0.9em;
		position: absolute;
		color: #999999;
		bottom: 20upx;
	}
	.moreInfo,
	.authodShare,
	.report,
	.shield {
		font-size: 25upx;
		padding: 25upx 20upx;
		display: flex;
		justify-content: space-between;
		border-bottom:1px solid rgba(0,0,0,0.1);
	}
	.moreInfoContent{
		text-align: left;
		background-color: red;
		padding: 25upx 20upx;
		height: 40px;
	}
	.moreInfosDrawer{
		height: 0;
		overflow: hidden;
		
	}
	.drawerShow{
		animation: showIn 1s;
		animation-fill-mode:forwards;
	}
	.drawerOut{
		animation: DraOut 1s;
		animation-fill-mode: forwards;
	}
	.iconAndContentPad{
		padding: 15upx 10upx 0 10upx;
	}
	.iconAndContent{
		display: flex;
	}
	.modalContentIco{
		width: 50upx;
	}
	
	.backIcon,.sortIcon{
		margin-top: 5px;
		font-size: 1.8em;
		color: #FFFFFF;
	}
	
	.personBox{
		background-color: #FAFAFA;
		font-family: 黑体;
	}
	.headerBackground{
		width: 100%;
		z-index: 0;
	}
	.personContent{
		width: 100%;
		min-height: 530px;
		position: absolute;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		top: 200px;
		background-color: #FFF;
		z-index: 99;
	}
	.personMainInfo{
		height: 110px;
		position: absolute;
		top: -40px;
		width: 100%;
	}
	.personAchievement{
		min-height: 430px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	.InfoContentView{
		padding: 0 15px;
		display: flex;
		flex-direction: row;
	}
	.InfoContentImg{
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: #FFFFFF solid 2px;
	}
	.InfoContent{
		flex: auto;
		height: 90px;
	}
	.firstLine{
		padding-top: 2px;
		height: 40px;
		width: 100%;
		display: flex;
	}
	.personNameView{
		flex: 7;
		position: relative;
	}
	.personName{
		position: absolute;
		bottom: 0;
		margin-left: 0.4em;
		color: #FFFFFF;
		font-size: 1.4em;
	}
	.personMail{
		width: 100%;
		font-size: 2em;
		border-radius: 0.2em;
		padding: 2px 8px 3px 7px;
		background-color: rgba(16,16,16,0.3);
		color: #FFFFFF;
	}
	.addFocus{
		
	}
	.sendInfoBox{
		border-radius:6px;
		text-align: center;
		background-color: skyblue;
		padding: 0.3em 0 0.4em 0;
	}
	.addFocusIco,.addFocus{
		font-size: 1.3em;
		color: #FFFFFF;
	}
	.focusPerson{
		margin-right: 10px;
		flex: 2;
		padding-top: 2px;
		padding-left: 2px;
	}
	.sendInfo{
		flex: 3;
	}
	.secondLine{
		height: 20px;
		width: 100%;
	}
	.secondLineIco{
		margin-left: 0.4em;
		font-size: 16px;
		color: skyblue;
	}
	.secondLineID{
		margin-left: 2px;
		color: #999;
	}
	
	.fhirdLine{
		height: 30px;
		width: 100%;
	}
	.fhirdLineContent{margin-left: 0.4em;color: #999;font-weight: 500;font-size: 0.9em;}
	.achievement{
		padding: 0 10px;
		font-size: 1.1em;
		color: #999;
		border-bottom: 1upx solid rgba(0, 0, 0, 0.1);
		height: 30px;
		display: flex;
	}
	.achievementContent{
		font-size: 1.1em;
	}
	.number{
		padding: 0 2px 0 10px;
		font-weight: 400;
		color: #3F536E;
	}
	.achievementNav{
		display: flex;
		height: 33px;
		border-bottom: 1upx solid rgba(0, 0, 0, 0.1);
	}
	.works,.trends,.collect{
		flex: 1;
		text-align: center;
		font-family: 苹方;
		font-weight: 500;
		padding-top: 0.4em;
		color:#3F536E ;
		font-size: 1.2em;
		display: flex;
		justify-content: center;
		
	}
	.onChoose{
		border-bottom: 3px inset skyblue;
	}
	
	.achievementSwiper{
		min-height: 400px;
	}
	.worksSroll,
	.trendsScroll,
	.collectScroll {
		height: 100%;
	}
	.collectScroll,.trendsScroll{
		background-color: #F1F1F1;
	}
	.worksSrollNav{
		height: 40px;
		display: flex;
		padding: 10px 20px 0 30px;
		background-color: #FAFAFA;
	}
	.worksSrollNav-video,
	.worksSrollNav-forum{
		margin-right: 25px;
		font-size: 1.1em;
		font-weight: 500;
		color: #999999;
	}
	.worksScrollContent{
		height: 360px;
	}
	.videoScroll{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.videoItem{
		width: 33%;
		height: 178px;
		margin-bottom: 2px;
		background-position: center;
		background-size: cover;
	}
	.worksClick{
		color: skyblue;
	}
	.trendsScrollItem{
		margin-bottom: 10px;
		box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);
	}
	.trendsScrollItemAch{
		display: flex;
		padding: 15upx 30upx;
	}
	.trendsScrollItemAchItem{
		flex: 1;
		text-align: center;
		font-size: 1.2em;
	}
	.collectScrollItem{
		margin: 3% 3%;
		width: 94%;
		height: 99px;
		background-color: #FFFFFF;
		border-radius: 4px;
		box-shadow: 0 0 10upx rgba(0, 0, 0, 0.1);
		display: flex;
		position: relative;
	}
	.collectScrollItemImg{
		width: 157.5px;
		height: 100%;
		/* background-position: center; */
		border-radius: 4px;
		/* background-size: cover; */
	}
	.contentNum{
		padding: 5px 15px;
		position: absolute;
		z-index: 999;
		bottom: 0;
		background-color:rgba(0, 0, 0, 0.3);
		width: 157.5px;
		color: #F1F1F1;
		font-size: 0.9em;
		border-radius: 4px;
	}
	.nameAndDate{
		position: relative;
		padding: 20upx;
	}
	.collectScrollItemName{
		font-size: 1.2em;
		color: #333333;
		font-weight: 500;
	}
	.collectScrollItemDate{
		position: absolute;
		bottom: 10upx;
		width: 150px;
		color: #999999;
	}
	.addContentItem{
		
		width: 60%;
		padding: 15upx 0;
		border-radius: 5px;
		border: 1px dashed skyblue;
		font-family: 宋体;
		color: skyblue;
		font-size: 1.2em;
		text-align: center;
		margin: 0 auto;
		margin-top: 20px;
		
	}
	.addContentItem:active{
		background-color: skyblue;
		color: #FFFFFF;
	}
	
	@keyframes showIn{
		from{
			height: 0;
		}
		to{
			height: 200px;
		}
	}
	@keyframes DraOut{
		from{
			height: 200px;
		}
		to{
			height: 0;
		}
	}
</style>
