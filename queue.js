function createQueue() {
    const queue = [];

    return {
        enqueue(item) {
            return queue.push(item);
        },

        dequeue() {
            return queue.shift();
        },

        next() {
            return queue[0];
        },

        get length() {
            return queue.length;
        },

        isEmpty() {
            return queue.length === 0;
        }
    }
}

module.exports = createQueue;