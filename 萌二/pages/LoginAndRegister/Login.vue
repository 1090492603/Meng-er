<template>
	<view class="RegisterView" :style="{height:height}">
		<image class="background" :style="{height:height}" mode="aspectFill" src="../../static/LoginAndRegister/background2.jpg"></image>
			<view class="title" :style="{paddingTop:sysheight/9+'px'}">
				<view v-if="isLogin" class="title-Ico">
					<text>萌二</text>
				</view>
				<text class="title-text">
					<text>登录萌二</text>
				</text>
			</view>
			<view class="input-box show" :style="{marginTop:sysheight/5.5+'px',height:sysheight/2.74+'px'}">
				<view class="input-box-content" :style="{height:sysheight/3.146+'px'}">
					<view class="password itemView">
						<image class="password-ico" src="../../static/LoginAndRegister/myself.png"></image>
						<input class="inputs" placeholder="请输入密码" placeholder-class="placeholderClass"/>
					</view>
					<view class="check-password itemView">
						<image class="password-ico" src="../../static/LoginAndRegister/lock.png"></image>
						<input class="inputs" placeholder="请确认密码" placeholder-class="placeholderClass"/>
					</view>
					<view class="forget">忘记密码</view>
					<view class="Register-submit">
						<view class="Register-submit-btn" @tap="goIndex">
							<text>登录</text>
						</view>
					</view>
				</view>
				<view class="GoToRegister">
					<view>
						<text>没有账号？</text>
						<text class="goto" @click="gotoRegister">点击注册</text>
					</view>
				</view>
				
			</view>
		<view class="problem">
			<text>遇到问题 | 寻求帮助</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				sysheight:0,
				height:"",
				phoneNum:0,
				isLogin: true
			}
		},
		created() {
			this.sysheight = uni.getSystemInfoSync().windowHeight
			this.height = `${this.sysheight}px` 
		},
		methods:{
			sendCode(){
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(this.phoneNum)){
				    console.log('请输入正确的手机号码');
				     return;
				} else {
					console.log("发送验证码")
				}
					
			},
			phoneNumInput(e){
				console.log(e.detail.value);
				this.phoneNum = e.detail.value;
			},
			gotoRegister(){
				uni.navigateTo({
					url: "./Register"
				});
			},
			goIndex(){
				uni.showLoading({
				    title: '登陆中~'
				});
				setTimeout(function(){
					 uni.hideLoading();
					 uni.switchTab({
					     url: '../index/index'
					 });
				},1000)
			}
		}
	}
</script>

<style>
	.background{
		width: 100%;
		position: fixed;
		z-index: -1;
	}
	.RegisterView{
	}
	.goBack-text{
		float: right;
		margin-right: 30upx;
		text-align: 34upx;
		color: #666666;
	}
	.title{
		display: flex;
		color: #FFFFFF;
		font-size: 1.3em;
	}
	.title-Ico,.title-text,.Register-submit-btn,.GoToRegister,.problem{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title-Ico{
		background-color: rgb(121,243,254);
		width: 120upx;
		height: 120upx;
		margin-left: 95upx;
		font-size: 40upx;
		border-radius: 20upx;
	}
	.title-text{
		width: 320upx;
		font-size: 50upx;
	}
	.password,.check-password{
		margin-top: 20upx;
		padding-top: 4%;
		display: flex;
		color: #333333;
		align-items: center;
	}
	.password-ico{
		width: 52upx;
		height: 52upx;
	}
	.Register-submit{
		display: flex;
		justify-content: center;
		font-size: 35upx;
		width: 530upx;
		position: absolute;
		bottom: 30upx;
	}
	.Register-submit-btn{
		height: 70upx;
		width: 488upx;
		background-color: #5AA9E1;
		font-size: 34upx;
		color: #FFF;
		border-radius: 50upx;
	}
	.forget{
		text-align: right;
		margin-top: 12upx;
		margin-right: 5upx;
		font-size: 28upx;
		color: #de73de;
	}
	.input-box{
		padding: 0 25upx;
		position: relative;
	}
	.input-box-content{
		background-color: #FFFFFF;
		padding: 30upx 85upx;
		box-sizing: border-box;
		position: relative;
		border-radius: 20upx;
		box-shadow:0px 1px 2px rgba(0,0,0,0.1);
	}
	.placeholderClass{
		color: #CCCCCC;
	}
	.GoToRegister{
		background-color: #F0F0F0;
		width: 578upx;
		height: 62upx;
		margin: 0 auto;
		font-size: 26upx;
		color: #999;
	}
	.goto{
		color: #de73de;
	}
	.itemView{
		border-bottom: 1px solid rgba(0,0,0,0.1);
		height: 25%;
		box-sizing: border-box;
	}
	.inputs{
		font-size: 28upx;
		color: #333333;
		margin-left: 42upx;
	}
	.getBtn{
		width: 160upx;
		font-size: 28upx;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		margin-right: 20upx;
		color: #32B9D6;
	}
	.phone-input{
		width: 200upx;
		margin-right: 0;
	}
	.phoneView{
		display: flex;
		
	}
	.problem{
		position: absolute;
		bottom: 46upx;
		font-size: 26upx;
		color: #32B9D6;
		width: 750upx;
	}
	.show{
		animation: show 1s;
	}
	@keyframes show{
		from{
			opacity: 0;
			top: 40px;
		}
		to{
			opacity: 1;
			top: 0;
		}
	}
</style>
