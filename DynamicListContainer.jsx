const DynamicListContainer = ({data, type, orientation}) => {
  //checks the orientation parameter to determine if the list should be in columns or rows
  let direction = orientation==="vertical"?"column":"row";
  return (
    <div style={{border: "5px solid darkcyan", margin: "10px", padding: "5px"}}>
        {/*Renders either an ordered or unordered list depending on the content of the 'type' parameter and, in either, maps through the array contained in the 'data' parameter to make a li element out of each item. Depending on the direction variable, sorts the list into columns or rows using flexbox*/}
        {type==="ol" ? <ol style={{display: "flex", flexDirection: direction, columnGap: "40px", flexWrap: "wrap"}}>
            {data.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ol> : <ul style={{display: "flex", flexDirection: direction, columnGap: "40px", flexWrap: "wrap"}}>
            {data.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>}
    </div>
  )
}

export default DynamicListContainer;