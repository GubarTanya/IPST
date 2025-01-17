function calculateBanknotes(totalAmount: number): { [key: number]: number } {
    const banknoteDenominations = [100, 50, 10, 5, 2, 1];
    const banknoteCounts: { [key: number]: number } = {};

    for (let denomination of banknoteDenominations) {
        banknoteCounts[denomination] = 0;
        while (totalAmount >= denomination) {
            banknoteCounts[denomination]++;
            totalAmount -= denomination;
        }
    }
    return banknoteCounts;
}

const amount: number = 367;
console.log(calculateBanknotes(amount));