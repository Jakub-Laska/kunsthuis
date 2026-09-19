import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Artists from "./pages/Artists/Artists";
import Rineke from "./pages/Artists/artists/Rineke";
import Marlene from "./pages/Artists/artists/Marlene";
import James from "./pages/Artists/artists/James";
import Piet from "./pages/Artists/artists/Piet";
import Hieronymus from "./pages/Artists/artists/Hieronymus";
import Michael from "./pages/Artists/artists/Michael";
import Vincent from "./pages/Artists/artists/Vincent";
import Rene from "./pages/Artists/artists/Rene";
import Wim from "./pages/Artists/artists/Wim";

import Gallery from "./pages/Gallery";
import Rules from "./pages/Rules";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

import { GrungeEffect } from "./utils/grungeEffect";

import "./css/App.css";

const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/artists",
    element: <Artists />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
];

function App() {
  const location = useLocation();

  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState<number | null>(null);

  const currentIndex = pages.findIndex(
    (page) => page.path === location.pathname,
  );

  const isHorizontalPage = currentIndex !== -1;

  useEffect(() => {
    if (!isHorizontalPage) {
      window.scrollTo(0, 0);
      return;
    }

    const currentPage = pageRefs.current[currentIndex];

    if (!currentPage) return;

    requestAnimationFrame(() => {
      setHeight(currentPage.scrollHeight);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, [currentIndex, isHorizontalPage]);

  return (
    <>
      <GrungeEffect />
      <Cursor />
      <NavBar />

      {isHorizontalPage ? (
        <main
          className="page-viewport"
          style={{
            height: height ? `${height}px` : "auto",
          }}
        >
          <div
            className="pages"
            style={{
              transform: `translateX(-${currentIndex * 100}vw)`,
            }}
          >
            {pages.map((page, index) => (
              <div
                className="page"
                key={page.path}
                ref={(element) => {
                  pageRefs.current[index] = element;
                }}
              >
                <div className="page-content">{page.element}</div>
              </div>
            ))}
          </div>
        </main>
      ) : (
        <Routes>
          <Route path="/rules" element={<Rules />} />
          <Route path="/artists/rineke" element={<Rineke />} />
          <Route path="/artists/marlene" element={<Marlene />} />
          <Route path="/artists/james" element={<James />} />
          <Route path="/artists/piet" element={<Piet />} />
          <Route path="/artists/hieronymus" element={<Hieronymus />} />
          <Route path="/artists/michael" element={<Michael />} />
          <Route path="/artists/vincent" element={<Vincent />} />
          <Route path="/artists/rene" element={<Rene />} />
          <Route path="/artists/wim" element={<Wim />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
