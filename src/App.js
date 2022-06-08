import './App.css';
import Botao from './Botao';
import logo from './img/logo.png';
import imagemBox from './img/imagembox.jpg'


function App() {
  
  return (
    
<div>

       <header className="headerContainer">


         <img src={logo} alt="sua logo ou chamada" />

      <h1 className='headerTtle'>A SUA OPORTUNIDADE DE MUDAR O JOGO</h1>
      
       <h4 className="headerText">Esta Página e configurada na plataforma Mailchimp.
           la você pode criar as suas campanhas e enviar para os emails captados por aqui.</h4>
       <div className="headerData">
       <h1 className="containerData">10/05</h1>
       <h1 className="containerData">11/05</h1>
       <h1 className="containerData">12/05</h1>

       </div>
       <div className="BtContainer">
           <Botao/>
           </div>
       
       </header>
       <div className="VideoContainer" >
       <div className="sectionVideo">
           <iframe  src="https://www.youtube.com/embed/6twr-Hk6xjU" title="YouTube video player" frameBorder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </div>

           </div>
      {/*----------------------------------------------------------------------------------------------- */}
       
          

           <div className="sectionContainer1"> 
           <img className="imagemBox" src={imagemBox} alt="sua imagem aqui" />
           <p className="txt" >Lorem ipsum cursus aenean venenatis pulvinar tempor platea tempus fermentum vulputate nostra proin, 
VLorem ipsum cursus aenean venenatis pulvinar tempor platea tempus fermentum 
Lorem ipsum cursus aenean venenatis pulvinar tempor platea tempus fermentum vulputate nostra proin, </p>
           </div>

           <div className="sectionContainer2">
                 <h1 className="titulo2">ESTA É UMA PÁGINA DE EXEMPLO</h1>
                 <p className="txt2">
                 Lorem ipsum cursus aenean venenatis pulvinar tempor platea tempus fermentum vulputate nostra proin, 
                 etiam massa fames curabitur netus platea per nulla vulputate semper. in lacus hendrerit rhoncus dictum 
                 3fermentum lectus vestibulum fames, pharetra mi lectus tincidunt at id adipiscing pulvinar, 
                 </p>
           </div>
      
           <div className="sectionContainer3"> 
<p className="txt3">
           Lorem ipsum cursus aenean venenatis pulvinar tempor platea tempus fermentum vulputate nostra proin, etiam massa 
           fames curabitur netus platea per nulla vulputate semper. in lacus hendrerit rhoncus dictum fermentum lectus vestibulum 
           fames, pharetra mi lectus tincidunt at id adipiscing pulvinar
           </p>
           <div className="circle">
           <img className="imagemBox3" src={imagemBox} alt="sua imagem aqui" />
           </div>
</div>
<div className="BtContainer">
           <Botao/>
           </div>
      {/*----------------------------------------------------------------------------------------------- */}
      
      <footer className="footerContainer">
<p className="txt4"> Seus dados aqui  CNPJ:00000000/0001-00</p>
<p>Desenvolvido por Phelipe Sousa</p>

      </footer>
    </div>
  );
}

export default App;
