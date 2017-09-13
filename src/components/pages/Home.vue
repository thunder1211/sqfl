<template>
  <pagewrap class="homePage">
    <div class="Home">
      <div>
        <Tabs :animated="false">
          <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">
            标签{{ tab }}
          </TabPane>
          <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加</Button>
        </Tabs>
      </div>
      {{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>
      <!-- {{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>
      {{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>
      {{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>
      {{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br>{{msg}}<br> -->
    </div>
  </pagewrap>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      tabs: 2
    }
  },
  mounted () {
  },
  methods: {
    handleTabsAdd () {
      this.tabs ++;
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/style/mixin.scss";

.homePage{
  background: #e5efdc;
}
.Home{
}
</style>
