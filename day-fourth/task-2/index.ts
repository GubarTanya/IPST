type UserWithGadget = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
};

type UserWithGadgets = {
    id: string;
    name: string;
    gadgets: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
};

function aggregateUserGadgets(users: UserWithGadget[]): UserWithGadgets[] {
    const userMap = new Map<string, UserWithGadgets>();

    users.forEach(user => {
        if (!userMap.has(user.id)) {
            userMap.set(user.id, {
                id: user.id,
                name: user.name,
                gadgets: [],
            });
        }
        userMap.get(user.id)!.gadgets.push(user.gadget);
    });

    return Array.from(userMap.values());
}

const input: UserWithGadget[] = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "101", name: "Phone", price: "1000"},
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: { id: "102", name: "Tablet", price: undefined},
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "103", name: "Laptop", price: "1500"},
    },
];

const output = aggregateUserGadgets(input);
console.log(output);