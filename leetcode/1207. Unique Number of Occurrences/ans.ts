function uniqueOccurrences(arr: number[]): boolean {
    let occ:number[]=Array(2014).fill(0);
    for(let i=0;i<arr.length;i++){ 
        if(arr[i]>0){
            occ[arr[i]]++;
        }
        else{
        occ[2013+arr[i]]++;
        }
    }

    let myset=new Set<number>();
    for(let i=0;i<occ.length;i++){
        if(occ[i]==0)continue;
        if(myset.has(occ[i])){
            return false
        }else{
            myset.add(occ[i]);
        }
    }
    return true;
};