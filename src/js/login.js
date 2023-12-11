let inputUserId=document.getElementById("inputUser-Mob-email")
let inputValue=document.getElementById("inputValue")
let otp=Math.floor(Math.random()*900000+100000)

function requestOtp(){
  let requestOtpBtn=document.getElementById("requestOtpBtn")
  let rightContainer=document.getElementById("right-container")
  let otpFetchContainer=document.getElementById("otp-fetchContainer")
  let otpDisplay=document.getElementById("otpContainer")
  let errorDiv=document.getElementById("errorDiv")
  requestOtpBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(inputUserId.value.trim()==="" || inputUserId.value.length!=10 && !validateEmail(inputUserId.value)){
      errorDiv.style.display="block"
      errorDiv.innerText ="Please enter valid Email ID/Mobile number"
      inputUserId.style.borderBottomColor="#ff6161"
    }
    else{
      rightContainer.style.display="none"
      otpFetchContainer.style.display="block"
      inputValue.innerText=inputUserId.value;
      successMsg(`Verification code sent to ${inputUserId.value}`)
      changeUserId(rightContainer, otpFetchContainer)
    }
    otpDisplay.innerText=`OTP: ${otp}`
  })
}


function validateEmail(email){
  return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}



function successMsg(userMsg){
let userNotifiedContainer=document.getElementById("userNotifiedContainer")
  let notificatinMsg=document.querySelector(".notificatinMsg")
  notificatinMsg.innerText=userMsg
  userNotifiedContainer.style.display="block"
  let msgIcon = document.getElementById("msg-icon");
  msgIcon.setAttribute("src", `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KCTxnPgoJCTxwYXRoIGQ9J00tMi0yaDI0djI0SC0yeicgZmlsbD0nbm9uZScvPgoJCTxwYXRoIGQ9J00xMCAwQzQuNDggMCAwIDQuNDggMCAxMHM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTUuNTIgMCAxMCAwek04IDE1bC01LTUgMS40MS0xLjQxTDggMTIuMTdsNy41OS03LjU5TDE3IDZsLTkgOXonIGZpbGw9JyMyNkJDNEUnLz4KCTwvZz4KPC9zdmc+Cg==`);
  setTimeout(()=>{
    userNotifiedContainer.style.display="none"
  },5000)
}

function errorMsg(msg){
  successMsg(msg)
  let msgIcon = document.getElementById("msg-icon");
  msgIcon.setAttribute("src", 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KCTxnPgoJCTxwYXRoIGQ9J00tMi0yaDI0djI0SC0yeicgZmlsbD0nbm9uZScvPgoJCTxwYXRoIGQ9J00xMCAwQzQuNDggMCAwIDQuNDggMCAxMHM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTUuNTIgMCAxMCAwem0xIDE1SDl2LTJoMnYyem0wLTRIOVY1aDJ2NnonIGZpbGw9JyNGRjQzNDMnLz4KCTwvZz4KPC9zdmc+Cg==');  
}

function inputValidation(currentInput){
  const nextInput = currentInput.nextElementSibling;
  currentInput.value = currentInput.value.replace(/[^0-9]/g, '');
  if (currentInput.value && nextInput) {
    nextInput.focus();
  }
 
}



function otpValidation(event) {
  event.preventDefault(); 
  let inputValue = Array.from(document.querySelectorAll(".inputBoxOtp")).map(input => input.value).join("");
  if (inputValue == otp) {
    successMsg("Logged in Successfully");
  } else {
    errorMsg("Invalid Otp");
  }
}
let otpVerifyBtn = document.querySelector(".otp-submit-btn");
otpVerifyBtn.addEventListener("click", otpValidation);




function changeUserId(rightContainer, otpFetchContainer){
  let changeUserId=document.getElementById("changeUserId")
  changeUserId.addEventListener("click",()=>{
    rightContainer.style.display="block"
    otpFetchContainer.style.display="none"
  })
}



function resendOtp(){
  let timer=10;
  let resendOtpBtn=document.querySelector(".resend-code");
  resendOtpBtn.style.pointerEvents = "none"
  const resendtimer = setInterval(() => {
    resendOtpBtn.innerHTML = timer;
    timer--;

    if (timer < 0) {
      clearInterval(resendtimer);
      resendOtpBtn.innerText = "Resend code";
      resendOtpBtn.style.pointerEvents = "auto"
    }
  }, 1000)

}


resendOtp()
requestOtp()
