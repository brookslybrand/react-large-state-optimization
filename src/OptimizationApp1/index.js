import React from 'react'

import ExpansionPanels from './ExpansionPanels'

import { FormsStateProvider } from './forms-context'

const OptimizationApp1 = () => (
  <FormsStateProvider>
    <div style={{ width: '50%', margin: '0 auto' }}>
      <ExpansionPanels />
    </div>
  </FormsStateProvider>
)

export default OptimizationApp1
