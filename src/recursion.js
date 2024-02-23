var tracker = 0;
const callMe = () => {
    if(tracker === 3){
        return 'loops!';
    }
    tracker++;
    console.log('anyTime')
    return callMe('anyTime');
};

// console.log(callMe());



function joinElements(array, joinString){
    let resultSoFar = '';

    for(let i = 0; i < array.length - 1; i++){
        resultSoFar += array[i] + joinString;

    }
     
    return resultSoFar + array[array.length - 1];
}

console.log(joinElements(['s','cr','t cod', ' :) :)'], 'e'))

