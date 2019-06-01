<template>
  <transition name="fade" mode="out-in">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </transition>
</template>
