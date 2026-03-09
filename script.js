const FALLBACK_IMAGE = "./assets/fallback-travel.svg";

const guidebookData = {
  lastUpdated:
    "최종 정리일: 2026년 3월 8일. 실제 항공편은 2026년 3월 13일 금요일 00:30 타오위안 도착, 2026년 3월 16일 월요일 01:55 타오위안 출발 기준으로 반영했습니다.",
  quickLook: [
    {
      label: "입출국",
      title: "3/13 00:30 도착 · 3/16 01:55 출국",
      note: "입국 픽업과 3/15 22:00 샌딩이 이미 잡혀 있어 공항 스트레스가 적습니다.",
    },
    {
      label: "숙소",
      title: "앳홈 호텔 난시 = 닝샤 앞 회복 거점",
      note: "첫날과 마지막 날은 멀리 보기보다 호텔 복귀가 쉬운 위치를 최대한 활용하는 편이 낫습니다.",
    },
    {
      label: "일정 리듬",
      title: "하루 1권역 + 카페/호텔 휴식",
      note: "오전은 느리게 시작하고, 2-3시간마다 쉬거나 먹는 흐름으로 잡았습니다.",
    },
    {
      label: "음식 원칙",
      title: "빨리 앉고 가볍게 나눠 먹기",
      note: "긴 줄, 과식, 자극적인 야식은 피하고 바로 대체 메뉴로 전환하는 방식이 안전합니다.",
    },
    {
      label: "3일차 기준",
      title: "컨디션 70점 미만이면 Linkou 취소",
      note: "셋째 날은 관광보다 심야 출국 전까지 안정적으로 버티는 것이 더 중요합니다.",
    },
    {
      label: "위기 대응",
      title: "응급 119 · 분실 110 · 프런트 우선",
      note: "차량 문제, 병원 이동, 심야 공항 혼선은 혼자 해결하려 하지 말고 호텔 프런트를 먼저 쓰면 됩니다.",
    },
  ],
  overview: [
    {
      label: "여행 날짜",
      value: "2026.03.13-03.16",
      note: "3월 12일 밤 대구 출발, 타이베이 체류는 3월 13일 새벽부터 시작됩니다.",
    },
    {
      label: "숙소",
      value: "At Home Hotel Nanshi",
      note: "닝샤 야시장 바로 앞이라 쉬었다 다시 내려오기 좋습니다.",
    },
    {
      label: "공항 이동",
      value: "입국 픽업 + 3/15 22:00 샌딩",
      note: "가장 피곤한 구간이 이미 정리돼 있어 여행 전체 리듬이 안정적입니다.",
    },
    {
      label: "핵심 원칙",
      value: "공복 3시간 넘기지 않기",
      note: "혈당, 위장, 공황, 피로를 같이 관리하려면 먹는 타이밍이 가장 중요합니다.",
    },
    {
      label: "이동 방식",
      value: "도보보다 택시/Uber 우선",
      note: "무릎과 피로를 아끼는 것이 이번 여행에서는 더 이득입니다.",
    },
    {
      label: "비상 거점",
      value: "호텔 프런트 + Zhongxing Branch",
      note: "응급은 119, 분실과 도난은 110으로 바로 연결하면 됩니다.",
    },
  ],
  itinerary: [
    {
      dayIndex: "Day 1 | 3/13 Fri",
      title: "회복일: 호텔 적응 + 다다오청 + 닝샤",
      summary:
        "첫날은 많이 보는 날이 아니라 몸 상태를 정상 범위로 되돌리는 날입니다. 낮잠, 다다오청 짧은 산책, 닝샤 저녁만 잡으면 충분합니다.",
      highlights: [
        { label: "페이스", value: "회복형" },
        { label: "핵심", value: "다다오청 + 닝샤" },
        { label: "플랜B", value: "카페 후 호텔" },
      ],
      quickStops: [
        "00:30 도착 -> 픽업 -> 체크인",
        "오전 늦잠 + 가벼운 브런치",
        "오후 Dihua Street 1-2블록만 산책",
        "저녁 Ningxia 후 바로 휴식",
      ],
      mapUrl:
        "https://www.google.com/maps/@25.0821031,121.4965931,13z/data=!4m2!11m1!2sGD2U7aCIVXxtcnt6ViJJLA?entry=ttu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ningxia_Night_Market_20250520.jpg/1200px-Ningxia_Night_Market_20250520.jpg",
      imageAlt: "닝샤 야시장 전경",
      tags: ["회복일", "호텔 중심", "저강도", "커플 산책"],
      stops: [
        {
          time: "00:30-02:10",
          title: "타오위안 도착 -> 픽업 차량 -> 호텔",
          description:
            "공항 체류를 길게 끌지 말고 수하물과 유심만 정리한 뒤 바로 이동합니다.",
        },
        {
          time: "02:10-10:30",
          title: "숙면 확보",
          description:
            "알람을 여러 번 쪼개기보다 길게 자는 편이 전체 컨디션 회복에 낫습니다.",
        },
        {
          time: "11:00-15:00",
          title: "브런치 후 Dihua Street 짧은 산책",
          description:
            "사진 좋은 구간만 짧게 보고, 힘들면 바로 카페나 호텔로 빠집니다.",
        },
        {
          time: "15:00-16:30",
          title: "카페 또는 객실 휴식",
          description:
            "첫날 만족도를 살리는 핵심 버퍼입니다. 피곤하면 바로 눕는 편이 낫습니다.",
        },
        {
          time: "17:00 이후",
          title: "Dadaocheng Wharf -> Ningxia -> 조기 취침",
          description:
            "강변은 짧게, 야시장은 가볍게 보고 과식 없이 방으로 올라옵니다.",
        },
      ],
    },
    {
      dayIndex: "Day 2 | 3/14 Sat",
      title: "완화 + 시먼딩: 택시를 섞는 데이트 코스",
      summary:
        "오래된 타이베이 분위기를 보는 날이지만, 보행량을 욕심내지 않는 것이 핵심입니다. Longshan Temple, Bopiliao, Ximending만 짧게 묶으면 충분합니다.",
      highlights: [
        { label: "페이스", value: "느린 출발" },
        { label: "핵심", value: "완화 + 시먼딩" },
        { label: "플랜B", value: "시먼딩 축소" },
      ],
      quickStops: [
        "호텔 근처 브런치로 천천히 시작",
        "택시로 Longshan Temple 이동",
        "Bopiliao + 점심",
        "Ximending 짧게 보고 카페 후 복귀",
      ],
      mapUrl:
        "https://www.google.com/maps/@25.0433721,121.5077092,15z/data=!4m2!11m1!2svQ2Px46INdlCQ3Fr6XCWdw?entry=ttu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bangka_Lungshan_Temple_07.23.jpg/1200px-Bangka_Lungshan_Temple_07.23.jpg",
      imageAlt: "Longshan Temple 전경",
      tags: ["완화", "시먼딩", "택시 추천", "사진 스팟"],
      stops: [
        {
          time: "10:30-11:30",
          title: "느린 출발과 브런치",
          description:
            "토요일은 사람이 많으니 아침부터 서두르지 않는 편이 하루 전체가 편합니다.",
        },
        {
          time: "11:40-14:00",
          title: "Longshan Temple + Bopiliao",
          description:
            "핵심 구역만 보고 오래 서 있지 않는 쪽으로 운영하면 충분합니다.",
        },
        {
          time: "14:00-15:10",
          title: "점심: Wang's Broth 또는 Yuan Fang Guabao",
          description:
            "줄이 길면 버티지 말고 바로 대체 메뉴로 전환하는 것이 맞습니다.",
        },
        {
          time: "15:30-18:20",
          title: "Ximending + 카페 휴식",
          description:
            "Red House 주변만 짧게 보고, 과자극이 올라오기 전에 조용한 실내로 이동합니다.",
        },
        {
          time: "19:00 이후",
          title: "호텔 복귀 후 Ningxia 또는 객실 휴식",
          description:
            "시먼딩을 길게 끌기보다 숙소 근처에서 마무리하는 편이 안정적입니다.",
        },
      ],
    },
    {
      dayIndex: "Day 3 | 3/15 Sun",
      title: "선택일: Linkou 반나절 또는 호텔 중심 회복",
      summary:
        "22:00 샌딩이 예약된 날이라 낮 일정은 어디까지나 옵션입니다. 둘 중 한 명이라도 피곤하면 Linkou는 접고 호텔 중심으로 돌리는 편이 맞습니다.",
      highlights: [
        { label: "페이스", value: "선택형" },
        { label: "핵심", value: "밤 22:00까지 안정 유지" },
        { label: "플랜B", value: "호텔 중심 회복" },
      ],
      quickStops: [
        "아침 컨디션 70점 미만이면 Linkou 취소",
        "Plan A: Mitsui Outlet Park + The Eatery",
        "Plan B: 다다오청 카페 + 객실 휴식",
        "이른 저녁 후 샤워, 짐 정리, 22:00 샌딩",
      ],
      mapUrl:
        "https://www.google.com/maps/@25.1133753,121.3846755,12z/data=!4m2!11m1!2s-FueY7f1ubMLds77PsglGw?entry=ttu",
      image:
        "https://newtaipei.travel/content/images/attractions/38856/1920x1080_attractions-image-98jk2kap-ee872ss25z8aq.jpg",
      imageAlt: "Mitsui Outlet Park Linkou 전경",
      tags: ["선택형 일정", "린커우", "심야 출국", "버퍼 확보"],
      stops: [
        {
          time: "10:30-11:30",
          title: "컨디션 체크",
          description:
            "피로, 혈당 흔들림, 위장 통증, 무릎 통증 중 하나라도 크면 즉시 호텔 중심 플랜으로 바꿉니다.",
        },
        {
          time: "12:00-16:30",
          title: "Plan A: Linkou / Plan B: 호텔 중심",
          description:
            "둘 다 가능하지만, 중요한 것은 16시 이후에는 반드시 귀국 준비 모드로 돌아오는 것입니다.",
        },
        {
          time: "17:00-18:30",
          title: "이른 저녁과 짐 정리",
          description:
            "공항 야식보다 도심에서 가볍게 먹고, 약과 간식 키트를 꺼내기 좋게 재배치합니다.",
        },
        {
          time: "18:30-21:00",
          title: "샤워와 객실 휴식",
          description:
            "이 시간에 쉬어 두면 심야 공항 이동의 부담이 훨씬 줄어듭니다.",
        },
        {
          time: "22:00",
          title: "호텔 출발 -> 공항 샌딩",
          description:
            "차량이 늦으면 혼자 해결하려 하지 말고 프런트에서 예약 업체와 바로 연결합니다.",
        },
      ],
    },
    {
      dayIndex: "Day 4 | 3/16 Mon",
      title: "새벽 출국 루틴",
      summary:
        "이 날은 관광일이 아니라 귀국 처리일입니다. 수속, 약, 간식, 화장실만 차분하게 정리하면 됩니다.",
      highlights: [
        { label: "페이스", value: "공항 모드" },
        { label: "핵심", value: "줄 단순화" },
        { label: "플랜B", value: "안내센터 활용" },
      ],
      quickStops: [
        "22:50-23:40 체크인",
        "23:40-00:40 보안검색과 출국심사",
        "00:40-01:30 물, 간식, 약, 화장실 정리",
      ],
      mapUrl: "https://www.taoyuan-airport.com/?lang=en",
      image:
        "https://newtaipei.travel/content/images/shops/16112/1024x768_a7da26ce-7faf-456b-9cb6-5858dfd5adbe.jpg",
      imageAlt: "출국 전 마지막 식사 예시 이미지",
      tags: ["새벽 출국", "수하물", "약/간식 확인", "귀국"],
      stops: [
        {
          time: "22:50-23:40",
          title: "공항 도착과 체크인",
          description:
            "수하물 무게와 액체류, 처방약 위치를 다시 확인합니다.",
        },
        {
          time: "23:40-00:40",
          title: "보안검색과 출국 심사",
          description:
            "한 명은 서류, 한 명은 짐과 컨디션 체크를 맡아 속도를 맞춥니다.",
        },
        {
          time: "00:40-01:30",
          title: "탑승 전 마지막 정리",
          description:
            "탑승 직전 허겁지겁 움직이지 않게 물, 간식, 화장실을 미리 처리합니다.",
        },
      ],
    },
  ],
  food: [
    {
      type: "첫날 저녁",
      name: "Ningxia Night Market",
      description:
        "호텔 바로 앞이라 첫날과 마지막 날에 가장 효율적입니다. 많이 먹기보다 두세 메뉴만 가볍게 나눠 먹는 쪽이 좋습니다.",
      bestFor: "호텔 복귀가 쉬운 첫날",
      caution: "줄 길면 바로 다른 가게",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ningxia_Night_Market_20250520.jpg/1200px-Ningxia_Night_Market_20250520.jpg",
      imageAlt: "Ningxia Night Market 전경",
      meta: ["호텔 바로 앞", "첫날 최적", "과식 금지"],
    },
    {
      type: "둘째 날 점심",
      name: "Wang's Broth",
      description:
        "Longshan Temple 권역에서 가장 무난한 안정형 점심 카드입니다. 국물 메뉴라 과하게 무겁지 않게 접근할 수 있습니다.",
      bestFor: "완화 권역 안정형 식사",
      caution: "대기 길면 즉시 대체",
      image:
        "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/5b9ea75825ef403aa2dc62be90cdcc6b.jpg?width=1000",
      imageAlt: "Wang's Broth 대표 이미지",
      meta: ["완화", "MICHELIN Bib 2025", "점심 추천"],
    },
    {
      type: "둘째 날 대안",
      name: "Yuan Fang Guabao",
      description:
        "양을 조절하며 먹기 쉬워서 줄이 길거나 무거운 식사가 부담될 때 좋습니다.",
      bestFor: "작게 나눠 먹는 점심",
      caution: "배고플 때 단품 추가 고려",
      image:
        "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/57ab0defed67482dbdcd9e3558ba57c1.jpeg?width=1000",
      imageAlt: "Yuan Fang Guabao 대표 이미지",
      meta: ["완화", "가벼운 식사", "빠른 전환"],
    },
    {
      type: "셋째 날 Linkou",
      name: "The Eatery",
      description:
        "실내 좌석 확보가 쉬워 컨디션을 지키기 좋고, 쇼핑과 식사를 한 권역에서 끝내기 좋습니다.",
      bestFor: "앉아서 쉬는 반나절",
      caution: "16시 전에는 회차 시작",
      image:
        "https://newtaipei.travel/content/images/shops/16112/1024x768_a7da26ce-7faf-456b-9cb6-5858dfd5adbe.jpg",
      imageAlt: "The Eatery 대표 이미지",
      meta: ["Linkou", "실내", "심야 출국 전날"],
    },
  ],
  tips: [
    {
      category: "역할 분담",
      title: "한 명은 서류, 한 명은 컨디션 체크",
      description:
        "두 사람이 동시에 길 찾기와 결제를 다 잡으려 하면 금방 지칩니다. 역할을 고정해 두면 흐름이 단순해집니다.",
    },
    {
      category: "당뇨",
      title: "공복 3시간 넘기지 않기",
      description:
        "간식과 물은 가방 바깥쪽에 두고, 긴 줄 앞에서는 앉을 자리와 대체 메뉴부터 확인합니다.",
    },
    {
      category: "공황/ADHD",
      title: "과자극이 오면 바로 조용한 실내로",
      description:
        "시먼딩, 야시장, 공항 보안검색은 소리와 사람이 많습니다. 설명보다 먼저 자극을 줄이는 공간으로 이동합니다.",
    },
    {
      category: "무릎",
      title: "택시 10분을 아끼지 않기",
      description:
        "이번 여행은 걷기보다 보존이 우선입니다. 구간이 끊기는 곳은 택시가 더 효율적입니다.",
    },
    {
      category: "위장",
      title: "야시장도 맛보기 모드로 끝내기",
      description:
        "기름진 야식을 몰아먹지 말고, 괜찮은 메뉴를 조금씩 나눠 먹는 쪽이 안전합니다.",
    },
    {
      category: "숙소 활용",
      title: "Ningxia 앞 숙소를 회복 거점으로 쓰기",
      description:
        "힘들면 아래층만 짧게 돌고 바로 올라와도 여행이 무너지지 않는 구조입니다.",
    },
  ],
  safety: [
    {
      category: "응급",
      title: "심한 통증, 호흡 곤란, 실신 느낌이면 119",
      description:
        "버티거나 검색부터 하지 말고, 호텔 프런트에 구급차 요청을 바로 맡기는 편이 빠릅니다.",
      actions: [
        "119 또는 프런트에 ambulance 요청",
        "여권, 보험, 복용약, 알레르기 정보를 휴대폰 메모로 제시",
        "Zhongxing Branch(+886-2-2555-3000)를 기본 병원으로 생각",
        "국제 진료 접근성이 더 편하면 Mackay Memorial Hospital을 백업으로 사용",
      ],
    },
    {
      category: "컨디션 급하락",
      title: "원인 분석보다 먼저 앉거나 눕기",
      description:
        "혈당, 공황, 위장 문제는 설명하려 하기보다 조용한 실내로 후퇴하는 편이 맞습니다.",
      actions: [
        "간식, 물, 복용약부터 기존 루틴대로 사용",
        "다른 한 명은 길 찾기와 결제를 멈추고 좌석 확보에 집중",
        "20-30분 내 회복이 없으면 119 또는 병원 이동",
        "야시장과 공항 줄에서는 버티지 말고 즉시 이탈",
      ],
    },
    {
      category: "분실/도난",
      title: "카드 정지 -> 위치 추적 -> 110 -> 영사관 순서",
      description:
        "분실 직후에는 머리가 하얘지기 쉬워서 순서를 고정해 두는 것이 중요합니다.",
      actions: [
        "휴대폰은 위치 확인 후 원격 잠금",
        "카드와 지갑은 카드사 앱 또는 국제전화로 즉시 정지",
        "현지 신고는 110, 보험 청구용 확인서 확보",
        "주타이베이 대한민국 대표부: +886-2-2758-8320 / taipei@mofa.go.kr",
      ],
    },
    {
      category: "심야 출국",
      title: "차량 문제는 공항보다 호텔 프런트가 먼저",
      description:
        "22:00 샌딩이 늦어도 현장 택시를 먼저 찾지 말고, 예약 업체 연결부터 프런트에 맡기는 편이 정확합니다.",
      actions: [
        "21:30 전후 프런트에 샌딩 예약 재확인",
        "22:00가 넘어도 차량이 없으면 프런트에서 기사와 업체에 즉시 연락",
        "공항 혼선 시 관광안내센터 활용: T1 +886-3-398-2194 / T2 +886-3-398-3341",
        "호객 택시나 비공식 권유는 받지 않기",
      ],
    },
  ],
  budget: [
    {
      tier: "가볍게",
      total: "약 80만-95만원",
      breakdown: [
        { label: "항공", value: "22만-30만원" },
        { label: "숙소 3박", value: "28만-36만원" },
        { label: "식비", value: "12만-16만원" },
        { label: "현지 교통", value: "3만-5만원" },
        { label: "간식/카페", value: "5만-8만원" },
      ],
    },
    {
      tier: "표준",
      total: "약 105만-130만원",
      breakdown: [
        { label: "항공", value: "28만-40만원" },
        { label: "숙소 3박", value: "36만-52만원" },
        { label: "식비", value: "18만-24만원" },
        { label: "현지 교통", value: "5만-8만원" },
        { label: "쇼핑/카페", value: "12만-18만원" },
      ],
    },
    {
      tier: "여유롭게",
      total: "약 140만-175만원",
      breakdown: [
        { label: "항공", value: "35만-50만원" },
        { label: "숙소 3박", value: "52만-78만원" },
        { label: "식비", value: "25만-35만원" },
        { label: "현지 교통", value: "8만-12만원" },
        { label: "쇼핑/예비비", value: "20만-30만원" },
      ],
    },
  ],
  sources: [
    {
      label: "Taipei Travel - Dihua Street",
      url: "https://www.travel.taipei/en/attraction/details/1686",
    },
    {
      label: "Taipei Travel - Xiahai City God Temple",
      url: "https://www.travel.taipei/en/attraction/details/488",
    },
    {
      label: "Taipei Travel - Dadaocheng Wharf",
      url: "https://www.travel.taipei/en/attraction/details/426",
    },
    {
      label: "Taipei Travel - Ningxia Night Market",
      url: "https://www.travel.taipei/en/attraction/details/1689",
    },
    {
      label: "Taipei Travel - The Red House",
      url: "https://www.travel.taipei/en/attraction/details/503",
    },
    {
      label: "Taipei Travel - Longshan Temple",
      url: "https://www.travel.taipei/en/attraction/details/487",
    },
    {
      label: "Taipei Travel - Bopiliao",
      url: "https://www.travel.taipei/en/attraction/details/506",
    },
    {
      label: "Taipei Travel - Ximending",
      url: "https://www.travel.taipei/en/attraction/details/1694",
    },
    {
      label: "New Taipei Travel - Mitsui Outlet Park Linkou",
      url: "https://newtaipei.travel/en/attractions/detail/112984",
    },
    {
      label: "New Taipei Travel - The Eatery",
      url: "https://newtaipei.travel/en/shop/detail/402749",
    },
    {
      label: "MICHELIN - Wang's Broth",
      url: "https://guide.michelin.com/us/en/taipei-region/taipei/restaurant/hsiao-wang-steamed-minced-pork-with-pickles-in-broth",
    },
    {
      label: "MICHELIN - Yuan Fang Guabao",
      url: "https://guide.michelin.com/us/en/taipei-region/taipei/restaurant/yuan-fang-guabao",
    },
    {
      label: "Taipei City - Emergency Contact Numbers",
      url: "https://english.gov.taipei/News_Content.aspx?n=95D4FF7B2BC6D67C&sms=E8F44BB2D1F11A00&s=E4AAFA9719943D2A",
    },
    {
      label: "Taipei City Hospital - Zhongxing Branch",
      url: "https://tpech.gov.taipei/mp109081/cp.aspx?n=F43355E71D9EA148",
    },
    {
      label: "Mackay Memorial Hospital",
      url: "https://www.mmh.org.tw/main.php?lang=en",
    },
    {
      label: "MOFA - Korean Mission in Taipei",
      url: "https://www.mofa.gov.tw/en/OfficesInROC_Content.aspx?n=169&sms=87&s=66&os=27",
    },
    {
      label: "Taoyuan Airport - Tourist Service Center",
      url: "https://www.taoyuan-airport.com/service_facilities/5a0d46f2-0d34-49d0-8078-37b0c91234b9?lang=en",
    },
  ],
};

