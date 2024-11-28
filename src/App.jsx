import './App.css'
import NavBar from './components/navbar'
import HeroCard from './components/hero'
import Divider from './components/divider'
import Footer from './components/footer'
import Section from './components/section'
import Card from './components/card'
import Title from './components/title'

function App() {

  return (
    <>
      <NavBar title="Mi App"></NavBar>
      <div className='mt-20'></div>
      <HeroCard></HeroCard>
      <Divider></Divider>
      <div className='ml-6 mr-6 mb-6'>
        <Title value={'Características'}></Title>
      </div>
      <Section>
        <Card title={'Escalable'} text={"En react puedes crear paginas web reactivas"}></Card>
        <Card title={'Productivo'} text={"Con React ya no es necesario repetir HTML, utiliza componentes para reutilizar codigo"}></Card>
        <Card title={'Rendimiento'} text={"Pon al limite tu creatividad"}></Card>
        <Card title={'Simple'} text={"Aplica tus conocimientos de CSS, HTML y Javascript"}></Card>
      </Section>
      <Footer></Footer>
    </>
  )
}

export default App
