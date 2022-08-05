<template>
  <div class="topNav">
    <div class="navLeft">
      <svg class="iconpark-icon"><use href="#search"></use></svg>
    </div>
    <div class="navContainer">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="navRight">
      <svg class="iconpark-icon"><use href="#hamburger-button"></use></svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.topNav {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navContainer span {
  padding: 10px;
}
.active {
  font-weight: 900;
}
</style>
