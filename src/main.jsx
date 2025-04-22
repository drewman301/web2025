import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  isRouteErrorResponse,
  useRouteError //this is a Hook
} from 'react-router';
import './index.css'
import App from './App.jsx'
import Hello from './Hello'
import FavoriteColor from './favoriteColor'
import Clock from './Clock'
import Owo from './owo.jsx';
import ApiFetcher from './ApiFetcher'
import Notepad from './notepad'
import NamePicker from './namePicker'

function Root(){
  return (
    <div>
      <h1>I am Root!</h1>
      <nav>
        <Link to={'app'}>App</Link>
        <Link to={'hello'}>Hello</Link>
        <Link to={'favorite-color'}>Favorite Color</Link>
        <Link to={'apifetcher'}>UUID Fetcher</Link>
        <Link to={'notepad'}>Notepad</Link>
        <Link to={'namepicker'}>Name Picker</Link>
        <Link to={'owo'} hidden>e9 Image Grabber</Link>
      </nav>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

function ErrorBoundary(){
  const error = useRouteError();
  if(isRouteErrorResponse(error)){
    return(
    <div>
      <h1>{error.status} {error.statusText}</h1>
      <p>error.data</p>
      <img src='./src/assets/images/creature.gif' title='I have hired this thing to stare at you'/>
    </div>
    )
  } else if (error instanceof Error){
    return(
      <div>
        <h1>Errors</h1>
        <p>{error.message}</p>
      </div>
    )
  }else{
    return <h1>Unknown Error</h1>
  }

}

const router = createBrowserRouter([
  {
    path: '/web2025/',
    Component: Root,
    ErrorBoundary: ErrorBoundary,
    children: [
      //{index: true, Component: App},
      {path: 'hello', Component: Hello},
      {path: 'favorite-color', Component: FavoriteColor},
      {path: 'app', Component: App},
      {path: 'owo', Component: Owo},
      {path: 'apifetcher', Component: ApiFetcher},
      {path: 'notepad', Component: Notepad},
      {path: 'namepicker', Component: NamePicker}
    ]
  },
  {
    path: 'bitch',
    element: <div><h1>FUCC OFF</h1><Outlet /></div>,
    children: [
      {
        path: 'creature',
        element: <img src='./src/assets/images/creature.gif' />
      }
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
