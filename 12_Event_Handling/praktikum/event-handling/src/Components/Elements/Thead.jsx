export default function Thead({ children }) {
    const tableHeader = ["No", "Product Name", "Product Category", "Image of Product", "Product Freshness", "Additional Description", "Product Price"];

    return (
        <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 bg-white border-b-2 border-gray-300 border-t-2">
                <tr>
                    {tableHeader.map((table, index) => (
                        <th scope="col" key={index} className="px-6 py-3">
                            {table}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="tableBody">{children}</tbody>
        </table>
    );
}
