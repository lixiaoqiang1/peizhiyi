<template>
  <div class="EButton">
    <md-button
      :type="type"
      :size="size"
      :position="position"
      :loading="loading"
      :inactive="disabled"
      @click="$emit('click')"
    >
    <slot></slot>
  </md-button>
  </div>
</template>
<script>
import { Button } from 'mand-mobile'
export default {
  components: {
    [Button.name]: Button
  },
  props: {
    type: {
      default: '',
      type: String
    },
    size: {
      default: '',
      type: String
    },
    position: {
      default: 'bottom',
      type: String
    },
    loading: {
      default: false,
      type: Boolean
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
