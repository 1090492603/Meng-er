<template>
	
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
						<image
							:src="item.src" 
							class="loaded" 
							mode="widthFix"
						></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="introduce-section">
			<text class="title1">{{goodsData.name}}</text>
			<view class="price-box">
				<text class="price-tip"></text>
				<text class="price">￥{{goodsData.price}}</text>
	<!--			<text class="m-price">¥488</text> 
				<text class="coupon-tip">7折</text>  -->
			</view>
			<view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>
		
		<!--  分享 -->
		<view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				 返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
			
		</view>
		
		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">购买类型</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">品牌来自</text>
				<text class="con t-r red">{{shop}}</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">服务</text>
				<view class="bz-list con">
					<text>7天无理由退换货 ·</text>
					<text>假一赔十 ·</text>
				</view>
			</view>
		</view>
		
		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>({{goodsData.comment.number}})</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" :src="goodsData.comment.userface" mode="aspectFill"></image>
				<view class="right">
					<text class="name">{{goodsData.comment.username}}</text>
					<text class="con">{{goodsData.comment.content}}</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<view v-for="(item,index) in imgListData" :key="index">
				<view style="width: 100%;display: block;">
					<image :src="item.src" mode="widthFix" style="width: 100%;display: block;"></image>
				</view>
			</view>
		</view>
		
		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<view open-type="switchTab" class="p-b-btn" @tap="backHome">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>商城</text>
			</view>
			<view  open-type="switchTab" class="p-b-btn" @tap="goCar">
				<text class="yticon icon-gouwuche"></text>
				<text>购物车</text>
			</view>
			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="yticon icon-shoucang"></text>
				<text>店铺</text>
			</view>
			
			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="addShop">加入购物车</button>
			</view>
		</view>
		
		
		<!-- 规格-模态层弹窗 -->
		<view 
			class="popup spec" 
			:class="specClass"
			@click="toggleSpec"
		>
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @tap.stop="stopPrevent">
				<view class="a-t">
					<image :src="imgList[0].src"></image>
					<view class="right">
						<text class="price">￥{{goodsData.price}}</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
						<view class="length" v-if="specSelected!=null">
							<view class="text">数量</view>
							<view class="number">
								<view class="sub" @tap.stop="sub">
									<view class="icon1 " style="margin-left: 18rpx;">-</view>
								</view>
								<view class="input" @tap.stop="discard">
									<input type="number" v-model="goodsData.number" />
								</view>
								<view class="add" style="margin-left: 5rpx;" @tap.stop="add">
									<view class="icon1 ">+</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="attr-list">
					<view v-for="(item,index) in specList" :key="index" >
						<text>{{item.name}}</text>
						<view class="item-list">
							<text 
								v-for="(childItem, childIndex) in specChildList" 
								v-if="childItem.pid === item.id"
								:key="childIndex" class="tit"
								:class="{selected: childItem.selected}"
								@click="selectSpec(childIndex, childItem.pid)"
							>
								{{childItem.name}}
							</text>
						</view>
					</view>
				</view>
				
				<button class="btn" @click="Ok">完成</button>
				
			</view>
		</view>
		<!-- 分享 -->
		<share 
			ref="share" 
			:contentHeight="580"
			:shareList="shareList"
		></share>
		<image class="mescroll-totop" src="../../../static/img/car.png" mode="widthFix" @tap="goCar" />
	</view>
	
</template>

