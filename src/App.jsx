import LandingPage from "./LandingPage"
import { useState,useEffect } from "react";
function App() {
  
  let [theme,setTheme]=useState('light');
  useEffect(()=> {
        if(theme === 'dark') {
          document.documentElement.classList.add("dark");
        }
        else {
          document.documentElement.classList.remove('dark');
        }
  },[theme])
  let handleThemeChange=()=> {
    setTheme(theme==='light'?'dark':'light')
  }

  return (
      <div>
        <LandingPage change={handleThemeChange}/>
      </div>
    
  )
}

export default App
