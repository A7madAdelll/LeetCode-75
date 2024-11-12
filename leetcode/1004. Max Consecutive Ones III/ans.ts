function longestOnes(nums: number[], k: number): number {
    let ans:number=0;
    let currentAns:number=0;
    let currentk:number=0;
    let l:number=-1,r:number=-1;

    while(r<nums.length-1){
        // console.log(currentk,l,r)
        if(currentk<k){
            r++;
            if(nums[r]==0){
                currentk++;
                
            }
            else{
                ;
            }
            currentAns++;
        }
        else{
            if(nums[r+1]==1){
                r++;
                currentAns++;
            }
            else{
                currentAns--;
                if(nums[l+1]==1){   
                }
                else{
                currentk--;
                }
                l++;
            }
        }
        ans=Math.max(ans,currentAns);
        // console.log(ans)
    }
    return ans;
};