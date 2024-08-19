
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import './index.css';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        
        <Body />
      </>
    ),
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "head", element: <Head/>},
      { path: "watch", element: <WatchPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
