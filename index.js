
// task1
let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57]
}

function first (arr) {
    if(sampleObject.isItarable==1)
    return(sampleobject);
    else{
    return ("provided array isn't itarable");
    }
}
let ana =  first(sampleObject);
console.log(ana);



// task2

function checkPythagoras(x, y, z){
    if(x*x + y*y == z*z || y*y + z*z==x*x || y*y == x*x + z*z){
         return true; 
    } else{
        return false;
    }
}

let checkthis = checkPythagoras(13, 5, 12);
console.log(checkthis);



//task3

let myArray1 = [2,14,25,75,11,6];
let mymaxi = MyMax(myArray1);
console.log(mymaxi);

function MyMax(arr){
    let maxi = arr.length;
    maximum = arr[maxi-1];
     while (maxi--){
        if(arr[maxi] > maximum){
            maximum = arr[maxi]
        }
    }
            return maximum;
}
let myArray2 = [2,14,25,75,11,6];
  let mymini = MyMin(myArray2);
   console.log(mymini);
function MyMin(arr){
    let mini = arr.length;
    minimum = arr[mini-1];
    while (mini--){
        if(arr[mini] < minimum){
            minimum = arr[mini]
        }
    }
    return minimum;
}

 

//task4
function checkDeg(deg){
  if(deg>0 && deg < 90)
  return "This is acute angle";
  else if(deg==90)
  return "This is right angle";
  else if(deg>90 && deg<180)
  return "This is obtuse angle";
  else(deg==180)
  return "This is straight angle";
}
let deg1 = checkDeg(160);
console.log(deg1);


