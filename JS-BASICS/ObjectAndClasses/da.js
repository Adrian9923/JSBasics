let city = {
    name: 'Berlin',
    country: 'Germany',
    population: 3769495,
    summarize() {
        console.log(`${this.name} is a city in ${this.country} with a population of ${this.population}.`);
    }
}

city.summarize();