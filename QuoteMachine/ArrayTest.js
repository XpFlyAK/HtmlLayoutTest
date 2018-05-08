function unite(arr1, arr2, arr3) {
    for(var  i=1 ;i<arguments.length;i++){

        arguments[i].reduce(function(accumulator,currentValue){
            if(currentValue in arr1){

            }else{
                arr1.push(currentValue);
            }
        });

    }
    return arr1;
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));