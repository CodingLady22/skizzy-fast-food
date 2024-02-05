import React from 'react'

function Contact() {
  return (
    <div className='container-fluid bg-secondary text-white py-5 fs-4' id='contact'>
        <div className='container'>
            <h1 className='text-center display-2 mb-5'>CONTACT</h1>
            <p>Find us at some adderess at some place or call us at 3232414-777890</p>
            <p>
                <span className='badge bg-dark'>FYI</span>
                We offer full-service catering for any events, large or small. We understand your needs and we will cater the food to satisfy the biggest criteria of them all, both look and taste. 
            </p>
            <p><b>Reserve</b> a table, ask for todays's special or just send us a message:</p>
            {/* Messages from form can be saved in database for about 3 days OR just for the session */}
            <form action="" target='_blank'>
                <div className='mb-3'>
                    <input type="text" className='form-control extra-large' placeholder='Name' name='name' required />
                </div>
                <div className='mb-3'>
                    <input type="number" className='form-control extra-large' placeholder='How many people' name='people' required />
                </div>
                <div className='mb-3'>
                    <input type="datetime-local" className='form-control extra-large' placeholder='Date and Time' name='date' value={"date.now()"} required />
                </div>
                <div className='mb-3'>
                    <input type="text" className='form-control extra-large' placeholder='Message / Special Requirements' name='message' required />
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-light btn-lg btn-block fs-2'>SEND MESSAGE</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact