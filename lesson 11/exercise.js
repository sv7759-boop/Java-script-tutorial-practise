// 11a
      const nums = [10,20,30];
      nums[2] = 99;
      console.log(nums);

      // 11b
      function getLastValue(arr){
        return arr[arr.length - 1];
      }
      console.log(getLastValue([1,2,3])); // 3
      console.log(getLastValue(['wwe','hello','world'])); // world

      //11c
      function arraySwap(array){
        let temp = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = temp;
        return array;
      }
      console.log(arraySwap([1,2,3,4])); // [4,2,3,1]
      console.log(arraySwap(['gg' , 'hello' , 'world'])) // ['world', 'hello', 'gg']

      //11d
      for(let i = 0; i <= 10; i+=2){
        console.log(i);
      }

      //11e
      for(let i = 5 ; i >= 0; i--){
        console.log(i);
      }

      //11f
      let i = 0;
      while(i <= 10){
        console.log(i);
        i += 2;
      }

      let j = 5;
      while(j >= 0){
        console.log(j);
        j--;
      }

      //11g
      const arr = [1,2,3,4,5];
      let newArr = [];
      for(let i = 0; i <arr.length; i++){
        newArr.push(arr[i] + 1);
      }
      console.log(newArr);

      //11h
      function addOne(arr){
        let newArr = [];
        for(let i = 0; i <arr.length; i++){
          newArr.push(arr[i] + 1);
        }
        console.log(newArr);
      }
      addOne([-2,-1,0,99,5]);

      //11i
      function addNum(arr , num){
        let newArr = [];
        for(let i = 0; i <arr.length; i++){
          newArr.push(arr[i] + num);
        }
        console.log(newArr);
      }
      addNum([1,2,3,4,5] , 10);

      //11j
      function addArrays(arr1 , arr2){
        let newArr = [];
        for(let i = 0; i <arr1.length; i++){
          newArr.push(arr1[i] + arr2[i]);
        }
        console.log(newArr);
      }
      addArrays([1,2,3,4,5] , [10,20,30,40,50]);

      //11k
      function countPositive(nums){
        let count = 0;
        for (let i = 0; i < nums.length; i++){
          if(nums[i] > 0){
            count++;
          }
        }
        console.log(count);
      }
      countPositive([-2,-1,0,99,5]); // 2

      //11l
      function minMax(nums){
        let min = nums[0];
        let max = nums[0];
        for (let i = 0; i < nums.length; i++){
          if(nums[i] < min){
            min = nums[i];
          }
          else if(nums[i] > max){
            max = nums[i];
          }
          else if(nums.length === 0){
            min = null;
            max = null;
          }
          else if(nums.length === 1){
            min = nums[0];
            max = nums[0];
          }
        }
        return {
          min: min,
          max: max
        }
      }
      console.log(minMax([-2,-1,0,99,5])); // {min: -2 , max: 99}
      console.log(minMax([1,2,3,4,5])); // {min: 1 , max: 5}
      console.log(minMax([])); // {min: null , max: null}

      //11n
      function countWords(words){
        let counts = {};
        for (let i = 0; i < words.length; i++){
          let word = words[i];
          if(counts[word]){
            counts[word]++;
          }
          else{
            counts[word] = 1;
          }
        }
        return counts;
      }
      console.log(countWords(['hello','world','hello'])); // {hello: 2 , world: 1}
      console.log(countWords(['a','b','c','a','b','a'])); // {a: 3 , b: 2 , c: 1}