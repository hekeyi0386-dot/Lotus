/* Lotus Food — English / 中文 translation layer.
   The English UI stays in app.js as the source of truth; this file translates
   rendered text, placeholders and aria/alt labels when Chinese is selected. */
(function () {
	const KEY = "lotus-lang";
	const exact = {
		// intro + header
		"Welcome to Lotus": "欢迎来到百合超市",
		"Enter website": "进入网站",
		"Welcome to Lotus!": "欢迎光临！",
		"Sign In / Register": "登录 / 注册",
		"Primary navigation": "主导航",
		"Home": "首页", "Shop": "商城", "Deals": "优惠", "Visit Us": "到店光临",
		"Find Your Taste of Asia...": "寻找您心仪的亚洲风味...",
		"Search products": "搜索商品", "Submit search": "提交搜索", "Search": "搜索",
		"Wishlist": "心愿单", "Language": "语言",
		// hero
		"Lotus Food": "百合超市",
		"Discover Asia. Bring Fresh Flavors to Your Table.": "发现亚洲，把新鲜风味带上您的餐桌。",
		"Everything for Your Table.": "满桌所需，一应俱全。", "Taste Asia in One Stop": "一站尽享亚洲美味",
		"Pittsburgh’s Asian Grocery": "匹兹堡的亚洲超市", "Discover Your Favorites": "发现您的心头好",
		"Explore Asian Flavors": "探索亚洲风味", "Explore Our Selection": "浏览我们的商品",
		"Lotus Food Asian grocery, Since 1989": "百合超市 亚洲超市，创立于 1989 年",
		"Featured at Lotus Food": "百合超市精选",
		"Previous slide": "上一张", "Next slide": "下一张", "Hero carousel controls": "轮播控制",
		// discovery
		"Explore Asian flavors": "探索亚洲风味",
		"Not sure where to begin? Follow your cravings and discover something delicious along the way.": "不知从何开始？跟着您的味蕾走，沿途发现美味惊喜。",
		"Dumplings · Gyoza": "饺子 · 煎饺", "Ramen · Noodles": "拉面 · 面条",
		"Chili Crisp · Soy Sauce": "辣椒脆 · 酱油", "Chili · Soy Sauce": "辣椒 · 酱油", "Snacks · Favorites": "零食 · 人气之选",
		"A freezer favorite that’s easy to love. Steam them, boil them, or pan-fry them for a quick and comforting bite.": "冷冻区的人气之选，人见人爱。蒸、煮、煎皆宜，快手又暖心。",
		"Start with noodles, then add broth, vegetables, chili oil, or an egg for an easy meal full of comfort and flavor.": "从面条开始，加入高汤、蔬菜、辣油或鸡蛋，轻松做出一碗温暖又美味的面。",
		"These pantry staples bring heat, depth, and umami to dumplings, noodles, rice, and everyday cooking.": "这些厨房必备调味料，为饺子、面条、米饭和日常烹饪增添辛香、层次与鲜味。",
		"Sweet, crunchy, spicy, or nostalgic—snacks are one of the easiest ways to discover a new favorite.": "香甜、酥脆、麻辣或充满回忆——零食是发现新宠最简单的方式。",
		"Explore dumplings": "选购饺子", "Find your noodles": "寻找面条",
		"Discover sauces & seasonings": "发现酱料与调味品", "Explore snacks": "选购零食",
		// deals & promotions
		"Deals & Promotions": "优惠与促销", "View All Deals": "查看全部优惠",
		"Beauty Deals": "美妆优惠", "Skincare, makeup & more": "护肤、彩妆等",
		"Group Buy": "团购", "Buy together and save more": "一起买更优惠",
		"Clearance": "清仓", "Limited-time discounts": "限时折扣",
		"Buy 1 Get 2": "买一送二", "More favorites for less": "好物更实惠",
		"Buy 2 Get 3": "买二送三", "Weekly Deals": "每周特惠",
		"Save more on your favorite Asian groceries.": "心仪的亚洲食品，买得更划算。",
		"Sale prices shown while supplies last": "特价数量有限，售完即止",
		"Deal categories": "优惠分类", "Discounted products": "特价商品",
		// visit
		"VISIT US": "到店光临",
		"Discover Asia.": "发现亚洲。", "Bring Fresh Flavors to Your Table.": "把新鲜风味带上您的餐桌。",
		"Find us in the Strip District": "我们位于 Strip District",
		"Store Hours": "营业时间", "Monday–Thursday": "周一至周四", "Friday–Sunday": "周五至周日",
		"Looking for something special?": "想找特别的商品？", "Call to ask about availability.": "欢迎致电询问是否有货。",
		"Get Directions": "获取路线",
		// shop
		"All Products": "全部商品", "Shop by Category": "按分类选购",
		"Everyday Asian groceries and neighborhood favorites, all in one place.": "日常亚洲食品与街坊最爱，一站购齐。",
		"New Arrivals": "新品上架", "Sort by": "排序",
		"Featured": "精选", "Name": "名称", "Price: Low to High": "价格：从低到高", "Price: High to Low": "价格：从高到低",
		"Biggest Savings": "优惠最多",
		"Brand": "品牌", "Dietary": "饮食", "Price": "价格", "Availability": "库存", "Category": "分类",
		"Vegan": "纯素", "Vegetarian": "素食", "Gluten-free": "无麸质",
		"Under $5": "$5 以下", "Over $10": "$10 以上", "In stock": "有货", "Out of stock": "缺货",
		"Out of Stock": "缺货", "Add to Cart": "加入购物车", "NEW": "新品", "Load More Products": "加载更多商品",
		"No products match these filters. Try changing your selection.": "没有符合条件的商品，请尝试调整筛选。",
		"Product filters": "商品筛选", "Product catalog": "商品目录",
		"Filter by category": "按分类筛选", "Filter by brand": "按品牌筛选", "Filter by dietary preference": "按饮食偏好筛选",
		"Filter by price": "按价格筛选", "Filter by availability": "按库存筛选", "Sort products": "商品排序", "Sort deals": "优惠排序",
		"Snacks": "零食", "Fruits & Vegetables": "水果蔬菜", "Meat & Eggs": "肉类蛋类", "Seafood": "海鲜",
		"Cooking & Seasoning": "烹饪调味", "Ready-to-Eat": "即食食品", "Frozen Food": "冷冻食品",
		"Grains & Staples": "米面粮油", "Tea & Beverages": "茶饮饮料", "Restaurant Supplies": "餐厅用品",
		"Household & Daily": "家居日用", "Beauty & Personal Care": "美妆个护", "Home & Decor": "家居装饰",
		"Breadcrumbs": "导航路径",
		// dialogs & toasts
		"Your Cart": "购物车", "Saved Items": "收藏商品", "My Orders": "我的订单", "Restaurant Orders": "餐厅订单",
		"Close dialog": "关闭",
		"Your cart is empty. Add a few favorites to get started.": "购物车是空的，先挑几样喜欢的吧。",
		"Your saved items will show here. Use the heart on a product to save it.": "收藏的商品会显示在这里，点击商品上的爱心即可收藏。",
		"Order history is not available in this store preview.": "此商店预览暂不提供订单记录。",
		"Added to your saved items.": "已加入收藏。", "Removed from your saved items.": "已取消收藏。",
		// products
		"Nongshim Shin Ramyun Noodle Soup": "农心辛拉面", "Fresh Bok Choy": "新鲜小白菜", "Sliced Beef for Hot Pot": "火锅牛肉片",
		"Kikkoman Soy Sauce": "龟甲万酱油", "Mochi Ice Cream Assorted Flavors": "什锦麻糬冰淇淋", "Atlantic Salmon Fillet": "大西洋三文鱼排",
		"Pork & Chive Dumplings": "猪肉韭菜饺子", "Assorted Milk Tea": "什锦奶茶", "Traditional Napa Cabbage Kimchi": "传统白菜泡菜",
		"Jasmine Rice": "茉莉香米", "Chili Crisp with Peanuts": "花生辣椒脆", "Shelled Edamame": "去壳毛豆",
		"Jasmine Green Tea": "茉莉绿茶", "Seaweed Rice Crackers": "海苔米饼", "Sweet Yellow Mango": "香甜黄芒果",
		"Green Tea Hydrating Sheet Masks": "绿茶保湿面膜", "Roasted Sesame Oil": "烘焙芝麻油", "Taiwanese Hot Pot Fish Balls": "台式火锅鱼丸",
		"Lotus Fresh": "百合鲜品", "Lotus Kitchen": "百合厨房", "Each": "每个",
		"6 ct": "6 个", "5 masks": "5 片", "5 lb": "5 磅", "1 lb": "1 磅", "12 oz": "12 盎司", "24 oz": "24 盎司", "7 oz": "7 盎司"
	};
	const patterns = [
		[/^(\d+) items?$/, "$1 件商品"],
		[/^(\d+)% OFF$/, "$1% 折扣"],
		[/^(.+) added to cart\.$/, (m, n) => `已将${exact[n] || n}加入购物车。`],
		[/^Shopping cart, (\d+) items$/, "购物车，$1 件商品"],
		[/^Add to wishlist: (.+)$/, (m, n) => `加入心愿单：${exact[n] || n}`],
		[/^Remove from wishlist: (.+)$/, (m, n) => `从心愿单移除：${exact[n] || n}`],
		[/^Show slide (\d+)$/, "显示第 $1 张"],
		[/^(\d+) of (\d+)$/, "第 $1 张，共 $2 张"],
		[/^(.+) image placeholder$/, (m, n) => `${exact[n] || n}图片占位`],
		[/^Lotus Food Company storefront at (.+)$/, "百合超市门店，位于 1649 Penn Avenue"],
		[/^Open 1649 Penn Ave in Google Maps.*$/, "在 Google 地图中打开 1649 Penn Ave（新标签页）"]
	];
	const attrs = ["aria-label", "placeholder", "alt", "title"];
	let lang = "en";
	try { lang = localStorage.getItem(KEY) === "zh" ? "zh" : "en"; } catch (e) {}

	function t(text) {
		const trimmed = text.trim();
		if (!trimmed) return text;
		let out = exact[trimmed];
		if (out === undefined) {
			for (const [re, rep] of patterns) {
				if (re.test(trimmed)) { out = trimmed.replace(re, rep); break; }
			}
		}
		return out === undefined ? text : text.replace(trimmed, out);
	}

	function translate(root) {
		if (lang !== "zh" || !root) return;
		if (root.nodeType === 3) { const v = t(root.nodeValue); if (v !== root.nodeValue) root.nodeValue = v; return; }
		if (root.nodeType !== 1 || /^(SCRIPT|STYLE)$/.test(root.tagName)) return;
		// Options without a value attribute use their text as the value; pin it to the English original.
		const opts = root.tagName === "OPTION" ? [root] : [];
		root.querySelectorAll("option").forEach((o) => opts.push(o));
		opts.forEach((o) => { if (!o.hasAttribute("value")) o.setAttribute("value", o.textContent); });
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
		let node;
		while ((node = walker.nextNode())) {
			if (/^(SCRIPT|STYLE)$/.test(node.parentNode.tagName)) continue;
			const v = t(node.nodeValue);
			if (v !== node.nodeValue) node.nodeValue = v;
		}
		const els = [root, ...root.querySelectorAll(attrs.map((a) => `[${a}]`).join(","))];
		els.forEach((el) => {
			if (el.nodeType !== 1) return;
			attrs.forEach((a) => {
				if (!el.hasAttribute(a)) return;
				const cur = el.getAttribute(a), v = t(cur);
				if (v !== cur) el.setAttribute(a, v);
			});
		});
	}

	function translateTitle() {
		if (lang !== "zh") return;
		const map = {
			"Lotus Food | Asian Grocery in Pittsburgh": "百合超市 | 匹兹堡亚洲超市",
			"Shop Asian Groceries | Lotus Food": "选购亚洲食品 | 百合超市",
			"Deals & Promotions | Lotus Food": "优惠与促销 | 百合超市"
		};
		if (map[document.title]) document.title = map[document.title];
	}

	function apply() {
		document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
		translate(document.body);
		translateTitle();
	}

	new MutationObserver((mutations) => {
		if (lang !== "zh") return;
		mutations.forEach((m) => m.addedNodes.forEach(translate));
		translateTitle();
	}).observe(document.documentElement, { childList: true, subtree: true });

	window.LotusI18n = {
		get lang() { return lang; },
		setLang(next) {
			lang = next === "zh" ? "zh" : "en";
			try { localStorage.setItem(KEY, lang); } catch (e) {}
			apply();
		}
	};
	if (document.body) apply(); else document.addEventListener("DOMContentLoaded", apply);
})();
