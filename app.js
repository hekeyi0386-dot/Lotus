const categories = [
	{ id: "snacks", name: "Snacks" },
	{ id: "produce", name: "Fruits & Vegetables" },
	{ id: "meat", name: "Meat & Eggs" },
	{ id: "seafood", name: "Seafood" },
	{ id: "cooking", name: "Cooking & Seasoning" },
	{ id: "ready", name: "Ready-to-Eat" },
	{ id: "frozen", name: "Frozen Food" },
	{ id: "grains", name: "Grains & Staples" },
	{ id: "tea", name: "Tea & Beverages" },
	{ id: "restaurant", name: "Restaurant Supplies" },
	{ id: "household", name: "Household & Daily" },
	{ id: "beauty", name: "Beauty & Personal Care" },
	{ id: "home", name: "Home & Decor" }
];

const siteRoot = new URL(".", document.currentScript.src);
const sitePath = siteRoot.pathname.replace(/\/$/, "");

function assetUrl(path) {
	return new URL(path, siteRoot).pathname;
}

function routeUrl(route, params = new URLSearchParams()) {
	const query = new URLSearchParams(params);
	if (sitePath) {
		query.delete("page");
		if (route !== "home") query.set("page", route);
		return `${sitePath}/${query.size ? `?${query}` : ""}`;
	}
	const path = route === "home" ? "/" : `/${route}`;
	return `${path}${query.size ? `?${query}` : ""}`;
}

function routeParams() {
	const params = new URLSearchParams(location.search);
	params.delete("page");
	return params;
}

const products = [
	{ id: "ramyun", name: "Nongshim Shin Ramyun Noodle Soup", brand: "Nongshim", category: "ready", size: "4.2 oz (5-pack)", price: 6.99, original: 8.49, deal: "weekly", dietary: ["Vegetarian"], available: true, isNew: false },
	{ id: "bok-choy", name: "Fresh Bok Choy", brand: "Lotus Fresh", category: "produce", size: "1 lb", price: 2.49, original: 3.49, deal: "weekly", dietary: ["Vegan", "Gluten-free"], available: true, isNew: true },
	{ id: "beef", name: "Sliced Beef for Hot Pot", brand: "Lotus Fresh", category: "meat", size: "12 oz", price: 8.99, original: 10.99, deal: "group", dietary: [], available: true, isNew: false },
	{ id: "soy-sauce", name: "Kikkoman Soy Sauce", brand: "Kikkoman", category: "cooking", size: "15 fl oz", price: 4.99, original: 5.79, deal: "weekly", dietary: ["Vegan"], available: true, isNew: false },
	{ id: "mochi", name: "Mochi Ice Cream Assorted Flavors", brand: "My/Mochi", category: "frozen", size: "6 ct", price: 5.99, original: 7.49, deal: "buy1", dietary: ["Vegetarian"], available: true, isNew: true },
	{ id: "salmon", name: "Atlantic Salmon Fillet", brand: "Lotus Fresh", category: "seafood", size: "1 lb", price: 12.99, original: 15.99, deal: "clearance", dietary: [], available: true, isNew: false },
	{ id: "dumplings", name: "Pork & Chive Dumplings", brand: "Bibigo", category: "frozen", size: "24 oz", price: 7.49, original: 9.99, deal: "group", dietary: [], available: true, isNew: false },
	{ id: "milk-tea", name: "Assorted Milk Tea", brand: "Haitai", category: "tea", size: "6 × 8.45 fl oz", price: 2.99, original: 3.99, deal: "buy2", dietary: ["Vegetarian"], available: true, isNew: true },
	{ id: "kimchi", name: "Traditional Napa Cabbage Kimchi", brand: "Jongga", category: "ready", size: "17.6 oz", price: 6.49, original: 7.99, deal: "weekly", dietary: ["Vegan"], available: true, isNew: false },
	{ id: "jasmine-rice", name: "Jasmine Rice", brand: "Three Ladies", category: "grains", size: "5 lb", price: 9.99, original: 12.49, deal: "clearance", dietary: ["Vegan", "Gluten-free"], available: true, isNew: false },
	{ id: "chili-crisp", name: "Chili Crisp with Peanuts", brand: "Lao Gan Ma", category: "cooking", size: "7.41 oz", price: 4.59, original: 5.49, deal: "buy1", dietary: ["Vegan", "Gluten-free"], available: true, isNew: true },
	{ id: "edamame", name: "Shelled Edamame", brand: "Lotus Kitchen", category: "frozen", size: "12 oz", price: 3.29, original: 4.29, deal: "buy2", dietary: ["Vegan", "Gluten-free"], available: false, isNew: false },
	{ id: "green-tea", name: "Jasmine Green Tea", brand: "Ito En", category: "tea", size: "16.9 fl oz · 4-pack", price: 5.49, original: 6.99, deal: "weekly", dietary: ["Vegan", "Gluten-free"], available: true, isNew: false },
	{ id: "rice-crackers", name: "Seaweed Rice Crackers", brand: "Want Want", category: "snacks", size: "7 oz", price: 3.79, original: 4.99, deal: "group", dietary: ["Vegetarian"], available: true, isNew: true },
	{ id: "mango", name: "Sweet Yellow Mango", brand: "Lotus Fresh", category: "produce", size: "Each", price: 2.49, original: 3.29, deal: "weekly", dietary: ["Vegan", "Gluten-free"], available: true, isNew: true },
	{ id: "sheet-mask", name: "Green Tea Hydrating Sheet Masks", brand: "Beauty of Joseon", category: "beauty", size: "5 masks", price: 11.99, original: 15.99, deal: "weekly", dietary: [], available: true, isNew: false },
	{ id: "sesame-oil", name: "Roasted Sesame Oil", brand: "Kadoya", category: "cooking", size: "5.5 fl oz", price: 6.29, original: 7.49, deal: "clearance", dietary: ["Vegan", "Gluten-free"], available: true, isNew: false },
	{ id: "fish-balls", name: "Taiwanese Hot Pot Fish Balls", brand: "Taisun", category: "frozen", size: "10.5 oz", price: 5.99, original: 7.49, deal: "buy1", dietary: [], available: true, isNew: true }
];

