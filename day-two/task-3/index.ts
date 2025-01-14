interface Book {
    title: string,
    year: number,
    author: string,
    preview: string,
    url: string,
}

function createBook(title: string, year: number,author: string): Book {
    const preview = [title, year, author].join('.');
    const params = new URLSearchParams({
        title: title,
        year: year.toString(),
        author: author,
    });
    const url = `www.someurl.com/preview?title=${title}&year=${year}&author=${author}`;
    return {
        title,
        year,
        author,
        preview,
        url,
    };
}

const source = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K. Rowling",
};

const target = createBook(source.title, source.year, source.author);
console.log(target);