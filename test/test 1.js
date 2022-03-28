function IntegerDuplicateOfArrMax( arr ){
    let arrP = []
    if( !Array.isArray(arr)){
      throw new Error( 'arr_is_not_array' )
    }
    for( let item of arr ) {
        if( typeof item !== 'number' ){
          throw new Error('value_in_arr_is_not_number') 
        }
        let index = arrP.findIndex(e => e.no === item )
        if(index !== -1) {
          arrP[index].count += 1
        } else {
          arrP.push({no: item ,count: 1 })
        }
    }
    arrP.sort((a,b) => b.count - a.count )
    return arrP[0]
} 
console.log(IntegerDuplicateOfArrMax([2, -1, 2, 3, 3, 2]))