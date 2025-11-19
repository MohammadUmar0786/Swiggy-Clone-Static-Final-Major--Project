export default function GroceryCard({groceryData}){
    return(
        <div className="flex-none">
            <a href={groceryData?.action?.link}>
                <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId}></img>
            </a>
            <h2 className="text-gray-500 font-bold text-center">{groceryData?.action?.text}</h2>
        </div>
    )
}