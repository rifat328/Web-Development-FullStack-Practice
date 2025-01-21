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
import StateCounter from "./components/StateCounter";
import AddFriend from "./components/AddFriend";
import State from "./components/State";
import ToggleState from "./components/ToggleState";
import Exercise1 from "./components/Exercise1";
import Todo from "./components/Todo";
const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <JSXRules
        style={{
          textAlign: "center",
          paddingInlineStart: "0",
          listStylePosition: "inside",
        }}
      />
      <Calculator />
      <Footer />
      <Greeting />
      <ProductInfo />
      <hr></hr>
      <Lists />
      <hr />
      <UserInfo />
      <hr />
      <User
        userName="Rifat Hossain"
        userEmail="rifathossain328663@gmail.com"
        userLocation="https://maps.app.goo.gl/CGywuYBt5K22Yivs5"
        img="https://picsum.photos/200"
        isMarried={false}
        userAge={26}
        userClass="VIP"
        userSpending={200000}
      />
      <hr />
      <Weather temperature={27} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <StyledCard />
      <ProfileCard />
      {/*state and hooks*/}
      <div
        className="Topic-State-and-Hook"
        style={{ width: "70%", position: "relative", left: "15%" }}
      >
        <h1 style={{ textAlign: "center", textShadow: "2px 1px green" }}>
          State and hooks
        </h1>
        <p
          style={{
            color: "green",
            textEmphasis: "double-circle red",
            scale: "1",
          }}
        >
          State is a way to store and manage data that can change over time and
          affects how the component renders . we define state using useState
          Hook which allows you to set an initial value and provides a way to
          update that state.
        </p>
        <hr />
        <br />
      </div>
      <div className="Counter_using_State">
        <h2>What is a Hook?</h2>
        <p>it lets us use state without using classBase components</p>
        <StateCounter />
      </div>
      <AddFriend />
      <State />
      <ToggleState />
      <Exercise1 />
      <Todo></Todo>
    </div>
  );
};

export default App;
