<template>
  <div class="md-example-child md-example-child-tabs md-example-child-tab-bar-4">
    <md-tab-bar
      v-model="current"
      :items="items"
      :has-ink="false"
      @change="onTabChange"
    >
      <template slot="item" slot-scope="{ item }">
        <div class="custom-item">
          <div class="icon">
            <md-icon :name="item.icon" />
          </div>
          <div class="text">
            <span v-text="item.label" />
          </div>
        </div>
      </template>
    </md-tab-bar>
    <div>
      <index-nine v-if="active == '首页'" />
      <div v-else-if="active == '投资'">111</div>
      <user-view v-else-if="active == '我的'" />
      <indexNotice v-else-if="active == '关于'" />
    </div>
  </div>
</template>

<script>
import { TabBar, Icon } from 'mand-mobile'
import indexNine from '@/views/indexNine'
import userView from '@/views/userView'
import indexNotice from '@/views/indexNotice'
export default {
  name: 'TabBarDemo',
  /* DELETE */
  title: '自定义内容',
  titleEnUS: 'Custom Item',
  /* DELETE */
  components: {
    [TabBar.name]: TabBar,
    [Icon.name]: Icon,
    'index-nine': indexNine,
    'user-view': userView,
    'indexNotice': indexNotice
  },
  data() {
    return {
      current: 1,
      active: '首页', // 首页
      items: [
        { name: 1, label: '首页', icon: 'home' },
        { name: 2, label: '投资', icon: 'rmb' },
        { name: 3, label: '我的', icon: 'user' },
        { name: 4, label: '关于', icon: 'setting' }
      ]
    }
  },
  methods: {
    onTabChange(item, index) {
      console.log(item, index)
      this.active = item.label
      // this.$refs.swiper.goto(index)
    }
  }
}

</script>

<style lang="scss">
  .md-example-child-tab-bar-4{
    .md-tab-bar{
        position: fixed;bottom: 0;left: 0;right: 0;margin: auto;max-width:750px;padding: 0;
    }
    .custom-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex: 1;
      .text{
        font-size: 30px;
      }
    }
}
  </style>

