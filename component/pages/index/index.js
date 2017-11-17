//index.js
//获取应用实例
const calendar = require('../../utils/comm.calendar.js');
const app = getApp()
Page({
  data: {
    'start':3,
    'end':34,
    'time_Y': 2017,
    'time_m': 12,
    'time_d': 1,
    'time_list':[]
  },
  onLoad: function () {
    this.calendar.init.call(this);
    console.log(app);
  },
  calendar:calendar,
  onPullDownRefresh:function(){
    setTimeout(function(){
      wx.stopPullDownRefresh();
    },1000);
   
  },
  onReachBottom:function(e){
  }
  
})
