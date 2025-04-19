/*
    Name : George Malak
    Date : 2025-4-18
    Course : GDG On Campus Track FrontEnd
    Assignment : Array Editing   
*/
function Editing(List, Ele){
    const temp = List.filter((item) => {
        return item <= 100;
    })
    
    const result = temp.filter((item, index) => {
        return index < Ele;
    })
    
    return result;
}
