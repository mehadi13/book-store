import Banner from "./components/Banner";
import BookList, { bookLoader } from "./components/BookList";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './output.css';
import RootLayout from "./layouts/RootLayout";
import PageNotFound from "./pages/PageNotFound";
import UnderDev from "./pages/UnderDev";
import FAQ from "./pages/FAQ";
export default function App(){
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} loader={bookLoader} />
        <Route path="/books" element={<BookList/>}  loader={bookLoader} />
        <Route path="/books/:bookId" element={<BookDetails/>}/>

        <Route path="/about" element={<UnderDev/>} />
        <Route path="/blog" element={<UnderDev/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/sign-in" element={<UnderDev/>} />

        <Route path="*" element={<PageNotFound/>} />
      </Route>
    )
  );


  return (
    <RouterProvider router={router}/>
  )
}
