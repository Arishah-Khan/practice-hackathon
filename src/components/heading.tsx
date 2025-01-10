interface heading{
    text:string
}

export default function Div({text}:heading){
    return(
        <section className="flex justify-start gap-3 font-semibold items-center p-3">
            <div className="w-3 h-6 bg-[#db4444] rounded-lg"> </div>
            <h4 className="text-[#db4444]">{text}</h4>
        </section>
    )
}