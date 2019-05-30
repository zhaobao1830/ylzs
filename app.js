//app.js
App({
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
        dateY: '2019-03-06',
        dateM: '12:22:23',
        temperature: '37', // 体温
        bloodSugar: '6.5', // 血糖
        bloodPressure: '120/80', // 血压
        urineVolume: '123', // 尿量
        intakeVolume: '122', // 入液量
        liquidOutput: '122', // 出液量
        stoolFrequency: '1' // 大便次数
      }
    ]
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync('signList', this.data.signList)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
