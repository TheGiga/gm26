/*
TODO:
think about ways to gate TR a bit more behind some Create stuff, Crafts and Additions materials perhaps

sulfur dust recipe from sulfur that generated with Vanilla Backport (?)

electric motor and alternator better recipes
*/

const if_conveyor_items = [
  "industrialforegoing:conveyor", 
  "industrialforegoing:conveyor_extraction_upgrade",
  "industrialforegoing:conveyor_dropping_upgrade",
  "industrialforegoing:conveyor_insertion_upgrade",
  "industrialforegoing:conveyor_detection_upgrade",
  "industrialforegoing:conveyor_bouncing_upgrade",
  "industrialforegoing:conveyor_blinking_upgrade",
  "industrialforegoing:conveyor_splitting_upgrade",
  "industrialforegoing:item_transporter_type",
  "industrialforegoing:fluid_transporter_type",
  "industrialforegoing:world_transporter_type"
]

const if_generators = [
  "industrialforegoing:pitiful_generator",
  "industrialforegoing:bioreactor",
  "industrialforegoing:biofuel_generator",
  "industrialforegoing:mycelial_furnace",
  "industrialforegoing:mycelial_slimey",
  "industrialforegoing:mycelial_culinary",
  "industrialforegoing:mycelial_potion",
  "industrialforegoing:mycelial_disenchantment",
  "industrialforegoing:mycelial_ender",
  "industrialforegoing:mycelial_explosive",
  "industrialforegoing:mycelial_frosty",
  "industrialforegoing:mycelial_halitosis",
  "industrialforegoing:mycelial_magma",
  "industrialforegoing:mycelial_pink",
  "industrialforegoing:mycelial_death",
  "industrialforegoing:mycelial_rocket",
  "industrialforegoing:mycelial_crimed",
  "industrialforegoing:mycelial_meatallurgic",
]

const if_infinity_tools = [
  "industrialforegoing:infinity_drill",
  "industrialforegoing:infinity_saw",
  "industrialforegoing:infinity_hammer",
  "industrialforegoing:infinity_trident",
  "industrialforegoing:infinity_launcher",
  "industrialforegoing:infinity_nuke",
  "industrialforegoing:infinity_backpack",
  "industrialforegoing:infinity_charger"
]

const hide_in_emi_misc = [
  "industrialforegoing:dryrubber",
  "industrialforegoing:latex_processing_unit",
  "industrialforegoing:mycelial_reactor",
  "industrialforegoing:infinity_charger",
  "techreborn:iron_alloy_furnace",
  "techreborn:basic_solar_panel"
]

const solar_panels = [
  "techreborn:basic_solar_panel", 
  "techreborn:advanced_solar_panel", 
  "techreborn:advanced_solar_panel", 
  "techreborn:industrial_solar_panel", 
  "techreborn:ultimate_solar_panel"
]

// to remove from Create's pressing and leave in TR Compressor/etc.
const advanced_plates = [
  "iridium",
  "tungstensteel",
  "iridium_alloy",
  "chromium",
  "platinum",
  "tungsten",
  "titanium",
  "advanced_alloy",
  "steel"
]


function add_custom_rolling_recipe(_event, [_input, _input_count, _input_type], [_output, _output_count]) {
  let _ingredients = {id: `kubejs_${_input}`, count: _input_count}

  if (_input_type == 'tag') {
    _ingredients.tag = _input
  } else {
    _ingredients.item = _input
  }
  
  _event.custom({
    type: "createaddition:rolling",
    ingredients: [_ingredients],
    results: [{
      id: _output,
      count: _output_count,
    }]
  })
}

function add_rolling_machine_rod_recipe(_event, _input, _output) {
  _event.recipes.techreborn.rolling_machine({
    power: 10,
    time: 200,
    pattern: [
      ' A ',
      ' A ',
      ' A '
    ],
    key: {
      A: {tag: _input},
    },
    result: { id: _output, count: 6 }
  })
}

// remove OP tech reborn villagers
MoreJS.villagerTrades(event => {
  event.removeTrades({ professions: [ 'techreborn:electrician', 'techreborn:metallurgist' ] })
})

RecipeViewerEvents.removeEntries('item', event => {

  hide_in_emi_misc.forEach(item => {
      event.remove(item)
    })

  if_conveyor_items.forEach(item => {
    event.remove(item)
  })

  if_infinity_tools.forEach(item => {
    event.remove(item)
  })

  if_generators.forEach(item => {
    event.remove(item)
  })
})

ServerEvents.tags('item', event => {
  event.add('c:dusts/saw', 'mekanism:sawdust')
})

