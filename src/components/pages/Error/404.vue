<template>
  <div class="Error-404">
    <h2 class="errorText">{{msg}}</h2>
    <h3 class="errorText">页面正在建设中，敬请期待~</h3>
  </div>
</template>

<script>
export default {
  name: 'Error-404',
  data () {
    return {
      msg: 'Error-404'
    }
  }
}
</script>

<style lang="scss">
.Error-404{
  .errorText{
    font-size: 24px;
    text-align: center;
  }
}
</style>
