const nums = [0, 1, -2, 4, 3, 6, -9, -4, 5];
for(let i=0; i<nums.length; i++){
    if(nums[i]>6){
        break;
    }
    // console.log(nums[i])
}

for(let i=0; i<nums.length; i++){
    if(nums[i]<0){
        continue;
    }
    console.log(nums[i]);
}