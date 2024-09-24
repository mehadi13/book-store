import Banner from "./components/Banner";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Header from "./components/Header";

import './output.css';
const App = () => {

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Header/>
      <Banner/>
      <BookList/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
