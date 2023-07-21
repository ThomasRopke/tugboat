import SidebarLayout from 'layouts/SidebarLayout'
import Actions from 'pages/options/actions/Actions'
import General from 'pages/options/general/General'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const App = (): React.JSX.Element => (
  <HashRouter>
    <Routes>
      <Route element={<SidebarLayout />}>
        <Route index element={<Actions />} />
        <Route path="general" element={<General />} />
        <Route path="actions" element={<Actions />} />
      </Route>
    </Routes>
  </HashRouter>
)

export default App
