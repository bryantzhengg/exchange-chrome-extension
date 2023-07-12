document.addEventListener('DOMContentLoaded',function(){
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apiKey = "qdSUbs9ruUtsjW+SQj8FEw==SCDFotgDJhV32Ot5"
    const apiURL = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_"

    convert.addEventListener('click', () =>{
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        const url = apiURL + currencyTotal;

        fetch(url,{
            headers:{
                'X-API-KEY' : apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            console.log('rate',rate);
            const resultPrice = amountTotal * rate;
            console.log('result',resultPrice);
            result.innerHTML = `${amount} ${currency} = ${resultPrice.toFixed(2)} USD`;
        })

        .catch(error => {
            console.error('request failed', error);
            result.innerHTML = 'an error occurred'

        })


    })

})

