import { Pressable, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <View className="flex-row justify-between items-center mb-4 mx-2">
          <Text className="text-white font-bold text-2xl">About</Text>
          <Link asChild href="/">
            <Pressable>
              {({ pressed }) => (
                <>
                  <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                </>
              )}
            </Pressable>
          </Link>
        </View>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum consequat rhoncus. Nullam tincidunt metus sapien, sit amet
          rutrum dui sollicitudin quis. Etiam semper blandit scelerisque.
          Praesent tincidunt velit nulla, non ullamcorper mi viverra id. Nam
          auctor eros metus, sed maximus risus varius at. Ut in laoreet purus.
          Nam ornare leo sed interdum aliquam. Quisque viverra urna sit amet
          semper congue. Fusce rhoncus mollis est, ut maximus sapien.
          Suspendisse at leo id magna suscipit elementum. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
          nec aliquam metus, at egestas eros. Phasellus dapibus lorem vitae
          metus malesuada, quis mollis nunc consectetur. Curabitur tristique
          ultricies felis, vitae ultrices magna interdum semper.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum consequat rhoncus. Nullam tincidunt metus sapien, sit amet
          rutrum dui sollicitudin quis. Etiam semper blandit scelerisque.
          Praesent tincidunt velit nulla, non ullamcorper mi viverra id. Nam
          auctor eros metus, sed maximus risus varius at. Ut in laoreet purus.
          Nam ornare leo sed interdum aliquam. Quisque viverra urna sit amet
          semper congue. Fusce rhoncus mollis est, ut maximus sapien.
          Suspendisse at leo id magna suscipit elementum. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
          nec aliquam metus, at egestas eros. Phasellus dapibus lorem vitae
          metus malesuada, quis mollis nunc consectetur. Curabitur tristique
          ultricies felis, vitae ultrices magna interdum semper.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum consequat rhoncus. Nullam tincidunt metus sapien, sit amet
          rutrum dui sollicitudin quis. Etiam semper blandit scelerisque.
          Praesent tincidunt velit nulla, non ullamcorper mi viverra id. Nam
          auctor eros metus, sed maximus risus varius at. Ut in laoreet purus.
          Nam ornare leo sed interdum aliquam. Quisque viverra urna sit amet
          semper congue. Fusce rhoncus mollis est, ut maximus sapien.
          Suspendisse at leo id magna suscipit elementum. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
          nec aliquam metus, at egestas eros. Phasellus dapibus lorem vitae
          metus malesuada, quis mollis nunc consectetur. Curabitur tristique
          ultricies felis, vitae ultrices magna interdum semper.
        </Text>
      </ScrollView>
    </Screen>
  );
}
