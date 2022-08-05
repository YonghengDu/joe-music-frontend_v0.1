import { Swipe, SwipeItem, Button } from "vant";
//通过getVant函数将引入的vant组件用全局use的方式添加到main.js
let vantPlugins = [Swipe, SwipeItem, Button];
export const getVant = (app) => {
  vantPlugins.map((item) => {
    return app.use(item);
  });
};
