/*
    Name : George Malak
    Date : 14/4/2025
    Problem link :https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
    # of tries : 2
*/
var majorityElement = function (n) {
    Fr = new Map();
    let maj = n.length / 2;
    for (j of n) {
        if (Fr.has(j)) {
            Fr.set(j, Fr.get(j) + 1);
        } else {
            Fr.set(j, 1);
        }
        if (Fr.get(j) > maj) {
            return j;
        }
    }
};