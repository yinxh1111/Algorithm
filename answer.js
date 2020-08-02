/*
 * @Author: yxh
 * @Date: 2020-08-02 11:06:17
 * @LastEditors: yxh
 * @LastEditTime: 2020-08-02 13:14:16
 * @Description: 
 */ 
var numIdenticalPairs = function (nums) {
    if (nums.length === 0 || !Array.isArray(nums)) return 0
    let map = new Map()
    let count = 0
    for (let i = 0, length = nums.length; i < length; i++) {
        if (map.get(nums[i])) {
            let temp= map.get(nums[i])
            temp.push(i)
            map.set(nums[i], temp)
            count += map.get(nums[i]).length-1
        } else {
            map.set(nums[i], [i])
        }
    }
    _getnums = function (n) {
        return n * (n - 1) / 2
    }
    //下面这部分很耗时,可以在循环中记录次数
    // return [...map.values()].reduce((prev, next) => prev + _getnums(next),0)
    return count
};
let a=numIdenticalPairs([1,1,1,1])
console.log(a)