function changeQuant(itemName,targetChangeBox, price,isadd){
    if(isadd){
        document.getElementById(itemName+'-plus').addEventListener('click',function(){
            const targetOutputBox = document.getElementById(targetChangeBox);
            let targetOutput = Number(targetOutputBox.innerText);
            targetOutput +=1;
            targetOutputBox.innerText = targetOutput;

            document.getElementById(itemName+'-price').innerText = targetOutput * price;
        })
    }
    else{
        document.getElementById(itemName+'-minus').addEventListener('click',function(){
            const targetOutputBox = document.getElementById(targetChangeBox);
            let targetOutput = Number(targetOutputBox.innerText);
            if(targetOutput>0){
                    targetOutput -=1;
                    targetOutputBox.innerText = targetOutput;
                    
                    document.getElementById(itemName+'-price').innerText = targetOutput * price;
                }
            })
    }
}
const perBurger = 30;
const perHotDog = 20;
const perCoffee = 10;
changeQuant('burger','burger-quant',perBurger,true)
changeQuant('burger','burger-quant',perBurger,false)

changeQuant('hot-dog','hot-dog-quant',perHotDog,true)
changeQuant('hot-dog','hot-dog-quant',perHotDog,false)

changeQuant('coffee','coffee-quant',perCoffee,true)
changeQuant('coffee','coffee-quant',perCoffee,false)
    
        // if(isadd){
        //     targetOutput +=1;
        //     targetOutputBox.innerText = targetOutput;


        // } else if(isadd == false && targetOutput>0){
        //     targetOutput -=1;
        //     targetOutputBox.innerText = targetOutput;
        // }
//     })
// }
