<template>
  <div>
    <div class="personal-set">
      <span>用户名</span><el-input class="input-data" size="mini"  v-model="selfMessage.name" placeholder="请输入内容"></el-input>
    </div>
    <div class="personal-set">
      <span>性别</span><el-radio v-model="selfMessage.sex" label="1">男</el-radio>
      <el-radio v-model="selfMessage.sex" label="2">女</el-radio>
    </div>
    <div class="personal-set"><span>昵称</span><el-input size="mini" class="input-data" v-model="selfMessage.nickname" placeholder="请输入内容"></el-input></div>
    <!-- <div class="personal-set"><span>出生年月</span><el-select size="mini" v-model="birthYear" placeholder="请选择">
    <el-option
      v-for="item in years"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select size="mini" v-model="birthMonth" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div>
    <div class="personal-set"><span>职称</span><el-select size="mini" v-model="positionalTitles" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div> -->
    <div class="personal-set"><span>当前单位/院校</span><el-input size="mini" class="input-data" v-model="selfMessage.workUnit" placeholder="请输入内容"></el-input></div>
    <div class="personal-set"><span>原工作单位/院校</span><el-input size="mini" class="input-data" v-model="selfMessage.preWorkUnit" placeholder="请输入内容"></el-input></div>
    <!-- <div class="personal-set"><span>最高学历</span><el-select size="mini" v-model="education" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></div> -->
    <div class="personal-set"><span>毕业院校</span><el-input size="mini" class="input-data" v-model="selfMessage.educateSchool" placeholder="请输入内容"></el-input></div>
    <div class="personal-set"><span>获奖经历</span><el-input size="mini" class="input-data" v-model="selfMessage.Winning" placeholder="请输入内容"></el-input></div>
    <div class="personal-set"><span>学科</span><el-input size="mini" class="input-data" v-model="selfMessage.subject" placeholder="请输入内容"></el-input></div>
    <div class="personal-set"><span>感兴趣的主题</span><el-input size="mini" class="input-data" v-model="selfMessage.theme" placeholder="请输入内容"></el-input></div>
    <div style="margin-left:250px;margin-top:10px;"><el-button type="primary" size="small" @click="saveMessage">提交</el-button></div>
  </div>
</template>
<style lang="less" scoped>
div {
  font-size:16px;
  background:#fcfcfc;
}
.personal-set {
  padding: 5px 0;
  line-height:28px;
  span{
    display: inline-block;
    width:200px;
    height:30px;
  }
  .input-data {
  width:200px;
  line-height:28px;
  height:28px;;
  vertical-align: middle;
  }
  font-size:14px;
}
</style>
<style lang="less">
.personal-set{
  .el-input--mini .el-input__inner {
    border-radius:0;
    width: 200px;
    font-size: 14px;
  }
}
</style>

<script>
/*eslint-disable*/ 
import axios from 'axios'
export default {
  data () {
    return {
      selfMessage:{}
    }
  },
  methods: {
    saveMessage: function () {
      console.log(this.selfMessage)
    }
  },
  mounted () {
    var vm = this;
    axios({
    method:'get',
    url:'/personal/data'
    }).then(function (req) {
      vm.selfMessage=req.data;
    })
  }
}
</script>
