import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05668d",
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: "100%",
    height: 250,
    // Para redimensionar a imagem proporcionalmente
    // E com todo o conteúdo dela estando visível
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 30,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },

  buttonPrimary: {
    backgroundColor: "#69a3ba",
  },

  buttonSecondary: {
    backgroundColor: "#02c39a",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default styles;
