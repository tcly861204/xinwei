Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    indicatorColor: '#ccc',
    indicatorActiveColor: '#007aff',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  /**
  * 1.生命周期函数--监听页面加载
  */
  onLoad() {
    console.log(1);
  },

  /**
   * 2.生命周期函数--监听页面显示
   */
  onShow() {
    console.log(2);
  },


  /**
   * 3.生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    console.log(3);
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('1111');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },


})