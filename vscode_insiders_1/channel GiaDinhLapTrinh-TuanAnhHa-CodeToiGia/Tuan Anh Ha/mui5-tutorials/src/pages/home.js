import { useState, useContext } from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Brightness3Icon from '@mui/icons-material/Brightness3'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'

import CustomerCard from '../components/CustomerCard'

import CustomerContext from '../context/CustomerContext'
import CssBaseline from '@mui/material/CssBaseline'

import { styled } from '@mui/system'

import { createTheme, ThemeProvider } from '@mui/material'
import Switch from '@mui/material/Switch'

function Home() {
  const { customers } = useContext(CustomerContext)

  const [mode, setMode] = useState('dark')
  const customTheme = createTheme({
    palette: {
      mode: mode,
    },
  })

  const MyDiv = styled('div')({
    backgroundColor: 'aliceblue',
    padding: 10,
    borderRadius: 15,
  })
  const MyTypography = styled(Typography)({
    backgroundColor: '#52A388',
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontSize: '20px',
  })

  return (
    <ThemeProvider theme={customTheme}>
      <Container sx={{ pt: '25px' }}>
        <CssBaseline />
        <Typography variant='h3' gutterBottom align='center'>
          App to manage customers
        </Typography>
        <MyTypography>This is an app using Material UI 5.</MyTypography>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Drawer variant='permanent' anchor='left'>
              <List>
                <ListItem component='a' href='/create'>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary='Create new customer' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Brightness3Icon />
                  </ListItemIcon>
                  <Switch
                    onChange={(e) =>
                      setMode(mode === 'light' ? 'dark' : 'light')
                    }
                  />
                  <ListItemText primary='Switch mode' />
                </ListItem>
              </List>
            </Drawer>
          </Box>
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Grid container p={5} spacing={5}>
              {customers &&
                customers.map((customer) => (
                  <Grid item xs={4} key={customer.id}>
                    <MyDiv>
                      <CustomerCard customer={customer} />
                    </MyDiv>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
