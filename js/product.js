document.addEventListener("DOMContentLoaded", function () {
    fetch('data-config.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('productH2Content').innerText = data.ProductPage.productH2Content;
            document.getElementById('ProductPContent').innerText = data.ProductPage.ProductPContent;
            document.getElementById('WhatsappNo').href = "https://api.whatsapp.com/send?phone=" + data.WhatsappNo;
            console.log(data.ProductPage.ProductList);
            const products = data.ProductPage.ProductList;
            
        })
        .catch(error => console.error('Error fetching the content:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('data-config.json')
        .then(response => response.json())
        .then(data => {
            const products = data.ProductPage.ProductList;
            const productContainer = document.getElementById('product-container');

            products.forEach((product, index) => {
                const isReversed = index % 2 !== 0;
                const productGridClass = isReversed ? 'product-grid-rev-lg' : 'product-grid-lg';
                const productShadowClass = isReversed ? 'shadow-golden-circle-right' : 'shadow-golden-circle-left';
                const productMarginClass = isReversed ? 'lg:ml-12' : 'lg:mr-12';

                const productHTML = `
                    <div class="product-grid lg:${productGridClass} p-2 m-2 ${productShadowClass}">
                        <div class="product-title flex justify-center items-end lg:justify-start">
                            <h2 class="font-lato text-24px text-blue-900 font-bold leading-relaxed text-center">
                                ${product.ProductName}
                            </h2>
                        </div>
                        <div class="flex justify-self-center product-image max-w-[25rem] ${productMarginClass} lg:mt-8 xl:mt-0">
                            <img class="min-w-full min-h-full object-contain" src="${product.ProductImage}" alt="${product.ProductAlt}" />
                        </div>
                        <div class="product-info lg:-my-auto">
                            <p class="quicksand-a text-[#141414] text-lg lg:text-sm">
                                ${product.ProductContent}
                            </p>
                        </div>
                    </div>
                `;

                productContainer.insertAdjacentHTML('beforeend', productHTML);
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
});