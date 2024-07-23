import { ScrollView, Text } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <ScrollView>
      <Link href="/" className="text-blue-400 text-xl mt-24">
        Go to Main
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">About</Text>
      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
        consequat rhoncus. Nullam tincidunt metus sapien, sit amet rutrum dui
        sollicitudin quis. Etiam semper blandit scelerisque. Praesent tincidunt
        velit nulla, non ullamcorper mi viverra id. Nam auctor eros metus, sed
        maximus risus varius at. Ut in laoreet purus. Nam ornare leo sed
        interdum aliquam. Quisque viverra urna sit amet semper congue. Fusce
        rhoncus mollis est, ut maximus sapien. Suspendisse at leo id magna
        suscipit elementum. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Cras nec aliquam metus, at egestas
        eros. Phasellus dapibus lorem vitae metus malesuada, quis mollis nunc
        consectetur. Curabitur tristique ultricies felis, vitae ultrices magna
        interdum semper.
      </Text>
      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
        consequat rhoncus. Nullam tincidunt metus sapien, sit amet rutrum dui
        sollicitudin quis. Etiam semper blandit scelerisque. Praesent tincidunt
        velit nulla, non ullamcorper mi viverra id. Nam auctor eros metus, sed
        maximus risus varius at. Ut in laoreet purus. Nam ornare leo sed
        interdum aliquam. Quisque viverra urna sit amet semper congue. Fusce
        rhoncus mollis est, ut maximus sapien. Suspendisse at leo id magna
        suscipit elementum. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Cras nec aliquam metus, at egestas
        eros. Phasellus dapibus lorem vitae metus malesuada, quis mollis nunc
        consectetur. Curabitur tristique ultricies felis, vitae ultrices magna
        interdum semper.
      </Text>
      <Text className="text-white text-white/90 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum
        consequat rhoncus. Nullam tincidunt metus sapien, sit amet rutrum dui
        sollicitudin quis. Etiam semper blandit scelerisque. Praesent tincidunt
        velit nulla, non ullamcorper mi viverra id. Nam auctor eros metus, sed
        maximus risus varius at. Ut in laoreet purus. Nam ornare leo sed
        interdum aliquam. Quisque viverra urna sit amet semper congue. Fusce
        rhoncus mollis est, ut maximus sapien. Suspendisse at leo id magna
        suscipit elementum. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Cras nec aliquam metus, at egestas
        eros. Phasellus dapibus lorem vitae metus malesuada, quis mollis nunc
        consectetur. Curabitur tristique ultricies felis, vitae ultrices magna
        interdum semper.
      </Text>
    </ScrollView>
  );
}
