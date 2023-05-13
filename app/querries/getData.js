export default async function getData(){
    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_ENDPOINT, {
        next: {revalidate: 10},
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
      
        body: JSON.stringify({
          query: `query GetProducts {
            products(where: {id: {_eq: 6}}) {
              id
              name
              dates {
                id
                seats
              }
            }
          }`
        })
      })
    
      const result = await res.json();
      const data = result.data

      return data
}