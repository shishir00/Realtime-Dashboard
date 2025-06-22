'use client';

import { useState } from 'react';
import ListDisplay from '@/components/ListDisplay';
import './dashboard.css';
import Navbar from '@/components/navbar';
import { useMarketOverviewFromHotList } from '@/lib/useMarketOverviewFromHotList';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'hotList' | 'newList'>('hotList');
  const marketOverview = useMarketOverviewFromHotList();

  const formatPrice = (price: number | string | undefined) => {
    if (!price) return '—';

    const cleaned = String(price).replace(/[₹,]/g, '').trim();

    const parsed = parseFloat(cleaned);
    if (isNaN(parsed)) return '—';

    return parsed.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 8,
    });
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="dashboard-header">
        <h1>Crypto Trading Dashboard</h1>
        <p className="dashboard-subtitle">
          Real-time market data and trading opportunities
        </p>
      </div>

      {/* Market Overview */}
      <div className="market-overview">
        <div className="overview-card">
          <h3>Bitcoin Price</h3>
          <div className="overview-value" style={{ color: '#f59e0b' }}>
            ₹ {formatPrice(marketOverview?.btcPrice)}
          </div>
        </div>
        <div className="overview-card">
          <h3>Ethereum Price</h3>
          <div className="overview-value" style={{ color: '#6366f1' }}>
            ₹ {formatPrice(marketOverview?.ethPrice)}
          </div>
        </div>
      </div>

      {/* Trading Lists */}
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={activeTab === 'hotList' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('hotList')}
          >
            🔥 Hot List
          </button>
          <button
            className={activeTab === 'newList' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('newList')}
          >
            ⭐ New List
          </button>
        </div>
      </div>

      <ListDisplay path={activeTab} />
    </div>
  );
}
