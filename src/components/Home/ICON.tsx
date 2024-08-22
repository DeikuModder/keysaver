import IconsObj from "../Icons";

const ICON = ({ iconName }: { iconName: string }) => {
  return (
    <figure className="aspect-square rounded-full bg-neutral-600 w-[80px] flex items-center justify-center">
      {iconName && IconsObj[iconName]()}
    </figure>
  );
};

export default ICON;
