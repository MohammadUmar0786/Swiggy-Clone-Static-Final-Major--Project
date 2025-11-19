export default function FoodCard2({value}){

    return(
        <div className="flex-none">
        <a href={value.action.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId}></img>
        </a>
        </div>
        )
}