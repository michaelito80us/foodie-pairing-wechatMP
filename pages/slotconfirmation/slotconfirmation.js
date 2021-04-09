Page({
  data: {
  

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
    
    const url = `http://localhost:3000/api/v1/users/${userId}/bookings/${that.options.id}`
    console.log('url', url)

    wx.request({
      url: url, 
      method: 'GET',
      success(res){
        console.log(1,res)
        that.setData({
          booking: res.data.bookings,
          slot: res.data.bookings.slot
        })
        wx.hideLoading({})
      }
    })
  
  },

  acceptBooking: function() {
    const booking = {status: 'accepted' }
    const that = this
    wx.request({
      url: `http://localhost:3000/api/v1/bookings/${that.options.id}/`,
      data: {booking: booking},
      method: 'PUT',
      success(res) {
        console.log('update res', res)
        if (res.statusCode === 200) {
          wx.switchTab({
            url: '/pages/profile/profile'
          })
        }
      }
      })

    
  },

  rejectBooking: function() {
    const booking = {status: 'rejected' }
    const that = this
    wx.request({
      url: `http://localhost:3000/api/v1/bookings/${that.options.id}/`,
      data: {booking: booking},
      method: 'PUT',
      success(res) {
        console.log('update res', res)
        if (res.statusCode === 200) {
          wx.switchTab({
            url: '/pages/profile/profile'
          })
        }
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