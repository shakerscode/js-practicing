
//id bubble
document.getElementById('second-hand').addEventListener('click', function(){
    console.log('hi, i,m clicked');
})
//ul bubble
document.getElementById('bubble-er-container').addEventListener('click', function(){
    console.log('hi, container clicked');
})
//section bubble
document.getElementById('bubble-er-container').addEventListener('click', function(){
    console.log('hi, section clicked');
})

//How to stop event bubble ?
// Simple! just use event.stopPropagation(); or event.stopImmediatePropagation();