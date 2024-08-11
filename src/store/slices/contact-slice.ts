import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact, IContacts } from '../../models/interface';
import { CONTACTS } from '../../mock-data/contacts-mock-data';


const initialState: IContacts = {
  contacts: CONTACTS,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {

    // Array Data Structure to store the contacts-info
    createContact: (state, action: PayloadAction<Array<IContact>>) => {
      state.contacts = state.contacts ?  [ ...action.payload, ...state.contacts] : [...action.payload];
    },

    // Reducer to Edit a Particular contact based on its unique Id
    editContact: (state, action: PayloadAction<IContact>) => {
      if (state.contacts) {
        state.contacts = state.contacts.map(contact =>
          contact.id === action.payload.id ? { ...contact, ...action.payload } : contact
        );
      }
    },

    // Deleteing the contact based on the received Id of the contact
    deleteContact: (state, action: PayloadAction<string>) => {
      if (state.contacts) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      }
    },
  },
});

export const { createContact, editContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
