// part one, event handling

const button = document.getElementById('btn');
const par = document.getElementById('para');
const input = document.getElementById('input')

//mouseover and out
button.addEventListener('mouseover', () =>{
    alert('Mouse over triggered');
    button.style.backgroundColor = 'lightblue';
    button.style.color = 'red';
})

button.addEventListener('mouseout', ( ) =>{
    button.style.backgroundColor = 'lightgrey'
})

//to read input
input.addEventListener('input', () =>{
    par.textContent = 'Hello ' + input.value;
})

//part two, building interactive elements
//toggle
const toogle = document.getElementById('toggleBtn');
toogle.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
})

//counter
let count = 0;
const btn = document.getElementById('counterBtn');
const display = document.getElementById('count');
btn.addEventListener('click', () => {
    count++;
    display.textContent = count;
});

//faq
document.querySelectorAll('.faq-question').forEach(q => {
      
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

//part three, form validation
document.getElementById("my-form").onsubmit = function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()
    const buton = document.getElementById('sub-btn')

        //clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if(name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if(name.length < 3) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === "") {  
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if(!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password === "") {  
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if(!password.match(passwordPattern)) {   
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        isValid = false;
    }  
    
    //check if all validations passed
    if(isValid) {
        //submit form or perform desired actions
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); //reset form fields
    }

}
