//importação do firebase e database
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../config/firebase";

export const handleLogin = async (email, senha, navigation) => {
    const queryUser = query(
        collection(database, 'usuarios'), 
        where('email', '==', email)
    )
    const querySp = await getDocs(queryUser)
    querySp.forEach(doc => {
        let usuario = doc.data()
        if (usuario.email && usuario.senha == senha) {
            navigation.navigate('Dashboard')
        }
    })
}

export const handleSignIn = async (dados) => {
    
}