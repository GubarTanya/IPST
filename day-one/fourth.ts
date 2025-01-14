function runLengthEncoding(str: string): string {
    let result = '';
    for (let i = 0, count = 1; i < str.length; i++) {
        if (str[i] === str[i + 1]) count++;
        else { result += str[i] + count; count = 1; }
    }
    return result;
}

// Пример использования
console.log(runLengthEncoding("aaabbbccca")); // "a3b3c3a1"
console.log(runLengthEncoding("hello"));      // "h1e1l2o1"

function runLengthDecoding(encodedStr: string): string {
    let result = '';
    for (let i = 0; i < encodedStr.length; i += 2)
        result += encodedStr[i].repeat(+encodedStr[i + 1]);
    return result;
}

// Пример использования
console.log(runLengthDecoding("a3b3c3a1")); // "aaabbbccca"
console.log(runLengthDecoding("h1e1l2o1")); // "hello"