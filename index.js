function produceDrivingRange (blockRange){

   return function(start, end) {
     let distance = parseInt(end) - parseInt(start);
    if blockRange < distance 
    return blockRange * distance;
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