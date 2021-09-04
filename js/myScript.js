let type = prompt("Какой тип сайта вы хотите?","1-Сайт-визитка, 2-Корпоративный, 3-Интернет-магазин");
let design = prompt("Какой вы хотите дизайн?", "1-Интерфейсный, 2-Динамический, 3-Полиграфический");
let responsive = prompt("Какую хотите адаптивность сайта?", "1-Фиксированный, 2-Резиновый, 3-Отзывчивый");

function calculate(){
    let priceOne = [1000,2000,3000];
    let priceTwo = [500,1000,2000];
    let priceThree = [700,1000,1500];
    for(let i = 0;i<priceOne.length;i++){
        if(i+1 == type){var calcPriceOne = priceOne[i];}
    }
        for(let i = 0;i<priceTwo.length;i++){
        if(i+1 == design){var calcPriceTwo = priceTwo[i];}
    }

        for(let i = 0;i<priceThree.length;i++){
        if(i+1 == responsive){var calcPriceThree = priceThree[i];}
    }

    return calcPriceOne + calcPriceTwo + calcPriceThree;
}
alert("Стоимость будет " + calculate() + " российских рублей");
