import './App.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import HomeIcon from '@mui/icons-material/Home'
import CssIcon from '@mui/icons-material/Css'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

function App() {
  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <HomeIcon fontSize='large' />
          <Typography variant='h5' align='left' pl={2} sx={{ flexGrow: 1 }}>
            MUI-5
          </Typography>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Signup</Button>
        </Toolbar>
      </AppBar>
      <Box mt={5}>
        <Typography variant='h1' gutterBottom>
          MUI-5 App
        </Typography>
        <Typography variant='h3' gutterBottom>
          This is a app using MUI-5
        </Typography>
        <Typography variant='subtitle1' p={5} align='justify' mt={5}>
          This works great when the changes can be isolated to a new DOM
          element. For instance, you can change the margin this way. However,
          sometimes you have to target the underlying DOM element. As an
          example, you may want to change the border of the Button. The Button
          component defines its own styles. <CssIcon fontSize='large' />{' '}
          inheritance doesn't help. To workaround the problem, you can use the
          sx prop directly on the child if it is a MUI component.
        </Typography>
      </Box>
      <Grid container p={5} spacing={5}>
        <Grid item xs={4}>
          <Typography paragraph={true} align='justify'>
            This works great when the changes can be isolated to a new DOM
            element. For instance, you can change the margin this way. However,
            sometimes you have to target the underlying DOM element. As an
            example, you may want to change the border of the Button. The Button
            component defines its own styles. CSS inheritance doesn't help. To
            workaround the problem, you can use the sx prop directly on the
            child if it is a MUI component.
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <Typography>Bootstrap 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is a CSS framework to build website quickly. Bootstrap is
                very easy to learn.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2-content'
              id='panel2-header'
            >
              <Typography>MUI 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is a CSS framework to build website quickly. This library
                is good for ReactJs.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion disabled>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>New framework for CSS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is a CSS framework to build website quickly. This library
                is good for ReactJs.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8}>
          <Typography paragraph={true} align='justify'>
            This works great when the changes can be isolated to a new DOM
            element. For instance, you can change the margin this way. However,
            sometimes you have to target the underlying DOM element. As an
            example, you may want to change the border of the Button. The Button
            component defines its own styles. CSS inheritance doesn't help. To
            workaround the problem, you can use the sx prop directly on the
            child if it is a MUI component. This works great when the changes
            can be isolated to a new DOM element. For instance, you can change
            the margin this way. However, sometimes you have to target the
            underlying DOM element. As an example, you may want to change the
            border of the Button. The Button component defines its own styles.
            CSS inheritance doesn't help. To workaround the problem, you can use
            the sx prop directly on the child if it is a MUI component.
          </Typography>
          <FormControl>
            <FormLabel>Which framework would you like to use?</FormLabel>
            <RadioGroup row defaultValue='laravel' name='radio-button-group'>
              <FormControlLabel
                value='bootstrap'
                control={<Radio />}
                label='Bootstrap'
              />
              <FormControlLabel
                value='laravel'
                control={<Radio />}
                label='Laravel'
              />
              <FormControlLabel
                value='react'
                control={<Radio />}
                label='React'
              />
              <FormControlLabel value='vue' control={<Radio />} label='Vue' />
              <FormControlLabel
                value='others'
                control={<Radio />}
                label='Others'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Stack direction='row' spacing={5} paddingTop={5} paddingLeft={50}>
        <Button variant='text'>Click Me</Button>
        <Button variant='outlined'>Sign In</Button>
        <Button disabled>Disabled</Button>
        <Button variant='outlined' startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant='outlined' startIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </div>
  )
}

export default App
