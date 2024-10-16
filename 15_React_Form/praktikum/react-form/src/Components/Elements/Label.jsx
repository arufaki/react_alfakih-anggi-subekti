export default function ({ labelName, ...props }) {
    return (
        <label className="font-roboto font-normal text-base text-[#212529]" {...props}>
            {labelName}
        </label>
    );
}
