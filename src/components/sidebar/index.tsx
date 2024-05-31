import { MdOutlineEdit } from "react-icons/md";

export function Sidebar() {
    return (
        <aside className="w-100 bg-neutral-800">
            <img 
                className="w-full object-cover h-20"
                src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className="flex flex-col items-center">
                <img 
                    className="w-14 border-slate-800 border-4 outline-green-500 box-content outline rounded-md mt-[-2rem]"
                    src="https://github.com/alexandrexy1.png"
                    alt="profile picture" />
                <p 
                    className="font-bold mt-6 leading-6 text-gray-200">Alexandre Nascimento</p>
                <span className="text-sm text-gray-300">Full-Stack developer</span>

            </div>
            <footer className="my-6 border-t-zinc-700 border-t px-8 pt-8 pb-3">
                <a 
                    className="text-green-500 hover:text-green-600 rounded-lg h-12 flex justify-center items-center gap-1 border border-green-500 hover:border-green-600"
                    href="#">
                    <MdOutlineEdit size={20}/>
                    Editar seu perfil
                </a>

            </footer>
        </aside>
    )
}