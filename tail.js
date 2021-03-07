const tail=(arr) =>
{
    var result_arr=[];
    if(arr.length<=1) return result_arr;
    shiftByOne(arr,result_arr);
    return result_arr;
}

function shiftByOne(arr,result_arr)
{
    for(var i=0;i<arr.length-1;i++)
    {
        result_arr[i]=arr[i+1];
    }
}
module.exports=tail;
