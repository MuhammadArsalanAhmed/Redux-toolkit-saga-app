import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./store/slices/catState";

function App() {
  const cats_rdx = useSelector((state) => state?.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, []);
  return <div className="App">cats</div>;
}

export default App;
