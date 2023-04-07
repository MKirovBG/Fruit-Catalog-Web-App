import { html } from '../../node_modules/lit-html/lit-html.js';
import { creteFruit } from '../data/services.js';
import { createSubmitHandler } from '../utils.js';

const createFruitTemplate = (createForm) => html`<section id="create">
	<div class="form">
		<h2>Add Fruit</h2>
		<form @submit=${createForm} class="create-form">
			<input type="text" name="name" id="name" placeholder="Fruit Name" />
			<input
				type="text"
				name="imageUrl"
				id="Fruit-image"
				placeholder="Fruit Image"
			/>
			<textarea
				id="fruit-description"
				name="description"
				placeholder="Description"
				rows="10"
				cols="50"
			></textarea>
			<textarea
				id="fruit-nutrition"
				name="nutrition"
				placeholder="Nutrition"
				rows="10"
				cols="50"
			></textarea>
			<button type="submit">Add Fruit</button>
		</form>
	</div>
</section>`;

export function addFruitPage(ctx) {
	ctx.render(createFruitTemplate(createSubmitHandler(createForm)));

	async function createForm(data, form) {
		if (Object.values(data).some((x) => x === '')) {
			alert('All fields are required');
		} else {
			await creteFruit(data);
			form.reset();
			//TODO user redirect location from reqirements
			ctx.page.redirect('/catalog');
		}
	}
}
