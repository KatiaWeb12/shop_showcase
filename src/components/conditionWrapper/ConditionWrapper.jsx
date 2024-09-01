export default function ConditionWrapper({children, condition}){
    return(
      <>
         {condition ? children[0] : children[1]}
      </>
    )
}