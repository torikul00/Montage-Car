import { useEffect, useState } from "react"


const useToken = (user) => {
    const [token, setToken] = useState('')

    
    useEffect(() => {

        const email = user?.user?.email
        const displayName = user?.user.displayName
        const emailVerified = user?.user?.emailVerified
        const CurrentUser = { email}
        console.log(CurrentUser)
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
                    setToken(data.token)
            })
        }

    },[user])

    return [token]
}

export default useToken;