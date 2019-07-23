import React, { useState } from 'react'

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const ExpansionPanels = ({ forms, ...handlers }) => {
  return forms.map(form => (
    <CustomExpansionPanel key={form.id} {...form} {...handlers} />
  ))
}

const CustomExpansionPanel = ({
  id,
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmail
}) => {
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
      <ExpansionPanelDetails>
        <form onSubmit={e => e.preventDefault()}>
          <span>First name:</span>
          <br />
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={e => setFirstName(id, e.target.value)}
          />
          <br />
          <span>Last name:</span>
          <br />
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={e => setLastName(id, e.target.value)}
          />
          <br />
          <span>email:</span>
          <br />
          <input
            type="email"
            name="lastname"
            value={email}
            onChange={e => setEmail(id, e.target.value)}
          />
        </form>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionPanels
