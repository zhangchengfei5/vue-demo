<template>
  <div class="login-wrapper flex-column flex-center">
    <div class="login-box flex-column align-center justify-space-evenly">
      <span class="title fs32">登录</span>

      <n-form ref="loginForm" :model="loginFormData" :rules="rules" class="form-box mtop10">
        <n-form-item label="账号" label-style="font-size: 16px" path="userName">
          <n-input
              v-model:value="loginFormData.userName"
              :maxlength="16"
              :minlength="2"
              class="lh42"
              clearable
              placeholder="请输入账号"
          />
        </n-form-item>
        <n-form-item label="密码" label-style="font-size: 16px" path="password">
          <n-input
              v-model:value="loginFormData.password"
              :maxlength="20"
              :minlength="6"
              class="lh42"
              clearable
              placeholder="密码"
              show-password-on="click"
              type="password"
          />
        </n-form-item>
      </n-form>

      <div class="login-btn" @click="login">
        <strong class="text">登录</strong>
        <div class="stars"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {FormInst,} from 'naive-ui'
import {reactive, ref} from "vue";
import useIndexStore from "@/store";

const store = useIndexStore()
console.log('这回看看', store.isDark)

const loginForm = ref<FormInst>()
const loginFormData = reactive({
  userName: '',
  password: '',
})
const rules = {}

const login = () => {
  console.log('点击了登录')
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right top, #66b5ff, #b380ff);

  .login-box {
    width: 400px;
    min-height: 400px;
    padding: 20px;
    border-radius: 6px;
    background-color: rgba($color: #f5f5f5, $alpha: 0.5);
    box-shadow: 15px 20px 25px rgba($color: #000, $alpha: 0.1);

    .login-btn {
      position: relative;
      cursor: pointer;
      padding: 8px 30px;
      border-radius: 999px;
      color: #fff;
      backdrop-filter: blur(1rem);
      overflow: hidden;
      animation: moveBg 5s ease infinite;
      background-clip: content-box, border-box;
      background-image: linear-gradient(#05051d, #05051d), linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #04f 87%);
      background-origin: border-box;
      background-size: 300% 300%;
      border: 4px double transparent;
      width: fit-content;
      display: grid;
      place-items: center;

      &:hover {
        opacity: 0.8;
      }

      .text {
        letter-spacing: 6px;
      }

      .stars {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right top, #66b5ff, #b380ff);
        backdrop-filter: blur(1rem);
        z-index: -1;

        &::after, &::before {
          background-image: radial-gradient(#fff 1px, transparent 1%);
          background-size: 40px 40px;
          content: "";
          position: absolute;
        }

        &::before {
          height: 500px;
          width: 170px;
          top: 0;
          left: -50%;
          opacity: .5;
          animation: starsBefore 15s linear infinite;
        }

        &::after {
          height: 100px;
          width: 200px;
          top: 0;
          left: -100px;
          animation: starsAfter 10s linear infinite;
        }
      }

    }

    .title {
      background: linear-gradient(to right bottom, #66b5ff, #b380ff);
      background-clip: text;
      color: transparent;
      user-select: none;
    }

    .form-box {
      width: 100%;
      padding: 0 50px;
      box-sizing: border-box;
    }
  }
}

@keyframes moveBg {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@keyframes starsBefore {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-135px);
  }
}

@keyframes starsAfter {
  0% {
    transform: rotate(1turn);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
