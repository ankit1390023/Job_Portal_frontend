import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import Layout from './Layout'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
 import Jobs from './components/Jobs'
import Browse from './components/Browse'
import { Provider } from 'react-redux'
import store from './redux/store';
// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <SignUp />
//   },


// ])
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="contact" element={<Contact />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="/browse" element={<Browse/>} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
      <Toaster />
    </Provider>
  </React.StrictMode>,
)