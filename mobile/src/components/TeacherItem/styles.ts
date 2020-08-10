import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#eee",
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Archivo_700Bold",
    color: "#111312",
    fontSize: 20,
  },

  subject: {
    fontFamily: "Poppins_400Regular",
    color: "#111312",
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#6a6180",
  },

  footer: {
    backgroundColor: "#fafafc",
    padding: 24,
    alignItems: "center",
    marginTop: 24,
  },

  price: {
    fontFamily: "Poppins_400Regular",
    color: "#6a6180",
    fontSize: 14,
  },

  priceValue: {
    fontFamily: "Archivo_700Bold",
    color: "#02c39a",
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: "#69a3ba",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#e33d3d",
  },

  contactButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#02c39a",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  contactButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
