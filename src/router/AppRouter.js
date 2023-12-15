import React from "react";
import { BrowserRouter, Route, Routes, NavLink, useParams} from "react-router-dom";


const Nav = () => (
    <nav>
        <NavLink to="/" className="p-2 mx-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">Home</NavLink>
        <NavLink to="/contactPage" className="p-2 mx-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"> Contact</NavLink>
        <NavLink to="/contactPage/12" className="p-2 mx-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"> ContactDetails</NavLink>
        <NavLink to="/productPage" className="p-2 mx-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"> Product</NavLink>
    </nav>

);
const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
);
const Homepage = () => {
    return (
    <>
        <div>Home Page</div>
    </>)
};

const ContactPage = () => {
    return (
        <>
            <div>ContactPage</div>
        </>
    )
}
const ContactPages=()=>{
    let {id} = useParams()
    return (
        <>
            <div>ContactPagesss</div>
            <div>ID:{id}</div>
        </>
    )
}
const ProductPage = () => {
    return (
    <>
        <div>ProductPage</div>
    </>)
}
const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contactPage" element={<ContactPage />} />
            <Route path="/contactPage/:id" element={<ContactPages />} />
            <Route path="/productPage" element={<ProductPage />} />         
        </Routes>
    <Nav />
    </BrowserRouter>
);

export default AppRouter