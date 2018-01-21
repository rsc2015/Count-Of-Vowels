let thePhrase = document.getElementById("vowels").innerText;

thePhrase = thePhrase.toLowerCase();
console.log(thePhrase);

    
  
     let theVowels = ["a", "e", "i", "o", "u"];
    var c = 0;
    for (i = 0; i < n; i++) {
      if ((thePhrase[i] === "a") || (thePhrase[i] === "e") || 
      (thePhrase[i] === "i") || (thePhrase[i] === "o") || (thePhrase[i] === "u")) {
        console.log(thePhrase[i]); //just to verify
        c += 1;
      }
   
    
    }
    console.log(c);

  
