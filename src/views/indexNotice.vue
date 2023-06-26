<template>
    <div class="page-notice">
        <mt-header title="Notice" fixed class="bank-header">
            <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
        </mt-header>
        <div class="page-notice-wrapper">
            <van-tabs v-model="active">
                <van-tab v-for="(item, index) of data.tabs" :key="item.name" :title="item.name">
                    <van-checkbox-group v-model="$data[arr[index]]" :ref="'checkboxGroup'+index">
                        <van-checkbox v-for="(item1) of data.notice[index]" :key="item1.name" :name="item1.name">
                            <van-swipe-cell :on-close="onClose">
                                <van-cell :border="false" :title="item1.title" :value="item1.value" />
                                <template slot="right">
                                    <van-button square type="danger" text="删除" />
                                </template>
                            </van-swipe-cell>
                        </van-checkbox>
                    </van-checkbox-group>
                    <button class="ud-btn-tag" @click="checkAll(index)">全选</button>
                    <button class="ud-btn-tag" @click="toggleAll(index)">反选</button>
                    <button class="ud-btn-tag" @click="deleteAll(index)">批量删除</button>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>


<style lang="scss">
.page-notice {
  .page-notice-wrapper {
    margin-top: 88px!important;
    .van-tabs {
        .van-tab {
            font-size: 30px;
            line-height: 88px;
        }
        .van-tabs__wrap {
            height: 88px;
        }
        .van-tabs__content {
            width: auto!important;
            margin: 3px 0 3px 32px;
            .van-checkbox__label {
                width: 100%;
                .van-cell {
                    font-size: 30px;
                    line-height: 88px;
                    padding: 0 32px 0 0;
                }
            }
            .van-checkbox {
                height: 88px;
                line-height: 88px;
                .van-checkbox__icon {
                    font-size: 30px;
                }
            }
        }
    }
    .van-button {
        height: 88px;
    }
    .van-button--normal {
        font-size: 30px;
    }
  }
}

</style>

<script type="text/babel">
import { Dialog } from 'vant'
import { getIndexNotifyData } from "../api/demo";
export default {
  data() {
    return {
        result0: [],
        result1: [],
        result2: [],
        arr: ['result0', 'result1', 'result2'],
        active: 0,
        data: {}
    };
  },
  mounted() {
       this.getIndexNotifyData();
  },
  methods: {
    handleBack() {
      // 返回上一页
      this.$router.back(-1);
    },
    checkAll(index) {
        this.$refs['checkboxGroup'+index][0].toggleAll(true);
    },
    toggleAll(index) {
        this.$refs['checkboxGroup'+index][0].toggleAll();
    },
    deleteAll(index) {
        if(this['result'+index].length == 0) {
            Dialog({message: '请勾选通知'});
        } else {
            Dialog.confirm({
                message: '确定删除吗？'
            }).then(() => {
                this.$refs['checkboxGroup'+index][0].toggleAll(false);
            }).catch(() => {
            })
        }
    },
    onClose(clickPosition, instance) {
        switch(clickPosition) {
            case 'cell':
            case 'outside':
                instance.close();
                break;
            case 'right':
                Dialog.confirm({
                    message: '确定删除吗？'
                }).then(() => {
                    instance.close();
                }).catch(() => {
                })
                break;
        }
    },
    async getIndexNotifyData() {
            let res = await getIndexNotifyData();
            this.data = res.data.data;
        }
  },
  created() {
  }
};
</script>