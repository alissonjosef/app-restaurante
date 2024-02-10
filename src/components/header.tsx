import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

interface HeaderProps {
  title: string;
  cartQuant?: number
}
export function Header({ title, cartQuant = 0}: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-36" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      { cartQuant > 0 &&(

        <TouchableOpacity className="relative" activeOpacity={0.7}>
        <View className="bg-lime-300 w-4 h-4 rounded-full justify-center items-center top-2 z-10 -right-3.5">
          <Text className="text-slate-900 font-bold text-xs">{cartQuant}</Text>
        </View>

        <Feather name="shopping-bag" color={colors.white} size={24} />
      </TouchableOpacity>
      )}
    </View>
  );
}