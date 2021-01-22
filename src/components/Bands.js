import React from 'react'


const Bands = (props)=>
  
<div>
    {props.bands.map((band,index)=><li key={index}>{band}</li>) }
</div>
  


export default Bands