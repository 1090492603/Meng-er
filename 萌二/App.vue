<script>
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
			success: function(e) {
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				};
				// #endif
				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
				// #endif       
				// #ifdef MP-ALIPAY
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
				// #endif
			}
		})
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onUniNViewMessage:function(e){
		  console.log(JSON.stringify(e.data));
		  this.PageCur = JSON.stringify(e.data.dataCur);
		  this.$store.state.PageCur=this.PageCur;
		  this.sCur = JSON.stringify(e.data.sCur);
		  this.$store.state.sCur=this.sCur;
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
</style>
