const sections=["الرئيسية","المركبات","العضويات","البطاقات والرخص","الأدوات","الباقات","أخرى"];
let active="الرئيسية",cart=0;
function allProducts(){return Object.values(window.VALORIA_DATA||{}).flat()}
function cats(){document.getElementById("categories").innerHTML=sections.map(c=>`<button class="cat ${active===c?"active":""}" onclick="active='${c}';cats();render()">${c}</button>`).join("")}
function render(){
 const q=document.getElementById("search").value.trim().toLowerCase();
 document.getElementById("heading").textContent=active==="الرئيسية"?"الرئيسية المتجر":active;
 const list=allProducts().filter(p=>(active==="الرئيسية"||p.category===active)&&p.name.toLowerCase().includes(q));
 document.getElementById("grid").innerHTML=list.map(p=>`<article class="product"><div class="photo">${p.image?`<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.parentNode.innerHTML='<span class=\'noimage\'>أضف الصورة داخل مجلد assets</span>'">`:`<span class="noimage">أضف الصورة داخل مجلد assets</span>`}</div><div class="stock">${p.stock?`يوجد ${p.stock} من المنتجات`:"المخزون يُضاف لاحقاً"}</div><div class="name">${p.name}</div><div class="meta">${p.modelId?`Model ID: ${p.modelId}`:""}</div><div class="price">${p.price?`${p.price} USD`:"السعر يُحدد لاحقاً"}</div><button class="buy" onclick="cart++;document.getElementById('count').textContent=cart">شراء</button></article>`).join("")||"<p>لا توجد منتجات مضافة في هذا القسم حتى الآن.</p>";
}
cats();render();