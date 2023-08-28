import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./store/slices/catState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about-us";
import { getCats } from "./api/api";

function App() {
  const cats_rdx = useSelector((state) => state?.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
    axiosFetcher();
  }, []);

  const axiosFetcher = () => {
    console.log("axios fetch");
    let the_cats = getCats()
      .then((res) => {
        console.log(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/*" element={<>404</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
