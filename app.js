// Smoothie Class
class Smoothie {
    constructor(customer, base, ingredients, sweetness, price) {
        this.customer = customer;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
        this.price = price;
    }

    describe() {
        return `
            <h2>🍹 Smoothie Order Summary</h2>
            <p><strong>Customer:</strong> ${this.customer}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
            <p><strong>Sweetness:</strong> ${this.sweetness}</p>
            <h3>Total Price: $${this.price.toFixed(2)}</h3>
        `;
    }
}

document.getElementById("smoothieForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let customer = document.getElementById("customerName").value;
    let baseElement = document.getElementById("base");
    let base = baseElement.options[baseElement.selectedIndex].value;
    let basePrice = parseFloat(baseElement.options[baseElement.selectedIndex].dataset.price);

    // Collect ingredients
    let ingredients = [];
    let ingPriceTotal = 0;
    document.querySelectorAll("input[type='checkbox']:checked").forEach(item => {
        ingredients.push(item.value);
        ingPriceTotal += parseFloat(item.dataset.price);
    });

    let sweetness = document.getElementById("sweetness").value;

    // Total Price
    let total = basePrice + ingPriceTotal;

    // Create Smoothie Object
    let smoothie = new Smoothie(customer, base, ingredients, sweetness, total);

    // Output to page
    document.getElementById("output").innerHTML = smoothie.describe();
});
