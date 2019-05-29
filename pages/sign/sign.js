// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signList: [
      {
        dateY: '2019-03-05',
        dateM: '12:22:22',
        temperature: '36', // 体温
        bloodSugar: '6.7', // 血糖
        bloodPressure: '120/80', // 血压
        urineVolume: '123', // 尿量
        intakeVolume: '122', // 入液量
        liquidOutput: '122', // 出液量
        stoolFrequency: '1' // 大便次数
      },
      {
        dateY: '2019-03-05',
        dateM: '12:22:22',
        temperature: '36', // 体温
        bloodSugar: '6.7', // 血糖
        bloodPressure: '120/80', // 血压
        urineVolume: '123', // 尿量
        intakeVolume: '122', // 入液量
        liquidOutput: '122', // 出液量
        stoolFrequency: '1' // 大便次数
      }
    ]
  },
  bindViewSignDetail: function () {
    wx.navigateTo({
      url: '../sign-detail/sign-detail'
    })
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
