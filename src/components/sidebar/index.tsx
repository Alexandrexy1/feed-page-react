
export function Sidebar() {
    return (
        <div>
            <div className="bg-neutral-800 rounded-lg w-60 h-64 flex flex-col justify-between absolute">
                <div className="bg-sky-50 rounded-t-lg w-full h-16 absolute"></div>
                <div className="bg-red-500 w-1/4 mt-8 m-auto p-7 rounded-md outline outline-green-400 outline-1 relative"></div>
                <div className="flex flex-col m-auto mt-0">
                    <p className="text-slate-100">Alexandre Nascimento</p>
                    <p className="text-sm m-auto">Full-Stack developer</p>
                </div>
                <button 
                    className="border w-2/3 h-10 mb-8 m-auto rounded-md border-green-400 text-green-400 hover:border-green-500 hover:text-green-500">
                        Editar seu perfil
                </button>
            </div>
        </div>
    )
}