
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", e => {
	e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (!email.replace(/\s/g, '').length || !password.replace(/\s/g, '').length) {
        alert("All form fields must be filled in");
        return false;
    }
    
    form.reset();
    console.log({email, password});
    return true;
});