import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, ChevronDown, ChevronUp, Filter, Search, RefreshCw, User, Settings, History, BellRing, LogOut, MapPin, Calendar, DollarSign, FileText, Zap } from 'lucide-react';

const ResultsScreen = () => {
  // ユーザー情報（実際はAPIから取得）
  const userInfo = {
    name: '山田 太郎',
    department: '営業部',
    avatar: '/api/placeholder/32/32'
  };

  // ユーザーメニューの状態
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  // 検索フォーム表示の状態
  const [showSearchForm, setShowSearchForm] = useState(false);

  // 検索条件の状態（実際には前の画面から渡される）
  const [searchParams, setSearchParams] = useState({
    size: {
      type: 'round',
      diameter: '50',
      length: '100',
      minSize: '',
      maxSize: ''
    },
    material: 'SUS304',
    quantity: '11-100',
    processType: 'cutting',
    supplierArea: 'tokyo',
    weight: '5.5',
    productName: '',
    shape: ''
  });

  // 検索結果のサンプルデータ
  const [results, setResults] = useState([
    {
      id: 1,
      supplierName: '山田金属工業株式会社',
      matchDegree: 95,
      matchedOrders: 28,
      totalOrderAmount: 3450000,
      supplierWebsite: 'https://www.yamada-metal.co.jp',
      salesPerson: '田中 一郎',
      lastOrderDate: '2025-02-15',
      productImage: '/api/placeholder/150/150',
      expandedDetail: false,
      // マッチした発注履歴の追加
      matchedHistory: [
        {
          id: 101,
          orderDate: '2025-01-20',
          productName: 'フランジボルト',
          material: 'SUS304',
          size: { type: 'round', diameter: '48', length: '95' },
          processType: 'cutting',
          quantity: 50,
          amount: 125000
        },
        {
          id: 102,
          orderDate: '2024-11-05',
          productName: '六角ボルト',
          material: 'SUS304',
          size: { type: 'round', diameter: '52', length: '110' },
          processType: 'cutting',
          quantity: 100,
          amount: 230000
        },
        {
          id: 103,
          orderDate: '2024-08-15',
          productName: '特殊ナット',
          material: 'SUS304',
          size: { type: 'round', diameter: '45', length: '85' },
          processType: 'cutting',
          quantity: 75,
          amount: 180000
        }
      ]
    },
    {
      id: 2,
      supplierName: '東京精密加工センター',
      matchDegree: 87,
      matchedOrders: 15,
      totalOrderAmount: 2180000,
      supplierWebsite: 'https://www.tokyo-precision.co.jp',
      salesPerson: '鈴木 健太',
      lastOrderDate: '2025-01-30',
      productImage: '/api/placeholder/150/150',
      expandedDetail: false,
      matchedHistory: [
        {
          id: 201,
          orderDate: '2025-01-30',
          productName: '精密シャフト',
          material: 'SUS304',
          size: { type: 'round', diameter: '50', length: '120' },
          processType: 'cutting',
          quantity: 30,
          amount: 210000
        },
        {
          id: 202,
          orderDate: '2024-10-12',
          productName: '特殊スリーブ',
          material: 'SUS304',
          size: { type: 'round', diameter: '55', length: '90' },
          processType: 'cutting',
          quantity: 25,
          amount: 175000
        }
      ]
    },
    {
      id: 3,
      supplierName: '株式会社大阪メタル',
      matchDegree: 82,
      matchedOrders: 12,
      totalOrderAmount: 1980000,
      supplierWebsite: 'https://www.osaka-metal.co.jp',
      salesPerson: '佐藤 真一',
      lastOrderDate: '2025-01-22',
      productImage: '/api/placeholder/150/150',
      expandedDetail: false,
      matchedHistory: [
        {
          id: 301,
          orderDate: '2025-01-22',
          productName: '金属フレーム',
          material: 'SUS304',
          size: { type: 'round', diameter: '45', length: '110' },
          processType: 'cutting',
          quantity: 40,
          amount: 240000
        }
      ]
    },
    {
      id: 4,
      supplierName: '名古屋精密部品製作所',
      matchDegree: 78,
      matchedOrders: 9,
      totalOrderAmount: 1560000,
      supplierWebsite: 'https://www.nagoya-parts.co.jp',
      salesPerson: '伊藤 大輔',
      lastOrderDate: '2025-01-10',
      productImage: '/api/placeholder/150/150',
      expandedDetail: false,
      matchedHistory: [
        {
          id: 401,
          orderDate: '2025-01-10',
          productName: '精密部品A',
          material: 'SUS304',
          size: { type: 'round', diameter: '52', length: '105' },
          processType: 'cutting',
          quantity: 35,
          amount: 195000
        }
      ]
    },
    {
      id: 5,
      supplierName: '福岡金属加工株式会社',
      matchDegree: 73,
      matchedOrders: 7,
      totalOrderAmount: 920000,
      supplierWebsite: 'https://www.fukuoka-metal.co.jp',
      salesPerson: '高橋 誠',
      lastOrderDate: '2024-12-15',
      productImage: '/api/placeholder/150/150',
      expandedDetail: false,
      matchedHistory: [
        {
          id: 501,
          orderDate: '2024-12-15',
          productName: '金属パーツB',
          material: 'SUS304',
          size: { type: 'round', diameter: '48', length: '98' },
          processType: 'cutting',
          quantity: 20,
          amount: 140000
        }
      ]
    }
  ]);

  // 検索条件を更新
  const handleInputChange = (e, section, subsection = null) => {
    const { name, value } = e.target;
    
    if (subsection) {
      setSearchParams({
        ...searchParams,
        [section]: {
          ...searchParams[section],
          [subsection]: value
        }
      });
    } else {
      setSearchParams({
        ...searchParams,
        [name]: value
      });
    }
  };
  
  // 検索実行
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('検索条件:', searchParams);
    // 検索ロジックをここに実装（API呼び出しなど）
    // 実際には検索結果が更新される
  };

  // 形状タイプの切り替え
  const handleShapeTypeChange = (type) => {
    setSearchParams({
      ...searchParams,
      size: {
        ...searchParams.size,
        type
      }
    });
  };

  // 詳細表示の切り替え
  const toggleDetail = (id) => {
    setResults(
      results.map(result => {
        if (result.id === id) {
          return { ...result, expandedDetail: !result.expandedDetail };
        }
        return result;
      })
    );
  };

  // 並べ替えオプション
  const [sortOption, setSortOption] = useState('matchDegree');
  
  // 並べ替え処理
  const handleSort = (option) => {
    setSortOption(option);
    
    // 並べ替えロジック
    const sortedResults = [...results].sort((a, b) => {
      if (option === 'matchDegree') {
        return b.matchDegree - a.matchDegree;
      } else if (option === 'matchedOrders') {
        return b.matchedOrders - a.matchedOrders;
      } else if (option === 'totalOrderAmount') {
        return b.totalOrderAmount - a.totalOrderAmount;
      }
      return 0;
    });
    
    setResults(sortedResults);
  };

  // 数量/ロットのオプション
  const quantityOptions = [
    { value: '', label: '選択してください' },
    { value: '1-10', label: '1〜10' },
    { value: '11-100', label: '11〜100' },
    { value: '101-1000', label: '101〜1000' },
    { value: '1001+', label: '1000以上' }
  ];

  // 加工種類のオプション
  const processTypeOptions = [
    { value: '', label: '選択してください' },
    { value: 'cutting', label: '切削加工' },
    { value: 'grinding', label: '研削加工' },
    { value: 'laser', label: 'レーザー加工' },
    { value: 'bending', label: '曲げ加工' },
    { value: 'welding', label: '溶接' }
  ];

  // 都道府県のオプション（一部抜粋）
  const prefectureOptions = [
    { value: '', label: '選択してください' },
    { value: 'tokyo', label: '東京都' },
    { value: 'osaka', label: '大阪府' },
    { value: 'aichi', label: '愛知県' },
    { value: 'kanagawa', label: '神奈川県' },
    { value: 'saitama', label: '埼玉県' }
    // 他の都道府県も追加
  ];

  // 条件にマッチした表示
  const renderConditionMatch = () => {
    return (
      <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-base font-semibold text-blue-800">検索条件</h3>
          <button 
            onClick={() => setShowSearchForm(!showSearchForm)} 
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
          >
            <Filter size={14} />
            {showSearchForm ? '検索フォームを閉じる' : '検索条件を変更'}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {searchParams.size.type === 'round' && (
            <div className="flex items-center bg-white p-2 rounded shadow-sm">
              <div className="bg-blue-100 p-1 rounded mr-2">
                <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <span className="text-xs text-gray-500">サイズ</span>
                <div className="font-medium">φ{searchParams.size.diameter}×{searchParams.size.length}mm</div>
              </div>
            </div>
          )}
          <div className="flex items-center bg-white p-2 rounded shadow-sm">
            <div className="bg-purple-100 p-1 rounded mr-2">
              <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-gray-500">材質</span>
              <div className="font-medium">{searchParams.material}</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded shadow-sm">
            <div className="bg-purple-100 p-1 rounded mr-2">
              <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 16.2686C5.14625 15.1279 4 13.1901 4 11C4 7.68629 7.58172 5 12 5C16.4183 5 20 7.68629 20 11C20 13.1901 18.8537 15.1279 17 16.2686" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 13V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-gray-500">数量/ロット</span>
              <div className="font-medium">{searchParams.quantity}</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded shadow-sm">
            <div className="bg-purple-100 p-1 rounded mr-2">
              <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" />
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-gray-500">加工種類</span>
              <div className="font-medium">{searchParams.processType === 'cutting' ? '切削加工' : searchParams.processType}</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded shadow-sm">
            <div className="bg-purple-100 p-1 rounded mr-2">
              <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21C17 21 21 16 21 12C21 8 17 3 12 3C7 3 3 8 3 12C3 16 7 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="text-xs text-gray-500">仕入先エリア</span>
              <div className="font-medium">{searchParams.supplierArea === 'tokyo' ? '東京都' : searchParams.supplierArea}</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-2 rounded shadow-sm">
            <div className="bg-purple-100 p-1 rounded mr-2">
              <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V4C14.7614 4 17 6.23858 17 9V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V9C7 6.23858 9.23858 4 12 4Z" stroke="currentColor" strokeWidth="2" />
                <path d="M17 6L19 6C19.5523 6 20 6.44772 20 7V10C20 10.5523 19.5523 11 19 11H17" stroke="currentColor" strokeWidth="2" />
                <path d="M7 6L5 6C4.44772 6 4 6.44772 4 7V10C4 10.5523 4.44772 11 5 11H7" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span className="text-xs text-gray-500">重量</span>
              <div className="font-medium">{searchParams.weight}kg</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 検索フォーム
  const renderSearchForm = () => {
    if (!showSearchForm) return null;

    return (
      <div className="mb-6 bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <h3 className="font-medium">検索条件を変更</h3>
        </div>
        <form onSubmit={handleSearch} className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* サイズ */}
            <div className="md:col-span-3 border border-blue-100 rounded-lg p-4 bg-blue-50 bg-opacity-30">
              <h3 className="text-sm font-medium mb-2 text-blue-800 flex items-center">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor" />
                  <path d="M12 17L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M7 12L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                サイズ
              </h3>
              <div className="flex gap-4 mb-3">
                <button
                  type="button"
                  className={`px-3 py-1 rounded-lg text-sm flex items-center ${
                    searchParams.size.type === 'round' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => handleShapeTypeChange('round')}
                >
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  丸形状
                </button>
                <button
                  type="button"
                  className={`px-3 py-1 rounded-lg text-sm flex items-center ${
                    searchParams.size.type === 'rectangular' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => handleShapeTypeChange('rectangular')}
                >
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  角形状
                </button>
              </div>

              {searchParams.size.type === 'round' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      最外径 (mm)
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchParams.size.diameter}
                      onChange={(e) => handleInputChange(e, 'size', 'diameter')}
                    />
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      長さ (mm)
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchParams.size.length}
                      onChange={(e) => handleInputChange(e, 'size', 'length')}
                    />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      最小 (mm)
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchParams.size.minSize}
                      onChange={(e) => handleInputChange(e, 'size', 'minSize')}
                    />
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      最大 (mm)
                    </label>
                    <input
                      type="number"
                      className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchParams.size.maxSize}
                      onChange={(e) => handleInputChange(e, 'size', 'maxSize')}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 材質 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center">
                <svg className="w-4 h-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z" stroke="currentColor" strokeWidth="2" />
                </svg>
                材質
              </label>
              <input
                type="text"
                name="material"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="例: SUS304"
                value={searchParams.material}
                onChange={handleInputChange}
              />
            </div>

            {/* 数量/ロット */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center">
                <svg className="w-4 h-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16.2686C5.14625 15.1279 4 13.1901 4 11C4 7.68629 7.58172 5 12 5C16.4183 5 20 7.68629 20 11C20 13.1901 18.8537 15.1279 17 16.2686" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 13V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                数量/ロット
              </label>
              <select
                name="quantity"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchParams.quantity}
                onChange={handleInputChange}
              >
                {quantityOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 加工種類 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center">
                <svg className="w-4 h-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                </svg>
                加工種類
              </label>
              <select
                name="processType"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchParams.processType}
                onChange={handleInputChange}
              >
                {processTypeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 仕入先エリア */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center">
                <svg className="w-4 h-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21C17 21 21 16 21 12C21 8 17 3 12 3C7 3 3 8 3 12C3 16 7 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                仕入先エリア
              </label>
              <select
                name="supplierArea"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchParams.supplierArea}
                onChange={handleInputChange}
              >
                {prefectureOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 重量 */}
            <div className="bg-white border border-gray-200 rounded-lg p-3">
              <label className="block text-xs font-medium text-gray-700 mb-1 flex items-center">
                <svg className="w-4 h-4 mr-1 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V4C14.7614 4 17 6.23858 17 9V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V9C7 6.23858 9.23858 4 12 4Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 6L19 6C19.5523 6 20 6.44772 20 7V10C20 10.5523 19.5523 11 19 11H17" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 6L5 6C4.44772 6 4 6.44772 4 7V10C4 10.5523 4.44772 11 5 11H7" stroke="currentColor" strokeWidth="2" />
                </svg>
                重量 (kg)
              </label>
              <input
                type="number"
                name="weight"
                className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="例: 10.5"
                value={searchParams.weight}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg shadow-md text-sm"
            >
              <Search size={16} />
              再検索
            </button>
          </div>
        </form>
      </div>
    );
  };

  // 検索結果リスト
  const renderResultsList = () => {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#0065B3] flex items-center">
            <Filter className="mr-2" size={18} />
            検索結果: <span className="ml-1 text-[#1A1464]">{results.length}件</span>
          </h2>
          <div className="flex items-center gap-2 bg-white p-1 px-3 rounded-full border shadow-sm">
            <span className="text-sm text-gray-600">並べ替え:</span>
            <select
              className="border-none text-sm focus:outline-none focus:ring-0 bg-transparent"
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="matchDegree">マッチ度順</option>
              <option value="matchedOrders">発注実績順</option>
              <option value="totalOrderAmount">発注金額順</option>
            </select>
          </div>
        </div>

        {results.map(result => (
          <div key={result.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
            {/* 仕入先情報ヘッダー */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
              {/* 左側: 仕入先名とマッチ度 */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-blue-800">{result.supplierName}</h3>
                <div className="flex flex-col mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#1A1464] to-[#0065B3] h-2 rounded-full"
                        style={{ width: `${result.matchDegree}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-[#1A1464]">{result.matchDegree}%</span>
                  </div>
                  <span className="text-xs text-gray-500">マッチ度</span>
                </div>
              </div>
              
              {/* 中央: 発注実績情報 */}
              <div className="md:col-span-2 flex">
                <div className="flex-1 flex flex-col items-center justify-center bg-blue-50 rounded-lg p-2">
                  <span className="text-xl font-bold text-[#0065B3]">{result.matchedOrders}</span>
                  <span className="text-xs text-gray-600">発注実績</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center bg-purple-50 rounded-lg p-2 ml-2">
                  <span className="text-xl font-bold text-[#1A1464]">{(result.totalOrderAmount / 10000).toFixed(1)}万円</span>
                  <span className="text-xs text-gray-600">発注総額</span>
                </div>
              </div>
              
              {/* 右側: 詳細ボタン */}
              <div className="flex justify-end items-center">
                <button
                  onClick={() => toggleDetail(result.id)}
                  className="flex items-center gap-1 bg-white border border-[#0065B3] text-[#0065B3] hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  {result.expandedDetail ? (
                    <>
                      詳細を閉じる <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      詳細を表示 <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {/* 展開時の詳細情報 */}
            {result.expandedDetail && (
              <div className="border-t border-gray-200 bg-gray-50">
                {/* 仕入先基本情報 */}
                <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200">
                  {/* 基本情報 */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#0065B3] mb-2">仕入先情報</h4>
                    <p className="text-sm flex items-center gap-2">
                      <User size={14} className="text-[#0065B3]" />
                      <span className="text-gray-600">営業担当者:</span> 
                      <span className="font-medium">{result.salesPerson}</span>
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <Calendar size={14} className="text-[#0065B3]" />
                      <span className="text-gray-600">最新発注日:</span> 
                      <span className="font-medium">{result.lastOrderDate}</span>
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <ExternalLink size={14} className="text-[#0065B3]" />
                      <span className="text-gray-600">Webサイト:</span>
                      <a
                        href={result.supplierWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0065B3] hover:underline font-medium"
                      >
                        訪問する
                      </a>
                    </p>
                  </div>
                  
                  {/* 商品画像 */}
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-sm">
                      <p className="text-xs font-medium mb-2 text-center text-gray-600">商品サンプル</p>
                      <img
                        src={result.productImage}
                        alt="商品サンプル"
                        className="w-32 h-32 object-cover border rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
                {/* マッチした発注履歴 */}
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FileText size={16} className="mr-2 text-[#1A1464]" />
                    マッチした発注実績
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">発注日</th>
                          <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">品名</th>
                          <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">材質</th>
                          <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">サイズ</th>
                          <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">加工</th>
                          <th className="px-3 py-2 text-xs font-medium text-gray-500 text-right">数量</th>
                          <th className="px-3 py-2 text-xs font-medium text-gray-500 text-right">金額</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-sm">
                        {result.matchedHistory.map(history => (
                          <tr key={history.id} className="hover:bg-gray-50">
                            <td className="px-3 py-2">{history.orderDate}</td>
                            <td className="px-3 py-2 font-medium">{history.productName}</td>
                            <td className="px-3 py-2">{history.material}</td>
                            <td className="px-3 py-2">
                              {history.size.type === 'round' 
                                ? `φ${history.size.diameter}×${history.size.length}mm` 
                                : `${history.size.minSize}〜${history.size.maxSize}mm`}
                            </td>
                            <td className="px-3 py-2">{history.processType === 'cutting' ? '切削加工' : history.processType}</td>
                            <td className="px-3 py-2 text-right">{history.quantity}個</td>
                            <td className="px-3 py-2 text-right font-medium">{history.amount.toLocaleString()}円</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-500 italic">検索条件に近い発注実績を表示しています。実績によって具体的なサイズ等は異なります。</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* ロゴ部分 */}
          <div className="flex items-center space-x-2">
            <svg className="w-48" viewBox="0 0 200 50">
              <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold">
                <tspan fill="#1A1464">調達</tspan><tspan fill="#0065B3">NAVI</tspan>
              </text>
              
              {/* 虫眼鏡アイコン */}
              <g transform="translate(165, 25)">
                <circle cx="7" cy="7" r="7" fill="none" stroke="#1A1464" strokeWidth="2"></circle>
                <line x1="12" y1="12" x2="18" y2="18" stroke="#1A1464" strokeWidth="2" strokeLinecap="round"></line>
              </g>
            </svg>
          </div>

          {/* ユーザー情報とメニュー */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100">
              <History size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100">
              <BellRing size={20} />
            </button>
            <div className="relative">
              <button 
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <img 
                  src={userInfo.avatar} 
                  alt={userInfo.name}
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
                <span className="text-sm font-medium">{userInfo.name}</span>
                <ChevronDown size={16} />
              </button>
              
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-medium">{userInfo.name}</p>
                    <p className="text-xs text-gray-500">{userInfo.department}</p>
                  </div>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User size={16} className="mr-2" />
                    プロフィール
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings size={16} className="mr-2" />
                    設定
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <History size={16} className="mr-2" />
                    検索履歴
                  </a>
                  <div className="border-t">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      <LogOut size={16} className="mr-2" />
                      ログアウト
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            className="flex items-center text-gray-600 hover:text-blue-600"
            onClick={() => console.log('検索画面に戻る')}
          >
            <ArrowLeft size={20} />
            <span className="ml-1">検索画面に戻る</span>
          </button>
          
          <div className="bg-white px-3 py-1 rounded-full border shadow-sm text-sm text-gray-500">
            検索日時: 2025年3月7日 14:30
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#1A1464] to-[#0065B3] p-4 text-white">
            <h1 className="text-xl font-bold flex items-center">
              <Zap className="mr-2" size={24} />
              仕入先検索結果
            </h1>
          </div>
          
          <div className="p-6">
            {renderConditionMatch()}
            {renderSearchForm()}
            {renderResultsList()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResultsScreen;
