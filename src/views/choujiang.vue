<template>
  <div class="container">
    <div class="conApp">
      <img class="banner-bj" src="../assets/images/zp-1.jpg" alt="">
      <div class="activity">
        <img class="title-img" src="../assets/images/xingyun.png" alt="">
        <div class="wheel">
          <img class="bj-img" src="../assets/images/zhuanpan.png" alt="">
          <div class="wheel-pan">
            <div class="wheel-bg" :class="{freeze: freeze}" :style="`transform: rotate(${wheelDeg}deg)`">
              <div class="prize-list">
                <div v-for="(item,index) in prizeList" :key="index" class="prize-item-wrapper">
                  <div class="prize-item" :style="`transform: rotate(${(360/ prizeList.length) * index}deg)`">
                    <div class="prize-name" />
                    <div class="prize-icon">
                      <span v-show="!item.icon">{{ item.name }}</span>
                      <img v-show="!item.name" src="../assets/images/liwubox.png" :alt="item.title">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wheel-pointer" @click="onClickRotate" />
          </div>
        </div>
        <div class="activ">
          <div>活动规则</div>
          <h2>活动时间</h2>
          <p>{{ active.time }}</p>
          <h2>参与资格</h2>
          <p><span v-html="active.has" /></p>
          <h2>活动奖励</h2>
          <p class="box">{{ active.success }}</p>
          <img src="../assets/images/liwubox.png" alt="">
        </div>
      </div>
    </div>

    <!-- <tabbar /> -->
  </div>
</template>
<script type="text/ecmascript-6" scoped>
// import { mapState, mapMutations } from 'vuex'
// import wx from 'weixin-js-sdk'
// import tabbar from '../components/tabbar'
// import axios from 'axios'
// import { commonShare, shareTitle, shareUrl, shareImg, shareDesc } from '@/common/share'

export default {
  name: 'Index',
  // components: { tabbar },
  data() {
    return {
      // 大转盘地址
      // https://blog.csdn.net/qq_40757822/article/details/105575711?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168906018316800182736960%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168906018316800182736960&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-105575711-null-null.142^v88^insert_down28v1,239^v2^insert_chatgpt&utm_term=vue%E8%BD%AC%E7%9B%98%E6%8A%BD%E5%A5%96&spm=1018.2226.3001.4187
      active: '',
      freeze: false,
      clickType: true,
      wheelDeg: 0,
      prizeNumber: 10,
      prizeListOrigin: [],
      prizeList: [
        {
          url: './static/images/youhui.png',
          title: '优惠生活1',
          name: ''
        },
        {
          url: './static/images/liping.png',
          title: '礼品兑换2',
          name: ''
        },
        {
          url: './static/images/icon_3.png',
          title: '便利社区3',
          name: ''
        },
        {
          url: './static/images/icon_4.png',
          title: '我的账户4',
          name: 'activity'
        },
        {
          url: './static/images/icon_4.png',
          title: '我的账户5',
          name: 'activity'
        },
        {
          url: './static/images/icon_4.png',
          title: '我的账户6',
          name: 'activity'
        },
        {
          url: './static/images/icon_4.png',
          title: '我的账户7',
          name: 'activity'
        },
        {
          url: './static/images/icon_4.png',
          title: '我的账户8',
          name: 'activity'
        },
        {
          url: './static/images/icon_4.png',
          title: '我的账户9',
          name: 'activity'
        }
      ]
    }
  },
  computed: {
    prizeList() {
      return this.prizeListOrigin.slice(0, this.prizeNumber)
    }
  },
  watch: {
    prizeNumber() {
      this.freeze = true
      this.wheelDeg = 0

      setTimeout(() => {
        this.freeze = false
      }, 0)
    }
  },
  created() {
    // this.post()
  },
  methods: {
    post() {
      axios.get('./static/json/activity.json').then(res => {
        // console.log(res.data);
        this.prizeListOrigin = res.data.list
        this.active = res.data.active
        // console.log(this.prizeListOrigin)
      }, response => {
        this.$dialog.alert({
          // title:'标题呀',
          message: '获取资源列表异常'
        }).then(() => {
          console.log('点击了确认')
        })
      })
    },
    onClickRotate() {
      if (this.clickType) {
        this.clickType = false
      } else {
        return false
      }
      const { wheelDeg, prizeList } = this
      const random = Math.floor(Math.random() * (prizeList.length))
      console.log(random)
      this.wheelDeg = wheelDeg - wheelDeg % 360 + 8 * 360 + (360 - 360 / prizeList.length * random)
      setTimeout(() => {
        this.clickType = true
        this.$dialog.alert({
          title: '标题呀',
          message: prizeList[random].title
        }).then(() => {
          console.log('点击了确认')
        })
      }, 5000)
    }
  }
}
</script>

