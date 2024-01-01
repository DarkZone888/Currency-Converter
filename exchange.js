function convertCurrency()
{
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

   
    const exchange = {
        usd: 1,    
        thb: 34.42,
    };
    


    let result = (amount / exchange[from]) * exchange[to];
    document.getElementById("result").innerText = `${amount} ${from} is ${result.toFixed(2)} ${to}`;
}