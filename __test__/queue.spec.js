const Queue = require("../queue.js");


describe("Testing Queue", () => {
    test("queue is empty", () => {
        const q = Queue();
        expect(q.isEmpty()).toBe(true);
        expect(q.length).toBe(0);
    });

    test("queue is not empty", () => {
        const q = Queue();
        q.enqueue("batman");
        q.enqueue("superman");
        q.enqueue("wonder woman");
        expect(q.isEmpty()).toBe(false);
        expect(q.length).toBe(3);
    });

    test("dequeue, one and two and three", () => {
        const q = Queue();
        q.enqueue("batman");
        expect(q.length).toBe(1);
        q.enqueue("superman");
        expect(q.length).toBe(2);
        q.enqueue("wonder woman");
        expect(q.length).toBe(3);
        expect(q.next()).toBe("batman");
        q.dequeue();
        expect(q.next()).toBe("superman");
        expect(q.length).toBe(2);
        q.dequeue();
        expect(q.next()).toBe("wonder woman");
        expect(q.length).toBe(1);
        q.dequeue();
        expect(q.length).toBe(0);
        expect(q.next()).toBe(undefined);

    });

    test("dequeue, when empty", () => {
        const q = Queue();
        expect(q.length).toBe(0);
        q.dequeue();
        expect(q.length).toBe(0);
    });

    test("enqueue", () => {
        const q = Queue();
        q.enqueue("batman");
        expect(q.length).toBe(1);
        expect(q.next()).toBe("batman");
        q.enqueue("superman");
        expect(q.length).toBe(2);
        expect(q.next()).toBe("batman");
    });

    test("next, it should be undefined when empty", () => {
        const q = Queue();
        expect(q.next()).toBe(undefined);
        q.enqueue("starlord");
        expect(q.next()).toBe("starlord");
        q.dequeue();
        expect(q.next()).toBe(undefined);
    });
});