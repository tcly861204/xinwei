const qiniuUploader = require("../../utils/qiniuUploader-min.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },
  chooseImg:function(){
    var _this = this;
    wx.chooseImage({
      success: function (res) {
        var filePath = res.tempFilePaths[0];
        _this.uploadServer(filePath);
      }
    });
  },
  uploadServer: function (filePath){
    qiniuUploader.upload(filePath, (res) => {
      console.log(res.imageURL);
    }, (error) => {
      console.log('error: ' + error);
    }, {
        region: 'ECN',
        domain: 'https://ohp96o3wl.qnssl.com',
        uptoken: 'NZrTFjztBSRINUzLMYGRGtuxYBzbE8MeLTXoRgyy:1-PJVAU9urvmJ88CrQl8DuVaVgk=:eyJzY29wZSI6InRvbnRpc2EtdGVzdC14cWVycCIsImRlYWRsaW5lIjoxNTExMzUwOTgxfQ=='
      });
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})