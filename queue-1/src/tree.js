const createTree = value => {
    return {
        data: value,
        children: null
    }
}
const addChild = (node, value) => {
    const newNode = {
        data: value,
        children: null,
        parent: node, //在给 node 添加 child 的时候，让 parent 等于 这个 node 
    }
    node.children = node.children || [] //节点 node 的children ，为自己，或赋值一个空数组
    node.children.push(newNode)
    return newNode //返回出这个新节点
}

const travel = (tree, fn) => { //输入一个 tree 和一个 fn ， 遍历这个 tree ，
    fn(tree)
    if (!tree.children) { // 如果 children 为null ，就直接 return
        return
    }
    for (let i = 0; i < tree.children.length; i++) {
        travel(tree.children[i], fn)
    }
}

const find = (tree, node) => { // 在 tree 中，找到 node
    if (tree === node) { // 如果 tree === node ,即 return tree
        return tree
    } else if (tree.children) { // 另: 如果 tree 的 children 存在, 就和 children[i] 作比较，如果匹配就返回 result ，否则返回 undefined
        for (let i = 0; i < tree.children.length; i++) {
            const result = find(tree.children[i], node)
            if (result) {
                return result
            }
        }
        return undefined
    } else {
        return undefined
    }
}

const removeNode = (tree, node) => {
    const siblings = node.parent.children //让 siblings 等于 node父亲的 children
    let indx = 0 //初始化 index 
    for (let i = 1; i < siblings.length; i++) {
        if (siblings[i] === node) { // 如果 siblings 的第 i 个===等于要删除的 node ，那么就让 index = i

            index = i
        }
    }
    siblings.splice(index, 1) // 删除 siblings 中的 node

}

const tree = createTree(10)
const node2 = addChild(tree, 20) //给新节点一个名字
addChild(node2, 333) //给节点 node2 添加 children 
addChild(node2, 334) //给节点 node2 添加 children 
const node3 = addChild(tree, 233)
addChild(tree, 433)
addChild(tree, 533)
console.log(tree)

const fn = node => {
    console.log(node.data)
}



removeNode(tree, node3)
console.log(tree)