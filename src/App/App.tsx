import "./App.css";
import { Providers } from "../Providers/Providers";
import { AppRouter } from "../Router/Router";

function App() {
  return (
    <Providers>
      <AppRouter></AppRouter>
    </Providers>
  );
}

export default App;
