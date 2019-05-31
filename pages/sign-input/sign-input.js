// pages/sign-input/sign-input.js
var util = require("../../utils/util");
var timePicker = require('../../utils/timePicker.js');
var nowDate = new Date();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateY: util.formatDay(nowDate), // 日期
    startTime: util.formatTimeN(nowDate),
    dateM: '', // 时间
    temperature: '',
    bloodSugar: '',
    bloodPressure: '',
    urineVolume: '',
    intakeVolume: '',
    liquidOutput: '',
    stoolFrequency: ''
  },
  formSubmit: function (e) {
    var submitSign = e.detail.value
    submitSign.dateY = this.data.dateY
    var startTime = this.data.startTime
    for (var i = 0; i < startTime.length; i++) {
      startTime[i] = util.formatNumber(startTime[i])
      // if (startTime[i] < 10) {
      //   startTime[i] = '0'+startTime[i]
      // }
    }
    submitSign.dateM = startTime.join(":")
    var storageSignList = wx.getStorageSync('signList');
    storageSignList.push(submitSign)
    wx.setStorageSync('signList', storageSignList)
    this.show()
    this.formReset()
  },
  formReset: function () {
    var dataY = util.formatDay(nowDate)
    var obj = timePicker.timePicker(util.formatTimeN(nowDate));
    this.setData({
      dateY: dataY,
      startTime: obj.time,
      startTimeArray: obj.timeArray,
      temperature: '',
      bloodSugar: '',
      bloodPressure: '',
      urineVolume: '',
      intakeVolume: '',
      liquidOutput: '',
      stoolFrequency: ''
    })
  },
  startTimeColumn(e) {
    var startTimeArr = this.data.startTime;
    startTimeArr[e.detail.column] = e.detail.value
    this.setData({
      startTime: startTimeArr
    });

  },
  startTimeChange: function (e) {
    var startTimeArr = this.data.startTime;
    startTimeArr[e.detail.column] = e.detail.value;
    this.setData({
      startTime: startTimeArr
    });

  },
  show () {
    wx.lin.showToast({
      title: '添加成功~',
      icon: 'success',
      iconStyle: 'color:#7ec699; size: 60',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(util.formatTimeN(nowDate))
    // 获取时分秒数组，在页面中显示
    var obj = timePicker.timePicker(util.formatTimeN(nowDate));
    this.setData({
      startTimeArray: obj.timeArray,
      startTime: obj.time
    });
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
