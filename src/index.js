exports.arrayToObject=function(arr1, arr2){
    const ob={}
    for(i=0;i<arr1.length;i++)
        ob[arr1[i]]=arr2[i]
    return ob;
}