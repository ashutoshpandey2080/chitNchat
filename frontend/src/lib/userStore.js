import { create } from "zustand";
import { doc , getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const useUserStore = create((set) => ({
    currentUser: 0,
    isLoading: true,
    fetchUserInfo : async (uid) => {
        if(!uid){
            return set( { currentUser: null, isLoading: false } );
        }
        try {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                return set({ currentUser: docSnap.data(), isLoading: false });
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                return set({ currentUser: null, isLoading: false });
            }
        } catch (error) {
            console.log(error.message);
            return set({ currentUser: null, isLoading: false });
        }
    }
}));
