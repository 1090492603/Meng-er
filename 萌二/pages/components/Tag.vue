<template>
	<view>
		<view class="card">
			<text class="card-text">热门搜索</text>
			<view class="padding bg-white solid-bottom componentBox">
				<view class='cu-tag radius' v-for="item in hotList" @click="valueChange" :key="item.index">{{item.value}}</view>
			</view>
		</view>
		<view class="card">
			<text class="card-text">历史搜索</text>
			<view class="padding bg-white solid-bottom componentBox">
				<view class='cu-tag radius' v-for="item in hosipList" @click="valueChange" :key="item.index">{{item.value}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				hotList:[{
					value: '黄晓明'
				},{
					value: '鹿晗'
				},{
					value: '蔡徐坤'
				},{
					value: '张润钊'
				},{
					value: '李现'
				},{
					value: '李冰冰'
				}],
				hosipList:[{
					value: '黄晓明'
				},{
					value: '鹿晗'
				},{
					value: '蔡徐坤'
				},{
					value: '张润钊'
				},{
					value: '李现'
				},{
					value: '李冰冰'
				}]
			}
		},
		methods:{
			valueChange(e){
				this.$emit('change',e._relatedInfo.anchorTargetText)
			}
		}
	}
</script>

<style>
	.cu-tag{
		font-size: 32upx;
		margin: 6px 0;
		margin-right: 8px;
		background-color: #eff4ff !important;
	}
	.cu-tag:last-child{
		margin-bottom: 10px;
	}
	.componentBox{
		padding: 0 12px;
	}
	.card-text{
		font-size: 34upx;
		margin-left: 10px;
		color:  #333;
	}
	.card{
		margin-top: 10px;
	}
</style>
