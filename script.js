fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>console.log(data.products.forEach(product => {
    
const data = `<table><th><td>${product.id}</td><td>${product.title}</td><td>${product.category}</td><td>${product.price}</td><td><img src="${product.images}" alt="products"></td></th><table>`
document.getElementById("listitems").innerHTML += data;
})))



