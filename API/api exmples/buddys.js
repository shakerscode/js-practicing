const loadingBuddis = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => showBuddies(data));
}
loadingBuddis();
const showBuddies = data => {
    const buddyes = data.results;
    const buddyesDiv = document.getElementById('buddy-container');
    for (const buddy of buddyes){
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText =` Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} ---- ${buddy.email}`;
        buddyesDiv.appendChild(p);
    }
} 