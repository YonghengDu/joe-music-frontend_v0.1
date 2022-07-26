import { Swipe, SwipeItem, Button } from "vant";
let vantPlugins = [Swipe, SwipeItem, Button];
export const getVant = (app) => {
  vantPlugins.map((item) => {
    return app.use(item);
  });
};
