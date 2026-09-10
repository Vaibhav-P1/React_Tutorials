import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {

 // or <Header/>
 //we  can return only one component so we just addedd <></> and return component as fragments inside it. 
  return(
    <>
    <Header></Header>
    <Food/> 
    <Footer/>
    </>
  );
}

export default App
