const priorityQueue = require("../priorityQueue.js");

describe("priority queue stuff.", () => {
    test("priority queue is empty", () => {
        const ds = priorityQueue();
        expect(ds.length).toBe(0);
    });

    test("Enqueue", () => {
        const ds = priorityQueue();
        ds.enqueue("First Item");
        expect(ds.length).not.toBe(0);
        ds.enqueue("Second Item");
        expect(ds.length).toBe(2);
        ds.enqueue("third Item", true);
        expect(ds.length).toBe(3);
        ds.enqueue("fourth");
        ds.enqueue("fifth");
        expect(ds.length).toBe(5);
    });

    test("Dequeue", () => {
        const ds = priorityQueue();
        ds.enqueue("First Item");
        ds.enqueue("Second Item");
        ds.enqueue("Third Item", true);
        ds.enqueue("fourth");
        ds.enqueue("fifth");
        expect(ds.next()).toBe("Third Item")
        ds.dequeue()
        expect(ds.next()).toBe("First Item");
        ds.dequeue();
        expect(ds.next()).toBe("Second Item");
        ds.enqueue("Six", true);
        ds.enqueue("Seven", true);
        expect(ds.length).toBe(5);
        expect(ds.next()).toBe("Six");
        ds.dequeue();
        expect(ds.length).toBe(4);
        expect(ds.next()).toBe("Seven");
        ds.dequeue();
        expect(ds.next()).toBe("Second Item");
    });

});