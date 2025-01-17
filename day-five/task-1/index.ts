type Choice = "Камень" | "Ножницы" | "Бумага";
type Result = "Игрок победил" | "Компьютер победил" | "Ничья";

interface GameResult {
    playerChoice: Choice;
    computerChoice: Choice;
    result: Result;
}

function playGame(playerChoice: Choice): GameResult {
    const choices: Choice[] = ["Камень", "Ножницы", "Бумага"];

    if (!choices.includes(playerChoice)) {
        throw new Error("Некорректный выбор. Выберите 'Камень', 'Ножницы' или 'Бумага'.");
    }

    const computerChoice: Choice = choices[Math.floor(Math.random() * choices.length)];

    let result: Result;
    if (playerChoice === computerChoice) {
        result = "Ничья";
    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Игрок победил";
    } else {
        result = "Компьютер победил";
    }

    return {
        playerChoice,
        computerChoice,
        result,
    };
}

try {
    const gameResult = playGame("Камень");
    console.log(`Игрок выбрал: ${gameResult.playerChoice}`);
    console.log(`Компьютер выбрал: ${gameResult.computerChoice}`);
    console.log(`Результат: ${gameResult.result}`);
} catch (error) {
    console.error(error.message);
}
