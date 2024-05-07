/*

    ! NOTICE: Follow this key order. Leave each string value empty if not applicable.
        - remark: 'This is a label for this particular medium.'
        - imgSrc: 'https://www.flickr.com/eerreeoo'

*/

const dir_home = '/assets/home/gallery/'
const dir_hackathon = '/assets/hackathon/gallery/'

interface GalleryPiece {
    remark: string,
    imgSrc: string
}

export const HomeCollection: GalleryPiece[] = [
    {
        remark: '🌇 Waking Up in Downtown San Francisco\n@ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_downtown.jpg'
    },
    {
        remark: '🍽️ Mediterranean Dinner @ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_dinner.jpg'
    },
    {
        remark: '🧋 Fall Boba Social @ STEM Center 12-10-2022',
        imgSrc: dir_home + 'boba_social_2022.jpg'
    },
    {
        remark: '🌃 The Graveyard Shift @ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_rundown.jpg'
    },
    {
        remark: '🌄 "Expand Your Horizons 2022"\nTinkerCAD 3D Design Printing Close-Up',
        imgSrc: dir_home + 'expand_print_closeup.jpg'
    },
    {
        remark: '🌄 "Expand Your Horizons 2022" - TinkerCAD 3D Design Workshop 1',
        imgSrc: dir_home + 'expand_tinkercad_ws1.jpg'
    },
    {
        remark: '🚄 Arriving Downtown The City\n@ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_sfarrival.png'
    },
    {
        remark: '🌄 "Expand Your Horizons 2022" - Games with Scratch Workshop 1',
        imgSrc: dir_home + 'eyh_ws1.jpg'
    },
    {
        remark: '⚡ Intro to Arduino Workshop 12-10-2022',
        imgSrc: dir_home + 'intro_arduino_2.jpg'
    },
    {
        remark: '🔰 Our Club Leadership and Members of 2022-2023',
        imgSrc: dir_home + 'leadership_2022.png'
    },
    {
        remark: '🔰 Our Club Officers of 2022-2023',
        imgSrc: dir_home + 'officers_2022.jpg'
    },
    {
        remark: '🌱 "Touching Grass" Hiking Trip: Feat. Chase',
        imgSrc: dir_home + 'touchgrass_chase360.jpg'
    },
    {
        remark: '🌱 "Touching Grass" Hiking Trip: Group Photo!',
        imgSrc: dir_home + 'touchgrass_group.jpg'
    },
    {
        remark: '🌱 "Touching Grass" Hiking Trip: Upward Trails',
        imgSrc: dir_home + 'touchgrass_hike.jpg'
    },
    {
        remark: '🌱 "Touching Grass" Hiking Trip\nLeaving Campus',
        imgSrc: dir_home + 'touchgrass_leaving.jpg'
    },
    {
        remark: '🌄 "Expand Your Horizons 2022" - Games with Scratch Workshop 2',
        imgSrc: dir_home + 'eyh_ws2.jpg'
    },
    {
        remark: '🌄 "Expand Your Horizons" - TinkerCAD 3D Design Workshop 2',
        imgSrc: dir_home + 'expand_tinkercad_ws2.jpg'
    },
    {
        remark: '🌄 "Expand Your Horizons 2022" - Games with Scratch Workshop Group Photo!',
        imgSrc: dir_home + 'eyh_group.jpg'
    },
    {
        remark: '🐕‍🦺 Boston Dog @ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_dog.png'
    },
    {
        remark: '😎 The Joeson Boys @ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_table.jpg'
    },
    {
        remark: '🚶 To The Metreon @ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_walking.png'
    },
    {
        remark: '🧋 The First Boba Social of Spring 2023 @ STEM Center',
        imgSrc: dir_home + 'boba_social_2023.png'
    },
    {
        remark: '🎮 Roblox Game Development - Experimental Tower Defense',
        imgSrc: dir_home + 'roblox_studio.png'
    },
    {
        remark: '✨ Blender Rendering of Skyline College',
        imgSrc: dir_home + 'blender.jpg'
    },
    {
        remark: '💪 Settling Outside Balcony Feat. Jonnald\n@ "CalHacks v10.0"',
        imgSrc: dir_home + 'calhacks_jonnald.jpg'
    },
    {
        remark: '🌉 Opening Night Group Photo feat. The Club and SFSU Friends @ "SFHacks 2024"',
        imgSrc: dir_home + 'sfhacks_group.jpg'
    }
]

export const HackathonCollection: GalleryPiece[] = [
    {
        remark: '✨ Blender Rendering of Skyline College',
        imgSrc: dir_hackathon + 'blender.jpg'
    },
    {
        remark: '💪 Settling Outside Balcony Feat. Jonnald\n@ "CalHacks v10.0"',
        imgSrc: dir_hackathon + 'calhacks_jonnald.jpg'
    },
    {
        remark: '🌉 Opening Night Group Photo feat. The Club and SFSU Friends @ "SFHacks 2024"',
        imgSrc: dir_hackathon + 'sfhacks_group.jpg'
    }
]