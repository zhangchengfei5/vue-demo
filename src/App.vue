<template>
  <n-config-provider class="ncp-wrapper" :theme="theme" :theme-overrides="themeOverrides">
    <div id="app">
      <router-view></router-view>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {darkTheme} from 'naive-ui'
import type {GlobalTheme, GlobalThemeOverrides } from 'naive-ui'
import useIndexStore from "@/store/index.ts";

const store = useIndexStore()

const theme = computed<GlobalTheme | null>(() => {
  return store.isDark ? darkTheme : null
})

const themeOverrides: GlobalThemeOverrides  = {
  Input: {
    borderHover: '1px solid #b380ff',
    borderFocus: '1px solid #b380ff'
  }
}
</script>

<style lang="scss">
html,
body,
#app,
.ncp-wrapper {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
