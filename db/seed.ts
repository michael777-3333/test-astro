import { db,User,Category,Todo } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id:'123456789',
			email:'pepito@gmail.com',
			username:'pepito'
		},
		{
			id:'987654321',
			email:'michael@gmail.com',
			username:'michael'
		}
	]),
	await db.insert(Category).values([
		{
			id:'123456789',
			label:'Software'
		},
		{
			id:'987645321',
			label:'Matematicas'
		},
	]), 
	await db.insert(Todo).values([
		{
			id:'120605',
			title:'Hablamos de software',
			description:'hablaremos de software esta vez',
			user_id:'987654321',
			category_id:'123456789'
		},
		{
			id:'050612',
			title:'Hablamos de matematicas',
			description:'hablaremos de matematicas esta vez',
			user_id:'123456789',
			category_id:'987645321'
		},
	])
}
