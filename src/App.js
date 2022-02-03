import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Image from './Components/Image';
import Cards from './Components/Cards';
import Img1 from './Images/ice1.jpg';

function App() {
  return (
    <>
      <Header />
      <Image />
      <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-4">
              <Cards imgUrl={Img1} text="Product 1" />
            </div>
            <div className="col-md-4">
              <Cards imgUrl={Img1} text="Product 2" />
            </div>
            <div className="col-md-4">
              <Cards imgUrl={Img1} text="Product 3" />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
