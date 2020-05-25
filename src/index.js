window.dom = {
  create(domStr) {
    const template = document.createElement("template");
    template.innerHTML = domStr.trim();
    return template.content.firstChild;
  },
  after(node, newNode) {
    node.parentNode.insertBefore(newNode, node.nextSibling);
  },
  before(node, newNode) {
    node.parentNode.insertBefore(newNode, node);
  },
  append(parent, child) {
    parent.appendChild(child);
  },
  wrap(node, domStr) {
    const parent = dom.create(domStr);
    dom.after(node, parent);
    dom.append(parent, node);
  },
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    // 由于childNodes会动态变化，所以把它转化成数组
    const childNodes = [...node.childNodes];
    node.innerHTML = "";
    return childNodes;
  },
  attr(node, name, value) {
    node.setAttribute(name, value);
  },
  text(node, string) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = string;
      } else {
        node.textContent = string;
      }
    } else {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.textContent;
      }
    }
  },
  html(node, string) {
    if (arguments.length === 2) {
      node.innerHTML = string;
    } else {
      return node.innerHTML;
    }
  },
  style(node, name, value) {
    node.style[name] = value;
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },
  find(selector, element) {
    return (element || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return [...node.parentNode.children].filter((n) => n !== node);
  },
  next(node) {
    return node.nextElementSibling;
  },
  previous(node) {
    return node.previousElementSibling;
  },
  each(nodes, fn) {
    [...nodes].forEach(fn);
  },
  index(node) {
    const list = dom.children(dom.parent(node));
    return [...list].indexOf(node);
  },
};
