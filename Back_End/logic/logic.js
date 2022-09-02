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
let result1;
let total;
//breed discount
const breedDiscountId = ['chow chow','poodle','retriever']
const breedDiscount = 0.9
//area increase 
const areaId = ['NW5', 'SE1', 'SW1']
const areaIncrease = 1.15

let ageIncrease = 1

for (let i = 0 ; i<testData.pets.length; i++){
    if (testData.pets[i].breed.includes('chow chow') ||testData.pets[i].breed.includes('poodle')|| testData.pets[i].breed.includes('retriever')   ){
       result = baseRate * breedDiscount;
       } else {
           result1 = 120
       }
}
if (testData.postcode.includes("NW5")||testData.postcode.includes("SE1")||testData.postcode.includes("SW1")){
    total = total *1.15
    // console.log(total);
} else {
    // console.log(total)
}

for ( let i = 0; i<testData.pets.length;i++ ){
    if (pet_age > 0 && pet_age<=5){
        total = (total+(baseRate*(0.05*pet_age)))
        console.log(total)
    }else if ( pet_age>5 && pet_age<=10){
        total = (total+(baseRate*(0.10*pet_age)))
        console.log(total) 
    }
}

}


Calculations()