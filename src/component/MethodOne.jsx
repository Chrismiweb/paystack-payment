import React, {useState} from 'react'
import PaystackPop from '@paystack/inline-js'

function MethodOne() {
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [isSubmit, SetIsSubmit ] = useState(false)

    async function fetchPaystack(e){
        const popup = new PaystackPop()
        e.preventDefault()
        SetIsSubmit(true)
        const baseUrl = 'https://api.paystack.co/transaction/initialize'
        const secret_key= 'sk_test_03f0d6cb246f3f1beee1fb28778ae7956c5dd31f'
    
        const response = await fetch(baseUrl,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${secret_key}`,
          },
          // mode:"no-cors",
          body: JSON.stringify({ email, amount})
        })
        const data = await response.json();
        if(response.ok){
          SetIsSubmit(false)
          popup.resumeTransaction(data.data.access_code);
          console.log(data)
          alert("submitted")
    
    
        }
    
      }
  return (
    <div className="App">
      <form onSubmit={fetchPaystack}>
        <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='input your email'/>
        <input type='text' onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder='input your amount'/>
        <button type='submit'>{isSubmit ? 'Submitting' : 'Submit'}</button>
      </form>
      
    </div>
  )
}

export default MethodOne