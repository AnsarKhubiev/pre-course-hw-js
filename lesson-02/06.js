let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA",
    },
};

let passportWithAddress2 = {
    ...passportWithAddress,
    address: { ...passportWithAddress.address, city: "Bobryisk" },
};

console.log("passportWithAddress:", passportWithAddress);
console.log("passportWithAddress2:", passportWithAddress2);
