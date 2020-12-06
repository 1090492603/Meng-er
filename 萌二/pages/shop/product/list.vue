<template>
	<view class="content">
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">
				综合排序
			</view>
			<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">
				销量优先
			</view>
			<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
				<text>价格</text>
				<view class="p-box">
					<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="yticon icon-shang"></text>
					<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="yticon icon-shang xia"></text>
				</view>
			</view>
			<text class="cate-item yticon icon-fenlei1" @click="toggleCateMask('show')"></text>
		</view>
		<view class="goods-list">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="goods-item"
				@click="navToDetailPage(item)"
			>
				<view class=".img11">
					<image :src="item.img" mode="widthFix" style="border-radius: 5%;"></image>
				</view>
				<text class="title1 clamp name1">{{item.name}}</text>
				<view class="price-box">
					<text class="price">{{item.price}}</text>
					<text>已售 {{item.slogan}}</text>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>
		
		<view class="cate-mask" :class="cateMaskState===0 ? 'none' : cateMaskState===1 ? 'show' : ''" @click="toggleCateMask">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
					<view v-for="item in cateList" :key="item.id">
						<view class="cate-item b-b two">{{item.name}}</view>
						<view 
							v-for="tItem in item.child" :key="tItem.id" 
							class="cate-item b-b" 
							:class="{active: tItem.id==cateId}"
							@click="changeCate(tItem)">
							{{tItem.name}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore	
		},
		data() {
			return {
				cateMaskState: 0, //分类面板展开状态
				headerPosition:"fixed",
				headerTop:"0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0, 
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				cateList: [],
				goodsList: [
						{ goods_id: 1, img: '//img14.360buyimg.com/n1/s350x449_jfs/t17647/352/186115440/172588/d95451ee/5a61b87fN1c32ee3e.jpg!cc_350x449.jpg', name:'新品洛丽塔洋装 连衣裙软妹日系春秋学生日常制服 女学院风两件套水手服连衣裙套装冬季 杏色套装+帽子 M ', price: 188, slogan:'2643人付款'},
						{ goods_id: 2, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/36137/36/7836/767890/5cc927e8E93a6c023/a50f51cb4f365f79.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色短款 M    身高158-166', price: 279, slogan:'4800人付款' },
						{ goods_id: 3, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: 159, slogan:'3000人付款' },
						{ goods_id: 4, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/83175/37/3036/95235/5d142eceEb05e0554/3f862b8b71d5933e.jpg!cc_350x449.jpg', name: '淿瑶JK制服日系不良少女赤二本水手服基础款学生制服班服学院风套装女 单件短袖上衣(送羽根领结) 不含裙子 M', price: 98, slogan:'3000人付款' },
						{ goods_id: 5, img: '//img13.360buyimg.com/n1/s350x449_jfs/t14581/198/2510014808/111306/9b0c808/5aa51e13N9ca27049.jpg!cc_350x449.jpg', name: '秋冬季新款洛丽塔洋装日常装软妹学生社会日系jk水手服制服 女学院风两件套连衣裙套装 外套+衬衣+裙子+袜裤(送尾巴) S', price: 398, slogan:'2000人付款' },
						{ goods_id: 6, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/78807/14/3153/269458/5d15d579E08d7c52d/b8d8defcf905016a.jpg!cc_350x449.jpg', name: '新款夏季日系校服jk水手服女学生韩版制服海军风短款小清新女短裙套装 粉色上衣+白色短裙 912 S', price: 49, slogan:'3000人付款' },
						{ goods_id: 7, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/75575/24/3998/190574/5d22a6ceE443ab39f/c2470078247ca362.jpg!cc_350x449.jpg', name: '【夏季优选】果果家女学生水手服套装JK制服校服班服日系海军风甜美学院风性感包臀裙 白色套装【送】 M码(黑白分开洗涤)', price: 198, slogan:'3000人付款' },
						{ goods_id: 8, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: 159, slogan:'3000人付款' },
						{ goods_id: 9, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/28930/35/9927/61237/5c8200a1E0b920cb3/b8db77e09ff4374b.jpg!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 三件套广袖（仅女款） M    身高158-166', price: 159, slogan:'1235人付款'},
						{ goods_id: 10, img: '//img13.360buyimg.com/n1/s350x449_jfs/t1/54853/2/11711/142402/5d89b3cbE0d9b007d/9dd4e49da68a9382.jpg!cc_350x449.jpg',name:'柠檬鱼休闲套装女夏学生新品潮流韩版学院风校园水手服棉质短袖T恤女+半身裙防走光裙裤两件套女装C214 白蓝色 L   ', price: 98, slogan:'1254人付款' }
			],
			};
		},
		
		onLoad(options){
			uni.setNavigationBarTitle({
				title: options.name
			});
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			// #endif
			this.cateId = options.tid;
			this.loadCateList(options.fid,options.sid);
			this.loadData('mu',0);
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.loadData('refresh',0);
		},
		//加载更多
		onReachBottom(){
			uni.showToast({
				title:"触发上拉加载"
			})
			this.loadData('add',0);
		},
		methods: {
			//加载分类
			async loadCateList(fid, sid){
				let list = await this.$api.json('cateList');
				let cateList = list.filter(item=>item.pid == fid);
				
				cateList.forEach(item=>{
					let tempList = list.filter(val=>val.pid == item.id);
					item.child = tempList;
				})
				this.cateList = cateList;
			},
			//加载商品 ，带下拉刷新和上滑加载
			loadData(type, loading) {
				let goodsList = []; 
				let len = this.goodsList.length;
				let goodsLists = [
						{ goods_id: 1, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/28930/35/9927/61237/5c8200a1E0b920cb3/b8db77e09ff4374b.jpg!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 三件套广袖（仅女款） M    身高158-166', price: 159, slogan:1235 },
						{ goods_id: 2, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/36137/36/7836/767890/5cc927e8E93a6c023/a50f51cb4f365f79.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色短款 M    身高158-166', price: 279, slogan:4200 },
						{ goods_id: 3, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: 159, slogan:4800},
						{ goods_id: 4, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/83175/37/3036/95235/5d142eceEb05e0554/3f862b8b71d5933e.jpg!cc_350x449.jpg', name: '淿瑶JK制服日系不良少女赤二本水手服基础款学生制服班服学院风套装女 单件短袖上衣(送羽根领结) 不含裙子 M', price: 98, slogan:5800 },
						{ goods_id: 5, img: '//img13.360buyimg.com/n1/s350x449_jfs/t14581/198/2510014808/111306/9b0c808/5aa51e13N9ca27049.jpg!cc_350x449.jpg', name: '秋冬季新款洛丽塔洋装日常装软妹学生社会日系jk水手服制服 女学院风两件套连衣裙套装 外套+衬衣+裙子+袜裤(送尾巴) S', price: 398, slogan:8800 },
						{ goods_id: 6, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/78807/14/3153/269458/5d15d579E08d7c52d/b8d8defcf905016a.jpg!cc_350x449.jpg', name: '新款夏季日系校服jk水手服女学生韩版制服海军风短款小清新女短裙套装 粉色上衣+白色短裙 912 S', price: 49, slogan:2800},
						{ goods_id: 7, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/75575/24/3998/190574/5d22a6ceE443ab39f/c2470078247ca362.jpg!cc_350x449.jpg', name: '【夏季优选】果果家女学生水手服套装JK制服校服班服日系海军风甜美学院风性感包臀裙 白色套装【送】 M码(黑白分开洗涤)', price: 198, slogan:3400 },
						{ goods_id: 8, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: 159, slogan:2130 },
						{ goods_id: 9, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: 159, slogan:2420 },
						{ goods_id: 10, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: 159, slogan:5340 }
						];  
				let end_goods_id = this.goodsList[len-1].goods_id;
				for(let i=0;i<10;i++){
					let goods_id = end_goods_id+i+1;
					let t = Math.floor(Math.random()*10); 
					let p = goodsLists[t];
					p.goods_id = goods_id;
					goodsList.push(p);
				}
				if(type === 'refresh'){
					this.goodsList = goodsList
				}
				//筛选，测试数据直接前端筛选了
				this.goodsList = this.goodsList.concat(goodsList);
				if(this.filterIndex === 1){
					this.goodsList.sort((a,b)=>b.slogan - a.slogan)   //销量优先
				}
				if(this.filterIndex === 2){
					this.goodsList.sort((a,b)=>{
						if(this.priceOrder == 1){
							return a.price - b.price;            //价格从低到高
						}
						return b.price - a.price;               //价格从高到低
					})
				}
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType  = this.goodsList.length > 500 ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()
					}else{
						uni.stopPullDownRefresh();
					}
				}
			},
			//筛选点击
			tabClick(index){
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				if(index === 2){
					this.priceOrder = this.priceOrder === 1 ? 2: 1;
				}else{
					this.priceOrder = 0;
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				uni.showLoading({
					title: '正在加载'
				})
				this.loadData('refresh', 1);
			},
			//显示分类面板
			toggleCateMask(type){
				let timer = type === 'show' ? 10 : 300;
				let	state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(()=>{
					this.cateMaskState = state;
				}, timer)
			},
			//分类点击
			changeCate(item){
				this.cateId = item.id;
				this.toggleCateMask();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				uni.showLoading({
					title: '正在加载'
				})
				this.loadData('refresh', 1);
			},
			//详情
			navToDetailPage(e){
				//测试数据没有写id，用title代替
				let id = e.title;
				uni.navigateTo({
					url: `/pages/shop/product/product?id=${e.goods_id}&name=${e.name}&price=${e.price}`
				})
			},
			stopPrevent(){}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
	}
	.content{
		padding-top: 96upx;
	}

	.navbar{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: $base-color;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid $base-color;
				}
			}
		}
		.p-box{
			display: flex;
			flex-direction: column;
			.yticon{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;
				&.active{
					color: $base-color;
				}
			}
			.xia{
				transform: scaleY(-1);
			}
		}
		.cate-item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
	}

	/* 分类 */
	.cate-mask{
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0);
		z-index: 95;
		transition: .3s;
		
		.cate-content{
			width: 630upx;
			height: 100%;
			background: #fff;
			float:right;
			transform: translateX(100%);
			transition: .3s;
		}
		&.none{
			display: none;
		}
		&.show{
			background: rgba(0,0,0,.4);
			
			.cate-content{
				transform: translateX(0);
			}
		}
	}
	.cate-list{
		display: flex;
		flex-direction: column;
		height: 100%;
		.cate-item{
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
 			font-size: 28upx;
			color: #555;
			position: relative;
		}
		.two{
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}

		.active{
			color: $base-color;
		}
	}

	/* 商品列表 */
	.goods-list{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.goods-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		image {
			width: 100%;
			line-height: 10%;
			height: 10%;
		}
		.title1{
			font-size: $font-lg;
			color: $font-color-dark;
		}
		.name1{
			width: 92%;
			padding: 0 5%;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			text-align: justify;
			overflow: hidden;
			font-size: 30upx;
		}
		.price-box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 10upx;
			padding-top: 8px;
			font-size: 24upx;
			color: $font-color-light;
		}
		.price{
			font-size: $font-lg;
			color: #e65339;
			font-weight: 600;
			line-height: 1;
			&:before{
				content: '￥';
				font-size: 26upx;
			}
		}
	}
	

</style>
