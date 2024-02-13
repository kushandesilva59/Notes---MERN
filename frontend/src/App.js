import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LangingPage from "./screens/LandingPage/LangingPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyNotes from "./components/MyNotes/MyNotes";
import Test from "./components/Test/Test";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LangingPage />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
