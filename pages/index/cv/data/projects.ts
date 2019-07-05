import buildEntities from '../buildEntities'

interface Project {
  name: string
  description: string
  websiteUrl: string
  iconUrl: string
  techs: string[]
}

export default buildEntities<Project>([
  {
    name: 'DotaMastery',
    description: 'A web platform for Dota players to search and learn from high-skill replays.',
    websiteUrl: 'https://dotamastery.io',
    iconUrl: '/static/dotamastery.png',
    techs: ['ember', 'rails', 'postgres', 'sidekiq', 'rake']
  }
])
