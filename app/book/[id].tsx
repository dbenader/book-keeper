import OpenLibraryService from "@/services/OpenLibraryService";
import { Work } from "@/types/OpenLibrary";
import { BlurView } from "expo-blur";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Book() {
    const [work, setWork] = useState<Work>();
    const {id} = useLocalSearchParams();

    useEffect(() => {
        if (id) {
            const parts = id.split("/");
            if (parts.length > 0) {
                const olid = parts[parts.length-1];
                console.log('parts', parts);
                fetchWork(olid);
            }
        }
    }, [id]);

    const fetchWork = async (work: string) => {
        try {
            let response = await OpenLibraryService.getWork(work);
            setWork(response);
        } catch (error) {
            console.log('fetch work error', error);
        }
    }

    const styles = StyleSheet.create({
        background: {
            flex: 1, // Ensures the background image covers the entire screen/container
            resizeMode: 'contain', // Or 'contain', 'stretch', etc. to control image scaling

        }
    })

    if (!work) return null;

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={{uri: `https://covers.openlibrary.org/b/id/${work.covers[0]}-M.jpg`}} style={styles.background}>
                <BlurView intensity={50} style={{flex: 1}}>
                    <SafeAreaView edges={["top"]} style={{flex: 1}}>
                    </SafeAreaView>
                </BlurView>
            </ImageBackground>
        </View>
    )
}