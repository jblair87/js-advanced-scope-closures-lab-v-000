function produceDrivingRange (blockRange){
   return function(marketMultiplier) {
    return marketMultiplier * manufacturePrice;
  };
const eightBlockRange = produceDrivingRange(8);
const twentyBlockRange = produceDrivingRange(20);

}
function produceTipCalculator(percentage){
   return function(riderFare) {
  return riderFare*percentage;};
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  };
}