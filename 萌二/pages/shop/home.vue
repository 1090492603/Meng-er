<template>
	<view >
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<!-- 漂浮头部 -->
		<view class="header" :style="{position:headerPosition}">
			<view class="scan">
				<view class="icon scan" @tap="scan" style="color: #808080;margin-top: 15upx;"></view>
			</view>
			<view class="input">
				
				<view class="icon search"></view>
				
				<input  @tap="toSearch()" style="background-color: #000000;opacity: 0.05;color: #000000;"/>
			</view>
			<view class="menu">
				<image mode="widthFix" src="../../static/HM-shophome/face.png" @tap="shopUser" style="width: 50upx;height: 50upx;"></image>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		
		<!-- 轮播图 -->
		<view class="swiper-view">
			<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" indicator-active-color="#ffffff">
				<swiper-item v-for="swiper in swiperList" :key="swiper.sid" @tap="toSwiper(swiper)">
					<image mode="aspectFill" :src="swiper.img"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 分类轮播 -->
		<view class="category">
			<view class="box">
				<swiper	class="swiper" duration="300" style="height: 72px" >
					<swiper-item v-for="(page, pageindex) in categoryList" :key="pageindex" >
						<view class="category-list">
							<view class="icon" v-for="category in page" :key="category.cat_id" @tap="toCategory(category)">
								<image mode="widthFix" :src="category.img"></image>
								<view>{{ category.title }}</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<!-- 广告横幅 -->
		<view class="banner">
			<image mode="widthFix" src="../../static/HM-shophome/banner.jpg"></image>
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="title">— 猜你喜欢 —</view>
			<view class="product-list">
				<view class="product" v-for="(product,index) in productList" :key="index" @tap="toGoods(product);">
					<image mode="widthFix" :src="product.img"></image>
					<view class="name">{{product.name}}</view>
					<view class="info">
						<view class="price">￥{{product.price}}</view>
						<view class="slogan">{{product.slogan}}</view>
					</view>
				</view>
			</view>
			
			<view class="loading-text">{{loadingText}}</view>
		</view>
		<view>
			<view class="sk-three-bounce" id="sk-three-bounce">
			            <view class="sk-child sk-bounce1"></view>
			            <view class="sk-child sk-bounce2"></view>
			            <view class="sk-child sk-bounce3"></view>
			</view>
		</view>
		
				<image class="mescroll-totop" src="../../static/img/car.png" mode="widthFix" @click="goCar()" />
		
	</view>
	
