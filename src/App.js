import { Routes, Route, Router } from 'react-router';
import { Container } from 'react-bootstrap';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { About } from './components/About';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Container>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </Container>
    </>
  );
}

export default App;
