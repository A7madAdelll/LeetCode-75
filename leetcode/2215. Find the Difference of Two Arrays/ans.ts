function findDifference(nums1: number[], nums2: number[]): number[][] {
    let mymap1=new Map(),mymap2=new Map();
    for (let i = 0; i < nums1.length; i++) {
        mymap1.set(nums1[i],1);
    }
    for (let i = 0; i < nums2.length; i++) {
        mymap2.set(nums2[i],1);
    }
    // console.log(mymap1,mymap2)
let ans:number[][]=[[],[]];
let myset1=new Set<number>();
let myset2=new Set<number>();

    for (let i = 0; i < nums1.length; i++) {
        if(!mymap2.has(nums1[i])){
            myset1.add(nums1[i]);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if(!mymap1.has(nums2[i])){
            myset2.add(nums2[i]);
        }
    }
    for (let i of myset1.values()) {
        ans[0].push(i);
    }   
    for (let i of myset2.values()) {
        ans[1].push(i);
    }   
    // console.log(myset1,myset2)
    
    return ans;
};