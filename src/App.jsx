import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import menuVideo from './assets/Mainn.mp4'
import menuPoster from './assets/mainn-poster.webp'
import P3Menu from './P3Menu'
import PageTransition from './PageTransition'
import './App.css'

const AboutMe = lazy(() => import('./AboutMe'))
const ResumePage = lazy(() => import('./ResumePage'))
const Socials = lazy(() => import('./Socials'))

function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      <video
        src={menuVideo}
        poster={menuPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <P3Menu onNavigate={(page) => {
        if (page === 'github') {
          window.open('https://github.com/Legend-1s-here', '_blank', 'noopener,noreferrer')
        } else if (page === 'sideproj') {
          window.open('https://github.com/Legend-1s-here/Chronicle', '_blank', 'noopener,noreferrer')
        } else {
          navigate(`/${page}`)
        }
      }} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div id="menu-screen" style={{ background: '#000' }} />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition><MenuScreen /></PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition variant="about"><AboutMe /></PageTransition>
          } />
          <Route path="/resume" element={
            <PageTransition><ResumePage /></PageTransition>
          } />
          <Route path="/socials" element={
            <PageTransition variant="socials"><Socials /></PageTransition>
          } />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}