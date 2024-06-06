class Products {
    constructor(){
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину!';
        this.labelRemove = 'Удалить из корзины!';
    }
    handleSetLocationStorage(el, id){
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if(pushProduct){
                el.classList.add(this.classNameActive);
                el.innerHTML = this.labelRemove;
        } else {
            el.classList.remove(this.classNameActive);
            el.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length)
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG.forEach( ( { id, img, name, price } )=>{
            let activeClass = '';
            let activeText = '';
            if( productsStore.indexOf( id ) === -1 ){
                activeText = this.labelAdd;
            }else{
                activeText = this.labelRemove;
                activeClass = ' '+ this.classNameActive;
            }
           htmlCatalog += `
           <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" />
                <span class="products-element__price">
                🛒 ${price.toLocaleString()} ₽
                </span>
                <button class="products-element__btn${ activeClass }" 
                        onclick="productsPage.handleSetLocationStorage(this, '${id}') ">
                    ${activeText}
                </button>
           </li>
           `;
        } );
        const html = `
            <ul class="products-container">${htmlCatalog}</ul>
        `;
        Root_products.innerHTML = html;
    }
}

const productsPage = new Products();

productsPage.render();