import { useEffect, useState } from "react"


const useToken = (user) => {
    const [token, setToken] = useState('')


    useEffect(() => {

        const email = user?.user?.email
        const userName = user?.user.displayName
        const CurrentUser = {email:email}
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(CurrentUser)
            })
            .then(res => res.json())
                .then(data => {
                    localStorage.setItem('token', data.token)
                    console.log(data)
                    setToken(data.token)
            })
        }

    },[user])

    return [token]
}

export default useToken;