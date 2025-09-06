import { RouterProvider } from "@/shared/libs";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./shared/state/store";
import { ToastContainer } from "./shared/components/Toast";
import { LoadingSpinner } from "@/shared/components";
import { router } from "./shared/routes/routes";
import { ErrorBoundary } from "./shared/components/ErrorBoundary";
import { ThemeProvider } from "./shared/hooks/use-theme";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
            <RouterProvider router={router} />
            <ToastContainer />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
