import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFruitById, editFruit } from '../data/services.js';
import { createSubmitHandler } from '../utils.js';

const editTemplate = (fruit, onSubmit) => html` <section id="edit">
	<div class="form">
		<h2>Edit Fruit</h2>
		<form @submit=${onSubmit} class="edit-form">
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Fruit Name"
				value=${fruit.name}
			/>
			<input
				type="text"
				name="imageUrl"
				id="Fruit-image"
				placeholder="Fruit Image URL"
				value="${fruit.imageUrl}"
			/>
			<textarea
				id="fruit-description"
				name="description"
				placeholder="Description"
				rows="10"
				cols="50"
				.value="${fruit.description}"
			></textarea>
			<textarea
				id="fruit-nutrition"
				name="nutrition"
				placeholder="Nutrition"
				rows="10"
				cols="50"
				.value="${fruit.nutrition}"
			></textarea>
			<button type="submit">post</button>
		</form>
	</div>
</section>`;

export async function editPage(ctx) {
	const fruitId = ctx.params.id;
	const fruit = await getFruitById(fruitId);

	ctx.render(editTemplate(fruit, createSubmitHandler(onSubmit)));

	async function onSubmit(data) {
		if (Object.values(data).some((x) => x === '')) {
			alert('All fields are required!');
		} else {
			await editFruit(fruitId, data);
			ctx.page.redirect(`/details/${fruitId}`);
		}
	}
}
