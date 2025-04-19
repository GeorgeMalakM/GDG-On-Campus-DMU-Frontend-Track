/*
    Name : George Malak
    Date : 2025-4-18
    Course : GDG On Campus Track FrontEnd
    Assignment : Positions in array   
*/
function Positions(List){
    List.forEach((Ele, ind) => {
        if (Ele <= 10) {
            console.log(`A[${ind}] = ${Ele}`)
        }
    })
}