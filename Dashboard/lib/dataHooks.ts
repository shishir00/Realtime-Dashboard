import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './firebase';
import { Item } from '@/types';

export function useRealtimeList(path: string): Item[] {
    const [data, setData] = useState<Item[]>([]);
  
    useEffect(() => {
      const dataRef = ref(database, path);
      const unsubscribe = onValue(dataRef, (snapshot) => {
        const val = snapshot.val();
        console.log(`[Firebase] ${path} data:`, val); 
        if (val) {
          const list = Object.entries(val).map(([id, item]) => ({
            id,
            ...(item as Omit<Item, 'id'>),
          }));
          setData(list);
        } else {
          setData([]);
        }
      });
  
      return () => unsubscribe();
    }, [path]);
  
    return data;
  }
