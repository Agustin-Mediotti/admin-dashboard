import React from 'react'

function ErrorPage() {
  return (
    <div style={{textAlign: 'center', alignItems: 'center'}}>
        <h1 style={{fontSize: '120px'}}>Oops!</h1>
        <h4>Sorry, an unnexpected error has occurred.</h4>
        <p style={{color: 'gray', marginTop: '20px'}}>Not Found</p>
    </div>
  )
}

export default ErrorPage