const deals = [
	{ id: "weekly", label: "Weekly Deals", icon: "tag" },
	{ id: "group", label: "Group Buy", icon: "users" },
	{ id: "clearance", label: "Clearance", icon: "spark" },
	{ id: "buy1", label: "Buy 1 Get 2", icon: "gift" },
	{ id: "buy2", label: "Buy 2 Get 3", icon: "gift" }
];

const app = document.querySelector("#app");
const cart = new Map(JSON.parse(localStorage.getItem("lotus-cart") || "[]"));
const wishlist = new Set(JSON.parse(localStorage.getItem("lotus-wishlist") || "[]"));
let visibleCount = 8;
let toastTimer;
let heroAutoplayTimer;

function icon(name) {
	const paths = {
		pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
		user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
		search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
		heart: '<path d="M20.8 8.8c0 5.2-8.8 10.1-8.8 10.1S3.2 14 3.2 8.8A4.4 4.4 0 0 1 12 6.7a4.4 4.4 0 0 1 8.8 2.1Z"/>',
		cart: '<path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L22 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>',
		arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
		clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
		phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
		star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
		leaf: '<path d="M20 4c-9 0-15 3.7-15 10a6 6 0 0 0 6 6c6.3 0 9-7 9-16Z"/><path d="M5 19c3-4 6-6 11-9"/>',
		bowl: '<path d="M3 12h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8Z"/><path d="M6 8c0-1 .8-1.5.8-2.5M12 8c0-1 .8-1.5.8-2.5M18 8c0-1 .8-1.5.8-2.5"/>',
		tag: '<path d="m20 13-7 7-10-10V3h7l10 10Z"/><circle cx="7.5" cy="7.5" r="1"/>',
		users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6"/>',
		spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 15l1 2.5 2.5 1-2.5 1L19 22l-1-2.5-2.5-1 2.5-1L19 15Z"/>',
		gift: '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M3 13h18M12 9H7.5a2.5 2.5 0 1 1 2.5-2.5V9Zm0 0h4.5a2.5 2.5 0 1 0-2.5-2.5V9Z"/>',
		menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
		close: '<path d="m6 6 12 12M18 6 6 18"/>',
		chevron: '<path d="m6 9 6 6 6-6"/>',
		plus: '<path d="M12 5v14M5 12h14"/>',
		minus: '<path d="M5 12h14"/>',
		filter: '<path d="M4 6h16M7 12h10M10 18h4"/>'
	};
	return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.spark}</svg>`;
}

const imagePlaceholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420"><rect width="600" height="420" fill="#e5e5e5"/></svg>')}`;

