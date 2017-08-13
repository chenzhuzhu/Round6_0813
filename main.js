/**
 * Created by cyz on 2017/8/13.
 */
'use strict';
findMiddle([1,3,2,4,6,5,7,9,8,10]);
function compare(value1,value2){
    if(value1<value2){
        return -1
    }else if(value1>value2){
        return 1
    }else{
        return 0
    }
}

function findMiddle(array){
    console.log('数组为：'+array);
    let middleNumber;
    array.sort(compare);

    let i = array.length%2
    if(i == 0){
        middleNumber =(array[array.length/2]+array[array.length/2-1])/2
    }else{
        middleNumber =array[Math.floor(array.length/2)];
    }
    console.log('中位数为：'+middleNumber);
}
