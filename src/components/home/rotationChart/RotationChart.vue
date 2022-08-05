<template>
  <div class="rotationChart">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <div>{{ param }}</div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
const state = reactive({
  images: [],
  param: 0,
});
onMounted(() => {
  axios.get("http://localhost:3000/banner?type=2").then((res) => {
    console.log(res);
    res.data.banners.map((item) => {
      state.images.push(item.pic);
    });
  });
});
</script>
<style lang="scss">
.rotationChart {
  .van-swipe {
    width: 100%;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
  }
}
//改变轮播图选择点的颜色，由于这个元素是根据images的数组长度动态添加的，所以并不存在与template的初始dom树中，scoped添加的唯一id属性也不会加到它的身上
//所以这里加了scoped反而选不到这个点
.van-swipe__indicator--active {
  background-color: rgba(219, 130, 130);
}
</style>
