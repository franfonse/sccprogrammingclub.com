import './App.css'
import Footer from './components/shared/Footer/Footer'
import Header from './components/shared/Header/Header'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <Header/>
      <div className="main-container">
        <AppRoutes/>
      </div>
      <Footer/>
    </>
  )
}

export default App
