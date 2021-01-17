import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { styles } from "./styles";
export default function App() {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ImageBackground
        source={require("./assets/header.png")}
        style={styles.imageTop}
        resizeMode="stretch"
      >
        <View style={styles.w3lcomeTitle}>
          <Image
            source={require("./assets/w3lcomeicon.png")}
            style={styles.w3lcomeIcon}
          />
        </View>
      </ImageBackground>
      <View style={styles.loginView}>
        <Text style={styles.loginTitle}>BEM VINDO</Text>
        <Text style={styles.loginSubtitle}>
          Entre com suas credenciais para acessar o aplicativo.
        </Text>
      </View>
      <View style={styles.loginIput}>
        <TouchableOpacity style={styles.loginInput}>
          <Image
            source={require("./assets/enviar.png")}
            style={styles.iconInput}
          />
          <TextInput
            placeholder="Entre com seu e-mail"
            style={styles.inputText}
            autoFocus={false}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginInput}>
          <Image
            source={require("./assets/key.png")}
            style={styles.iconInput}
          />
          <TextInput
            placeholder="Entre com sua senha"
            style={styles.inputText}
            autoFocus={false}
          />
        </TouchableOpacity>
        <View style={styles.forgetOrRememberPass}>
          <View style={styles.rememberCheck}>
            <CheckBox
              value={isSelected}
              onChange={() => setIsSelected(!isSelected)}
            />
            <Text>Lembrar-me</Text>
          </View>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </View>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.loginButtonText}>Logar em sua conta</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={styles.bottomImageBackground}
        source={require("./assets/headerBottomImage.png")}
      >
        <View style={styles.bottomView}>
          <View style={styles.iconsLogin}>
            <Image
              source={require("./assets/facebook.png")}
              style={styles.iconLogin}
            />
            <Image
              source={require("./assets/googleIcon.png")}
              style={styles.iconLogin}
            />
            <Image
              source={require("./assets/w3lcomeicon.png")}
              style={styles.iconLogin}
            />
          </View>
          <View style={styles.registerText}>
            <Text style={styles.registerInit}>
              Ainda não é cadastrado?{" "}
              <Text style={styles.registerLink}>Cadastre-se aqui</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
