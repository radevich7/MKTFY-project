import "./assets/mktfy.css";
import AppRouter from "./Router/AppRouter";
import "./App.css";
import AppProvider from "./store/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
