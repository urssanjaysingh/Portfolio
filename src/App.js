import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import AboutMePage from './component/AboutMePage'
import HireMePage from './component/HireMePage'
import LandingPage from './component/LandingPage'
import NotFoundPage from './component/NotFoundPage'
import ProjectsPage from './component/ProjectsPage'
import Login from './features/auth/Login'
import DashLayout from './component/DashLayout'
import RequestsList from './features/requests/RequestsList'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import useTitle from './hooks/useTitle'

function App() {
  useTitle(`Sanjay Singh`)

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutMePage />} />
        <Route path="hire-me" element={<HireMePage />} />
        <Route path="projects" element={<ProjectsPage />} />

        <Route path="login" element={<Login />} />

        <Route element={<PersistLogin />}>
          <Route element={<Prefetch />}>
            <Route path='dash' element={<DashLayout />}>

              <Route path='requests'>
                <Route index element={<RequestsList />} />
              </Route>

            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;
