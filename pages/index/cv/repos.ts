import buildEntities from './buildEntities'

interface Repo {
  name: string
  description: string
  techs: Array<string>
}

export default buildEntities<Repo>([
  {
    name: 'ember-calendar',
    description: 'Ember component to create and manage events in a timezone-aware calendar.',
    techs: ['ember', 'qunit']
  },
  {
    name: 'dotamastery-recorder',
    description: 'Node.js app to record and store replays automatically by using the Dota 2 game client.',
    techs: ['node', 'bull', 'robotjs']
  },
  {
    name: 'haterblock-client',
    description: 'ReasonML front-end for the Haterblock web service.',
    techs: ['reason', 'react']
  },
  {
    name: 'haterblock-server',
    description:
      'Phoenix back-end for Haterblock, a web service providing automated toxic ' +
      'comment moderation through sentiment analysis.',
    techs: ['elixir', 'phoenix']
  },
  {
    name: 'terraform-server-template',
    description: 'Blueprint to host and deploy web services with Terraform/Ansible/Dokku.',
    techs: ['terraform', 'ansible', 'dokku', 'bash']
  },
  {
    name: 'twitchpluschat',
    description: 'Ruby app to record and replay live Twitch stream interactions.',
    techs: ['rails', 'thor']
  },
  {
    name: 'knockout',
    description:
      'Ember.js front-end for Knockout, a web platform ' +
      'for gamers to catch up with their favorite esports events completely spoiler-free.',
    techs: ['ember', 'sass']
  },
  {
    name: 'kappa-slack',
    description: 'Ruby app to import Twitch emotes in Slack.',
    techs: ['ruby', 'mechanize']
  },
  {
    name: 'colormaniac-ios',
    description: 'Visual memory game for iPad.',
    techs: ['objective-c', 'cocoa-touch']
  }
])
