import React, { useState, useEffect } from 'react';

const BrattoPropertySystem = () => {
  // Sample data based on the screenshots
  const areas = [
    "江坂エリア", "梅田エリア", "なんばエリア", "京橋エリア", "天王寺エリア", "新大阪エリア", "名古屋エリア", "京都エリア"
  ];
  
  // Generate more properties for each area
  const generateProperties = () => {
    const baseProperties = [
      { 
        id: '202', 
        name: 'BraTTo名古屋Ⅱ', 
        area: '名古屋エリア', 
        rooms: ['202'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1K',
        floor: '2階',
        direction: '東'
      },
      { 
        id: '301', 
        name: 'BraTTo京都河原町', 
        area: '京都エリア', 
        rooms: ['301'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1LDK',
        floor: '3階',
        direction: '南'
      },
      { 
        id: '305', 
        name: 'BraTTo大阪新町', 
        area: 'なんばエリア', 
        rooms: ['305'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1K',
        floor: '3階',
        direction: '西'
      },
      { 
        id: '306', 
        name: 'BraTTo島丸施設駅前', 
        area: '京橋エリア', 
        rooms: ['306'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1LDK',
        floor: '3階',
        direction: '南'
      },
      { 
        id: '403', 
        name: 'BraTTo京都ステーション', 
        area: '京都エリア', 
        rooms: ['403'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1K',
        floor: '4階',
        direction: '東'
      },
      { 
        id: '4004', 
        name: 'BraTTo梅田新通', 
        area: '梅田エリア', 
        rooms: ['4004'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1DK',
        floor: '4階',
        direction: '南'
      },
      { 
        id: '412', 
        name: 'BraTTo梅田山里', 
        area: '梅田エリア', 
        rooms: ['412'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1K',
        floor: '4階',
        direction: '西'
      },
      { 
        id: '601', 
        name: 'BraTTo新梅田2', 
        area: '梅田エリア', 
        rooms: ['601'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1LDK',
        floor: '6階',
        direction: '南東'
      },
      { 
        id: '904', 
        name: 'BraTTo名古屋駅前', 
        area: '名古屋エリア', 
        rooms: ['904'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1K',
        floor: '9階',
        direction: '南'
      },
      { 
        id: '906', 
        name: 'BraTTo心斎橋アネックス', 
        area: 'なんばエリア', 
        rooms: ['906'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1DK',
        floor: '9階',
        direction: '東'
      },
      { 
        id: '1001', 
        name: 'BraTTo天六駅前', 
        area: '天王寺エリア', 
        rooms: ['1001'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1K',
        floor: '10階',
        direction: '南'
      },
      { 
        id: '1002', 
        name: 'BraTTo京都新京極', 
        area: '京都エリア', 
        rooms: ['1002'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1LDK',
        floor: '10階',
        direction: '東'
      },
      { 
        id: '1005', 
        name: 'BraTTo京都駅前', 
        area: '京都エリア', 
        rooms: ['1005'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1DK',
        floor: '10階',
        direction: '西'
      },
      { 
        id: '1009', 
        name: 'BraTTo新大阪', 
        area: '新大阪エリア', 
        rooms: ['1009'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1LDK',
        floor: '10階',
        direction: '南'
      },
      { 
        id: '1101', 
        name: 'BraTTo千種バルテラス', 
        area: '名古屋エリア', 
        rooms: ['1101'],
        contractType: '定期借家契約',
        transactionType: '仲介',
        propertyType: 'マンション',
        image: '/api/placeholder/400/300',
        layout: '1K',
        floor: '11階',
        direction: '東'
      }
    ];
    
    // Generate additional properties
    const additionalProperties = [];
    for (let i = 0; i < 25; i++) {
      const baseProperty = baseProperties[i % baseProperties.length];
      const newId = (parseInt(baseProperty.id) + (i * 3) + 100).toString();
      
      additionalProperties.push({
        ...baseProperty,
        id: newId,
        name: `${baseProperty.name}-${i + 1}`,
      });
    }
    
    return [...baseProperties, ...additionalProperties];
  };
  
  const properties = generateProperties();

  // Sample reservation data (for demonstration)
  const [reservations, setReservations] = useState(() => {
    const baseReservations = [
      // Reservations - using lighter pink color rgb(255, 165, 165)
      { id: 1, propertyId: '301', startDate: '2025-04-01', endDate: '2025-04-08', type: 'reservation' },
      { id: 2, propertyId: '305', startDate: '2025-04-03', endDate: '2025-04-12', type: 'reservation' },
      { id: 3, propertyId: '4004', startDate: '2025-04-10', endDate: '2025-04-19', type: 'reservation' },
      { id: 5, propertyId: '904', startDate: '2025-04-22', endDate: '2025-04-29', type: 'reservation' },
      { id: 8, propertyId: '202', startDate: '2025-04-02', endDate: '2025-04-05', type: 'reservation' },
      { id: 9, propertyId: '202', startDate: '2025-04-12', endDate: '2025-04-17', type: 'reservation' },
      { id: 10, propertyId: '202', startDate: '2025-04-24', endDate: '2025-04-30', type: 'reservation' },
      { id: 11, propertyId: '306', startDate: '2025-04-06', endDate: '2025-04-15', type: 'reservation' },
      { id: 12, propertyId: '403', startDate: '2025-04-01', endDate: '2025-04-09', type: 'reservation' },
      { id: 13, propertyId: '403', startDate: '2025-04-19', endDate: '2025-04-23', type: 'reservation' },
      { id: 14, propertyId: '412', startDate: '2025-04-03', endDate: '2025-04-11', type: 'reservation' },
      { id: 15, propertyId: '601', startDate: '2025-04-06', endDate: '2025-04-09', type: 'reservation' },
      { id: 16, propertyId: '601', startDate: '2025-04-21', endDate: '2025-04-29', type: 'reservation' },
      { id: 17, propertyId: '906', startDate: '2025-04-08', endDate: '2025-04-14', type: 'reservation' },
      { id: 18, propertyId: '1001', startDate: '2025-04-03', endDate: '2025-04-07', type: 'reservation' },
      { id: 19, propertyId: '1001', startDate: '2025-04-17', endDate: '2025-04-25', type: 'reservation' },
      { id: 20, propertyId: '1005', startDate: '2025-04-09', endDate: '2025-04-15', type: 'reservation' },
      { id: 21, propertyId: '1005', startDate: '2025-04-23', endDate: '2025-04-29', type: 'reservation' },
      { id: 22, propertyId: '1009', startDate: '2025-04-04', endDate: '2025-04-10', type: 'reservation' },
      { id: 23, propertyId: '1009', startDate: '2025-04-21', endDate: '2025-04-29', type: 'reservation' },
      
      // Cleanings (single day events) - More realistic timing
      // Some before reservation (day before)
      { id: 4, propertyId: '601', startDate: '2025-04-05', endDate: '2025-04-05', type: 'cleaning' }, // Before reservation on 4/6
      { id: 24, propertyId: '202', startDate: '2025-04-01', endDate: '2025-04-01', type: 'cleaning' }, // Before reservation on 4/2
      { id: 33, propertyId: '906', startDate: '2025-04-07', endDate: '2025-04-07', type: 'cleaning' }, // Before reservation on 4/8
      { id: 34, propertyId: '1001', startDate: '2025-04-02', endDate: '2025-04-02', type: 'cleaning' }, // Before reservation on 4/3
      
      // Some cleanings 2-3 days before reservation
      { id: 7, propertyId: '1009', startDate: '2025-04-01', endDate: '2025-04-01', type: 'cleaning' }, // 3 days before reservation on 4/4
      { id: 25, propertyId: '202', startDate: '2025-04-09', endDate: '2025-04-09', type: 'cleaning' }, // 3 days before reservation on 4/12
      { id: 26, propertyId: '202', startDate: '2025-04-21', endDate: '2025-04-21', type: 'cleaning' }, // 3 days before reservation on 4/24
      { id: 28, propertyId: '306', startDate: '2025-04-03', endDate: '2025-04-03', type: 'cleaning' }, // 3 days before reservation on 4/6
      { id: 36, propertyId: '1005', startDate: '2025-04-06', endDate: '2025-04-06', type: 'cleaning' }, // 3 days before reservation on 4/9
      
      // Some cleanings after reservations end (next day)
      { id: 38, propertyId: '301', startDate: '2025-04-09', endDate: '2025-04-09', type: 'cleaning' }, // After reservation ends on 4/8
      { id: 43, propertyId: '403', startDate: '2025-04-10', endDate: '2025-04-10', type: 'cleaning' }, // After reservation ends on 4/9
      { id: 46, propertyId: '601', startDate: '2025-04-10', endDate: '2025-04-10', type: 'cleaning' }, // After reservation ends on 4/9
      
      // Some cleanings several days after reservations end
      { id: 39, propertyId: '305', startDate: '2025-04-15', endDate: '2025-04-15', type: 'cleaning' }, // 3 days after reservation ends on 4/12
      { id: 40, propertyId: '4004', startDate: '2025-04-23', endDate: '2025-04-23', type: 'cleaning' }, // 4 days after reservation ends on 4/19
      { id: 42, propertyId: '306', startDate: '2025-04-19', endDate: '2025-04-19', type: 'cleaning' }, // 4 days after reservation ends on 4/15
      { id: 45, propertyId: '412', startDate: '2025-04-15', endDate: '2025-04-15', type: 'cleaning' }, // 4 days after reservation ends on 4/11
      { id: 48, propertyId: '906', startDate: '2025-04-18', endDate: '2025-04-18', type: 'cleaning' }, // 4 days after reservation ends on 4/14
      { id: 49, propertyId: '1001', startDate: '2025-04-11', endDate: '2025-04-11', type: 'cleaning' }, // 4 days after reservation ends on 4/7
      { id: 51, propertyId: '1005', startDate: '2025-04-19', endDate: '2025-04-19', type: 'cleaning' }, // 4 days after reservation ends on 4/15
      { id: 53, propertyId: '1009', startDate: '2025-04-15', endDate: '2025-04-15', type: 'cleaning' }, // 5 days after reservation ends on 4/10
      
      // Some cleanings scheduled far in advance for end-of-month reservations
      { id: 32, propertyId: '904', startDate: '2025-04-20', endDate: '2025-04-20', type: 'cleaning' }, // Before reservation on 4/22
      { id: 35, propertyId: '1001', startDate: '2025-04-16', endDate: '2025-04-16', type: 'cleaning' }, // Before reservation on 4/17
      { id: 37, propertyId: '1005', startDate: '2025-04-21', endDate: '2025-04-21', type: 'cleaning' }, // Before reservation on 4/23
      
      // End of month cleanings for future use
      { id: 41, propertyId: '904', startDate: '2025-04-30', endDate: '2025-04-30', type: 'cleaning' }, // Last day of month
      { id: 47, propertyId: '601', startDate: '2025-04-30', endDate: '2025-04-30', type: 'cleaning' }, // Last day of month
      { id: 52, propertyId: '1005', startDate: '2025-04-30', endDate: '2025-04-30', type: 'cleaning' }, // Last day of month
      
      // Room Blocks
      { id: 6, propertyId: '1002', startDate: '2025-04-15', endDate: '2025-04-30', type: 'roomBlock' },
      { id: 27, propertyId: '412', startDate: '2025-04-17', endDate: '2025-04-30', type: 'roomBlock' },
      { id: 55, propertyId: '906', startDate: '2025-04-20', endDate: '2025-04-30', type: 'roomBlock' },
      { id: 56, propertyId: '1101', startDate: '2025-04-07', endDate: '2025-04-18', type: 'roomBlock' },
    ];
    
    // Generate additional reservations for additional properties
    let reservationId = 100;
    const additionalReservations = [];
    
    properties.forEach(property => {
      if (parseInt(property.id) > 1101) {
        // Add a reservation from beginning to mid-month
        if (Math.random() > 0.3) {
          const startDay = Math.floor(Math.random() * 5) + 1;
          const endDay = Math.floor(Math.random() * 7) + startDay + 3;
          
          additionalReservations.push({
            id: reservationId++,
            propertyId: property.id,
            startDate: `2025-04-${String(startDay).padStart(2, '0')}`,
            endDate: `2025-04-${String(endDay).padStart(2, '0')}`,
            type: 'reservation'
          });
          
          // Add cleaning before this reservation
          additionalReservations.push({
            id: reservationId++,
            propertyId: property.id,
            startDate: `2025-04-${String(startDay - 1).padStart(2, '0')}`,
            endDate: `2025-04-${String(startDay - 1).padStart(2, '0')}`,
            type: 'cleaning'
          });
          
          // Add cleaning after this reservation
          additionalReservations.push({
            id: reservationId++,
            propertyId: property.id,
            startDate: `2025-04-${String(endDay + 1).padStart(2, '0')}`,
            endDate: `2025-04-${String(endDay + 1).padStart(2, '0')}`,
            type: 'cleaning'
          });
        }
        
        // Add a reservation from mid to end of month
        if (Math.random() > 0.4) {
          const startDay = Math.floor(Math.random() * 5) + 15;
          const endDay = Math.floor(Math.random() * 9) + startDay + 2;
          if (endDay <= 30) {
            additionalReservations.push({
              id: reservationId++,
              propertyId: property.id,
              startDate: `2025-04-${String(startDay).padStart(2, '0')}`,
              endDate: `2025-04-${String(endDay).padStart(2, '0')}`,
              type: 'reservation'
            });
            
            // Add cleaning before this reservation
            additionalReservations.push({
              id: reservationId++,
              propertyId: property.id,
              startDate: `2025-04-${String(startDay - 1).padStart(2, '0')}`,
              endDate: `2025-04-${String(startDay - 1).padStart(2, '0')}`,
              type: 'cleaning'
            });
            
            if (endDay < 30) {
              // Add cleaning after this reservation
              additionalReservations.push({
                id: reservationId++,
                propertyId: property.id,
                startDate: `2025-04-${String(endDay + 1).padStart(2, '0')}`,
                endDate: `2025-04-${String(endDay + 1).padStart(2, '0')}`,
                type: 'cleaning'
              });
            }
          }
        }
        
        // Occasionally add room block
        if (Math.random() > 0.8) {
          const startDay = Math.floor(Math.random() * 10) + 10;
          
          additionalReservations.push({
            id: reservationId++,
            propertyId: property.id,
            startDate: `2025-04-${String(startDay).padStart(2, '0')}`,
            endDate: '2025-04-30',
            type: 'roomBlock'
          });
        }
      }
    });
    
    return [...baseReservations, ...additionalReservations];
  });

  // State for filters
  const [selectedArea, setSelectedArea] = useState('すべて');
  const [selectedProperty, setSelectedProperty] = useState('すべて');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // State for current month
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3)); // April 2025

  // State for property detail modal
  const [showModal, setShowModal] = useState(false);
  const [selectedPropertyData, setSelectedPropertyData] = useState(null);
  
  // State for drag & drop selection modal
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [selectionRange, setSelectionRange] = useState(null);

  // Set default date range to current month
  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    setStartDate(formatDateForInput(firstDay));
    setEndDate(formatDateForInput(lastDay));
  }, [currentMonth]);

  // Format date for input field (YYYY-MM-DD)
  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Format date for display (YYYY年MM月DD日)
  const formatDateForDisplay = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  // Navigate to next month
  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  // Generate dates for the current month
  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    
    return Array.from({ length: days }, (_, i) => {
      const date = new Date(year, month, i + 1);
      return {
        date: date,
        day: i + 1,
        weekday: ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]
      };
    });
  };

  const days = getDaysInMonth();

  // Filter properties based on selected area
  const filteredProperties = properties.filter(property => {
    if (selectedArea === 'すべて') return true;
    return property.area === selectedArea;
  });

  // Generate a formatted date string (YYYY-MM-DD)
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Check if a cell has a reservation
  const getCellStatus = (propertyId, date) => {
    const dateStr = formatDate(date);
    const matchingReservations = reservations.filter(res => {
      return res.propertyId === propertyId && 
             res.startDate <= dateStr && 
             res.endDate >= dateStr;
    });
    
    if (matchingReservations.length === 0) return null;
    return matchingReservations[0];
  };

  // Check if date is the start of a reservation
  const isStartDate = (propertyId, date) => {
    const dateStr = formatDate(date);
    return reservations.some(res => res.propertyId === propertyId && res.startDate === dateStr);
  };

  // Check if date is the end of a reservation
  const isEndDate = (propertyId, date) => {
    const dateStr = formatDate(date);
    return reservations.some(res => res.propertyId === propertyId && res.endDate === dateStr);
  };

  // Check if date has a reservation continuing from previous day
  const hasContinuingReservation = (propertyId, date) => {
    const dateStr = formatDate(date);
    const prevDate = new Date(date);
    prevDate.setDate(prevDate.getDate() - 1);
    const prevDateStr = formatDate(prevDate);
    
    return reservations.some(res => 
      res.propertyId === propertyId && 
      res.startDate <= prevDateStr && 
      res.endDate >= dateStr
    );
  };

  // Get cell style based on reservation type
  const getCellStyle = (propertyId, day) => {
    const status = getCellStatus(propertyId, day.date);
    if (!status) return {};
    
    const isStart = isStartDate(propertyId, day.date);
    const isEnd = isEndDate(propertyId, day.date);
    
    let style = {};
    
    switch(status.type) {
      case 'reservation':
        style.backgroundColor = 'rgb(255, 165, 165)';  // Light pink
        style.boxShadow = '0 1px 3px rgba(255, 105, 105, 0.3)';
        break;
      case 'cleaning':
        style.backgroundColor = 'rgb(200, 255, 200)';  // Light green
        style.boxShadow = '0 1px 3px rgba(100, 220, 100, 0.3)';
        break;
      case 'roomBlock':
        style.backgroundColor = 'rgb(235, 235, 235)';  // Light gray
        style.boxShadow = '0 1px 3px rgba(200, 200, 200, 0.3)';
        break;
      default:
        return {};
    }
    
    // Add border radius for start and end dates
    if (isStart) {
      style.borderTopLeftRadius = '4px';
      style.borderBottomLeftRadius = '4px';
      style.borderLeft = '1px solid ' + style.backgroundColor;
    }
    
    if (isEnd) {
      style.borderTopRightRadius = '4px';
      style.borderBottomRightRadius = '4px';
      style.borderRight = '1px solid ' + style.backgroundColor;
    }
    
    // Remove right border if continuing to next day
    if (!isEnd) {
      style.borderRight = 'none';
    }
    
    // Remove left border if continuing from previous day
    if (!isStart && hasContinuingReservation(propertyId, day.date)) {
      style.borderLeft = 'none';
    }
    
    return style;
  };

  // Open property detail modal
  const openPropertyModal = (property) => {
    setSelectedPropertyData(property);
    setShowModal(true);
  };

  // Close property detail modal
  const closePropertyModal = () => {
    setShowModal(false);
  };

  // Handle selection modal submission
  const handleSelectionSubmit = (type) => {
    alert(`${selectionRange.propertyId}の${formatDateForDisplay(selectionRange.startDate)}から${formatDateForDisplay(selectionRange.endDate)}まで、「${type === 'reservation' ? '予約' : type === 'cleaning' ? '清掃' : '部屋止め'}」として登録します。`);
    setShowSelectionModal(false);
  };

  // Simulate drag and drop behavior
  const [dragStart, setDragStart] = useState(null);
  const [currentDrag, setCurrentDrag] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleCellMouseDown = (propertyId, date, hasEvent) => {
    // 予約や清掃、部屋止めが入っている場合は何もしない
    if (hasEvent) return;
    
    setDragStart({ propertyId, date });
    setCurrentDrag({ propertyId, date });
    setIsDragging(true);
  };

  const handleCellMouseOver = (propertyId, date, hasEvent) => {
    // 予約や清掃、部屋止めが入っている場合は何もしない
    if (hasEvent) return;
    
    if (isDragging && dragStart && dragStart.propertyId === propertyId) {
      setCurrentDrag({ propertyId, date });
    }
  };

  const handleCellMouseUp = (hasEvent) => {
    // 予約や清掃、部屋止めが入っている場合は何もしない
    if (hasEvent) {
      setDragStart(null);
      setCurrentDrag(null);
      setIsDragging(false);
      return;
    }
    
    if (dragStart && currentDrag && dragStart.propertyId === currentDrag.propertyId) {
      const startDate = new Date(Math.min(dragStart.date, currentDrag.date));
      const endDate = new Date(Math.max(dragStart.date, currentDrag.date));
      
      // 選択範囲内に予定が入っていないか確認
      const hasEventInRange = reservations.some(res => {
        const resStart = new Date(res.startDate);
        const resEnd = new Date(res.endDate);
        
        return res.propertyId === dragStart.propertyId && 
               ((resStart >= startDate && resStart <= endDate) || 
                (resEnd >= startDate && resEnd <= endDate) ||
                (resStart <= startDate && resEnd >= endDate));
      });
      
      if (!hasEventInRange) {
        setSelectionRange({
          propertyId: dragStart.propertyId,
          startDate: startDate,
          endDate: endDate
        });
        
        setShowSelectionModal(true);
      }
    }
    
    setDragStart(null);
    setCurrentDrag(null);
    setIsDragging(false);
  };

  // Check if a cell is in the current drag selection
  const isInDragSelection = (propertyId, date) => {
    if (!isDragging || !dragStart || !currentDrag || dragStart.propertyId !== propertyId) {
      return false;
    }
    
    const dateValue = date.getTime();
    const startValue = dragStart.date.getTime();
    const currentValue = currentDrag.date.getTime();
    
    return (dateValue >= Math.min(startValue, currentValue) && 
            dateValue <= Math.max(startValue, currentValue));
  };

  // Property Detail Modal Component
  const PropertyDetailModal = ({ property, onClose }) => {
    if (!property) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">{property.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-700">基本情報</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="w-32 text-gray-600">物件名</span>
                    <span>{property.name}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">契約形態</span>
                    <span>{property.contractType}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">取引態様</span>
                    <span>{property.transactionType}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">物件種別</span>
                    <span>{property.propertyType}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mt-6 mb-4 text-gray-700">部屋情報</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="w-32 text-gray-600">間取り</span>
                    <span>{property.layout}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">階数</span>
                    <span>{property.floor}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-600">部屋の向き</span>
                    <span>{property.direction}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-700">物件画像</h3>
                <img src={property.image} alt={property.name} className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-end">
              <button 
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-150"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Selection Modal Component
  const SelectionModal = ({ range, onClose, onSubmit }) => {
    if (!range) return null;
    
    const property = properties.find(p => p.id === range.propertyId);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transform transition-all">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4">
            <h3 className="text-lg font-semibold">予定の登録</h3>
          </div>
          
          <div className="p-6">
            <div className="mb-4">
              <p className="text-gray-600 mb-1">物件</p>
              <p className="font-medium text-gray-800">{property ? property.name : range.propertyId}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-1">期間</p>
              <p className="font-medium text-gray-800">
                {formatDateForDisplay(range.startDate)} 〜 {formatDateForDisplay(range.endDate)}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button 
                className="flex flex-col items-center justify-center p-4 border border-pink-300 bg-white text-pink-500 rounded-lg hover:bg-pink-50 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50"
                onClick={() => onSubmit('reservation')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">予約</span>
              </button>
              
              <button 
                className="flex flex-col items-center justify-center p-4 border border-green-300 bg-white text-green-500 rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50"
                onClick={() => onSubmit('cleaning')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="text-sm">清掃</span>
              </button>
              
              <button 
                className="flex flex-col items-center justify-center p-4 border border-gray-300 bg-white text-gray-500 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                onClick={() => onSubmit('roomBlock')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm">部屋止め</span>
              </button>
            </div>
          </div>
          
          <div className="px-6 py-3 bg-gray-50 text-right">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              キャンセル
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-6 py-3 bg-white border-b border-gray-200 shadow">
        <div className="flex items-center justify-between max-w-full mx-auto">
          <div className="flex items-center">
            <div className="font-bold text-3xl" style={{ color: '#ff6600' }}>
              BraTTo
              <span className="ml-2 text-sm text-gray-600 font-normal">マンスリー予約管理システム</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-150 group">
              <span className="group-hover:text-orange-500 transition-colors">お問合せ</span>
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-150 group">
              <span className="group-hover:text-orange-500 transition-colors">稼働表</span>
            </a>
            <div className="px-4 py-2 text-gray-700">
              株式会社BraTTo<br />
              <span className="text-sm text-gray-500">村上</span>
            </div>
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition duration-150 hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition duration-150 hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-full mx-auto px-4">
          <div className="flex space-x-1">
            <button className="px-6 py-4 font-medium border-b-2 border-orange-500 text-orange-500 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500">
              予約・契約管理
            </button>
            <button className="px-6 py-4 text-gray-600 hover:text-gray-900 hover:bg-orange-50 transition-all">
              物件・料金管理
            </button>
            <button className="px-6 py-4 text-gray-600 hover:text-gray-900 hover:bg-orange-50 transition-all">
              顧客管理
            </button>
            <button className="px-6 py-4 text-gray-600 hover:text-gray-900 hover:bg-orange-50 transition-all">
              請求・入金管理
            </button>
            <button className="px-6 py-4 text-gray-600 hover:text-gray-900 hover:bg-orange-50 transition-all">
              収支・分析
            </button>
            <button className="px-6 py-4 text-gray-600 hover:text-gray-900 hover:bg-orange-50 transition-all">
              提携サービス
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 max-w-full mx-auto px-6 py-8">
        {/* Controls */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">物件別稼働表</h1>
          <div className="flex space-x-3">
            <button className="px-5 py-2.5 text-white rounded-lg shadow hover:bg-pink-200 transition-all transform hover:-translate-y-0.5" style={{ backgroundColor: 'rgb(255, 165, 165)' }}>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                予約
              </span>
            </button>
            <button className="px-5 py-2.5 bg-white text-green-500 border border-green-300 rounded-lg shadow hover:bg-green-50 transition-all transform hover:-translate-y-0.5">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                清掃
              </span>
            </button>
            <button className="px-5 py-2.5 bg-white text-gray-600 border border-gray-300 rounded-lg shadow hover:bg-gray-50 transition-all transform hover:-translate-y-0.5">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                部屋止め
              </span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">エリア</label>
            <div className="relative">
              <select 
                className="block w-full py-2.5 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="すべて">すべて</option>
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">物件名</label>
            <div className="relative">
              <select 
                className="block w-full py-2.5 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
              >
                <option value="すべて">すべて</option>
                {filteredProperties.map(property => (
                  <option key={property.id} value={property.id}>{property.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">期間</label>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <input 
                  type="date" 
                  className="block w-full py-2.5 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <span className="text-gray-500">〜</span>
              <div className="relative flex-1">
                <input 
                  type="date" 
                  className="block w-full py-2.5 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Calendar controls */}
        <div className="mb-4 flex justify-between items-center">
          <button 
            onClick={goToPreviousMonth}
            className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span>{currentMonth.getFullYear()}年 {currentMonth.getMonth() + 1}月</span>
          </h2>
          
          <button 
            onClick={goToNextMonth}
            className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Calendar view */}
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <div className="min-w-max">
            {/* Calendar header - sticky to the top */}
            <div className="flex border-b sticky top-0 z-10">
              <div className="w-64 py-2 px-4 font-medium text-gray-700 bg-gray-50 border-r sticky left-0 z-20">
                物件名
              </div>
              <div className="w-12 py-2 px-1 font-medium text-gray-700 text-center bg-gray-50 border-r sticky top-0">
                ID
              </div>
              <div className="flex-1 flex sticky top-0 z-10">
                {days.map((day, i) => (
                  <div 
                    key={i} 
                    className={`w-8 py-1 px-0.5 text-center border-r ${
                      day.weekday === '土' ? 'bg-gray-50 text-gray-700' : 
                      day.weekday === '日' ? 'bg-gray-50 text-red-500' : 
                      'bg-gray-50 text-gray-700'
                    } font-medium sticky top-0`}
                  >
                    {day.day}
                    <div className={`text-xs ${
                      day.weekday === '土' ? 'text-gray-500' : 
                      day.weekday === '日' ? 'text-red-500' : 
                      'text-gray-500'
                    }`}>
                      {day.weekday}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group properties by area */}
            {areas.map(area => {
              const areaProperties = filteredProperties.filter(p => p.area === area);
              if (areaProperties.length === 0) return null;
              
              return (
                <div key={area} className="border-b">
                  {/* Area header */}
                  <div className="flex bg-orange-50">
                    <div className="w-64 py-1.5 px-4 font-semibold text-orange-600 sticky left-0 z-10 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {area}
                    </div>
                    <div className="w-12 py-1.5 px-1"></div>
                    <div className="flex-1"></div>
                  </div>
                  
                  {/* Properties in this area */}
                  {areaProperties.map((property, propertyIndex) => (
                    <div key={property.id} className={`flex hover:bg-gray-50 ${propertyIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} group`}>
                      <div 
                        className="w-64 py-1.5 px-4 border-r border-gray-200 cursor-pointer hover:text-orange-500 sticky left-0 z-10 bg-inherit flex items-center group-hover:bg-gray-50 text-sm"
                        onClick={() => openPropertyModal(property)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 text-gray-400 group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {property.name}
                      </div>
                      <div className="w-12 py-1.5 px-1 border-r border-gray-200 text-center text-gray-500 text-xs">
                        {property.id}
                      </div>
                      <div className="flex-1 flex">
                        {days.map((day, i) => {
                          const status = getCellStatus(property.id, day.date);
                          const style = getCellStyle(property.id, day);
                          const inDragSelection = isInDragSelection(property.id, day.date);
                          
                          return (
                            <div 
                              key={i} 
                              className={`w-8 h-6 ${status ? 'cursor-default' : 'cursor-pointer'} ${!status ? 'border-r border-b border-gray-200' : ''} transition-all duration-200`}
                              style={inDragSelection ? { 
                                backgroundColor: 'rgba(255, 192, 192, 0.4)',
                                boxShadow: 'inset 0 0 0 1px rgba(255, 165, 165, 0.6)'
                              } : style}
                              onMouseDown={() => handleCellMouseDown(property.id, day.date, !!status)}
                              onMouseOver={() => handleCellMouseOver(property.id, day.date, !!status)}
                              onMouseUp={() => handleCellMouseUp(!!status)}
                            >
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex items-center p-4 bg-white rounded-lg shadow">
          <div className="flex items-center mr-8">
            <div className="w-5 h-5 mr-2 rounded-md" style={{ backgroundColor: 'rgb(255, 165, 165)', boxShadow: '0 1px 3px rgba(255, 105, 105, 0.3)' }}></div>
            <span className="text-sm text-gray-700">予約</span>
          </div>
          <div className="flex items-center mr-8">
            <div className="w-5 h-5 mr-2 rounded-md" style={{ backgroundColor: 'rgb(200, 255, 200)', boxShadow: '0 1px 3px rgba(100, 220, 100, 0.3)' }}></div>
            <span className="text-sm text-gray-700">清掃</span>
          </div>
          <div className="flex items-center mr-8">
            <div className="w-5 h-5 mr-2 rounded-md" style={{ backgroundColor: 'rgb(235, 235, 235)', boxShadow: '0 1px 3px rgba(200, 200, 200, 0.3)' }}></div>
            <span className="text-sm text-gray-700">部屋止め</span>
          </div>
          <div className="flex-1 text-right text-sm text-gray-500">
            ※カレンダー上でドラッグ＆ドロップして日付範囲を選択できます
          </div>
        </div>
      </main>

      {/* Property Detail Modal */}
      {showModal && (
        <PropertyDetailModal 
          property={selectedPropertyData} 
          onClose={closePropertyModal} 
        />
      )}
      
      {/* Selection Modal */}
      {showSelectionModal && (
        <SelectionModal 
          range={selectionRange}
          onClose={() => setShowSelectionModal(false)}
          onSubmit={handleSelectionSubmit}
        />
      )}
    </div>
  );
};

export default BrattoPropertySystem;