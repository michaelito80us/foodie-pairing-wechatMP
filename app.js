// app.js
App({
  onLaunch: function () {
    const host = 'https://foodie-pairing.herokuapp.com/'
    console.log('beginning login')
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
          }
        })
      }
    })
  },
  globalData: {
    // host: 'https://foodie-pairing.herokuapp.com/',
    // // host: 'htts://localhost:3000/',
    // api: 'api/v1/'
  }
})
