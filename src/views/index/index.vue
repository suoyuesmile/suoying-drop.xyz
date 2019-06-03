<template>
  <div class="main fix">
    <section class="nav-wrapper">
      <ul class="nav nav1 fix">
        <li
          v-for="(item, index) in navList1"
          :key="index"
          @click="$router.push(item.path)"
        ></li>
      </ul>
      <ul class="nav nav2 fix">
        <li></li>
        <div class="l love-wrapper fix">
          <div class="talk">
            <div class="i dib">
              <sy-icon name="#iconman"></sy-icon>
              <div>锁</div>
            </div>
            <div class="love dib">
              <sy-icon name="#iconlove-"></sy-icon>
              <div>爱</div>
            </div>
            <div class="u dib">
              <sy-icon class="u" name="#iconwoman"></sy-icon>
              <div>颖</div>
            </div>
          </div>
          <div class="days" style="color: #666;">
            相爱<span style="font-size: 14px;color:#000">{{
              loveTime.days
            }}</span
            >天<span style="font-size: 14px;color:#000">{{
              loveTime.hours
            }}</span
            >小时<span style="font-size: 14px;color:#000">{{
              loveTime.minutes
            }}</span
            >分<span style="font-size: 14px;color:#000">{{
              loveTime.seconds
            }}</span
            >秒
          </div>
        </div>
        <li></li>
      </ul>
      <ul class="nav nav3 fix">
        <li v-for="(item, index) in navList3" :key="index"></li>
      </ul>
    </section>
    <section class="hito bbl">
      <h2 class="titlebl">
        <sy-icon style="height: 18px; width:18px;" name="#iconchat-"></sy-icon>
        中二病：
      </h2>
      <span class="pl">{{ hito.hitokoto }}</span>
      <span class="pll">来源：{{ hito.from }}</span>
    </section>
    <section class="date bbl fix">
      <h2 class="titlebl">
        <sy-icon
          style="height: 18px; width:18px;"
          name="#iconvalentines-day"
        ></sy-icon>
        纪念日
      </h2>
      <ul class="date-card-list">
        <li class="days-card">
          <ul class="date-wrapper">
            <li>
              <p class="date">八月初十</p>
              <p class="title">我颖生日</p>
            </li>
            <li>
              <p class="date">冬月初三</p>
              <p class="title">本人生日</p>
            </li>
            <li>
              <p class="date">7月11日</p>
              <p class="title">周年纪念</p>
            </li>
          </ul>
        </li>
        <li class="days-card" v-for="(item, index) in markList" :key="index">
          <div class="date-wrapper">
            <div class="date-top">
              <img :src="require('@/assets/images/ICON9.png')" alt="" />
            </div>
            <div class="date-content">
              还剩<span style="font-size: 14px;color:#000">{{
                item.date.days
              }}</span
              >天<span style="font-size: 14px;color:#000">{{
                item.date.hours
              }}</span
              >小时<span style="font-size: 14px;color:#000">{{
                item.date.minutes
              }}</span
              >分<span style="font-size: 14px;color:#000">{{
                item.date.seconds
              }}</span
              >秒
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section
      v-for="(item, index) in cardList"
      class="nav-card fix"
      :key="index"
    >
      <div class="card-header">
        <div class="card-title">
          <h2 class="titlebl">
            <sy-icon
              style="height: 18px; width:18px;"
              name="#iconsmartphone"
            ></sy-icon>
            {{ item.title }}
          </h2>
        </div>
      </div>
      <body class="card-body">
        <wait
          :name="index === 0 ? 'd9.jpg' : 'd8.jpg'"
          :tip="index === 0 ? '码代码中...' : '好困哟...'"
        ></wait>
      </body>
    </section>
  </div>
</template>

