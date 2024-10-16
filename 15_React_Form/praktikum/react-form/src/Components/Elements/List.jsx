export default function List() {
    return (
        <ul className="hidden sm:flex items-center">
            <li className="mx-[24px] font-roboto font-medium text-[16px] text-[#ffffff] bg-[#0d6efd] px-[16px] py-[12px] rounded-[4px]">Home</li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">Features</li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">Pricing</li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">FAQs</li>
            <li className="px-[24px] font-roboto font-medium text-[16px] text-[#0d6efd]">About</li>
        </ul>
    );
}
