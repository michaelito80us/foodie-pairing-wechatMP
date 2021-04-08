const app = getApp()
const url = getApp().getHost() + app.globalData.api
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
    let page = this;
    console.log(123, url)
    let userId = getApp().globalData.userId
    
    console.log('ID= ', userId)
    
    wx.request({
      url:`${url}slots`,
      method: 'GET',
      data: {user_id: userId},
      success(res){
        console.log(res)
        const slots = res.data.slots;
        page.setData({
          slots: slots
        })
      }
    })


    
    wx.request({
      url:`${url}slots`,
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