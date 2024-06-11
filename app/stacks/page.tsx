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
      <Stack
          title='Ferramentas e pacotes:'
          icons={[
            {
              icon: IconEnum.Webpack,
              text: 'Webpack'
            },
            {
              icon: IconEnum.Gulp,
              text: 'Gulp'
            },
            {
              icon: IconEnum.Npm,
              text: 'Npm'
            },
            {
              icon: IconEnum.Eslint,
              text: 'Eslint'
            },
            {
              icon: IconEnum.Prettier,
              text: 'Prettier'
            },
          ]}
      />
      <Stack
        title='Versionamento de Código:'
          icons={[
            {
              icon: IconEnum.Git,
              text: 'Git'
            },
          ]}
      />
    </>
  )
}