function cartCount() {
	return [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
}

function saveCart() {
	localStorage.setItem("lotus-cart", JSON.stringify([...cart.entries()]));
}

function saveWishlist() {
	localStorage.setItem("lotus-wishlist", JSON.stringify([...wishlist]));
}

function header(activeRoute) {
	const atVisit = activeRoute === "home" && location.hash === "#visit-us";
	const current = (route) => activeRoute === route && !(route === "home" && atVisit) ? ' aria-current="page"' : "";
	const visitCurrent = atVisit ? ' aria-current="location"' : "";
	const visitUrl = `${routeUrl("home")}#visit-us`;
	return `
		<div class="utility-bar"><div class="utility-inner site-width">
			<div class="utility-location"><select class="language-select" aria-label="Language"><option selected>English</option></select><a class="utility-link" href="#location">${icon("pin")} Pittsburgh, PA ${icon("chevron")}</a></div>
			<div class="utility-links">
				<div class="account-display"><span class="account-display-icon">${icon("user")}</span><span class="account-display-copy"><span class="account-welcome">Welcome to Lotus!</span><span class="account-sign-in">Sign In / Register</span></span></div>
				<a class="utility-link utility-action" href="#orders" data-dialog="orders">My Orders</a>
				<button class="utility-icon-button" type="button" aria-label="Wishlist" data-dialog="wishlist">${icon("heart")}</button>
				<a class="cart-button utility-cart" href="#cart" data-dialog="cart" aria-label="Shopping cart, ${cartCount()} items">${icon("cart")}<span class="cart-count" id="cart-count">${cartCount()}</span></a>
			</div>
		</div></div>
		<header class="main-header"><div class="header-inner site-width">
			<a class="brand" href="${routeUrl("home")}" data-route aria-label="Lotus Food home"><img class="brand-logo" src="${assetUrl("logolotus.png")}" alt="Lotus Food Asian grocery, Since 1989"></a>
			<div class="header-tools">
				<form class="search-form" id="site-search" role="search"><input name="q" type="search" placeholder="Find Your Taste of Asia..." aria-label="Search products"><button aria-label="Search">${icon("search")}</button></form>
			</div>
		</div></header>
		<nav class="primary-nav" aria-label="Primary navigation"><div class="nav-inner site-width">
			<a class="nav-link" href="${routeUrl("home")}" data-route${current("home")}><span>Home</span></a>
			<a class="nav-link" href="${routeUrl("shop")}" data-route${current("shop")}><span>Shop</span></a>
			<a class="nav-link" href="${routeUrl("deals")}" data-route${current("deals")}><span>Deals</span></a>
			<a class="nav-link" href="${visitUrl}" data-visit-anchor${visitCurrent}><span>Visit Us</span></a>
		</div></nav>`;
}

function heroMarkup() {
	const slides = [
		{ image: "group_shot_all.webp", alt: "A colorful selection of Asian grocery favorites", headline: "Everything for Your Table.", cta: "Discover Your Favorites", position: "center 50%" },
		{ image: "Top-6-Asian-Pantry-Essential-Sauces.webp", alt: "Six Chinese pantry sauces and cooking condiments", headline: "Taste Asia in One Stop", cta: "Explore the Aisles", position: "center 54%" },
		{ image: "hero3.png", alt: "Shelves of Asian grocery products at Lotus Food", headline: "Pittsburgh's First Asian Grocery", cta: "Explore Our Selection", position: "center 52%" }
	];
	return `<section class="hero hero-editorial" aria-label="Featured at Lotus Food" aria-roledescription="carousel" data-hero-carousel data-active-slide="0">
		<div class="hero-slides">${slides.map((slide, index) => `<article class="hero-slide${index === 0 ? " is-active" : ""}" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${slides.length}" aria-hidden="${index !== 0}" ${index !== 0 ? "inert" : ""}>
			<img class="hero-photo" src="${assetUrl(slide.image)}" alt="${slide.alt}" style="object-position: ${slide.position}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
			<div class="hero-copy">
				<h1${index === 0 ? ' id="hero-title"' : ""}>${slide.headline}</h1>
				<p class="hero-description">Explore Chinese pantry staples and everyday favorites.</p>
				<a class="button-primary" href="${routeUrl("shop")}" data-route>${slide.cta} <span aria-hidden="true">→</span></a>
			</div>
		</article>`).join("")}</div>
		<div class="hero-overlay" aria-hidden="true"></div>
		<div class="hero-art" aria-hidden="true">
			<img class="hero-lantern lantern-two" src="${assetUrl("Lantern2.png")}" alt="">
			<img class="hero-lantern lantern-three" src="${assetUrl("Lantern2.png")}" alt="">
			<img class="hero-cloud cloud-one" src="${assetUrl("Cloud.png")}" alt="">
			<img class="hero-cloud cloud-two" src="${assetUrl("Cloud.png")}" alt="">
			<img class="hero-cloud cloud-three" src="${assetUrl("Cloud.png")}" alt="">
		</div>
		<div class="hero-controls" aria-label="Hero carousel controls">
			<button class="hero-arrow" type="button" data-hero-direction="previous" aria-label="Previous slide">${icon("arrow")}</button>
			<div class="hero-dots">${slides.map((_, index) => `<button class="hero-dot" type="button" data-hero-slide="${index}" aria-label="Show slide ${index + 1}" aria-current="${index === 0}"></button>`).join("")}</div>
			<button class="hero-arrow hero-arrow-next" type="button" data-hero-direction="next" aria-label="Next slide">${icon("arrow")}</button>
		</div>
	</section>`;
}

function setHeroSlide(carousel, index) {
	const slides = [...carousel.querySelectorAll(".hero-slide")];
	const activeIndex = (index + slides.length) % slides.length;
	carousel.dataset.activeSlide = activeIndex;
	slides.forEach((slide, slideIndex) => {
		const isActive = slideIndex === activeIndex;
		slide.classList.toggle("is-active", isActive);
		slide.setAttribute("aria-hidden", String(!isActive));
		slide.inert = !isActive;
	});
	carousel.querySelectorAll("[data-hero-slide]").forEach((dot, dotIndex) => {
		dot.setAttribute("aria-current", String(dotIndex === activeIndex));
	});
}

function setupHeroCarousel() {
	window.clearInterval(heroAutoplayTimer);
	const carousel = app.querySelector("[data-hero-carousel]");
	if (!carousel) return;
	heroAutoplayTimer = window.setInterval(() => {
		if (carousel.matches(":hover") || carousel.contains(document.activeElement)) return;
		setHeroSlide(carousel, Number(carousel.dataset.activeSlide) + 1);
	}, 6000);
}

function homePage() {
	const promotions = [
		{ title: "Beauty Deals", copy: "Skincare, makeup & more", tag: "Weekly offer", deal: "weekly", category: "beauty" },
		{ title: "Group Buy", copy: "Buy together and save more", tag: "Better together", deal: "group" },
		{ title: "Clearance", copy: "Limited-time discounts", tag: "While supplies last", deal: "clearance" },
		{ title: "Buy 1 Get 2", copy: "More favorites for less", tag: "Multi-buy deal", deal: "buy1" }
	];
	const recommendations = [
		{
			label: "Dumplings · Gyoza",
			title: "Start with dumplings",
			copy: "A freezer favorite that’s easy to love. Steam them, boil them, or pan-fry them for a quick and comforting bite.",
			cta: "Explore dumplings",
			image: "1608_How-to-Make-Steamed-Dumplings-_002.jpg",
			alt: "Steamed dumplings ready to enjoy",
			params: new URLSearchParams("category=frozen")
		},
		{
			label: "Ramen · Noodles",
			title: "Build your bowl",
			copy: "Start with noodles, then add broth, vegetables, chili oil, or an egg for an easy meal full of comfort and flavor.",
			cta: "Find your noodles",
			image: "Lunar-New-Year-Scallion-Oil-Noodles-2.webp",
			alt: "Scallion oil noodles in a bowl",
			params: new URLSearchParams("search=ramyun")
		},
		{
			label: "Chili Crisp · Soy Sauce",
			title: "Flavor starts here",
			copy: "These pantry staples bring heat, depth, and umami to dumplings, noodles, rice, and everyday cooking.",
			cta: "Discover sauces & seasonings",
			image: "Chili sauce.webp",
			alt: "Chili sauce for adding heat and flavor",
			params: new URLSearchParams("category=cooking")
		},
		{
			label: "Snacks · Favorites",
			title: "Try an iconic snack",
			copy: "Sweet, crunchy, spicy, or nostalgic—snacks are one of the easiest ways to discover a new favorite.",
			cta: "Explore snacks",
			image: "241209_Sesame-Balls_5.jpg",
			alt: "Sesame balls, a sweet and crunchy snack",
			params: new URLSearchParams("category=snacks")
		}
	];
	return `<main class="main site-width" data-page="home">
		${heroMarkup()}
		<section class="discovery-section" aria-labelledby="discovery-title">
			<div class="discovery-heading">
				<div class="discovery-intro">
					<p class="discovery-eyebrow">Start with customer favorites</p>
					<h2 id="discovery-title">Explore Asian flavors</h2>
					<p class="discovery-description">Not sure where to begin? Start with a few popular staples loved by first-time shoppers and longtime regulars alike.</p>
				</div>
				<p class="discovery-note">A few familiar favorites can open the door to something new.</p>
			</div>
			<div class="discovery-grid">${recommendations.map((item) => `<article class="discovery-card">
				<img class="discovery-image" src="${assetUrl(item.image)}" alt="${item.alt}" loading="lazy">
				<div class="discovery-card-copy">
					<p class="discovery-label">${item.label}</p>
					<h3>${item.title}</h3>
					<p class="discovery-card-description">${item.copy}</p>
					<a class="discovery-link" href="${routeUrl("shop", item.params)}" data-route>${item.cta} ${icon("arrow")}</a>
				</div>
			</article>`).join("")}</div>
		</section>
		<section aria-labelledby="promotion-title"><div class="section-heading"><div><h2 id="promotion-title">Deals &amp; Promotions</h2></div><a class="text-link" href="${routeUrl("deals")}" data-route>View All Deals ${icon("arrow")}</a></div>
			<div class="promotion-grid">${promotions.map((promo) => `<a class="promotion-card" href="${routeUrl("deals", new URLSearchParams(`deal=${promo.deal}${promo.category ? `&category=${promo.category}` : ""}`))}" data-route><img src="${imagePlaceholder}" alt="${promo.title} image placeholder"><span class="promotion-copy"><small>${promo.tag}</small><h3>${promo.title}</h3><p>${promo.copy}</p></span></a>`).join("")}</div>
		</section>
		<section class="visit-section" id="visit-us" aria-labelledby="visit-title">
			<div class="visit-copy">
				<p class="visit-eyebrow">VISIT US</p>
				<h2 id="visit-title">Discover Asia.<br>Bring Fresh Flavors to Your Table.</h2>
				<div class="visit-details">
					<div class="visit-detail">
						${icon("pin")}
						<div><h3>Find us in the Strip District</h3><address>1649 Penn Ave<br>Pittsburgh, PA 15222</address></div>
					</div>
					<div class="visit-detail">
						${icon("clock")}
						<div><h3>Store Hours</h3><dl class="visit-hours"><div><dt>Monday–Thursday</dt><dd>10:00 AM – 6:30 PM</dd></div><div><dt>Friday–Sunday</dt><dd>9:00 AM – 7:00 PM</dd></div></dl></div>
					</div>
					<div class="visit-detail">
						${icon("phone")}
						<div><h3>Looking for something special?</h3><p>Call to ask about availability.</p><a class="visit-phone" href="tel:+14122813050">(412) 281-3050</a></div>
					</div>
				</div>
				<a class="visit-directions" href="https://www.google.com/maps/dir/?api=1&amp;destination=Lotus+Food+Company%2C+1649+Penn+Ave%2C+Pittsburgh%2C+PA+15222" target="_blank" rel="noopener noreferrer">${icon("pin")} Get Directions</a>
			</div>
			<img class="visit-photo" src="${assetUrl("hero2.png")}" alt="Lotus Food Company storefront at 1649 Penn Avenue">
		</section>
	</main>`;
}

function shopSidebar(activeCategory) {
	return `<aside class="category-sidebar" aria-label="Shop by Category"><div class="sidebar-title">${icon("menu")} Shop by Category</div><div class="category-list"><button class="category-button" data-category="all" aria-pressed="${activeCategory === "all"}">All Products <span>›</span></button>${categories.map((category) => `<button class="category-button" data-category="${category.id}" aria-pressed="${activeCategory === category.id}">${category.name}<span>›</span></button>`).join("")}</div></aside>`;
}

function productCard(product, isDeal = false) {
	const saved = wishlist.has(product.id);
	const discount = Math.max(1, Math.round((1 - product.price / product.original) * 100));
	return `<article class="product-card">
		<div class="product-image-wrap"><img class="product-image" src="${imagePlaceholder}" alt="${product.name} image placeholder">${isDeal ? `<span class="product-badge">${discount}% OFF</span>` : product.isNew ? '<span class="product-badge">NEW</span>' : ""}<button class="wishlist-button" type="button" aria-label="${saved ? "Remove from" : "Add to"} wishlist: ${product.name}" aria-pressed="${saved}" data-wishlist="${product.id}">${icon("heart")}</button></div>
		<div class="product-info"><span class="product-brand">${product.brand}</span><h3 class="product-name">${product.name}</h3><span class="product-size">${product.size}</span><div class="product-prices"><span class="product-price">$${product.price.toFixed(2)}</span>${(isDeal || product.price < product.original) ? `<span class="product-original">$${product.original.toFixed(2)}</span>` : ""}</div><div class="product-actions"><button class="add-button" type="button" data-add="${product.id}" ${product.available ? "" : "disabled"}>${icon("cart")} ${product.available ? "Add to Cart" : "Out of Stock"}</button></div></div>
	</article>`;
}

function productFilters(params, isDeals = false) {
	const brands = [...new Set(products.map((product) => product.brand))].sort();
	return `<div class="filter-row" aria-label="Product filters">
		${isDeals ? `<select class="filter-select" data-filter="category" aria-label="Filter by category"><option value="all">Category</option>${categories.map((category) => `<option value="${category.id}" ${params.get("category") === category.id ? "selected" : ""}>${category.name}</option>`).join("")}</select>` : ""}
		<select class="filter-select" data-filter="brand" aria-label="Filter by brand"><option value="all">Brand</option>${brands.map((brand) => `<option ${params.get("brand") === brand ? "selected" : ""}>${brand}</option>`).join("")}</select>
		${!isDeals ? `<select class="filter-select" data-filter="dietary" aria-label="Filter by dietary preference"><option value="all">Dietary</option>${["Vegan", "Vegetarian", "Gluten-free"].map((item) => `<option ${params.get("dietary") === item ? "selected" : ""}>${item}</option>`).join("")}</select><select class="filter-select" data-filter="price" aria-label="Filter by price"><option value="all">Price</option><option value="under5" ${params.get("price") === "under5" ? "selected" : ""}>Under $5</option><option value="5to10" ${params.get("price") === "5to10" ? "selected" : ""}>$5–$10</option><option value="over10" ${params.get("price") === "over10" ? "selected" : ""}>Over $10</option></select>` : ""}
		<select class="filter-select" data-filter="availability" aria-label="Filter by availability"><option value="all">Availability</option><option value="available" ${params.get("availability") === "available" ? "selected" : ""}>In stock</option><option value="unavailable" ${params.get("availability") === "unavailable" ? "selected" : ""}>Out of stock</option></select>
	</div>`;
}

function shopPage(params) {
	const activeCategory = params.get("category") || "all";
	const collection = params.get("collection") || "all";
	return `<main class="main site-width" data-page="shop"><div class="page-intro"><div><div class="breadcrumbs"><a href="${routeUrl("home")}" data-route>Home</a><span>›</span><span>Shop</span></div><h1>All Products</h1><p>Everyday Asian groceries and neighborhood favorites, all in one place.</p></div><span class="product-count" id="product-count"></span></div>
		<div class="shop-layout">${shopSidebar(activeCategory)}<section class="catalog-panel" aria-label="Product catalog"><div class="catalog-heading"><div><button class="collection-chip" type="button" data-collection aria-pressed="${collection === "new"}">${icon("star")} New Arrivals</button></div><label class="catalog-sort">Sort by <select class="filter-select" data-filter="sort" aria-label="Sort products"><option value="featured" ${params.get("sort") === "featured" ? "selected" : ""}>Featured</option><option value="price-low" ${params.get("sort") === "price-low" ? "selected" : ""}>Price: Low to High</option><option value="price-high" ${params.get("sort") === "price-high" ? "selected" : ""}>Price: High to Low</option><option value="name" ${params.get("sort") === "name" ? "selected" : ""}>Name</option></select></label></div>
			${productFilters(params)}<div class="product-grid" id="product-grid"></div><div class="load-more-row" id="load-more-row"></div></section></div></main>`;
}

function dealTabs(activeDeal) {
	return `<div class="deal-tabs" role="tablist" aria-label="Deal categories">${deals.map((deal) => `<button class="deal-tab" type="button" role="tab" aria-selected="${deal.id === activeDeal}" data-deal="${deal.id}">${deal.label}</button>`).join("")}</div>`;
}

function dealsPage(params) {
	const activeDeal = deals.some((deal) => deal.id === params.get("deal")) ? params.get("deal") : "weekly";
	const deal = deals.find((item) => item.id === activeDeal);
	const focusedCategory = params.get("category") || "all";
	return `<main class="main site-width" data-page="deals"><header class="deals-intro"><h1>Deals &amp; Promotions</h1><p>Save more on your favorite Asian groceries.</p></header>
		${dealTabs(activeDeal)}
		<div class="deal-toolbar"><div>${productFilters(params, true)}</div><span class="discount-note">Sale prices shown while supplies last</span></div>
		<section id="deal-products" aria-label="Discounted products"><div class="catalog-heading"><div><h2>${deal.label}</h2><span class="product-count" id="product-count"></span></div><label class="catalog-sort">Sort by <select class="filter-select" data-filter="sort" aria-label="Sort deals"><option value="savings" ${params.get("sort") === "savings" || !params.get("sort") ? "selected" : ""}>Biggest Savings</option><option value="price-low" ${params.get("sort") === "price-low" ? "selected" : ""}>Price: Low to High</option><option value="price-high" ${params.get("sort") === "price-high" ? "selected" : ""}>Price: High to Low</option></select></label></div><div class="product-grid" id="product-grid"></div><div class="load-more-row" id="load-more-row"></div></section>
	</main>`;
}

function filteredProducts(params, route) {
	let result = [...products];
	const category = params.get("category");
	const search = (params.get("search") || "").toLowerCase();
	const brand = params.get("brand");
	const dietary = params.get("dietary");
	const price = params.get("price");
	const availability = params.get("availability");
	const collection = params.get("collection");
	const dealType = params.get("deal") || "weekly";
	if (category && category !== "all") result = result.filter((product) => product.category === category);
	if (route === "deals") result = result.filter((product) => product.deal === dealType);
	if (brand && brand !== "all") result = result.filter((product) => product.brand === brand);
	if (dietary && dietary !== "all") result = result.filter((product) => product.dietary.includes(dietary));
	if (price === "under5") result = result.filter((product) => product.price < 5);
	if (price === "5to10") result = result.filter((product) => product.price >= 5 && product.price <= 10);
	if (price === "over10") result = result.filter((product) => product.price > 10);
	if (availability === "available") result = result.filter((product) => product.available);
	if (availability === "unavailable") result = result.filter((product) => !product.available);
	if (collection === "new") result = result.filter((product) => product.isNew);
	if (search) result = result.filter((product) => `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(search));
	const sort = params.get("sort") || (route === "deals" ? "savings" : "featured");
	if (sort === "price-low") result.sort((a, b) => a.price - b.price);
	if (sort === "price-high") result.sort((a, b) => b.price - a.price);
	if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
	if (sort === "savings") result.sort((a, b) => (b.original - b.price) - (a.original - a.price));
	return result;
}

function renderCatalog() {
	const main = app.querySelector("[data-page='shop'], [data-page='deals']");
	if (!main) return;
	const params = routeParams();
	const route = main.dataset.page;
	const result = filteredProducts(params, route);
	const grid = main.querySelector("#product-grid");
	const displayed = result.slice(0, visibleCount);
	grid.innerHTML = displayed.length ? displayed.map((product) => productCard(product, route === "deals")).join("") : '<div class="empty-state">No products match these filters. Try changing your selection.</div>';
	main.querySelector("#product-count").textContent = `${result.length} ${result.length === 1 ? "item" : "items"}`;
	const more = main.querySelector("#load-more-row");
	more.innerHTML = result.length > visibleCount ? '<button class="button-secondary" type="button" data-load-more>Load More Products</button>' : "";
}

function showToast(message) {
	let toast = document.querySelector(".toast");
	if (!toast) {
		toast = document.createElement("div");
		toast.className = "toast";
		toast.setAttribute("role", "status");
		document.body.append(toast);
	}
	toast.textContent = message;
	toast.hidden = false;
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => toast.remove(), 2400);
}

function renderDialog(kind) {
	const content = {
		restaurant: ["Restaurant Orders", "Restaurant ordering information is not connected yet. Please check back soon."],
		orders: ["My Orders", "Order history is not available in this store preview."],
		cart: ["Your Cart", cart.size ? [...cart].map(([id, quantity]) => {
			const product = products.find((item) => item.id === id);
			return `<div class="dialog-item"><strong>${product.name}</strong><span>${quantity} × $${product.price.toFixed(2)}</span></div>`;
		}).join("") : "Your cart is empty. Add a few favorites to get started."],
		wishlist: ["Saved Items", wishlist.size ? [...wishlist].map((id) => {
			const product = products.find((item) => item.id === id);
			return `<div class="dialog-item"><strong>${product.name}</strong><span>$${product.price.toFixed(2)}</span></div>`;
		}).join("") : "Your saved items will show here. Use the heart on a product to save it."]
	};
	const [title, body] = content[kind] || content.account;
	const bodyMarkup = kind === "cart" || kind === "wishlist" ? `<div class="dialog-list">${body}</div>` : `<p class="dialog-content">${body}</p>`;
	const wrapper = document.createElement("div");
	wrapper.className = "dialog-backdrop";
	wrapper.innerHTML = `<section class="dialog-panel" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><div class="dialog-heading"><h2 id="dialog-title">${title}</h2><button class="dialog-close" type="button" aria-label="Close dialog">${icon("close")}</button></div>${bodyMarkup}</section>`;
	app.append(wrapper);
	wrapper.querySelector(".dialog-close").focus();
}

function navigate(url, { scroll = true } = {}) {
	const target = new URL(url, location.origin);
	history.pushState({}, "", `${target.pathname}${target.search}${target.hash}`);
	visibleCount = 8;
	render();
	if (scroll) window.scrollTo(0, 0);
}

function scrollToVisitSection() {
	const section = document.querySelector("#visit-us");
	if (!section) return;
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
}

function navigateToVisitSection() {
	const wasHome = routeName() === "home";
	const visitUrl = `${routeUrl("home")}#visit-us`;
	const target = new URL(visitUrl, location.origin);
	if (`${location.pathname}${location.search}${location.hash}` !== `${target.pathname}${target.search}${target.hash}`) {
		history.pushState({}, "", `${target.pathname}${target.search}${target.hash}`);
	}
	if (!wasHome) {
		visibleCount = 8;
		render();
	} else {
		app.querySelector('.nav-link[aria-current="page"]')?.removeAttribute("aria-current");
		app.querySelector('.nav-link:last-child[data-visit-anchor]')?.setAttribute("aria-current", "location");
	}
	scrollToVisitSection();
}

function routeName() {
	const page = new URLSearchParams(location.search).get("page");
	if (page === "shop" || page === "deals") return page;
	if (location.pathname.replace(/\/$/, "") === "/shop") return "shop";
	if (location.pathname.replace(/\/$/, "") === "/deals") return "deals";
	return "home";
}

function render() {
	const route = routeName();
	const params = routeParams();
	const page = route === "shop" ? shopPage(params) : route === "deals" ? dealsPage(params) : homePage();
	app.innerHTML = `${header(route)}${page}<div class="toast" role="status" hidden></div>`;
	setupHeroCarousel();
	document.title = route === "shop" ? "Shop Asian Groceries | Lotus Food" : route === "deals" ? "Deals & Promotions | Lotus Food" : "Lotus Food | Asian Grocery in Pittsburgh";
	if (route === "shop" || route === "deals") renderCatalog();
	if (params.has("search") && route === "shop") {
		const searchInput = app.querySelector("#site-search input");
		searchInput.value = params.get("search");
	}
}

app.addEventListener("click", (event) => {
	if (event.target.closest("[data-visit-anchor]")) {
		event.preventDefault();
		navigateToVisitSection();
		return;
	}
	const heroControl = event.target.closest("[data-hero-slide], [data-hero-direction]");
	if (heroControl) {
		const carousel = heroControl.closest("[data-hero-carousel]");
		const current = Number(carousel.dataset.activeSlide);
		const next = heroControl.hasAttribute("data-hero-slide")
			? Number(heroControl.dataset.heroSlide)
			: current + (heroControl.dataset.heroDirection === "next" ? 1 : -1);
		setHeroSlide(carousel, next);
		return;
	}
	const routeLink = event.target.closest("a[data-route]");
	if (routeLink) {
		event.preventDefault();
		navigate(routeLink.getAttribute("href"));
		return;
	}
	const dialogTrigger = event.target.closest("[data-dialog]");
	if (dialogTrigger) {
		event.preventDefault();
		renderDialog(dialogTrigger.dataset.dialog);
		return;
	}
	const categoryButton = event.target.closest("[data-category]");
	if (categoryButton) {
		const params = routeParams();
		if (categoryButton.dataset.category === "all") params.delete("category");
		else params.set("category", categoryButton.dataset.category);
		params.delete("collection");
		navigate(routeUrl("shop", params), { scroll: false });
		return;
	}
	const dealButton = event.target.closest("[data-deal]");
	if (dealButton) {
		const params = routeParams();
		params.set("deal", dealButton.dataset.deal);
		params.delete("category");
		navigate(routeUrl("deals", params));
		return;
	}
	const wishlistButton = event.target.closest("[data-wishlist]");
	if (wishlistButton) {
		const id = wishlistButton.dataset.wishlist;
		if (wishlist.has(id)) wishlist.delete(id);
		else wishlist.add(id);
		saveWishlist();
		renderCatalog();
		showToast(wishlist.has(id) ? "Added to your saved items." : "Removed from your saved items.");
		return;
	}
	const addButton = event.target.closest("[data-add]");
	if (addButton) {
		const id = addButton.dataset.add;
		cart.set(id, (cart.get(id) || 0) + 1);
		saveCart();
		const count = document.querySelector("#cart-count");
		if (count) count.textContent = cartCount();
		const cartLink = document.querySelector(".cart-button");
		if (cartLink) cartLink.setAttribute("aria-label", `Shopping cart, ${cartCount()} items`);
		showToast(`${products.find((item) => item.id === id).name} added to cart.`);
		return;
	}
	if (event.target.closest("[data-collection]")) {
		const params = routeParams();
		if (params.get("collection") === "new") params.delete("collection");
		else params.set("collection", "new");
		navigate(routeUrl("shop", params), { scroll: false });
		return;
	}
	if (event.target.closest("[data-load-more]")) {
		visibleCount += 8;
		renderCatalog();
		return;
	}
	if (event.target.closest("[data-scroll]")) {
		event.preventDefault();
		app.querySelector(`#${event.target.closest("[data-scroll]").dataset.scroll}`).scrollIntoView({ behavior: "smooth" });
		return;
	}
	if (event.target.classList.contains("dialog-backdrop") || event.target.closest(".dialog-close")) {
		app.querySelector(".dialog-backdrop")?.remove();
	}
});

app.addEventListener("change", (event) => {
	if (event.target.matches("[data-filter]")) {
		const params = routeParams();
		const key = event.target.dataset.filter;
		if (event.target.value === "all" || (key === "sort" && event.target.value === "featured")) params.delete(key);
		else params.set(key, event.target.value);
		params.delete("page");
		visibleCount = 8;
		const focusKey = key;
		navigate(routeUrl(routeName(), params), { scroll: false });
		app.querySelector(`[data-filter="${focusKey}"]`)?.focus();
	}
});

app.addEventListener("submit", (event) => {
	if (event.target.id !== "site-search") return;
	event.preventDefault();
	const query = new FormData(event.target).get("q").trim();
	navigate(routeUrl("shop", new URLSearchParams(query ? `search=${encodeURIComponent(query)}` : "")));
});

app.addEventListener("keydown", (event) => {
	const carousel = event.target.closest("[data-hero-carousel]");
	if (carousel && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
		event.preventDefault();
		setHeroSlide(carousel, Number(carousel.dataset.activeSlide) + (event.key === "ArrowRight" ? 1 : -1));
		return;
	}
	if (event.key === "Escape") app.querySelector(".dialog-backdrop")?.remove();
});

window.addEventListener("popstate", () => {
	visibleCount = 8;
	render();
	if (location.hash === "#visit-us") scrollToVisitSection();
});

render();
if (location.hash === "#visit-us") scrollToVisitSection();