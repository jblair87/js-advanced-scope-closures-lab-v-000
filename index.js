function produceDrivingRange (blockRange){
   return function(marketMultiplier) {
    return marketMultiplier * manufacturePrice;
  };
const eightBlockRange = produceDrivingRange(8);
const twentyBlockRange = produceDrivingRange(20);

}
function produceTipCalculator(percentage){
   return function(riderFare) {
  return riderfare*percentage;};
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(){
      this.name = name
      this.id = ++driver.Id
    }
    
    
  }
}