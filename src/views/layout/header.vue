<template>
  <div class="header">
    <div class="logo">
      <a href="index.html"><img :src="logo"/></a>
    </div>
    <div class="nav">
      <ul>
        <li></li>
        <li><a href="/#/photo">照片墙</a></li>
        <li><a href="/#/book">书影</a></li>
        <li><a href="/#/food">美食</a></li>
        <li><a href="/#/clothes">服装</a></li>
        <li><a href="/#/cat">喵喵与柴柴</a></li>
        <li><a href="/#/challage">爱的挑战</a></li>
        <li>
          <a class="care" target="_blank" href="privary.html">二人世界</a>
        </li>
        <!-- <li><a class="care" target="_blank" href="bg.html">注册</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/icons.png'
export default {
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
.header {
  margin: 0 auto;
  width: 1180px;
  height: 130px;
  line-height: 130px;
}

.header .logo {
  margin-left: 80px;
  width: 200px;
  height: 130px;
  float: left;
}

.header .logo a img {
  margin-top: 35px;
  width: 90px;
  height: 60px;
}

.header .nav {
  font-family: '华文细黑';
  margin-left: 250px;
  height: 130px;
  width: 650px;
  float: left;
}

.nav ul {
  font-size: 14px;
  list-style: none;
}

.nav ul li {
  margin-left: 30px;
  line-height: 130px;
  /*padding: 20px;*/
  float: left;
}

#active {
  display: block;
  height: 80px;
  border-bottom: 2px solid #aeaeae;
}
.care {
  color: #f00;
}
</style>
