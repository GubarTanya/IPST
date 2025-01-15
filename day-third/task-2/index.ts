async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Ошибка при загрузке данных:", error.message);
        } else {
            console.error("Неизвестная ошибка:", error);
        }
    }
}

(async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    try {
        const data = await fetchData(apiUrl);
        console.log("Данные успешно загружены:", data);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Не удалось загрузить данные:", error.message);
        } else {
            console.error("Неизвестная ошибка:", error);
        }
    }
})();
