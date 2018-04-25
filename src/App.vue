<template>
  <div id="app">
    <div>
      登录
    </div>
    <div class="left-navigation">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo left-navigation"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/wallet"><i class="el-icon-location"></i>我的钱包</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/orderHistory"><i class="el-icon-location"></i>交易记录</router-link></el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>消息中心</span>
        </template>
          <el-menu-item index="3-1"><router-link to="/message">系统消息</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>账户设置</span>
        </template>
          <el-menu-item index="4-1"><router-link to="/index">个人资料</router-link></el-menu-item>
          <el-menu-item index="4-2"><router-link to="/rights">学者认证</router-link></el-menu-item>
          <el-menu-item index="4-3"><router-link to="/password">修改密码</router-link></el-menu-item>
          <el-menu-item index="4-3"><router-link to="/bind">账号绑定</router-link></el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
    <div class="right-content">
      <router-view/>
    </div>
  </div>
</template>
<style lang="less" scoped>
#app {
  a {
    text-decoration: none;
    color:#FFF;
    display: inline-block;
    width: 200px;
    height: 50px;
  }
  ul {
    list-style: none;
    padding:0;
  }
  .left-navigation {
    position: absolute;
    width:200px;
  }
  .right-content {
    margin-left:220px;
  }
}
.left-navigation {
  float:left;
  margin: 0;
  width:200px;
  min-height:500px;
}
.el-input__inner {
    line-height:28px;
    height:28px;
}
</style>

<script>
export default {
  name: 'App'
}
</script>
