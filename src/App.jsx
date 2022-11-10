import './App.css'
import  Header  from './components/Header'
import  Bio  from './components/Bio'
import  Cards  from './components/Cards'
import  Footer  from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header content="Meus conteúdos favoritos" />
      <Bio />
      <Cards/>
      <Footer content="Feito com ♡ por Daiane dos Anjos." />
    </div>
  )
}

export default App