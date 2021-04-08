// pages/slotcreation/slotcreation.js
Page({

  /**
   * Page initial data
   */
  data: {


  },

  formSubmit: function(event) {

    const name = event.detail.value.name
    const date = event.detail.value.date
    const time = event.detail.value.time
    const address = event.detail.value.address
    const userId = getApp().globalData.userId
    const data = {
      slot: { 
        name: name, 
        date: date,
        time: time,
        address: address,
        user_id: userId
      }
    }
    console.log(data)

    wx.request({
      url: `localhost:3000/api/v1/users/${userId}/slots`, 
      method: 'POST',
      data: data,
      success(res) {
        console.log('update res', res)
        if (res.statusCode === 200) {
          wx.switchTab({
            url: '/pages/slotslist/slotslist'
          })
        }
      }
    })
  },
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