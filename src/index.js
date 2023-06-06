import React from 'react';
import ReactDom from 'react-dom/client';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<>
			<Header />
			<Menu />
			<Footer />
		</>
	);
}

function Header() {
	return <h1>Fast react Pizza co.</h1>;
}
function Menu() {
	return (
		<>
			<Pizza />
			<Pizza />
			<Pizza />
		</>
	);
}
function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	return (
		<footer>{new Date().toLocaleTimeString()}. We're currently open!</footer>
	);
}

function Pizza() {
	return (
		<>
			<img src='pizzas/focaccia.jpg' alt='' />
			<h2>Focaccia</h2>
			<p>Bread with italian olive oil and rosemary</p>
		</>
	);
}

const rootEl = document.getElementById('root');
const root = ReactDom.createRoot(rootEl);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
