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
    const divElms = document.querySelectorAll(".topping");
    
    divElms.forEach((divElm, item) => {
        divElm.addEventListener("click", () => {
        if (item.selected){
            divElm.innerHTML += `<h3 class="topping--selected"> ${item.name} </h3> <p class="topping--selected"> Cena: ${item.price},-Kč </p><br>`
        } else {
            divElm.innerHTML += `<h3> ${item.name} </h3> <p> Cena: ${item.price},-Kč </p><br>`
        }
    }) }) }


export const toggleTopping = (i) => {
    if (toppings[i].selected === true){
        return toppings[i].selected = false;
    } else {
        return toppings[i].selected = true;
    }
}
