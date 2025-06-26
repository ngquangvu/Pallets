const products = [
  {
    id: "100",
    name: "Pallet nhựa cỡ lớn",
    description: "Kích thước 1200x1000mm, chịu lực tốt",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "450,000đ",
  },
  {
    id: "101",
    name: "Pallet gỗ tiêu chuẩn",
    description: "Gỗ keo, dùng cho kho hàng",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "280,000đ",
  },
  {
    id: "102",
    name: "Pallet nhựa tái chế",
    description: "Tiết kiệm chi phí, thân thiện môi trường",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "320,000đ",
  },
  {
    id: "103",
    name: "Pallet gỗ thông",
    description: "Chất lượng cao, xuất khẩu",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "350,000đ",
  },
  {
    id: "104",
    name: "Pallet nhựa liền khối",
    description: "Siêu bền, chống nước",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "490,000đ",
  },
  {
    id: "105",
    name: "Pallet gỗ chịu lực",
    description: "Tải trọng lớn cho kho công nghiệp",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "400,000đ",
  },
  {
    id: "106",
    name: "Pallet nhựa đen",
    description: "Màu đen công nghiệp, kích thước đa dạng",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "430,000đ",
  },
  {
    id: "107",
    name: "Pallet gỗ pallet one-way",
    description: "Sử dụng 1 lần, giá rẻ",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "190,000đ",
  },
  {
    id: "108",
    name: "Pallet nhựa đan lưới",
    description: "Thông thoáng, nhẹ",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "370,000đ",
  },
  {
    id: "109",
    name: "Pallet gỗ tái sử dụng",
    description: "Được xử lý chống mối mọt",
    image: "https://bao50kg.com/wp-content/uploads/2022/06/avt.jpg",
    price: "260,000đ",
  },
];

const productList = document.getElementById("product-list");
const searchBox = document.getElementById("searchBox");

const fuse = new Fuse(products, {
  keys: ["name", "description"],
  threshold: 0.4,
});

function render(productsToRender) {
  productList.innerHTML = productsToRender
    .map(
      (p) => `
  <div class="product">
    <a href="product.html?id=${p.id}" class="product-image">
      <img src="${p.image}" alt="${p.name}" />
    </a>
    <div class="product-info">
      <a href="product.html?id=${p.id}">${p.name}</a>
      <p>${p.description}</p>
      <strong>Giá: ${p.price}</strong>
    </div>
  </div>
`
    )
    .join("");
}

render(products);

document.querySelectorAll("#searchBoxHeader, #searchBox").forEach(input => {
  input.addEventListener("input", function () {
    const query = this.value.trim();
    const results = query ? fuse.search(query).map(r => r.item) : products;
    render(results);

    const target = document.getElementById("products");
    const y = target.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});
