import { get, put, post, del } from './api.js';

export async function getAllFruits() {
	return get('/data/fruits?sortBy=_createdOn%20desc');
}

export async function creteFruit(data) {
	return post('/data/fruits', data);
}

export async function getFruitById(id) {
	return get(`/data/fruits/${id}`);
}

export async function deleteFruit(id) {
	return del(`/data/fruits/${id}`);
}

export async function editFruit(id, fruit) {
	return put(`/data/fruits/${id}`, fruit);
}

export async function searchFruit(query) {
	return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}
