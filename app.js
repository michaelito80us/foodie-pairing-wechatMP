let dev;
dev = true

// app.js
App({
  onLaunch: function () {
    const host = this.getHost()
    console.log('beginning login', host)
    wx.login({
      success: (res) => {
        console.log('res from login', res)
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          success: (res) => {
            console.log('res from succesful login', res)
            console.log('userID', res.data.userId)
            this.globalData.userId = res.data.userId
          },
        })
      }
    })
  },
  globalData: {
    userInfo: {},
    env: dev?'dev':'prod',
    host: {

      dev: "http://localhost:3000/",
      prod: "https://foodie-pairing.herokuapp.com/"
    },
    api: 'api/v1/'
  },
  getHost() {
    return this.globalData.host[this.globalData.env]
  }
})


