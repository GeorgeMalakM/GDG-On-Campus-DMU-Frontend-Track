/*
    Name : George Malak
    Date : 14/4/2025
    Problem link :https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
    # of tries : 3
*/
var maxProfit = function(prices) {
    let MNprice = Infinity;
    let MXprofit = 0;
    for (let P of prices) {
        if (P < MNprice) {
            MNprice = P;
        } else {
            MXprofit = Math.max(MXprofit, P - MNprice);
        }
    }
    return MXprofit;
};