class MyQueue {
    stack: number[]
    intermediateStack: number[]
    constructor() {
        this.stack = []
        this.intermediateStack = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.stack.push(x)
    }

    /**
     * @return {number}
     */
    pop(): number {
        let poppedValue: number | null = null
        let intermediatePoppedValue: number | null = null
        const length: number = this.stack.length

        for(let i=length-1; i >= 0; i--){
            poppedValue = this.stack.pop()
            if(i > 0){
                this.intermediateStack.push(poppedValue)
            }
        }

        while(this.intermediateStack.length > 0){
            intermediatePoppedValue = this.intermediateStack.pop()
            this.stack.push(intermediatePoppedValue)
        }

        return poppedValue
    }

    /**
     * @return {number}
     */
    peek(): number {
        let poppedValue: number | null = null
        let intermediatePoppedValue: number | null = null
        const length: number = this.stack.length
       
        for(let i=0; i < length ; i++){
            poppedValue = this.stack.pop()
            this.intermediateStack.push(poppedValue)
        }

        while(this.intermediateStack.length > 0){
            intermediatePoppedValue = this.intermediateStack.pop()
            this.stack.push(intermediatePoppedValue)
        }
        
        return poppedValue
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.stack.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
