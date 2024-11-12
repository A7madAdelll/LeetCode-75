function maxVowels(s: string, k: number): number {
    let comulative:number[]=Array(s.length+1).fill(0);
    for (let i = 0; i <= s.length; i++) {
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'){
            comulative[i]+=1;
            comulative[Math.min(i+k,s.length)]-=1;
        }
    }
        console.log(comulative)
    for (let i = 1; i < s.length; i++) {
        comulative[i]=comulative[i]+comulative[i-1];
    }

    return Math.max(...comulative);
};