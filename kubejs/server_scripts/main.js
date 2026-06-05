/*
TODO:
think about ways to gate TR a bit more behind some Create stuff, Crafts and Additions materials perhaps

sulfur dust recipe from sulfur that generated with Vanilla Backport (?)

*/

// remove OP tech reborn villagers
MoreJS.villagerTrades(event => {
	event.removeTrades({ professions: ['techreborn:electrician', 'techreborn:metallurgist'] })
})

RecipeViewerEvents.removeEntries('item', event => {

	global.hide_in_emi_misc.forEach(item => {
		event.remove(item)
	})

	global.if_conveyor_items.forEach(item => {
		event.remove(item)
	})

	global.if_infinity_tools.forEach(item => {
		event.remove(item)
	})

	global.if_generators.forEach(item => {
		event.remove(item)
	})
})

RecipeViewerEvents.removeCategories(event => {
	event.remove('industrialforegoing:mycellial_meatallurgic')
})

RecipeViewerEvents.addInformation('item', event => {
	event.add(
		Item.of('techreborn:cell'), [
			"You can recycle any cell into an empty one in an Extractor."
		]
	)

	event.add(
		Item.of('techreborn:uu_matter'), [
			"Obtainable in Matter Fabricator by inputing significant amounts of energy."
		]
	)
})

ServerEvents.tags('item', event => {
	event.add('c:dusts/saw', 'mekanism:sawdust')
})

ServerEvents.recipes(event => {
	// misc

})