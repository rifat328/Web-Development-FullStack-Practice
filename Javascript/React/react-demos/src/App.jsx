
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { JSXRules } from "./components/JSXRules";
import Calculator from "./components/Calculator";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
const App =()=>{
return <div>
    <Header/>
    <MainContent/>
    <JSXRules style={{textAlign:'center',paddingInlineStart: '0',listStylePosition: 'inside'}}/>
    <Calculator/>
    <Footer/>
    <Greeting/>
    <ProductInfo/>
    <hr></hr>
    <Lists/>
</div>

}

export default App;