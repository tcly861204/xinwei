// pages/myCard/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:null,
    userFace:null,
    userInfo:{
      userName:'吴天赐',
      userFace:'',
      tell:'13500000000',
      job:'前端开发',
      cpy:'深圳市同天下科技有限公司',
      cpyType:'集旅行社SaaS智能管理系统研发、销售及建立行业数据中心为一体的新型互联网企业',
      address:'深圳市龙岗区横岗街道力嘉路108号2013文化创客园A312-314',
      email:'wutianci@op110.com'
    },
    imgList:[
      "http://cdnfile.op110.com.cn/files/1/file/20171120/1_1511172043164.jpg",
      "http://cdnfile.op110.com.cn/files/1/file/20171120/2_1511172064799.jpg",
      "http://cdnfile.op110.com.cn/files/1/file/20171120/3_1511172076620.jpg",              
      "http://cdnfile.op110.com.cn/files/1/file/20171120/4_1511172088814.jpg",
      "http://cdnfile.op110.com.cn/files/1/file/20171120/5_1511172103949.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success:function(res){
        var data = that.data;
        data.userInfo.userName = res.userInfo.nickName;
        data.userInfo.userFace = res.userInfo.avatarUrl;
        that.setData(data);
      }
    })
    wx.setNavigationBarTitle({
      title: '旅游人名片夹'
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
  saveInfo:function(){
    var use = this.data.userInfo;

    wx.addPhoneContact({
      photoFilePath:use.userFace,
      nickName:use.userName,
      firstName: use.userName,   //名字
      mobilePhoneNumber: use.tell,    //手机号
      addressCity:use.address,
      title:use.job,
      email:use.email,
      organization:use.cpy,
      success: function (res) {
        // if (res.errMsg ==='addPhoneContact:ok'){
        //   wx.showToast({
        //     title: '信息保存成功',
        //     icon: 'success',
        //     duration: 2000
        //   })
        // }
      }
    });
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
  onShareAppMessage: function (res) {
    return {
      title: this.data.userInfo.userName+'旅游人名片',
      desc: '工作与'+this.data.userInfo.userName,
      path: this.data.shareURL
    }
  }
})