global.if_conveyor_items = [
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

global.if_generators = [
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

global.if_infinity_tools = [
    "industrialforegoing:infinity_drill",
    "industrialforegoing:infinity_saw",
    "industrialforegoing:infinity_hammer",
    "industrialforegoing:infinity_trident",
    "industrialforegoing:infinity_launcher",
    "industrialforegoing:infinity_nuke",
    "industrialforegoing:infinity_backpack",
    "industrialforegoing:infinity_charger"
]

global.hide_in_emi_misc = [
    "industrialforegoing:dryrubber",
    "industrialforegoing:latex_processing_unit",
    "industrialforegoing:mycelial_reactor",
    "industrialforegoing:infinity_charger",
    "techreborn:iron_alloy_furnace",
    "techreborn:basic_solar_panel",
    "techreborn:fusion_control_computer"
]

global.solar_panels = [
    "techreborn:basic_solar_panel",
    "techreborn:advanced_solar_panel",
    "techreborn:advanced_solar_panel",
    "techreborn:industrial_solar_panel",
    "techreborn:ultimate_solar_panel"
]

// to remove from Create's pressing and leave in TR Compressor/etc.
global.advanced_plates = [
    "iridium",
    "tungstensteel",
    "iridium_alloy",
    "chromium",
    "platinum",
    "tungsten",
    "titanium",
    "advanced_alloy",
    "steel",
    "refined_iron",
    "aluminum"
]


global.add_custom_rolling_recipe = function (_event, [_input, _input_count, _input_type], [_output, _output_count]) {
    let _ingredients = { id: `kubejs_${_input}`, count: _input_count }

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

global.add_rolling_machine_rod_recipe = function (_event, _input, _output) {
    _event.recipes.techreborn.rolling_machine({
        power: 10,
        time: 200,
        pattern: [
            ' A ',
            ' A ',
            ' A '
        ],
        key: {
            A: { tag: _input },
        },
        result: { id: _output, count: 6 }
    })
}

global.add_wiremill_create_wire = function (_event, _input, [_output, _output_count]) {
    _event.recipes.techreborn.wire_mill({
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