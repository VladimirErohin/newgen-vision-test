
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] }, // от 500
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },  //до 400
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },     // от 200
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },   // не имеет значения
];

let requiredRange1 = [null, 200]; // England, Italy, France
let requiredRange2 = [100, 350];  // Italy, France
let requiredRange3 = [200, null]; // USA, France


function rangeOfPrice(courseList, range){

    let first= range[0];
    let second = range[1];

    let rangeList = []

    for(let i = 0; i<courseList.length; i++){
        let item =courseList[i];

        if(first === null && second){

            if((second >= item.prices[1] && item.prices[1] !== null)      //1
                || (item.prices[1] === null && item.prices[0] === null)){
                rangeList.push(courseList[i])
            }
        }

        if(first && second){
            if((first === item.prices[0] && second >=item.prices[1])     //2
                || (item.prices[1] === null && item.prices[0] === null)){
                rangeList.push(courseList[i])
            }
        }


        if(first  && second===null){
            if((first >= item.prices[0] && item.prices[1] === null)         //3
                || (item.prices[1] === null && item.prices[0] === null)){
                rangeList.push(courseList[i])
            }
        }
    }

    return rangeList

}

//rangeOfPrice(courses, requiredRange1);
//rangeOfPrice(courses, requiredRange2);
//rangeOfPrice(courses, requiredRange3);