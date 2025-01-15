interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "active" | "delete";
}

function generationUuid(min: number, max: number): number {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

function createFakeUser(): User {
    return {
        id: generationUuid(1, 100),
        name: `User${generationUuid(1, 100)}`, // Генерация случайного имени
        phone: `+7 (900) ${generationUuid(100, 999)}-${generationUuid(10, 99)}-${generationUuid(10, 99)}`,
        email: `user${generationUuid(1, 100)}@example.com`,
        location: ["Moscow", "Saint Petersburg", "Novosibirsk", "Tomsk"][generationUuid(0, 3)],
        status: Math.random() > 0.5 ? "active" : "delete", // Случайный статус
    };
}

async function getFakeUsers(delay: number): Promise<User[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const fakeUsers: User[] = Array.from({ length: 5 }, createFakeUser);
            resolve(fakeUsers);
        }, delay);
    });
}

getFakeUsers(2000)
    .then((result) => {
        console.log("Данные успешно загружены:", result);
    })
    .catch((error) => {
        console.error("Ошибка:", error);
    });
