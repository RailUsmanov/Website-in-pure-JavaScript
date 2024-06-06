class Header {
    render(count){
        const html = `
            <div class="header-container">
                <div class="header-counter">🛒 ${count} </div>
            </div>
        `
        Root_header.innerHTML = html
    }
}


const headerPage = new Header();
const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);