import Image from "../assets/Apple-Pie_8.webp"

function Recipe (){
  return(
    <div><p>This is a recipe for an apple pie</p>
    <p>First, buy an apple pie</p>
    <p>Then, serve it!</p>
    <img src={Image} alt="" />
    </div>
  )
}
export { Recipe }