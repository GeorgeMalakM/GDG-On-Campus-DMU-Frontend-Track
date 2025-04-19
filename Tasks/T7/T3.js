/*
    Name : George Malak
    Date : 2025-4-18
    Course : GDG On Campus Track FrontEnd
    Assignment : Replacement  
*/
function Replacement(List){
    let Answer = [];
    List.forEach((ReplcEle) => {
        if (ReplcEle > 0) Answer.push(1);
        else if (ReplcEle < 0) Answer.push(2);
        else Answer.push(0);
    })
    return Answer;
}