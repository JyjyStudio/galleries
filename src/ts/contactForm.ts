let form = document.getElementById('frmContact') as HTMLFormElement;
let fields = document.querySelectorAll('input[required], textarea[required]') as NodeListOf<HTMLInputElement>

fields.forEach(field => {
    field.addEventListener('focus', () => resetField(field));
    field.addEventListener('blur', () => validateField(field));
});

form.addEventListener('submit', function(e:Event){
    e.preventDefault();
    fields.forEach(field => resetField(field))
    let valid = true;
    fields.forEach((field) =>{
       if(! validateField(field)){
           valid = false;
       }
    })
    if (valid) this.submit()
})

function validateField(field:HTMLInputElement) {
    if(field.checkValidity()) {
        return true;
    }
    else{
        field.classList.add('invalid');
        let previousElementSibling = field.previousElementSibling as HTMLElement;
        previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg">${field.validationMessage}</span>`);
        return false;
    }
}
function resetField(field:HTMLInputElement){
    field.classList.remove('invalid');
    let previousElementSibling = field.previousElementSibling as HTMLElement;
    previousElementSibling.firstElementChild?.remove()
}