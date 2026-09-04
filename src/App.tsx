import {
  useCallback,
  useState,
} from "react";

import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LoadingScreen from "./components/LoadingScreen";
import PagePiston from "./components/PagePiston";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";


function App() {

  const [
    loading,
    setLoading,
  ] = useState(true);


  const finishLoading =
    useCallback(() => {

      setLoading(false);

    }, []);



  /* ================================================
     SENIOR'S INTRO FIRST
  ================================================= */

  if (loading) {

    return (

      <LoadingScreen
        duration={3200}
        onComplete={
          finishLoading
        }
      />

    );

  }



  return (

    <div className="app">


      {/* ==========================================
          PISTON BEFORE PAGE CHANGE
      ========================================== */}

      <PagePiston />


      <Navbar />


      <main>

        <Routes>

          <Route
            path="/"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />


          <Route
            path="/home"
            element={
              <Home />
            }
          />


          <Route
            path="/about"
            element={
              <About />
            }
          />


          <Route
            path="/team"
            element={
              <Team />
            }
          />


          <Route
            path="/events"
            element={
              <Events />
            }
          />


          <Route
            path="/gallery"
            element={
              <Gallery />
            }
          />


          <Route
            path="/contact"
            element={
              <Contact />
            }
          />


          <Route
            path="*"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />

        </Routes>

      </main>


      <Footer />

    </div>

  );

}


export default App;