import './App.css';
import {Header} from './comonnents/header'
import {Home} from './comonnents/home'
import {About} from './comonnents/about'
import {Port} from './comonnents/portfolio'
import {Contact} from './comonnents/contact'
import {Footer} from './comonnents/footer'
function App() {
  return (
    <div className="container">
      <Header/>
      <Home/>
      <About/>
      <Port/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
