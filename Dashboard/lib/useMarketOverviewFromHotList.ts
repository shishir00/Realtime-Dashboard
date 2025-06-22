import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from './firebase';

interface MarketOverview {
  btcPrice: string;
  ethPrice: string;
}

export const useMarketOverviewFromHotList = (): MarketOverview | null => {
  const [data, setData] = useState<MarketOverview | null>(null);

  useEffect(() => {
    const db = getDatabase(app);
    const hotListRef = ref(db, 'hotList');

    onValue(hotListRef, (snapshot) => {
      const hotList = snapshot.val();
      if (hotList) {
        let btcPrice = '';
        let ethPrice = '';

        Object.values(hotList).forEach((item: any) => {
          if (item.name?.includes('BTC')) btcPrice = `₹${item.price?.toLocaleString()}`;
          if (item.name?.includes('ETH')) ethPrice = `₹${item.price?.toLocaleString()}`;
        });

        setData({ btcPrice, ethPrice });
      }
    });
  }, []);

  return data;
};
