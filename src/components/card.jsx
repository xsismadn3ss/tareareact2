export default function Card({ title, text }) {
    return (
        <>
            <div className="border-2 rounded-lg shadow-lg p-4 w-full bg-gradient-to-t from-slate-50 to-slate-100">
                <h1 className="text-2xl font-semibold text-center text-slate-800">{title}</h1>
                <p className="text-slate-600 text-center">{text}</p>
            </div>
        </>
    )
}