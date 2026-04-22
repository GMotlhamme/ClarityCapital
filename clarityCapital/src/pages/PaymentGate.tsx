export default function PaymentGate(){
    return(
        <>
        <section>
            <form action="">
                <div>
                    <label htmlFor="">Amount</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="">Currency</label>
                    <select required name="" id=""></select>
                </div>
                <div>
                    <label htmlFor="">Provider</label>
                    <input readOnly type="radio" />
                </div>
                <button>Continue</button>
            </form>

            <section>
            <h3>Finalization</h3>
            <form action="">
                <div>
                    <label htmlFor="">Payee Account Information</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="">Swift code</label>
                    <select required name="" id=""></select>
                </div>
                <button>Pay Now</button>
            </form>
            </section>

            
        </section>
        </>
    )
}