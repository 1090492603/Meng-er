<template>
	<view>
		<view class="search-view" ref="search">
			<!-- <view class="back"><text class="cuIcon-back icoFont" @click="back"></text></view> -->
			<view class="input-box">
				<text class="searchIco cuIcon-search"></text>
				<!-- 这里要注意一个地方 页面跳转进来的时候 要使用 :focus="true" 来自动获取焦点 -->
				<input class="search-input" ref="searchInput" @blur="blur" :focus="isFocus" @change="change" @confirm="confirm" @input="input" :value="value" confirm-type="search" placeholder="热门搜索"/>
				<text class="back cuIcon-close" @click="back"></text>
			</view>
			
		</view>
		<Tag v-if="!value" @change="valueChange"></Tag>
		<searchResult v-if="value"></searchResult>
	</view>
	
</template>

<script>
	export default{
		data() {
			return {
				value: "",
				height: 0,
				TabCur: 0,
				isFocus: true
				
			};
		},
		created() {
			
		},
		methods: {
			
			tabSelect(e) {
				this.TabCur = parseInt(e.currentTarget.dataset.id)
			},
			change(e){
			},
			input(e){
				this.value = e.detail.value;
				console.log(e)
			},
			confirm(e){
				console.log("confirm")
			},
			blur(e){
				console.log("blur")
			},
			back(){
				this.isFocus = false
				uni.navigateBack({
				    delta: 1
				});
			},
			valueChange(data){
				this.isFocus = false
				this.value = data;
			},

			
		},
		
	}
</script>

<style>
	@import "../../colorui/main.css";
	@import "../../colorui/icon.css";
	page{
		background-color:#FFFFFF;
	}
	.icoFont{
		font-size: 22px;
		color: white;
	}
	
	.search-view{
		position: relative;
		padding-top: 20px;
		padding-bottom: 10px;
		padding-left: 10px;
		padding-right: 10px;
		height: 68px;
		border-bottom:1px solid #F1F1F1;
	}
	.input-box{
		margin-top: 5px;
	}
	.search-input{
		padding-left: 39px;
		padding-top: 4px;
		font-size: 1.1em;
		border-radius: 40px;
		width: 90%;
		height: 35px;
		background-color: #E8E8E8;
		color: #999;

		
	}
	.back,.searchIco{
		position: absolute;
		top: 44%;
		font-size: 24px;
		color: #b0c6ff ;
	}
	.back{
		right: 4%;
		font-size: 26px;
		font-weight: bold;
	}
	.searchIco{
		left: 6%;
	}
</style>
