//11o, 11p, 11q
function findIndex1(arr , word){
for(let i = 0; i < arr.length ; i++){
  if(arr[i] === word){
    console.log(i);
    break;
  }else if( (i === arr.length - 1) && (arr[i] !== word)){
    console.log(-1);
  }
}
}



let arr1 = ['hello', 'search', 'search', 'good', 'search', 'good'];
findIndex1(arr1 , 'good');
findIndex1(arr1 , 'red');

//11r
function removeEgg(foods){
  let arr = [];
  for(let i = 0; i < foods.length ; i++){
    if(!(foods[i] === "egg")){
      arr.push(foods[i]);
    }
  }
  console.log(arr);
}

//11s(remove only 2 eggs)
function removeEgg2(foods){
  let cnt = 0;
  let arr = [];
  for(let i = 0; i < foods.length ; i++){
    if(foods[i] === "egg" && cnt < 2){
      cnt++;
      continue;
    }
    arr.push(foods[i]);
  }
  console.log(arr);
}

//11t(remove last 2 egg using .reverse())
function removeEgg3(foods){
  let revFood = foods.reverse();
  let cnt = 0;
  let arr = [];
  for(let i = 0; i < revFood.length ; i++){
    if(revFood[i] === "egg" && cnt < 2){
      cnt++;
      continue;
    }
    arr.push(revFood[i]);
  }
  console.log(arr.reverse());
  console.log(foods);
}

//11u(remove last 2 egg using .reverse() but withouth changing original one use .slice())
function removeEgg4(foods){
  let revFood = foods.slice().reverse();
  let cnt = 0;
  let arr = [];
  for(let i = 0; i < revFood.length ; i++){
    if(revFood[i] === "egg" && cnt < 2){
      cnt++;
      continue;
    }
    arr.push(revFood[i]);
  }
  console.log(arr.reverse());
  console.log(foods);
}
 
let foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
removeEgg(foods);

foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
removeEgg2(foods);

foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
removeEgg3(foods);

foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
removeEgg4(foods);

//11v(FizzBuzz Problem)
function FizzBuzz(n){
  for(let i = 1; i <= n ; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log("FizzBuzz");
      continue;
    }
    if(i % 3 === 0){
      console.log("Fizz");
      continue;
    }
    if(i % 5 === 0){
      console.log("Buzz")
      continue;
    }
    console.log(i);
  }
}

FizzBuzz(20);

//11w
function findIndex2(arr , word){
  for(let i = 0; i < arr.length ; i++){
    if(arr[i] === word){
    return i;
    }
  }
  return -1;
}

function unique(array){
  let result = [];
  for(let i = 0; i < array.length ; i++){
    if(findIndex2(result , array[i]) === -1){
      result.push(array[i]);
    } else {
      continue;
    }
  }
  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));