ClientEvents.lang('en_us', event => {
    // Industrial Foregoing
    event.renameItem('industrialforegoing:machine_frame_pity', 'Basic Plastic Machine Frame')
    event.renameItem('industrialforegoing:machine_frame_simple', 'Simple Plastic Machine Frame')
    event.renameItem('industrialforegoing:machine_frame_advanced', 'Advanced Plastic Machine Frame')
    event.renameItem('industrialforegoing:machine_frame_supreme', 'Supreme Plastic Machine Frame')
})

ItemEvents.modifyTooltips(event => {
    // remove fusion reactor mention from TR fusion coil (now a crafting ingredient for mek)
    event.modify('techreborn:fusion_coil', tooltip => {
        tooltip.removeLine(1)
    })
})
