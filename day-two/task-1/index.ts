// объект data
const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "[alice@example.com](<mailto:alice@example.com>)",
    notes: null,
};

// реализация функции
const countFilledValues = (obj: Record<string, unknown>) => {
    const values = Object.values(obj);
    const filledValues = values.filter(value => {
        return value !== null && value !== undefined && value !== "";
    })
    return filledValues.length;
}

console.log(countFilledValues(data)) // 3