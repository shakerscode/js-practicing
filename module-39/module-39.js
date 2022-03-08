//alert
alertBtn = () =>{
    alert("Hii boss i'm clicked !!")
}

//confirm
confirmBtn = () =>{
   const userClick = confirm('Allaw us to get your location?');
   if(userClick === true){
       alert('Well thank you very much! Your location is', location.href);
   }else{
       alert('Why are you lying dear?')
   }
}

//prompt
promptBtn = () =>{
    const res = parseInt(prompt('Please enter your name or id!'));
    console.log(res+200)
}

//Reload
reloadBtn = () =>{
    location.reload();
}

//Assign
assignBtn = () =>{
    location.assign('http://tasfisblog.com/')
}

//History back
historyBackBtn = () =>{
    history.back();
}

//click
click = () =>{
    window.location.href = 'module-39/module-38.html';
}
forwordBtn = () =>{
    history.forward();
}