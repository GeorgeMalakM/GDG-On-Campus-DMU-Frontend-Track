/*
    Name : George Malak
    Date : 14/4/2025
    Problem link :https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
    # of tries : 2
*/
var expect = function(val) {
    return{
        toBe: function(va){
            if(val === va){
                return true;
            }
            throw new Error ("Not Equal");
        },
        notToBe: function(va){
            if(val !== va){
                return true;
            }
            throw new Error ("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */