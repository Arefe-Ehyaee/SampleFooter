import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";


function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