function attachImageFallback(imageElement) {
  const fallbackSrc = imageElement.dataset.fallback || FALLBACK_IMAGE;
  const originalAlt = imageElement.alt || "여행 이미지";

  imageElement.addEventListener("error", () => {
    if (imageElement.dataset.fallbackApplied === "true") {
      return;
    }

    imageElement.dataset.fallbackApplied = "true";
    imageElement.src = fallbackSrc;
    imageElement.alt = `${originalAlt} 폴백 이미지`;
    imageElement.classList.add("image-fallback");
  });
}

function appendPill(container, className, text) {
  const pill = document.createElement("span");
  pill.className = className;
  pill.textContent = text;
  container.appendChild(pill);
}

function renderQuickLook() {
  const container = document.querySelector("#glance-grid");
  const template = document.querySelector("#glance-card-template");

  guidebookData.quickLook.forEach((item) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".overview-label").textContent = item.label;
    fragment.querySelector(".glance-title").textContent = item.title;
    fragment.querySelector(".overview-note").textContent = item.note;
    container.appendChild(fragment);
  });
}

function renderOverview() {
  const container = document.querySelector("#overview-grid");
  const template = document.querySelector("#overview-card-template");

  guidebookData.overview.forEach((item) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".overview-label").textContent = item.label;
    fragment.querySelector(".overview-value").textContent = item.value;
    fragment.querySelector(".overview-note").textContent = item.note;
    container.appendChild(fragment);
  });
}

