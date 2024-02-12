import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LangingPage from "./screens/LandingPage/LangingPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <LangingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
