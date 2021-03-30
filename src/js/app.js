
document.getElementById("submit-btn").addEventListener("click", submit_form)

function submit_form(e) {
    e.preventDefault()
    let form = document.getElementById('create-note-form')
    let data = new FormData(form);
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
    
    XHR.onreadystatechange = function() {
        if (XHR.readyState == XMLHttpRequest.DONE) {
            if(XHR.status == 200){
                let obj = JSON.parse(XHR.responseText)
                console.log(typeof obj);
                console.log(obj);
            }else{
                console.log('Error: ' + XHR.statusText )
            }
        }
    }
    // Set up our request
    XHR.open( 'POST', '/create' );
    XHR.setRequestHeader( 'Content-Type', 'application/json' );
  
    // Send our FormData object; HTTP headers are set automatically
    let body = {};
    formData.forEach((value, key) => body[key] = value);
    XHR.send( JSON.stringify(body) );
  }