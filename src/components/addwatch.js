import React from 'react'
import { useState } from 'react';

const Addwatch = ({onAdd}) => {

    const [descInput, setDescInput] = useState('');
    const [siteInput, setSiteInput] = useState('');

    return (
        <>
            <table>
                <tr>
                    <td>
                        <div className="inputlabel" >
                            Description
                        </div>
                    </td>
                    <td>
                        <input value={descInput} onInput={e => setDescInput(e.target.value)} type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="inputlabel">
                            Site
                        </div>
                    </td>
                    <td>
                        <input value={siteInput} onInput={e => setSiteInput(e.target.value)} type="text"></input>
                    </td>
                </tr> 

                <tr>
                    <td colSpan="2" rowSpan="2" align="left" style={{paddingTop: '20px'}}>
                        <button onClick={()=> {
                            onAdd({'Description': descInput, 'Site': siteInput})
                            setDescInput('')
                            setSiteInput('')
                            }} style={{ marginLeft: '10px', width:'100px', textAlign:'center' }}>
                            Add
                        </button>
                    </td>
                    <td></td>
                </tr>
            </table>
        </>
    )
}

export default Addwatch