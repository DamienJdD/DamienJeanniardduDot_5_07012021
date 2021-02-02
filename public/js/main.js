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
            const indexSectionList = document.querySelector('#index-section-list');

            for (let i = 0; i < response.length; i++) {
                const product = `
                <li class="card">
                    <a href="product.html">
                        <img src="${response[i].imageUrl}" alt="" />
                        <div>
                            <h3>${response[i].name}</h3>
                            <p>${response[i].price} €</p>
                        </div>
                    </a>
                </li>`;
                indexSectionList.innerHTML += product;
            }
            return console.log(response)
        }

    )
    .catch(
        error => console.log("Erreur : " + error)
    )