import { IconEnum } from '@/enums/IconEnum'
import Github from './github'
import Instagram from './instagram'
import JavaScript from './javascript'
import Linkedin from './linkedin'
import Whatsapp from './whatsapp'
import Html from './html'
import Css from './css'

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
    default:
      return null
  }
}

export default Icon
