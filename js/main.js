function togglePassword() {
    let password = document.getElementById("password");
    let passwordIcon = document.getElementById("passwordIcon");
    if (password.type === "password") {
      password.type = "text";
      passwordIcon.classList.remove("fa-eye")
      passwordIcon.classList.add("fa-eye-slash")

    } else {
      password.type = "password";
      passwordIcon.classList.remove("fa-eye-slash")
      passwordIcon.classList.add("fa-eye")
    }
  }

//   function toggleEmail() {
//     let email = document.getElementById("email");
//     let emailIcon = document.getElementById("emailIcon");
//     if (email.type === "email") {
//         email.type = "email";
//       emailIcon.classList.remove("fa-eye")
//       emailIcon.classList.add("fa-eye-slash")

//     } else {
//       email.type = "password";
//       emailIcon.classList.remove("fa-eye-slash")
//       emailIcon.classList.add("fa-eye")
//     }
//   }
let toggleEmailIcon = function(value) {
    console.log(typeof(email.value))
    if(email.value.includes("*")) {
        email.value = emailSafe;
        emailIcon.classList.remove("fa-eye-slash")
        emailIcon.classList.add("fa-eye")
    }
    else if(value && isEmail(value)) {
        saveEmail(value);
        email.value = hideEmail(value);
        emailIcon.classList.remove("fa-eye")
        emailIcon.classList.add("fa-eye-slash")
    } 
    

  };

  let validateEmailForm = function () {
    let errorText = document.getElementsByClassName("error-text");

    if (!email.value) {
        errorText.innerHTML = "Email Required";
        errorText.style.display = "block";
        
    }
    if (email.value && !isEmail(email.value)) {
        errorText.innerHTML = "Please enter a valid email address";
      errorText.style.display = "block";
    }
  }

  let isEmail = function (email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  let hideEmail = function(email) {
    return email.replace(/(.{2})(.*)(?=@)/,
      function(gp1, gp2, gp3) { 
        for(let i = 0; i < gp3.length; i++) { 
          gp2+= "*"; 
        } return gp2; 
      });
  };

  let saveEmail = function (value) {
    emailSafe = value;
  }

  document.getElementById("emailIcon").addEventListener("click", function() {
        
    // console.log(hideEmail(email.value));
    // email.value = hideEmail(email.value);
    toggleEmailIcon(email.value);
  });

  let emailSafe = "";
  let emailField = "";
  let email = document.getElementById("email");
  let emailIcon = document.getElementById("emailIcon")

  