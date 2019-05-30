// pages/sign-input/sign-input.js
var util = require("../../utils/util");
var timePicker = require('../../utils/timePicker.js');
var nowDate = new Date();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateY: util.formatDay(nowDate),
    startTime: util.formatTimeN(nowDate),
    dateM: '',
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
      if (startTime[i] < 10) {
        startTime[i] = '0'+startTime[i]
      }
    }
    console.log(startTime)
    submitSign.dateM = startTime.join(":")
    var storageSignList = wx.getStorageSync('signList');
    storageSignList.push(submitSign)
    wx.setStorageSync('signList', storageSignList)
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
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
  bindDateYChange: function(e) {
    this.setData({
      dateY: e.detail.value
    })
  },
  bindDateMChange: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  startTimeColumn(e) {
    console.log('我是startTimeColumn')
    var startTimeArr = this.data.startTime;
    console.log(startTimeArr)
    console.log(e.detail.value)
    startTimeArr[e.detail.column] = e.detail.value
    console.log(startTimeArr)
    this.setData({
      startTime: startTimeArr
    });

  },
  startTimeChange: function (e) {
    console.log('我是startTimeChange')
    var startTimeArr = this.data.startTime;
    startTimeArr[e.detail.column] = e.detail.value;
    this.setData({
      startTime: startTimeArr
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
