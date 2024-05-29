export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];
  export const toggleTopping = (i) => {
    const divElmItems = document.querySelectorAll(".topping-item");
    const divElmItem = divElmItems[i];
    if (divElmItem) {
      divElmItem.classList.toggle("topping--selected");
    }
  }
  
  export const renderToppings = () => {
    const divElm = document.querySelector(".topping");
  
   
    toppings.forEach((item) => {
      divElm.innerHTML += `<div class="topping-item"> <h3> ${item.name} </h3> <p> Cena: ${item.price},-Kč </p></div><br>`;  
    });
  
    const divElmItems = document.querySelectorAll(".topping-item");
    
    divElmItems.forEach((divElmItem, i) => {
      divElmItem.addEventListener("click", () => {
        toggleTopping(i);
      });
    });
  }
  