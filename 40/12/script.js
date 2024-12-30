function calculateRentalCost(days, carType) {
    let costPerDay;
    
    switch (carType) {
        case 'Economy':
            costPerDay = 4000;
            break;
        case 'Midsize':
            costPerDay = 10000;
            break;
        case 'Luxury':
            costPerDay = 20000;
            break;
        default:
            console.log("Invalid car type");
            return;
    }

    return costPerDay * days;
}

let days = 5;
let carType = 'Economy';
document.getElementById('rentalCostOutput').textContent = `Rental cost for ${days} days: Rs. ${calculateRentalCost(days, carType)}`;
