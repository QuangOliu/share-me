import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '6qft97bh',
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
  },
})
