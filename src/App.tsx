import React from 'react';
import './App.css';
import {AppNavigation} from "./presentation /routes";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./presentation /styles/theme";
import {Provider} from "react-redux";
import {persistor, store} from "./presentation /store/store";
import {PersistGate} from "redux-persist/integration/react";

function App() {
   return (
      <Provider store={store}>
         <PersistGate persistor={persistor} loading={null}>
            <ThemeProvider theme={theme}>
               <AppNavigation/>
            </ThemeProvider>
         </PersistGate>
      </Provider>
   );
}

export default App;
