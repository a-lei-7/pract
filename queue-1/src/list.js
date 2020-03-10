const createList = value => {
  return createNode(value);
};
const appendList = (list, value) => {
  const node = createNode(value);
  let x = list;
  while (x.next) {
    // 如果x
    x = x.next;
  }
  ///  x.next === null;  这样 x 就是最后一个节点
  x.next = node; //令最后的节点 x 的下一个值 = 新的node
  return node;
};
const removeFromList = (list, node) => {
  let x = list;
  let p = node;
  while (x !== node && x !== null) {
    p = x;
    x = x.next;
  }
  if (x === null) {
    //若 x 为 null ，则不需要删除，直接return。  false 表示无法删除不在 list 里的节点
    return false;
  } else if (x === p) {
    // 表示 要删除的节点就是第一个。让 p 等于 p 的下一个，即可删除p
    p = x.next;
    return p; //如果删除的是第一个节点，就要把新的 list 的头节点 p 返回到外面。即 newList = removeFromList
    // 必须要用 newList 获取返回值，才能拿到删除了第一个节点的 新list
  } else {
    p.next = x.next;
    return list; //如果删除的不是第一个节点， 返回原来的 list 即可
  }
};

const createNode = value => {
  return {
    data: value,
    next: null
  };
};

const travelList = (list, fn) => {
  let x = list;
  while (x !== null) {
    // 当 x !== null 时，对 x 执行 fn ，让 x=x.next ,进入下一项
    fn(x);
    x = x.next;
  }
};

const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
const node5 = appendList(list, 50);
console.log("list");
console.log(list);
travelList(list, node => {
  console.log(node.data);
}); //对 node 进行 log 操作   这个 node 就是上面函数里的 x
