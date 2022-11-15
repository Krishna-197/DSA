function merge(left,right){
    var i=0;
    var j=0;
    var result =[];
    
    while(i<left.length || j<right.length){
         if(i === left.length){
         result.push(right[j]);
         j++;
       }else if(j === right.length || left[i] <= right[j]){
         result.push(left[i]);
         i++;
       }else{
         result.push(right[j]);
         j++;
      }
     }
      return result;
 }

 console.log(merge([2,4,6,7,10,14],[1,3,5,8,9,11,12]))