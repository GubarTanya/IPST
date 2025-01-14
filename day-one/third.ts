function indexOf(str: string, substring: string): number {
    for (let i = 0; i <= str.length - substring.length; i++) {
        let j = 0;
        while (j < substring.length && str[i + j] === substring[j]) j++;
        if (j === substring.length) return i;
    }
    return -1;
}

console.log(indexOf("hello world", "world"));
console.log(indexOf("hello world", "njipvrjgi"));