class Products {

    render(){
        let htmlCatalog = '';
        CATALOG.forEach(({id, img, name, price})=>{
           htmlCatalog += `
           <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" />
                <span class="products-element__price">
                🛒 ${price.toLocaleString()} ₽
                </span>
                <button class="products-element__btn">Добавить в корзину!</button>
           </li>
           `;
        })
        const html = `
            <ul class="products-container">${htmlCatalog}</ul>
        `;
        Root_products.innerHTML = html
    }
}

const productsPage = new Products()

productsPage.render()