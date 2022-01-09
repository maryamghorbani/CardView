export function BackSide() {
    return <>
        <div className="p-24 bg-white shadow-md rounded-lg text-gray-900">
            <div className="text-center mt-2 mb-28">
                <p className="text-stone-300 text-4xl font-extrabold">#1</p>
                <p className="text-7xl font-black">Blubasaur</p>
            </div>

            <div className="">
                <div className="relative mb-9">
                    <p className="text-left text-base font-extrabold text-red-600">HP</p>
                    <div className="w-full flex">
                        <div className="w-80 overflow-hidden h-2.5 mt-px text-xs flex rounded bg-neutral-100 relative">
                            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"></div>
                        </div>
                        <p className="w-9 text-base font-extrabold leading-3 text-red-600">45</p>
                    </div>
                </div>
                <div className="relative mb-9">
                    <p className="text-left text-base font-extrabold text-red-600">HP</p>
                    <div className="w-full flex">
                        <div className="w-80 overflow-hidden h-2.5 mt-px text-xs flex rounded bg-neutral-100 relative">
                            <div style={{ width: "30%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"></div>
                        </div>
                        <p className="w-9 text-base font-extrabold leading-3 text-red-600">45</p>
                    </div>
                </div>
            </div>

        </div>
    </>
}