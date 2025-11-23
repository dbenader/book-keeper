export function normalizeBookTitle(str: string) {
  const smallWords = new Set([
    "a","an","the","and","but","or","nor","for","so","yet",
    "at","around","by","after","along","from","of","on",
    "to","with","without","in","over","into","onto","up","down"
  ]);

  // Convert the whole string to lowercase first
  const words = str.toLowerCase().split(/\s+/);

  return words
    .map((word, idx) => {
      const isFirstOrLast = idx === 0 || idx === words.length - 1;

      if (!isFirstOrLast && smallWords.has(word)) {
        return word;
      }

      // Capitalize first letter, keep rest as-is
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
