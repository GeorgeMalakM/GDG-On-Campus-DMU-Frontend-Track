/*
    Name : George Malak
    Date : 2025-4-18
    Course : GDG On Campus Track FrontEnd
    Assignment : Filter and Modify   
*/
function FilterModify(List){ 
    let result = List.filter((item) => {
        return item %2 == 0;
    })
    
    result.forEach((_, index) => {
        result[index] *= 2;
    })
    
    return result;
}