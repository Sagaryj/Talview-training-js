const URL="https://dog.ceo/api/breeds/list/all";
let promisse= fetch (URL);
console.log("Promise:", promisse);
promisse
    .then((response) => response.json())
    .then((data) => console.log("Data:", data))
    .catch((error) => console.log("Error:", error));

const fetchDogImage = async () => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Dog Image:", data);
        
    } catch (error) {
        console.log("Error:", error);
    }
};

fetchDogImage();
