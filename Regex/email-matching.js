const alertOne  = document.getElementById('alertOne').style.display = 'none';
const alerTwo  = document.getElementById('alertTwo').style.display = 'none';
 btn = () =>{
 
    const inputText = document.getElementById('inputText').value;
    const regex = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;

    if(inputText.match(regex)){
        const alertOne  = document.getElementById('alertOne').style.display = 'block';
        const alerTwo  = document.getElementById('alertTwo').style.display = 'none';
    }else{
        const alerTwo  = document.getElementById('alertTwo').style.display = 'block';
        const alertOne  = document.getElementById('alertOne').style.display = 'none';
    }
    
 }

 

 