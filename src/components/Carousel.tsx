'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import useSound from 'use-sound'

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiLua,
  SiPython,
  SiRust,
  SiNodedotjs,
  SiReact,
  SiBlender,
} from 'react-icons/si'
import { FaGithub, FaTrello } from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'

import { projects, type ProjectDetails } from '../dispositions/projects'

const fallBackdrop = '/assets/projects/backdrops/mw2.mp4'

const sfxClick = '/assets/sound_fx/click.mp3'
const sfxClick2 = '/assets/sound_fx/click2.mp3'
const sfxTunedClick = '/assets/sound_fx/tuned_click.mp3'

const TAG_CLASSES = 'inline mr-1 self-center'

interface TagDetails {
  color: string
  icon: JSX.Element
}

const Tags: Record<string, TagDetails> = {
  HTML: { color: 'bg-orange-700', icon: <SiHtml5 className={TAG_CLASSES} /> },
  CSS: { color: 'bg-blue-700', icon: <SiCss3 className={TAG_CLASSES} /> },
  JavaScript: {
    color: 'bg-[#e1790d]',
    icon: <SiJavascript className={TAG_CLASSES} />,
  },
  TypeScript: {
    color: 'bg-[#3178C6)]',
    icon: <BiLogoTypescript className={TAG_CLASSES} />,
  },
  Lua: { color: 'bg-[#0e7490]', icon: <SiLua className={TAG_CLASSES} /> },
  Python: { color: 'bg-[#0369a1]', icon: <SiPython className={TAG_CLASSES} /> },
  Rust: { color: 'bg-[#A16A03]', icon: <SiRust className={TAG_CLASSES} /> },

  'Node.js': {
    color: 'bg-[#41722b]',
    icon: <SiNodedotjs className={TAG_CLASSES} />,
  },
  React: { color: 'bg-[#3a7b8c]', icon: <SiReact className={TAG_CLASSES} /> },

  Blender: {
    color: 'bg-[#e1790d]',
    icon: <SiBlender className={TAG_CLASSES} />,
  },
}

export default function Carousel() {
  const [playSfx_click] = useSound(sfxClick)
  const [playSfx_click2] = useSound(sfxClick2)
  // const [play_sfxTunedClick] = useSound(sfxTunedClick)

  const [currentProject, setCurrentProject] = useState(Object.keys(projects)[0])
  const projectDetails: ProjectDetails = projects[currentProject]

  return (
    <div>
      {/* <NavBar/> */}

      {/* translate-y-20 h-[calc(100vh-80px)] */}
      <div className='w-full translate-y-20 h-[calc(100vh-80px)] overflow-y-hidden bg-[#0a192f] text-gray-300'>
        {/* Vignette overlay */}
        <div>
          {/* top    */}{' '}
          <div
            className='bg-gradient-to-b from-black to-transparent'
            style={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '10%',
            }}
          ></div>
          {/* bottom */}{' '}
          <div
            className='bg-gradient-to-t from-black to-transparent'
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '25%',
            }}
          ></div>
          {/* left   */}{' '}
          <div
            className='bg-gradient-to-r from-black to-transparent'
            style={{
              position: 'absolute',
              left: 0,
              width: '33%',
              height: '100%',
            }}
          ></div>
        </div>

        {/* The main backdrop preview video clip */}
        <video
          className=' w-full h-full object-cover'
          src={projectDetails.backdrop || fallBackdrop}
          preload='auto'
          autoPlay
          muted
          loop
        />

        {/* Project Info */}
        <div
          className='p-4 z-0'
          style={{
            position: 'absolute',
            top: '27.5%',
            width: '100%',
            height: '100%',
          }}
        >
          <p className='text-4xl font-bold max-w-lg text-gray-100 text-shadow shadow-gray-700'>
            {currentProject}
          </p>
          {/* <Typed className='text-4xl font-bold' strings={[currentProject]} typeSpeed={120} backSpeed={120} backDelay={3000} loop></Typed> */}
          <p className='py-2 font-xl max-w-md text-shadow-lg text-gray-200 shadow-gray-900 whitespace-break-spaces'>
            {projectDetails.description}
          </p>

          {/* Project Badges */}
          <div>
            {projectDetails.tags.map((tag: string) => (
              <div
                className={`text-sm ${Tags[tag].color} shadow-sm text-gray-100 bg-opacity-75 mr-1 font-semibold px-2 py-1 rounded-md inline-block`}
                key={crypto.randomUUID()}
              >
                {Tags[tag].icon}
                {tag}
              </div>
              // <div className={`text-sm shadow-sm shadow-white text-gray-100 bg-opacity-90 mr-1 font-semibold px-2 py-1 rounded-md inline-block`}>{Tags[tag].icon}{tag}</div>
            ))}
          </div>

          {/* Project Links */}
          <div className='py-4'>
            <a href={projectDetails.github} target='_blank' rel='noreferrer'>
              <FaGithub className='inline mx-1' size={30} />
            </a>
            <a href={projectDetails.trello} target='_blank' rel='noreferrer'>
              <FaTrello className='inline mx-1' size={30} />
            </a>
          </div>
        </div>

        {/* Bottom projects drawer selector, along with left-side project details */}
        <div className='mx-2' style={{ position: 'absolute', bottom: 0 }}>
          <div className='translate-y-20 hover:translate-y-0 transition duration-700 ease-out'>
            {/* <FaAngleDoubleUp className='-translate-y-[10] mx-auto' size={30}/> */}
            <div className='flex group'>
              {Object.entries(projects).map(([projectName]) => (
                <button
                  onMouseDown={() => {
                    playSfx_click2()
                  }}
                  onMouseUp={() => {
                    console.log(
                      'Clicked to show project: "' + projectName + '"'
                    )
                    playSfx_click2()
                    setCurrentProject(projectName)
                  }}
                  onMouseEnter={() => {
                    console.log(
                      'Hovered to preview project: "' + projectName + '"'
                    )
                    playSfx_click()
                  }}
                  key={projectName}
                >
                  <div
                    key={projectName}
                    className='m-1 relative rounded-xl opacity-10 hover:!opacity-100 hover:border-double group-hover:opacity-70 active:translate-y-4 hover:-translate-y-2 transition duration-400 ease-out'
                  >
                    <Image
                      width={1280}
                      height={720}
                      className='object-cover w-80 h-40 rounded-xl'
                      src={projects[projectName].thumbnail}
                      alt={projectName}
                    />
                    <p className='z-10 p-2 font-bold text-gray-200 absolute bottom-0'>
                      {projectName}
                    </p>
                    <div className='z-0 absolute top-0 w-full h-full bg-gradient-to-t from-black to-transparent'></div>
                  </div>
                </button>
              ))}
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
