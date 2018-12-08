const stack = require("../stack.js");


describe("Stack Behaviour", () => {
    test("Stack is Empty", () => {
        const s = stack();
        expect(s.size).toBe(0);
        expect(s.isEmpty()).toBe(true);
    });

    test("Stack isn't empty", () => {
        const s = stack();
        s.push("Batman");
        expect(s.isEmpty()).toBe(false);
    });

    test("Size works", () => {
        const s = stack();
        expect(s.size).toBe(0);
        s.push("One");
        s.push("Two");
        s.push("Three");
        expect(s.size).toBe(3);
    });

    test("push works", () => {
        const s = stack();
        s.push("Superman");
        expect(s.size).toBe(1);
        s.push("Wonder Woman");
        s.push("Batman")
        expect(s.size).toBe(3);
    });

    test("pop works", () => {
        const s = stack();
        expect(s.pop()).toEqual([]);
        expect(s.size).toBe(0);
        s.push("Batman");
        s.push("Green Lantern");
        expect(s.pop()).toBe("Green Lantern");
        expect(s.pop()).toBe("Batman");
    });

    test("next works, null case", () => {
        const s = stack();
        expect(s.next()).toBe(null);
    });

    test("next works, normal case", () => {
        const s = stack();
        s.push("Captain Marvel");
        s.push("Iron Man");
        expect(s.next()).toBe("Iron Man");
        s.pop();
        expect(s.next()).toBe("Captain Marvel");
    });
});