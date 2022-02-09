// 事件委托，获取冒泡路径上指定的委托元素
export function getDelegateEle(e, selector) {
  if (typeof selector === 'string') selector = [selector];
  const currentTarget = e.currentTarget;
  const path = e.path || (e.composedPath && e.composedPath());
  const delegateEle = [];
  selector.forEach((_selector) => {
    const _selectorList = _selector.split('.');
    for (let index in path) {
      const ele = path[index];
      if (ele !== currentTarget) {
        const { tagName, classList } = ele;
        if (_selectorList.every((_selectorItem) => tagName.toLowerCase() === _selectorItem || classList.contains(_selectorItem))) {
          delegateEle.push(ele);
        }
      } else {
        return;
      }
    }
  })
  return delegateEle;
}