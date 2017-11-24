// pages/find/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rs: null,
        shareURL:null,
        imgHeight:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        var url = that.route + '?id=' + options.id;
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url: 'https://dev.op114.com/magazine/pic/' + options.id, //仅为示例，并非真实的接口地址
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                console.log(res);
                that.setData({
                    rs: res.data.values,
                    shareURL: url 
                });
                if (that.data.rs.pictureUrl) {
                    wx.getImageInfo({
                        src: that.data.rs.pictureUrl + '?imageMogr2/thumbnail/750>',
                        success: function(e) {
                          that.setData({
                            imgHeight:(e.height * 375 / e.width)
                          });
                          wx.hideLoading();
                        }
                    });
                }

                wx.setNavigationBarTitle({
                    title: res.data.values.title
                });
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },
    previewImage: function(e) {
        var current = e.target.dataset.src;
        console.log(current);
        wx.previewImage({
            current: current, // 当前显示图片的http链接  
            urls: [current] // 需要预览的图片http链接列表  
        })

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log('页面被隐藏了');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function(res) {
      console.log(res);
      return {

        title: this.data.rs.title,
        desc: this.data.rs.description || '',
        imageUrl: this.data.rs.pictureUrl+'?imageMogr2/thumbnail/120>',
        path: this.data.shareURL

      }

    }
})