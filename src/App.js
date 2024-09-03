import Header from "./header/Header";
import Body from  './body/Body.jsx'
import About from "./About/About";
import Prestations from "./prestations/Prestations";
import Faq from "./faq/Faq";
import './index.css'
import Contact from "./contact/Contact.jsx"

function App() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <About></About>
      <Prestations></Prestations>
      <Faq></Faq>
        <Contact></Contact>
    </>
  );
}

export default App;
