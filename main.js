var helpInput =document.getElementById('help');
document.querySelector('form.form').addEventListener('submit',function(e){
    e.preventDefault();
    console.log(helpInput.value);
});

