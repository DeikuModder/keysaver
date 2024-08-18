import AppContent from "./components/AppContent";
import GeneralProvider from "./providers/GeneralProvider";

function App() {
  return (
    <GeneralProvider>
      <AppContent />
    </GeneralProvider>
  );
}

export default App;
