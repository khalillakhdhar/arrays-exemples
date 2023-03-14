const arr1=[1,4,7];
const arr2=[6,5,3];
let sumArray=[];
let i=0;
arr1.forEach(a=>
{
    sumArray.push(a+arr2[i])
    i++;
}
)
console.log(sumArray);