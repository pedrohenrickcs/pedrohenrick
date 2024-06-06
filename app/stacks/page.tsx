import Stack from "@/components/Stack";
import { IconEnum } from "@/enums/IconEnum";

export default function Stacks() {
  return (
    <>
      <Stack
          title='Linguagens e Frameworks:'
          icons={[
            {
              icon: IconEnum.Html,
              text: 'HTML5'
            },
            {
              icon: IconEnum.Css,
              text: 'CSS'
            },
            {
              icon: IconEnum.Javascript,
              text: 'Javascript'
            },
            {
              icon: IconEnum.Typescript,
              text: 'Typescript'
            },
            {
              icon: IconEnum.Reactjs,
              text: 'React.js'
            },
            {
              icon: IconEnum.Nextjs,
              text: 'Next.js'
            },
            {
              icon: IconEnum.Tailwind,
              text: 'Tailwind'
            },
            {
              icon: IconEnum.Storybook,
              text: 'Storybook'
            }
          ]}
      />
    </>
  )
}