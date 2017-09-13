<template>
  <div class="Entry">
    <div class="pageHead_wrap">
      <div class="pageHead">
        <div class="pageTop">
          <div class="Logo">
            <img src="../assets/images/sqLOGO.png">
          </div>
          <div class="headR">您好， XXX</div>
        </div>
        <div class="navTabs">
          <div class="toggleBtn">
            <i-button type="text" size="small" @click="toggleClick">
              <Icon type="navicon" size="24" color="#fff"></Icon>
            </i-button>
          </div>
          <div class="navTabs">
            <ul class="tabList">
              <li v-for="tab in navTabs" :class="{active: tab.nav_id === active_navName, fixed: tab.fixed}" @click="selectTab(tab)" :key="tab.nav_id">
                <!-- <router-link :to="tab.nav_to">{{tab.nav_name}}</router-link> -->
                <a>{{tab.nav_name}}</a>
                <span class="ico ico_tabClose closeBtn" @click.stop="closeTab(tab)" v-if="!tab.fixed"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="layout" :class="{'layout-hide-side': !sideNav_W}">
      <div class="sideNav" :style="{width: sideNav_W+'px'}">
        <div class="vueBarWrap" v-bar="{preventParentScroll: true}">
          <Menu :active-name="active_navName" :width="160+'px'" @on-select="onSelectNav">
            <Submenu v-for="nav in navs" :name="nav.nav_id" :key="nav.nav_id">
              <template slot="title">{{nav.nav_name}}</template>
              <MenuItem v-for="subNav in nav.child" :name="subNav.nav_id" :key="subNav.nav_id">{{subNav.nav_name}}</MenuItem>
            </Submenu>
          </Menu>
        </div>
      </div>
      <div class="contentMain" :style="{paddingLeft: sideNav_W+'px'}">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Hello from '@/components/Hello'
const SIDE_NAV_W = 160

