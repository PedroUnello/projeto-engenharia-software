/* todo */

import './style.css';
import Draggable from 'react-draggable';
import React, { Component } from 'react';
class Task extends Component {

    state = {
        initialPosX: 0,
        initialPosY: 0,
        reset: true
    };

    changeLocStart(event, handle){
        //console.log(handle);
        //this.setState({initialPosX: handle.x, initialPosY: handle.y, reset: false});
    }

    stopHandle(event, handle){
        //this.setState({reset: true});
    }

    render () { const {reset} = this.state; return (
        <Draggable position={ reset ? {x:0, y:0} : undefined } onStart={this.changeLocStart} onDrag={()=>console.log()} onStop={this.stopHandle}>
            <div className="task">
    
                {this.props.deleteB}
    
                {this.props.descricao}
                <div className="addBy ">
                   Added by:  {this.props.addedBy}
                </div>
                <div className="addBy ">
                    {this.props.projeto}
                </div>
            </div>
        </Draggable>
    )};
} export default Task;