function longestSubarray(nums: number[]): number {
    let flag:number=nums[0];
    let list:[number,number][]=[];
    let counter:number=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==flag){
        counter++;
        }
        else{
            list.push([flag,counter]);
            flag=1-flag;
            counter=1;
        }
    }
    list.push([flag,counter]);
    console.log(list);
    let maxx:number=0;
    for (let i = 0; i < list.length; i++) {
        if(list[i][0]==1){
            maxx=Math.max(maxx,list[i][1]);
        }
        else{
            if(i!=0&&i!=list.length-1){
            if(list[i][1]==1){
                maxx=Math.max(maxx,list[i-1][1]+list[i+1][1]);
            }
            }
        }
    }
    if(list.length==1){
        if(list[0][0]==1){return list[0][1]-1;}
        else{
return 0;
        }
    }
    return maxx;
};