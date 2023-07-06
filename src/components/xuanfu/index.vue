<<template>
  <!--  子组件 -->
  <div class="float_button">
    <div
      ref="floatButton"
      class="float_info"
      :style="{'width': itemWidth + 'px','margin':'5px 10px', 'height': itemHeight + 'px', 'left': left + 'px', 'top': top + 'px'}"
      @click="onBtnClicked"
    >
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>
<script>
// import {
//   isPad
// } from 'util/index'
export default {
  props: {

  },

  data() {
    return {
      clientWidth: 0,
      clientHeight: 0,
      timer: null,
      currentTop: 0,
      left: 0,
      top: 0,
      text: '联系我们',
      itemWidth: 90, // 按钮宽度
      isShort: true,
      itemHeight: 32, // 悬浮按钮高度
      gapWidth: 0, // 距离左右两边距离
      coefficientHeight: 0.6 // 从上到下距离比例

    }
  },
  computed: {

  },
  watch: {
    left(n, o) {
      //   console.log('新->', n, ';旧->', o)

    }
  },
  created() {
    // console.log('屏幕宽度', document.documentElement.clientWidth)
    // console.log('屏幕高度度', document.documentElement.clientHeight)
    const type = navigator.userAgent

    // console.log('设备', type)

    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
    this.left = this.clientWidth - this.itemWidth - this.gapWidth - 20
    this.top = this.clientHeight * this.coefficientHeight
  },
  mounted() {
    this.$nextTick(() => {
      const floatButton = this.$refs.floatButton
      floatButton.addEventListener('touchstart', () => {
        floatButton.style.transition = 'none'
      })

      // 在拖拽的过程中，组件应该跟随手指的移动而移动。
      floatButton.addEventListener('touchmove', (e) => {
        // console.log('移动中', e)
        if (e.targetTouches.length === 1) { // 一根手指
          const touch = e.targetTouches[0]
          this.left = touch.clientX - 20
          this.top = touch.clientY - 25
        }
      })

      // 拖拽结束以后，重新调整组件的位置并重新设置过度动画。
      floatButton.addEventListener('touchend', () => {
        floatButton.style.transition = 'all 0.3s'
        console.log('拖拽结束后left', this.left)
        if (this.left > document.documentElement.clientWidth / 2) {
          this.left = document.documentElement.clientWidth - this.itemWidth - 20
        } else {
          this.left = 0
        }
      })
    })
  },
  beforeDestroy() {
    // 添加监听页面滚动
    window.removeEventListener('scroll', this.handleScrollStart)
  },
  destroyed() { },
  methods: {
    onBtnClicked() {
      // this.$emit("onFloatBtnClicked")
      if (this.text === '联系我们' && this.isShort === true) {
        this.itemWidth = 250
        this.isShort = false
        this.text = '请联系您的专属客户经理：13456789099'
      } else if (this.isShort === false) {
        this.itemWidth = 70
        this.isShort = true
        this.text = '联系我们'
      }
    },
    handleScrollStart() {
      console.log('这是啥时候触发呀？ScrollStart')
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.handleScrollEnd()
      }, 300)
      this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
      if (this.left > this.clientWidth / 2) {
        this.left = this.clientWidth - this.itemWidth / 2
      } else {
        this.left = -this.itemWidth / 2
      }
    },
    handleScrollEnd() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop === this.currentTop) {
        if (this.left > this.clientWidth / 2) {
          this.left = this.clientWidth - this.itemWidth - this.gapWidth
        } else {
          this.left = this.gapWidth
        }
        clearTimeout(this.timer)
      }
    }
  }
}
</script>
  <style lang="less">
  .float_button {
    .float_info {
      box-shadow: #1666ca;
      transition: all 0.3s;
      position: fixed;
      bottom: 436px;
      right: 0;
      margin: 5px 10px;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      z-index: 999;
      background: #1666ca;
      background-color: rgba(22, 102, 202, 0.6);
      border-radius: 10px;
      cursor: pointer;
      .text {
        font-size: 12px;
        color: #fff;
      }
    }
  }
  </style>
