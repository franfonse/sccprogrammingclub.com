import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MembersActive from '../pages/MembersActive/MembersActive';
import MembersInactive from '../pages/MembersInactive/MembersInactive';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="members-active" element={<MembersActive />} />
            <Route path="members-inactive" element={<MembersInactive />} />

            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;
