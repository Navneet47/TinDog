const contactBtn = document.querySelector('.submit-contact');

contactBtn.addEventListener('click',()=>{
    alert("Your Query have been successfully submitted");
    window.location.href = 'http://127.0.0.1:5500/';
    location.reload();
 })