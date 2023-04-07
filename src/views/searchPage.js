import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFruits, searchFruit } from '../data/services.js';

let ctx = null;

const searchTemplate = (onSearch, foundProducts) => html`
	<section id="search">
		<div class="form">
			<h2>Search</h2>
			<form @submit=${onSearch} class="search-form">
				<input type="text" name="search" id="search-input" />
				<button class="button-list">Search</button>
			</form>
		</div>

		<h4>Results:</h4>

		<div class="search-result">
			${foundProducts.length > 0
				? html`${foundProducts.map((f) => fruitCard(f))}`
				: html`<p class="no-result">No result.</p>`}
		</div>
	</section>
`;

const fruitCard = (fruit) => html`
	<div class="fruit">
		<img src="${fruit.imageUrl}" alt="example1" />
		<h3 class="title">${fruit.name}</h3>
		<p class="description">${fruit.description}</p>
		<a class="details-btn" href="/details/${fruit._id}">More Info</a>
	</div>
`;

////////////////------------------NEW HTML --------------------///////////

export async function searchShow(context) {
	ctx = context;

	let foundProducts = [];
	ctx.render(searchTemplate(onSearch, foundProducts));

	async function onSearch(event) {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const queryStr = formData.get('search');
		if (queryStr === '') {
			alert('The search field must not be empty!');
		}

		foundProducts = await searchFruit(queryStr);
		ctx.render(searchTemplate(onSearch, foundProducts));
	}
}
