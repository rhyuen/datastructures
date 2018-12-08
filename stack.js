function createStack() {
    const stack = [];

    return {
        push(item) {
            stack.push(item);
        },
        pop() {
            if (stack.length === 0) {
                return [];
            }
            return stack.pop();
        },
        next() {
            return (stack.length === 0) ? null : stack[stack.length - 1];
        },
        get size() {
            return stack.length;
        },
        isEmpty() {
            return stack.length === 0;
        }
    };
}


module.exports = createStack;