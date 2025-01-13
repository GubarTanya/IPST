function longestWord(sentence: string): string {
    const words = sentence.split(' ');
    let longest = '';

    for (let i= 0; i < words.length; i++) {
        const word = words [i];
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord("fbudia fh kdksdo ggggggggggggg"))