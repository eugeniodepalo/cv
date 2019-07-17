import moment, { Moment } from 'moment'
import buildEntities from '../buildEntities'

const date = (value: string): Moment => moment(value, 'DD/MM/YYYY')

export enum TeamSize {
  Small,
  Medium,
  Large
}

export interface Position {
  name: string
  description: string
  highlights: string[]
  teamSize: TeamSize
  role: string
  process: string[]
  techs: string[]
  startDate: moment.Moment
  endDate: moment.Moment
}

export default buildEntities<Position>([
  {
    name: 'Smart Pension',
    teamSize: TeamSize.Medium,
    startDate: date('01/01/2019'),
    endDate: date('01/07/2019'),
    role: 'Senior Front-end Developer',
    techs: [
      'ember',
      'broccoli',
      'qunit',
      'bootstrap',
      'materialize',
      'rails',
      'react',
      'redux',
      'typescript',
      'jest',
      'enzyme',
      'bem'
    ],
    process: ['jira', 'kanban', 'standups', 'retros'],
    description: 'Works on Smart Pension, a pension and investments management platform for companies and employees.',
    highlights: [
      'Implements an animated and scrollable graph Ember component built on top of Graph.js',
      'Implements a generic range date picker on top of ember-power-select',
      'Implements a custom theming and white-labeling solution based on SASS, ember-intl and Broccoli.js',
      'Leads the technical effort in migrating all front-end apps from Materialize to Bootstrap',
      'Leads the technical effort in writing a generic UI component library with Ember ' +
        'as an in-repo addon, using Ember best practices (High-order components, DDAU, Immutability, modular BEM) ',
      'Defines and starts working on a roadmap to remove technical debt from all the apps ' +
        'including: Removing controllers in favour of services and route-components, angle bracket components ' +
        'pods, integration tests, test selectors',
      'Works on improving the stability of an internal app written in React ' +
        'Redux and TypeScript tested with Jest and Enzyme'
    ]
  },
  {
    name: 'British Gas',
    teamSize: TeamSize.Medium,
    startDate: date('01/04/2018'),
    endDate: date('01/12/2018'),
    role: 'Lead Front-end Developer',
    techs: ['ember', 'aem', 'qunit', 'bootstrap'],
    process: ['jira', 'scrum', 'standups', 'demos'],
    description: "Works at British Gas, UK's leading energy and home services provider.",
    highlights: [
      'Leads the techincal effort in building a multi-step form to book and manage boiler ' +
        'repair appointments with Ember, integrating with a JSON API back-end',
      'Builds each step of the form to be pixel-perfect and responsive according to provided designs',
      'Implements A/B tests with AEM and ember-islands',
      'Works on a tight deadline and presents weekly demos to stakeholders'
    ]
  },
  {
    name: 'Featurist',
    teamSize: TeamSize.Medium,
    startDate: date('01/03/2017'),
    endDate: date('01/03/2018'),
    role: 'Senior Front-end Developer',
    techs: ['react', 'hyperdom.js', 'node', 'firebase', 'braintree', 'redis', 'cucumber.js', 'mocha', 'chai'],
    process: ['trello', 'kanban', 'standups'],
    description:
      'Works as the lead developer on the Tesco Real Food CMS, written in React.js and Node/Redis as a back-end.',
    highlights: [
      'Implements page versioning and restoring with React.js/Redis, using the Flux pattern',
      'Works as the lead developer on Scribeasy, a children educational platform for ' +
        'visual story writing written with Hyperdom.js and Firebase',
      'Implements Firebase Authentication and user subscription plans with Braintree',
      'Implements a white-labeling feature that allows schools to have their own space ' +
        'while sharing assets and scenes with other schools'
    ]
  },
  {
    name: 'Zapnito',
    teamSize: TeamSize.Medium,
    startDate: date('01/04/2016'),
    endDate: date('01/02/2017'),
    role: 'Senior Front-end Developer',
    techs: ['ember', 'qunit', 'rails', 'postgres', 'redis', 'sass', 'bem'],
    process: ['trello', 'kanban', 'standups', 'demos', 'retros'],
    description: 'Works on Zapnito, a knowledge network and online teaching platform built with Ember.js.',
    highlights: [
      'Implements the interactive dashboard for students to track progress for their courses',
      'Created reusable components to show progress and track completion percentage of videos',
      'Implements the necessary back-end endpoints to persist progress tracking',
      'Refactors the authorization scheme to allow clients to customize user permissions by group'
    ]
  },
  {
    name: 'Kayako',
    teamSize: TeamSize.Medium,
    startDate: date('01/12/2015'),
    endDate: date('01/03/2016'),
    role: 'Senior Front-end Developer',
    techs: ['ember', 'qunit', 'sass'],
    process: ['jira', 'scrum', 'standups', 'retros'],
    description: 'Works on Kayako, a CRM system built with Ember.',
    highlights: [
      'Implements the UI to build custom forms for the customer support dashboard',
      'Builds generic components to render form fields based on a JSON spec provided by the back-end'
    ]
  },
  {
    name: 'Tallarium',
    teamSize: TeamSize.Small,
    startDate: date('01/03/2015'),
    endDate: date('01/11/2015'),
    role: 'Senior Front-end Developer',
    techs: ['ember', 'node'],
    process: ['trello', 'kanban', 'standups'],
    description: 'Works on Tallarium, a real time trading chat built with Ember and Node as a back-end.',
    highlights: [
      'Extracts large pieces of the chat UI to reusable components',
      'Largely improved performance of resource-intensive list components by leveraging ember-collection',
      'Refactored parts of the codebase to be using latest Ember best practices'
    ]
  },
  {
    name: 'Starck.com (GBH)',
    teamSize: TeamSize.Small,
    startDate: date('01/02/2015'),
    endDate: date('01/03/2015'),
    role: 'Front-end Developer',
    techs: ['ember', 'firebase', 'sass', 'lunr.js', 'bootstrap', 'aws', 'bem'],
    process: ['trello', 'kanban', 'standups'],
    description:
      'Rebuilds starck.com from the ground up, as a single page app using Ember.js and Firebase as a back-end.',
    highlights: [
      'Implements a custom grid layouting algorithm based on ' +
        'Packery.js and ember-collection that maximizes used screen space',
      'Implements client-side indexed search of thousands of items and products with Lunr.js',
      'Builds a custom CMS to provide data for all the pages with Ember/Firebase/Firebase Auth',
      'Sets up a deployment pipeline with S3, CloudFront and ember-cli-deploy'
    ]
  },
  {
    name: 'AlphaSights',
    teamSize: TeamSize.Large,
    startDate: date('01/06/2014'),
    endDate: date('01/01/2015'),
    role: 'Senior front-end Developer',
    process: ['pivotal-tracker', 'trello', 'scrum', 'standups', 'retros', 'demos'],
    techs: ['rails', 'ember', 'postgres', 'sass', 'tdd', 'bem'],
    description: 'Works on the internal dashboard for analysts to schedule calls between clients and advisers.',
    highlights: [
      'Works on creating a generic table-like Rails component that supported custom sorting and dynamic columns',
      'Leads the technical effort in rebuilding the dashboard with Ember.js from the ground up',
      'Coaches junior devs introducing them to Ember.js',
      'Implements reusable components and test helpers to mantain a consistent style',
      'Extracts part of the work as open source, releasing and maintaining ember-calendar and ember-scrollable',
      'Implements a custom ember-simple-auth plugin to authenticate with Google Javascript API'
    ]
  },
  {
    name: 'Listora',
    teamSize: TeamSize.Medium,
    startDate: date('01/02/2014'),
    endDate: date('01/05/2014'),
    role: 'Front-end Developer',
    techs: ['angular', 'clojure', 'firebase', 'sass', 'mocha', 'chai'],
    process: ['trello', 'kanban', 'standups'],
    description: 'Works on Listora, a web platform for publishers to manage and display events.',
    highlights: ['Works on building the event creation form in Angular using Firebase/Clojure as a back-end']
  },
  {
    name: 'Responsa',
    teamSize: TeamSize.Small,
    startDate: date('01/02/2012'),
    endDate: date('01/01/2014'),
    role: 'Co-founder and Lead Developer',
    techs: ['rails', 'rjs', 'sass', 'rspec', 'capybara', 'sso', 'postgres', 'redis', 'json', 'tdd', 'knockout'],
    process: ['trello', 'kanban', 'standups'],
    description: 'Works on Responsa, a web service offering an interactive and embeddable FAQ widget.',
    highlights: [
      'Works on the initial implementation written in Rails/RJS and jQuery, using Postgres/Redis as data stores',
      'Rewrites and redesigns the front-end in Knockout and refactors the Rails app to be JSON API-only',
      'Implements custom token-based SSO auth to integrate with external auth schemes'
    ]
  },
  {
    name: 'H-umus',
    teamSize: TeamSize.Medium,
    startDate: date('01/01/2011'),
    endDate: date('01/01/2012'),
    role: 'iOS Developer',
    techs: ['cocoa-touch', 'frank', 'hudson'],
    process: ['pivotal-tracker', 'scrum', 'standups'],
    description: 'Works on Nuxie, an iPad-based platform for showroom sales.',
    highlights: [
      'Works on UI improvements to the already existing app sections',
      'Creates highly reusable view controllers to display deeply nested lists of clothes and other items',
      'Set up a self-hosted automated testing infrastructure with Frank and Hudson'
    ]
  }
])
