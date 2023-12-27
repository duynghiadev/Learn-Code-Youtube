import { useState, useContext } from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Rating from '@mui/material/Rating'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

import CustomerContext from '../context/CustomerContext'

function Create() {
  const { createCustomer } = useContext(CustomerContext)

  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [nameError, setNameError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [gender, setGender] = useState('female')
  const [rating, setRating] = useState(5)
  const [openSnackBar, setOpenSnackBar] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && details) {
      createCustomer({ name, details, gender, rating })
      setOpenSnackBar(true)
    }

    if (name === '') {
      setNameError(true)
    }

    if (details === '') {
      setDetailsError(true)
    }
  }

  const handleClose = () => {
    setOpenSnackBar(false)
  }

  return (
    <Container>
      <Typography variant='h3' align='center' gutterBottom>
        Create a new customer
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Box pb={2}>
          <TextField
            label='Name'
            variant='standard'
            fullWidth
            required
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />
          <TextField
            label='Details'
            variant='standard'
            fullWidth
            multiline
            rows={3}
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
          />
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel
              value='others'
              control={<Radio />}
              label='Others'
            />
          </RadioGroup>
          <Rating
            value={rating}
            onChange={(e) => setRating(~~e.target.value)}
          />
        </Box>

        <Button type='submit' variant='contained' startIcon={<SendIcon />}>
          Submit
        </Button>
      </form>

      <Snackbar
        open={openSnackBar}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <MuiAlert severity='success'>
          Created new customer successfully!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default Create
