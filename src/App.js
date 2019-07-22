import React, { useState } from 'react'
import { Router, navigate } from '@reach/router'

import { AppBar as MuiAppBar, Tabs, Tab } from '@material-ui/core'
import SlowApp from './SlowApp'

import { SLOW_APP_ROUTE } from './constants/routes'

const App = () => (
  <div>
    <div>
      {/* taken from https://material-ui.com/components/tabs/#simple-tabs */}
      <AppBar />
      <h1>Optimizing a React App</h1>
      <Router primary={false}>
        {tabObjects.map(({ title, route, RouteComponent }) => (
          <RouteComponent key={title} path={route} />
        ))}
      </Router>
    </div>
  </div>
)

const tabObjects = [
  {
    title: 'Slow App',
    route: SLOW_APP_ROUTE,
    RouteComponent: () => <SlowApp />
  }
]

const AppBar = () => {
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
    navigate(`/${tabObjects[newValue].route}`)
    window.scrollTo(0, 0)
  }

  return (
    <MuiAppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Different implementations of the same app"
      >
        {tabObjects.map(({ title }) => (
          <Tab
            key={title}
            label={title}
            {...a11yProps(tabObjects[0].title.toLowerCase().replace(' ', '-'))}
          />
        ))}
      </Tabs>
    </MuiAppBar>
  )
}

const a11yProps = title => ({
  id: `${title}-implementation-tab`,
  'aria-controls': `${title}-implementation-tabpanel`
})

export default App
