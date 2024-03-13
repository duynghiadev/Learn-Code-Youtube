import { Container, IconButton, InputBase, Stack, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GoSettings } from 'react-icons/go'
import Location from './Location'
import Logo from './Logo'
import ProfileSettings from './Profile'

const HeaderBox = styled(Box)({
  backgroundColor: 'white',
  borderBottom: '1px solid #ddd',
  minHeight: 70,
  display: 'flex',
  alignItems: 'center'
})

const Header = () => {
  return (
    <HeaderBox>
      <Container maxWidth={'lg'} sx={{ py: 2 }}>
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            display: { xs: 'none', md: 'flex' }
          }}
        >
          <Logo />
          <Location />
          <ProfileSettings />
        </Stack>

        {/* Mobile Menu */}
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: { xs: 'flex', md: 'none' }
          }}
        >
          <Stack spacing={1} sx={{ borderRadius: '20px', border: '1px solid #ddd', p: 1 }}>
            <IconButton>
              <AiOutlineSearch />
            </IconButton>
            <InputBase placeholder='search' />
            <IconButton>
              <GoSettings />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </HeaderBox>
  )
}

export default Header
