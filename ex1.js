t=[1,3,4,8,6,24,31];
/*
for(let i=1;i<t.length;i++)
{
    let u=t[i]%10;
    if(u%4==0)
    {
        console.log("élément "+t[i]);
    }
}

t.forEach(function(tab)
{
    //console.log(tab)
    let u=tab%10;
    if(u%4==0)
    {
        console.log("élément "+tab);
    }
}
)
*/
t.forEach( tab=>{
    let u=tab%10;
    if(u%4==0)
    {
        console.log("élément "+tab);
    }
}

)