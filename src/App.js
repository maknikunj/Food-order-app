import { Fragment, useState } from "react"
import Headerinput from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from './Cart/Cart'
import Cartprovider from "./Store/Cart-provider";


function App() {

  const [showcart, setshowcart] = useState(false);

  const carthandler = (props) => {
    setshowcart(true);
  };

  const hidecarthandler = (props) => {
    setshowcart(false);
  };

  return (
    <Cartprovider   >
      {showcart && <Cart onClose={hidecarthandler} />}
      <Headerinput onshowcart={carthandler} />
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;