function sumCubes(n){
  //create return value at 0
  let cubes = 0;
  
  //for loop that runs through each number and adds value into cubes
  for(let i = 1; i <= n; i++){
    cubes += i**3
  }
  
  //return cubes
  return cubes
