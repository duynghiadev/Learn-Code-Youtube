import { useContext } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'

import DeleteIcon from '@mui/icons-material/Delete'

import CustomerContext from '../context/CustomerContext'
import CustomerModal from './CustomerModal'

import Checkbox from '@mui/material/Checkbox'

import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'

const CustomerCard = ({ customer }) => {
  const { deleteCustomer } = useContext(CustomerContext)
  const stringAvatar = (name) => {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  return (
    <Card key={customer.id}>
      <Avatar {...stringAvatar(customer.name)} sx={{ bgcolor: 'green' }} />
      <CardHeader
        action={
          <Tooltip title='Delete Customer' placement='bottom-end'>
            <IconButton onClick={() => deleteCustomer(customer.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        }
        title={customer.name}
      />
      <CardContent>
        <Typography paragraph align='justify'>
          {customer.details}
        </Typography>
        <CustomerModal customer={customer} />
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: 'red' }} />}
        />
        <Checkbox
          icon={<ThumbDownOutlinedIcon />}
          checkedIcon={<ThumbDownIcon sx={{ color: 'blue' }} />}
        />
      </CardContent>
    </Card>
  )
}

export default CustomerCard
