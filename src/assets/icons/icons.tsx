import { IconEnum } from '@/enums/IconEnum'
import Github from './github'
import Instagram from './instagram'
import JavaScript from './javascript'
import Linkedin from './linkedin'
import Whatsapp from './whatsapp'
import Html from './html'
import Css from './css'
import Sass from './sass'
import Typescript from './typescript'
import Nextjs from './nextjs'
import Tailwind from './tailwind'
import Reactjs from './react'
import Storybook from './storybook'
import Webpack from './webpack'
import Gulp from './gulp'
import Npm from './npm'
import Pnpm from './pnpm'
import Eslint from './eslint'
import Prettier from './prettier'
import Git from './git'

export interface IconType {
  name: IconEnum
  size?: number
  color?: string
  className?: string
}


const Icon = ({ name, size }: IconType) => {
  switch (name) {
    case 'linkedin':
      return <Linkedin size={size} />
    case 'github':
      return <Github size={size} />
    case 'whatsapp':
      return <Whatsapp size={size} />
    case 'instagram':
      return <Instagram size={size} />
    case 'javascript':
      return <JavaScript size={size} />
    case 'html':
      return <Html size={size} />
    case 'css':
      return <Css size={size} />
    case 'sass':
      return <Sass size={size} />
    case 'typescript':
      return <Typescript size={size} />
    case 'nextjs':
      return <Nextjs size={size} />
    case 'tailwind':
      return <Tailwind size={size} />
    case 'reactjs':
      return <Reactjs size={size} />
    case 'storybook':
      return <Storybook size={size} />
    case 'webpack':
      return <Webpack size={size} />
    case 'gulp':
      return <Gulp size={size} />
    case 'npm':
      return <Npm size={size} />
    case 'pnpm':
      return <Pnpm size={size} />
    case 'eslint':
      return <Eslint size={size} />
    case 'prettier':
      return <Prettier size={size} />
    case 'git':
      return <Git size={size} />
    default:
      return null
  }
}

export default Icon
