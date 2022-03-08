document.getElementById('error').style.display = 'none'
document.getElementById('error2').style.display = 'none'
const searchFood = () =>{
    const searchFild = document.getElementById('search-fild');
    const searchText = searchFild.value;
    searchFild.value = '';
    document.getElementById('error').style.display = 'none'
    if (searchText == ''){
        document.getElementById('error').style.display = 'block'
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
        `;
        fetch(url)
        .then(res => res.json())
        .then(data => showingData(data.meals));
    }
}
const showingData = dataFromParent => {
    console.log(dataFromParent);
    const resultBox = document.getElementById('result-box');
    resultBox.textContent = '';

    // if(dataFromParent.length != 0){
    //     document.getElementById('error2').style.display = 'block'
    // }


    dataFromParent.forEach (dataFromParent => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div  onclick="showSingleResult(${dataFromParent.idMeal})">
        <img src="${dataFromParent.strMealThumb}" class="card-img-top img-fluied h-50" alt="...">
        <div class="card-body">
          <h5 class="card-title">${dataFromParent.strMeal}</h5>
          <p class="card-text">${dataFromParent.strInstructions.slice(0, 250)}</p>
          <a href="${dataFromParent.strYoutube}" class=" btn btn-primary">Watch Full Tutorial</a>
        </div>
        </div>
        `;
        resultBox.appendChild(div);
    })
}
const showSingleResult = singleMaleId =>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singleMaleId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => shoingDetails(data.meals[0]));
}

const shoingDetails = info => {
    const divContainer = document.getElementById('single-result-box');
    divContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <h5 class="card-header bg-primary text-white">Food Details</h5>
    <div class="card-body">
    <img src="${info.strMealThumb}" class="card-img-top h-25 w-75 img-fluid" alt="">
      <h5 class="card-title p-2">${info.strArea}</h5>
      <p class="card-text">${info.strInstructions.slice(0, 250)}</p>
      <a href="${info.strYoutube}" class="btn btn-primary">Watch Tutorial</a>
    </div>
    `;
    divContainer.appendChild(div);
}