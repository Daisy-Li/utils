/**
 * 创建 React 元素（React Element）虚拟DOM树
 * 获取根节点 root
 * 将 React 元素渲染到页面上
 * @param {*} type 
 * @param {*} props 
 * @param  {...any} children 
 * @returns 
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        // 这里我们区分下基本类型和引用类型，用 createTextElement 来创建文本节点类型
        typeof child === "object" ? child : createTextElement(child);
      })
    }
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    }
  }
}

// render 
// 创建不同类型节点
// 添加属性 props
// 遍历 children，递归调用 render
// 将生成的节点 append 到 root 根节点上

function render(element, container) {
  // 1. 创建不同类型的DOM节点
  const dom = 
    element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);

  // 2.为 DOM 节点添加属性props (排查children属性)
  const isProperty = (key) => key !=="children";
  Object.keys(element.props).filter(isProperty).forEach((name) => {
    dom[name] = element.props[name];
  })

  // 3. 遍历children，递归调用 render
  element.props.children.forEach((child) => render(child,dom));

  // 4. 将 DOM 节点添加至 root 根节点
  container.appendChild(dom);
}

// 至此，我们已经完成了一个简版 React 的实现，包括了 React 如何将 JSX 元素转换成我们熟知的虚拟 DOM 结构；Fiber 架构是如何实现优化拆分工作单元、实现异步可中断机制的；以及如何将一个 Fiber 树进行进行遍历、提交至页面进行渲染的。