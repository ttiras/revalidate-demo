export default async function getData(){
    const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_ENDPOINT, {
        next: {revalidate: 10},
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
      
        body: JSON.stringify({
          query: `query getRevalidateDemoData {
            unsubers {
              id
              number
            }
          }`
        })
      })
    
      const result = await res.json();
      const data = result.data.unsubers

      return data
}