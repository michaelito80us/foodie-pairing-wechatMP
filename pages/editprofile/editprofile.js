// pages/editprofile/editprofile.js
const app = getApp()
const url = getApp().getHost() + app.globalData.api

Page({

  /**
   * Page initial data
   */
  data: {

  },
  formSubmit: function(event) {
    console.log('edit', event)
    const user = event.detail.value
    console.log(user)
    // const id = getApp().globalData.userId
    const id = 11
    const page = this

    wx.request({
      url: `${url}users/${id}`,
      method: 'PUT',
      data: {user: user},
      success(res) {
        console.log('edit profile', res)
        if (res.statusCode === 200) {
          wx.switchTab({
            url: '/pages/profile/profile',
          })
        }
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    
    wx.request({
      url: `${url}users/${id}`,
      method: 'GET',
      success(res) {
        console.log(res)
        const user = res.data.user
        page.setData({
          user: user
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})