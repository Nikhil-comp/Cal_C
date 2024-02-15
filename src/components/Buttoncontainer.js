
export default function ButtonContainer({onClickButton})
{
    const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.','^','(',')','%']
    return(
    <>
      <div className="buttons-container">
        {buttonNames.map((buttonText)=>{
         return <button id="btn" onClick={()=>onClickButton(buttonText)}>{buttonText}</button>
        }
        
        )}
                 
      </div>
    </>)
}