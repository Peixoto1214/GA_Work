// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

//function to turn on gray mode   
function turnItGray(){
   // target body tag and set the class to be grey
    document.querySelector('body').setAttribute('class', 'grayMode');
}
// Function to turn on light mode
function turnItLight(){
    //target body tag and remove the gray class
    document.querySelector('body').classList.remove('grayMode');
}
//listen for click gray btton
document.querySelector('#grayButton').addEventListener('click', turnItGray);
//listen for click on white button
document.querySelector("#whiteButton").addEventListener("click",turnItLight);