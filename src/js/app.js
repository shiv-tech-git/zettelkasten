
document.getElementById("submit-btn").addEventListener("click", submit_form)

function submit_form(e) {
    e.preventDefault()
    let form = document.getElementById('create-note-form')
    let data = new FormData(form);
    console.log(Array.from(data))
    sendData(data)
}

function sendData( formData ) {
    const XHR = new XMLHttpRequest()
    
    // Define what happens on successful data submission
    XHR.addEventListener( 'load', function( event ) {
    } );
  
    // Define what happens in case of error
    XHR.addEventListener(' error', function( event ) {
    } );
  
    // Set up our request
    XHR.open( 'POST', '/create' );
    XHR.setRequestHeader( 'Content-Type', 'application/json' );
  
    // Send our FormData object; HTTP headers are set automatically
    let body = {};
    formData.forEach((value, key) => body[key] = value);
    XHR.send( JSON.stringify(body) );
  }