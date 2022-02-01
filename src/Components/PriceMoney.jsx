import './PriceMoney.css'
const PriceMoney = ({Price,questionNumber})=>{
    console.log("PriceMoney Rendered");
    // console.log(props);
    // const [id, amount] = props.Price;
    // console.log(id.id);

    return(
    <div className="Container">
       <ul className='moneyList'>
           {Price.map((value)=>{
            const {id, amount} = value;
               return(
                <li key={id} className={questionNumber === id? 'moneyListItem active' : "moneyListItem"}>
                <span className='moneyListNumber'>{id}</span>
                 <span className='moneyListAmount'>{amount}</span>
             </li>
               )})}
       </ul>
    </div>);
   
}

export default PriceMoney;