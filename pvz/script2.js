const archive_code = document.getElementById('input-code');
const archive_name = document.getElementById('input-name');
const archive_quantity = document.getElementById('input-quantity');

const insert_button = document.getElementById('insert')
const delete_button = document.getElementById('delete');

const find_code = document.getElementById('input-find-code');
const get_button = document.getElementById('get');

const print_find = document.getElementById('answer');

insert_button.addEventListener("click", insertDataIntoLocalStorage);
delete_button.addEventListener("click", removeDataFromLocalStorage);
get_button.addEventListener("click", getDataFromLocalStorage);

function insertDataIntoLocalStorage(evt){ // does what it says
    evt.preventDefault(); // this makes it sure so it doesn't wipe itself when webpage refreshes

    if (archive_code.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 Symbols') // check the field for mistakes
        return
    }
    if (archive_name.value === "") {
        alert('Product Name cant be blank!') // check the field for mistakes
        return
    }

    if (archive_quantity.value.length < 1) {
        alert('Product Quantity cant be blank! MIN 1 Symbols') // check the field for mistakes
        return
    }

    //1. tikrinu, ar yra jau local storage mano krepselis
    //jei nera, sukuriu nauja masyva
    //jei yra parsinu duomenis

    const items = (() => {
        const fieldValue = localStorage.getItem('cart'); // 'cart' is the name of our place/file/"folder", a little slice of local storage to store all the data we get from this page
        return fieldValue === null
            ? []
            : JSON.parse(fieldValue);
    })();

let codes = []; // a new array wich stores the info in a simple to store and track way

    //2.idedu i masyvo pabaiga naujos prekes duomenis
    for (let i = 0; i < items.length; i++) { 
        codes.push(items[i].productID);       
        }
        console.log(codes);
      if(codes.includes(archive_code.value)){ // does a double check if the given id already exists in 'cart'
        alert("Preke tokiu kodu jau yra..."); // if yes alert the user of this,
      } else { // if no continue
        console.log("nera");
        items.push({
            "productID": archive_code.value,
            "Name": archive_name.value,
            "quantity": archive_quantity.value
        });
        
            //3. setinu nauja masyva i local storage
        localStorage.setItem('cart', JSON.stringify(items)); // turns the standart string into a json one
      }


    //4.tikrinu, ar teisingai uzsetinau
    console.log(JSON.parse(localStorage.getItem("cart")));

        archive_code.value = "",
        archive_name.value = "",
        archive_quantity.value = ""
}

function getDataFromLocalStorage(evt) { // the search function in the website
    evt.preventDefault();
    if (find_code.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 Symbols')
        return
    }
    let products = JSON.parse(localStorage.getItem("cart"));

    let listItem = document.createElement('li'); // starts creating the table/list to show to the user there searched item

    products.map(item => {                // the function that does it
        if (item.productID === find_code.value) { // searches in 'cart' for the given ID in the input
            //console.log(item.productID + " " + item.Name);

            listItem.classList.add("list-group-item", "list-group-item-secondary"); // adds classes to the created html elemenets, useful when working with bootstrap
            listItem.textContent = "Product Name: " + item.Name;
            answer.appendChild(listItem);
            let listItemSecond = document.createElement('li');
            listItemSecond.classList.add("list-group-item", "list-group-item-light");
            listItemSecond.textContent = "Product Quantity: " + item.quantity;
            answer.appendChild(listItemSecond);
        } else {                        // you're either made a mistake or it doesn't exist

            listItem.classList.add("list-group-item", "list-group-item-secondary");
            listItem.textContent = "NERASTA PREKE";

        }
    });
    answer.appendChild(listItem); // answer(in html) / print_find(in js) is the place where the entiere table is being printed in
    find_code.value = "";

}

function removeDataFromLocalStorage(evt) { // delete function
    evt.preventDefault();

    if (archive_code.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 Symbols')
        return
    }
    // get products from 'cart'
    let products = JSON.parse(localStorage.getItem("cart")); // fetches the database with all the info and unJSON everything (specificly the .parse part)
    console.log(products);
    const index = products.findIndex(product => product.productID === archive_code.value); // finds the specific one we want to delete

    if (index > -1) {
        products.splice(index, 1); // delete's the entire array that was found using index as a guide
    }

    console.log(products);
    // stores the modified array back to 'cart.
    localStorage.setItem('cart', JSON.stringify(products));

    archive_code.value = "",
        archive_name.value = "",
        archive_quantity.value = ""
};