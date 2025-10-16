const navItems = [
    {
        id: 1,
        name: "Home",
        url: "/"
    },
    {
        id: 2,
        name: "Calculators",
        url: "/calculators",
    },
    {
        id: 3,
        name: "Converters",
        url: "/converters",
    },
    {
        id: 4,
        name: "Counters",
        url: "/counters",
    },
    {
        id: 5,
        name: "Generators",
        url: "/generators",
    }
];

const calculators = [
    {
        id: 1,
        name: "Age Calculator",
        url: "/calculators/age-calc",
    },
    {
        id: 2,
        name: "BMI Calculator",
        url: "/calculators/bmi-calc",
    },
    {
        id: 3,
        name: "EMI Calculator",
        url: "/calculators/emi-calc",
    },
    {
        id: 4,
        name: "GPA Calculator",
        url: "/calculators/gpa-calc",
    },
    {
        id: 5,
        name: "CGPA Calculator",
        url: "/calculators/cgpa-calc",
    },
    {
        id: 6,
        name: "Math Calculator",
        url: "/calculators/math-calc",
    },
];

const converters = [
    {
        id: 1,
        name: "Temperature Converter",
        url: "/converters/temperature-converter",
    },
    {
        id: 2,
        name: "Length Converter",
        url: "/converters/length-converter",
    },
    {
        id: 3,
        name: "Weight Converter",
        url: "/converters/weight-converter",
    },
    {
        id: 4,
        name: "Number Converter",
        url: "/converters/number-converter",
    },
    {
        id: 5,
        name: "Speed Converter",
        url: "/converters/speed-converter",
    },
    {
        id: 6,
        name: "Time Converter",
        url: "/converters/time-converter",
    },
    {
        id: 7,
        name: "Currency Converter",
        url: "/converters/currency-converter",
    },
];
const counters =[
    {
        id: 1,
        name: "Words Counter",
        url: "/counters/word-counter",
    },
    {
        id: 2,
        name: "Letters Counter",
        url: "/counters/letter-counter",
    },
    {
        id: 3,
        name: "Sentence Counter",
        url: "/counters/sentence-counter",
    },
];

const generators = [
    {
        id: 1,
        name: "Password Generator",
        url: "/generators/password-generator",
    },
    {
        id: 2,
        name: "Summary Generator",
        url: "/generators/summary-generator",
    },
];

const homeImages = [
    {
        id: 1,
        title: "Calculators",
        url: "/Calculators.png",
    },
    {
        id: 2,
        title: "Converters",
        url: "/Converters.png",
    },
    {
        id: 3,
        title: "Counters",
        url: "/Counters.png",
    },
    {
        id: 4,
        title: "Generators",
        url: "/Generators.png",
    }
];

const lengthConverterOptions = ["meters", "millimeters", "centimeters", "kilometers", "decimeters", "hectometers", "decameters", "inches", "feet", "yards", "miles"];
const numberConverterOptions = ["binary", "octal", "decimal", "hexadecimal"];
const temperatureConverterOptions = ["celsius", "fahrenheit", "kelvin", "rankine"];
const weightConverterOptions = ["grams", "kilograms", "ounces", "pounds"];
const speedConverterOptions = ["meters/second", "kilometers/hour", "miles/hour"];

export { 
    navItems,
    calculators,
    converters,
    counters,
    generators,
    homeImages,
    lengthConverterOptions,
    numberConverterOptions,
    temperatureConverterOptions,
    weightConverterOptions,
    speedConverterOptions,

};
