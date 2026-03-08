const FALLBACK_IMAGE = "./assets/fallback-travel.svg";

const guidebookData = {
  lastUpdated:
    "최종 정리일: 2026년 3월 8일. 실제 항공편은 2026년 3월 13일 금요일 00:30 타오위안 도착, 2026년 3월 16일 월요일 01:55 타오위안 출발 기준으로 반영했습니다.",
  overview: [
    {
      label: "여행 날짜",
      value: "2026.03.13-03.16",
      note: "3월 12일 목요일 밤 대구 출발이지만, 타이베이 체류는 3월 13일 금요일 새벽부터 시작됩니다.",
    },
    {
      label: "숙소",
      value: "At Home Hotel Nanshi",
      note: "Ningxia Night Market 바로 앞이라 첫날과 마지막 날 체력 소모를 크게 줄일 수 있습니다. 쉬었다가 다시 내려오기 좋은 위치입니다.",
    },
    {
      label: "공항 이동",
      value: "입국 픽업 + 3/15 22:00 샌딩",
      note: "가장 스트레스가 큰 새벽 도착과 심야 출국이 이미 정리돼 있어, 공황과 피로 관리 측면에서 큰 장점입니다.",
    },
    {
      label: "여행 속도",
      value: "저강도 커플 일정",
      note: "하루에 메인 권역 하나만 두고, 중간에 카페나 호텔 휴식을 반드시 끼워 넣는 구성입니다. 많이 보기보다 끝까지 무너지지 않는 쪽에 맞췄습니다.",
    },
    {
      label: "컨디션 원칙",
      value: "2-3시간마다 식사 또는 휴식",
      note: "당뇨, 공황, ADHD, 무릎 통증, 위장 이슈를 같이 고려해 공복과 장시간 대기, 긴 보행을 피하는 흐름으로 짰습니다.",
    },
    {
      label: "비상 거점",
      value: "호텔 프런트 + Zhongxing Branch",
      note: "호텔에서 가까운 대형 병원 축을 기준으로 비상 동선을 잡았습니다. 급하면 119, 분실과 도난은 110으로 바로 연결합니다.",
    },
  ],
  itinerary: [
    {
      dayIndex: "Day 1 | 3/13 Fri",
      title: "새벽 도착 후 회복 중심: 호텔 적응 + 다다오청 + 닝샤",
      summary:
        "첫날의 목표는 관광을 많이 하는 것이 아니라 밤샘 비행으로 깨진 몸 상태를 정상 범위로 되돌리는 것입니다. 호텔이 Ningxia Night Market 앞이라 멀리 가지 않아도 첫날 밀도를 충분히 만들 수 있습니다.",
      mapUrl:
        "https://www.google.com/maps/@25.0821031,121.4965931,13z/data=!4m2!11m1!2sGD2U7aCIVXxtcnt6ViJJLA?entry=ttu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ningxia_Night_Market_20250520.jpg/1200px-Ningxia_Night_Market_20250520.jpg",
      imageAlt: "닝샤 야시장 전경",
      tags: ["새벽 도착", "호텔 중심", "저강도", "커플 산책"],
      stops: [
        {
          time: "00:30-02:10",
          title: "타오위안 도착 -> 픽업 차량 -> 호텔 체크인",
          description:
            "입국 픽업이 잡혀 있으니 공항에서 긴 동선을 만들 필요가 없습니다. 수하물과 유심 정리만 끝내고 바로 차량에 타서 호텔로 이동하는 것이 최우선입니다. 오늘 새벽은 관광이 아니라 수면 확보가 목적입니다.",
        },
        {
          time: "02:10-10:30",
          title: "숙면 확보",
          description:
            "체크인 후에는 알람을 여러 번 나눠 두지 말고, 한 번에 충분히 자는 편이 ADHD와 공황, 위장 컨디션 모두에 낫습니다. 커튼을 치고 방을 최대한 조용하게 유지하세요.",
        },
        {
          time: "11:00-12:30",
          title: "호텔 근처 늦은 브런치 + 약 복용 체크",
          description:
            "첫 식사는 호텔 근처에서 아주 가볍게 시작하는 편이 안전합니다. 공복이 길어지면 혈당과 위장 컨디션이 동시에 흔들릴 수 있으니, 식사 전에 오늘 약과 간식 키트를 챙겼는지 서로 확인하는 루틴을 넣으세요.",
        },
        {
          time: "13:00-15:00",
          title: "Dihua Street 짧은 산책 + Taipei Xia-Hai City God Temple",
          description:
            "호텔에서 비교적 접근이 쉬워 첫날용으로 적합합니다. 오래 걷기보다 예쁜 골목 두세 블록만 보고, 힘들면 바로 카페로 빠지는 식으로 운영하세요. 커플 사진은 이 구간이 가장 자연스럽게 나옵니다.",
        },
        {
          time: "15:00-16:30",
          title: "카페 또는 호텔 복귀 휴식",
          description:
            "첫날의 핵심 버퍼입니다. 무릎 컨디션이나 멍한 느낌이 올라오면 미련 없이 호텔로 돌아가 1시간 정도 눕는 편이 저녁 만족도를 살립니다.",
        },
        {
          time: "17:00-18:20",
          title: "Dadaocheng Wharf 일몰 산책",
          description:
            "강변은 개방감이 있어 과자극이 덜하고, 커플 여행 분위기를 만들기 좋습니다. 다만 바람이 불고 보행 거리가 길어질 수 있으니 사진 몇 장 찍고 바로 택시로 돌아오는 식이 더 효율적입니다.",
        },
        {
          time: "18:40-20:10",
          title: "Ningxia Night Market 저녁",
          description:
            "오늘은 호텔 앞이라는 위치가 가장 큰 장점입니다. 줄이 너무 긴 집은 과감히 버리고, 두 사람 모두 부담이 적은 메뉴를 두세 개만 나눠 먹는 쪽이 좋습니다. 과식하지 않고 바로 방으로 올라갈 수 있다는 점이 결정적입니다.",
        },
        {
          time: "20:10 이후",
          title: "호텔 귀환과 조기 취침",
          description:
            "첫날은 야시장 2차를 하지 않는 편이 좋습니다. 샤워, 다음 날 옷 정리, 간식 키트 재정비까지만 하고 바로 쉬세요.",
        },
      ],
    },
    {
      dayIndex: "Day 2 | 3/14 Sat",
      title: "완화 올드타운과 시먼딩: 택시를 섞는 커플 데이트 코스",
      summary:
        "둘째 날은 타이베이의 오래된 결을 보는 날입니다. Longshan Temple과 Bopiliao, Ximending을 한날에 묶되, 긴 보행 대신 택시나 Uber를 끼워 넣어 무릎과 피로를 관리하는 쪽으로 짰습니다.",
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
            "토요일은 사람도 많고 자극도 큽니다. 무리해서 아침 일찍 나가지 말고, 호텔 근처에서 늦게 출발해 하루 전체를 안정시키는 편이 낫습니다.",
        },
        {
          time: "11:40-12:10",
          title: "택시 또는 Uber로 Longshan Temple 이동",
          description:
            "대중교통으로도 갈 수 있지만, 오늘은 환승 피로보다 컨디션 유지가 더 중요합니다. 택시 10분 안팎 구간을 과감하게 쓰는 것이 전체 효율이 좋습니다.",
        },
        {
          time: "12:10-13:00",
          title: "Mengjia Longshan Temple",
          description:
            "둘이 같이 천천히 보고, 오래 서 있지 않는 것이 중요합니다. 건물 내부를 다 보겠다는 생각보다 핵심 구역만 보고 나오는 편이 더 좋습니다.",
        },
        {
          time: "13:05-14:00",
          title: "Bopiliao Historic Block",
          description:
            "붉은 벽돌과 아케이드가 이어져 사진 포인트가 좋고, 실외지만 속도를 느리게 가져가기 쉽습니다. 다만 바닥이 고르지 않은 곳이 있어 무릎이 불편하면 구간을 짧게 잘라 보세요.",
        },
        {
          time: "14:00-15:10",
          title: "점심: Wang's Broth 또는 Yuan Fang Guabao",
          description:
            "오늘은 관광보다 식사 타이밍이 더 중요합니다. 줄이 길면 즉시 가벼운 대체 메뉴로 바꾸고, 한 명이 줄을 서는 동안 다른 한 명은 앉아 대기하는 역할 분담을 하세요.",
        },
        {
          time: "15:30-17:10",
          title: "Ximending + The Red House",
          description:
            "사람이 많아 과자극이 쉽게 올라올 수 있으니, 골목 전체를 다 보기보다 Red House 주변과 메인 거리만 짧게 즐기는 편이 좋습니다. 둘이 같이 포토 스팟을 보고 바로 카페나 택시로 빠질 수 있게 움직이세요.",
        },
        {
          time: "17:20-18:20",
          title: "카페 또는 디저트 휴식",
          description:
            "이 시간대를 쉬어야 저녁 이후 컨디션이 남습니다. ADHD와 공황 모두 자극을 한 번 식히는 시간이 중요하고, 위장에도 이 휴식 구간이 도움이 됩니다.",
        },
        {
          time: "19:00 이후",
          title: "호텔 복귀 후 Ningxia 재방문 또는 객실 휴식",
          description:
            "토요일 밤 시먼딩을 길게 끌기보다는 숙소 근처로 돌아와 마무리하는 편이 안정적입니다. 체력이 남으면 Ningxia를 짧게 한 번 더 보고, 아니면 방에서 쉬세요.",
        },
      ],
    },
    {
      dayIndex: "Day 3 | 3/15 Sun",
      title: "컨디션 따라 선택: Linkou 반나절 또는 호텔 중심 회복 + 22:00 샌딩",
      summary:
        "오늘은 오후와 밤의 여유가 핵심입니다. 22:00 출국 샌딩이 예약돼 있으므로, 낮 일정은 어디까지나 옵션입니다. 아침 컨디션이 70점 미만이면 Linkou는 바로 접고 호텔 주변 회복 코스로 바꾸는 것이 맞습니다.",
      mapUrl:
        "https://www.google.com/maps/@25.1133753,121.3846755,12z/data=!4m2!11m1!2s-FueY7f1ubMLds77PsglGw?entry=ttu",
      image:
        "https://newtaipei.travel/content/images/attractions/38856/1920x1080_attractions-image-98jk2kap-ee872ss25z8aq.jpg",
      imageAlt: "Mitsui Outlet Park Linkou 전경",
      tags: ["선택형 일정", "린커우", "심야 출국", "버퍼 확보"],
      stops: [
        {
          time: "10:30-11:30",
          title: "컨디션 체크 회의",
          description:
            "둘 중 한 명이라도 피로, 혈당 흔들림, 위장 통증, 무릎 통증, 멍한 느낌이 크면 오늘은 근교 이동을 버리는 것이 맞습니다. 이 하루는 관광 성과보다 밤 22:00까지 안정적으로 유지되는 것이 더 중요합니다.",
        },
        {
          time: "Plan A | 12:00-16:30",
          title: "Linkou 반나절: Mitsui Outlet Park + The Eatery",
          description:
            "컨디션이 괜찮다면 Airport MRT 축으로 Linkou에 다녀올 수 있습니다. 쇼핑과 카페, 앉을 자리 확보가 쉬워 실내 위주의 반나절 일정으로는 꽤 좋은 카드입니다. 다만 16시대에는 반드시 회차를 시작하세요.",
        },
        {
          time: "Plan B | 12:00-16:30",
          title: "호텔 중심 회복: Dadaocheng 카페 + 객실 휴식",
          description:
            "피곤하면 이 플랜이 정답입니다. 멀리 가지 말고 호텔 주변에서 브런치, 카페, 짧은 쇼핑만 하고 객실로 돌아와 쉬세요. 심야 출국 전에는 씻고 옷 갈아입을 시간이 넉넉한 편이 심리적으로도 훨씬 낫습니다.",
        },
        {
          time: "17:00-18:30",
          title: "이른 저녁과 짐 정리",
          description:
            "공항에서 야식을 기대하기보다, 도심에서 위에 덜 부담되는 이른 저녁을 먹고 가는 편이 낫습니다. 이후에는 여권, 지갑, 처방약, 충전기, 보조배터리, 당 보충 간식을 한 번에 꺼낼 수 있도록 재배치하세요.",
        },
        {
          time: "18:30-21:00",
          title: "객실 샤워와 공항 모드 전환",
          description:
            "오늘 밤은 다시 밤샘 비행 모드로 바뀌는 날입니다. 두 사람 모두 자극이 적은 환경에서 쉬고, 샌딩 차량 정보와 비행편을 서로 확인하세요. 호텔 프런트에 22:00 차량이 잡혀 있다는 것도 다시 확인해 두면 마음이 편합니다.",
        },
        {
          time: "22:00",
          title: "호텔 출발 -> 공항 샌딩",
          description:
            "차량이 늦으면 객실에서 기다리지 말고 바로 프런트에 내려가 확인하세요. 이미 예약이 되어 있으니 현장 택시를 다시 잡기보다 호텔과 기사 쪽을 먼저 연결하는 것이 순서입니다.",
        },
      ],
    },
    {
      dayIndex: "Day 4 | 3/16 Mon",
      title: "새벽 출국 루틴",
      summary:
        "이 날은 관광일이 아니라 귀국 처리일입니다. 3월 16일 월요일 01:55 출발편 기준으로, 공항에서는 줄과 동선을 단순하게 처리하는 것이 중요합니다.",
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
            "심야 시간대라도 수속 줄이 생길 수 있습니다. 수하물 무게를 다시 맞추고, 액체류와 처방약을 꺼내기 쉬운 위치에 두세요.",
        },
        {
          time: "23:40-00:40",
          title: "보안검색과 출국 심사",
          description:
            "공황이 올라오기 쉬운 구간이라 한 명이 앞장서기보다, 둘이 같은 속도로 천천히 움직이는 편이 좋습니다. 한 명이 서류를 관리하면 다른 한 명은 짐과 컨디션 체크에 집중하는 식으로 역할을 나누세요.",
        },
        {
          time: "00:40-01:30",
          title: "탑승 전 마지막 정리",
          description:
            "탑승구 근처에서 물, 가벼운 간식, 화장실을 미리 처리하세요. 탑승 직전에 급하게 움직이지 않아도 되도록, 약 복용 시간과 좌석 주변 정리를 미리 끝내 두는 편이 낫습니다.",
        },
      ],
    },
  ],
  food: [
    {
      type: "첫날 저녁",
      name: "Ningxia Night Market",
      description:
        "호텔 바로 앞이라는 위치가 압도적 장점입니다. 첫날은 줄이 아주 긴 집보다 바로 먹고 바로 올라갈 수 있는 메뉴를 고르는 편이 훨씬 좋습니다. 둘이 한 번에 많이 먹지 말고 여러 메뉴를 나눠 드세요.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ningxia_Night_Market_20250520.jpg/1200px-Ningxia_Night_Market_20250520.jpg",
      imageAlt: "Ningxia Night Market 전경",
      meta: ["호텔 바로 앞", "첫날 최적", "과식 금지", "현금 준비"],
    },
    {
      type: "둘째 날 안정형 점심",
      name: "Wang's Broth",
      description:
        "Longshan Temple 권역과 자연스럽게 묶입니다. 국물과 돼지고기 조합이라 뜨겁고 자극적인 음식을 피하고 싶을 때 비교적 안정적으로 접근할 수 있습니다. 미쉐린 Bib Gourmand 2025 소개 매장입니다.",
      image:
        "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/5b9ea75825ef403aa2dc62be90cdcc6b.jpg?width=1000",
      imageAlt: "Wang's Broth 대표 이미지",
      meta: ["완화", "MICHELIN Bib 2025", "좌석 상황 확인", "점심 추천"],
    },
    {
      type: "둘째 날 가벼운 대안",
      name: "Yuan Fang Guabao",
      description:
        "줄이 길거나 둘 다 무거운 식사가 부담될 때 대체 카드로 좋습니다. 작은 양으로 나눠 먹기 쉬워서 혈당과 위장 컨디션을 보며 속도를 조절하기 좋습니다.",
      image:
        "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/57ab0defed67482dbdcd9e3558ba57c1.jpeg?width=1000",
      imageAlt: "Yuan Fang Guabao 대표 이미지",
      meta: ["완화", "가벼운 식사", "대기 길면 빠르게 전환", "분식형"],
    },
    {
      type: "셋째 날 Linkou 플랜",
      name: "The Eatery",
      description:
        "실내 좌석과 동선이 안정적이라 컨디션을 지키기 좋은 카드입니다. 쇼핑과 저녁을 같은 권역에서 해결할 수 있어 저녁 이후 짐 정리 시간이 필요한 날에 특히 유리합니다.",
      image:
        "https://newtaipei.travel/content/images/shops/16112/1024x768_a7da26ce-7faf-456b-9cb6-5858dfd5adbe.jpg",
      imageAlt: "The Eatery 대표 이미지",
      meta: ["Linkou", "앉아서 쉬기 좋음", "심야 출국 전날", "실내"],
    },
    {
      type: "셋째 날 가벼운 간식",
      name: "Linkou Power Plant popsicles",
      description:
        "더위나 피로가 올라왔을 때 짧게 리셋하기 좋은 카드입니다. 큰 식사 대신 가볍게 끊어 가기 좋고, 사진도 남기기 쉬워서 Linkou 반나절 일정의 보조 포인트로 적합합니다.",
      image:
        "https://newtaipei.travel/content/images/shops/12597/1024x768_13772bb0111000009450.jpg",
      imageAlt: "Linkou Power Plant popsicles 대표 이미지",
      meta: ["Linkou", "가벼운 간식", "짧은 체류형", "더위 리셋"],
    },
  ],
  tips: [
    {
      category: "커플 운영",
      title: "한 명은 서류와 결제, 한 명은 컨디션 감시 역할로 고정",
      description:
        "여권, 카드, 예약 정보, 길 찾기까지 두 사람이 동시에 다 잡으려 하면 피로가 급격히 올라갑니다. 여행 내내 역할을 고정해 두면 ADHD와 공황 상황에서도 흐름이 단순해집니다.",
    },
    {
      category: "당뇨",
      title: "공복 3시간을 넘기지 않는 일정이 핵심",
      description:
        "긴 줄을 설 수 있는 곳에서는 먼저 앉을 자리와 대체 메뉴부터 봐 두세요. 늘 드시던 저혈당 대응 간식과 물은 가방 바깥쪽에 넣어, 호텔 방이 아니라 이동 중에도 바로 꺼낼 수 있게 두는 편이 좋습니다.",
    },
    {
      category: "공황/ADHD",
      title: "과자극이 올라오면 무조건 조용한 실내로 후퇴",
      description:
        "Ximending, 야시장, 공항 보안검색 구간은 소리와 사람이 많습니다. 이상 징후가 보이면 설명하려 애쓰기보다 카페, 호텔, 차량 안처럼 자극이 낮은 공간으로 먼저 이동하세요.",
    },
    {
      category: "무릎",
      title: "택시 10분을 아끼지 말기",
      description:
        "이번 일정은 걷기 좋은 여행이 아니라 무릎을 보호하며 움직이는 여행이어야 합니다. Longshan Temple, Bopiliao, Ximending처럼 구간이 끊기는 곳은 택시를 섞는 편이 훨씬 낫습니다.",
    },
    {
      category: "위장",
      title: "야시장도 '맛보기 모드'로",
      description:
        "십이지장궤양과 헬리코박터 이력이 있으면 밤에 과하게 기름지거나 매운 음식을 몰아서 먹는 패턴이 가장 위험합니다. 두 분 모두 배가 부를 정도가 아니라, 괜찮은 메뉴를 조금씩 나눠 먹는 식으로 가는 편이 안전합니다.",
    },
    {
      category: "숙소 활용",
      title: "Ningxia 앞 숙소라는 장점을 끝까지 활용",
      description:
        "체력이 떨어지면 야시장을 포기하는 것이 아니라, 아래층만 짧게 돌고 바로 올라오면 됩니다. 이 위치 덕분에 첫날과 마지막 날이 훨씬 안전해지므로, 멀리 더 보는 욕심보다 숙소 접근성을 우선하세요.",
    },
  ],
  safety: [
    {
      category: "병원",
      title: "심한 통증, 호흡 곤란, 실신 느낌이면 119부터",
      description:
        "급성 흉통, 심한 복통, 의식 저하, 호흡 곤란, 쓰러짐이 있으면 호텔에서 버티지 말고 바로 119를 부르거나 프런트에 구급차 요청을 맡기세요. 급하지 않지만 진료가 필요하면 Taipei City Hospital Zhongxing Branch를 가장 먼저 생각하면 됩니다.",
      actions: [
        "119에 연결하거나 호텔 프런트에 'ambulance' 또는 병원 택시 요청을 바로 맡긴다.",
        "여권, 여행자보험 정보, 복용 중인 약, 알레르기, 마지막 식사 시간을 한 장 메모나 휴대폰 노트로 보여준다.",
        "중흥병원 대표번호는 +886-2-2555-3000, Taipei City 1999 고객센터의 외국어 서비스는 1999 후 내선 888이다.",
        "숙소에서 더 멀어도 국제 진료 접근성이 더 편하면 Mackay Memorial Hospital(+886-2-2543-3535)을 백업 병원으로 둔다.",
      ],
    },
    {
      category: "급격한 컨디션 저하",
      title: "혈당 흔들림, 공황, 위장 악화는 '설명보다 정지'가 먼저",
      description:
        "두 분 모두 갑자기 상태가 내려갈 수 있으니, 원인을 바로 분석하려 하지 말고 먼저 앉거나 눕는 공간을 확보하는 편이 맞습니다. 이동 중이면 편의점, 카페, 호텔, 차량 안이 우선 대피처입니다.",
      actions: [
        "기존에 하던 개인 대응 루틴대로 간식, 물, 복용약을 먼저 사용하고, 새로 실험하는 음식이나 음료는 피한다.",
        "한 명이 상태가 흔들리면 다른 한 명은 길 찾기와 결제를 중단하고 좌석, 화장실, 조용한 공간 확보에만 집중한다.",
        "20-30분 안에 회복이 안 되거나 의식이 흐려지면 119나 병원 이동으로 바로 전환한다.",
        "야시장이나 공항 줄에서는 끝까지 버티지 말고 바로 이탈한다. 다시 합류하는 편이 훨씬 쉽다.",
      ],
    },
    {
      category: "도난/분실",
      title: "여권, 지갑, 휴대폰 분실 시 순서를 미리 고정",
      description:
        "심야 시간대나 혼잡한 시장에서는 분실 후 머리가 하얘지기 쉽습니다. 그래서 순서를 정해 두는 것이 중요합니다. 카드 정지, 위치 추적, 경찰 신고, 영사관 연락 순으로 밀어붙이면 됩니다.",
      actions: [
        "휴대폰 분실은 먼저 Find My Device 또는 Find My iPhone으로 위치를 확인하고, 불가능하면 원격 잠금부터 건다.",
        "카드와 지갑 분실은 카드사 앱이나 국제전화로 즉시 정지하고, 현지 신고용으로 110에 연락한다.",
        "도난 신고서나 분실 확인서는 여행자보험 청구와 여권 재발급에 필요하므로 꼭 받아 둔다.",
        "주타이베이 대한민국 대표부 연락처는 +886-2-2758-8320, 이메일은 taipei@mofa.go.kr 이다.",
      ],
    },
    {
      category: "심야 공항",
      title: "샌딩 차량 문제는 공항보다 호텔 프런트가 먼저",
      description:
        "3월 15일 일요일 22:00 샌딩은 이미 예약되어 있으니, 기사 연락이 잠시 늦어도 현장 택시를 새로 잡기보다 호텔 프런트에서 예약 업체와 먼저 연결하는 편이 정확합니다. 심야 이동은 혼자 판단하지 않는 것이 좋습니다.",
      actions: [
        "21:30 전후로 호텔 프런트에 샌딩 예약을 다시 한 번 상기시킨다.",
        "22:00가 넘어도 차량이 안 보이면 프런트에서 기사와 업체에 즉시 전화하게 한다.",
        "공항에 도착한 뒤 혼란이 생기면 터미널 관광안내센터를 찾는다. Terminal 1은 +886-3-398-2194, Terminal 2는 +886-3-398-3341이다.",
        "호객 택시나 신원을 알 수 없는 권유는 받지 않고, 반드시 호텔 또는 공항 공식 창구를 통한다.",
      ],
    },
    {
      category: "플랜B",
      title: "비, 피로, 통증이 오면 Day 3는 즉시 호텔 중심 플랜으로",
      description:
        "이번 여행은 대체 일정이 쉬워야 성공입니다. 다행히 숙소 위치가 좋아서 계획을 줄여도 여행이 무너지지 않습니다. 많이 본 날보다 끝까지 편하게 버틴 날이 결과적으로 더 좋은 날이 됩니다.",
      actions: [
        "Linkou 플랜을 취소하고 호텔 근처 브런치, Dihua Street 한 블록, 카페, 객실 휴식으로 낮 일정을 재편한다.",
        "저녁은 Ningxia에서 가볍게 먹고 바로 올라와 샤워와 짐 정리에 집중한다.",
        "사진이나 쇼핑 욕심보다 수면, 식사, 약 복용 시간 확보를 우선한다.",
        "둘 중 한 명이 취소를 말하면 설득하지 말고 바로 축소 모드로 전환한다.",
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
      label: "New Taipei Travel - Linkou Power Plant popsicles",
      url: "https://newtaipei.travel/en/shop/detail/208365",
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
      label: "Taipei City Hospital - Foreign Language Service",
      url: "https://english.gov.taipei/News_Content.aspx?n=7A067E251FA6A396&sms=839CCB98D3F7D1B5&s=FC8D1E57CFC13B70",
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
      label: "MOFA - Taiwan Traveler Emergency Numbers",
      url: "https://www.boca.gov.tw/cp-220-5081-c06dc-2.html",
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
    day.tags.forEach((tag) => {
      const pill = document.createElement("span");
      pill.className = "tag";
      pill.textContent = tag;
      tags.appendChild(pill);
    });

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

    const meta = fragment.querySelector(".food-meta");
    place.meta.forEach((entry) => {
      const pill = document.createElement("span");
      pill.className = "meta-pill";
      pill.textContent = entry;
      meta.appendChild(pill);
    });

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
