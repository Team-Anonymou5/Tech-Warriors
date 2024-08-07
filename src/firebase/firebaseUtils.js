// src/firebase/firebaseUtils.js
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { db } from './config';

const fetchAllHackathons = async (category) => {
  try {
    const hackathonCollection = collection(db, 'hackathons');
    const q = query(hackathonCollection, where('category', '==', category));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    return [];
  }
};

const addSubscription = async (email) => {
  try {
    const subscriptionCollection = collection(db, 'subscriptions');
    await addDoc(subscriptionCollection, { email });
  } catch (error) {
    console.error('Error adding subscription:', error);
  }
};

export { fetchAllHackathons, addSubscription };
