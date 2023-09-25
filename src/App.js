import Layout from "./components/main-layout/layout";
import Home from "./pages/home-page/home";
import About from "./pages/about-page/about";
import Sertifikat from "./components/sertifikat/sertifikat";
import Production from "./components/production/production";
function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
        <About/>
        <Sertifikat/>
        <Production/>
      </Layout>
    </div>
  );
}

export default App;
