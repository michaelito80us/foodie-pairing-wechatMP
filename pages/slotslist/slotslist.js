const app = getApp()
// pages/slotslist/slotslist.js
Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    wx.request({
      url: 'http://localhost:3000/api/v1/slots',
      method: 'GET',
      success(res){
        console.log(res)
        const slots = res.data.slots;
        page.setData({
          slots: slots
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

  },
  goToSlotDetails: function (event) {
    console.log(123,event)
    const id = event.currentTarget.dataset.id

    wx.navigateTo({
      url: `/pages/slotdetails/slotdetails?id=${id}`,
    })
  }

})