function reverseNumber(num){
    let endNum;
    let reversedNumber=0;
    let dec=10;  
       
        while(num!==0){
            endNum = num%dec;
            reversedNumber = reversedNumber*dec + endNum;
            num=parseInt(num/dec);
            }
    
    return reversedNumber;
  }






  
  
  
  
  