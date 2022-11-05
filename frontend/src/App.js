import './styles.bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/Home';
import DirectoryScreen from './screens/Directory';
import GroupScreen from './screens/GroupScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/explore" element={<DirectoryScreen />} />
      <Route path="/groups/:id" element={<GroupScreen />} />
    </Routes>
  );
}

export default App;
