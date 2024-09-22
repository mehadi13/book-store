import Banner from "./components/Banner";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Navbar from "./components/Header";

import './output.css';
const App = () => {

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Navbar/>
      <Banner/>
      <BookList/>
      <Footer/>
      <Book/>
      </div>
      
    </>
  )
}

export default App