<script>
import { cardList } from '@/constant/index.js'
import { getMood } from '@/api/index'
export default {
  data() {
    return {
      hito: {},
      loveTime: {},
      markList: [
        { title: '周年纪念日', id: 'anniversary', date: {} },
        { title: '颖的生日', id: 'yingbirth', date: {} },
        { title: '锁的生日', id: 'suobirth', date: {} }
      ],
      navList1: [
        {
          imgUrl: '@/assets/images/ICON9.png',
          label: '我们的照片墙',
          path: '/photo/index'
        },
        {
          imgUrl: '@/assets/images/academy.png',
          label: '我们的校园'
        },
        {
          imgUrl: '@/assets/images/music.png',
          label: '爱看的书与电影'
        },
        {
          imgUrl: '@/assets/images/movie.png',
          label: '柴儿子与喵喵'
        }
      ],

      navList2: [
        {
          imgUrl: '@/assets/images/cartoon.png',
          label: '听听音乐'
        },
        {
          imgUrl: '@/assets/images/traver.png',
          label: '走过的河山'
        }
      ],

      navList3: [
        {
          imgUrl: '@/assets/images/dai.png',
          label: '100个爱情挑战目标'
        },
        {
          imgUrl: '@/assets/images/dai.png',
          label: '100个爱情挑战目标'
        },
        {
          imgUrl: '@/assets/images/dai.png',
          label: '100个爱情挑战目标'
        },
        {
          imgUrl: '@/assets/images/dai.png',
          label: '100个爱情挑战目标'
        }
      ],
      cardList: cardList
    }
  },

  methods: {
    getMood() {
      getMood().then(res => {
        this.hito = res.data
      })
    },
    calcLoveDays(distance) {
      const days = Math.floor(distance / (24 * 3600 * 1000))
      const leave1 = distance % (24 * 3600 * 1000)
      const hours = Math.floor(leave1 / (3600 * 1000))
      const leave2 = leave1 % (3600 * 1000)
      const minutes = Math.floor(leave2 / (60 * 1000))
      const leave3 = leave2 % (60 * 1000)
      const seconds = Math.round(leave3 / 1000)
      console.log(distance)
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    },
    setMarkDate(end, type) {
      const now = new Date().getTime()
      const distance = end - now - 1000
      this.markList.forEach((item, index) => {
        if (item.id === type) {
          this.markList[index].date = this.calcLoveDays(distance)
        }
      })
    },
    setLoveDate(start) {
      const now = new Date().getTime()
      const distance = now - start + 1000
      this.loveTime = this.calcLoveDays(distance)
    },
    setClock() {
      setInterval(() => {
        const a_end = new Date('2019-07-12 00:00:00').getTime()
        const s_end = new Date('2019-11-28 00:00:00').getTime()
        const y_end = new Date('2019-09-08 00:00:00').getTime()
        const start = new Date('2014-07-12 00:00:00').getTime()
        this.setMarkDate(a_end, 'anniversary')
        this.setMarkDate(s_end, 'suobirth')
        this.setMarkDate(y_end, 'yingbirth')
        this.setLoveDate(start)
      }, 1000)
    }
  },
  created() {
    this.getMood()
    this.setClock()
  }
}
</script>

