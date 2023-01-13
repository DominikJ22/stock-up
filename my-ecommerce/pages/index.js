import {useEffect} from "react";
import Product from "../components/Product";


export default function Home({products}) {
  const [phrase,setPhrase] = useState('');
  
  const categoriesNames = [...new Set(products.map(p => p.category))]

  return (
    <div className="p-5">
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
          <h2 className="text-2xl capitaliza">{categoryName}</h2>
          {productsInfo.filter(p => p.category === categoryName.map ( <Product>
            ))}
          </div>
        ))}
        <div className="py-4">
        </div>
      </div>
    </div>
  )
}
