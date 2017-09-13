<template>
  <div class="pageWrap" ref="pageWrap" :style="{minHeight:  minPageWrap_H}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageWrap',
  data () {
    return {
      minPageWrap_H: 0
    }
  },
  mounted () {
    this.set_pageWrap_H()
  },
  methods: {
    set_pageWrap_H () {
      var _this = this
      var timeout = 300
      var pageTop = this.$refs.pageWrap.getBoundingClientRect().top
      this.minPageWrap_H = (document.documentElement.clientHeight - pageTop) + 'px'
      window.onresize = function () {
        if (!_this.timer) {
          _this.timer = setTimeout(reset_minPageWrap_H, timeout)
        } else {
          clearTimeout(_this.timer)
          _this.timer = setTimeout(reset_minPageWrap_H, timeout)
        }
        function reset_minPageWrap_H () {
          _this.minPageWrap_H = (document.documentElement.clientHeight - pageTop) + 'px'
          clearTimeout(_this.timer)
          _this.timer = null
        }
      }
    }
  }
}
</script>
