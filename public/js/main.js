// PROMISE
// FETCH / AWAIT ASYNC
// PARCOURIR TON TABLEAU
//


// fetch("http://localhost:3000/api/furniture")
//     .then(
//         function (response) {
//             return response.json();
//         }
//     )
//     .then(
//         function (response) {
//             for (let i = 0; i < response.length; i++) {
//                 let myId = document.getElementById('index-section');
//                 let card = `<p>${response[i].name}</p>`;
//                 myId.innerHTML += card;
//             }
//
//             return console.log(response);
//         }
//     )
//     .catch(
//         error => console.log("Erreur : " + error)
//     );
//
//
// console.log('test');

// mon code à partir de là //

fetch("http://localhost:3000/api/furniture")
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (response) {
            for (let i = 0; i < response.length; i++) {
                let firstItemNameSpot = document.querySelector('#index-section-list li:first-of-type a div h3');
                let firstItemName = `${response[i].name}`;
                firstItemNameSpot.innerHTML = firstItemName;
            }

            return console.log(response);
        }
    )
    .catch(
        error => console.log("Erreur : " + error)
    )