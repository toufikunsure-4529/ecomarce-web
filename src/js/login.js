let inputUserId=document.getElementById("inputUser-Mob-email")
let inputValue=document.getElementById("inputValue")

function requestOtp(){
  let requestOtpBtn=document.getElementById("requestOtpBtn")
  let rightContainer=document.getElementById("right-container")
  let otpFetchContainer=document.getElementById("otp-fetchContainer")
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
      loginMsg(`Verification code sent to ${inputUserId.value}`)
      changeUserId(rightContainer, otpFetchContainer)
    }
  })
}



function validateEmail(email){
  return String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}



function loginMsg(userMsg){
let userNotifiedContainer=document.getElementById("userNotifiedContainer")
  let notificatinMsg=document.querySelector(".notificatinMsg")
  notificatinMsg.innerText=userMsg
  userNotifiedContainer.style.display="block"
  setTimeout(()=>{
    userNotifiedContainer.style.display="none"
  },5000)
}



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
