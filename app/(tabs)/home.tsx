
import { BouncePressable } from '@/components/BouncePressable';
import { ThemedText } from '@/components/ThemedText';
import elevation from '@/constants/elevation';
import { useAppTheme } from '@/contexts/ThemeContext';
import { normalizeBookTitle } from '@/scripts/util';
import BookService from '@/services/BooksService';
import { BookListWithBooks } from '@/types/BookListWithBooks';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function HomeScreen() {
    const [nytBestSellers, setNytBestSellers] = useState<Array<BookListWithBooks>>();
    const [search, setSearch] = useState<string>('')
    const [searchFocussed, setSearchFocussed] = useState(false);
    const scanSize = useSharedValue(50);
    const scanFlex = useSharedValue(.28)
    const greetingHeight = useSharedValue(20);
    const theme = useAppTheme();
    const insets = useSafeAreaInsets();
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
                        <TextInput onFocus={handleSearchFocus} onBlur={handleSearchBlur} onChangeText={(text) => setSearch(text)} placeholder='Search books, authors...' placeholderTextColor={'#94a3b8'}/>
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

                </ScrollView>
            )
        }

        </View>
    )
}
