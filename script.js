// Common shared function

function costCalculation(costId) {
    const elementProductCost = parseFloat(document.getElementById(costId).innerText);
    const balanceTotal = parseFloat(document.getElementById('total-balance').innerText);
    const newTotalBalance = balanceTotal + elementProductCost ;
    document.getElementById('total-balance').innerText = newTotalBalance;
    const totalField = parseFloat(document.getElementById('total-area').innerText);
    // const total = totalField + newTotalBalance;
    return document.getElementById('total-area').innerText = newTotalBalance;
}

// Kitchenware :

document.getElementById('k-card-one').addEventListener('click', function(){
    costCalculation('k-cost-one');
});
document.getElementById('k-card-two').addEventListener('click', function(){
    costCalculation('k-cost-two')
});
document.getElementById('k-card-three').addEventListener('click', function(){
    costCalculation('k-cost-three')
});

// Sportswear :

document.getElementById('s-card-one').addEventListener('click', function(){
    costCalculation('s-cost-one');
});
document.getElementById('s-card-two').addEventListener('click', function(){
    costCalculation('s-cost-two')
});
document.getElementById('s-card-three').addEventListener('click', function(){
    costCalculation('s-cost-three')
});

// Furniture :

document.getElementById('f-card-one').addEventListener('click', function(){
    costCalculation('f-cost-one');
});
document.getElementById('f-card-two').addEventListener('click', function(){
    costCalculation('f-cost-two')
});
document.getElementById('f-card-three').addEventListener('click', function(){
    costCalculation('f-cost-three')
});



