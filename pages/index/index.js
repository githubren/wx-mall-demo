const WXAPI = require('apifm-wxapi')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"",
    goodsRecommend:[],
    kanjiaList:[],
    pingtuanList:[],
    loadingHidden:false,
    selectCurrent:0,
    categories:[],
    activeCategoryId:0,
    goods:[],

    scrollTop:0,
    loadingMoreHidden:true,

    coupons:[],

    curPage:1,
    pageSize:20,
    cateScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取banners数据
    WXAPI.banners({type:'index'}).then(res =>{
      if (res.code == 700) {
        wx.showModal({
          title: '提示',
          content: '请在后台添加 banner 轮播图片，自定义类型填写 index',
          showCancel: false
        })
      } else {
        this.setData({
          banners: res.data
        });
      }
    }).catch(function (res) {
      wx.showToast({
        title: res.msg,
        icon: 'none'
      })
    })
    //获取notice数据
    WXAPI.noticeList({pageSize:5}).then( res=>{
      if(res.code == 0){
        this.setData({
          noticeList:res.data
        })
      }
    })
    //获取分类category数据
    WXAPI.goodsCategory().then(res=>{
      if(res.code == 0){
        this.setData({
          categories:res.data
        })
      }
    })
    WXAPI.goods({recommendStatus:1}).then(res=>{
        if(res.code == 0){
          console.log(res)
          this.setData({
            goodsRecommend:res.data
          })
        }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})