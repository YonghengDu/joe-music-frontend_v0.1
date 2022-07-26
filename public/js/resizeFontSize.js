const resizeFontSize = () => {
  //先获取当前设备宽度
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }
  //这样设置默认字体纯粹是为了方便计算，这样750px的屏幕fontSize为100px，375px的屏幕为50px
  document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`;
  document.querySelector("body").style.fontSize = "0.3rem";
};
resizeFontSize();
//当窗口宽度变化时
window.onresize = () => {
  resizeFontSize();
};
