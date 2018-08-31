//Function to find a pair of numbers that add up to zero in a sorted array of
//integers list

function sumZero(arr){
    //pointers
    let left = 0;
    let right = arr.length - 1;

    // using while will help us avoid nested loops
    while(left < right){ 

        //sum variable is needed to know if its equal to 0
        let sum = arr[left] + arr[right];

        //base condition if the addition is  0 return array with 2 values
        if(sum === 0){

            // return an array with 2 values
            return [arr[left],arr[right]];

            }
		//if sum is not greater than zero move right pointer
	else if(sum > 0){

                right--;

            }else{
		// if sum is not zero or greater than zero so move left pointer 
                left++;
            }
        }

    }

    sumZero([-10,-2,-3,0,1,2,3])