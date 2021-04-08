// pages/slotslist/slotslist.js
Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  more() {
    const id = this.options.id
    wx.navigateTo({
      url: '/pages/slotdetails/slotdetails',
    })
  },

  add() {
    const id = this.options.id
    wx.navigateTo({
      url: '/pages/slotcreation/slotcreation',
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