import{ dummydata} from "../libs/data.js"


// Plan
//We want to have a base price 10/m increase 5% up till year 5 and 10% for each year beetween 6-10 
//10% decrease with 3 breeds 
//15% increase for 3 areas
//multipet descount for >2 pets 10% decrease for each dog


function Calculations() {
    
    const testData = dummydata[0]
const baseRate = 120;
let result ;
//breed discount
const breedDiscountId = ['chow chow','poodle','retriever']
const breedDiscount = 0.9
//area increase 
const areaId = ['NW5', 'SE1', 'SW1']
const areaIncrease = 1.15

let ageIncrease = 1

if (testData.breed.includes('chow chow') ||testData.breed.includes('poodle')|| testData.breed.includes('retriever')   ){
 result = baseRate * breedDiscount;
} else {
    result = 120
}
console.log (result)
}

Calculations()