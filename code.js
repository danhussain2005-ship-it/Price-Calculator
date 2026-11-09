function calculateDiscount(price,discount){
    return (price*discount)/100
}

function calculateTax(priceAfterDiscount,tax){
    return (priceAfterDiscount*tax)/100
}

function CalculateFinalPrice(price,priceoff,tax){
    const Finalprice = price-priceoff
    return Finalprice+tax
}

function CreatePriceSummary(price,discount,taxPercent){
    const priceoff = calculateDiscount(price,discount)
    const priceAfterDiscount = price-priceoff
    const tax = calculateTax(priceAfterDiscount,taxPercent)
    const actualPrice = CalculateFinalPrice(price,priceoff,tax)

return{
    price,
    priceoff,
    tax,
    actualPrice
};
}

console.log(CreatePriceSummary(100,20,5))