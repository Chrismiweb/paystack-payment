import React, {useState} from 'react'
import { PaystackButton } from "react-paystack"

function MethodTwo() {
    const publicKey = 'pk_test_5aad446987ce9d4aacfcb16fffca4c67ffebb985';
    // const amount = 1000000 
    const [amount, SetAmount] = useState("")
    const [email, SetEmail] = useState("")
    const [phone, SetPhone] = useState("")
    const [name, SetName] = useState("")
    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
      }
  return (
    <div>
        <input type="email" id='email' placeholder='email' value={email} onChange={(e)=>SetEmail(e.target.value)} />
        <input type="text" id='name' placeholder='name' value={name} onChange={(e)=>SetName(e.target.value)} />
        <input type="text" id='phone' placeholder='phone' value={phone} onChange={(e)=>SetPhone(e.target.value)} />
        <input type="text" placeholder='amount' value={amount} onChange={(e)=>SetAmount(e.target.value)} />
        <PaystackButton {...componentProps} />
    </div>
  )
}

export default MethodTwo