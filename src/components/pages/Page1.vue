<template>
  <pagewrap>
    <div class="Page1">
      <div>
        <Tabs :animated="false" :value="activeTab.nav_id" @on-click="onclickTabpane">
          <TabPane v-for="tab in tabs" :key="tab.nav_id" :name="tab.nav_id" :label="tab.nav_name">
            <!-- 页面：{{ tab.nav_name }} -->
          </TabPane>
          <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加</Button>
        </Tabs>
        <router-view></router-view>
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Page1',
  data () {
    return {
      msg: 'Page1 : 菜单名称1-3',
      tabs: [
        {nav_id: 'page1-1', nav_name: '子页面1-1', nav_to: '/page1/page1-1'},
        {nav_id: 'page1-2', nav_name: '子页面1-2', nav_to: '/page1/page1-2', active: true},
        {nav_id: 'page1-3', nav_name: '子页面1-3', nav_to: '/page1/page1-3'},
        {nav_id: 'page1-4', nav_name: '子页面1-4', nav_to: '/page1/page1-4'},
      ],
    }
  },
  computed: {
    ...mapState({
      activeTab: state => state.page1.activeTab
    })
  },
  created () {
    // this.setActive_navName('nav_id1-3')
    this.initActiveTab()
    debugger
    this.$router.push({path: this.activeTab.nav_to})
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'setActiveTab', 'setActive_navName'
    ]),
    handleTabsAdd () {
    },
    initActiveTab () {
      // 设置activeTab的顺序 1-store里保存的；2-tabs数据里active:true；3-第一个tab
      if (this.activeTab) {
        return
      }
      let _activeTab = this.tabs.find((tab)=>{
        return tab.active === true
      })
      if (!_activeTab) {
        _activeTab = this.tabs.length && this.tabs[0]
      }
      this.setActiveTab(_activeTab)
    },
    onclickTabpane (tabName) {
      var selectedTab = this.tabs.find(function(el){
        return el.nav_id == tabName
      })
      this.$router.push({path: selectedTab.nav_to})
      this.setActiveTab(selectedTab)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../../assets/style/mixin.scss";


</style>
