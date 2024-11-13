import {doc, getDoc, setDoc} from "firebase/firestore"
import {db} from "./../config/FirebaseConfig"

const GetFavList=async(user)=>{
        const docSnap=await getDoc(doc(db,'UserFav',user?.primaryEmailAddres?.emailAddress));
        if(docSnap?.exists())
        {
            return docSnap.data();
        }
        else{
            await setDoc(doc(db,'UserFav',user?.primaryEmailAddres?.emailAddress),{
                email:user?.primaryEmailAddres?.emailAddress,
                favorites:[]
            })
        
        }
    }   

export default{
    GetFavList
}