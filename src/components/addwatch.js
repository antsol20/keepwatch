import React from 'react'


const Addwatch = () => {
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
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="inputlabel">
                            Site
                        </div>
                    </td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>

                <tr>
                    <td colSpan="2" rowSpan="2" align="left" style={{paddingTop: '20px'}}>
                        <button style={{ marginLeft: '10px', width:'100px', textAlign:'center' }}>
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