ServerEvents.recipes(event => {
  // Tech Reborn
  /* change morered red alloy recipe to use tech reborn alloy smelter
  event.remove({output: 'morered:red_alloy_ingot'})
  event.recipes.techreborn.alloy_smelter({
    power: 10,
    time: 200,
    ingredients: [
      { item: "minecraft:copper_ingot" },
      { item: "minecraft:redstone" }
    ],
    outputs: [
      { id: "morered:red_alloy_ingot", count: 2 }
    ]
  })*/

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

  // create sheets compressor recipes
  event.recipes.techreborn.compressor({
    power: 10,
    time: 200,
    ingredients: [
      { item: "create:andesite_alloy" }
    ],
    outputs: [
      { id: "createdeco:andesite_sheet", count: 1 }
    ]
  })

  event.recipes.techreborn.compressor({
    power: 10,
    time: 200,
    ingredients: [
      { item: "createdeco:industrial_iron_ingot" }
    ],
    outputs: [
      { id: "createdeco:industrial_iron_sheet", count: 1 }
    ]
  })

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

  // remove trim crafting
  event.remove({output: '#minecraft:trim_templates', mod: 'techreborn'})

  // remove basic solar panel (useless deadass) + change solar crafts
  solar_panels.forEach(item => {
    event.remove({input: item})
    event.remove({output: item})
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
    {output: 'mekanismgenerators:solar_panel'},
    'mekanism:alloy_infused',
    '#c:plates/silver'
  )


  // brass casing easier recipe through TR
  event.recipes.techreborn.rolling_machine({
    power: 7,
    time: 175,
    pattern: [
      ' A ',
      'BAB',
      ' A '
    ],
    key: {
      A: {item: 'techreborn:wood_plate'},
      B: {item: 'techreborn:brass_plate'}
    },
    result: { id: "create:brass_casing", count: 3 }
  })

  // rolling machine rods
  add_rolling_machine_rod_recipe(event, 'c:ingots/copper', 'createaddition:copper_rod')
  add_rolling_machine_rod_recipe(event, 'c:ingots/iron', 'createaddition:iron_rod')
  add_rolling_machine_rod_recipe(event, 'c:ingots/gold', 'createaddition:gold_rod')
  add_rolling_machine_rod_recipe(event, 'c:ingots/electrum', 'createaddition:electrum_rod')
  add_rolling_machine_rod_recipe(event, 'c:ingots/brass', 'createaddition:brass_rod')


  event.remove({output: 'techreborn:basic_machine_frame'})
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
  
  event.remove({output: 'techreborn:compressor'})
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

  event.remove({output: 'techreborn:grinder'})
  event.shaped(
    Item.of('techreborn:grinder'),
    [
      'ABA',
      'ECE',
      'ADA'
    ],
    {
      A: '#c:plates/iron',
      B: 'create:millstone',
      C: 'techreborn:basic_machine_frame',
      D: 'create:depot',
      E: 'techreborn:electronic_circuit'
    }
  )

  event.remove({output: 'techreborn:extractor'})
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

  event.remove({output: 'techreborn:electric_furnace'})
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

  event.remove({output: 'techreborn:recycler'})
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
    {output: 'techreborn:scrapboxinator'},
    'minecraft:dirt',
    'techreborn:compressor'
  )
  

  event.remove({output: 'techreborn:iron_alloy_furnace'})
  event.remove({output: 'techreborn:alloy_smelter'})
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

  event.replaceInput(
    { output: 'techreborn:matter_fabricator' },
    'techreborn:extractor',
    'mekanism:chemical_crystallizer'
  )

  event.replaceInput(
    { output: 'techreborn:wire_mill' },
    'techreborn:extractor',
    'createaddition:rolling_mill'
  )
  

  // remove refined iron plate from smelting and blasting (only compressor)
  event.remove({ output: '#c:plates/refined_iron', type: 'minecraft:blasting'})
  event.remove({ output: '#c:plates/refined_iron', type: 'minecraft:smelting'})

  // generators
  event.remove({output: 'techreborn:solid_fuel_generator'})
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

  // change cable recipes
  event.remove({output: 'techreborn:hv_cable', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'techreborn:tin_cable', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'techreborn:gold_cable', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'techreborn:copper_cable', type: 'minecraft:crafting_shaped'})

  event.remove({output: 'techreborn:insulated_hv_cable', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'techreborn:insulated_tin_cable', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'techreborn:insulated_gold_cable', type: 'minecraft:crafting_shaped'})
  event.remove({output: 'techreborn:insulated_copper_cable', type: 'minecraft:crafting_shaped'})

  function add_wiremill_create_wire(_input, [_output, _output_count]) {
    event.recipes.techreborn.wire_mill({
      power: 3,
      time: 50,
      ingredients: [
        { item: _input },
      ],
      outputs: [
        { id: _output, count: _output_count }
      ]
    })
  }

  add_wiremill_create_wire('techreborn:copper_cable', ['createaddition:copper_wire', 3])
  add_wiremill_create_wire('techreborn:gold_cable', ['createaddition:gold_wire', 3])
  add_wiremill_create_wire('techreborn:hv_cable', ['createaddition:iron_wire', 3])
  add_wiremill_create_wire('techreborn:electrum_plate', ['createaddition:electrum_wire', 3])

  // Create+
  event.remove({output: 'createaddition:gold_wire', type: 'createaddition:rolling'})
  event.remove({output: 'createaddition:iron_wire', type: 'createaddition:rolling'})
  event.remove({output: 'createaddition:copper_wire', type: 'createaddition:rolling'})

  add_custom_rolling_recipe(event, ['c:plates/tin', 1, 'tag'], ['techreborn:tin_cable', 2])
  add_custom_rolling_recipe(event, ['c:plates/copper', 1, 'tag'], ['techreborn:copper_cable', 2])
  add_custom_rolling_recipe(event, ['c:plates/gold', 1, 'tag'], ['techreborn:gold_cable', 2])
  add_custom_rolling_recipe(event, ['c:plates/iron', 1, 'tag'], ['techreborn:hv_cable', 2])

  add_custom_rolling_recipe(event, ['techreborn:copper_cable', 1, 'item'], ['createaddition:copper_wire', 2])
  add_custom_rolling_recipe(event, ['techreborn:hv_cable', 1, 'item'], ['createaddition:iron_wire', 2])
  add_custom_rolling_recipe(event, ['techreborn:gold_cable', 1, 'item'], ['createaddition:gold_wire', 2])

  // replace all dried kelp usage in create with TR rubber
  event.replaceInput(
    { input: 'minecraft:dried_kelp', mod: 'create'},
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
  advanced_plates.forEach(item => {
    event.remove({output: `#c:plates/${item}`, type: 'create:pressing'})
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


  // Mekanism
  event.remove({output: 'mekanismgenerators:heat_generator'})
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

  event.remove({output: 'mekanism:steel_casing'})
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
    { output: 'mekanism:cardboard_box'},
    'mekanism:sawdust',
    'create:cardboard'
  )

  event.replaceInput(
    {output: 'mekanism:upgrade_speed'},
    '#c:dusts/osmium',
    'techreborn:overclocker_upgrade'
  )

  event.replaceInput(
    {output: 'mekanism:upgrade_energy'},
    '#c:dusts/gold',
    'techreborn:energy_storage_upgrade'
  )

  // make alloys slightly harder
  event.replaceInput(
    {output: '#mekanism:alloys/infused'},
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

  event.remove({output: 'mekanism:enrichment_chamber'})
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

  event.remove({output: 'mekanism:precision_sawmill'})
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

  // certus quartz enriching
  event.remove({ id: 'ae2cs:pulverizer/certus_quartz_crystal' })
  event.remove({ id: 'jaopca:mekanism.ore_to_material.certus_quartz' })
  event.recipes.mekanism.enriching({
    input: { tag: 'c:ores/certus_quartz' },
    output: { id: 'ae2:certus_quartz_crystal', count: 6}
  })


  // Industrial Foregoing
  // remove conveyors (Create dupe)
  if_conveyor_items.forEach(item => {
    event.remove({output: item})
  });

  // remove infinity tools (im a hater)
  if_infinity_tools.forEach(item => {
    event.remove({output: item})
  })

  if_generators.forEach(item => {
    event.remove({output: item})
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
  event.remove({output: "industrialforegoing:latex_processing_unit"})
  event.replaceInput(
    { input: 'industrialforegoing:dryrubber'},
    'industrialforegoing:dryrubber',
    'techreborn:rubber'
  )


  // AE2
  event.replaceInput(
    { input: '#c:ingots/iron', mod: 'ae2'},
    '#c:ingots/iron',
    '#c:plates/refined_iron'
  )

  event.replaceInput(
    { input: '#c:ingots/iron', mod: 'ae2cs'},
    '#c:ingots/iron',
    '#c:plates/refined_iron'
  )

  event.replaceInput(
    { input: '#c:ingots/copper', mod: 'ae2'},
    '#c:ingots/copper',
    '#c:plates/copper'
  )

  event.replaceInput(
    { input: '#c:ingots/gold', mod: 'ae2'},
    '#c:ingots/gold',
    '#c:plates/gold'
  )

  event.replaceInput(
    { output: 'ae2cs:crystal_pulverizer' },
    'ae2cs:quartz_grindstone',
    'techreborn:grinder'
  )
  
  event.remove({ output: 'ae2:inscriber' })
  event.shaped(
    Item.of('ae2:inscriber'),
    [
      'ABA',
      'DCA',
      'ABA'
    ],
    {
      A: '#c:plates/refined_iron',
      B: 'minecraft:piston',
      C: 'techreborn:compressor',
      D: '#c:plates/copper',
    }
  )

})