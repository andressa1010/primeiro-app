const ImageContainer = () => {
    return (
      <div className="image-container">
        <img src="./src/componets/imagens/baseeudora.jpg" alt="Imagem 1" />
        <img src="./src/componets/imagens/batomazul.jpg" alt="Imagem 2" />
      </div>
    );
  };
  
  function App() {
    return (
      <div className="imagens">
        <ImageContainer />
      </div>
    );
  }

export default App