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
    const divElmItem = document.querySelectorAll(".topping");

    toppings.forEach((item) => {
        if (item.selected === true){
            divElm.innerHTML += `<div class="topping-item topping--selected"> <h3> ${item.name} </h3> <p> Cena: ${item.price},-Kč </p></div><br>`
        }else{
            divElm.innerHTML += `<div class="topping-item"> <h3> ${item.name} </h3> <p> Cena: ${item.price},-Kč </p></div><br>`
        }
            
        }
   )    
   
   
   divElm.addEventListener("click", (i) => {
    toggleTopping(i);
})
}
   
   

export const toggleTopping = (i) => {
    const divElmItem = document.querySelector(".topping-item");
    divElmItem.classList.toggle("topping--selected");
    }