</template>
<script>
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
export default {
components: {
				MescrollUni
			},
	data() {
		return {
			//轮播
			swiperList:[
				{sid:0,src:'自定义src0',img:'../../static/HM-shophome/swiper-img/0.png'},
				{sid:1,src:'自定义src1',img:'../../static/HM-shophome/swiper-img/1.png'},
				{sid:2,src:'自定义src2',img:'../../static/HM-shophome/swiper-img/2.png'}
			],
			//分类
			categoryList: [
				[//第一页
					{ cat_id: 0, img: '../../static/img/shop1.jpg', title: '手办' ,id:''},
					{ cat_id: 1, img: '../../static/img/shop2.jpg', title: '服饰' ,id:''},
					{ cat_id: 2, img: '../../static/img/shop3.jpg', title: '模型' ,id:''},
					{ cat_id: 3, img: '../../static/img/shop4.jpg', title: '周边' ,id:''},
					{ cat_id: 4, img: '../../static/img/shop5.jpg', title: '全部分类' ,id:'pages/HM-shophome/HM-shophome.vue'},
					]
			],
			//猜你喜欢列表
			productList: [
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
			categoryHeight: '100px',
			currentPageindex: 0,
			headerPosition:"fixed",
			loadingText:"加载中...",
			upOption: {
				use: true, // 是否启用上拉加载; 默认true
				auto: false, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 0 // 每页数据的数量,默认10
				},
				noMoreSize: 0, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
				empty: {
					tip: '暂无相关数据'
				}
			},
			// 下拉刷新的常用配置
			downOption: { 
				use: true, // 是否启用下拉刷新; 默认true
				auto: false, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
			},
		}
	},
	onReady() {

	}, 
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
       this.refash();
	   uni.stopPullDownRefresh();
    },
	onPageScroll(e){
		//兼容iOS端下拉时顶部漂移
		if(e.scrollTop>=0){
			this.headerPosition = "fixed";
		}else{
			this.headerPosition = "absolute";
		}
	},
	onReachBottom(){
		this.shopWell();
	},
	onLoad() {
		
	},
	onShow() {
		uni.setTabBarStyle({
		  color: "#969696",
		  backgroundColor: '#FFFFFF',
		  borderStyle: 'rgba(0,0,0,0.2)',
		  selectedColor: "#D27DF9"
		})
	},
	methods: {
		//扫一扫
		scan(){
			uni.clearStorage();
			uni.scanCode({
				success:(res)=>{
					uni.showToast({title: '条码内容：' + res.result});
				}
			});
		},
		//搜索跳转
		toSearch(){
			uni.showToast({title: "建议跳转到新页面做搜索功能"});
		},
		//轮播图跳转
		toSwiper(e){
			uni.showToast({title: e.src});
		},
		//分类跳转
		toCategory(e){
			if(e.cat_id==4)
			{
				uni.navigateTo({
					url:"/pages/shop/category/category"
				})
			}
			else
			uni.navigateTo({ //跳转页面
				url: `/pages/shop/product/list?name=${e.title}`
			})
		},
		//商品跳转
		toGoods(e){
			uni.showToast({title: '商品'+e.goods_id});
			console.log(e.name);
			console.log(e.price);
			uni.navigateTo({
				url: `/pages/shop/product/product?id=${e.goods_id}&name=${e.name}&price=${e.price}`
			});
		},
		//详情页
		navToDetailPage(item) {
			//测试数据没有写id，用title代替
			let id = item.title;
			uni.navigateTo({
				url: `/pages/shop/product/product?id=${id}`
			})
		},
		async shopWell(){
				await this.requestGoods();
				let len = this.productList.length;
				if(len>=30){
					this.loadingText="到底了";
					return false;
				}
				let goodsLists = [
						{ goods_id: 1, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/28930/35/9927/61237/5c8200a1E0b920cb3/b8db77e09ff4374b.jpg!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 三件套广袖（仅女款） M    身高158-166', price: ' 159', slogan:'1235人付款' },
						{ goods_id: 2, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/36137/36/7836/767890/5cc927e8E93a6c023/a50f51cb4f365f79.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色短款 M    身高158-166', price: ' 279', slogan:'4800人付款' },
						{ goods_id: 3, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: ' 159', slogan:'3000人付款' },
						{ goods_id: 4, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/83175/37/3036/95235/5d142eceEb05e0554/3f862b8b71d5933e.jpg!cc_350x449.jpg', name: '淿瑶JK制服日系不良少女赤二本水手服基础款学生制服班服学院风套装女 单件短袖上衣(送羽根领结) 不含裙子 M', price: ' 98', slogan:'3000人付款' },
						{ goods_id: 5, img: '//img13.360buyimg.com/n1/s350x449_jfs/t14581/198/2510014808/111306/9b0c808/5aa51e13N9ca27049.jpg!cc_350x449.jpg', name: '秋冬季新款洛丽塔洋装日常装软妹学生社会日系jk水手服制服 女学院风两件套连衣裙套装 外套+衬衣+裙子+袜裤(送尾巴) S', price: ' 398', slogan:'2000人付款' },
						{ goods_id: 6, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/78807/14/3153/269458/5d15d579E08d7c52d/b8d8defcf905016a.jpg!cc_350x449.jpg', name: '新款夏季日系校服jk水手服女学生韩版制服海军风短款小清新女短裙套装 粉色上衣+白色短裙 912 S', price: ' 49', slogan:'3000人付款' },
						{ goods_id: 7, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/75575/24/3998/190574/5d22a6ceE443ab39f/c2470078247ca362.jpg!cc_350x449.jpg', name: '【夏季优选】果果家女学生水手服套装JK制服校服班服日系海军风甜美学院风性感包臀裙 白色套装【送】 M码(黑白分开洗涤)', price: ' 198', slogan:'3000人付款' },
						{ goods_id: 8, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: ' 159', slogan:'3000人付款' },
						{ goods_id: 9, img: '//img14.360buyimg.com/n1/s350x449_jfs/t17647/352/186115440/172588/d95451ee/5a61b87fN1c32ee3e.jpg!cc_350x449.jpg', name:'新品洛丽塔洋装 连衣裙软妹日系春秋学生日常制服 女学院风两件套水手服连衣裙套装冬季 杏色套装+帽子 M ', price: ' 188', slogan:'2643人付款' },
						{ goods_id: 10, img: '//img13.360buyimg.com/n1/s350x449_jfs/t1/54853/2/11711/142402/5d89b3cbE0d9b007d/9dd4e49da68a9382.jpg!cc_350x449.jpg',name:'柠檬鱼休闲套装女夏学生新品潮流韩版学院风校园水手服棉质短袖T恤女+半身裙防走光裙裤两件套女装C214 白蓝色 L   ', price: ' 98', slogan:'1254人付款' }
						];  
				let end_goods_id = this.productList[len-1].goods_id;
				for(let i=0;i<10;i++){
					let goods_id = end_goods_id+i+1;
				    let t = Math.floor(Math.random()*10 );
					let p = goodsLists[t];
					p.goods_id = goods_id;
					this.productList.push(p);
				}
		},
		async refash(){
				await this.requestGoods();
				let len = this.productList.length;
				let goodsLists = [
						{ goods_id: 1, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/28930/35/9927/61237/5c8200a1E0b920cb3/b8db77e09ff4374b.jpg!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 三件套广袖（仅女款） M    身高158-166', price: ' 159', slogan:'1235人付款' },
						{ goods_id: 2, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/36137/36/7836/767890/5cc927e8E93a6c023/a50f51cb4f365f79.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色短款 M    身高158-166', price: ' 279', slogan:'4800人付款' },
						{ goods_id: 3, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: ' 159', slogan:'3000人付款' },
						{ goods_id: 4, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/83175/37/3036/95235/5d142eceEb05e0554/3f862b8b71d5933e.jpg!cc_350x449.jpg', name: '淿瑶JK制服日系不良少女赤二本水手服基础款学生制服班服学院风套装女 单件短袖上衣(送羽根领结) 不含裙子 M', price: ' 98', slogan:'3000人付款' },
						{ goods_id: 5, img: '//img13.360buyimg.com/n1/s350x449_jfs/t14581/198/2510014808/111306/9b0c808/5aa51e13N9ca27049.jpg!cc_350x449.jpg', name: '秋冬季新款洛丽塔洋装日常装软妹学生社会日系jk水手服制服 女学院风两件套连衣裙套装 外套+衬衣+裙子+袜裤(送尾巴) S', price: ' 398', slogan:'2000人付款' },
						{ goods_id: 6, img: '//img11.360buyimg.com/n1/s350x449_jfs/t1/78807/14/3153/269458/5d15d579E08d7c52d/b8d8defcf905016a.jpg!cc_350x449.jpg', name: '新款夏季日系校服jk水手服女学生韩版制服海军风短款小清新女短裙套装 粉色上衣+白色短裙 912 S', price: ' 49', slogan:'3000人付款' },
						{ goods_id: 7, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/75575/24/3998/190574/5d22a6ceE443ab39f/c2470078247ca362.jpg!cc_350x449.jpg', name: '【夏季优选】果果家女学生水手服套装JK制服校服班服日系海军风甜美学院风性感包臀裙 白色套装【送】 M码(黑白分开洗涤)', price: ' 198', slogan:'3000人付款' },
						{ goods_id: 8, img: '//img12.360buyimg.com/n1/s350x449_jfs/t1/18134/14/11689/659134/5c906a69E447ab72b/c18377d1265fa4b6.png!cc_350x449.jpg', name: '古装女汉服日常改新款汉服cos女装汉服曲裾古装2018新款甜美汉服民族服装女古装曲裾演出服装装汉元素 黑色武侠 M    身高158-166', price: ' 159', slogan:'3000人付款' },
						{ goods_id: 9, img: '//img14.360buyimg.com/n1/s350x449_jfs/t17647/352/186115440/172588/d95451ee/5a61b87fN1c32ee3e.jpg!cc_350x449.jpg', name:'新品洛丽塔洋装 连衣裙软妹日系春秋学生日常制服 女学院风两件套水手服连衣裙套装冬季 杏色套装+帽子 M ', price: ' 188', slogan:'2643人付款' },
						{ goods_id: 10, img: '//img13.360buyimg.com/n1/s350x449_jfs/t1/54853/2/11711/142402/5d89b3cbE0d9b007d/9dd4e49da68a9382.jpg!cc_350x449.jpg',name:'柠檬鱼休闲套装女夏学生新品潮流韩版学院风校园水手服棉质短袖T恤女+半身裙防走光裙裤两件套女装C214 白蓝色 L   ', price: ' 98', slogan:'1254人付款' }
						];  
				let goodss = [];
				let end_goods_id = this.productList[len-1].goods_id;
				for(let i=0;i<10;i++){
					let goods_id = end_goods_id+i+1;
				    let t = Math.floor(Math.random()*10 );
					let p = goodsLists[t];
					goodss.push(p);
					console.log("t="+t);
				}
				this.productList = goodss;
		},
		upCallback(mescroll) {
			this.shopWell();
			mescroll.endSuccess();  //传1是加载
		},
	/*下拉刷新的回调, 有三种处理方式: */
		downCallback(mescroll){
			this.refash(); //传0是刷新
			mescroll.endSuccess();
		},
		goCar() {
			uni.navigateTo({
				url:"/pages/shop/cart/cart"
			})
		},
		shopUser(){
			uni.navigateTo({
				url: 'user/user'
			})
		},
		requestGoods(){
			let promise = new Promise((resolve,reject)=>{
				uni.request({
					url: 'http://118.31.74.72:10010/api/item-service/item/maybeLike/0/0?size=8',
					success: (res) => {
						console.log(res.data[0]);
						resolve()
					}
				})
			}) 
			return promise
		}
	}
};
</script>
<style lang="scss">
@font-face {font-family:"HMfont-home";src:url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACFwAAAOwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEEINSATYCJAMQCwoABCAFhG0HTxtLBxHVmzvJfhS4scOeC1v4zNNRK/hO5b0IHqg/8838ye5XsIDanmAkhZ1NSZygm4SsbYYkp17ICsOUxIP/ZZm9xejtQAD8zzX10geY387mEtXapUd7A5xF6oAi2pJoE8YNY1dexGkIwCSZQoiq1es2RUdhTBKA6N2jWwf0lAlVky3QEYSUrFSIOTjQ5VR5GZjt/168obDQQeLQMGY27FqtMxWf5z5fpgWCgdYugng8B8DWgQYUAhSI7qWujmhhqBAaptJfURzQ0ZEwVkfB58uCQSTZi0o3//JAItBAhGBk2gAURUrtxMQ2BQnPC1IQ8HyZmpvE1XgdMIDtwHVEJt4qkThsZwFPVHiEFTHKtWBBYGGUe/HmsZu6TluCStw+fXGMY9GyUb4b133Xrze9etV77VqzxcuXbYq8bF6/7rtxo5lY6A1cLcuCQJS3oXHswOYKUSaI71xkXr3ayZy2SIix0YumRS6AwEnLmr58WS9z2pKlYcJCCGzcXOU81Xuhp1osIWbBiUQWehda7lTvaNeCJX0WbYgksMA0hdlLo6zDp1PEomIdVu7YE4wN7nH7uGPdHXz2R3uHnX68tcP6SPE5ZSdObNpN/9dybtfmr6tHoy6+rN+DqdvnW9lUbkHTdcUWfKp1yzVr5Ag5HCqGU0Hca3jpAt2GiWFRwxYvdpYFo2b3tN/HvLeFd+BAr5Bu7CXnzKFlJb8dtP3ucx1djc+589Pep+W7X706stfvml+7i8fsWunxp7/f/uzsrgzj9Sv3p+6T7yqwvrfdy3nk/J6eZ84fnHp2lSvf/m/7H7569dDvuY/fTX+Mwdog+QVAGyB/IHmGyK8/exQrX13Maucu+y23rrbi5tQ1T3yTor3oj4kV8a8VtyxSqtQwKyXLbJF2kaI5DgAkYGICPzQG4dwfQxPVOhMEOlExSEJJAg2dTFSRhcCBRVEIQacCmBSkxnqLCAaiIZQBFGAiAIGH3SBxcRo0PFxBFXkPHETzDkLwCA1MfCJiR4tswStWxeEccIPlAbXSxS1rYEH2G0U8ZpeU+sw/Oq+80JR1NjrghW6MOT6JNgQO3NEJPTgPj4PAONK4hlKGYLqq4mVvKlc6M0YVh3PADZYH1EoXd8sHlvv+G0U8ZldDq/D+0XnVPTRl3QIdVFcr2rX090m0IXA8jjs6oYcOPMwQgSkfpnENpewRMF2FSvG2qnJ+zfmE6wATY6YSUmhCCQehg9V8advwun0+nHuJ0VP0kYrcz/Qox5hl') format('woff2');}
.icon {
	font-family:"HMfont-home" !important;
	font-size:60upx;
	font-style:normal;
	color:#ffffff;
	&.scan {
		&:before{content:"\e69a";}
	}
	&.menu {
		&:before{content:"\e62b";}
	}
	&.search {
		&:before{content:"\e628";}
	}
}
page {
	background-color: #fff;
}
.status {
	width: 100%;
	height: 0;
	/*  #ifdef  APP-PLUS  */
	height: var(--status-bar-height);
	/*  #endif  */
	background-color: #FFFFFF;
	color: #000000;
	position: fixed;
	top: 0;
	z-index: 999;
}
.header {
	width: 100%;
	height: 100upx;
	background-color: #FFFFFF;
	display: flex;
	position: fixed;
	top: 0;
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	
	z-index: 996;
	.scan {
		width: 80upx;
		height: 80upx;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.input {
		width: calc(100% - 200upx);
		display: flex;
		justify-content: right;
		align-items: center;
		position:relative;
		input {
			width: calc(100% - 60upx);
			height: 60upx;
			background-color: #ffffff;
			border-radius: 60upx;
			padding-left: 60upx;
			font-size: 30upx;
			
		}
		.icon{
			width: 60upx;
			height: 60upx;
			position: absolute;
			color: #a18090;
			z-index: 996;
			top: 20upx;
			left: 0;
			font-size: 40upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.menu {
		width: 100upx;
		height: 100upx;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			width: 60upx;
			height: 60upx;
			border-radius: 60upx;
		}
	}
}
.place{
	/*  #ifdef  APP-PLUS  */
	margin-top: var(--status-bar-height);
	/*  #endif  */
	background-color: #FFFFFF;
	height: 100upx;
}
.swiper-view {
	.swiper {
		width: 100%;
		height: 280upx;
		image {
			width: 100%;
			height: 280upx;
		}
	}
	.keep-out {
		width: 100%;
		height: 30upx;
		border-radius: 100% 100% 0 0;
		background-color: #FFFFFF;
		margin-top: -15upx;
		position: absolute;
	}
}
.category {
	width: 95%;
	padding: 2.5vw 2.5vw;
	background-color: #e9e9e9;
	position: relative;
	
	.box {
		width: 100%;
		border-radius: 20upx;
		background-color: #ffffff;
		.dots {
			display: flex;
			justify-content: center;
			height: 15upx;
			width: 100%;
			view{
				width: 30upx;
				height: 5upx;
				background-color: rgba(0, 0, 0, 0.2);
				&.active {
					background-color: #ff570a;
				}
			}
		}
		.swiper {
			width: 100%;
			padding: 10upx 0;
			.uni-swiper-dot {
				width: 20upx;
			}
			.category-list {
				width: 100%;
				height: auto;
				display: flex;
				justify-content: flex-start;
				padding: 10upx 0;
				flex-flow: wrap;
				.icon {
					width: 20%;
					display: flex;
					flex-flow: wrap;
					justify-content: center;
					font-size: 22upx;
					color: #666;
					image {
						width: 55%;
						height: 30%;
					}
					view{
						width: 100%;
						display: flex;
						justify-content: center;
					}
				}
			}
		}
	}
}
.pick{
	width: 95%;
	padding: 0 2.5vw 2.5vw 2.5vw;
	background: linear-gradient(to bottom, #ff570a 0%,#ffffff 105%);
	.box{
		width: 100%;
		border-radius: 20upx;
		background-color: #ffffff;
		.title{
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			height: 60upx;
			border-bottom: solid 1upx #eee;
			padding-bottom: 10upx;
			.big{
				font-size: 34upx;
				padding-left: 20upx;
				color: #46434f;
			}
			.small{
				font-size: 24upx;
				padding-left: 20upx;
				color: #827f8b;
			}
		}
		.product-list{
			padding: 15upx 20upx 15upx 20upx;
			column-count: 2;
			column-width: 50%;
			column-gap: 10upx;
			>view{
				display: flex;
				background-color: #f8f8f8;
				position:relative;
				&:nth-child(1){
					.price{
						color: #e65339;
						font-size: 30upx;
						position: absolute;
						bottom: 8upx;
						left: 8upx;
					}
					.slogan{
						color: #807c87;
						font-size: 30upx;
						position: absolute;
						bottom: 8upx;
						right: 8upx;
					}
					image{
						width: 100%;
						height: 0;
					}
				}
				&:nth-child(2),&:nth-child(3){
					image{
						width: calc(50% - 5upx);
						height: 0;
					}
					.price{
						position: absolute;
						top: 25%;
						left: 55%;
						color: #e65339;
						font-size: 30upx;
					}
					.slogan{
						position: absolute;
						top: 60%;
						left: 55%;
						color: #807c87;
						font-size: 20upx;
					}
				}
				&:nth-child(2){
					margin-bottom: 10upx;
				}
			}
		}
	}
}
.banner{
	image{
		width: 100%;
	}
}
.goods-list{
	background-color: #f4f4f4;
	.title{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	.loading-text{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60upx;
		color: #979797;
		font-size: 24upx;
	}
	.product-list{
		width: 95%;
		padding: 0 2.5% 2.5vw 2.5%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.product{
			width: 48.75%;
			border-radius: 20upx;
			background-color: #fff;
			margin: 0 0 15upx 0;
			image{
				width: 100%;
				border-radius: 20upx 20upx 0 0;
			}
			.name{
				width: 92%;
				padding: 0 5%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-align: justify;
				overflow: hidden;
				font-size: 30upx;
			}
			.info{
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 92%;
				padding: 10upx 4% 10upx 4%;
				
				.price{
					color: #e65339;
					font-size: 30upx;
					font-weight: 600;
				}
				.slogan{
					color: #807c87;
					font-size: 24upx;
				}
			}
		}
		
	}
}
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
		}
	}
	/* 回到顶部的按钮 */
	.mescroll-totop {
		z-index: 9990;
		position: fixed !important; /* 避免编译到H5,在多mescroll中定位失效 */
		right: 20upx;
		bottom: 230upx;
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
		opacity: 0.95;
	}
	
	.sk-three-bounce {
		/*使用弹性布局让加载动画持续会于页面中央，不随滚动条变化*/
		position: relative;
		padding-left: 39%;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	 
	.sk-three-bounce .sk-child {
		/*在这里设置加载球的大小*/
		width: 30px;
		height: 30px;
		/*加载球的颜色在这里修改*/
		background-color: #e9e9e9;
		border-radius: 100%;
		display: inline-block;
		-webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
		animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
	}
	 
	.sk-three-bounce .sk-bounce1 {
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}
	 
	.sk-three-bounce .sk-bounce2 {
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}
	 
	@-webkit-keyframes sk-three-bounce {
		0%,80%,100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
	 
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	 
	@keyframes sk-three-bounce {
		0%,80%,100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
	 
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
</style>
