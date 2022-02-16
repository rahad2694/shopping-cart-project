function updatePriceAndQuant(itemName,targetChangeBox, price,isadd){
    if(isadd){
        document.getElementById(itemName+'-plus').addEventListener('click',function(){
            const targetOutputBox = document.getElementById(targetChangeBox);
            let targetOutput = Number(targetOutputBox.innerText);
            targetOutput +=1;
            targetOutputBox.innerText = targetOutput;

            document.getElementById(itemName+'-price').innerText = targetOutput * price;

            document.getElementById('total-price').innerText = Number(document.getElementById('burger-price').innerText) + Number(document.getElementById('hot-dog-price').innerText) + Number(document.getElementById('coffee-price').innerText);
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

                    document.getElementById('total-price').innerText = Number(document.getElementById('burger-price').innerText) + Number(document.getElementById('hot-dog-price').innerText) + Number(document.getElementById('coffee-price').innerText);
                }
            })
    }
}
const perBurger = 30;
const perHotDog = 20;
const perCoffee = 10;
updatePriceAndQuant('burger','burger-quant',perBurger,true);
updatePriceAndQuant('burger','burger-quant',perBurger,false);
updatePriceAndQuant('hot-dog','hot-dog-quant',perHotDog,true);
updatePriceAndQuant('hot-dog','hot-dog-quant',perHotDog,false);
updatePriceAndQuant('coffee','coffee-quant',perCoffee,true);
updatePriceAndQuant('coffee','coffee-quant',perCoffee,false);