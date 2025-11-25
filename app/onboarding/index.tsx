import BottomModal from "@/components/BottomModal";
import { ThemedText } from "@/components/ThemedText";
import { ONBOARDING_SECTIONS, OnboardingBook } from "@/constants/onboarding_books";
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View, ScrollView, Text, ListRenderItem, Pressable } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import elevation from "@/constants/elevation";
import { StatusBar } from "expo-status-bar";
import { BouncePressable } from "@/components/BouncePressable";
import { useRouter } from "expo-router";
import { useAppTheme } from "@/contexts/ThemeContext";
import { UserPreference } from "@/types/UserPreference";
import BookService from "@/services/BooksService";
import { Book } from "@/types/Book";

export default function Onboarding() {
    const theme = useAppTheme();
    const [sections, setSections] = useState<{ genre: string; books: Book[] }[]>([]);
    const [preferences, setPreferences] = useState<Record<string, string>>({});
    const [book, setBook] = useState<Book>();
    const [showHeader, setShowHeader] = useState(false);
    const [confidence, setConfidence] = useState(0.0);
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const USER_ID = "ad5b41db-b674-49c2-bd6b-81c39c158395";

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        let response = await BookService.getOnboardingBooks();
        const grouped = groupBooksByGenre(response);
        setSections(grouped);
    };

    function getPreferenceIcon(pref: string) {
        switch (pref) {
            case UserPreference.DISLIKE.toString():
                return <Feather name="thumbs-down" size={24} color="#64748B" />;
            case UserPreference.LIKE.toString():
                return <Feather name="thumbs-up" size={24} color="#16A34A" />;
            case UserPreference.LOVE.toString():
                return <Feather name="heart" size={24} color="#EF4444" />;
            default:
                return null;
        }
    }

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
            backgroundColor: "#eee",
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
        },
        overlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.25)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
        },
        overlayIcon: {
            padding: 10,
            borderRadius: 8,
            backgroundColor: 'rgba(255,255,255,0.8)',
        },
    });

    function groupBooksByGenre(books: Book[]) {
        const map: Record<string, Book[]> = {};

        books.forEach(book => {
            const genre = book.genres?.[0] ?? "Other";
            if (!map[genre]) map[genre] = [];
            map[genre].push(book);
        });

        return Object.entries(map).map(([genre, books]) => ({
            genre,
            books
        }));
    }

    const rateBook = async (preference: UserPreference) => {
        const id = book?.id;
        if (!id) return;

        setPreferences(prev => {
            const current = prev[id];
            const nextPref = preference.toString();

            // If tapping the same preference again, remove it (toggle off)
            if (current === nextPref) {
            const { [id]: _, ...rest } = prev; // remove key from object
            return rest;
            }

            // Otherwise set/overwrite the preference
            return {
            ...prev,
            [id]: nextPref,
            };
        });

        // backend call (disabled for now)
        // try { 
        //   const current = preferences[id];
        //   if (current === preference.toString()) {
        //     // maybe send "neutral"/delete rating here
        //     await BookService.clearRating(USER_ID, id);
        //   } else {
        //     await BookService.rateBook(USER_ID, id, preference);
        //   }
        // } catch (error) {
        //   console.log('Error while rating book', error)
        // }
        };


    const Header = () => (
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
            <View style={{ flex: 1 }}>
                <ThemedText size={12} variant="regular" color="#475569" style={{ marginBottom: 4 }}>
                    Building Your Taste Profile
                </ThemedText>

                <View style={[styles.progressContainer, { width: '70%' }]}>
                    <View style={[styles.progressFill, { width: `${confidence * 100}%` }]} />
                </View>
            </View>

            <BouncePressable onPress={() => router.replace("/home")}>
                <View style={{ backgroundColor: 'rgba(130,173,110, 0.2)', padding: 5, borderRadius: 5 }}>
                    <ThemedText variant="regular" style={{ color: 'rgb(130,173,110)' }}>Next</ThemedText>
                </View>
            </BouncePressable>
        </View>
    );

    return (
        <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
            <StatusBar style='dark' />
            {showHeader && <Header />}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: theme.spacing.md, gap: 10 }}
                onScroll={(e) => {
                    const y = e.nativeEvent.contentOffset.y;
                    setShowHeader(y > 100);
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <ThemedText variant="regular" size={28}>Tell Us What You Like</ThemedText>
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
                    {sections.map((section) => (
                        <View key={section.genre} style={{ marginBottom: 32 }}>
                            <ThemedText variant="bold" size={22} style={{ marginBottom: 12, marginLeft: 4 }}>
                                {section.genre}
                            </ThemedText>

                            <View style={styles.books}>

                                {/* Column 1 */}
                                <View style={styles.column}>
                                    {section.books.map(
                                        (b, i) =>
                                            i % 3 === 0 && (
                                                <BouncePressable
                                                    onPress={() => setBook(b)}
                                                    key={`${b.title}-${b.author}`}
                                                    style={elevation.FOUR}
                                                >
                                                    <Image
                                                        source={{ uri: b.coverUrl ?? '' }}
                                                        style={styles.cover}
                                                        resizeMode="cover"
                                                    />

                                                    {preferences[b.id] && (
                                                        <View style={styles.overlay}>
                                                            <View style={styles.overlayIcon}>
                                                                {getPreferenceIcon(preferences[b.id])}
                                                            </View>
                                                        </View>
                                                    )}
                                                </BouncePressable>
                                            )
                                    )}
                                </View>

                                {/* Column 2 */}
                                <View style={styles.column}>
                                    {section.books.map(
                                        (b, i) =>
                                            i % 3 === 1 && (
                                                <BouncePressable
                                                    onPress={() => setBook(b)}
                                                    key={`${b.title}-${b.author}`}
                                                    style={elevation.FOUR}
                                                >
                                                    <Image
                                                        source={{ uri: b.coverUrl ?? '' }}
                                                        style={styles.cover}
                                                        resizeMode="cover"
                                                    />

                                                    {preferences[b.id] && (
                                                        <View style={styles.overlay}>
                                                            <View style={styles.overlayIcon}>
                                                                {getPreferenceIcon(preferences[b.id])}
                                                            </View>
                                                        </View>
                                                    )}
                                                </BouncePressable>
                                            )
                                    )}
                                </View>

                                {/* Column 3 */}
                                <View style={styles.column}>
                                    {section.books.map(
                                        (b, i) =>
                                            i % 3 === 2 && (
                                                <BouncePressable
                                                    onPress={() => setBook(b)}
                                                    key={`${b.title}-${b.author}`}
                                                    style={elevation.FOUR}
                                                >
                                                    <Image
                                                        source={{ uri: b.coverUrl ?? '' }}
                                                        style={styles.cover}
                                                        resizeMode="cover"
                                                    />

                                                    {preferences[b.id] && (
                                                        <View style={styles.overlay}>
                                                            <View style={styles.overlayIcon}>
                                                                {getPreferenceIcon(preferences[b.id])}
                                                            </View>
                                                        </View>
                                                    )}
                                                </BouncePressable>
                                            )
                                    )}
                                </View>

                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <BottomModal
            visible={book !== undefined}
            close={() => setBook(undefined)}
            backgroundColor="#FFF"
            >
            {(requestClose) => (
                <>
                <Pressable style={{ alignSelf: 'flex-end' }} onPress={requestClose}>
                    <Feather name="x" size={20} color="black" />
                </Pressable>

                <View style={{ backgroundColor: '#FFF', gap: 20, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, flex: 1 }}>
                        <View style={elevation.FOUR}>
                            <Image source={{ uri: book?.coverUrl ?? '' }} style={[styles.cover, { width: 75 }]} />
                        </View>

                        <View style={{ gap: 10, flexShrink: 1 }}>
                            <ThemedText variant="bold" size={24}>{book?.title}</ThemedText>
                            <ThemedText variant="regular" size={12}>{book?.author}</ThemedText>

                            <View style={{ padding: 5, borderRadius: 5, backgroundColor: '#EFF6FF', alignSelf: 'flex-start' }}>
                                {(book?.genres && book.genres.length > 0) && (
                                    <ThemedText variant="regular" size={12} style={{ color: '#1D4ED8' }}>
                                        {book?.genres[0]}
                                    </ThemedText>
                                )}
                            </View>
                        </View>
                    </View>

                    <ThemedText variant="regular" style={{ textAlign: 'center' }}>
                        How do you feel about this book?
                    </ThemedText>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 25
                        }}
                    >
                        {/* DISLIKE */}
                        <BouncePressable
                            onPress={() => rateBook(UserPreference.DISLIKE)}
                            style={[
                                styles.rateButton,
                                { borderColor: '#64748B' },
                                preferences[book?.id ?? ''] === UserPreference.DISLIKE.toString() && {
                                    backgroundColor: '#64748B'
                                }
                            ]}
                        >
                            <Feather
                                name="thumbs-down"
                                size={24}
                                color={
                                    preferences[book?.id ?? ''] === UserPreference.DISLIKE.toString()
                                        ? '#FFF'
                                        : '#64748B'
                                }
                            />
                        </BouncePressable>

                        {/* LIKE */}
                        <BouncePressable
                            onPress={() => rateBook(UserPreference.LIKE)}
                            style={[
                                styles.rateButton,
                                { borderColor: '#16A34A' },
                                preferences[book?.id ?? ''] === UserPreference.LIKE.toString() && {
                                    backgroundColor: '#16A34A'
                                }
                            ]}
                        >
                            <Feather
                                name="thumbs-up"
                                size={24}
                                color={
                                    preferences[book?.id ?? ''] === UserPreference.LIKE.toString()
                                        ? '#FFF'
                                        : '#16A34A'
                                }
                            />
                        </BouncePressable>

                        {/* LOVE */}
                        <BouncePressable
                            onPress={() => rateBook(UserPreference.LOVE)}
                            style={[
                                styles.rateButton,
                                { borderColor: '#EF4444' },
                                preferences[book?.id ?? ''] === UserPreference.LOVE.toString() && {
                                    backgroundColor: '#EF4444'
                                }
                            ]}
                        >
                            <Feather
                                name="heart"
                                size={24}
                                color={
                                    preferences[book?.id ?? ''] === UserPreference.LOVE.toString()
                                        ? '#FFF'
                                        : '#EF4444'
                                }
                            />
                        </BouncePressable>
                    </View>

                </View>
                </>
            )}
            </BottomModal>
        </SafeAreaView>
    );
}
