export interface Machine {
  id: string;
  name: string;
  category: '선반' | '밀링' | '프레스' | '기타';
  manufacturer: string;
  year: string;
  price: string;
  status: 'A+' | 'A' | 'B';
  description: string;
  imageUrl: string;
}

export const INVENTORY: Machine[] = [
  {
    id: '1',
    name: '범용 선반 400x1000',
    category: '선반',
    manufacturer: '화천기공',
    year: '2015',
    price: '상담문의',
    status: 'A+',
    description: '베드 상태 최상, 정밀도 검수 완료. 즉시 출고 가능합니다.',
    imageUrl: 'https://loremflickr.com/800/600/lathe,machine?lock=1'
  },
  {
    id: '2',
    name: 'NC 밀링 3호기',
    category: '밀링',
    manufacturer: '두산공작기계',
    year: '2012',
    price: '상담문의',
    status: 'A',
    description: '컨트롤러 교체 완료, 소음 및 진동 없음. 시운전 가능.',
    imageUrl: 'https://loremflickr.com/800/600/milling,machine?lock=2'
  },
  {
    id: '3',
    name: 'C형 프레스 60톤',
    category: '프레스',
    manufacturer: '현대프레스',
    year: '2018',
    price: '상담문의',
    status: 'A+',
    description: '사용 시간 짧음, 안전 장치 최신형 장착. 외관 도장 완료.',
    imageUrl: 'https://loremflickr.com/800/600/press,machine?lock=3'
  },
  {
    id: '4',
    name: '범용 선반 580x1500',
    category: '선반',
    manufacturer: '통일중공업',
    year: '2010',
    price: '상담문의',
    status: 'B',
    description: '가성비 우수, 기본 정비 완료. 소규모 공장 추천.',
    imageUrl: 'https://loremflickr.com/800/600/lathe,industrial?lock=4'
  },
  {
    id: '5',
    name: '머시닝 센터 VC430',
    category: '밀링',
    manufacturer: '두산',
    year: '2016',
    price: '상담문의',
    status: 'A+',
    description: '고속 가공 가능, 툴 매거진 상태 양호. 정밀 가공용.',
    imageUrl: 'https://loremflickr.com/800/600/cnc,machine?lock=5'
  },
  {
    id: '6',
    name: '유압 프레스 100톤',
    category: '프레스',
    manufacturer: '국산',
    year: '2014',
    price: '상담문의',
    status: 'A',
    description: '유압 라인 전체 오버홀 완료. 강력한 압축력.',
    imageUrl: 'https://loremflickr.com/800/600/hydraulic,press?lock=6'
  }
];
