
import { ThemedText } from '@/components/ThemedText';
import { useAppTheme } from '@/contexts/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
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
                <ScrollView contentContainerStyle={{padding: theme.spacing.md, gap: theme.spacing.lg}}>
                    
                    <ThemedText variant="bold" size={theme.spacing.md}>Good afternoon, Daniel</ThemedText>
                    <View style={{height: 68, width: '100%', backgroundColor: '#f1f1f1', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', gap: theme.spacing.sm}}>
                            <Feather name="camera" size={30} color="black" />
                            <View>
                                <ThemedText variant='bold' size={20}>Scan a book</ThemedText>
                                <ThemedText>Find out instantly if it matches your taste</ThemedText>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}
