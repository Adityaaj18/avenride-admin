import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { Col, Container, Row } from 'react-bootstrap'
import { UserAuthContextProvider } from './context/UserAuthContext'
import Details from './components/Details'
import Qrcode from './components/Qrcode'
import Help from './components/Help'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

function App() {
   return (
      <div className="App">
         <Container>
            <Row>
               <Col>
                  <UserAuthContextProvider>
                     <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/qrcode/:id" element={<Qrcode />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/help/page1" element={<Page1 />} />
                        <Route path="/help/page2" element={<Page2 />} />
                     </Routes>
                  </UserAuthContextProvider>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default App
