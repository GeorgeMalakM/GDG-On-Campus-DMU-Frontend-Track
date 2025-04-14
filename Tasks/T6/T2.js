/*
    Name : George Malak
    Date : 14/4/2025
    Problem link :https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
    # of tries : 1
*/
var createCounter = function(init) {
    let cr = init;
    return{
        increment: function () {
            return ++cr;
        },
        reset: function () {
            cr = init ;
            return cr ;
        },
        decrement: function () {
            return --cr;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */