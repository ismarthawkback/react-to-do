import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { GlobalContextProvider } from "./context/GlobalContext";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./pages/About"));
const Copy = lazy(() => import("./pages/Copy"));

const AppFooter = styled.div`
  text-align: center;
  position: fixed;
  width: 100%;
  background-color: #bf4f74;
  top: 95vh;
  padding: 20px;
`;

const AppBody = styled.div`
  max-width: 800px;
  margin: auto;
`;

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <GlobalContextProvider>
          <AppBody>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<>Loading .....</>}>
                    {" "}
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/copy-right"
                element={
                  <Suspense fallback={<>Loading .....</>}>
                    {" "}
                    <Copy />
                  </Suspense>
                }
              />
            </Routes>
          </AppBody>
        </GlobalContextProvider>
      </BrowserRouter>
      <AppFooter>Thanks for Visiting : )</AppFooter>
    </div>
  );
}
