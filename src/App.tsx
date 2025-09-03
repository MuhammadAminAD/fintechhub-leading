import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Form from "./Components/Form";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ConfirmedCall from "./Components/ConfirmedCall";
import { Route, Routes } from "react-router-dom";

export default function App() {
      useEffect(() => {
            AOS.init({
                  duration: 1500,
                  once: true,
            });
      }, []);

      return (
            <>
                  <Routes>
                        <Route
                              path="/"
                              element={
                                    <>
                                          <NavBar />
                                          <Header />
                                          <main className="hidden xl:block">
                                          </main>
                                          <AboutUs />
                                          <Form />
                                          <FAQ />
                                          <Contact />
                                          <Footer />
                                    </>
                              }
                        />

                        <Route path="/call" element={<ConfirmedCall />} />
                  </Routes>
            </>
      );
}
