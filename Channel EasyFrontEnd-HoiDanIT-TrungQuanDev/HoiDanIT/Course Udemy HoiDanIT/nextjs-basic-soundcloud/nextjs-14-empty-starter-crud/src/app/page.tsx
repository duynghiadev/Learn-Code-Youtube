'use client'
import { useFormState } from "react-dom"
import { handleLogin } from "./users/actions"
import { SubmitButton } from "./users/submit.button"
import { useEffect } from 'react';
import { message } from 'antd';

export default function Home() {

  const [state, formAction] = useFormState(handleLogin, {})

  useEffect(() => {
    if (state?.data?.access_token) {
      message.success("Login succeed !")
    } else {
      message.error(state?.message)
    }
  }, [state])

  return (
    <div style={{ marginLeft: "200px" }}>
      <h2>HTML Forms</h2>
      <form action={formAction}>
        <label >Username:</label>
        <br />
        <input type="text" name="username" />
        <br />
        <br />
        <label >Password:</label>
        <br />
        <input type="text" name="password" />
        <br /><br />
        {/* <input type="submit" value="Submit" /> */}
        <SubmitButton />
        <div>
          {JSON.stringify(state)}
        </div>
      </form>
    </div>
  )
}
