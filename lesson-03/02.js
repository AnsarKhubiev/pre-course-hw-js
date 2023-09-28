const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

const findOrangeInArr = (arr) => {
    arr.indexOf("апельсин") != -1
        ? console.log("Ура! нашел")
        : console.log("Придется поискать в другом магазине…");
};

findOrangeInArr(words);
