(function () {
	var root = document.documentElement;
	var intro = document.getElementById("welcome-intro");
	if (!intro) return;
	if (!root.classList.contains("intro-active")) { intro.remove(); return; }

	var app = document.getElementById("app");
	var done = false, timer, touchY = null;
	intro.hidden = false;
	if (app) app.inert = true;
	timer = setTimeout(dismiss, 5000);

	function finish() {
		root.classList.remove("intro-active");
		intro.remove();
		if (app) app.inert = false;
		removeListeners();
		document.body.tabIndex = -1;
		document.body.focus({ preventScroll: true });
		document.body.removeAttribute("tabindex");
	}

	function dismiss() {
		if (done) return;
		done = true;
		clearTimeout(timer);
		try { sessionStorage.setItem("lotusIntroSeen", "1"); } catch (e) {}
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return finish();
		intro.classList.add("is-exiting");
		intro.addEventListener("transitionend", function (e) { if (e.target === intro) finish(); });
		setTimeout(finish, 800);
	}

	function onWheel(e) { e.preventDefault(); if (e.deltaY > 8) dismiss(); }
	function onTouchStart(e) { touchY = e.touches[0].clientY; }
	function onTouchMove(e) {
		e.preventDefault();
		if (touchY !== null && touchY - e.touches[0].clientY > 30) dismiss();
	}
	function onKey(e) {
		if (e.key === "ArrowDown" || e.key === "PageDown") { e.preventDefault(); dismiss(); }
		else if (e.key === " " && e.target === document.body) { e.preventDefault(); dismiss(); }
	}
	function removeListeners() {
		window.removeEventListener("wheel", onWheel);
		window.removeEventListener("touchstart", onTouchStart);
		window.removeEventListener("touchmove", onTouchMove);
		window.removeEventListener("keydown", onKey);
	}

	window.addEventListener("wheel", onWheel, { passive: false });
	window.addEventListener("touchstart", onTouchStart, { passive: true });
	window.addEventListener("touchmove", onTouchMove, { passive: false });
	window.addEventListener("keydown", onKey);
	document.getElementById("welcome-enter").addEventListener("click", dismiss);
})();
