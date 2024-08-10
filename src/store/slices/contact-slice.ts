import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact, IContacts } from '../../models/interface';
import { STATUS } from '../../models/enums';

const contacts: IContact[] = [
  { id: '1', firstName: 'Alice', lastName: 'Johnson', status: STATUS.ACTIVE },
  { id: '2', firstName: 'Bob', lastName: 'Smith', status: STATUS.INACTIVE },
  { id: '3', firstName: 'Charlie', lastName: 'Brown', status: STATUS.ACTIVE },
  { id: '4', firstName: 'David', lastName: 'Williams', status: STATUS.INACTIVE },
  { id: '5', firstName: 'Emma', lastName: 'Jones', status: STATUS.ACTIVE },
  { id: '6', firstName: 'Fiona', lastName: 'Davis', status: STATUS.INACTIVE },
  { id: '7', firstName: 'George', lastName: 'Miller', status: STATUS.ACTIVE },
  { id: '8', firstName: 'Hannah', lastName: 'Wilson', status: STATUS.INACTIVE },
  { id: '9', firstName: 'Ian', lastName: 'Moore', status: STATUS.ACTIVE },
  { id: '10', firstName: 'Jack', lastName: 'Taylor', status: STATUS.INACTIVE },
  { id: '11', firstName: 'Katherine', lastName: 'Anderson', status: STATUS.ACTIVE },
  { id: '12', firstName: 'Liam', lastName: 'Thomas', status: STATUS.INACTIVE },
  { id: '13', firstName: 'Mia', lastName: 'Jackson', status: STATUS.ACTIVE },
  { id: '14', firstName: 'Nathan', lastName: 'White', status: STATUS.INACTIVE },
  { id: '15', firstName: 'Olivia', lastName: 'Harris', status: STATUS.ACTIVE },
  { id: '16', firstName: 'Paul', lastName: 'Martin', status: STATUS.INACTIVE },
  { id: '17', firstName: 'Quincy', lastName: 'Thompson', status: STATUS.ACTIVE },
  { id: '18', firstName: 'Rachel', lastName: 'Garcia', status: STATUS.INACTIVE },
  { id: '19', firstName: 'Samuel', lastName: 'Martinez', status: STATUS.ACTIVE },
  { id: '20', firstName: 'Tina', lastName: 'Rodriguez', status: STATUS.INACTIVE }
];

const initialState: IContacts = {
  // contacts: null,
  contacts: contacts,
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