export default {
  name: 'entry',
  data () {
    return {
      sideNav_W: SIDE_NAV_W,
      contentMain_W: 'auto',
      navs: [
        {nav_id: 'nav_id1', nav_name: '菜单名称1', child: [
          // {nav_id: 'nav_id1-1', nav_name: '菜单名称1-1', nav_to: '/home'},
          {nav_id: 'nav_id1-2', nav_name: '菜单名称1-2', nav_to: '/mytask'},
          {nav_id: 'nav_id1-3', nav_name: '菜单名称1-3', nav_to: '/page1'},
          {nav_id: 'nav_id1-4', nav_name: '菜单名称1-4', nav_to: '/page2'},
          {nav_id: 'nav_id1-5', nav_name: '菜单名称1-5', nav_to: '/page3'},
        ], nav_to: '/'},
        {nav_id: 'nav_id2', nav_name: '菜单名称2', child: [
          {nav_id: 'nav_id2-1', nav_name: '菜单名称2-1', nav_to: '/'},
          {nav_id: 'nav_id2-2', nav_name: '菜单名称2-2', nav_to: '/'},
          {nav_id: 'nav_id2-3', nav_name: '菜单名称2-3', nav_to: '/'},
        ], nav_to: '/'},
        {nav_id: 'nav_id3', nav_name: '菜单名称3', child: [
          {nav_id: 'nav_id3-1', nav_name: '菜单名称3-1', nav_to: '/'},
          {nav_id: 'nav_id3-2', nav_name: '菜单名称3-2', nav_to: '/'},
          {nav_id: 'nav_id3-3', nav_name: '菜单名称3-3', nav_to: '/'},
        ], nav_to: '/'},
        {nav_id: 'nav_id4', nav_name: '菜单名称4', child: [
          {nav_id: 'nav_id4-1', nav_name: '菜单名称4-1', nav_to: '/'},
          {nav_id: 'nav_id4-2', nav_name: '菜单名称4-2', nav_to: '/'},
          {nav_id: 'nav_id4-3', nav_name: '菜单名称4-3', nav_to: '/'},
        ], nav_to: '/'},
        {nav_id: 'nav_id5', nav_name: '菜单名称5', child: [
          {nav_id: 'nav_id5-1', nav_name: '菜单名称5-1', nav_to: '/'},
          {nav_id: 'nav_id5-2', nav_name: '菜单名称5-2', nav_to: '/'},
          {nav_id: 'nav_id5-3', nav_name: '菜单名称5-3', nav_to: '/'},
        ], nav_to: '/'}
      ],
      navTabs: [
        {nav_id: 'home', nav_name: '首页', nav_to: '/home', fixed: true}
      ],
      recentActivatedTabs: new Array(2),
      // active_navName: ''
    }
  },
  computed: {
    ...mapState({
      active_navName: state => state.entry.active_navName
    })
  },
  watch: {
    '$route': function(newVal, oldVal){
      // debugger
      // console.log(newVal, oldVal)
    }
  },
  created () {
    var first_navTab = this.navTabs.length && this.navTabs[0]
    if (first_navTab) {
      debugger
      this.setActive_navName(first_navTab.nav_id)
      this.$router.push({path: first_navTab.nav_to})
    } else {
      this.$router.push({path: '/'})
    }
  },
  methods: {
    ...mapActions([
      'setActive_navName'
    ]),
    toggleClick () {
      if (this.sideNav_W) {
        this.sideNav_W = 0;
      } else {
        this.sideNav_W = SIDE_NAV_W;
      }
    },
    activeTab (newNav) {
      var in_navtabsTab = this.navTabs.find(function(el){
        return el.nav_id == newNav.nav_id
      })
      if (in_navtabsTab) {
        return
      }
      this.navTabs = [...this.navTabs, newNav]
    },
    addActivatedTab (newTab) { //recentActivatedTabs 只保留最后激活的两个
      this.recentActivatedTabs.shift()
      this.recentActivatedTabs.push(newTab)
    },
    changeTab (tab) {
      if (tab) {
        this.setActive_navName(tab.nav_id)
      } else {
        this.setActive_navName('')
      }
    },
    onSelectNav (name) {
      if (name === this.active_navName) {
        return
      }
      var selectedNav = null
      for (var subNavs of this.navs) {
        selectedNav = subNavs.child.find(function(el){
          return el.nav_id == name
        })
        if (selectedNav) break
      }
      this.activeTab(selectedNav)
      this.addActivatedTab(selectedNav)
      this.changeTab(selectedNav)
      this.$router.push({path: selectedNav.nav_to})
    },
    selectTab (tab) {
      if (tab.nav_id === this.active_navName) {
        return
      }
      this.addActivatedTab(tab)
      this.changeTab(tab)
      this.$router.push({path: tab.nav_to})
    },
    closeTab (tab) {
      // this.recentActivatedTabs.forEach(function(el, i) {
      //   if (el.nav_id === tab.nav_id) {
      //     this.recentActivatedTabs.splice(i,1)
      //   }
      // }, this);
      console.log(this.recentActivatedTabs)
      var lastActivatedTab;
      if (tab.nav_id === this.active_navName) {
        lastActivatedTab = this.recentActivatedTabs[0]
        this.changeTab(lastActivatedTab)
        if (lastActivatedTab) {
          this.$router.push({path: lastActivatedTab.nav_to})
        } else {
          this.$router.push('/')
        }
      } else {
      }
      //先删除navTabs，然后再删activatedTabs
      this.navTabs.forEach(function(el, i) {
        if (el.nav_id === tab.nav_id) {
          this.navTabs.splice(i,1)
        }
      }, this)
      this.deleteActivatedTab(tab)
    },
    deleteActivatedTab (tab) {
      var tabIndex = null
      this.recentActivatedTabs.find(function(el, i){
        if (el && (el.nav_id === tab.nav_id)) {
          tabIndex = i;
          return true
        }
      })
      if (tabIndex === null) return //若关闭的是非recentActivatedTab，就忽略
      this.recentActivatedTabs.splice(tabIndex, 1)
      //关闭tab的时候，把相邻的标签unshift进去
      var sideTab = null
      var lastActivatedTab = this.recentActivatedTabs[0]
      this.navTabs.forEach(function(el, i) {
        if (lastActivatedTab && (lastActivatedTab.nav_id == el.nav_id)) {
          sideTab = this.navTabs[i - 1] || this.navTabs[i + 1]
        }
      }, this);
      this.recentActivatedTabs.unshift(sideTab)
      // console.log(this.recentActivatedTabs)
    }
  },
  components: {
    Hello
  }
}
</script>

<style lang="scss">
@import "../assets/style/mixin.scss";

$pageHead_H: 80px;
.pageHead_wrap{
  height: $pageHead_H;
}
.pageHead{
  @include clearFix();
  position: fixed;
  z-index: 99;
  width: 100%;
  background: #fff;
  .pageTop{
    @include clearFix();
    .Logo{
      float: left;
      padding-left: 10px;
    }
    .headR{
      float: right;
    }
  }
  .navTabs{
    @include clearFix();
    height:30px;
    overflow: hidden;
    background: #15b26d;
    .toggleBtn{
      float: left;
    }
    .tabList{
      @include clearFix();
      li{
        position: relative;
        float: left;
        min-width: 70px;
        text-align: center;
        line-height: 30px;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        color: #fff;
        &:first-child{
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }
        &.active{
          background: #139a5f;
        }
        &.fixed{
          a{
            padding-right: 10px;
          }
        }
        a{
          display: block;
          padding: 0 10px;
          padding-right: 20px;
          color: #fff;
          font-size: 12px;
        }
        .closeBtn{
          position: absolute;
          right: 3px;
          top: 50%;
          margin-top: -5px;
          cursor: pointer;
        }
      }
    }
  }
}

.sideNav,
.contentMain{
  transition: width .2s ease-in-out;
}
.sideNav{
  position: fixed;
  left: 0;
  top: $pageHead_H;
  bottom: 0;
  background: #fff;
  overflow: auto;
  &:after{
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #dddee1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
}
.contentMain{
  overflow: auto;
}
.layout-hide-side{
  .sideNav{
  }
}
</style>
