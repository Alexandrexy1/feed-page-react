import logotipo from "../../assets/logotipo.png";

export function Header() {
    return (
        <div className="bg-neutral-800 w-full h-16 max-w-7xl flex justify-center items-center">
            <img src={logotipo} 
                alt="logotipo Ds Feed" 
                className="w-12 mr-2"
                />
            <strong className="text-xl">Feed</strong>
        </div>
    )
}