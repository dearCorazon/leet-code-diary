/**
 * @param {number} capacity
 */
let LRUCache = function(_capacity) {
    // 最近最少
    // 1.put 如果map中有该节点 就更改value 如果没有 就在头部插入 插入完后 判断是否超出阈值 超出阈值的话 从链表尾部删除 同时删除map中对应的键值对
    // 2.get 如果map中有该节点，拿到key value，从从链表中删除该节点 创建一个新的节点插入到头部 返回value值
    this.map = new Map()
    this.capacity= _capacity
    this.head = new Node()
    this.tail = new Node()
    const {head,tail} = this
    head.next = tail
    
    tail.pre = head
    
}

function Node(key=null,value=null) {
    this.key = key
    this.value = value
    this.pre = null
    this.next = null
}
LRUCache.prototype.remove = function(node) {
    const key = node.key
    this.map.delete(key)
    const preNode = node.pre
    const nextNode =  node.next
    preNode.next = nextNode
    nextNode.pre = preNode
    node.next = null
    node.pre = null
}

LRUCache.prototype.add = function(key,value) {
    // head <-> headNext
    // head -> newNode -> headNext
    // head <-> neadNode <-> headNext
    const newNode =  new Node(key,value)
    const {head,map} = this
    const headNext = head.next
    head.next = newNode
    newNode.next = headNext
    newNode.pre = head
    headNext.pre = newNode
    map.set(key,newNode)
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 2.get 如果map中有该节点，拿到key value，从从链表中删除该节点 创建一个新的节点插入到头部 返回value值
    const {map} = this
    if(map.has(key)) {
        const value = map.get(key).value
        const node = map.get(key)
        this.remove(node)
        this.add(key,value)
        console.log(value);
        return value
    }else {
        console.log(-1);
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果map中有该节点 就更改value 如果没有 就在头部插入 插入完后 判断是否超出阈值 超出阈值的话 从链表尾部删除 同时删除map中对应的键值对
    const {capacity,map,tail} = this
    if(map.has(key)) {
        const node = map.get(key)
        this.remove(node)
        this.add(key,value)
    }else {
        this.add(key,value)
        if(map.size > capacity) {
            this.remove(tail.pre)
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let  obj = new LRUCache(2)
// obj.put(1,1)
// obj.put(2,2)
// obj.get(1)
// obj.put(3,3)
// obj.get(2)
// obj.put(4,4)
// obj.get(1)
// obj.get(3)
// obj.get(4)
// console.log(obj);

obj.put(2,1)
obj.put(1,2)
obj.put(2,3)