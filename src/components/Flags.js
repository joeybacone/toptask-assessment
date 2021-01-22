import React, { useState, useEffect} from 'react'
const Flags = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchItems = async () => {
    const result = await fetch(
      'https://restcountries.eu/rest/v2/all'
      )
      const items =  await result.json()
      setItems(items)
      console.log(items)

  }
  useEffect(() => {
    fetchItems()
  }, [])
  return (
    <>
    <section className="filter">
            <form className="form-control">
                <input type="search" name="search" id="search" 
                placeholder="Search Flag" />
            </form>
        </section>
          
      <section className="grid">
      {items.map((item) => {
      const {numericCode, name, flag} = item

      return(
       
        <article key={numericCode}>
          <div>
            <img src={flag} alt={name} />
            <div className='name'>
              <h3>{name}</h3>
            </div>
            
          </div>
        </article>
      )
    })}
      </section>
    </>
  )
}

export default Flags;
