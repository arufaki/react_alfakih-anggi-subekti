// menangkap element html
const tableBody = document.querySelector("tbody");
const formProduct = document.getElementById("formProduct");
const deleteButton = document.querySelector(".delete");

// Mengambil data dari local storage jika data akan ditampilkan, jika array kosong berarti data ksong
let tableData = JSON.parse(localStorage.getItem("tableData")) || [];

// membuat kerangka body table ketika ada data masuk akan nambah field
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

function addProduct() {
    // mengambbil value dari seluurh input
    const productName = document.getElementById("productName").value;
    const productCategory = document.getElementById("productCategory").value;
    const description = document.getElementById("description").value;
    const priceProduct = document.getElementById("productPrice").value;
    const radios = document.querySelectorAll('input[name="product-freshness"]');
    const dataRadio = Array.from(radios).find((radio) => radio.checked)?.value;

    // jika ada product yang berisi string kosong attaupun spasi kosong, akan muncul alert
    if (!productName || !productCategory || !dataRadio) {
        alert("Input Error, detected undefined alphabet ?");
        return;
    }

    //menginisiasi data input ke object new data sesuai dengan key object
    const newDatas = {
        nameProduct: productName,
        productCategory: productCategory,
        img: "default.png",
        productFreshness: dataRadio,
        description: description,
        price: priceProduct,
    };

    // melakukan push data ke localstorage
    tableData.push(newDatas);
    localStorage.setItem("tableData", JSON.stringify(tableData));
    displayList();
    formProduct.reset();
}

// fungsi untuk melakukan delete product terakhir dan melakukan setdata ulang di localsttorage
function deleteLastProduct() {
    if (tableData.length > 0) {
        tableData.pop();
        localStorage.setItem("tableData", JSON.stringify(tableData));
    } else {
        console.log("Data Kosong");
    }
    displayList();
}

// ketika form disubbmit akan menjalankan fungsi yang berada di addProduct
formProduct.addEventListener("submit", (e) => {
    e.preventDefault();
    addProduct();
});

// ketika delete button di klik akan menjalankan fungsi menghapus product terakhir
deleteButton.addEventListener("click", deleteLastProduct);
displayList();
