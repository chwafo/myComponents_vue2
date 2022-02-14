import com from './index.vue';

com.install = (vue) => {
  vue.component(com.name, com);
}

export default com;