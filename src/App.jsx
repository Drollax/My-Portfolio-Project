
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ToastProvider from './components/ToastProvider'
import { LanguageProvider } from './contextapi/LanguageProvider'
import { ThemeProvider } from './contextapi/ThemeProvider'


function App() {

  return (
   <>
   <ThemeProvider>
    <LanguageProvider>
    <div className="dark:bg-gray-900 min-h-screen transition-colors">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
      <ToastProvider />
    </div>
    </LanguageProvider>
   </ThemeProvider>
   </>
  )
}

export default App
