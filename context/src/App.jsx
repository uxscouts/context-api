
import { ThemeProvider } from './ThemeContext';
import { TimeProvider } from './TimeContext';
import Header from './Header';
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

    </>
  )
}

export default App

