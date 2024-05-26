// import { BrowserRouter } from "react-router-dom";

// import { Navbar, Hero, AboutUs, Media, Member, Donate, Footer } from "./Components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       {/* <div className='relative z-0 bg-primary'>
//         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
//           <Navbar />
//           <Hero />
//           <Footer/>
//         {/* </div> */}
//         {/* <AboutUs/>
//         <Media/>
//         <Member/>
//         <Donate/> */}
//       {/* </div> */}
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter } from "react-router-dom"
// import {Navbar, Hero, AboutUs, Media, Member, Donate, Footer} from "./Components"
// function App() {

//   return (
//     <>
//       <BrowserRouter>
//         <div className="relative z-0 bg-orange-400">
//           <div className="bg-cover bg-no-repeat bg-center">
//             <Navbar/>
//             <Hero/>
//             <Footer/>
//           </div>

//         </div>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Hero, AboutUs, Media, Member, Donate, Footer } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-orange-400 ">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/member" element={<Member />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

