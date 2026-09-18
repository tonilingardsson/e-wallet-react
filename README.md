# E-Wallet React App

A small React + Redux wallet application for managing virtual payment cards. The app allows the user to view saved cards, select the active card, and add a new card through a dedicated form.

## Project purpose

This project demonstrates a simplified e-wallet flow with:

- a wallet page showing saved cards
- an active-card selection feature
- an add-card form with live preview
- Redux state management for the card list
- routing between the wallet and add-card views

## Features

- View saved payment cards
- Select one card as active
- Add a new card from a form
- Show a live card preview while entering data
- Persist app state through Redux
- Navigate between overview and add-card pages

## Tech stack

- React
- Redux Toolkit
- React Router DOM
- Create React App

## Project structure

- [src/App.js](src/App.js) – application router and page setup
- [src/index.js](src/index.js) – app bootstrap and Redux provider
- [src/redux/store.js](src/redux/store.js) – Redux store configuration
- [src/redux/cardSlice.js](src/redux/cardSlice.js) – card state and actions
- [src/views/AddCard.js](src/views/AddCard.js) – add-card page logic
- [src/components/Wallet.js](src/components/Wallet.js) – wallet overview page
- [src/components/Card.js](src/components/Card.js) – card presentation component
- [src/components/CardForm.js](src/components/CardForm.js) – add-card form
- [src/components/Top.js](src/components/Top.js) – page header component
- [src/App.test.js](src/App.test.js) – project smoke test

## Setup and run

1. Open the project folder.
2. Install dependencies:

   npm install

3. Start the app in development mode:

   npm start

4. Open the app in the browser at:

   http://localhost:3000

## Root cause of the initial bug

The project originally had a partial and inconsistent implementation. The main causes of the runtime problems were:

- missing package dependency for React Router
- wrong Redux import paths
- missing component files referenced by the app
- mismatched slice names and exports
- incorrect app bootstrap and provider setup

These issues were corrected by restoring the proper imports, component files, app root wiring, and state flow.

## Commit documentation

### 1) fix(app): restore project bootstrap and app entry
Files: [src/index.js](src/index.js), [src/App.js](src/App.js)

This commit fixes the broken application bootstrap by correcting the React entry flow in the root app setup. The project was mounting an inconsistent root tree and not using the Redux provider correctly, which prevented the real app from initializing as intended.

### 2) fix(router): add routing dependency and app navigation setup
Files: [package.json](package.json), [src/App.js](src/App.js)

This commit adds the required react-router-dom dependency and restores the application routing configuration. The project referenced browser routing without the package installed, causing module resolution failures.

### 3) fix(redux): correct slice import and reducer wiring
Files: [src/redux/store.js](src/redux/store.js), [src/redux/cardSlice.js](src/redux/cardSlice.js)

This commit repairs the Redux store configuration and card slice imports that were pointing to non-existent or mismatched files. The fix ensures the store uses the correct reducer and the card actions are exported from the proper slice.

### 4) fix(ui): add missing wallet and card components
Files: [src/components/Card.js](src/components/Card.js), [src/components/Top.js](src/components/Top.js), [src/components/CardForm.js](src/components/CardForm.js), [src/components/Wallet.js](src/components/Wallet.js)

This commit introduces the missing wallet, card, top bar, and form components required by the app. The added components restore the expected wallet and add-card experience.

### 5) fix(form): repair add-card form data flow and dispatch logic
Files: [src/views/AddCard.js](src/views/AddCard.js)

This commit fixes the add-card form logic by correcting import paths, state handling, and dispatch behavior. The form now updates the local state correctly and navigates back to the wallet view after adding a card.

### 6) test(app): align project test with actual wallet UI
Files: [src/App.test.js](src/App.test.js)

This commit updates the application test to validate the actual wallet page instead of the default CRA placeholder test.

## Status

The app is intended to be used as a functioning React wallet demo and has been corrected to match the expected project structure and behavior.
