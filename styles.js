import { StyleSheet, Dimensions } from "react-native";

const widthScreen = Dimensions.get("screen").width;
const colorGreen = "#00b300";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imageTop: {
    height: 160,
    width: widthScreen,
    justifyContent: "flex-end",
    display: "flex",
    alignItems: "center",
  },
  w3lcomeTitle: {
    alignItems: "center",
    marginBottom: -20,
  },
  w3lcomeIcon: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 100,
  },
  loginView: {
    height: 120,
    width: widthScreen,
    marginTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#050535",
  },
  loginSubtitle: {
    marginTop: 7,
    padding: 4,
    width: widthScreen - 50,
    textAlign: "center",
    color: "#050535",
    fontSize: 16,
  },
  loginIput: {
    width: widthScreen,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  loginInput: {
    width: widthScreen - 80,
    marginBottom: 20,
    height: 50,
    borderWidth: 1,
    borderColor: "lightgrey",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 6,
  },
  iconInput: {
    width: 30,
    height: 30,
    marginRight: 20,
    marginLeft: 20,
  },
  forgetOrRememberPass: {
    display: "flex",
    width: widthScreen - 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rememberCheck: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassword: {
    color: colorGreen,
  },
  inputText: {
      fontSize:16,
      fontFamily:'serif'
  },
  buttonLogin: {
    backgroundColor: colorGreen,
    width: widthScreen - 120,
    marginTop: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "serif",
  },
  bottomImageBackground: {
    width: widthScreen,
    marginTop: 120,
    height: 200,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  iconsLogin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -30,
    marginBottom: 20,
    width: widthScreen - 100,
  },
  iconLogin: {
    borderRadius: 100,
    width: 35,
    height: 35,
    marginLeft: 20,
  },
  registerText: {
    display: "flex",
    borderColor: "black",
    flexDirection: "row",
  },
  registerInit: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "serif",
  },

  registerLink: {
    color: "#00ccff",
    paddingLeft: 10,
    fontFamily: "serif",
    fontWeight:'bold'
  },
});
