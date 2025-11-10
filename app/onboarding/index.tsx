import { ThemedText } from "@/components/ThemedText";
import { ONBOARDING_BOOKS } from "@/constants/onboarding_books";
import { useTheme } from "@react-navigation/native";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const theme = useTheme();

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
  });

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: theme.spacing.md }}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
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
          Tap on books to rate them. The more you rate, the better our AI can find
          you books!
        </ThemedText>

        <View style={styles.books}>
          <View style={styles.column}>
            {ONBOARDING_BOOKS.map(
              (book, i) =>
                i % 2 === 0 && (
                  <Image
                    key={book.title}
                    source={{ uri: book.imageUrl }}
                    style={styles.cover}
                    resizeMode="cover"
                  />
                )
            )}
          </View>

          <View style={styles.column}>
            {ONBOARDING_BOOKS.map(
              (book, i) =>
                i % 2 !== 0 && (
                  <Image
                    key={book.title}
                    source={{ uri: book.imageUrl }}
                    style={styles.cover}
                    resizeMode="cover"
                  />
                )
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
