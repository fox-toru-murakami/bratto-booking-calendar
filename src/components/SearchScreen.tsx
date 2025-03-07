import React, { useState } from 'react';
import { Search, MapPin, Filter, RefreshCw, User, Settings, History, BellRing, LogOut, ChevronDown } from 'lucide-react';

const SearchScreen = () => {
  // ユーザー情報（実際はAPIから取得）
  const userInfo = {
    name: '山田 太郎',
    department: '営業部',
    avatar: '/api/placeholder/32/32'
  };

  // 検索条件の状態管理
  const [searchParams, setSearchParams] = useState({
    size: {
      type: 'round',
      diameter: '',
      length: '',
      minSize: '',
      maxSize: ''
    },
    material: '',
    quantity: '',
    processType: '',
    supplierArea: '',
    weight: '',
    productName: '',
    shape: ''
  });

  // 自由検索テキスト
  const [freeSearchText, setFreeSearchText] = useState('');

  // 検索タブ（条件検索か自由検索か）
  const [searchTab, setSearchTab] = useState('condition'); // 'condition' or 'free'

  // ユーザーメニューの状態
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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

  // フォーム入力の処理
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

  // フリー検索実行
  const handleFreeSearch = (e) => {
    e.preventDefault();
    console.log('自由検索テキスト:', freeSearchText);
    // RAG検索のロジックをここに実装（API呼び出しなど）
  };
  
  // 検索実行
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchTab === 'free') {
      handleFreeSearch(e);
      return;
    }
    
    console.log('条件検索:', searchParams);
    // 検索ロジックをここに実装（API呼び出しなど）
  };

  // 検索条件リセット
  const handleReset = () => {
    setSearchParams({
      size: {
        type: 'round',
        diameter: '',
        length: '',
        minSize: '',
        maxSize: ''
      },
      material: '',
      quantity: '',
      processType: '',
      supplierArea: '',
      weight: '',
      productName: '',
      shape: ''
    });
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

  // 形状のオプション
  const shapeOptions = [
    { value: '', label: '選択してください' },
    { value: 'round', label: '丸形状' },
    { value: 'rectangular', label: '角形状' },
    { value: 'complex', label: '複雑形状' }
  ];

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
        {/* 検索フォームカード */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-[#1A1464] to-[#0065B3] rounded-lg shadow-lg p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">最適な仕入先を素早く検索</h1>
            <p className="opacity-90">過去の発注履歴から最適な仕入先をご提案します。サイズや材質など、必要な条件を入力してください。</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* 検索タブ */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 px-4 font-medium text-center transition-all ${
                searchTab === 'condition'
                  ? 'text-[#0065B3] border-b-2 border-[#0065B3] bg-blue-50'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
              onClick={() => setSearchTab('condition')}
            >
              条件検索
            </button>
            <button
              className={`flex-1 py-3 px-4 font-medium text-center transition-all ${
                searchTab === 'free'
                  ? 'text-[#1A1464] border-b-2 border-[#1A1464] bg-purple-50'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
              onClick={() => setSearchTab('free')}
            >
              自由問い合わせ
            </button>
          </div>

          <form onSubmit={handleSearch} className="p-6">
            {searchTab === 'condition' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* サイズ */}
                <div className="md:col-span-2 border border-blue-100 rounded-lg p-5 bg-blue-50 bg-opacity-30">
                  <h3 className="text-lg font-medium mb-3 text-[#0065B3] flex items-center">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"></path>
                      <path d="M12 17L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                      <path d="M7 12L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                    サイズ
                  </h3>
                  <div className="flex gap-4 mb-3">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg flex items-center ${
                        searchParams.size.type === 'round' 
                          ? 'bg-[#0065B3] text-white shadow-md' 
                          : 'bg-white text-gray-700 border border-gray-300'
                      }`}
                      onClick={() => handleShapeTypeChange('round')}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"></circle>
                      </svg>
                      丸形状
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg flex items-center ${
                        searchParams.size.type === 'rectangular' 
                          ? 'bg-[#0065B3] text-white shadow-md' 
                          : 'bg-white text-gray-700 border border-gray-300'
                      }`}
                      onClick={() => handleShapeTypeChange('rectangular')}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"></rect>
                      </svg>
                      角形状
                    </button>
                  </div>

                  {searchParams.size.type === 'round' ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          最外径 (mm)
                        </label>
                        <input
                          type="number"
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065B3]"
                          value={searchParams.size.diameter}
                          onChange={(e) => handleInputChange(e, 'size', 'diameter')}
                        />
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          長さ (mm)
                        </label>
                        <input
                          type="number"
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065B3]"
                          value={searchParams.size.length}
                          onChange={(e) => handleInputChange(e, 'size', 'length')}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          最小 (mm)
                        </label>
                        <input
                          type="number"
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065B3]"
                          value={searchParams.size.minSize}
                          onChange={(e) => handleInputChange(e, 'size', 'minSize')}
                        />
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          最大 (mm)
                        </label>
                        <input
                          type="number"
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065B3]"
                          value={searchParams.size.maxSize}
                          onChange={(e) => handleInputChange(e, 'size', 'maxSize')}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 材質 */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1A1464]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 17V7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                    材質
                  </label>
                  <input
                    type="text"
                    name="material"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
                    placeholder="例: SUS304"
                    value={searchParams.material}
                    onChange={handleInputChange}
                  />
                </div>

                {/* 数量/ロット */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1A1464]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 16.2686C5.14625 15.1279 4 13.1901 4 11C4 7.68629 7.58172 5 12 5C16.4183 5 20 7.68629 20 11C20 13.1901 18.8537 15.1279 17 16.2686" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                      <path d="M12 13V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                    数量/ロット
                  </label>
                  <select
                    name="quantity"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
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
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1A1464]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2"></path>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                    加工種類
                  </label>
                  <select
                    name="processType"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
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
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1A1464]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M12 21C17 21 21 16 21 12C21 8 17 3 12 3C7 3 3 8 3 12C3 16 7 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    仕入先エリア
                  </label>
                  <select
                    name="supplierArea"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
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
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1A1464]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V4C14.7614 4 17 6.23858 17 9V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V9C7 6.23858 9.23858 4 12 4Z" stroke="currentColor" strokeWidth="2"></path>
                      <path d="M17 6L19 6C19.5523 6 20 6.44772 20 7V10C20 10.5523 19.5523 11 19 11H17" stroke="currentColor" strokeWidth="2"></path>
                      <path d="M7 6L5 6C4.44772 6 4 6.44772 4 7V10C4 10.5523 4.44772 11 5 11H7" stroke="currentColor" strokeWidth="2"></path>
                    </svg>
                    重量 (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
                    placeholder="例: 10.5"
                    value={searchParams.weight}
                    onChange={handleInputChange}
                  />
                </div>

                {/* 品名 */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1A1464]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                    品名
                  </label>
                  <input
                    type="text"
                    name="productName"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
                    placeholder="例: フランジ"
                    value={searchParams.productName}
                    onChange={handleInputChange}
                  />
                </div>

                {/* 形状 */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1A1464]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 5.11182C4 4.49772 4.49772 4 5.11182 4H18.8882C19.5023 4 20 4.49772 20 5.11182V18.8882C20 19.5023 19.5023 20 18.8882 20H5.11182C4.49772 20 4 19.5023 4 18.8882V5.11182Z" stroke="currentColor" strokeWidth="2"></path>
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"></circle>
                    </svg>
                    形状
                  </label>
                  <select
                    name="shape"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
                    value={searchParams.shape}
                    onChange={handleInputChange}
                  >
                    {shapeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#1A1464] to-[#0065B3] hover:from-[#15104F] hover:to-[#00569A] text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <Search size={20} />
                    検索する
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-2 bg-white text-gray-700 border border-gray-300 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-200"
                  >
                    <RefreshCw size={20} />
                    リセット
                  </button>
                </div>
              </div>
            ) : (
              /* 自由検索フォーム */
              <div className="space-y-6">
                <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg">
                  <h3 className="text-md font-medium mb-3 text-[#1A1464]">自由な文章で仕入先を検索</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    探したい条件を自由に入力してください。過去の案件データから関連性の高い仕入先を検索します。
                  </p>
                  <div className="relative">
                    <textarea
                      className="w-full h-32 p-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A1464]"
                      placeholder="例: 東京都内で、SUS304の小型金属部品の切削加工ができる仕入先を探しています。納期は2週間以内で対応可能なところ。"
                      value={freeSearchText}
                      onChange={(e) => setFreeSearchText(e.target.value)}
                    ></textarea>
                    <div className="absolute bottom-3 right-3 text-gray-400">
                      <Search size={20} />
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    <p>入力例:</p>
                    <ul className="list-disc list-inside mt-1 ml-2 space-y-1">
                      <li>大阪で精密プレス加工を得意とする会社を探しています</li>
                      <li>アルミニウム合金の旋盤加工で、小ロット対応可能な仕入先</li>
                      <li>5mm以下の薄板の溶接が得意で、価格が安い仕入先</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#1A1464] to-[#0065B3] hover:from-[#15104F] hover:to-[#00569A] text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <Search size={20} />
                    検索する
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default SearchScreen;