import drop1 from '../assets/projects/backdrops/mw2019_cleanhouse.mp4'

import clubWebsiteBackdrop from '../assets/projects/backdrops/club_website.webm'
import robloxGameDevelopBackdrop from '../assets/projects/backdrops/roblox_development.mp4'

import clubWebsiteThumb from '../assets/projects/thumbnails/club_website.jpg'
import previewArt1 from '../assets/projects/thumbnails/roblox.jpg'
import previewArt2 from '../assets/projects/thumbnails/art1.png'
import previewArt3 from '../assets/projects/thumbnails/art2.png'
import githubTrello from '../assets/projects/thumbnails/github_trello.png'

export const projects = {
    'Join us on GitHub & Trello': {
        backdrop: drop1,
        thumbnail: githubTrello,
        description: 'Stay up-to-date in both interacting with and contributing towards our projects!\n\n📥 Join our GitHub organization below to get started!',
        tags: [],
        github: 'https://github.com/Skyline-College-Computer-Science-Club',
        trello: 'https://trello.com/b/sURZQegY/🚧-project-the-club-website'
    },
    'The Skyline Computer Science Club Website': {
        backdrop: clubWebsiteBackdrop,
        thumbnail: clubWebsiteThumb,
        description: 'You\'re already here! An informational website about us—Skyline College\'s Computer Science Club. The one-stop shop for club events, resources and opportunities, projects, and more.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
        github: 'https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite',
        trello: ''
    },
    'Roblox Game Development': {
        backdrop: robloxGameDevelopBackdrop,
        thumbnail: previewArt1,
        description: 'A ground-breaking development scope that incorporates programming skills into the exciting and comprehensive medium of game design.',
        tags: ['Lua', 'Blender'],
        github: 'https://github.com/Skyline-College-Computer-Science-Club/project.GameDevelop',
        trello: 'https://trello.com/b/IbBcq4DY/🚧-project-game-development'
    },
    'Generic Project 3': {
        thumbnail: previewArt3,
        description: 'This is a description for project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['Python'],
        github: '',
        trello: ''
    },
    'Generic Project 4': {
        thumbnail: previewArt1,
        description: 'This is a description for project 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        tags: ['Python'],
        github: '',
        trello: ''
    },
}

export default projects