import React, { useState, useEffect } from 'react';
import { useRealtimeList } from '@/lib/dataHooks';
import { Item } from '@/types';
import './ListDisplay.css';

interface Props {
  path: string;
}

const ListDisplay: React.FC<Props> = ({ path }) => {
  const items: Item[] = useRealtimeList(path);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);
    return () => clearTimeout(timer);
  }, [path]);

  const getSymbolFromName = (name: string) => {
    const parts = name.split('/');
    return parts[0] || name;
  };

  const getFullName = (name: string) => {
    const symbolMap: { [key: string]: string } = {
      'BTC': 'Bitcoin',
      'ETH': 'Ethereum',
      'ADA': 'Cardano',
      'DOT': 'Polkadot',
      'SOL': 'Solana',
      'AVAX': 'Avalanche',
      'MATIC': 'Polygon',
      'LINK': 'Chainlink',
      'UNI': 'Uniswap',
      'ATOM': 'Cosmos'
    };
    const symbol = getSymbolFromName(name);
    return symbolMap[symbol] || symbol;
  };

  const formatPrice = (price: number | undefined) => {
    if (!price) return '—';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    }).format(price);
  };

  const renderChangeCell = (change: string | undefined) => {
    if (!change) return <span className="change-cell">—</span>;
    
    const isPositive = !change.startsWith('-');
    const className = isPositive ? 'change-cell change-positive' : 'change-cell change-negative';
    
    return (
      <span className={className}>
        {isPositive ? '+' : ''}{change}
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="list">
        <table>
          <thead>
            <tr>
              <th><span className="table-header-icon">📊</span>Trading Pairs</th>
              <th><span className="table-header-icon">💰</span>Last Price</th>
              <th><span className="table-header-icon">📈</span>24h Change</th>
              <th><span className="table-header-icon">⚡</span>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="loading-skeleton">
                <td>
                  <div className="crypto-pair">
                    <div style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#e2e8f0'
                    }}></div>
                    <div>
                      <div style={{
                        width: 80,
                        height: 16,
                        background: '#e2e8f0',
                        borderRadius: 4,
                        marginBottom: 4
                      }}></div>
                      <div style={{
                        width: 60,
                        height: 12,
                        background: '#f1f5f9',
                        borderRadius: 4
                      }}></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div style={{
                    width: 100,
                    height: 16,
                    background: '#e2e8f0',
                    borderRadius: 4
                  }}></div>
                </td>
                <td>
                  <div style={{
                    width: 80,
                    height: 16,
                    background: '#e2e8f0',
                    borderRadius: 4
                  }}></div>
                </td>
                <td>
                  <div style={{
                    width: 80,
                    height: 32,
                    background: '#e2e8f0',
                    borderRadius: 16
                  }}></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th><span className="table-header-icon">📊</span>Trading Pairs</th>
            <th><span className="table-header-icon">💰</span>Last Price</th>
            <th><span className="table-header-icon">📈</span>24h Change</th>
            <th><span className="table-header-icon">⚡</span>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={4} className="empty">
                <div className="empty-icon">📊</div>
                <div>No trading pairs available</div>
                <div style={{fontSize: '14px', marginTop: '8px', opacity: 0.7}}>
                  Check back later for updates
                </div>
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="crypto-pair">
                    {item.icon && (
                      <img
                        src={typeof item.icon === 'string' ? item.icon : `https://via.placeholder.com/32/3b82f6/ffffff?text=${getSymbolFromName(item.name).charAt(0)}`}
                        alt={item.name}
                        className="crypto-icon"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://via.placeholder.com/32/3b82f6/ffffff?text=${getSymbolFromName(item.name).charAt(0)}`;
                        }}
                      />
                    )}
                    <div className="crypto-name">
                      <div className="crypto-symbol">{item.name}</div>
                      <div className="crypto-fullname">{getFullName(item.name)}</div>
                    </div>
                  </div>
                </td>
                <td className="price-cell">
                  {formatPrice(item.price)}
                </td>
                <td>
                  {renderChangeCell(item.change)}
                </td>
                <td>
                  <button 
                    className="trade-btn"
                    onClick={() => {

                      console.log(`Trading ${item.name}`);
                    }}
                  >
                    Trade Now
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListDisplay;