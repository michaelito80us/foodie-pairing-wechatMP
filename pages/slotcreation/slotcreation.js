// pages/slotcreation/slotcreation.js
const app = getApp()
const url = getApp().getHost() + app.globalData.api
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
    const message = event.detail.value.message
    const userId = getApp().globalData.userId
    const data = {
      slot: { 
        restaurant_name: name, 
        date: date,
        time: time,
        restaurant_address: address,
        message: message,
        user_id: userId
      }
    }
    console.log(data)

    wx.request({
      url: `${url}users/${userId}/slots`, 
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
  changeDate(e) {
    this.setData({
      selectedDate: e.detail.value
    })
  },

  changeTime(e) {
    this.setData({ 
      selectedTime: e.detail.value
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