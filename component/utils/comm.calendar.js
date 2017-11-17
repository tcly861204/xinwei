module.exports = {
  init: function () {
    this.setData({
      calendar: {
        calendar_start: 0,
        calendar_end: 0,
        calendar_year: 2000,
        calendar_Month: 10,
        calendar_day: 29,
        calendar_showArray: [],
      }
    });
    //初始化事件
    this.calendar.bindEvents.call(this);
    //初始化日历
    this.calendar.showTime.call(this);

  },
  bindEvents: function () {
    function preMonth(){
      var m = this.data.time_m,
        Y = this.data.time_Y;
      this.setData({
        'time_m': (function () {
          return m - 1 > 0 ? m - 1 : 12;
        }()),
        'time_Y': (function () {
          return m - 1 > 0 ? Y : Y - 1;
        }())
      });
      this.calendar.showTime.call(this, {
        Y: this.data.time_Y,
        m: this.data.time_m,
        d: this.data.time_d
      });
    }
    function nextMonth(){
      var m = this.data.time_m,
        Y = this.data.time_Y;
      this.setData({
        'time_m': (function () {
          return m + 1 < 13 ? m + 1 : 1;
        }()),
        'time_Y': (function () {
          return m + 1 < 13 ? Y : Y + 1;
        }())
      });
      this.calendar.showTime.call(this, {
        Y: this.data.time_Y,
        m: this.data.time_m,
        d: this.data.time_d
      });
    }
    this.changeTime = function (e) {
      if (e.currentTarget.dataset) {
        switch (e.currentTarget.dataset.item) {
          case 'preYear':
            var Y = this.data.time_Y;
            this.setData({
              'time_Y': (Y - 1)
            });
            this.calendar.showTime.call(this, {
              Y: this.data.time_Y,
              m: this.data.time_m,
              d: this.data.time_d
            });
            break;
          case 'nextYear':
            var Y = this.data.time_Y;
            this.setData({
              'time_Y': (Y + 1)
            });
            this.calendar.showTime.call(this, {
              Y: this.data.time_Y,
              m: this.data.time_m,
              d: this.data.time_d
            });
            break;
          case 'preMonth':
            preMonth.call(this);
            break;
          case 'nextMonth':
            nextMonth.call(this);
            break;
        }
      }
    }
    this.calendarDis = {

    };
    this.tapStart = function (e) {
      if (e.touches.length === 1) {
        this.calendarDis.startDisX = e.touches[0].pageX;
        this.calendarDis.startDisY = e.touches[0].pageY;
      }

    }
    this.tapMove = function (e) {
      if (e.touches.length === 1) {
        this.calendarDis.moveDisX = e.touches[0].pageX;
        this.calendarDis.moveDisY = e.touches[0].pageY;
      }
    }
    this.tapEnd = function (e) {
      if (e.type === "touchend") {
        var dis = this.calendarDis;
        if(dis.hasOwnProperty('moveDisX')){
          if ((dis.startDisX - dis.moveDisX) < 0 && Math.abs(dis.startDisX - dis.moveDisX) >100) {  //向右
            nextMonth.call(this);
          }
          if ((dis.startDisX - dis.moveDisX) > 0 && Math.abs(dis.startDisX - dis.moveDisX)>100) {  //向左
            preMonth.call(this);
          }
        }
      }
    }
  },
  showTime: function (time) {
    var now = new Date();
    if (time) {
      now = new Date(time.Y, time.m - 1, time.d);
    }
    const Y = now.getFullYear();
    const m = now.getMonth();
    const d = now.getDate();
    const nowMonthOneDay = new Date(Y, m, 1);
    const nowMonthOneDayWeek = nowMonthOneDay.getDay() || 7;
    const nowMonthLastDay = new Date(new Date(Y, m + 1, 1).getTime() - 24 * 3600 * 1000);
    const preMonthLastDay = new Date(nowMonthOneDay.getTime() - 24 * 3600 * 1000);
    var arr = [],
      len = 42;
    for (var j = preMonthLastDay.getDay() - 1; j >= 0; j--) {
      arr[j] = preMonthLastDay.getDate() + j - 1
    }
    for (var i = 0; i < nowMonthLastDay.getDate(); i++) {
      arr[nowMonthOneDayWeek + i - 1] = i + 1;
    }
    var nowLen = arr.length;
    for (var k = nowLen; k < 42; k++) {
      arr[k] = k - nowLen + 1;
    }
    this.setData({
      'start': preMonthLastDay.getDay(),
      'end': preMonthLastDay.getDay() + nowMonthLastDay.getDate(),
      'time_Y': Y,
      'time_m': m + 1,
      'time_d': d,
      'time_list': arr
    });
  }
}