/*
    Name : George Malak
    Date : 2025-4-18
    Course : GDG On Campus Track FrontEnd
    Assignment : Summation time
*/
function summationTime(...n) {
    let rs = 0 ;
    for (let i = 0; i < n.length; i++){
        rs += n[i] ;
    }
    return Math.abs(rs);
}
console.log(summationTime(1, 2, 3, 4, 5));
/* Example 1: console.log(summationTime(1, 2, 3, 4, 5)); // Output: 15
Example 2: console.log(summationTime(-1, -2, -3, -4, -5)); // Output: 15
Example 3: console.log(summationTime(1, -2, 3, -4, 5)); // Output: 3
*/