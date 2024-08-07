// src/firebase/firebaseUtils.js
import { collection, getDocs, query, where } from 'firebase/firestore';
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

export { fetchAllHackathons };
