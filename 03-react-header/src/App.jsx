import HelloWorld from "./components/HelloWorld";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/Footer";

const itens = {
  item1:"Sobre",
  item2:"Contate-nos",
  item3:"Trabalhe conosco",
  item4:"Localização",
  github:"https://github.com/erickramosxp"
}

function App(){
  return (
    <div>
      <MyHeader></MyHeader>
      {/* <HelloWorld></HelloWorld> */}
      <MyFooter conteudo={itens}></MyFooter>
    </div>
)
}

export default App;