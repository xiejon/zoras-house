import './styles.bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/Home';
import DirectoryScreen from './screens/Directory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/explore" element={<DirectoryScreen />} />
    </Routes>
  );
}

export default App;
