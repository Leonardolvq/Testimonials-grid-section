import data from './assets/data/data.js'
import Card from './card.jsx'
import './assets/style/style.css'

function App() {

  return (
    <div className="container">
      {data.map(item => {
        return (
          <Card 
            key={item.id} 
            id={item.id}
            name={item.name}
            status={item.status}
            testimonialTitle={item['testimonial-title']}
            testimonialText={item['testimonial-text']}
            imgUrl={item.imgUrl}
          />
        );
        })}
    </div>
  )
}

export default App
