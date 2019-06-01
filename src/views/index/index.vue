<template>
  <div class="main">
    <div class="firstfloor">
      <div id="lunbo">
        <div id="list" style="left:-920px;">
          <img :src="require('@/assets/images/5.jpg')" alt="1" />
          <img :src="require('@/assets/images/1.jpg')" alt="1" />
          <img :src="require('@/assets/images/2.jpg')" alt="2" />
          <img :src="require('@/assets/images/3.jpeg')" alt="3" />
          <img :src="require('@/assets/images/4.png')" alt="4" />
          <img :src="require('@/assets/images/5.jpg')" alt="5" />
          <img :src="require('@/assets/images/1.jpg')" alt="5" />
        </div>
        <div id="buttons">
          <span index="1" class="on"></span>
          <span index="2"></span>
          <span index="3"></span>
          <span index="4"></span>
          <span index="5"></span>
        </div>
        <div id="prev" class="arrow"><div class="over1"></div></div>
        <div id="next" class="arrow"><div class="over2"></div></div>
      </div>

      <div class="guide">
        <ul>
          <li>
            <a href="technology.html"
              ><img
                :src="require('@/assets/images/study.png')"
                alt="技术博客"
                title="技术博客"
              />
              <div class="img_w">学习一下</div></a
            >
          </li>
          <li>
            <a href="article.html"
              ><img
                :src="require('@/assets/images/project.png')"
                alt="走心随笔"
                title="走心随笔"
              />
              <div class="img_w">看看文章</div></a
            >
          </li>
          <li>
            <a href="academy.html"
              ><img
                :src="require('@/assets/images/academy.png')"
                alt="校园生活"
                title="校园生活"
              />
              <div class="img_w" target="_blank">逛逛校园</div></a
            >
          </li>
          <li>
            <a href="music.html"
              ><img
                :src="require('@/assets/images/music.png')"
                alt="品味音乐"
                title="品味音乐"
              />
              <div class="img_w">听听音乐</div></a
            >
          </li>
          <li>
            <a href="movie.html"
              ><img
                :src="require('@/assets/images/movie.png')"
                alt="时尚观影"
                title="时尚观影"
              />
              <div class="img_w">看看电影</div></a
            >
          </li>
          <li>
            <a href="cartoon.html"
              ><img
                :src="require('@/assets/images/cartoon.png')"
                alt="二次元系"
                title="二次元系"
              />
              <div class="img_w">追追动漫</div></a
            >
          </li>
          <li>
            <a href="https://lvyou.baidu.com/" target="_blank"
              ><img
                :src="require('@/assets/images/traver.png')"
                alt="旅游攻略"
                title="旅游攻略"
              />
              <div class="img_w">观观河山</div></a
            >
          </li>
          <li>
            <a
              href="http://weibo.com/u/1033563127?refer_flag=1001030102_&is_hot=1"
              ><img :src="require('@/assets/images/dai.png')" alt="还有啥的" />
              <div class="img_w">逛逛知乎</div></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="secondfloor">
      <a href="bg.html"
        ><img :src="require('@/assets/images/topic2.jpg')" alt="话题背景"
      /></a>
    </div>
    <div class="thirdfloor">
      <a href="bg.html"><img :src="require('@/assets/images/dt_bg.jpg')"/></a>
    </div>
    <div class="forthfloor">
      <div class="message_copy">
        <div class="top_blank"></div>
        <form action="message.html" method="post" class="massage_content">
          <h1>
            站长留言薄
            <span>请填写留言内容(留言后即可看到全部留言)</span>
          </h1>
          <label>
            <span>你的名字 :</span>
            <input id="name" type="text" name="name" placeholder="你的名字" />
          </label>
          <label>
            <span>你的邮箱 :</span>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="填写邮箱"
            />
          </label>
          <label>
            <span>填写留言 :</span>
            <textarea
              id="message"
              name="message"
              placeholder="发送信息内容"
            ></textarea>
          </label>
          <label>
            <span>留言类型 :</span>
            <select name="selection">
              <option value="Job Inquiry">关于站长</option>
              <option value="General Question">关于博客</option>
              <option value="General Question">关于随笔</option>
              <option value="General Question">关于学校</option>
              <option value="General Question">关于音乐</option>
              <option value="General Question">关于电影</option>
              <option value="General Question">关于动漫</option>
              <option value="General Question">关于其他</option>
            </select>
          </label>
          <label>
            <span>&nbsp;</span>
            <input type="submit" class="button" value="发送" />
          </label>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.firstfloor {
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
  height: 550px;
  border-bottom: 1px solid #fff;
}

.firstfloor #lunbo {
  margin: 0 auto;
  position: relative;
  width: 920px;
  height: 400px;
  background: #f5f5f5;
}

#list {
  position: absolute;
  width: 9200px;
  height: 400px;
  z-index: 1;
}

#list img {
  margin-left: 10px;
  margin-right: 10px;
  float: left;
  width: 900px;
  height: 400px;
}

#buttons {
  position: absolute;
  height: 10px;
  width: 100px;
  z-index: 2;
  bottom: 20px;
  left: 410px;
}

#buttons span {
  cursor: pointer;
  float: left;
  border: 1px solid #fff;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #333;
  margin-right: 5px;
}

#buttons .on {
  background: orangered;
}

.arrow {
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 2;
  top: 185px;
  cursor: pointer;
}

#prev {
  left: 30px;
  /* background: url('../require('@/assets/images/arrow2.png')'); */
  background-size: 30px 30px;
}

#next {
  right: 30px;
  /* background: url('require('@/assets/images/arrow1.png')'); */
  background-size: 30px 30px;
}

.over1,
.over2 {
  width: 20px;
  height: 30px;
  background: #000;
  opacity: 0.5;
  filter: alpha(opacity=50);
}

.over2 {
  margin-left: 10px;
}

.over1 {
  margin-right: 10px;
}

.firstfloor .guide {
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

.secondfloor {
  position: relative;
  width: 100%;
  height: 800px;
  background: #aeaeae;
}
.secondfloor a {
  line-height: 0px;
}
.secondfloor a img {
  width: 100%;
  height: 800px;
}
.thirdfloor {
  width: 100%;
  height: 700px;
  background: #f5f5f5;
}
.thirdfloor a img {
  width: 100%;
  height: 700px;
}
.forthfloor {
  width: 100%;
  height: 800px;
  /* background: url('../images/mess_bg.jpg'); */
}
.forthfloor .message_copy {
  width: 900px;
  height: 800px;
  margin: 0 auto;
}
.top_blank {
  width: 900px;
  height: 50px;
}
.massage_content {
  height: 550px;
  width: 900px;
  margin-top: 20px;
  padding: 20px 30px 20px 30px;
  font: 12px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #d3d3d3;
  text-shadow: 1px 1px 1px #444;
  border: none;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}
.massage_content h1 {
  padding: 0px 0px 10px 40px;
  display: block;
  border-bottom: 1px solid #444;
  margin: -10px -30px 30px -30px;
}
.massage_content h1 > span {
  display: block;
  font-size: 11px;
}
.massage_content label {
  display: block;
  margin: 0px 0px 5px;
}
.massage_content label > span {
  float: left;
  width: 20%;
  text-align: right;
  padding-right: 10px;
  margin-top: 10px;
  font-weight: bold;
}
.massage_content input[type='text'],
.massage_content input[type='email'],
.massage_content textarea,
.massage_content select {
  border: none;
  color: #525252;
  height: 25px;
  line-height: 15px;
  margin-bottom: 16px;
  margin-right: 6px;
  margin-top: 2px;
  outline: 0 none;
  padding: 5px 0px 5px 5px;
  width: 30%;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  background: #dfdfdf;
}
.massage_content select {
  /* background: #dfdfdf url('down-arrow.png') no-repeat right; */
  /* background: #dfdfdf url('down-arrow.png') no-repeat right; */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 0.01px;
  text-overflow: '';
  width: 30%;
  height: 35px;
  color: #525252;
  line-height: 25px;
}
.massage_content textarea {
  height: 200px;
  padding: 5px 0px 0px 5px;
  width: 60%;
}
.massage_content .button {
  background: #fff;
  border: none;
  padding: 10px 25px 10px 25px;
  color: #585858;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  text-shadow: 1px 1px 1px #ffe477;
  font-weight: bold;
  box-shadow: 1px 1px 1px #3d3d3d;
  -webkit-box-shadow: 1px 1px 1px #3d3d3d;
  -moz-box-shadow: 1px 1px 1px #3d3d3d;
}
.massage_content .button:hover {
  color: #333;
  background-color: #ebebeb;
}
</style>

