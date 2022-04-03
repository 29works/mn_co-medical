// フェードイン
function showElementAnimation() {
	var element = document.getElementsByClassName('fade-in');
	if (!element) return;
	var showTiming = window.innerHeight > 768 ? 200 : 60;
	var scrollY = window.pageYOffset;
	var windowH = window.innerHeight;
	for (var i = 0; i < element.length; i++) {
		var elemClientRect = element[i].getBoundingClientRect();
		var elemY = scrollY + elemClientRect.top;
		if (scrollY + windowH - showTiming > elemY) {
			element[i].classList.add('show');
		} else if (scrollY + windowH < elemY) {
		}
	}
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
