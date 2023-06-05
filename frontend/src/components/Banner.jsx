import Button from "./elements/Button"



export const Banner = () => {

    
    return(
        <div className="banner h-3/4 md-2/3 px-10 mx-auto flex items-center justify-between">
            <div className="banner-content flex ">
                <div className="flex items-center justify-between">
                    <img src={require("../assets/images/logo/vortex.png")} className="w-40 h-30" alt="vortex" />
                </div>
                <div className="header flex items-center justify-between font-bold text-4xl">
                    <h1 className="">Vortex <span><h1 className="inline text-tomato">Youtube </h1></span>Downloader</h1>
                </div>
                <div className="block form-data mx-auto">
                    <form>
                        <input type="text" value="" placeholder="Paste your link here" className="border-2 p-2" />
                        <Button className="bg-tomato ml-4">Download</Button>
                    </form>
                </div>

            </div>
        </div>
    )
}