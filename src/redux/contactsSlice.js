// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const arrOfThunk = [fetchContacts, addContact, deleteContact];
// const fnMap = type => arrOfThunk.map(element => element[type]);

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const handleFulfilledGet = (state, action) => {
//   state.contacts = action.payload;
// };

// const handleFulfilledAdd = (state, { payload }) => {
//   state.contacts.push(payload);
// };

// const handleFulfilledDelete = (state, { payload }) => {
//   const index = state.contacts.findIndex(contact => contact.id === payload.id);
//   state.contacts.splice(index, 1);
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder

//       .addCase(fetchContacts.fulfilled, handleFulfilledGet)
//       .addCase(addContact.fulfilled, handleFulfilledAdd)
//       .addCase(deleteContact.fulfilled, handleFulfilledDelete)

//       .addMatcher(isAnyOf(...fnMap('pending')), handlePending)
//       .addMatcher(isAnyOf(...fnMap('rejected')), handleRejected)
//       .addMatcher(isAnyOf(...fnMap('fulfilled')), handleFulfilled);
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
