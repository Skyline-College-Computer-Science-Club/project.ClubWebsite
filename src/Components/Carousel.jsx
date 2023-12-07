import NavBar from './Topbar';

import { React, useState} from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiLua, SiPython, SiNodedotjs, SiReact, SiBlender } from 'react-icons/si'
import { FaGithub, FaTrello, FaAngleDoubleUp } from 'react-icons/fa'

// import Typed from 'react-typed'

import fallBackdrop from '../assets/projects/backdrops/mw2.mp4'
import drop1 from '../assets/projects/backdrops/mw2019_cleanhouse.mp4'
import previewArt1 from '../assets/projects/thumbnails/roblox.jpg'
import previewArt2 from '../assets/projects/thumbnails/art1.png'
import previewArt3 from '../assets/projects/thumbnails/art2.png'
import githubTrello from '../assets/projects/thumbnails/github+trello.png'

import useSound from 'use-sound'
import sfxClick from '../assets/sound_fx/click.mp3'
import sfxTunedClick from '../assets/sound_fx/tuned_click.mp3'

const TAG_ATTRIBUTES = `inline mr-1 self-center`
const Tags = {
    'HTML': { color: 'bg-orange-700', icon: (<SiHtml5 className={TAG_ATTRIBUTES}/>) },
    'CSS': { color: 'bg-blue-700', icon: (<SiCss3 className={TAG_ATTRIBUTES}/>) },
    'JavaScript': { color:'bg-[#e1790d]', icon: (<SiJavascript className={TAG_ATTRIBUTES}/>) } ,
    'Lua': { color:'bg-[#0e7490]', icon: (<SiLua className={TAG_ATTRIBUTES}/>) },
    'Python': { color:'bg-[#0369a1]', icon: (<SiPython className={TAG_ATTRIBUTES}/>) },

    'Node.js': { color:'bg-[#41722b]', icon: (<SiNodedotjs className={TAG_ATTRIBUTES}/>) },
    'React': { color:'bg-[#3a7b8c]', icon: (<SiReact className={TAG_ATTRIBUTES}/>) },

    'Blender': { color:'bg-[#e1790d]', icon: (<SiBlender className={TAG_ATTRIBUTES}/>) },
}

const Projects = {
    'Join us on GitHub & Trello': {
        backdrop: drop1,
        thumbnail: githubTrello,
        description: 'Stay up-to-date in both interacting with and contributing towards our projects!',
        tags: [],
        github: 'https://github.com/Skyline-College-Computer-Science-Club',
        trello: 'https://trello.com/b/sURZQegY/🚧-project-the-club-website'
    },
    'The Computer Science Club Website': {
        thumbnail: previewArt1,
        description: 'You\'re already here! An informational website about us—Skyline College\'s Computer Science Club. The one-stop shop for club events, resources and opportunities, projects, and more.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
        github: 'https://github.com/Skyline-College-Computer-Science-Club/project.ClubWebsite',
        trello: ''
    },
    'Project: Game Development': {
        thumbnail: previewArt2,
        description: 'A ground-breaking development scope that incorporates programming skills via the comprehensive medium of game design.',
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
}

export default function Carousel() {
    const [play_sfxClick] = useSound(sfxClick)
    const [play_sfxTunedClick] = useSound(sfxTunedClick)

    const [currentProject, setCurrentProject] = useState(Object.keys(Projects)[0])
    const projectDetails = Projects[currentProject]
    
    return (
        <div name='carousel'>

            <NavBar/>

            {/* translate-y-20 h-[calc(100vh-80px)] */}
            <div className='w-full translate-y-20 h-[calc(100vh-80px)] overflow-y-hidden bg-[#0a192f] text-gray-300'>

                <div name='vignette-overlay'>
                    {/* top    */} <div className='bg-gradient-to-b from-black to-transparent' style={{position:'absolute', top:0, width:'100%', height:'10%'}}></div>
                    {/* bottom */} <div className='bg-gradient-to-t from-black to-transparent' style={{position:'absolute', bottom:0, width:'100%', height:'25%'}}></div>
                    {/* left   */} <div className='bg-gradient-to-r from-black to-transparent' style={{position:'absolute', left:0, width:'33%', height:'100%'}}></div>
                </div>

                <video name='project-backdrop' className=' w-full h-full object-cover' src={projectDetails.backdrop || fallBackdrop} preload='auto' autoPlay muted loop/>

                <div name='project-drawer' className='mx-2' style={{position:'absolute', bottom:0}}>

                    <div name='project-info' className='p-4 z-10 -translate-y-[calc(50vh-5rem)]' style={{position:'absolute', top:0, width:'100%', height:'100%'}}>
                        <p className='text-4xl font-bold max-w-lg text-gray-100 text-shadow shadow-gray-500'>{currentProject}</p>
                        {/* <Typed className='text-4xl font-bold' strings={[currentProject]} typeSpeed={120} backSpeed={120} backDelay={3000} loop></Typed> */}
                        <p className='py-2 font-xl max-w-md text-shadow-lg text-gray-200 shadow-gray-900'>{projectDetails.description}</p>

                        <div name='project-badges'>
                            {projectDetails.tags.map((tag) => ( 
                                <div className={`text-sm ${Tags[tag].color} shadow-sm text-gray-100 bg-opacity-75 mr-1 font-semibold px-2 py-1 rounded-md inline-block`}>{Tags[tag].icon}{tag}</div>
                                // <div className={`text-sm shadow-sm shadow-white text-gray-100 bg-opacity-90 mr-1 font-semibold px-2 py-1 rounded-md inline-block`}>{Tags[tag].icon}{tag}</div>
                            ))}
                        </div> 

                        <div name='project-links' className='py-4'>
                            <a href={projectDetails.github} target='_blank' rel='noreferrer'><FaGithub className='inline mx-1' size={30}/></a>
                            <a href={projectDetails.trello} target='_blank' rel='noreferrer'><FaTrello className='inline mx-1' size={30}/></a>
                        </div>  
                    </div>

                    <div className='translate-y-20 hover:translate-y-0 transition duration-700 ease-out'>
                        <FaAngleDoubleUp className='-translate-y-[10] mx-auto' size={30}/>
                        <div className='flex'>
                            {Object.entries(Projects).map(([projectName]) => 
                                (
                                    <button 
                                        onClick={() => {
                                            console.log('Clicked to show project: "' + projectName + '"')    
                                            play_sfxTunedClick()
                                            setCurrentProject(projectName)
                                        }}
                                        onMouseEnter={() => {
                                            console.log('Hovered to preview project: "' + projectName + '"') 
                                            play_sfxClick()
                                            
                                        }}
                                        key={projectName}
                                    >
                                        <div key={projectName} className='m-1 relative shadow-md opacity-50 hover:opacity-100 hover:-translate-y-2 transition duration-500 ease-out'>
                                            <img className='object-cover w-80 h-40 rounded-md' src={Projects[projectName].thumbnail} alt={projectName}/>
                                            <p className='z-10 p-2 font-bold text-gray-200 absolute bottom-0'>{projectName}</p>
                                            <div className='z-0 absolute top-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
                                        </div>
                                    </button>
                                )
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
/*
 <div className='shadow-md w-80 h-40'>
    <img className='object-cover w-full h-full' src={previewArtR} alt='Project Preview Artbox'/>
    <p className='absolute bottom-0 '>Description</p>
    <div className='absolute top-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
</div>
*/