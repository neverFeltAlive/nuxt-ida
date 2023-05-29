export default {
  mounted(el) {
    console.log(el);
  },
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.log(el, binding, vnode, prevVnode);
  },
};
