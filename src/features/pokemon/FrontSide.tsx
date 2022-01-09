export function FrontSide() {
    return <>
        <div className="p-24 bg-white shadow-md rounded-lg text-gray-900">
            <div className="text-center mt-2">
                <p className="text-stone-300 text-4xl font-extrabold">#1</p>
                <p className="text-7xl font-black">Blubasaur</p>
            </div>
            <div className="">
                <img className="object-cover object-center"
                     src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                     alt='Woman looking front'/>
            </div>
            <div className="px-5 py-2.5 mt-20 mb-5">
                <button className="inline-block rounded-lg bg-gray-400 font-semibold text-white px-6 py-1 text-lg">Follow
                </button>
            </div>
        </div>
    </>
}