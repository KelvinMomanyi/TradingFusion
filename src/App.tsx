import { useState } from 'react'
import MainDashboard  from './components/MainDashboard'
import ThemeContext from './context/ThemeContext'



function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <> 
    
        <ThemeContext.Provider 
        //@ts-ignore
         value={{ darkMode, setDarkMode }}>
            <MainDashboard/>
        </ThemeContext.Provider>
    </>
  )
}

export default App
