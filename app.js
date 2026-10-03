const all = window.VALORIA_PRODUCTS || [];
let selected = "الكل";
let cart = 0;

const categoryOrder = ["الكل", "مركبات", "خدمات", "رصيد", "عضويات"];
const present = [...new Set(all.map(p => p.category).filter(Boolean))];
const categories = categoryOrder.filter(c => c === "الكل" || present.includes(c))
  .concat(present.filter(c => !categoryOrder.includes(c)));

const cats = document.getElementById("cats");
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const title = document.getElementById("title");

function drawCats() {
  cats.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "cat" + (category === selected ? " active" : "");
    button.type = "button";
    button.textContent = category;
    button.setAttribute("aria-pressed", category === selected ? "true" : "false");
    button.onclick = () => {
      selected = category;
      drawCats();
      render();
    };
    cats.appendChild(button);
  });
}

function render() {
  const query = search.value.trim().toLocaleLowerCase();
  const products = all.filter(product => {
    const categoryMatch = selected === "الكل" || product.category === selected;
    const textMatch = String(product.name || "").toLocaleLowerCase().includes(query);
    return categoryMatch && textMatch;
  });

  title.textContent = selected === "الكل" ? "كل منتجات ڤالوريا" : selected;
  grid.innerHTML = "";

  if (!products.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "مفيش منتجات في القسم ده بالبحث الحالي.";
    grid.appendChild(empty);
    return;
  }

  products.forEach(product => {
    const card = document.createElement("article");
    card.className = "product";
    const picture = document.createElement("div");
    picture.className = "pic";
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name || "منتج ڤالوريا";
    image.loading = "lazy";
    image.onerror = () => {
      image.style.display = "none";
      picture.classList.add("no-image");
      picture.textContent = "VALORIA";
    };
    picture.appendChild(image);

    const category = document.createElement("div");
    category.className = "product-category";
    category.textContent = product.category || "منتجات";

    const name = document.createElement("h2");
    name.className = "name";
    name.textContent = product.name || "منتج بدون اسم";

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = "USD " + product.price;

    const buy = document.createElement("button");
    buy.className = "buy";
    buy.type = "button";
    buy.textContent = "إضافة للسلة";
    buy.onclick = () => {
      cart++;
      document.getElementById("count").textContent = cart;
      alert("تمت الإضافة للسلة التجريبية. الشراء الحقيقي يحتاج ربط دفع وتسليم آمن.");
    };

    card.append(picture, category, name, price, buy);
    grid.appendChild(card);
  });
}

drawCats();
render();
search.addEventListener("input", render);
