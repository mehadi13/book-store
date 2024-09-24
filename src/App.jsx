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
export default function App(){
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} loader={bookLoader} />
        <Route path=":bookId" element={<BookDetails/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Route>
    )
  );


  return (
    <RouterProvider router={router}/>
  )
}
