import React from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { Redirect } from 'react-router-dom';


class Bell extends React.Component{
    constructor()
    {
        super()

this.state={curr:''}
this.Back=this.Back.bind(this);

    }


    Back()
    {   console.log('back');
        this.setState({curr:'/Bell'
        });
    }

   

render()
{ 
    if(this.state.curr=="/Bell")

return(
    <Redirect to='/People'></Redirect>
    
)




    console.log('ji');
return(
<div>

<FontAwesomeIcon icon={ faAngleLeft } onClick={this.Back} size="2x"/>
</div>

)
}
}
export  default Bell