<style lang="scss" scoped>
// 主题主色调
$color-bg: #ddd;
$color-primary: #00cc99;
// 图表用色
$color-warning: #ffbb00;
$color-content: #27acff;
$color-error: #ff5959;
$color-danger: #fa5089;
$color-ancient: #9f75ff;
$color-success: #79cc3d;
$bg-size: cover;
.main {
  background: $color-bg;
}
section.nav-wrapper {
  ul.nav {
    display: block;
    margin: 0 auto;
    width: 100%;
    background: $color-bg;
    .love-wrapper {
      padding-top: 0px;
      width: 48.8%;
      margin-left: 0.8%;
      margin-top: 0.8%;
      font-size: 14px;
      background-size: 50% 100%;
      text-align: center;
      .talk {
        .i {
          width: 40px;
          div {
            font-family: 'tahoma,"microsoft yahei","\5FAE\8F6F\96C5\9ED1"!important';
            padding-right: 10px;
            color: #fa5089;
          }
        }
        .love {
          width: 40px;
          div {
            font-family: 'tahoma,"microsoft yahei","\5FAE\8F6F\96C5\9ED1"!important';
            color: #fa5089;
          }
        }
        .u {
          width: 55px;
          div {
            padding-right: 10px;
            font-family: 'tahoma,"microsoft yahei","\5FAE\8F6F\96C5\9ED1"!important';
            color: #fa5089;
          }
        }
      }
      .days {
        font-size: 12px;
      }
    }
    li {
      cursor: pointer;
      border-radius: 1%;
      margin-left: 0.8%;
      margin-top: 0.8%;
      width: 24%;
      height: 0;
      padding-bottom: 20%;
      box-shadow: 1px 4px 4px 2px #cdd;
      float: left;
      background: 100% 100% url('../../assets/images/b1.jpeg') no-repeat;
      background-size: $bg-size;
      &:nth-child(2) {
        background: 100% 100% url('../../assets/images/b2.jpeg') no-repeat;
        background-size: $bg-size;
      }
      &:nth-child(3) {
        background: 100% 100% url('../../assets/images/b3.jpeg') no-repeat;
        background-size: $bg-size;
      }
      &:nth-child(4) {
        background: 100% 100% url('../../assets/images/b4.jpeg') no-repeat;
        background-size: $bg-size;
        margin-right: 0.8%;
      }
      img {
        margin-top: 36px;
        margin-left: calc(50% - 24px);
        width: 100px;
        height: 100px;
      }
      span {
        display: block;
        font-size: 14px;
        font-family: '华文细黑';
        text-align: center;
      }
      &:hover {
        transition: all 0.1s;
        transform: translateY(-2%);
        box-shadow: 1px 4px 4px 2px #bbb;
      }
    }
    &.nav2 {
      li {
        background: 100% 100% url('../../assets/images/b5.jpeg') no-repeat;
        background-size: $bg-size;
        &:nth-child(3) {
          background: 100% 100% url('../../assets/images/b6.jpeg') no-repeat;
          background-size: $bg-size;
        }
      }
    }
    &.nav3 {
      li {
        background: 100% 100% url('../../assets/images/b7.jpeg') no-repeat;
        background-size: $bg-size;
        &:nth-child(2) {
          background: 100% 100% url('../../assets/images/b8.jpeg') no-repeat;
          background-size: $bg-size;
        }
        &:nth-child(3) {
          background: 100% 100% url('../../assets/images/b9.jpeg') no-repeat;
          background-size: $bg-size;
        }
        &:nth-child(4) {
          background: 100% 100% url('../../assets/images/b10.jpeg') no-repeat;
          background-size: $bg-size;
          margin-right: 0.8%;
        }
      }
    }
  }
}
section.hito {
  margin-top: 8px;
  margin-left: 0.8%;
  box-shadow: 1px 1px 4px 1px #cdd;
}
section.nav-card {
  margin: 8px 0;
  box-shadow: 1px 4px 4px 2px #cdd;
  .card-header {
    margin-bottom: 8px;
    padding-left: 0.8%;
    height: 20px;
    line-height: 20px;
  }
  .card-body {
    background-color: $color-bg;
    ul {
      width: 98.4%;
      margin-left: 0.8%;
      li {
        display: inline-block;
        width: 10%;
        height: 0;
        padding-bottom: 10.8%;
        margin-top: 16px;
        margin-bottom: 24px;
        margin-right: 5%;
        border-radius: 5%;
        height: 64px;
        background: #27acff;
        text-align: center;
        line-height: 48px;
        color: #fff;
        &:last-child {
          margin-right: 0px;
        }
        // opacity: 0.8;
        // filter: alpha(opacity=80);
      }
    }
  }
}
section.date {
  margin: 8px 0;
  .date-card-list {
    width: 100%;
    // padding-bottom: 40%;
    // border: #666 1px solid;
    .days-card {
      float: left;
      position: relative;
      margin-left: 0.8%;
      height: 0;
      width: 24%;
      padding-bottom: 34%;
      box-shadow: 1px 2px 4px 2px #ccc;
      .date-wrapper {
        width: 100%;
        position: absolute;
        text-align: center;
        color: #f00;
        li {
          margin-top: 12px;
          line-height: 1.4;
          .date {
            font-size: 16px;
          }
          .title {
            font-size: 12px;
          }
        }
        .date-top {
          height: 40%;
          img {
            height: 40%;
          }
        }
        .date-content {
          font-size: 12px;
        }
        // .date
      }
    }
  }
}
</style>

