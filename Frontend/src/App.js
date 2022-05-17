import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import PrivateRoute from "./Routes/PrivateRoute"
import {useSelector} from 'react-redux';
import PublicRoute from './Routes/PublicRoute';
import {CssBaseline} from "@mui/material";
import {QueryClientProvider, QueryClient} from 'react-query'

function App() {
  const state = useSelector((state) => state);
  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
    <div className="App">
        <CssBaseline/>
      <Routes>

         <Route exact path="/login" element={<PublicRoute restricted={state.loggedIn}>
           <Login/>
         </PublicRoute>
        } />

         <Route exact path="/"
          element={<PrivateRoute loggedIn={state.loggedIn}>
            <HomePage/>
          </PrivateRoute>}
         />

      </Routes>
    </div>
      </QueryClientProvider>
  );
}

export default App;
