import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/Pages/About";
import Appointments from "./components/Pages/Appointments";
import Contact from "./components/Pages/Contact";
import ErrorPage from "./components/Pages/ErrorPage";
import FlashCardDetails from "./components/Pages/FlashCardDetails";
import FlashCards from "./components/Pages/FlashCards";
import GameDetails from "./components/Pages/GameDetails";
import Games from "./components/Pages/Games";
import Home from "./components/Pages/Home";
import { GApiService } from "./google-apis/gapi.service";
import ClassroomTip from "./components/Pages/ClassroomTip";
import ClassroomTipDetails from "./components/Pages/ClassRoomTipDetails";
import { FirebaseService } from "./firebase-service/firebase-init";

GApiService.init();
FirebaseService.init();

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="games" element={<Games />} />
                <Route path="games/:gameId" element={<GameDetails />} />
                <Route path="about" element={<About />} />
                <Route path="classroom-tips" element={<ClassroomTip />} />
                <Route path="classroom-tips/:classroomTipId" element={<ClassroomTipDetails />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="flash-cards" element={<FlashCards />} />
                <Route path="flash-cards/:flashCardId" element={<FlashCardDetails />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
