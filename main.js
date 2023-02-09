function sumCubes(n){
  //create empty array
  let cubes = [];
  
  //for loop that runs through each number and pushes value into array
  for(let i = 1; i <= n; i++){
    cubes.push(i*i*i)
  }
  
  //reduce cubes(addition) and return
  return cubes.reduce((a,c) => a+c, 0)
}
