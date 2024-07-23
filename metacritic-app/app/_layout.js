import { Pressable, View } from "react-native";
import { Stack, Link } from "expo-router";
import { CircleIconInfo } from "../components/Icons";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <CircleIconInfo />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
