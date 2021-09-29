import { UserProvider } from './context/UserContext';
import AppRouter from './routers';

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

export default App;
