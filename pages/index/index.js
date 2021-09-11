// pages/index/index.js
import util from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list:[
      {
        showmore:true,
        name:'主包',
        list:[
          {
            name:'物流页面+skeleton条',
            url:'/pages/demo/index'
          },
          {
            name:'物流的第二种写法(伪元素after)',
            url:'/pages/demo/index2'
          },
          {
            name:'日历样式一',
            url:'/pages/cal/index'
          },
          {
            name:'日历样式二',
            url:'/pages/cal2/index'
          },
          {
            name:'日历样式三',
            url:'/pages/cal/index2'
          },
          {
            name:'日历样式四',
            url:'/pages/cal2/index2'
          }
        ]
      }, 
      {
        showmore:false,
        name:'分包another',
        list:[
          {
            name:'scroll-view左右滚动导航条',
            url:'/pages/another/scroll-x/index'
          },
          {
            name:'swiper3D轮播图',
            url:'/pages/another/swiper-threeD/index'
          },
          {
            name:'圆环进度条一(wx.canvasToTempFilePath)',
            url:'/pages/another/circleRing/index'
          },
          {
            name:'圆环进度条2(接口已废弃)',
            url:'/pages/another/circleRing/index2'
          }
        ]
      },
      {
        showmore:false,
        name:'分包subPack',
        list:[
          {
            name:'loading加载动画17个（1）',
            url:'/pages/subPack/loading/index'
          },
          {
            name:'loading加载动画15个（2）',
            url:'/pages/subPack/loading/index2'
          },
          {
            name:'loading加载动画18个（3）',
            url:'/pages/subPack/loading/index3'
          },
          {
            name:'其他的一些动画',
            url:'/pages/subPack/otherAnimation/index'
          },
         
          {
            name:'小程序启动页面动画',
            url:'/pages/subPack/loading/loadPage'
          },
          {
            name:'canvas生成海报',
            url:'/pages/subPack/canvasPoster/index'
          },
          {
            name:'animation动画，五福合成效果',
            url:'/pages/subPack/animationBox/index'
          },
          {
            name:'日历样式五',
            url:'/pages/subPack/calen/index2'
          },
          {
            name:'日历样式六',
            url:'/pages/subPack/calen/index3'
          },
          {
            name:'canvas2d圆环进度条(同层渲染)',
            url:'/pages/subPack/canvas2d/index'
          },
        ]
      },
      {
        showmore:false,
        name:'分包cssCase',
        list:[
          {
            name:'css3的圆锥渐变',
            url:'/pages/cssCase/conic-gradient/index'
          },
          {
            name:'仿照手机充电的动画',
            url:'/pages/cssCase/chargeCss/index'
          },
          {
            name:'颜色盘',
            url:'/pages/cssCase/colorChange/index'
          },
          {
            name:'炫酷能量球',
            url:'/pages/cssCase/rotateBall/index'
          },
          
        ]
      },
      {
        showmore:false,
        name:'分包wxCase',
        list:[
          {
            name:'裁剪图片',
            url:'/pages/wxCase/cutImage/index'
          },
        ]
      }
    ]
  },
  
  toDetail(e){
    let {url}=e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    })
  },
 
  onLoad: function (options) {
    
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onReady: function () {

  },
  showTip(){
    util.toolsFn.toastMsg('苏苏就是小苏苏呀！！！喜欢的点个关注啊~创作不易，star一下~')
  },


  onShow: function () {
    wx.showNavigationBarLoading() 
    setTimeout(()=>{ 
      wx.hideNavigationBarLoading() 
    },1000) 
     //自定义的tabbar
     if (typeof this.getTabBar === 'function' &&
     this.getTabBar()) {
     this.getTabBar().setData({
       selected: 0
     })
   }
  
  },
  showMore(e){
    let {index}=e.currentTarget.dataset,{page_list}=this.data;
    page_list[index].showmore=!page_list[index].showmore
    this.setData({
      page_list:page_list
    })
  },

  tap: function (res) {
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY+90 ;
    this.setData({
      left:x,
      top:y,
      anim:"ripple 0.4s linear"
    });
    setTimeout(()=>{
      this.setData({
        left:'',
        top:'',
        anim:""
      })
    }, 400)
  },
  


 


})