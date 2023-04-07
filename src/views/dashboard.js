import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFruits } from '../data/services.js';
import { getUserData } from '../utils.js';

const catalogTemplate = (fruits) => html` <h2>Fruits</h2>
	<section id="dashboard">
		${fruits.length === 0
			? html`<h2>No fruit info yet.</h2>`
			: fruits.map(catalogPreview)}
	</section>`;

export async function catalogPage(ctx) {
	const userData = getUserData();

	const fruits = await getAllFruits();

	ctx.render(catalogTemplate(fruits));
}

const catalogPreview = (fruits) => html`<div class="fruit">
	<img src="${fruits.imageUrl}" alt="example1" />
	<h3 class="title">${fruits.name}</h3>
	<p class="description">${fruits.description}</p>
	<a class="details-btn" href="/details/${fruits._id}">More Info</a>
</div>`;
