/*

    ! NOTICE: Follow this key order. Leave each string value empty if not applicable.
        backdrop: clubWebsiteBack,
        thumbnail: clubWebsiteThumb,
        description: 'You\'re already here! An informational website about us—Skyline College\'s Computer Science Club. The one-stop shop for club events, resources and opportunities, projects, and more.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
        github: 'https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite',
        trello: ''

    TODO:
        Add tags here

*/

const drop1 = '/assets/projects/backdrops/mw2019_cleanhouse.mp4'

const clubWebsiteBack = '/assets/projects/backdrops/club_website.webm'
const robloxGameDevelopBack = '/assets/projects/backdrops/roblox_development.mp4'

const clubWebsiteThumb = '/assets/projects/thumbnails/club_website.jpg'
const robloxDevThumb = '/assets/projects/thumbnails/roblox.jpg'
const previewArt2 = '/assets/projects/thumbnails/art1.png'
const previewArt3 = '/assets/projects/thumbnails/art2.png'

export interface ProjectDetails {
    backdrop: string,
    thumbnail: string,
    description: string,
    tags: string[],
    github: string,
    trello: string
}

export const projects: { [key: string]: ProjectDetails } = {
    'Join us on GitHub & Trello': {
        backdrop: drop1,
        thumbnail: '/assets/kitty_banner.png',
        description: 'Stay up-to-date in both interacting with and contributing towards our projects!\n\n📥 Join our GitHub organization below to get started!',
        tags: [],
        github: 'https://github.com/Skyline-College-Computer-Science-Club',
        trello: 'https://trello.com/b/sURZQegY/🚧-project-the-club-website'
    },
    'The Skyline Computer Science Club Website': {
        backdrop: clubWebsiteBack,
        thumbnail: clubWebsiteThumb,
        description: 'You\'re already here! An informational website about us—Skyline College\'s Computer Science Club. The one-stop shop for club events, resources and opportunities, projects, and more.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
        github: 'https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite',
        trello: ''
    },
    'Roblox Game Development': {
        backdrop: robloxGameDevelopBack,
        thumbnail: robloxDevThumb,
        description: 'A creativity-directed development scope that incorporates programming skills into the exciting and comprehensive medium of game design. These elements include gameplay, story, and world design, 2D/3D animation and modeling, UI/UX design, server/client networking, etc.',
        tags: ['Lua', 'Blender'],
        github: 'https://github.com/Skyline-College-Computer-Science-Club/project.GameDevelop',
        trello: 'https://trello.com/b/IbBcq4DY/🚧-project-game-development'
    },
    'Generic Project 3': {
        backdrop: previewArt2,
        thumbnail: previewArt3,
        description: 'This is a description for project 3.',
        tags: ['Python'],
        github: '',
        trello: ''
    },
    'Generic Project 4': {
        backdrop: clubWebsiteBack,
        thumbnail: robloxDevThumb,
        description: 'This is a description for project 4.',
        tags: ['Python'],
        github: '',
        trello: ''
    },
}

export default projects