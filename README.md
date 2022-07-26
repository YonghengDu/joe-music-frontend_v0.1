# vue脚手架设置

```vue create joe-misic-front-end_v0.1```

1.除ts外全选

2.vue3

3.router历史模式

4.dart-sass

5.Eslint+Prettier

6.Unit test:Jest

7.E2E test:Cypress(ChromeOnly)

8.babel配置:package.json



package.json配置,由于习惯了react的start，加个start

```js
  "scripts": {
    "start":"vue-cli-service serve",
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  },
```



### 1.实现响应式字体大小和字体引入

###### 1.字体大小

路径```public/js/rem.js```



获取当前设备的宽度(px)

```let deviceWidth = document.documentElement.clientWidth || window.innerWidth```



监听设备宽度变化

```window.onresize = () => {}```



###### 2.字体图标引入

图标方案：iconpark  https://iconpark.oceanengine.com/

symbol方式引入



#### 2.头部组件

路径```components/home/topNav/TopNav.vue```




# joe-music-frontend_v0.1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
