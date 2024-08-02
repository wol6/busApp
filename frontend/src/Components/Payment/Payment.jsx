import React from 'react'
import axios from 'axios'

// to load script 
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src

        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })

}


function Payment({ paidSuccessfully,totalPrice }) {

    // payment 
    async function displayRazorPay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("SDK failed to load")
            return
        }

        axios.post("http://localhost:8080/razorpay", { amount: totalPrice })
            .then(resp => {
                console.log(resp.data)


                const options = {
                    key: "rzp_test_PDlpOczaqePKxE",
                    amount: resp.data.amount,
                    currency: "INR",
                    name: "Bus Travels",
                    description: "Test Transaction",
                    image: "https://example.com/your_logo",
                    order_id: resp.data.id,
                    handler: function (response) {
                        // Handle the payment success
                        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                        verifyPayment(response);
                    },
                    callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
                    prefill: { 
                        name: "", //your customer's name
                    },

                }
                const paymentObject = new window.Razorpay(options)

                paymentObject.on('payment.failed', function (response) {
                    alert(`Payment failed! Error: ${response.error.description}`)
                });

                paymentObject.open()

            }).catch(err => console.log(err))


        const verifyPayment = async (response) => {
            axios.post("http://localhost:8080/verifypay", {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
            })
                .then(resp => {
                    const verifyResponse = resp.data.success
                    // console.log(verifyResponse)
                    if (verifyResponse) {
                        paidSuccessfully(resp.data.orderId)
                        // navigate('/')

                    }
                    else {
                        alert('Payment verification failed! Please contact support.')
                    }
                })
        }



    }

    return (
        <div>
            <button onClick={displayRazorPay}
                type="submit" className="py-1.5 px-8 me-2 mb-2 text-md font-medium text-blue-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Pay Now</button>
        </div>
    )
}

export default Payment