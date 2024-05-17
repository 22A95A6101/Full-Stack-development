
// // import Home from './home';
// // import About from './about';
// // import { trainee,a } from './person';
// // import Img from './img';
// // function App(){
// //   console.log(trainee)
// //   console.log(a)
// //     return(
// //         <div>
// //           <h1>This is First Page</h1>
// //          <Home/>
// //          <About/>
// //         <trainee/>
// //         <Img/>
// //         </div>

        
       
   
// //     )
// // }
// // export default App;
// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // // <h1>Hello World</h1>
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // import App from './App';
// import Home from './home';
// import About from './about';
//  import Contact from './contact';
// import Serivces from './serivces';
// import Menu from './menu';
// import Trainees from './trainees';
// import Student from './student';
// import Event from './event';
// import Event1 from './events1';
// import Button from './button';
// import Counter from './counter';
// import Hooks from './hooks';
// import ArrayPrinter from './arrayprinter';
// import {BrowserRouter, Routes , Route } from 'react-router-dom';
// // import Img from './img';
// // import { trainee,a } from './person'
// function App() {
//   // console.log(trainee)
//   // console.log(a)
//   //   return(
//   //     <div>
//   //       <h1>This is my first app page</h1>
//   //       <About />
//   //       <Home />
//   //       <Img />
//   //       <trainee />
//   return(
    
//   <div className='App'>
//     {/* <div style={{ display: 'inline', float: 'left' }}>
//                 <h5 style={{ color: 'red' }}>No Bullet</h5>
//                 <ol style={{ listStyle: 'none' }}>
//                     <li>Apple</li>
//                     <li>Orange</li>
//                     <li>Guava</li>
//                 </ol>
//                 <h5 style={{ color: 'red' }}>List-Decimal</h5>
//                 <ol style={{ listStyleType: 'decimal' }}>
//                     <li>Banana</li>
//                     <li>Pineapple</li>
//                     <li>Cherry</li>
//                 </ol>
                
//                 <ul>
//                     <li>Strawberry</li>
//                     <li>Grapes</li>
//                     <li>Melon</li>
//                 </ul>
               
//                 <ul>
//                     <li>Water-melon</li>
//                     <li>Litchi</li>
//                     <li>Kiwi</li>
//                 </ul>
//                 </div> */}
//       <BrowserRouter>
//         <Menu/>
//           <Routes>
//               {/* <Route path = '/' element = {<Home/>}/>
//               <Route path = '/about' element = {<About/>}/>
//               <Route path = '/contact' element = {<Contact/>}/>*/}
//               <Route path = '/serivces' element = {<Serivces/>}/> 
//               <Route path = '/trainees' element = {<Trainees/>}/>
//               <Route path='/student' element = {<Student/>}/>
//               <Route path = '/contact' element = {<Contact/>}/>
//               <Route path = '/event' element = {<Event/>}/>
//               <Route path = '/event1' element = {<Event1/>}/>
//               <Route path = '/about' element = {<About/>}/>
//               <Route path = '/' element = {<Home/>}/>
//               <Route path = '/button' element = {<Button/>}/>
//               <Route path = '/counter' element = {<Counter/>}/>
//               <Route path = '/hooks' element = {<Hooks/>}/>
//               <Route path = '/arrayprinter' element = {<ArrayPrinter/>}/>
              


//           </Routes>
//       </BrowserRouter>
//   </div>
//   )
// }
// export default App
import FruitsSearch from "./task1";
import './App.css';
function App()
{
  return(
    <div className="App">
     
<FruitsSearch/>
    </div>
  )
}export default App;
