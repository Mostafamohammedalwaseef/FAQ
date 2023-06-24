const btns=document.querySelectorAll(".faq")
btns.forEach((item) => {
const btn = item.querySelector(".question-container")
btn.addEventListener("click",
() => {
  const ans=item.querySelector(".answer")
ans.classList.toggle("visible")
}  
  
)})
