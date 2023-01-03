import React  from 'react';
import About from './Pages/About';
import Network from './Pages/Networks';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import {ThemeProvider} from './Pages/ContextCode';

function App() {

  return (

    <ThemeProvider>
      
    <BrowserRouter>
    <Routes>

    <Route path='/' exact element={ <Home/>} />
    <Route path='/about' exact element={ <About/>} />
    <Route path='/networks' exact element={ <Network/>} />

    </Routes>
    </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
