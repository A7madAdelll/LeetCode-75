function largestAltitude(gain: number[]): number {
    let currentx:number=0,maxx:number=0;
    
    for (let i = 0; i < gain.length; i++) {
        currentx+=gain[i];
        if(currentx>maxx){  
            maxx=currentx;
        }
    }
    return maxx;
};