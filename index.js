function produceDrivingRange (blockRange){
   return function(manufacturePrice) {
    return blockRange * manufacturePrice;
  };
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