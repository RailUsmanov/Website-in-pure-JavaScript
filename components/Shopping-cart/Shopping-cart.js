class ShoppingCart {
    handelCloseShoppingCartPages(){
        Root_shoppingCart.innerHTML = ""
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog  = 0;

        CATALOG.forEach( ( { id, name, price } )=>{
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                <tr>
                    <td class="shoppingCart-element__name">✔️ ${name}</td>
                    <td class="shoppingCart-element__price">${price.toLocaleString()} ₽</td>
                </tr>
                `
                sumCatalog += price;
            }
        });
        
        const html = `
        <div class="shoppingCart-container">
            <div class="shoppingCart__close" 
                 onclick="shoppingCart. handelCloseShoppingCartPages()"></div>
            <table>
                ${htmlCatalog} 
                <tr>
                    <td class="shoppingCart-element__name">⚡️ Сумма</td>
                    <td class="shoppingCart-element__price">${sumCatalog.toLocaleString()}  ₽</td>
                </tr>
            </table>
        </div>
        `;
        Root_shoppingCart.innerHTML = html;
    }
}

const shoppingCart = new ShoppingCart;
