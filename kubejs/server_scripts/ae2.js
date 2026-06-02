ServerEvents.recipes(event => {
    // AE2
    event.replaceInput(
        { input: '#c:ingots/iron', mod: 'ae2' },
        '#c:ingots/iron',
        '#c:plates/refined_iron'
    )

    event.replaceInput(
        { input: '#c:ingots/iron', mod: 'ae2cs' },
        '#c:ingots/iron',
        '#c:plates/refined_iron'
    )

    event.replaceInput(
        { input: '#c:ingots/copper', mod: 'ae2' },
        '#c:ingots/copper',
        '#c:plates/copper'
    )

    event.replaceInput(
        { input: '#c:ingots/gold', mod: 'ae2' },
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