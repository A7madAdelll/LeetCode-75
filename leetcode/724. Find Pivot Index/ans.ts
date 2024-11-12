function pivotIndex(nums: number[]): number {
    let sumtillnow:number=0,sum:number=0;
    for(let i:number=0;i<nums.length;i++){
        sum+=nums[i];
    }

    for(let i:number=0;i<nums.length;i++){
    if(sumtillnow==sum-sumtillnow-nums[i]){
        return (i);
    }
      sumtillnow+=nums[i];
}
    
    return -1;
};