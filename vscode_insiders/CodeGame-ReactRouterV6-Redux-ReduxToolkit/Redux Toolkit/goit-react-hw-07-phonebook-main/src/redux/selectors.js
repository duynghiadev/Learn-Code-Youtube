import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toUpperCase().includes(filterValue.toUpperCase())
    );

    return filteredContacts;
  }
);
