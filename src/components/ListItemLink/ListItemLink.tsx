import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconProps } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface ListItemLinkProps {
  icon: React.ComponentType<SvgIconProps>
  name: string
  to: string
}

const ListItemLink = ({ icon: Icon, name, to }: ListItemLinkProps) => (
  <ListItem disablePadding>
    <ListItemButton component={Link} to={to}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  </ListItem>
)

export default ListItemLink
