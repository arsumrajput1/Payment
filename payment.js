const mySubscribe= document.getElementById("mySubscribe");
const myVisa= document.getElementById("myVisa");
const myMasterCard= document.getElementById("myMasterCard");
const myPaypal= document.getElementById("myPaypal");
const mySubmit = document.getElementById("mySubmit")
const mySubResult= document.getElementById("mySubResult");
const myPaymentResult= document.getElementById("myPaymentResult");


mySubmit .onclick= function () {
    if (myCheckBox.checked) {
        mySubResult.textContent=`You are subscribe`
    } else {
        mySubResult.textContent=`You are not subscribe`
    }
    if (myVisa.checked) {
        myPaymentResult.textContent=`You are pay by Visa`
    }
    else if(myMasterCard.checked) {
        myPaymentResult.textContent=`You are pay by MasterCard`
    }
    else if (myPaypal.checked) {
        myPaymentResult.textContent=`You are pay by Paypal`
    }else {
        `You are not using any payment method! You must select the payment type first`  
    }
    
} 
