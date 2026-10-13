function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const hashTable: Map<number, number> = new Map()

    for (let i = 0; i < nums1.length; i++) {
        hashTable.set(nums1[i][0], nums1[i][1])
    }

    for (let i = 0; i < nums2.length; i++) {
        const hasKey = hashTable.get(nums2[i][0])

        if (hasKey) {
            hashTable.set(nums2[i][0], hasKey + nums2[i][1])
        } else {
            hashTable.set(nums2[i][0], nums2[i][1])
        }
    }

    let sortedList = Array.from(hashTable).sort((a, b) => a[0] - b[0])

    return sortedList
};