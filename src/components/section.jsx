export default function Section({children}){
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6 mr-6 gap-4">
            {children}
        </div>
        </>
    )
}