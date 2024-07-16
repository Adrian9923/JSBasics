function store(products) {
    let result = [];
    for(const product of products) {
        let [name, price] = product.split(' : ');
        price = Number(price);

        result.push({name,price});
    }

    result.sort((a, b) => a.name.localeCompare(b.name));

    let grouped = {}; // Object to store grouped products

    result.forEach(element => {
        const firstLetter = element.name[0].toUpperCase();
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(element);
    });

    for (const letter in grouped) {
        console.log(letter);
        grouped[letter].forEach(product => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    }
}

store(['Apricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])