<style  lang='scss' rel='stylesheet/scss' scoped>
.container{
  width: 100%;
  // height: 100vh;
  background: #F7F7F7;
  overflow: hidden;
  .conApp{
    width: 100%;
    height:calc(100vh - .98rem); //必须有高度
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;

    .banner-bj{
      display: block;
      width: 100%;
    }
    .activity{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      .title-img{
        width: 5.64rem;
        height: 2.04rem;
        display: block;
        margin: .5rem auto 0;
      }
      .wheel{
        width: 6.6rem;
        height: 6.96rem;
        display: block;
        margin: 0 auto;
        position: relative;
        .bj-img{
          display: block;
          width: 100%;
        }
        .wheel-pan{
          position: absolute;
          width: 5.41rem;
          height: 5.41rem;
          top: .55rem;
          left: .7rem;
          overflow: hidden;
        }
      }
    }

  }

}
.wheel-pointer {
  width: 1.97rem;
  height: 2.44rem;
  border-radius: 1000px;
  // background: yellow;
  background-image: url("../assets/images/zhuanpan-row.png");
  background-size: 100% 100%;
  position: absolute;
  left: 51%;
  top: 45%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 60px;
  z-index: 8;
}
.wheel-bg {
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  overflow: hidden;
  transition: transform 5s ease-in-out;
  background-image: url("../assets/images/b-w.png");
  background-size: 100% 100%;
}

.freeze {
  transition: none;
  // background: red;
}

.prize-list {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
}

.prize-item-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2.7rem;
    height: 2.7rem;
}

.prize-item {
    width: 100%;
    height: 100%;
    transform-origin: bottom;
}

.prize-name {
    padding: .2rem 0;
}

.prize-icon {
  img{
    width: 1rem;
    height: 1rem;
  }
  span{
    display: block;
    width: .3rem;
    margin: 0 auto;
    line-height: .3rem;
    font-size: .28rem;
    color: #02464c;
    font-weight: bold;
    text-align: center;
  }
}
.activ{
  width: 100%;
  display: block;
  margin: 0 auto;
  background: rgba(255, 150, 166, 0.5);
  padding: .4rem .4rem .4rem .46rem;
  box-sizing: border-box;
  position: relative;
  div{
    text-align: center;
    background-image: url("../assets/images/title.png");
    background-size: 100% 100%;
    width: 2.76rem;
    height: .6rem;
    margin: 0 auto;
    font-size: .4rem;
    color: #f64a43;
    line-height: .6rem;
    // font-weight: bold;
  }
  h2{
    font-size: .3rem;
    color: #fff;
    line-height: .34rem;
    font-weight: bold;
    margin-top: .45rem;
  }
  P{
    font-size: .26rem;
    color: #fff;
    line-height: .34rem;
    margin-top: .1rem;
  }
  .box{
    width: 4.5rem;
  }
  img{
    width: 2.25rem;
    height: 2.23rem;
    position: absolute;
    bottom: -.6rem;
    right: -.1rem;
  }
}
</style>

