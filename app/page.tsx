"use client";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "@/utils/Themes";
import dynamic from "next/dynamic";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import React, { Suspense, useState, useEffect, lazy } from "react";
import Projects from "@/components/sections/Projects";
import ProjectDetails from "@/components/Dialog/ProjectDetails";
// import Contact from "@/components/sections/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/sections/Footer";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
});

// const Education = dynamic(() => import("@/components/sections/Education"), {
//   ssr: false,
// });

const StarsCanvas = dynamic(() => import("@/components/Stars"), { ssr: false });
// const Experience = dynamic(() => import("@/components/sections/Experience"), {
//   ssr: false,
// });
const BrowserRouter = dynamic(
  () => import("react-router-dom").then((mod) => mod.BrowserRouter),
  { ssr: false }
);

const loadExperience = () => new Promise<{ default: React.ComponentType }>(resolve => 
  setTimeout(() => resolve(import("@/components/sections/Experience")), 500)
);
const loadEducation = () => new Promise<{ default: React.ComponentType }>(resolve => 
  setTimeout(() => resolve(import("@/components/sections/Education")), 500)
);
// const loadContact = () => new Promise<{ default: React.ComponentType }>(resolve => 
//   setTimeout(() => resolve(import("@/components/sections/Contact")), 500)
// );

const Contact = React.lazy(() => import('@/components/sections/Contact'));

const Experience = lazy(loadExperience);
// const Projects = lazy(loadProjects);
const Education = lazy(loadEducation);
// const Contact = lazy(loadContact);

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Loading = () => <div>Loading...</div>;

export default function Home() {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      import('@/components/sections/Contact');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      {isBrowser && (
        <Suspense fallback={<Loading />}>
          <LazyMotion features={domAnimation}>
            <BrowserRouter>
              <Navbar />
              <ToastContainer />
              <Body>
                <StarsCanvas />
                <AnimatePresence>
                  <div>
                    <Hero />
                    <Wrapper>
                      <Skills />
                      <Suspense fallback={<Loading />}>
                        <Experience />
                      </Suspense>
                    </Wrapper>
                    <Suspense fallback={<Loading />}>
                      <Projects
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                      />
                    </Suspense>
                    <Wrapper>
                      <Suspense fallback={<Loading />}>
                        <Education />
                        <Contact />
                      </Suspense>
                    </Wrapper>
                    <Footer />
                    {openModal.state && (
                      <ProjectDetails
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                      />
                    )}
                  </div>
                </AnimatePresence>
              </Body>
            </BrowserRouter>
          </LazyMotion>
        </Suspense>
      )}
    </ThemeProvider>
  );
}
