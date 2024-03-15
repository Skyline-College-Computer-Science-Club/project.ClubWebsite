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
        remark: 'December 1, 2022',
        imgSrc: dir_gallery + 'boba_social_2022.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'calhacks_dinner.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'calhacks_downtown.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'calhacks_rundown.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'expand_3dmodel_ws.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'intro_arduino.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'leadership_2022.png'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'officers_2022.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'touchgrass_chase360.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'touchgrass_group.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'touchgrass_hike.jpg'
    },
    {
        remark: 'December 1, 2023',
        imgSrc: dir_gallery + 'touchgrass_leaving.jpg'
    },
]

export default gallery