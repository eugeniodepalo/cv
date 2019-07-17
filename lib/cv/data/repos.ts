import buildEntities from '../buildEntities'

export interface Repo {
  name: string
  techs: string[]
}

export default buildEntities<Repo>([
  {
    name: 'eugeniodepalo/cv',
    techs: ['react', 'typescript', 'redux', 'saga', 'styled-components', 'next', 'jest', 'enzyme']
  },
  {
    name: 'calderalabs/ember-calendar',
    techs: ['ember', 'qunit']
  },
  {
    name: 'calderalabs/haterblock-client',
    techs: ['reason', 'react']
  },
  {
    name: 'calderalabs/haterblock-server',
    techs: ['elixir', 'phoenix']
  },
  {
    name: 'calderalabs/terraform-server-template',
    techs: ['terraform', 'ansible', 'dokku', 'bash']
  },
  {
    name: 'calderalabs/twitchpluschat',
    techs: ['rails', 'thor']
  },
  {
    name: 'calderalabs/knockout',
    techs: ['ember', 'sass']
  },
  {
    name: 'calderalabs/kappa-slack',
    techs: ['ruby', 'mechanize']
  },
  {
    name: 'calderalabs/colormaniac-ios',
    techs: ['objective-c', 'cocoa-touch']
  }
])
