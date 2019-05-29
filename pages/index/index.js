//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    personalInfo: '个人信息',
    signInfo: '体征信息',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 跳转到消息页面
  bindViewNews: function() {
    wx.navigateTo({
      url: '../news/news'
    })
  },
  // 跳转到个人信息页面
  bindViewPersonal: function() {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  // 跳转到体征消息页面
  bindViewSign: function() {
    wx.navigateTo({
      url: '../sign/sign'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
