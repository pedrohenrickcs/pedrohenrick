import Icon from "@/assets/icons/icons";
import { IconEnum } from "@/enums/IconEnum";


const Stack = () => {

  return (
    <div className="container h-[70vh] mx-auto px-4 p-4 text-center flex justify-around items-center flex-col md:flex-row">
      <Icon name={IconEnum.Javascript} />
      <Icon name={IconEnum.Html} />
      <Icon name={IconEnum.Css} />
    </div>
  );
}

export default Stack;