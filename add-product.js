document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const price = document.getElementById("price").value;
  const file = document.getElementById("image").files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const newProduct = {
      name,
      desc,
      price,
      image: e.target.result,
    };

    let products = JSON.parse(localStorage.getItem("customProducts")) || [];
    products.push(newProduct);
    localStorage.setItem("customProducts", JSON.stringify(products));

    window.location.href = "index.html"; // go back to main product page
  };

  reader.readAsDataURL(file);
});
