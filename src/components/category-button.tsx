import { clsx } from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

type CategoryProp = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({ title, isSelected, ...rest }: CategoryProp) {
  return (
    <Pressable
      className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10", 
      isSelected && "border-2 border-lime-300"
      )}
      {...rest}
    >
      <Text className="text-slate-100 font-sm font-subtitle">{title}</Text>
    </Pressable>
  );
}
