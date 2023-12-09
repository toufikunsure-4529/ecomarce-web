let requestOtpBtn=document.getElementById("requestOtpBtn")
let rightContainer=document.getElementById("right-container")
requestOtpBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  rightContainer.innerHTML = "We are working on features. They will be available shortly.";
})