import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../pages/home";
import Aboutus from "../pages/aboutus";
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
               
                    <Route exact path='/' element={<Home />} />
                    <Route path="/about" element={<Aboutus />}/>
                    {/* <Route path="contact" element={<Contact />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;