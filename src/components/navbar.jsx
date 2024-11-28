export default function NavBar({ title = 'Tu tiluo'}) {
    return (
        <>
            <div className="bg-slate-800 p-4 w-full flex justify-between fixed top-0">
                <h1 className="text-slate-300 text-2xl font-semibold">
                    <a href="">
                    {title}
                    </a>
                </h1>
                <ul className="flex space-x-4 text-slate-300">
                    <li><a href="/#"></a>Incio</li>
                    <li><a href="/#">Saber más </a></li>
                    <li><a href="/#"></a>Contacto</li>
                </ul>
            </div>
        </>
    )
}