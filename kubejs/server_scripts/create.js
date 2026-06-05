ServerEvents.recipes(event => {
    // Create+
    event.remove({ output: 'createaddition:gold_wire', type: 'createaddition:rolling' })
    event.remove({ output: 'createaddition:iron_wire', type: 'createaddition:rolling' })
    event.remove({ output: 'createaddition:copper_wire', type: 'createaddition:rolling' })

    global.add_custom_rolling_recipe(event, ['c:plates/tin', 1, 'tag'], ['techreborn:tin_cable', 2])
    global.add_custom_rolling_recipe(event, ['c:plates/copper', 1, 'tag'], ['techreborn:copper_cable', 2])
    global.add_custom_rolling_recipe(event, ['c:plates/gold', 1, 'tag'], ['techreborn:gold_cable', 2])
    global.add_custom_rolling_recipe(event, ['c:plates/iron', 1, 'tag'], ['techreborn:hv_cable', 2])

    global.add_custom_rolling_recipe(event, ['techreborn:copper_cable', 1, 'item'], ['createaddition:copper_wire', 2])
    global.add_custom_rolling_recipe(event, ['techreborn:hv_cable', 1, 'item'], ['createaddition:iron_wire', 2])
    global.add_custom_rolling_recipe(event, ['techreborn:gold_cable', 1, 'item'], ['createaddition:gold_wire', 2])

    // replace all dried kelp usage in create with TR rubber
    event.replaceInput(
        { input: 'minecraft:dried_kelp', mod: 'create' },
        'minecraft:dried_kelp',
        'techreborn:rubber'
    )

    event.replaceInput(
        { output: 'createpropulsion:cable' },
        'minecraft:redstone',
        'techreborn:copper_cable'
    )

    event.replaceInput(
        { output: 'createpropulsion:cable' },
        'minecraft:black_dye',
        'techreborn:rubber'
    )

    event.replaceInput(
        { output: 'createpropulsion:coral_generator' },
        'create:stockpile_switch',
        'techreborn:semi_fluid_generator'
    )

    // remove some plate pressing crafts (too OP and gating)
    global.advanced_plates.forEach(item => {
        event.remove({ output: `#c:plates/${item}`, type: 'create:pressing' })
    })

    // better precision mechanism craft
    event.recipes.techreborn.assembling_machine({
        power: 10,
        time: 500,
        ingredients: [
            { tag: "c:nuggets/refined_iron", count: 3 },
            { tag: "c:plates/gold", count: 1 }
        ],
        outputs: [
            { id: "create:precision_mechanism", count: 1 }
        ]
    })

    // better gyroscopic mechanism craft
    event.recipes.techreborn.assembling_machine({
        power: 10,
        time: 500,
        ingredients: [
            { tag: "c:ingots/andesite_alloy", count: 2 },
            { tag: "c:nuggets/brass", count: 1 }
        ],
        outputs: [
            { id: "simulated:gyroscopic_mechanism", count: 1 }
        ]
    })

    // alternator and electric motor crafts
    event.recipes.techreborn.rolling_machine({
        power: 20,
        time: 360,
        pattern: [
            'ABA',
            'BCB',
            'ABA'
        ],
        key: {
            A: { tag: 'c:plates/iron' },
            B: { item: 'createaddition:copper_spool' },
            C: { tag: 'c:rods/iron' }
        },
        result: { id: "createaddition:alternator", count: 1 }
    })

    event.recipes.techreborn.rolling_machine({
        power: 20,
        time: 360,
        pattern: [
            'ABA',
            'BCB',
            'ADA'
        ],
        key: {
            A: { tag: 'c:plates/brass' },
            B: { item: 'createaddition:copper_spool' },
            C: { tag: 'c:rods/iron' },
            D: { item: 'createaddition:capacitor'}
        },
        result: { id: "createaddition:electric_motor", count: 1 }
    })

    // brass casing easier recipe through TR
    event.recipes.techreborn.rolling_machine({
        power: 7,
        time: 180,
        pattern: [
            ' A ',
            'BAB',
            ' A '
        ],
        key: {
            A: { item: 'techreborn:wood_plate' },
            B: { item: 'techreborn:brass_plate' }
        },
        result: { id: "create:brass_casing", count: 3 }
    })

    // crushing wheel craft
    event.recipes.techreborn.rolling_machine({
        power: 7,
        time: 180,
        pattern: [
            ' A ',
            'ABA',
            ' A '
        ],
        key: {
            A: { item: 'create:andesite_alloy_block' },
            B: { tag: 'c:stones' }
        },
        result: { id: "create:crushing_wheel", count: 2 }
    })

    // rolling machine rods
    global.add_rolling_machine_rod_recipe(event, 'c:ingots/copper', 'createaddition:copper_rod')
    global.add_rolling_machine_rod_recipe(event, 'c:ingots/iron', 'createaddition:iron_rod')
    global.add_rolling_machine_rod_recipe(event, 'c:ingots/gold', 'createaddition:gold_rod')
    global.add_rolling_machine_rod_recipe(event, 'c:ingots/electrum', 'createaddition:electrum_rod')
    global.add_rolling_machine_rod_recipe(event, 'c:ingots/brass', 'createaddition:brass_rod')
})