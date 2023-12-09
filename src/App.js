import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import Contact from './components/Contact';
import History from './components/History'
import Socials from './components/Socials';
import ProjectCarousel from './components/Carousel';

export default function App() {
    return (
        <div>
            <Topbar/>
            <Home/>
            <About/>
            <Tech/>
            <History/>
            <Contact/>
            {/* <Socials/> */}
            <ProjectCarousel/>
        </div>
    );
}