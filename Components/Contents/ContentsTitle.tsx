

export function ContentsTitle ({title}: {title:string}) {

    return(
        <div className="w-full flex justify-center mx-auto" style={{ backgroundImage: "url('/image/sq_bg.png')" }} >
            <h1 className="py-[60px] text-[34px]">{title}</h1>
        </div>
    )
}