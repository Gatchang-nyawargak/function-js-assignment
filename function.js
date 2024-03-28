function reverseString() {
 let arr= arr.sort()
    const specificElements = arr.filter();

    specificElements.reverse();

    specificElements.forEach((element, index) => {
       const originalIndex = arr.indexOf(element);
       if (originalIndex !== -1) {
         arr[originalIndex] = specificElements[index];
       }
    });
   
    return arr;
   }

   //console.log(arr);

   function checkElements() {
    let arr =arr.forEach(element => {
       if (element > 0) {
         console.log("positive");
       } else if (element < 0) {
         console.log("negative");
       } else {
         console.log("zero");
       }
    });
   }
   checkElements()

   function sortEmployeesBySalary() {
    let employees = employees.sort((a, b) => a.salary - b.salary);
   }
   sortEmployeesBySalary()
   

   function logDoubledNumbers() {
   let arr= arr.forEach(function() {
         console.log(arr * 2);
  });
 }
  logDoubledNumbers()

   function modifyArray() {
     let arr=[1,2,3,4,5,6]
      for (let i = 0; i < 4 && i < arr.length; i++) {
         arr[i] *= 8;
      }
     
      for (let i = arr.length - 2; i < arr.length; i++) {
         arr[i] += 5;
      }
     
      console.log(arr);
     }
     
     
     for (let i = 0; i < 4 && i < arr.length; i++) {
       arr[i] *= 8;
    }
   
    for (let i = arr.length - 2; i < arr.length; i++) {
       arr[i] += 5;
    }
   
    console.log(arr);
   
  
modifyArray(arr);
   