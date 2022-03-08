
clcikingBtn = () => {
    const gettingData = document.getElementById('hiding-button');
    
    gettingData.style.display = 'block';
   const set = setTimeout( data = () =>{
        const setTimeOutData = document.getElementById('settimeout');
        document.getElementById('btn-2').style.display = 'block';
            setTimeOutData.style.display = 'block';
            setTimeOutData.style.fontSize = '35px';
    }, 5000);
    clearingBtn = () =>{
        const clear = clearTimeout(set);
     };
}


clearingTimeout = () =>{
    document.getElementById('hiding-button').style.display = 'none';
    setTimeOutData = document.getElementById('settimeout').style.display = 'none';
    setTimeInBtn = document.getElementById('btn-2').style.display = 'none';
}

settingInterval = () =>{
   let infutOne = document.getElementById('inpot-one');
   const pValue = infutOne.innerText;
   let pOne = parseInt(pValue);
    let infutTwo = document.getElementById('input-two');
    const pTwoValue = infutTwo.innerText;
    let pTwo = parseInt(pTwoValue);
    
   const id = setInterval(() => {
        infutOne.innerText = pOne++;
        infutTwo.innerText = pTwo++;
        if(infutOne.innerText >= 100){
            clearInterval(id);
        }
        
    }, .200);
     
}