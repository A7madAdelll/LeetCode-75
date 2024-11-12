function findMaxAverage(nums: number[], k: number): number {
    let sum:number=0;
    for(let i:number=0;i<k;i++){
        sum+=nums[i];
    }
    let maxx:number=sum;
    for(let i:number=k;i<nums.length;i++){
        sum+=nums[i];
        sum-=nums[i-k];
        maxx=Math.max(maxx,sum);
    }
    return maxx/k;
};