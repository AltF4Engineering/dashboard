import Dashboard from "./components/dashboard";
import Map from "./components/map";
import store from "./components/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
        <Map />
      </div>
    </Provider>
  );
}

export default App;
