
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './userApp';
function App() {
    return (
        <Router basename='user-app-management'> 
            <Routes >
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-user" element={<Users />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;