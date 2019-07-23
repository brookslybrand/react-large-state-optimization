import React, { useState, memo } from 'react'

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import {
  useFormsState,
  useFormsDispatch,
  setFirstName,
  setLastName,
  setEmail
} from './forms-context'

const ExpansionPanels = () => {
  const forms = useFormsState()

  return forms.map(form => (
    <CustomExpansionPanel key={form.id} id={form.id}>
      <CustomForm {...form} />
    </CustomExpansionPanel>
  ))
}

const CustomExpansionPanel = ({ id, children }) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <ExpansionPanel
      expanded={expanded}
      onChange={() => setExpanded(prevExpanded => !prevExpanded)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}-content`}
      >
        <span>Form {id}</span>
      </ExpansionPanelSummary>
      <Divider />
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

const CustomForm = ({ id, firstName, lastName, email }) => {
  const formsDispatch = useFormsDispatch()

  console.table({ id, firstName, lastName, email })

  const handleSetFirstName = firstName =>
    formsDispatch(setFirstName(id, firstName))

  const handleSetLastName = lastName => formsDispatch(setLastName(id, lastName))

  const handleSetEmail = email => formsDispatch(setEmail(id, email))

  return (
    <form onSubmit={e => e.preventDefault()}>
      <span>First name:</span>
      <br />
      <input
        type="text"
        name="firstname"
        value={firstName}
        onChange={e => handleSetFirstName(e.target.value)}
      />
      <br />
      <span>Last name:</span>
      <br />
      <input
        type="text"
        name="lastname"
        value={lastName}
        onChange={e => handleSetLastName(e.target.value)}
      />
      <br />
      <span>email:</span>
      <br />
      <input
        type="email"
        name="lastname"
        value={email}
        onChange={e => handleSetEmail(e.target.value)}
      />
    </form>
  )
}

function isSame(prev, next) {
  const comp = Object.keys(prev).map(prop => {
    const pp = prev[prop]
    const np = next[prop]

    return [prop, pp, np, pp === np]
  })
  console.table(comp)
  return comp.every(arr => arr[arr.length - 1])
}

export default ExpansionPanels