function renderItinerary() {
  const container = document.querySelector("#itinerary-list");
  const template = document.querySelector("#itinerary-card-template");

  guidebookData.itinerary.forEach((day) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".day-index").textContent = day.dayIndex;
    fragment.querySelector(".day-title").textContent = day.title;
    fragment.querySelector(".day-summary").textContent = day.summary;

    const mapLink = fragment.querySelector(".map-link");
    mapLink.href = day.mapUrl;
    mapLink.textContent = "지도 열기";

    const image = fragment.querySelector(".day-image");
    image.src = day.image;
    image.alt = day.imageAlt;
    image.dataset.fallback = FALLBACK_IMAGE;
    attachImageFallback(image);

    const highlights = fragment.querySelector(".day-highlights");
    day.highlights.forEach((highlight) => {
      const block = document.createElement("div");
      block.className = "day-highlight";
      block.innerHTML = `
        <span class="day-highlight-label">${highlight.label}</span>
        <strong class="day-highlight-value">${highlight.value}</strong>
      `;
      highlights.appendChild(block);
    });

    const glanceList = fragment.querySelector(".day-glance");
    day.quickStops.forEach((stop) => {
      const item = document.createElement("li");
      item.textContent = stop;
      glanceList.appendChild(item);
    });

    fragment.querySelector(".details-summary").textContent =
      `세부 동선 ${day.stops.length}개 보기`;

    const timeline = fragment.querySelector(".timeline");
    day.stops.forEach((stop) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <time>${stop.time}</time>
        <strong>${stop.title}</strong>
        <p>${stop.description}</p>
      `;
      timeline.appendChild(item);
    });

    const tags = fragment.querySelector(".day-tags");
    day.tags.forEach((tag) => appendPill(tags, "tag", tag));

    container.appendChild(fragment);
  });
}

function renderFood() {
  const container = document.querySelector("#food-grid");
  const template = document.querySelector("#food-card-template");

  guidebookData.food.forEach((place) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".food-type").textContent = place.type;
    fragment.querySelector(".food-name").textContent = place.name;
    fragment.querySelector(".food-description").textContent = place.description;

    const image = fragment.querySelector(".food-image");
    image.src = place.image;
    image.alt = place.imageAlt;
    image.dataset.fallback = FALLBACK_IMAGE;
    attachImageFallback(image);

    const foodHighlights = fragment.querySelector(".food-highlights");
    appendPill(foodHighlights, "meta-pill", place.bestFor);
    appendPill(foodHighlights, "meta-pill", place.caution);

    const meta = fragment.querySelector(".food-meta");
    place.meta.forEach((entry) => appendPill(meta, "meta-pill", entry));

    container.appendChild(fragment);
  });
}

function renderTips() {
  const container = document.querySelector("#tips-grid");
  const template = document.querySelector("#tip-card-template");

  guidebookData.tips.forEach((tip) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".tip-category").textContent = tip.category;
    fragment.querySelector(".tip-title").textContent = tip.title;
    fragment.querySelector(".tip-description").textContent = tip.description;
    container.appendChild(fragment);
  });
}

function renderSafety() {
  const container = document.querySelector("#safety-grid");
  const template = document.querySelector("#safety-card-template");

  guidebookData.safety.forEach((card) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".tip-category").textContent = card.category;
    fragment.querySelector(".safety-title").textContent = card.title;
    fragment.querySelector(".tip-description").textContent = card.description;
    fragment.querySelector(".details-summary").textContent =
      `대응 순서 ${card.actions.length}단계 보기`;

    const actions = fragment.querySelector(".safety-actions");
    card.actions.forEach((action) => {
      const item = document.createElement("li");
      item.textContent = action;
      actions.appendChild(item);
    });

    container.appendChild(fragment);
  });
}

function renderBudget() {
  const container = document.querySelector("#budget-cards");
  const template = document.querySelector("#budget-card-template");

  guidebookData.budget.forEach((plan) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".budget-tier").textContent = plan.tier;
    fragment.querySelector(".budget-total").textContent = plan.total;

    const breakdown = fragment.querySelector(".budget-breakdown");
    plan.breakdown.forEach((entry) => {
      const item = document.createElement("li");
      item.innerHTML = `<span>${entry.label}</span><strong>${entry.value}</strong>`;
      breakdown.appendChild(item);
    });

    container.appendChild(fragment);
  });
}

function renderSources() {
  const updatedElement = document.querySelector("#last-updated");
  const sourceList = document.querySelector("#source-list");

  updatedElement.textContent = guidebookData.lastUpdated;

  guidebookData.sources.forEach((source) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.textContent = source.label;
    item.appendChild(link);
    sourceList.appendChild(item);
  });
}

function initializeImageFallbacks() {
  document.querySelectorAll("img").forEach((imageElement) => {
    attachImageFallback(imageElement);
  });
}

function renderGuidebook() {
  renderQuickLook();
  renderOverview();
  renderItinerary();
  renderFood();
  renderTips();
  renderSafety();
  renderBudget();
  renderSources();
  initializeImageFallbacks();
}

renderGuidebook();
