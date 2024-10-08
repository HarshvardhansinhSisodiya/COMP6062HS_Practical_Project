const app = Vue.createApp({
    data() {
        return {
            name: 'Harshvardhansinh Sisodiya',
            studentNumber: '1162492',
            randomFact: '',
            weather: null,
            dictionaryWord: '',
            dictionaryDefinition: null,
            defaultCity: 'London, Ontario'
        };
    },
    created() {
        this.fetchRandomFact();
        this.fetchWeather();
    },
    computed: {
        fullName() {
            return `${this.name} (${this.studentNumber})`;
        }
    },
    methods: {
        fetchRandomFact() {
            fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
                .then(response => response.json())
                .then(data => {
                    this.randomFact = data.text;
                })
                .catch(error => {
                    console.error('Error: ', error);
                });
        },
        fetchWeather() {
            fetch(`https://goweather.herokuapp.com/weather/${this.defaultCity}`)
                .then(response => response.json())
                .then(data => {
                    this.weather = data;
                })
                .catch(error => {
                    console.error('Error: ', error);
                });
        },
        fetchDictionaryDefinition() {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.dictionaryWord}`)
                .then(response => response.json())
                .then(data => {
                    this.dictionaryDefinition = data[0];
                })
                .catch(error => {
                    console.error('Error: ', error);
                });
        }
    }
});

app.mount('#app');
