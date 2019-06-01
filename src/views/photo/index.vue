<template>
  <div class="main">
    <div class="firstfloor">
      <a href="http://www.wtu.edu.cn/html/wwwindex.html" target="_blank"
        ><img :src="require('@/assets/images/wtu1.jpg')" alt="1"
      /></a>
    </div>
    <div class="secondfloor">
      <div class="guide">
        <ul>
          <li>
            <a href="http://www.wtu.edu.cn/html/wwwindex.html" target="_blank"
              ><img :src="require('@/assets/images/guan.png')" alt="" />
              <div class="img_w">纺大官网</div></a
            >
          </li>
          <li>
            <a
              href="http://ids.wtu.edu.cn/amserver/UI/Login?goto=http://my.wtu.edu.cn/index.portal"
              target="_blank"
              ><img :src="require('@/assets/images/men.png')" alt="" />
              <div class="img_w">信息门户</div></a
            >
          </li>
          <li>
            <a href="http://lib.wtu.edu.cn/" target="_blank"
              ><img :src="require('@/assets/images/tu.png')" alt="" />
              <div class="img_w" target="_blank">图书馆</div></a
            >
          </li>
          <li>
            <a
              href="http://tieba.baidu.com/f?ie=utf-8&kw=%E6%AD%A6%E6%B1%89%E7%BA%BA%E7%BB%87%E5%A4%A7%E5%AD%A6&fr=search"
              target="_blank"
              ><img :src="require('@/assets/images/tie.png')" alt="" />
              <div class="img_w">纺大贴吧</div></a
            >
          </li>
          <li>
            <a href="http://weibo.com/textileuniversity" target="_blank"
              ><img :src="require('@/assets/images/wei.png')" alt="" />
              <div class="img_w">纺大官博</div></a
            >
          </li>
          <li>
            <a href="map.html" target="_blank"
              ><img :src="require('@/assets/images/di.png')" alt="" />
              <div class="img_w">纺大地图</div></a
            >
          </li>
          <li>
            <a href="photo.html" target="_blank"
              ><img :src="require('@/assets/images/feng.png')" alt="" />
              <div class="img_w">纺大风景</div></a
            >
          </li>
          <li>
            <a href="taolu.html"
              ><img :src="require('@/assets/images/ru.png')" alt="" />
              <div class="img_w">生存套路</div></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="thirdfloor">
      <div class="project">
        <div class="item1">
          <a href="" bg.html
            ><img :src="require('@/assets/images/xy_yg.jpg')" title="" alt=""
          /></a>
        </div>
        <div class="item2">
          <a href="" bg.html
            ><img :src="require('@/assets/images/xy_nh.jpg')" title="" alt=""
          /></a>
        </div>
      </div>
      <div class="project">
        <div class="item1">
          <a href="" bg.html
            ><img :src="require('@/assets/images/xy_jxl.jpg')" title="" alt=""
          /></a>
        </div>
        <div class="item2">
          <a href="" bg.html
            ><img :src="require('@/assets/images/xy_tsg.jpg')" title="" alt=""
          /></a>
        </div>
      </div>
      <div class="project">
        <div class="item1">
          <a href="" bg.html
            ><img :src="require('@/assets/images/xy_dh.jpg')" title="" alt=""
          /></a>
        </div>
        <div class="item2">
          <a href="" bg.html
            ><img :src="require('@/assets/images/xy_sys.jpg')" title="" alt=""
          /></a>
        </div>
      </div>
      <!-- <div class="project">
      <div class="item1"><a href=""bg.html><img :src="require('@/assets/images/xy_cc.jpg')" title="" alt=""></a></div>
      <div class="item2"><a href=""bg.html:><img src="require('@/assets/images/xy_"') title="" alt=""></a></div>
    </div> -->
    </div>
  </div>
</template>

<script>
// import Header from '@/views/layout/header'
// import Footer from '@/views/layout/footer'
export default {
  // components: {
  //     Header,
  //     Footer
  // }
}
</script>

<style scoped>
.main {
}
.main .firstfloor {
  width: 100%;
  height: 500px;
}
.firstfloor a img {
  width: 100%;
  height: 500px;
}
.secondfloor {
  width: 100%;
  height: 150px;
}
.secondfloor .guide {
  margin: 0 auto;
  width: 1120px;
  height: 150px;
}
.guide ul {
}
.guide ul li {
  line-height: 130px;
  margin-left: 0px;
  list-style: none;
  width: 140px;
  float: left;
  opacity: 0.6;
  filter: alpha(opacity=60);
}
.guide ul li:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
a {
  position: relative;
}
.guide ul li a img {
  margin-left: 55px;
  width: 30px;
  height: 30px;
}
a .img_w {
  font-size: 14px;
  font-family: '华文细黑';
  margin-left: 40px;
  position: absolute;
  bottom: 20px;
  width: 60px;
  height: 20px;
  text-align: center;
}
.thirdfloor {
  width: 100%;
  height: 1400px;
  background: #f5f5f5;
  /*opacity: 0.5;
	filter: alpha(opacity=50);*/
}
.thirdfloor .project {
  margin: 0 auto;
  width: 1080px;
  height: 400px;
  margin-bottom: 60px;
}
.item1,
.item2 {
  background: #eee;
  margin: 20px auto;
  width: 500px;
  height: 400px;
  display: block;
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 1px 1px 0 #c7c7c7;
  -moz-box-shadow: inset 0 1px 1px 0 #c7c7c7;
  box-shadow: inset 0 1px 1px 0 #c7c7c7;
}
.item1,
.item2 a img {
  display: block;
  height: 400px;
  width: 500px;
}
.item1:hover .item1 {
  border: 2px solid rgba(238, 0, 143, 1);
}
.item2:hover .item2 {
  border: 2px solid rgba(238, 0, 143, 1);
}
.item1 {
  float: left;
}
.item2 {
  float: right;
}
</style>
