import React from 'react';
import './index.css';

const Todolist = (props) => {

    return (
        <>
            <div className='todo_style'>
                <div>
                    <li>
                        <span 
                        className="cross" 
                        onClick= { () => {
                            props.onSelect(props.id)
                        } }>
                        -
                        </span> 
                        {} 
                        <div 
                        className="sty">
                        { props.text }
                        </div>
                    </li>
                </div>
            </div>
        </>
    );
};


export default Todolist;