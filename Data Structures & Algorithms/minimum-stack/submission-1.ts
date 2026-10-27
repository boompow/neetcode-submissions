class MinStack {
    stack: number[]
    minStack: number[]
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const lastIndex: number = this.minStack.length - 1 
        this.stack.push(val)
        
        if(lastIndex === -1 || this.minStack[lastIndex] > val){
            this.minStack.push(val)
        }else{
            this.minStack.push(this.minStack[lastIndex])
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length -1]
    }
}
