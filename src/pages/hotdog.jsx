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

  
  export const renderToppings = () => {
    const divElm = document.querySelector(".topping");
    const divElmItems = document.querySelectorAll(".topping-item");
    const divElmItem = divElmItems[i];

    toppings.forEach((item) => {
        const toppingDiv = document.createElement('div');

        if (item.selected === true){
            toppingDiv.innerHTML += `<div class="topping-item topping--selected"> <h3> ${item.name} </h3> <p> Cena: ${item.price},-Kč </p></div><br>`
            
        }else{
            toppingDiv.innerHTML += `<div class="topping-item"> <h3> ${item.name} </h3> <p> Cena: ${item.price},-Kč </p></div><br>`
        }
            
        }
        
   )   
   
   divElm.forEach((i) => {
    divElmItem.addEventListener("click", () => {
            toggleTopping(i);
   })
   }

)}

export const toggleTopping = (i) => {
    const divElmItems = document.querySelectorAll(".topping-item");
    const divElmItem = divElmItems[i];
    divElmItem.classList.toggle("topping--selected");
    }
