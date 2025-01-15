function delayPromise(delay: number, message: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

delayPromise(5000, "Hi").then((result) => {
    console.log(result);
});
