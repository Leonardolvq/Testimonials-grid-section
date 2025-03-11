import './assets/style/card.css'

export default function Card({ id, name, status, testimonialTitle, testimonialText, imgUrl }){
    return(
        <div className={`card ${id}`}>
            <div className="profile">
                <img src={imgUrl} alt={name} />
                <div className="profile-content">
                    <p className='name text-preset2'>{name}</p>
                    <p className='status text-preset4'>{status}</p>
                </div>
            </div>
            <div className="card-content">
                <p className='testimonial-title text-preset1'>{testimonialTitle}</p>
                <p className='testimonial-text text-preset3'>{testimonialText}</p>
            </div>
        </div>
    )
}