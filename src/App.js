import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { Col, Container, Row } from 'react-bootstrap'
import { UserAuthContextProvider } from './context/UserAuthContext'
import Details from './components/Details'

function App() {
   return (
      <div className="App">
         <Container>
            <Row>
               <Col>
                  <UserAuthContextProvider>
                     <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="home" element={<Home />} />
                        <Route path="/details/:id" element={<Details />} />
                     </Routes>
                  </UserAuthContextProvider>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default App
