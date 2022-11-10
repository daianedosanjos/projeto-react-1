import Title from "./Title"
import Subtitle from "./Subtitle"
import Image from "./Image"
import AlunaImg from '../assets/daianedosanjos.jpg'

function Bio()  {

	return(
	  <div className="bio">
        <Title title= "Olá, eu sou Daiane dos Anjos" />
		<Subtitle subtitle = "Estudante de programação na Reprograma" />
		<Image image={AlunaImg} />
	  </div>
	)
}
export default Bio