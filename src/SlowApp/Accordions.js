import React, { useState } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordions = ({ forms, ...handlers }) => {
  return forms.map((form) => (
    <CustomAccordion key={form.id} {...form} {...handlers} />
  ));
};

const CustomAccordion = ({
  id,
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmail,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded((prevExpanded) => !prevExpanded)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}-content`}
      >
        <span>Form {id}</span>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <form onSubmit={(e) => e.preventDefault()}>
          <span>First name:</span>
          <br />
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(id, e.target.value)}
          />
          <br />
          <span>Last name:</span>
          <br />
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(id, e.target.value)}
          />
          <br />
          <span>email:</span>
          <br />
          <input
            type="email"
            name="lastname"
            value={email}
            onChange={(e) => setEmail(id, e.target.value)}
          />
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordions;
