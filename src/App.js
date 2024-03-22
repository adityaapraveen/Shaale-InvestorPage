import './App.css';
import NavbarComp from './/Components/NavbarComp';
import Accordion from './/Components/Accordion/Accordion'
import AccordionHeader from './Components/Accordion/AccordionHeader';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <AccordionHeader />
      <Accordion title="Vande Mataram" subheading="Song lessons sing along and practice tracks from vijay prakash" imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzGTCvPX29UcJxnBghxyIeBevlmZsfKxWqg&s' investment="INR: 5 lacs" revenue="30% REV Share" content="This will contain more info about the proposal when clicked" />
      <Accordion title="Kalinga Narthana Thilana" subheading="Song lessons, Sing Along & Practice tracks for the famous thillana by Aruna Sairam" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VYc3jdVelR2SMJosTRch3tTB5dxjP4cjxTgoEMC1Bg&s" investment="INR: 8 lacs" revenue="35% REV Share" content="This will contain more info about the proposal when clicked" />
    </div>
  );
}

export default App;
