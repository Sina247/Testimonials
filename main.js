const REVIEWS = [
	{
		id: 1,
		name: 'Alice',
		role: 'Data Scientist',
		avatar: 'img/1.jpg',
		review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
	},
	{
		id: 2,
		name: 'Bob',
		role: 'Architect',
		avatar: 'img/2.jpg',
		review: `A hidden gem for tech enthusiasts. The selection is vast, and the ease of discovering new tech is addictively delightful!`,
	},
	{
		id: 3,
		name: 'Charlie',
		role: 'DevOps Engineer',
		avatar: 'img/3.jpg',
		review: `Results speak louder than words. I've never seen progress like this. The workflows are challenging but oh-so-rewarding. Kudos!`,
	},
	{
		id: 4,
		name: 'Diana',
		role: 'Product Manager',
		avatar: 'img/4.jpg',
		review: `It's very easy to customize and categorize lists for new projects/task categories.`,
	},
	{
		id: 5,
		name: 'Ethan',
		role: 'Software Engineer',
		avatar: 'img/5.jpg',
		review: `An adventure for the curious mind. Every click led to a new discovery. It's like a digital journey through the wonders of the internet.`,
	},
	{
		id: 6,
		name: 'Fiona',
		role: 'Marketing Specialist',
		avatar: 'img/6.jpg',
		review: `Plan, create, and explore seamlessly. This service made my creative dreams a reality. Smooth navigation, and the recommendations were spot on.`,
	},
	{
		id: 7,
		name: 'George',
		role: 'Software Developer',
		avatar: 'img/7.jpg',
		review: `A game-changer for organization. Tasks, calendars, notes – everything neatly synced. My life has never been this streamlined. Pure genius!`,
	},
	{
		id: 8,
		name: 'Hannah',
		role: 'Graphic Designer',
		avatar: 'img/8.jpg',
		review: `Drowning in a sea of creativity. The content here is a visual feast. An endless source of inspiration for my artistic endeavors.`,
	},
	{
		id: 9,
		name: 'Ian',
		role: 'CTO',
		avatar: 'img/9.jpg',
		review: `Discovering new beats is addictive with this service. The curated playlists are spot-on, and the personalized recommendations are eerily accurate. A music lover's paradise!`,
	},
];

let currentCard;

function renderReviews() {
	const tplCard = document.querySelector("#tpl-card");
	const listCards = document.querySelector("#list-cards");

	REVIEWS.forEach((r, idx) => {
		const clone = tplCard.content.cloneNode(true);

		clone.querySelector("blockquote").innerText = `"${r.review}"`;
		clone.querySelector("[review-name]").innerText = r.name;
		clone.querySelector("[review-role]").innerText = r.role;
		clone.querySelector("[review-img]").src = r.avatar;

		if (idx === 0) {
			clone.querySelector("div").classList.remove("opacity-0")
			clone.querySelector("blockquote").classList.remove("scale-0", "before:-translate-y-full")
			clone.querySelector(".details").classList.remove("scale-0", "translate-y-[150px]")
			currentCard = clone.querySelector("div");
		}
		listCards.append(clone)
	})
}

function sliderInit() {
	renderReviews()

	let currentİndex = 0;
	const slider = document.querySelector("#slider");
	const slides = slider.querySelectorAll(".card");
	const totalSlides = REVIEWS.length;
	const sliderButtons = document.querySelectorAll("[data-slide]");

	sliderButtons.forEach(btn => {
		btn.addEventListener("click", (e) => {

			sliderButtons[0].classList.add("translate-x-20")
			sliderButtons[1].classList.add("-translate-x-20")

			currentCard.querySelector("blockquote").classList.add("scale-0", "before:-translate-y-full")
			currentCard.querySelector(".details").classList.add("scale-0", "translate-y-[150px]")

			if (btn.getAttribute("data-slide") === "prev") {
				currentİndex = (totalSlides + currentİndex - 1) % totalSlides;
			}

			else {
				currentİndex = (totalSlides + currentİndex + 1) % totalSlides;
			}

			setTimeout(() => {
				currentCard = slides[currentİndex];
				currentCard.classList.remove("opacity-0")
				currentCard.querySelector("blockquote").classList.remove("scale-0", "before:-translate-y-full")
				currentCard.querySelector(".details").classList.remove("scale-0", "translate-y-[150px]");

				sliderButtons[0].classList.remove("translate-x-20")
				sliderButtons[1].classList.remove("-translate-x-20")
			}, 500)
		})
	})
}

sliderInit();