"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email) setEmailError("Email is required");
        if(!password) setPasswordError("Password is required");

        // if(emailError || passwordError) return;

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })
            console.log(res);

            if(!res || res.error) {
                console.log("Error");
                return;
            }
            
            const form = e.target;
            form.reset();
            router.push("/");
        } catch (error) {
            console.log(error);   
        }
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                className="signin-form"
            >
                <div className="flex flex-col gap-3 justify-center justify-items-center">
                    <h2 className="text-3xl text-center font-semibold mb-7">Sign In</h2>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <input type="submit" value="Submit" className="form-btn" />
                </div>
            </form>
        </div>
    )
}