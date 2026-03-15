import { Home } from './Home';
import { Navigation } from './navigation';

function App() {
  return (
    <div>
      <Home />
      <Navigation activeTab="home" />
    </div>
  );
}
export default App;
