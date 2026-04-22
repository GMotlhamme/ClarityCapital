export default function Register(){
    return(
        <>
        <section>
            <h3>Own Your Tomorrow</h3>
            <h3>Capital Account.</h3>
            <form action="">
                <div>
                    <label htmlFor="">Username</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="">ID Number</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="">Account Number</label>
                    <input required type="text" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input required type="password" />
                </div>
                <button>Create Account</button>
            </form>
        </section>
        </>
    )
}