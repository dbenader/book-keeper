
import { BouncePressable } from '@/components/BouncePressable';
import { ThemedText } from '@/components/ThemedText';
import elevation from '@/constants/elevation';
import { useAppTheme } from '@/contexts/ThemeContext';
import { normalizeBookTitle } from '@/scripts/util';
import BookService from '@/services/BooksService';
import { BookListWithBooks } from '@/types/BookListWithBooks';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import OpenLibraryService from '@/services/OpenLibraryService';
import { SearchResult } from '@/types/OpenLibrary';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const [nytBestSellers, setNytBestSellers] = useState<Array<BookListWithBooks>>();
    const [search, setSearch] = useState<string>('')
    const [searchResults, setSearchResults] = useState<SearchResult>();
    const [searchFocussed, setSearchFocussed] = useState(false);
    const scanSize = useSharedValue(50);
    const scanFlex = useSharedValue(.28)
    const greetingHeight = useSharedValue(20);
    const theme = useAppTheme();
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const styles = StyleSheet.create({
        root: {
            
        },
        nyt: {
            gap: theme.spacing.sm
        },
        nytEntry: {
            width: 120,
            gap: theme.spacing.sm
        },
        book: {
            width: 120,
            aspectRatio: 2 / 3,
            borderRadius: 8
        },
        header: {
            backgroundColor: '#FFF',
            padding: theme.spacing.md,
            paddingTop: insets.top,
            gap: theme.spacing.md
        }
    })

    const scanStyle = useAnimatedStyle(() => ({
        flex: scanFlex.value,
    }));

    useEffect(() => {
        fetchNytBestSellers();
    }, []);


    const fetchNytBestSellers = async () => {
        try {
            let response = await BookService.getListHighlights("NYT");
            setNytBestSellers(response);
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleSearchFocus = () => {
        greetingHeight.value = withTiming(0, {
            duration: 200
        })
        scanFlex.value = withSpring(0.0)
        scanSize.value = withTiming(0, {
            duration: 200
        });
        setSearchFocussed(true);
    }

    const handleSearchBlur = () => {
        setSearchFocussed(false);
        scanFlex.value = withSpring(0.28)
        scanSize.value = withTiming(50, {
            duration: 200
        });
        greetingHeight.value = withTiming(20, {
            duration: 200
        })
    }

    const handleOnSearch = async (text: string) => {
        setSearch(text);

        const trimmed = text.trim();

        // Don’t hit the API for empty / super short queries
        if (trimmed.length < 2) {
            setSearchResults(undefined); // or keep previous, up to you
            return;
        }

        try {
            const response = await OpenLibraryService.search(trimmed);
            // console.log('search', JSON.stringify(response, null, 2));
            setSearchResults(response);
        } catch (error) {
            console.log('error', error);
        }
    };



    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f9'}}>
            <StatusBar style='dark'/>
            <View style={[styles.header]}>
                <Animated.View style={{height: greetingHeight}}>
                    <ThemedText variant="regular" size={theme.spacing.sm}>Good afternoon, Daniel</ThemedText>
                </Animated.View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#f1f5f9', borderRadius: 10, height: 50, flex: 1, flexDirection: 'row', alignItems: 'center', padding: theme.spacing.xs, gap: theme.spacing.xs }}>
                        <Feather name="search" size={24} color="#94a3b8" />
                        <TextInput autoCorrect={false} onFocus={handleSearchFocus} onBlur={handleSearchBlur} onChangeText={handleOnSearch} placeholder='Search books, authors...' placeholderTextColor={'#94a3b8'}/>
                    </View>

                    <Animated.View style={{flex: scanFlex, height: 50, alignItems: 'flex-end'}}>
                        <Animated.View style={{height: scanSize, width: scanSize}}>
                            <BouncePressable>
                                <Animated.View style={{backgroundColor: '#FF7E38', justifyContent: 'center', alignItems: 'center', borderRadius: 10, width: scanSize, height: 50}}>
                                    <MaterialCommunityIcons name="line-scan" size={24} color="#fff" />
                                </Animated.View>
                            </BouncePressable>
                        </Animated.View>
                    </Animated.View>

                </View>
            </View>
            {!searchFocussed ? (
                <ScrollView contentContainerStyle={{padding: theme.spacing.md, gap: theme.spacing.lg, paddingBottom: 200}}>
        
                    <View style={{gap: theme.spacing.sm}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', gap: theme.spacing.xs}}>
                            <Ionicons name="sparkles-outline" size={20} color="#f59e0b" />
                            <ThemedText>Picked for you</ThemedText>
                        </View>

                        <View style={{borderWidth: 1, borderColor: '#CCC', borderRadius: 20, height: 250}}>

                        </View>
                    </View>


                    <View style={styles.nyt}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <ThemedText variant='regular' size={theme.spacing.sm}>NYT best sellers</ThemedText>
                            <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: theme.spacing.xs}}>
                                <ThemedText>See all</ThemedText>
                                <Feather name="chevron-right" size={20} color="black" />
                            </Pressable>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: theme.spacing.md}}>
                            {
                            nytBestSellers?.map((list, i) => {
                                return (
                                    <View style={styles.nytEntry} key={list.id}>
                                        <BouncePressable style={[elevation.FOUR]}>
                                            <Image source={{uri: list.books[0].coverUrl}} style={styles.book}/>
                                        </BouncePressable>
                                        <View style={{}}>
                                            <ThemedText numberOfLines={2} size={12} variant='regular'>{normalizeBookTitle(list.books[0].title || '')}</ThemedText>
                                            {/* <View style={{padding: 5, borderRadius: 5, backgroundColor: '#EFF6FF', alignSelf: 'flex-start'}}>
                                                <ThemedText variant="regular" size={10} style={{color: '#1D4ED8'}}>{list.listName}</ThemedText>
                                            </View> */}
                                        </View>
                                    </View>
                                )
                            })
                            }
                        </ScrollView>
                    </View>

                </ScrollView>

            ) :
            (
                <ScrollView contentContainerStyle={{padding: theme.spacing.md, gap: theme.spacing.lg, paddingBottom: 200}}>
                    {searchResults && searchResults.docs.map((result, i) => {
                        return (
                            <BouncePressable onPress={()=>router.navigate(`/book/${encodeURIComponent(result.key)}`)} style={[{padding: theme.spacing.md, borderRadius: 8, backgroundColor: '#FFF', gap: theme.spacing.md, flexDirection: 'row'}, elevation.FOUR]} key={result.key}>
                                <View style={{flex: 1, gap: theme.spacing.xs}}>
                                    <ThemedText numberOfLines={3} variant='bold' size={theme.spacing.sm}>{result.title}</ThemedText>
                                    <ThemedText variant='regular'>{result.author_name[0]}</ThemedText>
                                    <View style={{backgroundColor: 'rgb(130,173,110)', borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8, alignSelf: 'flex-start'}}>
                                        <ThemedText>{`${result.ratings_count} ratings`}</ThemedText>
                                    </View>
                                    <View style={{backgroundColor: 'rgba(232, 237, 106, 1)', borderRadius: 8, paddingVertical: 5, paddingHorizontal: 8, alignSelf: 'flex-start'}}>
                                        <ThemedText>{`${result.number_of_pages_median} pages`}</ThemedText>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                    <Image source={{uri: `https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`}} style={{width: 120, aspectRatio: 2 / 3, borderRadius: 8}}/>
                                </View>
                            </BouncePressable>
                        )
                    })}
                </ScrollView>
            )
        }

        </View>
    )
}
