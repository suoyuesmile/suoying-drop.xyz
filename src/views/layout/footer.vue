<template>
  <div class="footer">
    <div class="brand">© {{ now }} 锁颖的小宇宙 All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: ''
    }
  },
  created() {
    this.now = new Date().getFullYear()
  }
}
</script>

<style scoped>
.brand {
  text-align: center;
  height: 36px;
  color: #666;
  background: #ddd;
  line-height: 36px;
  margin: 0 auto;
}
</style>
