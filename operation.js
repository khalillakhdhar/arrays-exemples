var fruits=["pommes","oranges","bananes"];
showFruits();
/*fruits.pop();
console.log("aprés supression")
showFruits()
fruits.push("ananas");
console.log("aprés ajout")
showFruits();
*/
fruits.splice(1,2)
showFruits();


function showFruits()
{
    fruits.forEach(fruit=>
        {
            console.log(fruit);
        }
    )
}