/*eslint-disable*/
import Mock, { Random } from 'mockjs'
function getData () {
  return {
    name:'cc',
    sex: '1',
    nickname: 'nickname2',
    workUnit: '北京大学',
    preWorkUnit: '清华大学',
    educateSchool: '北邮大学',
    Winning: '奖项1',
    subject: '计算机',
    theme: '计算机'
  }
}
Mock.mock('/personal/data','get',getData)