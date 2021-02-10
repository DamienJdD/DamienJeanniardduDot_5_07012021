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
                let euroPrice = response[i].price / 100;
                euroPrice = euroPrice.toLocaleString("fr-FR", {style: "currency", currency: "EUR"});
                // passe les prix en centimes en euros avec deux décimales

                const card = `
                    <li class="card">
                        <a href="product.html?id=${response[i]._id}">
                            <img src="${response[i].imageUrl}" alt="" />
                            <div>
                                <h3>${response[i].name}</h3>
                                <p>${euroPrice}</p>
                            </div>
                        </a>
                    </li>`;
                indexSectionList.innerHTML += card;
            }
            return console.log(response);
        }
    )
    .catch(
        error => console.log("Erreur : " + error)
    )