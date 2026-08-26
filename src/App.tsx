import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import Gallery from "./pages/Gallery";
import Rules from "./pages/Rules";

import NavBar from "./components/Navbar";

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

    setHeight(currentPage.scrollHeight);
  }, [currentIndex, isHorizontalPage]);

  return (
    <>
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
                {page.element}
              </div>
            ))}
          </div>
        </main>
      ) : (
        <Routes>
          <Route path="/rules" element={<Rules />} />
        </Routes>
      )}
    </>
  );
}

export default App;
