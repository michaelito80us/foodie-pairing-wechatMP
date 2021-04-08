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
    // wx.showLoading({
    //   title: 'Loading..',
    // })
    wx.request({
      url: `http://localhost:3000/api/v1/users/${getApp().globalData.userId}/bookings/${this.options.id}`, 
      method: 'GET',
      success(res){
        this.setData({
          name: res.data.name,
          date: res.data.date,
          time: res.data.time,
          location: res.data.location
        })
        wx.hideLoading({})
      }
    })
  
  },

  acceptBooking: function() {
    const booking = {status: 'accepted' }
    wx.request({
      url: `http://localhost:3000/api/v1/users/${getApp().globalData.userId}/${this.options.id}/`,
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
    wx.request({
      url: `http://localhost:3000/api/v1/users/${getApp().globalData.userId}/${this.options.id}/`,
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