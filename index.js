document.addEventListener('DOMContentLoaded', () => {
	const z = document.getElementById("xe-date");
	const q = document.getElementById("blux");
	const u = document.querySelectorAll(".xe");

	function updateTime() {
		setInterval(function() {
			let now = new Date();
			let seconds = now.getSeconds();
			let minutes = now.getMinutes();
			let hours = now.getHours();
			z.innerHTML = `${seconds}:${minutes}:${hours}`;
		}, 1000);
	}

	updateTime();

	document.addEventListener('mousemove', (event) => {
		const mouseX = event.clientX;
		const mouseY = event.clientY;

		q.style.top = mouseY - 10 + 'px';
		q.style.left = mouseX - 10 + 'px';
		q.style.opacity = '1';
		console.log(mouseX, mouseY);
	});

	u.forEach(element => {
		element.addEventListener('mouseover', (event) => {
			q.style.width = '100px';
			q.style.height = '100px';
		});

		element.addEventListener('mouseout', (event) => {
			q.style.width = '20px';
			q.style.height = '20px';
		});
	});
});

AOS.init();