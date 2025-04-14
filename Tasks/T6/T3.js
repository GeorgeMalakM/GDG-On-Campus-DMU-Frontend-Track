/*
    Name : George Malak
    Date : 14/4/2025
    Problem link :https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
    # of tries : 1
*/
var removeDuplicates = function(n) {
    if (n.length === 0) return 0;

    let k = 1; 

    for (let i = 1; i < n.length; i++) {
        if (n[i] !== n[i - 1]) {
            n[k] = n[i];
            k++;
        }
    }

    return k;
};