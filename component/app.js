//app.js
App({
  onLaunch: function () {
    wx.getUserInfo({
      success:function(e){
        console.log(e);
      }
    });
  },
  globalData: {
    userInfo: null
  }
})