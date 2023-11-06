import CheckloginContext from './CheckloginContext'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const CheckloginStates = (props) => {
    const [Data, setData] = useState({});
    const [IsLogin, setIsLogin] = useState(false);
    const [JwtToken, setJwtToken] = useState(null);
    const router = useRouter()

    return (
        <CheckloginContext.Provider value={{ Data, IsLogin, JwtToken }}>
            {props.children}
        </CheckloginContext.Provider>
    )

}
export default CheckloginStates;