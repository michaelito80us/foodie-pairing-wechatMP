const app = getApp()
// pages/slotdeatils/slotdetails.js
Page({

  /**
   * Page initial data
   */
  data: {
    // showModal: function(event) {
    //   this.setData({
    //     showModalStatus: true
    //   })
  },

  /**
   * Lifecycle function--Called when page load
   */
  requestToJoin() {

    const id = this.options.id
    const url = app.globalData.host[app.globalData.env]
    const page = this

    console.log(id)
    
    wx.showToast({
      title: 'Request sent',
      icon: 'success',
      duration: 1500
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
  onShow: function (options) {
    //options = {id:1}
    console.log(123, this.options)
    const id = this.options.id
    const url = app.globalData.host[app.globalData.env]
    const page = this

    console.log({url})
    console.log(id)

    wx.request({
      url:`${url}/slots/${id}`,
      method: 'GET',
      success(res){
        console.log(res)
        //page.setData({slot: res.data.slot})
        page.setData(res.data)
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