function identicalLetters(str1: string, str2: string): string {
    let result = '';

    for (const char of str1) {
        if (str2.includes(char) && !result.includes(char)) {
            result += char;
        }
    }

    return result;
}

console.log(identicalLetters("abbugkugvc", "cikgfyuue"));