import { createSelector } from '@reduxjs/toolkit'

const selectSelft = (state: RootState) => state.user

export const selector = {
  selectAccessToken: createSelector(selectSelft, (state) => state.accessToken)
}
