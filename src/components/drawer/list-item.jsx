import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import theme from '../../theming';
import { ThemeProvider } from '@mui/material/styles';

export default function DrawerListItem({ open, text, icon: Icon, onClick, selected }) {
  return (

      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          selected={selected}
          onClick={() => onClick?.(text)}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          {Icon && (
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
  );
}