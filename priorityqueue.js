const queue = require("./queue.js");

function createPriorityQueue() {
    const priorityQueue = queue();
    const normalQueue = queue();

    return {
        enqueue(item, highPriority = false) {
            return (highPriority) ?
                priorityQueue.enqueue(item) :
                normalQueue.enqueue(item);
        },
        dequeue() {
            return (!priorityQueue.isEmpty()) ?
                priorityQueue.dequeue() :
                normalQueue.dequeue();
        },

        next() {
            return (!priorityQueue.isEmpty()) ?
                priorityQueue.next() :
                normalQueue.next();
        },

        get length() {
            return priorityQueue.length + normalQueue.length;
        },

        isEmpty() {
            return (priorityQueue.length + normalQueue.length) === 0;
        }

    };
}

module.exports = createPriorityQueue;