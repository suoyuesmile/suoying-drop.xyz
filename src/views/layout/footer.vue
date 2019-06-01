<template>
  <div class="footer">
    <div class="footer_copy">
      <div class="footer_meun_left">
        <div class="footer_meun">
          <ul>
            <li><strong>友情链接</strong></li>
            <li>
              <a href="http://music.163.com/" target="_blank">网易云音乐</a>
            </li>
            <li>
              <a href="http://www.bilibili.com/" target="_blank">哔哩哔哩</a>
            </li>
            <li><a href="http://www.imooc.com/" target="_blank">慕课网</a></li>
          </ul>
        </div>
        <div class="footer_meun">
          <ul>
            <li><strong>技术支持</strong></li>
            <li>
              <a href="https://www.qcloud.com/" target="_blank">腾讯云服务</a>
            </li>
            <li>
              <a href="https://www.yunaq.com/" target="_blank">百度CDN</a>
            </li>
            <li>
              <a href="https://www.aliyun.com" target="_blank">阿里域名解析</a>
            </li>
          </ul>
        </div>
        <div class="footer_meun">
          <ul>
            <li><strong>诚心合作</strong></li>
            <li><a href="bg.html" target="_blank">广告入驻</a></li>
            <li><a href="bg.html" target="_blank">商务合作</a></li>
            <li><a href="bg.html" target="_blank">平台推广</a></li>
          </ul>
        </div>
        <div class="footer_meun">
          <ul>
            <li><strong>关于本站</strong></li>
            <li><a href="bg.html" target="_blank">捐赠一元</a></li>
            <li><a href="bg.html" target="_blank">联系我们</a></li>
            <li><a href="bg.html" target="_blank">免责申明</a></li>
          </ul>
        </div>
      </div>
      <div class="footer_meun_right">
        <img :src="focuseMeImg" alt="关注我" />
      </div>
    </div>
    <div class="brand">
      © {{ 2019 }} 锁颖的小宇宙(suoying.xyz) All Rights Reserved. 站长版权所有
    </div>
  </div>
</template>

<script>
import focuse_me from '@/assets/images/care_me.png'

export default {
  data() {
    return {
      focuseMeImg: focuse_me
    }
  }
}
</script>

<style scoped>
.footer {
  opacity: 0.6;
  filter: alpha(opacity=60);
  font-family: '华文细黑';
  font-size: 12px;
  width: 100%;
  height: 260px;
  background: #f5f5f5;
}
.footer_copy {
  height: 160px;
  width: 1080px;
  margin: 0 auto;
}
.footer_meun_left {
  float: left;
  width: 800px;
}
.footer_meun_right {
  position: relative;
  float: left;
  width: 270px;
}
.footer_meun {
  float: left;
  height: 140px;
  width: 200px;
}
.footer_meun ul {
  margin-top: 40px;
  margin-left: 60px;
}
li {
  list-style: none;
  height: 25px;
  line-height: 25px;
}
.footer_meun_right img {
  right: 60px;
  top: 0;
  position: absolute;
  opacity: 1;
  filter: alpha(opacity=100);
  height: 200px;
  width: 150px;
}
.footer_meun {
  line-height: 25px;
  height: 25px;
  list-style: none;
}
.brand {
  text-align: center;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
}
</style>
