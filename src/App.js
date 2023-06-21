import './App.css';
import Banner from './components/Banner';
import Header from "./components/Header";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from './components/Error404';
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';


function App() {
  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Carrousel/>
        <Banner/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/Cart"} element={<Cart/>}/>
            <Route path={"/Checkout"} element={<Checkout/>}/>
            <Route path={"/*"} element={<Error404/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;