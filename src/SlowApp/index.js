import React, { useReducer } from 'react'

import ExpansionPanels from './ExpansionPanels'

const N = 100
const initalState = Array.from({ length: N }).map((_, i) => ({
  id: i,
  firstName: 'placeholder first name',
  lastName: 'placeholder last name',
  email: 'email@example.com'
}))

const reducer = (state, action) => {
  const handleUpdateState = updateState(state)
  switch (action.type) {
    case setFirstName().type:
      return handleUpdateState(action.id, 'firstName', action.firstName)

    case setLastName().type:
      return handleUpdateState(action.id, 'lastName', action.lastName)
    case setEmail().type:
      return handleUpdateState(action.id, 'email', action.email)

    default:
      return state
  }
}

const updateState = items => (idToFind, attr = '', value = '') => {
  const itemIndex = items.findIndex(({ id }) => id === idToFind)
  // if item was not found, don't alter the state
  if (itemIndex === -1) return items
  const itemsCopy = [...items]
  const newItem = { ...items[itemIndex], [attr]: value }
  itemsCopy.splice(itemIndex, 1, newItem)
  return itemsCopy
}

const setFirstName = (id = null, firstName = '') => ({
  type: 'SET_FIRST_NAME',
  id,
  firstName
})

const setLastName = (id = null, lastName = '') => ({
  type: 'SET_LAST_NAME',
  id,
  lastName
})

const setEmail = (id = null, email = '') => ({
  type: 'SET_EMAIL',
  id,
  email
})

const SlowApp = () => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const handleSetFirstName = (id, firstName) =>
    dispatch(setFirstName(id, firstName))

  const handleSetLastName = (id, lastName) =>
    dispatch(setLastName(id, lastName))

  const handleSetEmail = (id, email) => dispatch(setEmail(id, email))
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <ExpansionPanels
        items={state}
        setFirstName={handleSetFirstName}
        setLastName={handleSetLastName}
        setEmail={handleSetEmail}
      />
    </div>
  )
}

export default SlowApp
