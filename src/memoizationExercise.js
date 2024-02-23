/*

Write a funtion, time10, that takes an argument n and mutiples n times 10
*/

const timesM = ( n, m ) => n * m;


const cache = {}

const memoTimesM = (n) => {
    if (n in  cache){
        console.log('Fetching from cache: ', n)
        return cache[n];
    }
    console.log('Caculatin result: ', n)
    cache[n] = timesM(n,10);
    return cache[n]
}

const memoizedClosureTimesM = (m) => {
    const cache = {}

    return (n) => {
        if (n in  cache){
            console.log('Fetching from cache: ', n)
            return cache[n];
        }
        console.log('Caculatin result: ', n)
        cache[n] = timesM(n,m);
        return cache[n]
    }
}

const memoize = (cb) => {
    let cache = {};
    return (...args) => {
        if(n in cache){
            console.log('Fetching from cache: ', n);
            return cache[n];
        }
            console.log('calculating result')
            let result = cb(...args);
            cache[n] = result;
            return result;    
    }
}
 
export default memoize;





// console.log(cache);