<script>
	import share from '../../../components/share.vue';
	import uniNumberBox from "../../../components/uni-number-box.vue"
	export default{
		components: {
			share,
			uniNumberBox
		},
		data() {
			return {
				specClass: 'none',
				specSelected:[],
				shop:'啊羊良品',
				favorite: true,
				doingThing:'no',
				shareList : [{
						type: 1,
						icon: '../../../static/img/fenxiang1.png',
						text: '微信'
					},
					{
						type: 2,
						icon: '../../../static/img/fenxiang2.png',
						text: '朋友圈'
					},
					{
						type: 3,
						icon: '../../../static/img/fenxiang3.png',
						text: 'QQ'
					},
					{
						type: 4,
						icon: '../../../static/img/fenxiang4.png',
						text: 'QQ空间'
					},
					{
						type:5,
						icon: '../../../static/img/fenxiang5.png',
						text: '微博'
					}
				],
				imgList: [
					{
						src: '//img14.360buyimg.com/n1/s350x449_jfs/t17647/352/186115440/172588/d95451ee/5a61b87fN1c32ee3e.jpg!cc_350x449.jpg'
					},
					{
						src: '//img14.360buyimg.com/n1/s350x449_jfs/t14311/265/1931758735/160479/ad355daa/5a61b880Nf0c544d0.jpg!cc_350x449.jpg'
					},
					{
						src: '//img14.360buyimg.com/n1/s350x449_jfs/t16852/325/179612630/167596/3830d019/5a61b880Nefdc1bbd.jpg!cc_350x449.jpg'
					}
				],
				goodsData:{
					id:1,
					name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",
					price:127.00,
					number:1,
					service:[
						{name:"正品保证",description:"此商品官方保证为正品"},
						{name:"极速退款",description:"此商品享受退货极速退款服务"},
						{name:"7天退换",description:"此商品享受7天无理由退换服务"}
					],
					comment:{
						number:102,
						userface:'http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg',
						username:'Leo yo',
						content:'很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！'
					}
				},
				cartList:[],
				cartgoods:{},
				imgListData:[
					{
						src:"//img13.360buyimg.com/imgzone/jfs/t12460/230/2061398502/217636/806e8fce/5a61b83bNe7f04eff.jpg"
					},
					{
						src:"//img11.360buyimg.com/imgzone/jfs/t18508/280/170257578/7550/61c772c/5a61b83bN2a5e71ab.jpg"
					},
					{
						src:"//img30.360buyimg.com/imgzone/jfs/t17332/246/175751736/43041/bee76f7e/5a61b83cNae406e1a.jpg"
					},
					{
						src:"//img20.360buyimg.com/imgzone/jfs/t19126/293/170934521/38646/5a4a2b4a/5a61b83cN67459806.jpg"
					},
					{
						src:"//img14.360buyimg.com/imgzone/jfs/t17896/277/182678881/7600/a275193a/5a61b83cNc9346db6.jpg"
					},
					{
						src:"//img13.360buyimg.com/imgzone/jfs/t19108/298/173250423/7549/d4c88046/5a61b83dN73b1b376.jpg"
					},
					{
						src:"//img12.360buyimg.com/imgzone/jfs/t16147/148/1804248258/29361/5617d459/5a61b83dN96c48a03.jpg"
					},
					{
						src:"//img14.360buyimg.com/imgzone/jfs/t14395/268/1941709695/282560/a2f5c1e9/5a61b83fNa0f2b53d.jpg"
					},
					{
						src:"//img14.360buyimg.com/imgzone/jfs/t17908/275/178898712/239433/46d57aac/5a61b842N4899fb01.jpg"
					},
					{
						src:"//img20.360buyimg.com/imgzone/jfs/t12685/191/2563457173/244516/3b503f76/5a61b846N4552f716.jpg"
					},
					{
						src:"//img14.360buyimg.com/imgzone/jfs/t18940/310/170774495/285665/aa95ad8e/5a61b856N73b5d273.jpg"
					},
					{
						src:"//img30.360buyimg.com/imgzone/jfs/t17197/256/173127894/226340/45571396/5a61b85dN11bd74c1.jpg"
					},
					{
						src:"//img14.360buyimg.com/imgzone/jfs/t16348/237/1708041768/272192/9f8d9786/5a61b86bN8364d579.jpg"
					}
				],
				specList: [
					{
						id: 1,
						name: '尺寸',
					},
					{	
						id: 2,
						name: '颜色',
					}
				],
				specChildList: [
					{
						id: 1,
						pid: 1,
						name: 'XS',
					},
					{
						id: 2,
						pid: 1,
						name: 'S',
					},
					{
						id: 3,
						pid: 1,
						name: 'M',
					},
					{
						id: 4,
						pid: 1,
						name: 'L',
					},
					{
						id: 5,
						pid: 1,
						name: 'XL',
					},
					{
						id: 6,
						pid: 1,
						name: 'XXL',
					},
					{
						id: 7,
						pid: 2,
						name: '白色',
					},
					{
						id: 8,
						pid: 2,
						name: '珊瑚粉',
					},
					{
						id: 9,
						pid: 2,
						name: '草木绿',
					},
				]
			};
		},
		async onLoad(options){
			
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			this.goodsData.id  = options.id;
			this.goodsData.name  = options.name;
			this.goodsData.price = options.price;
			console.log("id="+options.id);			
			console.log("name="+options.name);	
			console.log("price="+options.price);
			uni.setNavigationBarColor({
				    frontColor: '#000000',
				    backgroundColor: '#FAFAFA',
			})
			//规格 默认选中第一条
/*			this.specList.forEach(item=>{
				for(let cItem of this.specChildList){
					if(cItem.pid === item.id){
						this.$set(cItem, 'selected', true);
						this.specSelected.push(cItem);
						break; //forEach不能使用break
					}
				}
			}) */
		},
		methods:{
			//规格弹窗开关
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid){
				let list = this.specChildList;
				list.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = []; 
				list.forEach(item=>{ 
					if(item.selected === true){ 
						this.specSelected.push(item); 
					} 
				})
				let len = this.specChildList.length - 1;
				
			},
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			//收藏
			toFavorite(){
				uni.showToast({
					title: '店铺~未完待续'
				});
			},
			buy(){
				if(this.specList.length == this.specSelected.length)
				{
					
					this.createGoods();
					return true;
				}
				if(this.specClass != 'show')
				{
					this.doingThing = 'buy';
					this.toggleSpec();
				}
				return ;
			},
			backHome(){
					uni.navigateTo({
						url:'../home' 
					})
			},
			goCar(){
				uni.navigateTo({
					url:'../cart/cart'
					})
			},
			createGoods(){
				let t = '';
				for(let i=0;i<this.specSelected.length;i++)
				{
					console.log(this.specSelected[i]);
					
					t  =  this.specSelected[i].name + t;
					t = ' ' + t;
				}
				let tmpList = [];
				let goodss = {
					"shop":this.shop,
					"id" :this.goodsData.id,
					"name":this.goodsData.name,
					"price":this.goodsData.price,
					"img":this.imgList[0].src,
					"specSelected":t,
					"number":this.goodsData.number
				};
				
				tmpList.push(goodss);
				uni.setStorage({
				    key: 'productGoods',
				    data: tmpList,
				    success:() => {
				        uni.navigateTo({
				        	url: '../order/createOrder?id=${goodsData.id}'
				        })
				    }
				});
			},
			//减少数量
			sub(){
				if(this.goodsData.number<=1){
					return;
				}
				this.goodsData.number--;
			},
			//增加数量
			add(){
				this.goodsData.number++;
			},
			stopPrevent(){},
			addShop(){
					
					if(this.specList.length == this.specSelected.length)
					{
						this.addCarList();
						return true;
					}
					if(this.specClass != 'show')
					{
						this.doingThing = 'car';
						this.toggleSpec();
					}
					return ;
			},
			addCarList(){
				uni.getStorage({
					key: 'cartListData',
					success:(e)=>{
						this.cartList = e.data;
					},
					fail:(e)=>{
						this.cartList = [];
						console.log("cartList失败");
					}
				});
				let t='';
				for(let i=0;i<this.specSelected.length;i++)
				{
					console.log(this.specSelected[i]);
					
					t  =  this.specSelected[i].name + t;
					t = ' ' + t;
				}
				let goodss = {
					"shop":this.shop,
					"id" :this.goodsData.id,
					"title":this.goodsData.name,
					"price":this.goodsData.price,
					"image":this.imgList[0].src,
					"attr_val":t,
					"stock":30,
					"number":this.goodsData.number
				};
				console.log(goodss);
				let isOK = false;
				console.log(this.cartList);
				if(this.cartList==[]||this.cartList==''||this.cartList==null)
				{
					this.cartList = [];
					this.cartList.push(goodss);
					console.log("4444");
					isOK = true;
				}else{
					for(let i = 0 ; i<this.cartList.length;i++)
					{
						if(this.cartList[i].id == goodss.id)
						{
							break;
						}
						if(i==this.cartList.length-1)
						{
							this.cartList.push(goodss);
							console.log("333");
							isOK = true;
						}
					}
				}
				if(this.specClass != 'hide')
				{
					this.doingThing = 'car';
					this.toggleSpec();
				}
				if(isOK == false)
				{
					uni.showToast({
						title:'本商品已经添加过购物车了~快去购物车下单吧！',
						position:'bottom'
					})
				}else {
					uni.setStorage({
					    key: 'cartListData',
					    data: this.cartList,
					    success: function () {
					        uni.showToast({
					        	title:'成功添加购物车~商品在您的购物车等候您哦！',
					        	position:'bottom'
					        })
					    }
					});
				}
			},
			Ok(){
				if(this.specList.length == this.specSelected.length)
				{
					if(this.doingThing == 'buy')
					{
						this.buy();
					}
					if(this.doingThing == 'car')
					{
						this.addShop();
					}
					if(this.doingThing == 'no')
					{
						uni.showToast({
							title:'页面出错，请返回首页再选购商品',
							position:'bottom'
						})
					}
				}
				return ;
			}
		},
	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
		padding-bottom: 160upx;
	}
	.icon-you{
		font-size: $font-base + 2upx;
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 20upx 30upx;
		.title1{
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}
		.price-box{
			display:flex;
			align-items:baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color:$uni-color-primary;
		}
		.price{
			font-size: $font-lg + 2upx;
		}
		.m-price{
			margin:0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;
			text{
				flex: 1;
			}
		}
	}
	/* 分享 */
	.share-section{
		display:flex;
		align-items:center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;
		.share-icon{
			display:flex;
			align-items:center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position:relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;
			&:after{
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position:absolute;
				background: $uni-color-primary;
			}
		}
		.icon-xingxing{
			position:relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}
		.tit{
			font-size: $font-base;
			margin-left:10upx;
		}
		.icon-bangzhu1{
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}
		.share-btn{
			flex: 1;
			text-align:right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}
		.icon-you{
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}
	
	.c-list{
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;
		.c-row{
			display:flex;
			align-items:center;
			padding: 20upx 30upx;
			position:relative;
		}
		.tit{
			width: 140upx;
		}
		.con{
			flex: 1;
			color: $font-color-dark;
			.selected-text{
				margin-right: 10upx;
			}
		}
		.bz-list{
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			text{
				display: inline-block;
				margin-right: 30upx;
			}
		}
		.con-list{
			flex: 1;
			display:flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.red{
			color: $uni-color-primary;
		}
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.e-header{
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.tit{
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}
			.tip{
				flex: 1;
				text-align: right;
			}
			.icon-you{
				margin-left: 10upx;
			}
		}
	}
	.eva-box{
		display: flex;
		padding: 20upx 0;
		.portrait{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;
			.con{
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}
			.bot{
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color:$font-color-light;
			}
		}
	}
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;
				.price{
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}
			.selected{
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 30upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.5);
		border-radius: 16upx;
		
		.p-b-btn{
			display:flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;
			.yticon{
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}
			&.active, &.active .yticon{
				color: $uni-color-primary;
			}
			.icon-fenxiang2{
				font-size: 42upx;
				transform: translateY(-2upx);
			}
			.icon-shoucang{
				font-size: 46upx;
			}
		}
		.action-btn-group{
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
			margin-left: 20upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255,255,255,.5);
			}
			.action-btn{
				display:flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base ;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
		/*
		全局公共样式和字体图标
	*/
	@font-face {
		font-family: yticon;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf') format('truetype');
	}
	
	.yticon {
		font-family: "yticon" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.icon-yiguoqi1:before {
		content: "\e700";
	}
	
	.icon-iconfontshanchu1:before {
		content: "\e619";
	}
	
	.icon-iconfontweixin:before {
		content: "\e611";
	}
	
	.icon-alipay:before {
		content: "\e636";
	}
	
	.icon-shang:before {
		content: "\e624";
	}
	
	.icon-shouye:before {
		content: "\e626";
	}
	
	.icon-shanchu4:before {
		content: "\e622";
	}
	
	.icon-xiaoxi:before {
		content: "\e618";
	}
	
	.icon-jiantour-copy:before {
		content: "\e600";
	}
	
	.icon-fenxiang2:before {
		content: "\e61e";
	}
	
	.icon-pingjia:before {
		content: "\e67b";
	}
	
	.icon-daifukuan:before {
		content: "\e68f";
	}
	
	.icon-pinglun-copy:before {
		content: "\e612";
	}
	
	.icon-dianhua-copy:before {
		content: "\e621";
	}
	
	.icon-shoucang:before {
		content: "\e645";
	}
	
	.icon-xuanzhong2:before {
		content: "\e62f";
	}
	
	.icon-gouwuche_:before {
		content: "\e630";
	}
	
	.icon-icon-test:before {
		content: "\e60c";
	}
	
	.icon-icon-test1:before {
		content: "\e632";
	}
	
	.icon-bianji:before {
		content: "\e646";
	}
	
	.icon-jiazailoading-A:before {
		content: "\e8fc";
	}
	
	.icon-zuoshang:before {
		content: "\e613";
	}
	
	.icon-jia2:before {
		content: "\e60a";
	}
	
	.icon-huifu:before {
		content: "\e68b";
	}
	
	.icon-sousuo:before {
		content: "\e7ce";
	}
	
	.icon-arrow-fine-up:before {
		content: "\e601";
	}
	
	.icon-hot:before {
		content: "\e60e";
	}
	
	.icon-lishijilu:before {
		content: "\e6b9";
	}
	
	.icon-zhengxinchaxun-zhifubaoceping-:before {
		content: "\e616";
	}
	
	.icon-naozhong:before {
		content: "\e64a";
	}
	
	.icon-xiatubiao--copy:before {
		content: "\e608";
	}
	
	.icon-shoucang_xuanzhongzhuangtai:before {
		content: "\e6a9";
	}
	
	.icon-jia1:before {
		content: "\e61c";
	}
	
	.icon-bangzhu1:before {
		content: "\e63d";
	}
	
	.icon-arrow-left-bottom:before {
		content: "\e602";
	}
	
	.icon-arrow-right-bottom:before {
		content: "\e603";
	}
	
	.icon-arrow-left-top:before {
		content: "\e604";
	}
	
	.icon-icon--:before {
		content: "\e744";
	}
	
	.icon-zuojiantou-up:before {
		content: "\e605";
	}
	
	.icon-xia:before {
		content: "\e62d";
	}
	
	.icon--jianhao:before {
		content: "\e60b";
	}
	
	.icon-weixinzhifu:before {
		content: "\e61a";
	}
	
	.icon-comment:before {
		content: "\e64f";
	}
	
	.icon-weixin:before {
		content: "\e61f";
	}
	
	.icon-fenlei1:before {
		content: "\e620";
	}
	
	.icon-erjiye-yucunkuan:before {
		content: "\e623";
	}
	
	.icon-Group-:before {
		content: "\e688";
	}
	
	.icon-you:before {
		content: "\e606";
	}
	
	.icon-forward:before {
		content: "\e607";
	}
	
	.icon-tuijian:before {
		content: "\e610";
	}
	
	.icon-bangzhu:before {
		content: "\e679";
	}
	
	.icon-share:before {
		content: "\e656";
	}
	
	.icon-yiguoqi:before {
		content: "\e997";
	}
	
	.icon-shezhi1:before {
		content: "\e61d";
	}
	
	.icon-fork:before {
		content: "\e61b";
	}
	
	.icon-kafei:before {
		content: "\e66a";
	}
	
	.icon-iLinkapp-:before {
		content: "\e654";
	}
	
	.icon-saomiao:before {
		content: "\e60d";
	}
	
	.icon-shezhi:before {
		content: "\e60f";
	}
	
	.icon-shouhoutuikuan:before {
		content: "\e631";
	}
	
	.icon-gouwuche:before {
		content: "\e609";
	}
	
	.icon-dizhi:before {
		content: "\e614";
	}
	
	.icon-fenlei:before {
		content: "\e706";
	}
	
	.icon-xingxing:before {
		content: "\e70b";
	}
	
	.icon-tuandui:before {
		content: "\e633";
	}
	
	.icon-zuanshi:before {
		content: "\e615";
	}
	
	.icon-zuo:before {
		content: "\e63c";
	}
	
	.icon-shoucang2:before {
		content: "\e62e";
	}
	
	.icon-shouhuodizhi:before {
		content: "\e712";
	}
	
	.icon-yishouhuo:before {
		content: "\e71a";
	}
	
	.icon-dianzan-ash:before {
		content: "\e617";
	}
	
	
	
	
	
	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}
	/* 骨架屏替代方案 */
	.Skeleton {
		background: #f3f3f3;
		padding: 20upx 0;
		border-radius: 8upx;
	}
	
	/* 图片载入替代方案 */
	.image-wrapper {
		font-size: 0;
		background: #f3f3f3;
		border-radius: 4px;
	
		image {
			width: 100%;
			height: 100%;
			transition: .6s;
			opacity: 0;
	
			&.loaded {
				opacity: 1;
			}
		}
	}
	
	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}
	
	.common-hover {
		background: #f5f5f5;
	}
	
	/*边框*/
	.b-b:after,
	.b-t:after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		height: 0;
		content: '';
		transform: scaleY(.5);
		border-bottom: 1px solid $border-color-base;
	}
	
	.b-b:after {
		bottom: 0;
	}
	
	.b-t:after {
		top: 0;
	}
	
	/* button样式改写 */
	uni-button,
	button {
		height: 80upx;
		line-height: 80upx;
		font-size: $font-lg + 2upx;
		font-weight: normal;
	
		&.no-border:before,
		&.no-border:after {
			border: 0;
		}
	}
	
	uni-button[type=default],
	button[type=default] {
		color: $font-color-dark;
	}
	
	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}
	
	.placeholder {
		color: #999999;
	}
	.icon1 {
		font-family: 'HM-font' !important;
		font-size: 60upx;
		font-style: normal;
		color: #303133;
	}
		.length{
			margin-top: 20upx;
			margin-left: -80%;
			display: block;
			justify-content: space-between;
			align-items: center;
			padding-top: 20upx;
			.text{
				font-size: 30upx;
			}
			.number{
				display: flex;
				margin-left: -52%;
				padding-top: 20upx;
				justify-content: center;
				align-items: center;
				.input{
					width: 80upx;
					height: 60upx;
					margin: 0 10upx;
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
					input{
						width: 80upx;
						height: 60upx;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						font-size: 26upx;
					}
				}
				
				.sub ,.add{
					width: 60upx;
					height: 60upx;
					.icon{
						font-size: 30upx;
						width: 60upx;
						height: 60upx;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
		.title{
			height: var(--status-bar-height);  
		}
		.mescroll-totop {
			z-index: 10;
			position: fixed !important; /* 避免编译到H5,在多mescroll中定位失效 */
			right: 20upx;
			bottom: 210upx;
			width: 72upx;
			height: 72upx;
			border-radius: 50%;
			opacity: 0.95;
		}
</style>
