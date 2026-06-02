ServerEvents.recipes(event => {
    // Mekanism
    event.remove({ output: 'mekanismgenerators:heat_generator' })
    event.shaped(
        Item.of('mekanismgenerators:heat_generator'),
        [
            'DAD',
            'ACA',
            'BAB'
        ],
        {
            A: '#c:plates/steel',
            B: 'mekanism:ingot_osmium',
            C: 'techreborn:solid_fuel_generator',
            D: 'techreborn:red_cell_battery'
        }
    )

    event.remove({ output: 'mekanism:steel_casing' })
    event.shaped(
        Item.of('mekanism:steel_casing'),
        [
            'DAD',
            'ACA',
            'BAB'
        ],
        {
            A: '#c:plates/steel',
            B: 'mekanism:ingot_osmium',
            C: 'techreborn:advanced_machine_frame',
            D: '#c:glass_blocks/cheap'
        }
    )

    event.replaceInput(
        { input: 'mekanism:sawdust' },
        'mekanism:sawdust',
        '#c:dusts/saw'
    )

    event.replaceInput(
        { output: 'mekanism:cardboard_box' },
        'mekanism:sawdust',
        'create:cardboard'
    )

    event.replaceInput(
        { output: 'mekanism:upgrade_speed' },
        '#c:dusts/osmium',
        'techreborn:overclocker_upgrade'
    )

    event.replaceInput(
        { output: 'mekanism:upgrade_energy' },
        '#c:dusts/gold',
        'techreborn:energy_storage_upgrade'
    )

    // make alloys slightly harder
    event.replaceInput(
        { output: '#mekanism:alloys/infused' },
        'minecraft:copper_ingot',
        '#c:ingots/brass'
    )

    /*event.replaceInput(
      {output: '#c:circuits/basic', type: 'mekanism:metallurgic_infusing'},
      'mekanism:ingot_osmium',
      'techreborn:electronic_circuit'
    )*/

    // custom mek base machine crafts
    event.remove({ output: 'mekanism:metallurgic_infuser' })
    event.shaped(
        Item.of('mekanism:metallurgic_infuser'),
        [
            'ABA',
            'ACA',
            'EDE'
        ],
        {
            A: '#c:plates/steel',
            B: 'techreborn:chemical_reactor',
            C: 'mekanism:steel_casing',
            D: 'techreborn:alloy_smelter',
            E: '#c:plates/tungstensteel'
        }
    )

    event.remove({ output: 'mekanism:enrichment_chamber' })
    event.shaped(
        Item.of('mekanism:enrichment_chamber'),
        [
            'ABC',
            'FDF',
            'EBE'
        ],
        {
            A: 'techreborn:grinder',
            B: '#c:circuits/basic',
            C: 'techreborn:chemical_reactor',
            D: 'mekanism:steel_casing',
            E: '#c:plates/steel',
            F: 'techreborn:advanced_circuit'
        }
    )

    event.remove({ output: 'mekanism:precision_sawmill' })
    event.shaped(
        Item.of('mekanism:precision_sawmill'),
        [
            'DAD',
            'BCB',
            'DBD'
        ],
        {
            A: 'techreborn:industrial_sawmill',
            B: '#c:circuits/advanced',
            C: 'mekanism:steel_casing',
            D: '#c:plates/steel',
        }
    )

    event.replaceInput(
        { output: 'mekanism:osmium_compressor' },
        'minecraft:bucket',
        'techreborn:compressor'
    )

    event.replaceInput(
        { output: 'mekanism:crusher' },
        'minecraft:lava_bucket',
        'techreborn:grinder'
    )

    event.replaceInput(
        { output: 'mekanism:purification_chamber' },
        'mekanism:ingot_osmium',
        'techreborn:iridium_plate'
    )

    event.replaceInput(
        { output: 'mekanism:energized_smelter' },
        '#c:glass_blocks/cheap',
        'techreborn:electric_furnace'
    )

    event.replaceInput(
        { output: 'mekanism:electrolytic_separator' },
        '#c:ingots/iron',
        '#c:plates/steel'
    )

    event.replaceInput(
        { output: 'mekanism:chemical_injection_chamber' },
        '#c:ingots/gold',
        '#c:plates/iridium_alloy'
    )

    event.remove({ output: 'mekanismgenerators:wind_generator' })
    event.shaped(
        Item.of('mekanismgenerators:wind_generator'),
        [
            'ABA',
            'BCB',
            'DED',
        ],
        {
            A: '#c:ingots/osmium',
            B: '#c:plates/magnalium',
            C: 'techreborn:wind_mill',
            D: 'mekanism:energy_tablet',
            E: '#c:circuits/basic'
        }
    )

    // certus quartz enriching
    event.remove({ id: 'ae2cs:pulverizer/certus_quartz_crystal' })
    event.remove({ id: 'jaopca:mekanism.ore_to_material.certus_quartz' })
    event.recipes.mekanism.enriching({
        input: { tag: 'c:ores/certus_quartz' },
        output: { id: 'ae2:certus_quartz_crystal', count: 6 }
    })
})