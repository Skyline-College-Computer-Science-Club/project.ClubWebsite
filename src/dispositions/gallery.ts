/*

    ! NOTICE: Follow this key order. Leave each string value empty if not applicable.
        - remark: 'This is a label for this particular medium.'
        - imgSrc: 'https://www.flickr.com/eerreeoo

*/

const lanceruiz = '/assets/home/leader_portraits/lanceruiz.png'
const clubWebsiteThumb = '/assets/projects/thumbnails/club_website.jpg'
const robloxDevThumb = '/assets/projects/thumbnails/roblox.jpg'
const previewArt2 = '/assets/projects/thumbnails/art1.png'
const previewArt3 = '/assets/projects/thumbnails/art2.png'
const githubTrello = '/assets/projects/thumbnails/github_trello.png'

interface GalleryPiece {
    remark: string,
    imgSrc: string
}

export const gallery: GalleryPiece[] = [
    {
        remark: 'December 1, 2023',
        imgSrc: clubWebsiteThumb
    },
    {
        remark: 'December 2, 2023',
        imgSrc: robloxDevThumb
    },
    {
        remark: 'December 3, 2023',
        imgSrc: previewArt2
    },
    {
        remark: 'December 4, 2023',
        imgSrc: previewArt3
    },
    {
        remark: 'December 5, 2023',
        imgSrc: githubTrello
    },
]

export default gallery