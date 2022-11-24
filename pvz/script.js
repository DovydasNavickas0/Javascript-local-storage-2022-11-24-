const create = document.getElementById('sukurk');
const rezult = document.getElementById('rezultatas');
const buttonDiv = document.getElementById('buttonDiv')
const rodity = document.getElementById('rodyti')
const nerodyti = document.getElementById('nerodyti')

create.addEventListener("click", photoCreater);
nerodyti.addEventListener("click", hide);
rodity.addEventListener("click", show);

function shuffle(array) {
   let i = array.length,
       j = 0,
       temp;

   while (i--) {

       j = Math.floor(Math.random() * (i+1));

       // swap randomly chosen element with current element
       temp = array[i];
       array[i] = array[j];
       array[j] = temp;

   }

   return array;
}

// function shuffle(){
//     for ( let i = 0; i < img.length; i++ ){
//         let array = Math.floor(Math.random() * img.length);
//          return array
//     }
// }

function photoCreater(){

    let j = 0

    let randomizer = shuffle([0, 1, 2, 3, 4, 5])

    console.log(randomizer)

    const img =  [
        'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/428310/pexels-photo-428310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ];


    for(let i = 0; i<img.length; i++){

        console.log(randomizer[j])

        console.log(img[randomizer[j]])
        let imgTable = document.createElement('img');
        imgTable.setAttribute('src', img[randomizer[j]]);
        imgTable.setAttribute('height', 150);
        imgTable.setAttribute('width', 300);
        rezult.appendChild(imgTable)

        j += 1

    }

    create.style.visibility = "hidden";
    rodity.style.visibility = "visible";
    nerodyti.style.visibility = "visible";

}

function hide(){
    rezult.style.visibility = "hidden";
}

function show(){
    rezult.style.visibility = "visible";
}