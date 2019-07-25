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

  return forms.map(form => <CustomExpansionPanel key={form.id} {...form} />)
}

const CustomExpansionPanel = memo(({ id, firstName, lastName, email }) => {
  const [expanded, setExpanded] = useState(true)
  const formsDispatch = useFormsDispatch()

  const handleSetFirstName = firstName =>
    formsDispatch(setFirstName(id, firstName))

  const handleSetLastName = lastName => formsDispatch(setLastName(id, lastName))

  const handleSetEmail = email => formsDispatch(setEmail(id, email))

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
      <ExpansionPanelDetails>
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
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
})

export default ExpansionPanels
