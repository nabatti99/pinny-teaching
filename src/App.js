import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/Pages/About";
import Appointments from "./components/Pages/Appointments";
import Blog from "./components/Pages/Blog";
import BlogDetails from "./components/Pages/BlogDetails";
import Contact from "./components/Pages/Contact";
import FlashCardDetails from "./components/Pages/FlashCardDetails";
import FlashCards from "./components/Pages/FlashCards";
import GameDetails from "./components/Pages/GameDetails";
import ErrorPage from "./components/Pages/ErrorPage";
import Games from "./components/Pages/Games";
import Home from "./components/Pages/Home";

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
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:blogId" element={<BlogDetails />} />
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
