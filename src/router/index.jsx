import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import MAsterMind from "../pages/MAsterMind"


const Pages = () => {
    return (

        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/master-mind' element={<MAsterMind />} />
        </Routes>
    )
}

export default Pages