// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signList: []
  },
  // 跳转到体征详情页面
  bindViewSignDetail: function (event) {
    var index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../sign-detail/sign-detail?index=' + index
    })
  },
  // 跳转到体征录入页面
  bindViewSignInput: function () {
    wx.navigateTo({
      url: '../sign-input/sign-input'
    })
  },
  getSignLists: function () {
    var signLists = wx.getStorageSync('signList')
    this.setData({
      signList: signLists
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSignLists()
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
    this.getSignLists()
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
