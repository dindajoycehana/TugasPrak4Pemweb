const togglePasswordVisibility = (inputElement, toggleElement) => {
    if(inputElement.type === "password"){
        inputElement.type = "text";
        toggleElement.innerHTML = '<i class="fa-light fa-eye"></i>';
    } else {
        inputElement.type = "password";
        toggleElement.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }
}

// get element from document
const username = document.getElementById("username");
const email = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const passwordConfirm = document.getElementById("passwordConfirm");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError"); 
const PasswordConfirmError = document.getElementById("PasswordConfirmError");

//add password eventlistener to form element
togglePassword.addEventListener("click", () =>{
    togglePasswordVisibility(passwordInput, togglePassword);
});

togglePasswordConfirm.addEventListener("clik", () =>{
    togglePasswordVisibility(passwordConfirm, togglePasswordConfirm);
});


username.addEventListener('keyup', () => {
    // Validasi username
    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/;
    if (!usernameRegex.test(username.value)) {
      usernameError.textContent = 'Username harus 5-20 karakter, alfanumerik';
    } else {
      usernameError.textContent = '';
    }
  });
  
  email.addEventListener('change', () => {
    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailError.textContent = 'Format email tidak valid';
    } else {
      emailError.textContent = '';
    }
  });
  
  password.addEventListener('keyup', () => {
    // Validasi password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password.value)) {
      passwordError.textContent = 'Password minimal 8 karakter, kombinasi angka dan huruf';
    } else {
      passwordError.textContent = '';
    }
  });
  
  passwordConfirm.addEventListener('input', () => {
    // Validasi konfirmasi password
    if (passwordConfirm.value !== password.value) {
      PasswordConfirmError.textContent = 'Password tidak cocok';
    } else {
      PasswordConfirmError.textContent = '';
    }
  });
  
  const form = document.getElementById('registrationForm');
  form.addEventListener('submit', (event) => {
    // Validasi akhir sebelum submit
    event.preventDefault();
    console.log('Formulir Valid');
  });
  