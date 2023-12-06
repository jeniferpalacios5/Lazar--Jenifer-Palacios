import "./App.css";
import Card from './Card.jsx'
import Sectionuno from './Sectionuno.jsx'
import Sectiondos from './Sectiondos.jsx'
import Sectiontres from './Sectiontres.jsx'
import Sectioncuatro from './Sectioncuatro.jsx'
import Sectioncinco from './sectioncinco.jsx'
import Sectionseis from './sectionseis.jsx'
import Sectionsiete from './sectionsiete.jsx'
function App() {

	return (
		<>
		<Card/>
		<Sectionuno texto="A través de los cómics, podemos explorar mundos imaginarios y realidades alternativas que desafían nuestra percepción."/>
		<Sectiondos titulo1="Información"/>
		<Sectiontres titulo2="Cómic"/>
		<Sectioncuatro/>
		<Sectioncinco/>
		<Sectionseis/>
		<Sectionsiete/>
		</>
	);
}

export default App;