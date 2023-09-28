const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

const createColorString = (arr) => {
    const newArr = arr.filter((e) => {
        return e === "черный" || e === "красный" || e === "желтый";
    });
    return newArr.join("-");
};

console.log(createColorString(colors));
