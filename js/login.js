// step-1: add click handler with  the submit button
document.getElementById(btn-submit).addEventListener('click' ,function(){
    // step-2: get the email address inside the input field of email
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3 get password:
    //3.a: set id on the html element
    //3.b get the element
    //3.c get the value from the element

    const passwordFiled = document.getElementById('user-password');
    const password = passwordField.value
    

   if( email === 'sontan@baap.com' && password === 'secret'){
    window.location.href = 'bank.html';

} else {
    alert('tui password vule gesos!!!')
}
})