// import Services from "./Services";
// import MenuComponent from "./MenuComponent";

// export default function Header() {
//   return (
//     <section className="header">
//       <nav className="navbar shadow navbar-expand-lg top">
//         <div className="container d-flex flex-row justify-content-center align-items-center">
//           <a className="navbar-brand" href="#">
//             <img src="images/logo.png"></img>
//           </a>

//           <div
//             className="collapse  navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-dark" href="#services">
//                   Services
//                 </a>
//               </li>
//               {/* <li className="nav-item">
//                 <a className="nav-link text-dark" href="#">
//                   Project
//                 </a>
//               </li> */}
//               <li className="nav-item">
//                 <a className="nav-link text-dark" href="#career">
//                   Career
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-dark" href="#contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <button
//             className="register btn btn-primary rounded-0 fw-medium border border-0 mainblue"
//             type="submit"
//           >
//             Register
//           </button>
//         </div>
//         <div className="ham-menu">
//           <div id='menu' className="enu" onClick="toggleMenu()">
//             <img src="images/List.svg" className="svg me-4"></img>
//           </div>
//           <div id="menu-links" className="menu-links" >
//             <a href="#" onClick="toggleMenu()">
//               <li className=" pe-8 ">Home</li>
//             </a>
//             <a href="#stories" onClick="toggleMenu()">
//               <li className="pe-8 ">Services</li>
//             </a>
//             <a href="#events" onClick="toggleMenu()">
//               <li className="pe-8 ">Career</li>
//             </a>
//             <a href="#blog" onClick="toggleMenu()">
//               <li className="pe-8">Contact</li>
//             </a>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// }

// // document.getElementById('menu').addEventListener('click', function(){
// //   console.log('clicke');
// //   document.getElementById('menu-links').classList.add('actives');
// // })
// // document.getElementById('btn-close').addEventListener('click', function(){
// //   document.getElementById('menu-links').classList.remove('actives');
// // })
// Header.js
import React from 'react';
import Services from './Services';
import MenuComponent from './MenuComponent';

export default function Header() {
  return (
    <section className="header">
      <nav className="navbar shadow navbar-expand-lg top">
        <div className="container d-flex flex-row justify-content-center align-items-center">
          <a className="navbar-brand" href="#">
            <img src="images/logo.png" alt="Logo" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#services">
                  Services
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Project
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link text-dark" href="#career">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className="register btn btn-primary rounded-0 fw-medium border border-0 mainblue"
            type="submit"
          >
            Register
          </button>
        </div>
        <MenuComponent />
      </nav>
    </section>
  );
}
