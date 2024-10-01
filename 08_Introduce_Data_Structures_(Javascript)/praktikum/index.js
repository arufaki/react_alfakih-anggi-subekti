const tableBody = document.querySelector("tbody");
const formProduct = document.getElementById("formProduct");
const deleteButton = document.querySelector(".delete");

let tableData = JSON.parse(localStorage.getItem("tableData")) || [];

function displayList() {
    const extractTable = tableData
        .map((table, index) => {
            return `<tr class="bg-white border-b hover:bg-gray-50">
                                    <td class="px-6 py-4">${index + 1}</td>
                                    <td class="px-6 py-4">${table.nameProduct}</td>
                                    <td class="px-6 py-4">${table.productCategory}</td>
                                    <td class="px-6 py-4">${table.img}</td>
                                    <td class="px-6 py-4">${table.productFreshness}</td>
                                    <td class="px-6 py-4">${table.description}</td>
                                    <td class="px-6 py-4">$ ${table.price}</td>

                                </tr>`;
        })
        .join("");

    tableBody.innerHTML = extractTable;
}

displayList();

formProduct.addEventListener("submit", (e) => {
    e.preventDefault();

    let productName = document.getElementById("productName");
    let productCategory = document.getElementById("productCategory");
    let description = document.getElementById("description");
    let priceProduct = document.getElementById("productPrice");
    let radios = document.querySelectorAll('input[name="product-freshness"]');
    let dataRadio;
    radios.forEach((radio) => {
        if (radio.checked) {
            dataRadio = radio.value;
        }
    });

    if (productName == "" || productCategory == "") {
        console.log("Input Error, detected undefined alphabet ?");
    } else {
        const newDatas = {
            nameProduct: productName.value,
            productCategory: productCategory.value,
            img: "default.png",
            productFreshness: dataRadio,
            description: description.value,
            price: priceProduct.value,
        };
        tableData.push(newDatas);
        localStorage.setItem("tableData", JSON.stringify(tableData));
        displayList();
    }

    formProduct.reset();
});

deleteButton.addEventListener("click", () => {
    if (tableData.length > 0) {
        tableData.pop();
        localStorage.setItem("tableData", JSON.stringify(tableData));
    } else {
        console.log("Data Kosong");
    }

    displayList();
});
