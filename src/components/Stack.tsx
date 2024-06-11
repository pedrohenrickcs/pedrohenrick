import Icon from "@/assets/icons/icons";
import { IconEnum } from "@/enums/IconEnum";

export interface IconProps {
  icon: IconEnum
  text: string
}
export interface StackType {
  title: string
  icons: IconProps[]
}

const Stack = ({ title, icons }: StackType) => {
  return (
    <div className="container h-[70vh] mx-auto py-10 flex justify-evenly flex-col md:flex-row">
      <div>
        <h1 className="text-sm font-medium text-center md:text-left">{title}</h1>

        <div className="flex flex-row md:justify-between my-7 flex-wrap justify-center">
          {icons.map((item, index) => (
            <div className="text-center m-6 first:ml-0" key={index}>
              <span className="flex justify-center">
                <Icon name={item.icon} />
              </span>
              <span className="text-small text-center">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;