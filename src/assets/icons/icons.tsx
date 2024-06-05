import Github from './github'
import Instagram from './instagram'
import Linkedin from './linkedin'
import Whatsapp from './whatsapp'

export interface IconType {
  name: string
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
    default:
      return null
  }
}

export default Icon
