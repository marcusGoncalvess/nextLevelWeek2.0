import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05668d",
    justifyContent: "center",
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 40,
    backgroundColor: "#02c39a",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  okButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
