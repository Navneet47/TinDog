    const footer_para = document.querySelector('.copyright-para');
    const date = new Date();
    footer_para.innerHTML = `© Copyright ${date.getFullYear()} TinDog`
const submitBtn_One = document.querySelectorAll('.submit-one');

for(let i = 0; i<submitBtn_One.length;i++){
   submitBtn_One[i].addEventListener('click',()=>{
      alert('Thank you, We will contact you soon!')
   })
}

