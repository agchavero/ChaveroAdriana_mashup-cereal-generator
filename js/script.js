// 1. create an array of 3 images

let cereals = [
    "media/images/Apple Jacks.jpg",'media/images/Cocoa Krispies.jpg','media/images/Froot Loops.jpg','media/images/Cheerios.jpg','media/images/Frosted Flakes.jpg','media/images/Honey Bunches.jpg','media/images/Raisin Bran.jpg', 'media/images/Special K.jpg'
    ];
    
    console.log(cereals);
    
    // 2. create an event listener for the button
    document.getElementById("cerealGenerator").addEventListener("click", displayImage);
    
    
    // 3. create a function that will display a random image
    
    // function functionName() {
        //HINT: You will be using the randomly generated number to plug into the array index
    
    
    //}
    
    function displayImage(){
        //retrieve element by ID
        let displayCereal = document.getElementById('breakfastImg');
        let youAre = document.getElementById('youAre');
    
        //generate random index
        let randomIndex = Math.floor(Math.random() * cereals.length);
        console.log(randomIndex);

        //display message
        youAre.innerHTML = "You are " + cereals[randomIndex].split("/")[2].split(".")[0] + " cereal!";
       
        //display randomly selected image from array 
        displayCereal.src = cereals[randomIndex];

    
       
    // document.getElementById('breakfastImg').src = cereals[randomIndex];
    
    }
    
    