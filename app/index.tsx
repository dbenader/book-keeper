
import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");



export default function Landing({ navigation }: any) {

  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/background4.jpg")}
      style={styles.background}
      resizeMode="center"
    >
      <View style={[{position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }, StyleSheet.absoluteFill]}/>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText variant="bold" style={{color: '#FFF', position: 'absolute', top: '50%', alignSelf: 'center'}} size={42}>Unshelf</ThemedText>

        <View style={{gap: 12, padding: 18}}>
          <Pressable style={{borderRadius: 8, backgroundColor: '#000', padding: 15, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image source={require('@/assets/images/google.png')} style={{height: 20, width: 20}}/>
              <ThemedText variant="bold" size={14} style={{color: '#FFF'}}>Continue with Google</ThemedText>
            </View>
          </Pressable>

          <Pressable onPress={()=>router.navigate('/onboarding')} style={{borderRadius: 8, backgroundColor: '#FFF', padding: 15, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image source={require('@/assets/images/apple.png')} style={{height: 20, width: 20}}/>
              <ThemedText variant="bold" size={14} style={{color: "#000"}}>Continue with Apple</ThemedText>
            </View>
          </Pressable>
        </View>
        
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 40,
    fontFamily: 'Montserrat'
  },
  button: {
    backgroundColor: "#222",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: 'Montserrat'
  },
});
