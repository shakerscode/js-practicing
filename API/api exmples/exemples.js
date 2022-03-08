const loadQuote = () =>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => showData(data));
}
const showData = data => {
        const quoteContainer = document.getElementById('quote');
        quoteContainer.innerText = data.quote
}