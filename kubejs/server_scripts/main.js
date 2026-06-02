/*
TODO:
think about ways to gate TR a bit more behind some Create stuff, Crafts and Additions materials perhaps

sulfur dust recipe from sulfur that generated with Vanilla Backport (?)

electric motor and alternator better recipes
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

RecipeViewerEvents.addInformation('item', event => {
	event.add(
		Item.of('techreborn:cell'), [
			"You can recycle any cell into an empty one in a shapeless 1 to 1 craft."
		]
	)
})

ServerEvents.tags('item', event => {
	event.add('c:dusts/saw', 'mekanism:sawdust')
})

ServerEvents.recipes(event => {
	// misc

})