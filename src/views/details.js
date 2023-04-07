import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteFruit, getFruitById } from '../data/services.js';

import { createSubmitHandler, getUserData } from '../utils.js';

const detailsTemplate = (
	fruit,
	userControls,
	isOwner,
	onDelete
) => html`<section id="details">
	<div id="details-wrapper">
		<img id="details-img" src="${fruit.imageUrl}" alt="example1" />
		<p id="details-title">${fruit.name}</p>
		<div id="info-wrapper">
			<div id="details-description">
				<p>${fruit.description}</p>
				<p id="nutrition">Nutrition</p>
				<p id="details-nutrition">${fruit.nutrition}</p>
			</div>
			${isOwner ? userControls(onDelete, fruit._id) : null}
		</div>
	</div>
</section>`;
function userControls(onDelete, id) {
	return html` <div id="action-buttons">
		<a href="/edit/${id}" id="edit-btn">Edit</a>
		<a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
	</div>`;
}

export async function detailsPage(ctx) {
	const fruitId = ctx.params.id;

	const fruit = await getFruitById(fruitId);
	const userId = getUserData()?._id;

	const isOwner = fruit._ownerId === userId;
	console.log(fruitId, userId, isOwner);
	ctx.render(detailsTemplate(fruit, userControls, isOwner, onDelete));

	async function onDelete() {
		const confirmed = confirm(
			`Are you sure you want to delete ${fruit.title}?`
		);
		if (confirmed) {
			await deleteFruit(fruitId);
			ctx.page.redirect('/');
		}
	}
}
