class MyStack {
    queue: number[]
    constructor() {
        this.queue = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue.push(x)
    }

    /**
     * @return {number}
     */
    pop(): number {
        let poppedValue: number|null = null
        const length: number = this.queue.length
        
        for(let i = 0; i < length; i++){
            poppedValue = this.queue.shift()
            if(i < length - 1){
                this.queue.push(poppedValue)
            }else{
                return poppedValue
            }
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        const lastIndex = this.queue.length -1
        return this.queue[lastIndex]
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
