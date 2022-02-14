import barrage from './barrage/index.js';
import lazyList from './lazyList/index.js';

const coms = {
  barrage,
  lazyList,
}

const install = vue => {
  Object.entries(coms).map(([key, com]) => {
    vue.component(com.name, com)
  })
}
if (window && window.Vue) install(window.Vue)

export default {
  install,
  ...coms,
}