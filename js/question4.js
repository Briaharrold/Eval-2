let wickedCSSBtn = document.getElementById('wickedCSSBtn');
let randomCSSBtn = document.getElementById('randomCSSBtn');
let result = document.getElementById('result');
let removeBtn = document.getElementById('removeCSSBtn');


wickedCSSBtn.addEventListener('click', function(e){
    let input = document.getElementById('wickedCssClass').value;
    switch(input){
        case "floater":
     
            result.classList.add("floater");
        break;
        case "pulse":

            result.classList.add("pulse");
        break;
        case "barrelRoll":
   
            result.classList.add("barrelRoll");
        break;

        case "rollerRight":
    
            result.classList.add("rollerRight");
        break;

        case "rollerLeft":
         
            result.classList.add("rollerLeft");
        break;
        case "heartbeat":
            
            result.classList.add("heartbeat");
        break;
        case "rotation":
       
            result.classList.add("rotation");
        break;
        case "sideToSide":
 
            result.classList.add("sideToSide");
        break;
        case "zoomer":
  
            result.classList.add("zoomer");
        break;
        case "zoomerOut":

            result.classList.add("zoomerOut");
        break;
        case "spinner":

            result.classList.add("spinner");
        break;
        case "wiggle":
           
            result.classList.add("wiggle");
        break;
        case "spinner":

            result.classList.add("spinner");
        break;
        case "shake":
     
            result.classList.add("shake");
        break;
        case "pound":

            result.classList.add("pound");
        break;
        case "slideUp":
          
            result.classList.add("slideUp");
        break;
        case "slideDown":
          
            result.classList.add("slideDown");
        break;

        case "slideRight":
            
            result.classList.add("slideRight");
        break;
        case "slideLeft":
           
            result.classList.add("slideLeft");
        break;
        case "fadeIn":
      
            result.classList.add("fadeIn");
        break;
        case "fadeOut":
 
            result.classList.add("fadeOut");
        break;
        case "rotateInRight":
           
            result.classList.add("rotateInRight");
        break;
        case "rotateInLeft":
       
            result.classList.add("rotateInLeft");
        break;
        case"rotateIn":
      
            result.classList.add("rotateIn");
        break;
        case"bounceIn":
      
            result.classList.add("bounceIn");
        break;

        default: 
        alert('Error! Type in listed class!');
break;
    }

});
removeBtn.addEventListener('click',function(e){
    result.classList.remove("floater", "pulse", "spinner","bounceIn","rotateIn","rotateInLeft","rotateInRight","fadeOut","fadeIn","slideLeft","slideRight","slideDown","slideUp","pound","shake","spinner","zoomerOut","zoomer","sideToSide","rotation","heartbeat","rollerLeft","rollerRight","barrelRoll","pulse","floater","wiggle");
})


randomCSSBtn.addEventListener('click',function(e){
    let randomClass = Math.floor(Math.random()*24)
    switch(randomClass){
        case 0:
     
            result.classList.add("floater");
        break;
        case 1:

            result.classList.add("pulse");
        break;
        case 2:
   
            result.classList.add("barrelRoll");
        break;

        case 3:
    
            result.classList.add("rollerRight");
        break;

        case 4:
         
            result.classList.add("rollerLeft");
        break;
        case 5:
            
            result.classList.add("heartbeat");
        break;
        case 6:
       
            result.classList.add("rotation");
        break;
        case 7:
 
            result.classList.add("sideToSide");
        break;
        case 8:
  
            result.classList.add("zoomer");
        break;
        case 9:

            result.classList.add("zoomerOut");
        break;
        case 10:

            result.classList.add("spinner");
        break;
        case 11:
           
            result.classList.add("wiggle");
        break;
        case 12:

            result.classList.add("spinner");
        break;
        case 13:
     
            result.classList.add("shake");
        break;
        case 14:

            result.classList.add("pound");
        break;
        case 15:
          
            result.classList.add("slideUp");
        break;
        case 16:
          
            result.classList.add("slideDown");
        break;

        case 17:
            
            result.classList.add("slideRight");
        break;
        case 18:
           
            result.classList.add("slideLeft");
        break;
        case 19:
      
            result.classList.add("fadeIn");
        break;
        case "fadeOut":
 
            result.classList.add("fadeOut");
        break;
        case 20:
           
            result.classList.add("rotateInRight");
        break;
        case 21:
       
            result.classList.add("rotateInLeft");
        break;
        case 22:
      
            result.classList.add("rotateIn");
        break;
        case 23:
      
            result.classList.add("bounceIn");
        break;

        default: 
        alert('Error!'); // Default case if index out of range
break;
    }

});