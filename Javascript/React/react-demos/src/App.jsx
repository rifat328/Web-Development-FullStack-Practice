
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { JSXRules } from "./components/JSXRules";
import Calculator from "./components/Calculator";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import Lists from "./components/Lists";
import UserInfo from "./components/UserInfo";
import User from "./components/User";
import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import StyledCard from "./components/StyledCard";
import ProfileCard from "./components/ProfileCard";
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
    <hr/>
    <UserInfo/>
    <hr/>
    <User   userName='Rifat Hossain' 
            userEmail='rifathossain328663@gmail.com'
            userLocation="https://maps.app.goo.gl/CGywuYBt5K22Yivs5"
            img='https://picsum.photos/200'
            isMarried={false}
            userAge={26}
            userClass='VIP'
            userSpending={200000}
    />
    <hr/>
    <Weather temperature={27} />
    <UserStatus loggedIn={true} isAdmin={false}/>
    <StyledCard/>
    <ProfileCard/>
    {/*state and hooks*/} 
</div>

}

export default App;