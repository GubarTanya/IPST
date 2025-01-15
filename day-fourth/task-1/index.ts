type User = {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
};

async function cleanUserData(users: User[]): Promise<User[]> {
    if (Math.random() < 0.1) {
        throw new Error("Произошла случайная ошибка!");
    }

    return users
        .filter(user => user.isActive)
        .map(user => ({
            ...user,
            name: user.name.trim().toLowerCase(),
            email: user.email.toLowerCase(),
        }));
}

(async () => {
    const users: User[] = [
        { id: "1", name: " John Doe  ", email: "John@Example.com", isActive: true },
        { id: "2", name: "Jane Doe", email: "Jane@Example.com", isActive: false },
        { id: "3", name: "Alice  ", email: "Alice@Example.com", isActive: true },
    ];

    try {
        const cleanedUsers = await cleanUserData(users);
        console.log(cleanedUsers);
    } catch (error) {
        console.error("Error:", error.message);
    }
})();