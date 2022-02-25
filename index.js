// const record = [
//     { year: "2015", result: "d"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
// ]
// function superbowlWin(array){
//     let result 
//     if (result = array.find(isWin)){
//         return result.year
//     }
//     return result
// }

function superbowlWin(array){
    let result 
    if (result = array.find(record => record.result === "W")){
        return result.year
    }
    return result
}

function isWin(element){
    return (element.result === "W");
}