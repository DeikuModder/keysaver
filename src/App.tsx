import AppContent from "./components/AppContent";
import UPDATE_NOTIFICATION from "./components/Common/UPDATE_NOTIFICATION";
import GeneralProvider from "./providers/GeneralProvider";

function App() {
  return (
    <>
      <UPDATE_NOTIFICATION />
      <GeneralProvider>
        <AppContent />
      </GeneralProvider>
    </>
  );
}

export default App;
