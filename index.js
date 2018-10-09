function produceDrivingRange (blockRange){

   return function(start, end) {
    return blockRange * distance;
  };
}
const twentyBlockRange = produceDrivingRange(20);


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