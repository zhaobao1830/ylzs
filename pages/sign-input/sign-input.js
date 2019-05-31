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
    }
    submitSign.dateM = startTime.join(":")
    var storageSignList = wx.getStorageSync('signList');
    storageSignList.push(submitSign)
    wx.setStorageSync('signList', storageSignList)
    this.toastShow()
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
  // 选择时间的时候触发
  startTimeColumn(e) {
    var startTimeArr = this.data.startTime;
    startTimeArr[e.detail.column] = e.detail.value
    this.setData({
      startTime: startTimeArr
    });
  },
  // 确定的时候触发
  startTimeChange: function (e) {
    var startTimeArr = this.data.startTime;
    startTimeArr[e.detail.column] = e.detail.value;
    this.setData({
      startTime: startTimeArr
    });

  },
  // 提示信息
  toastShow () {
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
  }
})
