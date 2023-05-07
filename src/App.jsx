import Logo from "./components/Logo/Logo"
import Navbar from "./components/Navbar/Navbar"
import Pages from "./router"
import Header from "./wrappers/Header/Header"
import Main from "./wrappers/Main/Main"
import logoImg from '/logo.png'

function App() {

  return (
    <>
      <Header>
        <Logo logo={logoImg} />
        <Navbar />
        <div>
          <p>Autre</p>
        </div>
      </Header>
      <Main>
        <Pages />
      </Main>
    </>
  )
}

export default App
