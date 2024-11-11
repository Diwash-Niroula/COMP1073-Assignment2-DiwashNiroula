function calculateTotal() {
    let total = 0;
    let selectedItems = [];

    // Base and Size selection (Dropdown)
    const baseSelect = document.getElementById("base");
    const sizeSelect = document.getElementById("size");

    const baseItem = baseSelect.options[baseSelect.selectedIndex];
    const sizeItem = sizeSelect.options[sizeSelect.selectedIndex];

    if (baseItem.value !== "0") {
        total += parseFloat(baseItem.value);
        selectedItems.push(`${baseItem.getAttribute("data-item")} - $${parseFloat(baseItem.value).toFixed(2)}`);
    }

    if (sizeItem.value !== "0") {
        total += parseFloat(sizeItem.value);
        selectedItems.push(`${sizeItem.getAttribute("data-item")} - $${parseFloat(sizeItem.value).toFixed(2)}`);
    }

    // Radio button selections (Fruit and Protein)
    const fruitSelection = document.querySelector('input[name="fruit"]:checked');
    const proteinSelection = document.querySelector('input[name="protein"]:checked');

    if (fruitSelection) {
        total += parseFloat(fruitSelection.value);
        selectedItems.push(`${fruitSelection.getAttribute("data-item")} - $${parseFloat(fruitSelection.value).toFixed(2)}`);
    }

    if (proteinSelection) {
        total += parseFloat(proteinSelection.value);
        selectedItems.push(`${proteinSelection.getAttribute("data-item")} - $${parseFloat(proteinSelection.value).toFixed(2)}`);
    }

    // Update order summary
    document.getElementById('selected-items').innerHTML = selectedItems.join('<br>');
    document.getElementById('total-price').innerHTML = `Total Price: $${total.toFixed(2)}`;
}

function placeOrder() {
    // Display order confirmation message
    alert("Order Placed!");

    // Clear form and order summary
    document.getElementById("smoothie-form").reset();
    document.getElementById('selected-items').innerHTML = '';
    document.getElementById('total-price').innerHTML = '';
}
