import Header from "./components/Header/Header"
import Iphone11 from "./components/Iphone11/Iphone11"
import Iphone11Pro from "./components/Iphone11pro/Iphone11Pro"
import Mac from "./components/MacBook/Mac"
import Watch from "./components/Watch/Watch"
import './index.css'

function App() {

  return (
    <>
    <div className="outer-wrapper">
      <Header />
      <Mac />
      <Iphone11Pro />
      <Iphone11 />
      <Watch />
    </div>
      
    </>
  )
}

export default App
