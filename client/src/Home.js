// import React from 'react'
// import { useHistory } from "react-router-dom"

// function Home() {
//     const history = useHistory()
//     const redirect_to_roles = () => {
//         history.push('/roles')
//     }
//     const redirect_to_addmed = () => {
//         history.push('/addmed')
//     }
//     const redirect_to_supply = () => {
//         history.push('/supply')
//     }
//     const redirect_to_track = () => {
//         history.push('/track')
//     }
//     return (
//         <>

            
            
//         <div className='Frontal'>

//             <br />
//             <h1>BlockPharm  </h1>
//             <br />
//             <br />
//             <h2>Blockchain technology to develop a safe and transparent supply chain management solution
//                 for the pharmaceutical business</h2>
//             <br />
//             <h6>(Note: Here <u>Owner</u> is the person who deployed the smart contract on the blockchain)</h6>
//             <br />
//             <h5>Step 1: Owner Should Register Raw material suppliers ,Manufacturers, Distributors and Retailers</h5>
//             <h6>(Note: This is a one time step. Skip to step 2 if already done)</h6>
//             <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
//             <br />
//             <h5>Step 2: Owner should order medicines</h5>
//             <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">Order Medicines</button>
//             <br />
//             <h5>Step 3: Control Supply Chain</h5>
//             <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
//             <br />
            
//             <br />
//             <h5><b>Track</b> the medicines:</h5>
//             <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Medicines</button>
//         </div>
//         </>
//     )
// }

// export default Home

import React from 'react'
import { useHistory } from "react-router-dom"
import Table from 'react-bootstrap/Table';


function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <div>
            <div className="text-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <a className="navbar-brand" href="/">
                    <img src={require('./assets/images/blockpharm-logo2.png').default}  width="60em" height="60em" className="d-inline-block mx-auto align-top" alt="BlockPharm logo" />
                    <strong style={{ fontSize: '1.8em' }}> BlockPharm</strong>
                </a>
            </nav>
            </div>
            <div className='Frontal'>
                <br />
                <h4 style={{ fontStyle: 'italic' }}>"Blockchain technology to develop a safe and transparent supply chain management solution
                    for the pharmaceutical business"</h4>

                    <br />
    
                
            </div>


            <Table striped bordered hover variant="light" style={{opacity: 0.9}}>
      <thead>
        <tr>
          <th>Steps</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Step 1</td>
          <td>Owner Should Register Raw material suppliers ,Manufacturers, Distributors and Retailers<br/>
          (Note: This is a one time step. Skip to step 2 if already done)
          </td>
          <td>
          <button onClick={redirect_to_roles} className="btn btn-outline-primary btn-sm">Register</button>
                <br />
          </td>
        </tr>
        <tr>
          <td>Step 2</td>
          <td>Owner should order medicines</td>
          <td>
          <button onClick={redirect_to_addmed} className="btn btn-outline-primary btn-sm">Order Medicines</button>
          </td>
        </tr>
        <tr>
          <td>Step 3</td>
          <td>Control Supply Chain</td>
          <td>
          <button onClick={redirect_to_supply} className="btn btn-outline-primary btn-sm">Control Supply Chain</button>
                <br />
          </td>
        </tr>
      </tbody>
    </Table>
    <br />

        
    <Table striped bordered hover variant="light" style={{opacity: 0.9}}>
      <tbody>
        <tr>
          <td style={{width: '50%', textAlign: 'center'}}>
            Track the medicines:  <button onClick={redirect_to_track} className="btn btn-outline-primary btn-sm">Track Medicines</button>
            </td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}

export default Home
