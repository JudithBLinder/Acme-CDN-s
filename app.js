const app = document.querySelector('#app');

const state = {
    products: [],
    companies: [],
};

const productsURL = 'https://acme-users-api-rev.herokuapp.com/api/products';
const companiesURL = 'https://acme-users-api-rev.herokuapp.com/api/companies';

const fetchedData = [axios(productsURL), axios(companiesURL)];

Promise.all(fetchedData)
.then(data => {
    state.products = data[0].data;
    state.companies = data[1].data;

    renderProducts();
    console.log(state);
});

const header = document.createElement('h1');
header.innerText = 'Acme CDN\'\s';
app.append(header);

const container = document.createElement('div');
container.classList.add('container');
app.append(container);

const createProductsTable = () => {
    const productsTable = document.createElement('table');
    productsTable.classList.add('table');

    const productsTableHeader = document.createElement('thead');
    productsTable.append(productsTableHeader);
    const theadRow = document.createElement('tr');
    productsTableHeader.append(theadRow);

    const idHeader = document.createElement('td');
    idHeader.innerText = 'ID';
    theadRow.append(idHeader);

    const nameHeader = document.createElement('td');
    nameHeader.innerText = 'NAME';
    theadRow.append(nameHeader);

    const descriptionHeader = document.createElement('td');
    descriptionHeader.innerText = 'DESCRIPTION';
    theadRow.append(descriptionHeader);

    const suggestHeader = document.createElement('td');
    suggestHeader.innerText = 'SUGGESTEDPRICE';
    theadRow.append(suggestHeader);

    const creatAtHeader = document.createElement('td');
    creatAtHeader.innerText = 'CREATEDAT';
    theadRow.append(creatAtHeader);

    const updatedAtHeader = document.createElement('td');
    updatedAtHeader.innerText = 'UPDATEDAT';
    theadRow.append(updatedAtHeader);

    return productsTable;
}
const createProduct = (product) => {
    const productRow = document.createElement('tr');

    const productID = document.createElement('td');
    productID.innerText = `${product.id}`;
    productRow.append(productID);

    const productName = document.createElement('td');
    productName.innerText = `${product.name}`;
    productRow.append(productName);

    const productDescription = document.createElement('td');
    productDescription.innerText = `${product.description}`;
    productRow.append(productDescription);

    const productSuggestedPrice = document.createElement('td');
    productSuggestedPrice.innerText = `${product.suggestedPrice}`;
    productRow.append(productSuggestedPrice);

    const productCreatedAt = document.createElement('td');
    productCreatedAt.innerText = `${product.createdAt}`;
    productRow.append(productCreatedAt);

    const productUpdatedAt = document.createElement('td');
    productUpdatedAt.innerText = `${product.updatedAt}`;
    productRow.append(productUpdatedAt);

    return productRow;
};

const renderProducts = () => {
    container.innerHTML = '';

    const table = createProductsTable();
    container.append(table);

    state.products.forEach(product => {
        table.append(createProduct(product));
    })
};