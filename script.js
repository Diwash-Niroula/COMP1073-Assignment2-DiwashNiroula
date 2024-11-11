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

    // Code to add other selections and update the order summary will follow in next steps
}
