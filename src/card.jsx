export default function Card({ id, name, status, testimonialTitle, testimonialText, imgUrl }){
    return(
        <div className={`card ${id}`}>
            <div className="profile">
                <img src={imgUrl} alt={name} />
                <div className="profile-content">
                    <p className='name'>{name}</p>
                    <p className='status'>{status}</p>
                </div>
                <div className="card-content">
                    <p>{testimonialTitle}</p>
                    <p>{testimonialText}</p>
                </div>
            </div>
        </div>
    )
}