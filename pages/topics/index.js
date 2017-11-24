// pages/topics/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    isLoading:false,
    showLoading:'show',
    showLoadText:'加载中,请稍后...', 
    companyList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },
  loadData:function(){
    var that = this;
    if (this.data.isLoading){
      return false;
    }
    wx.showLoading();
    wx.request({
      url: "https://op114.com/m/topics",
      data: {
        page: that.data.page,
        size: 20
      },
      success: function (res) {
        if (res.executeStatus===1){
          that.data.setData({
            isLoading:true,
            showLoadText:'我是有底线的！',
          });
          wx.hideLoading();
        }else{
          var arr = res.data.companyList;
          var cpyList = that.data.companyList;
          arr.forEach(function (item, index) {
            cpyList.push(item);
          });
          var _page = that.data.page + 1;
          that.setData({
            companyList: cpyList,
            page: _page
          });
          wx.hideLoading();
        }
      }
    })
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
  selectRace: function(e){
    wx.navigateTo({
      url: '/pages/topicsRace/index',
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
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
    this.loadData();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})