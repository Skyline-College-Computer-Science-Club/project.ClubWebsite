/*

    ! NOTICE: Follow this key order. Leave each string value empty if not applicable.
        - remark: 'This is a label for this particular medium.'
        - imgSrc: 'https://www.flickr.com/eerreeoo

*/

const dir_gallery = '/assets/home/gallery/'

interface GalleryPiece {
    remark: string,
    imgSrc: string
}

export const gallery: GalleryPiece[] = [
    {
        remark: 'STEM Center Boba Social 12/10/2022',
        imgSrc: dir_gallery + 'boba_social_2022.jpg'
    },
    {
        remark: 'Mediterranean Dinner @ CalHacks v10.0',
        imgSrc: dir_gallery + 'calhacks_dinner.jpg'
    },
    {
        remark: 'A Downtown Morning in San Francisco @ CalHacks v10.0',
        imgSrc: dir_gallery + 'calhacks_downtown.jpg'
    },
    {
        remark: 'The Graveyard Shift @ CalHacks v10.0',
        imgSrc: dir_gallery + 'calhacks_rundown.jpg'
    },
    {
        remark: 'Arriving in The City @ CalHacks v10.0',
        imgSrc: dir_gallery + 'calhacks_sfarrival.png'
    },
    {
        remark: 'Expand Your Horizons 2022 - TinkerCAD 3D Design Workshop #1',
        imgSrc: dir_gallery + 'expand_tinkercad_ws1.jpg'
    },
    {
        remark: 'Expand Your Horizons 2022 - TinkerCAD 3D Design Printing Close-Up',
        imgSrc: dir_gallery + 'expand_print_closeup.jpg'
    },
    {
        remark: 'Expand Your Horizons 2022 - TinkerCAD 3D Design Workshop #2',
        imgSrc: dir_gallery + 'expand_tinkercad_ws2.jpg'
    },
    {
        remark: 'Intro to Arduino Workshop 12/10/2022',
        imgSrc: dir_gallery + 'intro_arduino.jpg'
    },
    {
        remark: 'Club Officers and Members of 2022',
        imgSrc: dir_gallery + 'leadership_2022.png'
    },
    {
        remark: 'Club Officers of 2022',
        imgSrc: dir_gallery + 'officers_2022.jpg'
    },
    {
        remark: '"Touching Grass" Hiking Trip feat. Chase',
        imgSrc: dir_gallery + 'touchgrass_chase360.jpg'
    },
    {
        remark: '"Touching Grass" Hiking Trip: Group Photo',
        imgSrc: dir_gallery + 'touchgrass_group.jpg'
    },
    {
        remark: '"Touching Grass" Hiking Trip: Upward Trails',
        imgSrc: dir_gallery + 'touchgrass_hike.jpg'
    },
    {
        remark: '"Touching Grass" Hiking Trip: Heading Out',
        imgSrc: dir_gallery + 'touchgrass_leaving.jpg'
    },
]

export default gallery