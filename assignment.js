
// Assignment Ana to Vori

//Coling a function

function anaToVori(ana){
    let vori = ana / 16;

//Applying conditions for handling errors and showing return result.

    if ( ana >= 0){
        return vori
    } 
    else if (typeof ana != 'number' || ana < 0){
        return 'Please enter a valid number.'
    }
}
let enterAnaValue = (16);  
let yourVoriIs = anaToVori(enterAnaValue);
console.log(yourVoriIs);


// Assignment of pandaCost

//Coling a function

function pandaCost(shingaraQuantity, somuchaQuantity, jilapiQuantity){

    //Applying conditions for handling errors and showing return result.

    if (shingaraQuantity >= 5000 || somuchaQuantity >= 5000 || jilapiQuantity >= 5000){
        return 'Please sir, visit or contact our shop to order ammount that bigger than 5000. Thank You.'
    }
    else  if (shingaraQuantity >= 0 && somuchaQuantity >= 0 && jilapiQuantity >= 0){
        let shingaraPrice = shingaraQuantity * 7;
        let somuchaPrice = somuchaQuantity * 10;
        let jilapiPrice = jilapiQuantity * 15;
        let totalPrice = shingaraPrice + somuchaPrice + jilapiPrice;
        return totalPrice;
    }
    else if ( shingaraQuantity != 'number' && somuchaQuantity != 'number' && jilapiQuantity != 'number'){
        return 'Please enter a valid number.'
    }
    else if ( shingaraQuantity < 0 && somuchaQuantity < 0 && jilapiQuantity < 0){
        return 'Please enter a valid number.'
    }

}

    //The ammount of users need.

    let shingaraNeed =  10;
    let somuchaNeed = 10;
    let jilapiNeed =  10;
    let totalFoodNeed = pandaCost(shingaraNeed, somuchaNeed, jilapiNeed);
    console.log(totalFoodNeed);





// Assignment of picnicBudget.

//Coling a function

 function picnicBudget(picnicPartnerNum){
         let totalBudget;

    //Applying conditions for handling errors and showing return result.   

         if ( typeof picnicPartnerNum != 'number' || picnicPartnerNum < 0){
                return 'Please enter a valid number.'
            }
         else if( picnicPartnerNum <= 100){
            totalBudget = picnicPartnerNum * 5000;        
        }
        else if (picnicPartnerNum > 100 && picnicPartnerNum <= 200){
            const costForFirstHundred = 100 * 5000;
            const costForSecondHundred = (picnicPartnerNum - 100) * 4000;
            totalBudget = costForFirstHundred + costForSecondHundred;
        }
        else if (picnicPartnerNum > 200){
            const costForFirstHundred = 100 * 5000;
            const costForSecondHundred = 100 * 4000;
            const costForAllMember = (picnicPartnerNum - 200) * 3000;
            totalBudget = costForFirstHundred + costForSecondHundred + costForAllMember;
        }

        return totalBudget;

    }
       //The ammount of users need.

    const enterPartnerNumber = 100;
    const picnicPartner = picnicBudget(enterPartnerNumber);
    console.log(picnicPartner);

 
    // Assignment of oddFriends 

        //Coling a function

    function oddFriend(friendsNames){
        let oddFriendName = friendsNames[0];
        let errorMassage = 'Your friends name is even.'; //This is a custom error massage.

        //Applying conditions for handling errors and showing return result. 

        for (const position of friendsNames){ 
            if (typeof position == 'number'){
                return 'Please enter friends name.'
            }
           
            else if(position.length % 2 == 1){
                oddFriendName = position;
                break;
            }

            else if (position.length % 2 == 0){
                oddFriendName = errorMassage;
            }

        }
        return oddFriendName;
    }

    //This is users input section
    let allFriendsName = oddFriend(['aaaa', 'bbbbb', 'cccc', 'ddddd']);
    console.log(allFriendsName);