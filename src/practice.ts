class Queue<T> {
    list: T[] = [];

    get length() {
        return this.list.length;
    }

    enqueque(item: T) {
        this.list.push(item);
    }

    dequeque() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueque(0);
queue.enqueque(1);
queue.enqueque(2);
queue.enqueque(3);
queue.enqueque(4);

while (queue.length > 0) {
    console.log(queue.dequeque());
}