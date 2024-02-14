import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LangingPage from "./screens/LandingPage/LangingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import Test from "./components/Test/Test";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LangingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
