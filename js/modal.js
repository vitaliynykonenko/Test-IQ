(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      body: document.querySelector("body"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }



const closeBtn = document.querySelector('.modal-close-btn')
const submitBtn = document.querySelector('.send-btn');
const form = document.querySelector('.form');



    const handleClick = (e) => {
    console.log(e);
  };

  submitBtn.addEventListener("submit", handleClick);

  form.addEventListener("submit", handleSubmit)


  function handleSubmit() {


    const BASE_URL = `https://swapi.dev/api/people/1/`;

    const fetchRezultTest = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        
        console.log(data);

        function renderRezultCard(){

            const html = `<div class="card"> 
            <div class="title-card">Congratulations!</div>
            <div class="name">Your name is <br> ${data.name}</div>
            <div class="height">Your height is ${data.height}</div>
            <div class="mass">Your mass is ${data.mass}</div>
            <div class="birth">Your age is ${data.birth_year}"</div>
            
          </div>`

        
         
          closeBtn.insertAdjacentHTML("afterend", html);
           
            }
            renderRezultCard()
        }

      catch (error) {
   
        console.log(error.message);
        
      }
    };
   




fetchRezultTest();
  }

  handleSubmit();

})();