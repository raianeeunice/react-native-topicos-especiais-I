import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CustomImage from "./CustomImage";
import imagemLocal from "./assets/man-1.png";

const URL_IMAGE =
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#ADE200" />


      <View>
        <Text style={styles.tituloView}>Três formas de Inserir Imagens</Text>

        <CustomImage
          fromWeb={false}
          image={require("./assets/work.jpg")}
          title={"Imagem local com require"}
          width={210}
          height={170}
        />

        <CustomImage
          fromWeb={false}
          image={imagemLocal}
          title={"Imagem local com import"}
          width={210}
          height={170}
        />

        <CustomImage
          fromWeb={true}
          image={URL_IMAGE}
          title={"Imagem remota com url"}
          width={210}
          height={170}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC300",
    alignItems: "center",
    justifyContent: "center",
  },
  tituloView: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});
