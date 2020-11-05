"use strict";
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueque(item) {
        this.list.push(item);
    }
    dequeque() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueque(0);
queue.enqueque(1);
queue.enqueque(2);
queue.enqueque(3);
queue.enqueque(4);
while (queue.length > 0) {
    console.log(queue.dequeque());
}
