export default function Hamburger() {
    return (
        <div className="flex flex-col sm:hidden">
            <span className="w-8 h-1 bg-black my-[2px] rounded-xl" />
            <span className="w-8 h-1 bg-black my-[2px] rounded-xl" />
            <span className="w-8 h-1 bg-black my-[2px] rounded-xl" />
        </div>
    );
}
