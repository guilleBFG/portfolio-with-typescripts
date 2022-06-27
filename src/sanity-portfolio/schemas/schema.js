// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import stringLocale from './stringLocale'
import blockLocale from './blockLocale'
import user from './user'
import workHistory from './workHistory'
import education from './education'
import additionalTrainings from './additionalTrainings'
import resume from './resume'
import projects from './projects'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    resume, user, workHistory, education, additionalTrainings, 
    projects, stringLocale, blockLocale
  ]),
})
