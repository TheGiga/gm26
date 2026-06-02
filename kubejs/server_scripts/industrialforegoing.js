ServerEvents.recipes(event => {
    // Industrial Foregoing
    // remove conveyors (Create dupe)
    global.if_conveyor_items.forEach(item => {
        event.remove({ output: item })
    });

    // remove infinity tools (im a hater)
    global.if_infinity_tools.forEach(item => {
        event.remove({ output: item })
    })

    global.if_generators.forEach(item => {
        event.remove({ output: item })
    })

    // mycelial reactor is useless since mycelial generators are removed
    event.remove({ id: 'industrialforegoing:dissolution_chamber/mycelial_reactor' })

    // pity frames custom recipe
    event.remove({ output: 'industrialforegoing:machine_frame_pity' })
    event.shaped(
        Item.of('industrialforegoing:machine_frame_pity'),
        [
            'ABA',
            'BEB',
            'CDC'
        ],
        {
            A: 'industrialforegoing:plastic',
            B: 'techreborn:wood_plate',
            C: '#c:plates/refined_iron',
            D: 'minecraft:redstone_block',
            E: 'techreborn:basic_machine_frame'
        }
    )

    // replace buckets in dissolution chamber recipe with chemical reactors
    event.replaceInput(
        { output: 'industrialforegoing:dissolution_chamber' },
        'minecraft:bucket',
        'techreborn:chemical_reactor'
    )

    // replace dry rubber with TR rubber
    event.remove({ output: "industrialforegoing:latex_processing_unit" })
    event.replaceInput(
        { input: 'industrialforegoing:dryrubber' },
        'industrialforegoing:dryrubber',
        'techreborn:rubber'
    )
})