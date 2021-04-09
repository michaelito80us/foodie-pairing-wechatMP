// pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  goToBookingDetails(e) {
    wx.navigateTo({
      url: `/pages/slotconfirmation/slotconfirmation?id=${e.currentTarget.dataset.id}`,
    })
  },

  goToConfirmedBooking(e) {
    wx.navigateTo({
      url: `/pages/slotconfirmation/slotconfirmation?id=${e.currentTarget.dataset.id}`,
    })
  },
  

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
    const that = this
    // wx.showLoading({
    //   title: 'Loading..',
    // })
    const userId = getApp().globalData.userId
  
    const url = getApp().getHost() + `users/${userId}`
    wx.request({
      url: url, 
      method: 'GET',
      success(res){
        that.setData({
          user: res.data.user
          // restaurant_name: res.user.pendingbookings.restaurant_name,
          // date: res.user.pendingbookings.date
        })
        wx.hideLoading({})
      }
    })
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