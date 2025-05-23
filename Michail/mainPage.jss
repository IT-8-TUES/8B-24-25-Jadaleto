const SubBtn = document.getElementById("submitBtn")
SubBtn.addEventListener("click",(event) => {
   submitEmail();
});
function submitEmail() {
    const email = document.querySelector(".infoInput").value.trim();
    if (!email) {
      alert("Please enter a valid email.");
    } else {
      alert("Thanks! We'll keep you updated at: " + email);
    }
  };
