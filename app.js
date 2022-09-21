// function updateCaseNumber(isIncreasing){
//     const caseInput = document.getElementById('case-number');
//     let caseNumber = caseInput.value;

//     if(isIncreasing == true){
//         caseNumber = parseInt(caseNumber) + 1 ; 

//     }

//     else if(caseNumber > 0){
//         caseNumber = parseInt(caseNumber) - 1 ; 

//     }

//     caseInput.value = caseNumber ;

//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText = caseNumber * 59 ;


// };


// document.getElementById('case-plus').addEventListener('click' , function(){
//     updateCaseNumber(true)
    
// });


// document.getElementById('case-minas').addEventListener('click' , function(){
//     updateCaseNumber(false)
    
// });


//  function updateCaseNumber( product, price , isIncreasing ){
//     const caseInput = document.getElementById(product +'-number');
//     const caseNumber = caseInput.value;

//     if(isIncreasing == true){
//         numbers = parseInt(caseNumber) +1 ;
//     }

//     else if(caseNumber > 0){
//         numbers = parseInt(caseNumber) - 1 ;
//     }

//     caseInput.value = numbers ;
    
//     const caseTotal = document.getElementById(product+'-total');
//     caseTotal.innerText = numbers * price ;

//     calculetTotal();
// }


// function updateInputValue(product){
//     const productInput = document.getElementById(product + '-number');
//     const productNumber = parseInt(productInput.value);
//     return productNumber
// }

// function calculetTotal(){
//     const phoneTotal = updateInputValue('phone') * 1219 ;
//     const caseTotal = updateInputValue('case') * 59 ;

//     const subTotal = phoneTotal + caseTotal ;
//     const tax = subTotal / 10 ;
//     const totalPrice = subTotal + tax ;

//     document .getElementById('sub-total').innerText = subTotal ;
//     document .getElementById('tax-ammount').innerText = tax ;
//     document .getElementById('total-price').innerText = totalPrice ;
// }


// document.getElementById('case-plus').addEventListener('click',function(){
//     updateCaseNumber('case' , 59 , true)
// });

// document.getElementById('case-minas').addEventListener('click',function(){
//     updateCaseNumber( 'case', 59 , false)
// });


// document.getElementById('phone-plus').addEventListener('click',function(){
//     updateCaseNumber( 'phone', 1219 , true)
// });


// document.getElementById('phone-minus').addEventListener('click',function(){
//     updateCaseNumber( 'phone', 1219 , false)
// });





function updateCaseNumber(product , price , isIncreasing ){
    const caseInput = document.getElementById(product +'-number');
    const caseNumber = caseInput.value;

    if(isIncreasing == true){
        numbers = parseInt(caseNumber) + 1 ;
    }

    else if (caseNumber > 0){
        numbers = parseInt(caseNumber) - 1 ;
    }

    caseInput.value = numbers ;

    const caseTotal = document.getElementById(product +'-total');
    caseTotal.innerText = numbers * price ;

    calculetTotal();
};


function updateInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};


function calculetTotal(){
    const phoneTotal = updateInputValue('phone') * 1219 ;
    const caseTotal = updateInputValue('case') * 59 ;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10 ;
    const totalPrice = subTotal + tax ;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    

}

document.getElementById('case-plus').addEventListener('click' , function(){
    updateCaseNumber('case' , 59 , true)
});


document.getElementById('case-minas').addEventListener('click' , function(){
    updateCaseNumber('case', 59 , false)
});


document.getElementById('phone-plus').addEventListener('click' , function(){
    updateCaseNumber('phone', 1219 , true)
});


document.getElementById('phone-minus').addEventListener('click' , function(){
    updateCaseNumber('phone', 1219 ,false)
});










