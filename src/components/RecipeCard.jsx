import { HeartIcon } from "@heroicons/react/24/outline"


const RecipeCard = ({image, name}) => {
  return (
    <div className="relative">
        <div>  
        <HeartIcon className="size-[1px]" />
        </div>
        <img src={image} alt={name} />,
        <p className="absolute left-3 bottom-5 text-white">{name}</p>
    </div>
  )
}

export default RecipeCard