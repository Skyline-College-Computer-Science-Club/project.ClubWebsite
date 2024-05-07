/*

    ! NOTICE: Per leader dict entry, follow this key order. Leave each string value empty if not applicable.
        'role': 'Projects Manager',
        'imgSrc': pfp_projectmanager,
        'quote': (<p>This is for the record. History is written by the victor. History is filled with liars.</p>),
        SOCIALS START HERE
        'linktree': 'https://www.linktr.ee/devalto',
        'instagram': 'https://www.instagram.com/dev_alto',
        'discord': 'https://discordapp.com/users/168406210687533056',
        'github': 'https://www.github.com/dev-alto',
        'linkedin': 'https://www.linkedin.com/in/lance-ruiz',
        'website': 'https://the-devalto-experiments.000webhostapp.com/'

*/

const dir_leaderPortraits = '/assets/home/leader_portraits/'

const pfp_president = dir_leaderPortraits +'tylerkuwadaport.png'
const pfp_vicepresident = dir_leaderPortraits + 'jonasquiballoport.png'
const pfp_secretary = dir_leaderPortraits + 'kailabautistaport.jpg'
const pfp_treasurer = dir_leaderPortraits + 'jayanpintorport.jpg'
const pfp_projectmanager = dir_leaderPortraits + 'lanceruizport.jpg'

const pfp_auxillary1 = dir_leaderPortraits + 'christseport.png'

const pfp_coadvisor1 = dir_leaderPortraits + 'denisehumport.png'
const pfp_coadvisor2 = dir_leaderPortraits + 'bryanswartoutport.png'

import { BiCrown } from 'react-icons/bi'
import { CgCrown } from 'react-icons/cg';
import { GrMoney } from 'react-icons/gr'

import { FaRegHandPeace } from 'react-icons/fa'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { LuConstruction } from 'react-icons/lu'

import { AiOutlineGlobal } from 'react-icons/ai';
import { MdOutlineEmojiEvents } from 'react-icons/md';

import { PiFeatherDuotone, PiHandshakeBold } from 'react-icons/pi';

export const FALLBACK_QUOTE = (<p>That was no message. <i>This</i> is a message.</p>)

export const leadership = {
    major: {
        'Tyler Kuwada': {
            'role': 'The President',
            'imgSrc': pfp_president,
            'quote': <p>Oh, these weren't homemade, they were made in a factory. A bomb factory. They're bombs.</p>,
            'linktree': '',
            'instagram': 'https://www.instagram.com/tyler_kuwada/',
            'discord': 'https://discordapp.com/users/227633077545992192',
            'icon': <BiCrown />
        },
        'Jonas Quiballo': {
            'role': 'The Vice President',
            'imgSrc': pfp_vicepresident,
            'quote': (<p>Told myself I was gonna lock in—still locking in.</p>),
            'linktree': '',
            'github': 'https://github.com/Waffly10',
            'instagram': 'https://www.instagram.com/_.waffly._/',
            'icon': <CgCrown />
        },
        'Kaila Bautista': {
            'role': 'Club Secretary',
            'imgSrc': pfp_secretary,
            'linktree': '',
            'instagram': 'https://instagram.com/kqilamae',
            'icon': <PiFeatherDuotone />
        },
        'Jayan Pintor': {
            'role': 'Club Treasurer',
            'imgSrc': pfp_treasurer,
            'quote': (<p>We all live in a coded world of if statements, never knowing the conditions of each until after interpretation.</p>),
            'linktree': '',
            'github': 'https://github.com/CoderLearnerTime',
            'linkedin': 'https://www.linkedin.com/in/jayanthony-pintor/',
            'instagram': 'https://www.instagram.com/0p_photos/',
            'icon': <GrMoney />
        },
        'Lance Ruiz': {
            'role': 'Projects Manager',
            'imgSrc': pfp_projectmanager,
            'quote': (<p>This is for the record. History is written by the victor. History is filled with liars.<br />- Captain $</p>),
            'linktree': 'https://www.linktr.ee/devalto',
            'instagram': '',
            'discord': 'https://discordapp.com/users/168406210687533056',
            'github': 'https://www.github.com/dev-alto',
            'linkedin': 'https://www.linkedin.com/in/lance-ruiz',
            'website': 'https://the-devalto-experiments.000webhostapp.com/',
            'icon': <LuConstruction />
        },
        'Chris Tse': {
            'role': 'SOCC Advisor',
            'imgSrc': pfp_auxillary1,
            'quote': (<p>A true Isaiah Rashad fan.</p>),
            'linktree': 'https://linktr.ee/isaiahrashadfan',
            'discord': 'https://discordapp.com/users/85194740890337280',
            'instagram': 'https://www.instagram.com/cchristse',
            'linkedin': 'https://www.linkedin.com/in/chris-tse-irf/',
            'icon': <FaRegHandPeace />
        },
        'Denise Hum': {
            'role': 'Club Co-Advisor',
            'imgSrc': pfp_coadvisor1,
            'linktree': '',
            'discord': 'https://discordapp.com/users/735277805662765066',
            'github': '',
            'linkedin': 'https://www.linkedin.com/in/denisehum/',
            'icon': <PiHandshakeBold />
        },
        'Bryan Swartout': {
            'role': 'Club Co-Advisor',
            'imgSrc': pfp_coadvisor2,
            'linktree': '',
            'discord': 'https://discordapp.com/users/316816595668172800',
            'github': '',
            'linkedin': 'https://www.linkedin.com/in/swartoutbryan/',
            'icon': <PiHandshakeBold />
        }
    },
    minor: {
        "Web Master": {
            'name': 'Lance Ruiz',
            'color': 'from-[#1eb0b0]',
            'icon': <AiOutlineGlobal />
        },
        "Social Outreach": {
            'name': 'Chris Tse & Kaila Bautista',
            'color': 'from-[#651e94]',
            'icon': <PiHandshakeBold />
        },
        "Event Planners": {
            'name': 'Tyler Kuwada & Lance Ruiz',
            'color': 'from-[#9c710c]',
            'icon': <MdOutlineEmojiEvents />
        }
    }
}

export default leadership