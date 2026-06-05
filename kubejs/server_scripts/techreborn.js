ServerEvents.recipes(event => {
    // cell recycling
    event.shapeless(
        'techreborn:cell',
        'techreborn:cell'
    )

    // replace refined iron ingot with osmium in circuit recipe
    event.replaceInput(
        { output: 'techreborn:electronic_circuit'},
        '#c:ingots/refined_iron',
        '#c:ingots/osmium'
    )

    // better andesite alloy recipe
    event.recipes.techreborn.alloy_smelter({
        power: 10,
        time: 100,
        ingredients: [
            { item: "minecraft:andesite" },
            { tag: "c:nuggets/iron" }
        ],
        outputs: [
            { id: "create:andesite_alloy", count: 2 }
        ]
    })

    // create cardboard compressor recipe
    event.recipes.techreborn.compressor({
        power: 3,
        time: 50,
        ingredients: [
            { item: "create:pulp" },
        ],
        outputs: [
            { id: "create:cardboard", count: 1 }
        ]
    })

    // silicon plate with ae2 silicon
    event.recipes.techreborn.compressor({
        power: 7,
        time: 150,
        ingredients: [
            { tag: "c:silicon" },
        ],
        outputs: [
            { id: "techreborn:silicon_plate", count: 1 }
        ]
    })

    // remove trim crafting
    event.remove({ output: '#minecraft:trim_templates', mod: 'techreborn' })

    // remove basic solar panel (useless deadass) + change solar crafts
    global.solar_panels.forEach(item => {
        event.remove({ input: item })
        event.remove({ output: item })
    })

    event.shaped(
        Item.of('techreborn:advanced_solar_panel'),
        [
            'AAA',
            'BBB',
            'DCD'
        ],
        {
            A: 'mekanismgenerators:solar_panel',
            B: '#c:plates/coal',
            C: 'techreborn:advanced_machine_frame',
            D: 'techreborn:advanced_circuit'
        }
    )

    event.shaped(
        Item.of('techreborn:industrial_solar_panel'),
        [
            'AAA',
            'BBB',
            'DCD'
        ],
        {
            A: 'mekanismgenerators:solar_panel',
            B: '#c:plates/lazurite',
            C: 'techreborn:advanced_solar_panel',
            D: 'techreborn:advanced_circuit'
        }
    )

    event.shaped(
        Item.of('techreborn:ultimate_solar_panel'),
        [
            'AAA',
            'BBB',
            'DCD'
        ],
        {
            A: 'mekanismgenerators:solar_panel',
            B: '#c:plates/platinum',
            C: 'techreborn:industrial_solar_panel',
            D: 'techreborn:industrial_circuit'
        }
    )

    event.shaped(
        Item.of('techreborn:quantum_solar_panel'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'techreborn:ultimate_solar_panel',
            B: 'techreborn:uu_matter',
        }
    )

    event.replaceInput(
        { output: 'mekanismgenerators:solar_panel' },
        'mekanism:alloy_infused',
        '#c:plates/silver'
    )


    event.remove({ output: 'techreborn:basic_machine_frame' })
    event.shaped(
        Item.of('techreborn:basic_machine_frame'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: '#c:plates/iron',
            B: 'create:brass_casing'
        }
    )

    event.remove({ output: 'techreborn:compressor' })
    event.shaped(
        Item.of('techreborn:compressor'),
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: '#c:plates/iron',
            B: 'create:mechanical_press',
            C: 'techreborn:basic_machine_frame',
            D: 'create:depot',
            E: 'techreborn:electronic_circuit'
        }
    )

    event.remove({ output: 'techreborn:grinder' })
    event.shaped(
        Item.of('techreborn:grinder'),
        [
            'AEA',
            'BCB',
            'ADA'
        ],
        {
            A: '#c:plates/iron',
            B: 'create:crushing_wheel',
            C: 'techreborn:basic_machine_frame',
            D: 'create:depot',
            E: 'techreborn:electronic_circuit'
        }
    )

    event.remove({ output: 'techreborn:extractor' })
    event.shaped(
        Item.of('techreborn:extractor'),
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: '#c:plates/iron',
            B: 'techreborn:treetap',
            C: 'techreborn:basic_machine_frame',
            D: 'create:basin',
            E: 'techreborn:electronic_circuit'
        }
    )

    event.remove({ output: 'techreborn:electric_furnace' })
    event.shaped(
        Item.of('techreborn:electric_furnace'),
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: '#c:plates/iron',
            B: 'create:encased_fan',
            C: 'techreborn:iron_furnace',
            D: 'create:depot',
            E: 'techreborn:electronic_circuit'
        }
    )

    event.remove({ output: 'techreborn:recycler' })
    event.shaped(
        Item.of('techreborn:recycler'),
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: '#c:plates/refined_iron',
            B: 'create:mechanical_mixer',
            C: 'techreborn:compressor',
            D: 'create:mechanical_saw',
            E: 'techreborn:electronic_circuit'
        }
    )

    event.replaceInput(
        { output: 'techreborn:scrapboxinator' },
        'minecraft:dirt',
        'techreborn:compressor'
    )


    event.remove({ output: 'techreborn:iron_alloy_furnace' })
    event.remove({ output: 'techreborn:alloy_smelter' })
    event.shaped(
        Item.of('techreborn:alloy_smelter'),
        [
            'ABA',
            'ECE',
            'ADA'
        ],
        {
            A: '#c:plates/refined_iron',
            B: 'create:mechanical_mixer',
            C: 'techreborn:advanced_machine_frame',
            D: 'create:basin',
            E: 'techreborn:electric_furnace'
        }
    )

    event.remove({ output: 'techreborn:matter_fabricator' })
    event.shaped(
        Item.of('techreborn:matter_fabricator'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'techreborn:energy_flow_chip',
            B: 'mekanism:pellet_antimatter',
            C: 'techreborn:industrial_machine_frame',
            D: 'techreborn:lapotronic_orb',
            E: 'mekanism:chemical_crystallizer'
        }
    )

    event.replaceInput(
        { output: 'techreborn:wire_mill' },
        'techreborn:extractor',
        'createaddition:rolling_mill'
    )

    // remove refined iron plate from smelting and blasting (only compressor)
    event.remove({ output: '#c:plates/refined_iron', type: 'minecraft:blasting' })
    event.remove({ output: '#c:plates/refined_iron', type: 'minecraft:smelting' })

    // generators
    event.remove({ output: 'techreborn:solid_fuel_generator' })
    event.shaped(
        Item.of('techreborn:solid_fuel_generator'),
        [
            'ECE',
            'BFB',
            'DAD'
        ],
        {
            A: 'createaddition:alternator',
            B: 'createaddition:copper_spool',
            C: 'createpropulsion:stirling_engine',
            D: 'createpropulsion:solid_burner',
            E: 'createaddition:capacitor',
            F: 'techreborn:basic_machine_frame'
        }
    )

    event.remove({ output: 'techreborn:wind_mill' })
    event.shaped(
        Item.of('techreborn:wind_mill'),
        [
            'EBE',
            'BAB',
            'DCD'
        ],
        {
            A: 'create:propeller',
            B: '#c:plates/magnalium',
            C: 'createaddition:alternator',
            D: 'techreborn:electronic_circuit',
            E: '#c:plates/refined_iron'
        }
    )

    // change cable recipes
    event.remove({ output: 'techreborn:hv_cable', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'techreborn:tin_cable', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'techreborn:gold_cable', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'techreborn:copper_cable', type: 'minecraft:crafting_shaped' })

    event.remove({ output: 'techreborn:insulated_hv_cable', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'techreborn:insulated_gold_cable', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'techreborn:insulated_copper_cable', type: 'minecraft:crafting_shaped' })

    global.add_wiremill_create_wire(event, 'techreborn:copper_cable', ['createaddition:copper_wire', 3])
    global.add_wiremill_create_wire(event, 'techreborn:gold_cable', ['createaddition:gold_wire', 3])
    global.add_wiremill_create_wire(event, 'techreborn:hv_cable', ['createaddition:iron_wire', 3])
    global.add_wiremill_create_wire(event, 'techreborn:electrum_plate', ['createaddition:electrum_wire', 3])

    // change nano helmet recipe
    event.remove({ output: 'techreborn:nano_helmet' })
    event.shaped(
        Item.of('techreborn:nano_helmet'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            A: '#c:plates/carbon',
            B: 'techreborn:advanced_circuit',
            C: 'techreborn:energy_crystal',
            D: 'techreborn:reinforced_glass',
            E: 'techreborn:lamp_led'
        }
    )

    // change nano saber recipe
    event.remove({ output: 'techreborn:nanosaber' })
    event.shaped(
        Item.of('techreborn:nanosaber'),
        [
            'AB ',
            'AB ',
            'DCD'
        ],
        {
            A: '#c:plates/carbon',
            B: '#c:plates/tungstensteel',
            C: 'techreborn:lapotron_crystal',
            D: '#c:alloys/elite',
        }
    )

    // remove fusion reactor in favor of mekanism (progression seems better this way)
    event.remove({ output: 'techreborn:fusion_control_computer' })
    event.remove({ type: 'techreborn:fusion_reactor' })
    event.remove({ id: 'techreborn:centrifuge/hydrogen_cell' })
    event.remove({ id: 'techreborn:centrifuge/deuterium_cell' })

    // replace buckets with cells for mass recipes
    event.replaceInput(
        {output: 'techreborn:thick_neutron_reflector'},
        'techreborn:beryllium_bucket',
        'techreborn:cell[techreborn:fluid="techreborn:beryllium"]'
    )

    event.replaceInput(
        {output: 'techreborn:helium_coolant_cell_60k'},
        'techreborn:helium_bucket',
        'techreborn:cell[techreborn:fluid="techreborn:helium"]'
    )

    // fix empty tag ae2 certus quartz dust in TR grinderw
    event.remove({ id: 'techreborn:grinder/certus_quartz_dust' })
    event.recipes.techreborn.grinder({
        power: 10,
        time: 200,
        ingredients: [
            { tag: "c:gems/certus_quartz" }
        ],
        outputs: [
            { id: "ae2:certus_quartz_dust", count: 1 }
        ]
    })
})