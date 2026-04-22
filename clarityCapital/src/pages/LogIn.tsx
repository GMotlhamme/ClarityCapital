import axios from "axios";
import ContentHeader from "../components/ContentHeader"

export default function Login(){
     async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        try {
            const response = await axios.post(`${import.meta.env.VITE_LOGIN_URL}`, {
                email,
                password
            });
            localStorage.setItem("token", response.data.userToken);
            window.location.href = "/PaymentGate";
        } catch (error) {
            console.error("Login failed:", error);
        }
    }
    return(
        <>
        <section>
            <ContentHeader/>
            <h3>Welcome Back.</h3>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="">Username</label>
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
                <button>Sign In</button>
            </form>

            <div>
                <button>Forgot Password</button>
            </div>
        </section>
        </>
    )
}