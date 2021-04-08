const app = getApp()
// pages/landing/landing.js
Page({

  /**
   * Page initial data
   */
  data: {
    src: '/images/Foodie-Pairing2.PNG'
  },

  goToHome() {
    wx.switchTab({
      url: '/pages/slotslist/slotslist',
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

  goToSlotsPage: function (){
    wx.switchTab({
      url: '/pages/slotslist/slotslist',
    })
  }
})