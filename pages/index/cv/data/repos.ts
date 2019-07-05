import buildEntities from '../buildEntities'

interface Repo {
  name: string
  techs: string[]
}

export default buildEntities<Repo>([
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
    name: 'knockout',
    techs: ['ember', 'sass']
  },
  {
    name: 'kappa-slack',
    techs: ['ruby', 'mechanize']
  },
  {
    name: 'colormaniac-ios',
    techs: ['objective-c', 'cocoa-touch']
  }
])
