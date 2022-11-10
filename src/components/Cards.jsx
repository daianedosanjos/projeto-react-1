import Title from "./Title"
import Text from "./Text"
import Image from "./Image"
import HtmlImg from '../assets/html.jpg'
import CssImg from '../assets/css3.png'
import JavascriptImg from '../assets/Javascript.jpg'
import ReactImg from '../assets/react.png'
import GitImg from '../assets/git.png'

function Cards()  {
	return(
	  <div className="cards">
			<div className="card">			
				<Title title="Git"/>
				<Text paragraph="Criado pelo engenheiro de software Linus Torvalds, conhecido por ter desenvolvido, também, o núcleo Linux, o GIT é um Sistema de Controle de Versões Distribuído — ou DVCS. Estes sistemas de controle possuem a função de registrar quaisquer alterações feitas em cima de um código, armazenando essas informações e permitindo que, caso seja necessário, um(a) programador(a) possa regredir a versões anteriores de uma aplicação de modo simples e rápido. Este tipo de sistema também simplifica muito o processo de compartilhamento de um projeto com um time, por exemplo, ou com outros(as) programadores(as)" />
				<Image image={GitImg} />
			</div>
			<div className="card">
				<Title title="Html" />
				<Text paragraph="Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto, o HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos." />
				<Image image={HtmlImg} />
			</div>
			<div className="card">
				<Title title="Css" />
				<Text paragraph="Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos." />
				<Image image={CssImg} />
			</div>
			<div className="card">
				<Title title="Javascript" />
				<Text paragraph="JavaScript é uma linguagem de programação que você implementa itens complexos em web, toda vez que a página da web faz mais do que simplesmente mostra a você informação estática, conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D, etc. você pode apostar que o JavaScript provavelmente está"/>
				<Image  image={JavascriptImg} />
			</div>
			<div className="card">
				<Title title="React" /> 
				<Text  paragraph="O React é uma biblioteca que faz o uso da linguagem de programação JavaScript, em seu funcionamento. Além dessa biblioteca, a linguagem está presente em tecnologias, tanto no lado do front-end, como no lado do back-end. Ou seja: o React cria aplicações web para serem executadas em navegadores, sejam eles para desktop, mobile ou qualquer outro dispositivo"/>
				<Image image={ReactImg} />
			</div>
	  </div>
	)
}
export default Cards