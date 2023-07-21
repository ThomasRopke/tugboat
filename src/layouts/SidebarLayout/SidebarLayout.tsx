import SettingsIcons from '@mui/icons-material/Settings'
import TuneIcon from '@mui/icons-material/Tune'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ListItemLink from 'components/ListItemLink/ListItemLink'
import React from 'react'
import { Outlet } from 'react-router-dom'

const drawerWidth = 240

const SidebarLayout = () => (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Hyperlinker
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItemLink icon={SettingsIcons} name="General" to="general" />
          <ListItemLink icon={TuneIcon} name="Actions" to="actions" />
        </List>
      </Box>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
      <Toolbar />
      <Outlet />
    </Box>
  </Box>
)

export default SidebarLayout
