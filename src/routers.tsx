import { Route, Routes } from 'react-router-dom'
import { App } from './App'
import Month from './pages/month'
import Year from './pages/year'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Year />} />
      <Route path="/:year" element={<Month />} />
      <Route path="/:year/:month" element={<App />} />
    </Routes>
  )
}
