import { useAppTheme } from '@/contexts/ThemeContext';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

    const theme = useAppTheme();
    const styles = StyleSheet.create({
        root: {
            
        }
    })


    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <SafeAreaView edges={["top"]}>
                <Text>Hi there</Text>

            </SafeAreaView>
        </View>
    )
}
