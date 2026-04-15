
import { ThemeProvider } from './ThemeContext';
import { TimeProvider } from './TimeContext';
import Header from './Header';
import Times from './components/Times';
import './App.css'

function App() {

  return (
    <>
      <ThemeProvider>
        <div className="container">
          <Header />
          <main>Main content goes here</main>
        </div>
      </ThemeProvider>
      <TimeProvider>
        <div className="container">
          <Times />
          <main>Replace with times</main>
        </div>         
      </TimeProvider>
    </>
  )
}

export default App

