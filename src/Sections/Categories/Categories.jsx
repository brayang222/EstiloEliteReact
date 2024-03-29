import CategoriesCard from '../../components/CategoriesCard'
import { categoryData } from '../../constants'
import './Categories.css'

const Categories = () => {
  return (
    <section id="categories">
      <div className="title">
        <h2>Categorias</h2>
      </div>
      <div className="categories-container container">
        {
          categoryData.map((category) => (
            <CategoriesCard key={category.imgURL} {...category}/>
          ))
        }
      </div>
    </section>
  )
}

export default Categories