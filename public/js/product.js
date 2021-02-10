fetch("http://localhost:3000/api/furniture/")
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (response) {
            console.log(response);
            const position = window.location.href.indexOf('?');
            console.log(position)
// situe la position du ? dans l'url navigateur


            if (position > -1) {
                const endOfUrl = window.location.href.substr(position + 4)
                console.log(endOfUrl)
                // récupère l'id du produit dans la dernière partie de l'url

                for (let i = 0; i < response.length; i++) {
                    if (response[i]._id === endOfUrl) {
                        const productName = document.querySelector('#product-section h2');
                        productName.innerHTML = response[i].name;
                        // affiche le nom du produit en haut de la page
                        let euroPrice = response[i].price / 100;
                        euroPrice = euroPrice.toLocaleString("fr-FR", {style: "currency", currency: "EUR"});
                        // passe les prix en centimes en euros avec deux décimales
                        const productContent = document.querySelector('#product-content');
                        productContent.innerHTML = `
                            <img src="${response[i].imageUrl}" alt="">
                            <div id="product-info">
                                <p>${euroPrice}</p>
                                <form id="customize">
                                    <label for="dropdown">Personnalisation :</label>
                                    <select name="options" id="dropdown">
                                        <option value="">Option</option>
                                        <option value="1">${response[i].varnish}</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                    <button id="addtocart" type="button">Ajouter au panier</button>
                                </form>
                            </div>`
                    }
                }
            }
        }
    )
    .catch(
        error => console.log("Erreur : " + error)
    )