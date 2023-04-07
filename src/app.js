import page from '../node_modules/page/page.mjs';
import { html, render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './utils.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './views/dashboard.js';
import { addFruitPage } from './views/addFruit.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/editPage.js';
import { searchShow } from './views/searchPage.js';

let root = document.getElementById('wrapper');

page('index.html', '/');
page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/addFruits', addFruitPage);
page('/search', searchShow);
page('/register', registerPage);
page('/logout', logoutAction);
page.start();

//Middleware

function decorateContext(ctx, next) {
	ctx.render = renderView;

	next();
}

//TODO inject dependencies

function renderView(content) {
	const userData = getUserData();

	render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx) {
	logout();
	ctx.page.redirect('/');
}

// Continue from 1:52:30
