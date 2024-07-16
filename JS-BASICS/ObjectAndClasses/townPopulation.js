function townPopulation(townData) {
    const townRegistry = {};

    townData.forEach(entry => {
        const [townName, population] = entry.split(" <-> ");
        const parsedPopulation = parseInt(population);

        if (townRegistry[townName]) {
            townRegistry[townName] += parsedPopulation;
        } else {
            townRegistry[townName] = parsedPopulation;
        }
    });

    for (const town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }
}

townPopulation(['Bucharest <-> 1830000', 'Vienna <-> 1900000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])