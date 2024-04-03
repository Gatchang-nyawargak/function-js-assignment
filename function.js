//Given an array of strings, use a function to reverse all the elements in the
// string in ascending order and the specific elements in descending order

function reverseElements(arr){
   let reversedArr = arr.map(str => [...str].reverse().join(''));
   reversedArr.sort();
   
   return reversedArr;
 }
let arr = ["boy", "girl", "mum", "dad", "uncle"];
console.log(reverseElements(arr));

//Using JS functions and an array of numbers, return positive if
// an element within the array is positive, negative if an element is negative, else zero

function checkElements(arr, index) {
    const num= arr[index]
        if (arr[index]> 0) {
          console.log("is positive");
      } else if (arr < 0) {
           console.log("is negative");
       } else {
           console.log("is zero");
           }
        };
     let num=(1,-2,0,3,-4);
      (checkElements(num,3));

      //Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns 
      //a new array of employee objects sorted by their salary in ascending order.
      
      function sortEmployeesBySalary(employees) {
          return employees.sort((a, b) => a.salary - b.salary);
        }
        const employees = [
           {id: 1, name:'Alice', salary:80000},
           {id: 2, name:'John', salary:60000},
           {id: 3, name:'Chrisine',salary:40000}

        ];
        const sortedEmployees= sortEmployeesBySalary(employees);
        console.log(sortedEmployees);

        //Write a function that accepts an array of numbers and uses the forEach()
        // method to console.log each number multiplied by 2.

        function doubledNumbers(numbers) {
           numbers.forEach((number) => {
               console.log(number * 2);
             });
         }
         //Example
         doubledNumbers([2,5,4,8,9])

         //Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
         //and the last two added by 5. Console the array with the new values


           function multiplyArr(numbers){
               const multiplyFirstFour = numbers.slice(0,4).map(num => num *8);
               const addLastTwo = numbers.slice(-2).map(num => num + 5);
               const newArr = multiplyFirstFour.concat(addLastTwo);
               return newArr;
              };
       
       const numbers = [1,2,3,4,5,6,];
         console.log(multiplyArr(numbers));
         