import BottomModal from "@/components/BottomModal";
import { ThemedText } from "@/components/ThemedText";
import {  ONBOARDING_SECTIONS, OnboardingBook } from "@/constants/onboarding_books";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, View, ScrollView, Text, ListRenderItem, Pressable } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import elevation from "@/constants/elevation";
import { StatusBar } from "expo-status-bar";
import { BouncePressable } from "@/components/BouncePressable";
import { useRouter } from "expo-router";
import { useAppTheme } from "@/contexts/ThemeContext";
export default function Onboarding() {
    const theme = useAppTheme();
    const [book, setBook] = useState<OnboardingBook>();
    const [showHeader, setShowHeader] = useState(false);
    const [confidence, setConfidence] = useState(0.0);
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const styles = StyleSheet.create({
        books: {
            flexDirection: "row",
            gap: 12,
            marginTop: 16,
            flex: 1,
        },
            column: {
            flex: 1,
            gap: 12,
        },
        cover: {
            width: "100%",
            aspectRatio: 2 / 3,
            borderRadius: 8,
            backgroundColor: "#eee", // placeholder
        },
        rateButton: {
            height: 70,
            width: 110,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 0.5
        },
        progressContainer: {
            height: 6,
            width: "60%",
            backgroundColor: "#EFF6FF",
            borderRadius: 999,
            overflow: "hidden",
        },
        progressFill: {
            height: "100%",
            backgroundColor: "#1D4ED8",
            borderRadius: 999,
        }
    });

    const Header = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: insets.top,
                    left: 0,
                    right: 0,
                    height: 56,
                    backgroundColor: '#FFF',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#E5E7EB',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: theme.spacing.md,
                    zIndex: 100,
                }}
            >
                {/* Left side: Label + Progress Bar */}
                <View style={{ flex: 1 }}>
                    <ThemedText size={12} variant="regular" color="#475569" style={{ marginBottom: 4 }}>
                        Building Your Taste Profile 
                    </ThemedText>

                    <View style={[styles.progressContainer, { width: '70%' }]}>
                        <View style={[styles.progressFill, { width: `${confidence * 100}%` }]} />
                    </View>
                </View>

                {/* Right side: Skip / Next */}
                <BouncePressable onPress={()=>router.replace("/home")}>
                    <View style={{backgroundColor: '#82ad6e', padding: 5, borderRadius: 5}}>
                        <ThemedText variant="regular" style={{color: 'rgb(60, 179, 113)'}}>Next</ThemedText>
                    </View>
                </BouncePressable>
            </View>
        );
    };




    return (
        <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <StatusBar style='dark'/>
            {showHeader && <Header />}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding: theme.spacing.md, gap: 10}}
                onScroll={(e) => {
                const y = e.nativeEvent.contentOffset.y;
                setShowHeader(y > 100); // show header after scrolling 100px
            }}>
                <View
                    style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    }}
                >
                    <ThemedText variant="regular" size={28}>
                    Tell Us What You Like
                    </ThemedText>
                    <ThemedText>Skip</ThemedText>
                </View>
                <ThemedText
                    color="#475569"
                    style={{ lineHeight: 24, width: "80%" }}
                    variant="regular"
                    size={16}
                >
                    Tap the books you know to help personalize recommendations. You only need a few!
                </ThemedText>

                <View>
                    {ONBOARDING_SECTIONS.map((section) => (
                        <View key={section.genre} style={{ marginBottom: 32 }}>
                        {/* Genre Header */}
                        <ThemedText
                            variant="bold"
                            size={22}
                            style={{ marginBottom: 12, marginLeft: 4 }}
                        >
                            {section.genre}
                        </ThemedText>

                        {/* 3 Columns */}
                        <View style={styles.books}>

                            {/* Column 1 */}
                            <View style={styles.column}>
                            {section.books.map(
                                (book, i) =>
                                i % 3 === 0 && (
                                    <BouncePressable
                                    onPress={() => setBook(book)}
                                    key={`${book.title}-${book.author}`}
                                    style={elevation.FOUR}
                                    >
                                    <Image
                                        source={{ uri: book.imageUrl }}
                                        style={styles.cover}
                                        resizeMode="cover"
                                    />
                                    </BouncePressable>
                                )
                            )}
                            </View>

                            {/* Column 2 */}
                            <View style={styles.column}>
                            {section.books.map(
                                (book, i) =>
                                i % 3 === 1 && (
                                    <BouncePressable
                                    onPress={() => setBook(book)}
                                    key={`${book.title}-${book.author}`}
                                    style={elevation.FOUR}
                                    >
                                    <Image
                                        source={{ uri: book.imageUrl }}
                                        style={styles.cover}
                                        resizeMode="cover"
                                    />
                                    </BouncePressable>
                                )
                            )}
                            </View>

                            {/* Column 3 */}
                            <View style={styles.column}>
                            {section.books.map(
                                (book, i) =>
                                i % 3 === 2 && (
                                    <BouncePressable
                                    onPress={() => setBook(book)}
                                    key={`${book.title}-${book.author}`}
                                    style={elevation.FOUR}
                                    >
                                    <Image
                                        source={{ uri: book.imageUrl }}
                                        style={styles.cover}
                                        resizeMode="cover"
                                    />
                                    </BouncePressable>
                                )
                            )}
                            </View>

                        </View>
                        </View>
                    ))}
                </View>

            </ScrollView>
            <BottomModal visible={book !== undefined} close={()=>setBook(undefined)} backgroundColor="#FFF">
                <Pressable style={{alignSelf: 'flex-end'}}>
                    <Feather name="x" size={20} color="black" />
                </Pressable>
                <View style={{backgroundColor: '#FFF', gap: 20, flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start', gap: 10, flex: 1}}>
                        <View style={elevation.FOUR}>
                            <Image source={{uri: book?.imageUrl}} style={[styles.cover, {width: 75}]}/>
                        </View>
                        <View style={{gap: 10, flexShrink: 1}}>
                            <ThemedText variant="bold" size={24}>{book?.title}</ThemedText>
                            <ThemedText variant="regular" size={12}>{book?.author}</ThemedText>
                            <View style={{padding: 5, borderRadius: 5, backgroundColor: '#EFF6FF', alignSelf: 'flex-start'}}>
                                <ThemedText variant="regular" size={12} style={{color: '#1D4ED8'}}>{book?.genre}</ThemedText>
                            </View>
                        </View>
                    </View>
                    
                    <ThemedText variant="regular" style={{textAlign: 'center'}}>How do you feel about this book?</ThemedText>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25}}>
                        <BouncePressable style={[styles.rateButton, {borderColor: '#64748B'}]}>
                            <Feather name="thumbs-down" size={24} color="#64748B" />
                        </BouncePressable>
                        <BouncePressable style={[styles.rateButton, {borderColor: '#16A34A'}]}>
                            <Feather name="thumbs-up" size={24} color="#16A34A" />
                        </BouncePressable>
                        <BouncePressable style={[styles.rateButton, {borderColor: '#EF4444'}]}>
                            <Feather name="heart" size={24} color="#EF4444" />
                        </BouncePressable>
                    </View>
                </View>
            </BottomModal>
        </SafeAreaView>
    );
}
