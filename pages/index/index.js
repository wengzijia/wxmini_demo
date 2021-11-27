// pages/index/index.js
import util from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list: [{
        showmore: true,
        name: '主包',
        list: [{
            name: '物流页面+skeleton条',
            url: '/pages/demo/index'
          },
          {
            name: '物流的第二种写法(伪元素after)',
            url: '/pages/demo/index2'
          },
          {
            name: '日历样式一',
            url: '/pages/cal/index'
          },
          {
            name: '日历样式二',
            url: '/pages/cal2/index'
          },
          {
            name: '日历样式三',
            url: '/pages/cal/index2'
          },
          {
            name: '日历样式四',
            url: '/pages/cal2/index2'
          },
          {
            name: 'vant日历多日期选择',
            url: '/pages/vantCalen/index'
          }
        ]
      },
      {
        showmore: false,
        name: '分包another',
        list: [{
            name: 'scroll-view左右滚动导航条',
            url: '/pages/another/scroll-x/index'
          },
          {
            name: 'swiper3D轮播图',
            url: '/pages/another/swiper-threeD/index'
          },
          {
            name: '圆环进度条一(wx.canvasToTempFilePath)',
            url: '/pages/another/circleRing/index'
          },
          {
            name: '圆环进度条2(接口已废弃)',
            url: '/pages/another/circleRing/index2'
          },
          {
            name: '自定义滚动条',
            url: '/pages/another/customScroll/index'
          },
        ]
      },
      {
        showmore: false,
        name: '分包subPack',
        list: [{
            name: 'loading加载动画17个（1）',
            url: '/pages/subPack/loading/index'
          },
          {
            name: 'loading加载动画15个（2）',
            url: '/pages/subPack/loading/index2'
          },
          {
            name: 'loading加载动画20个（3）',
            url: '/pages/subPack/loading/index3'
          },
          {
            name: '拟物态',
            url: '/pages/subPack/otherAnimation/index'
          },

          {
            name: '小程序启动页面动画',
            url: '/pages/subPack/loading/loadPage'
          },
          {
            name: 'canvas生成海报',
            url: '/pages/subPack/canvasPoster/index'
          },
          {
            name: 'animation动画，五福合成效果',
            url: '/pages/subPack/animationBox/index'
          },
          {
            name: '日历样式五',
            url: '/pages/subPack/calen/index2'
          },
          {
            name: '日历样式六',
            url: '/pages/subPack/calen/index3'
          },
          {
            name: 'canvas2d圆环进度条(同层渲染)',
            url: '/pages/subPack/canvas2d/index'
          },
          {
            name: '卡片实现翻转',
            url: '/pages/subPack/roateY180/index'
          },
          {
            name: '自定义input输入框',
            url: '/pages/subPack/customIpt/index'
          },
        ]
      },
      {
        showmore: false,
        name: '分包cssCase',
        list: [{
            name: 'css3的圆锥渐变',
            url: '/pages/cssCase/conic-gradient/index'
          },
          {
            name: '仿照手机充电的动画',
            url: '/pages/cssCase/chargeCss/index'
          },
          {
            name: '颜色盘',
            url: '/pages/cssCase/colorChange/index'
          },
          {
            name: '炫酷能量球',
            url: '/pages/cssCase/rotateBall/index'
          },
          {
            name: '螺旋线条',
            url: '/pages/cssCase/line/index'
          },
          {
            name: '警示图标',
            url: '/pages/cssCase/warnIcon/index'
          },
          {
            name: '旋转字符',
            url: '/pages/cssCase/rotateTetx/index'
          },
          {
            name: '翻转字符',
            url: '/pages/cssCase/fanzhuanText/index'
          },
          {
            name: '一个蛋黄派按钮',
            url: '/pages/cssCase/aButton/index'
          },
          {
            name: '可爱的小熊switch开关',
            url: '/pages/cssCase/cuteSwitch/index'
          },
          {
            name: '一个正在输入的动画',
            url: '/pages/cssCase/aWirting/index'
          },
          {
            name: '一个有趣的404页面',
            url: '/pages/cssCase/404Page/index'
          },
          {
            name: '渐变字体',
            url: '/pages/cssCase/shadingText/index'
          },
          {
            name: '一个带半圆的卡片',
            url: '/pages/cssCase/card/index'
          },
          {
            name: '一个左右摇晃的灯泡',
            url: '/pages/cssCase/dengpao/index'
          },
          {
            name: '0.5rpx的线',
            url: '/pages/cssCase/lineHalf/index'
          },
        ]
      },
      {
        showmore: false,
        name: '分包wxCase',
        list: [{
            name: '裁剪图片',
            url: '/pages/wxCase/cutImage/index'
          },
          {
            name: '老虎机',
            url: '/pages/wxCase/laohuji/index'
          },
          {
            name: '小程序的navigator标签',
            url: '/pages/wxCase/navigator/index'
          },
          {
            name: '一个弹出框动画',
            url: '/pages/wxCase/popCustom/index'
          },
          {
            name: 'checkbox自定义样式',
            url: '/pages/wxCase/checkbox/index'
          },
          {
            name: '单选框+textarea(scroll-into-view)',
            url: '/pages/wxCase/radioBox/index'
          },
          {
            name: '瀑布流',
            url: '/pages/wxCase/pubuliu/index'
          },
          {
            name: '网易云音乐播放',
            url: '/pages/wxCase/wclound/index'
          },
          {
            name: '导航栏自定义',
            url: '/pages/wxCase/costomNav/index'
          },
          {
            name: '一个商城首页（普通版）',
            url: '/pages/wxCase/shopIndex/index'
          },
          {
            name: '背景图片在一屏内且满屏',
            url: '/pages/wxCase/bgImg/index'
          },
          {
            name: '实现进度条的多种方式',
            url: '/pages/wxCase/circleBar/index'
          },
          {
            name: '自定义actionSheet面板',
            url: '/pages/wxCase/customSheet/index'
          },
          {
            name: '保存多张图片（下载文件)',
            url: '/pages/wxCase/downFile/index'
          },
          {
            name: '文字的展开与收起)',
            url: '/pages/wxCase/exlipText/index'
          },
          {
            name: '一定长度文字的展开与收起',
            url: '/pages/wxCase/exlipTwo/index2'
          },
          {
            name: '边框圆角渐变色',
            url: '/pages/wxCase/buttonGr/index'
          },
          {
            name: '上下循环滚动的弹幕条',
            url: '/pages/wxCase/swiper_ve/index'
          },
          {
            name: '文字右下角的展开按钮',
            url: '/pages/wxCase/showEli/index'
          },
          {
            name: 'swiper商品滑动区域',
            url: '/pages/wxCase/swiper_goods/index'
          },
          {
            name: '高频出现的各类奇形怪状按钮',
            url: '/pages/wxCase/rects/index'
          },
          {
            name: '不定长消息滚动条',
            url: '/pages/wxCase/newsSwiper/index'
          },
          {
            name: 'text标签换行，空格相关',
            url: '/pages/wxCase/text/index'
          },
        ]
      },
      {
        showmore: false,
        name: '分包jsCase',
        list: [{
            name: '搜索历史',
            url: '/pages/jsCase/historySearch/index'
          },
          {
            name: '关键字高亮',
            url: '/pages/jsCase/keyWordHight/index'
          },
          {
            name: '点击实现震动',
            url: '/pages/jsCase/shaing/index'
          },
          {
            name: '打卡样式一',
            url: '/pages/jsCase/clock/index'
          },
          {
            name: '打卡样式二',
            url: '/pages/jsCase/clockIn/index'
          },
          {
            name: '打卡样式三（加入日期）',
            url: '/pages/jsCase/checkIn/index'
          },
          {
            name: '图片大小自适应',
            url: '/pages/jsCase/imgLoad/index'
          },
          {
            name: '抽奖活动1.0',
            url: '/pages/jsCase/draw/index'
          },
          {
            name: '抽奖活动2.0',
            url: '/pages/jsCase/draw2/index'
          },
          {
            name: 'page-container',
            url: '/pages/jsCase/pageCon/index'
          },
          {
            name: '自定义日历组件01',
            url: '/pages/jsCase/cal/index'
          },
          {
            name: '自定义日历组件02',
            url: '/pages/jsCase/cal2/index'
          },
          {
            name: 'wx.onLocationChange()持续定位',
            url: '/pages/jsCase/onLoaction/index'
          },
          {
            name: '自定义多日期选择',
            url: '/pages/jsCase/dateSel/index'
          },
        
        ]
      }
    ]
  },

  toDetail(e) {
    let {
      url
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: url,
    })
  },

  onLoad: function (options) {


  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onReady: function () {
    // console.log(this.getSeconds(61.24))
  },
  showTip() {
    util.toolsFn.toastMsg('苏苏就是小苏苏呀！！！喜欢的点个关注啊~创作不易，star一下~')
  },


  onShow: function () {
    wx.showNavigationBarLoading()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
    }, 1000)
    //自定义的tabbar
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

  },
  showMore(e) {
    let {
      index
    } = e.currentTarget.dataset, {
      page_list
    } = this.data;
    page_list[index].showmore = !page_list[index].showmore
    this.setData({
      page_list: page_list
    })
  },

  tap: function (res) {
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 90;
    this.setData({
      left: x,
      top: y,
      anim: "ripple 0.4s linear"
    });
    setTimeout(() => {
      this.setData({
        left: '',
        top: '',
        anim: ""
      })
    }, 400)
  },
  getSeconds(s) {
    var sTime = parseInt(s); // 秒
    var mTime = 0; // 分
    var hTime = 0; // 时
    if (sTime > 60) { //如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      mTime = parseInt(sTime / 60);
      //获取秒数，秒数取佘，得到整数秒数
      sTime = parseInt(sTime % 60);
      //如果分钟大于60，将分钟转换成小时
      if (mTime > 60) {
        //获取小时，获取分钟除以60，得到整数小时
        hTime = parseInt(mTime / 60);
        //获取小时后取佘的分，获取分钟除以60取佘的分
        mTime = parseInt(mTime % 60);
      }
    }
    var result = '';
    if (sTime >= 0 && sTime < 10) {
      result = "0" + parseInt(sTime) + "";
    } else {
      result = "" + parseInt(sTime) + "";
    }
    if (mTime >= 0 && mTime < 10) {
      result = "0" + parseInt(mTime) + ":" + result;
    } else {
      result = "" + parseInt(mTime) + ":" + result;
    }
    if (hTime >= 0 && hTime < 10) {
      result = "0" + parseInt(hTime) + ":" + result;
    } else {
      result = "" + parseInt(hTime) + ":" + result;
    }
    return result;
  }


})