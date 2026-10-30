class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let stack: [number, number][] = []
        let positionAndTime: [number, number][] = []

        for(let i=0; i< position.length; i++){
            const timeToArrival: number = (target - position[i]) / speed[i]
            positionAndTime.push([position[i], timeToArrival])
        }

        const sortedPosition: [number, number][] =positionAndTime.sort((a,b)=>b[0]-a[0])

        for(let item of sortedPosition){
            if(stack.length === 0 || stack[stack.length-1][1] < item[1]){
                stack.push(item)
            }
        }

        return stack.length
    }
}
