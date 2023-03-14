var fruits=["pommes","oranges","bananes"];
//showFruits();
/*fruits.pop();
console.log("aprés supression")
showFruits()
fruits.push("ananas");
console.log("aprés ajout")
showFruits();
*/
fruits.splice(1,2)
showFruits();
fruits.splice(0,0,["fraise","bananes"]);
console.log("aprés ajout")
showFruits();


function showFruits()
{
    fruits.forEach(fruit=>
        {
            console.log(fruit);
        }
    )
}