const FALLBACK_IMAGE = "./assets/fallback-travel.svg";

const guidebookData = {
  lastUpdated:
    "최종 정리일: 2026년 3월 8일. 항공편 시각은 미정이라 1일차 점심 도착, 4일차 오후 또는 저녁 출국 기준으로 구성했습니다.",
  overview: [
    {
      label: "여행 기간",
      value: "3박 4일",
      note: "첫날은 시먼딩 적응, 둘째 날은 강변과 구시가지, 셋째 날은 린커우로 이동 피로를 분산한 구성입니다.",
    },
    {
      label: "숙소 권장",
      value: "1-2박 시먼딩 / 3박째 선택형",
      note: "새벽 출국이면 마지막 밤만 A8 또는 A9로 옮기고, 일반 출국이면 시먼딩이나 타이베이 메인역에 계속 머물러도 충분합니다.",
    },
    {
      label: "핵심 교통",
      value: "Airport MRT + MRT + Uber",
      note: "도심은 MRT가 가장 편하고, 린커우처럼 동선이 끊기는 구간만 짧게 택시를 섞는 편이 시간을 아낍니다.",
    },
    {
      label: "권역 기준점",
      value: "시먼딩 / 싼충 / 린커우",
      note: "사용자가 준 지도 좌표를 기준으로 하루 권역을 나눴습니다. 첫째 날은 완화, 둘째 날은 싼충과 다다오청, 셋째 날은 린커우 축입니다.",
    },
    {
      label: "예산 감각",
      value: "1인 약 75만~170만원",
      note: "항공, 3박 숙소, 현지 식비, 교통 포함 기준입니다. 환율은 1 TWD 약 45 KRW 안팎으로 계산했습니다.",
    },
    {
      label: "문체 원칙",
      value: "한국어 설명 + 영어 표기",
      note: "이 페이지는 한국인을 위한 가이드라서 중국어 표기는 넣지 않았고, 현장 검색용으로만 영어 명칭을 병기했습니다.",
    },
  ],
  itinerary: [
    {
      dayIndex: "Day 1",
      title: "시먼딩 체크인 + 완화 올드타운 워밍업",
      summary:
        "첫째 날 좌표는 시먼딩 한복판입니다. 입국 직후 무리하게 명소를 많이 넣지 말고, 시먼딩에 짐을 풀고 완화 올드타운만 한 바퀴 도는 편이 체력과 몰입감 둘 다 좋습니다.",
      mapUrl:
        "https://www.google.com/maps/@25.0433721,121.5077092,15z/data=!4m2!11m1!2svQ2Px46INdlCQ3Fr6XCWdw?entry=ttu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/%E5%BE%9E%E5%B1%88%E8%87%A3%E6%B0%8F%E8%A5%BF%E9%96%80%E9%96%80%E5%B8%82%E5%88%B0%E9%8C%A2%E6%AB%83%E5%8F%B0%E5%8C%97%E4%B8%AD%E8%8F%AF%E6%96%B0%E9%A4%A8_20211204.jpg/1200px-%E5%BE%9E%E5%B1%88%E8%87%A3%E6%B0%8F%E8%A5%BF%E9%96%80%E9%96%80%E5%B8%82%E5%88%B0%E9%8C%A2%E6%AB%83%E5%8F%B0%E5%8C%97%E4%B8%AD%E8%8F%AF%E6%96%B0%E9%A4%A8_20211204.jpg",
      imageAlt: "시먼딩 거리 풍경",
      tags: ["시먼딩", "완화", "첫날 저강도", "야간 쇼핑"],
      stops: [
        {
          time: "13:00-15:00",
          title: "타오위안 공항 도착 -> Airport MRT로 시내 진입",
          description:
            "공항에서 EasyCard와 eSIM 또는 유심을 정리한 뒤 Express 열차로 A1 Taipei Main까지 이동합니다. 공항철도 구간 자체는 약 35분대라 빠르지만, 수하물 찾기와 환승까지 합치면 시먼딩 체크인까지는 1시간 30분 정도로 잡는 편이 안전합니다.",
        },
        {
          time: "15:20-16:20",
          title: "시먼딩 숙소 체크인 + The Red House 주변 적응",
          description:
            "첫 좌표가 시먼딩 중심이라 숙소를 이 권역에 두면 동선이 가장 안정적입니다. The Red House 주변은 골목 분위기 파악과 첫 환전에 좋고, 밤에 다시 돌아오기도 쉬워서 첫 산책 코스로 적합합니다.",
        },
        {
          time: "16:40-18:20",
          title: "Bopiliao Historic Block -> Mengjia Longshan Temple",
          description:
            "도보만으로 버거우면 택시 10분 내외로 내려가세요. Bopiliao는 붉은 벽돌 골목과 아케이드가 남아 있어 사진이 잘 나오고, 이어지는 Longshan Temple은 타이베이 남서부의 오래된 분위기를 가장 압축해서 보여줍니다.",
        },
        {
          time: "18:30-20:00",
          title: "Huaxi Street 저녁: Wang's Broth 또는 Yuan Fang Guabao",
          description:
            "Longshan Temple 근처에서 저녁을 먹고 돌아오는 루트가 가장 매끈합니다. Wang's Broth는 따뜻한 국물과 브레이즈드 포크 조합이 강점이고, Yuan Fang Guabao는 한 끼를 너무 무겁게 먹기 싫을 때 적합합니다.",
        },
        {
          time: "20:20-22:30",
          title: "시먼딩 야간 산책 + 기념품 쇼핑 + 길거리 간식",
          description:
            "Ximending은 밤이 되어야 진짜 밀도가 올라갑니다. 화장품, 편집숍, 드럭스토어, 캐릭터 굿즈를 한 번에 처리하고, 간식은 Ay-Chung Flour-Rice Noodle처럼 줄이 빠르게 빠지는 집으로 짧게 끊는 편이 첫날 리듬에 맞습니다.",
        },
      ],
    },
    {
      dayIndex: "Day 2",
      title: "싼충 강변 + 다다오청 + 닝샤 야시장",
      summary:
        "둘째 날 좌표는 싼충구입니다. 아침은 강변 공원으로 가볍게 시작하고, 이후 Taipei Bridge를 넘어 Dihua Street와 Dadaocheng으로 이어지면 신베이와 타이베이의 결이 하루 안에 자연스럽게 연결됩니다.",
      mapUrl:
        "https://www.google.com/maps/@25.0821031,121.4965931,13z/data=!4m2!11m1!2sGD2U7aCIVXxtcnt6ViJJLA?entry=ttu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Buildings_along_Dihua_Street_07.23_%282%29.jpg/1200px-Buildings_along_Dihua_Street_07.23_%282%29.jpg",
      imageAlt: "다다오청과 디화제 거리 풍경",
      tags: ["싼충", "다다오청", "강변 노을", "야시장"],
      stops: [
        {
          time: "09:00-10:20",
          title: "New Taipei Metropolitan Park 산책",
          description:
            "둘째 날은 아침 공기 좋을 때 강변 공원부터 여는 편이 좋습니다. 공원이 넓어서 전부 돌 생각보다, 1시간 남짓 산책하며 몸을 푸는 정도로 끊고 다음 동선으로 넘어가는 것이 일정 전체 밸런스에 맞습니다.",
        },
        {
          time: "11:00-13:00",
          title: "Taipei Bridge 건너기 -> Dihua Street 브런치와 쇼핑",
          description:
            "싼충 쪽 로컬 무드에서 Dadaocheng 상업지구로 넘어가는 전환 구간입니다. Dihua Street는 말린 과일, 차, 포장 선물, 생활 잡화가 밀집해 있어 한국으로 가져갈 소소한 기념품을 이때 정리해 두면 마지막 날이 훨씬 편합니다.",
        },
        {
          time: "13:10-14:00",
          title: "Taipei Xia-Hai City God Temple 짧은 방문",
          description:
            "Dihua Street 안쪽에 있어 동선이 거의 늘어나지 않습니다. 내부 체류 시간은 길지 않지만, 오래된 상업지구의 신앙 공간을 보는 재미가 있어 다다오청 이해도가 확 올라갑니다.",
        },
        {
          time: "14:10-16:20",
          title: "카페 휴식 또는 찻집 체류",
          description:
            "둘째 날은 걷는 시간이 길어질 수 있으니 중간 휴식이 중요합니다. 다다오청 안쪽에서 차나 커피를 한 번 넣고, 선물 쇼핑이 남아 있으면 이 구간에서 마무리하세요.",
        },
        {
          time: "16:40-18:00",
          title: "Dadaocheng Wharf 노을 보기",
          description:
            "강가 바람이 불고 일몰 색감이 좋아서 둘째 날 하이라이트로 넣기 좋습니다. 자전거를 타지 않아도 강변 산책만으로 충분하고, 사진은 해가 완전히 떨어지기 전 30분 정도가 가장 안정적으로 나옵니다.",
        },
        {
          time: "18:20-20:30",
          title: "Ningxia Night Market 저녁",
          description:
            "푸드 라인이 촘촘하게 몰려 있어 한 끼를 시장 전체로 먹는 방식에 적합합니다. 사람이 가장 몰리기 전인 18시대에 들어가면 회전이 빠르고, 굴 오믈렛이나 토란 디저트처럼 대표 메뉴를 두세 개만 골라 담아도 만족도가 높습니다.",
        },
        {
          time: "21:00 이후",
          title: "체력 남으면 Sanhe Night Market 선택",
          description:
            "로컬 비중이 더 높은 분위기를 원하면 싼충 쪽으로 다시 넘어가 Sanhe Night Market을 짧게 넣을 수 있습니다. 다만 같은 날 야시장 2곳은 과식으로 이어지기 쉬우니 Ningxia에서 충분히 먹었다면 과감히 생략하는 편이 좋습니다.",
        },
      ],
    },
    {
      dayIndex: "Day 3",
      title: "린커우 회복형 일정 + 쇼핑 + 귀국 준비",
      summary:
        "셋째 날 좌표는 린커우 권역입니다. 도심 관광을 하나 더 욱여넣는 대신 Airport MRT 축으로 이동해 마지막 밤의 체력을 남기고, 쇼핑과 실내 동선을 섞어 귀국 전날답게 리듬을 낮춘 구성이 효율적입니다.",
      mapUrl:
        "https://www.google.com/maps/@25.1133753,121.3846755,12z/data=!4m2!11m1!2s-FueY7f1ubMLds77PsglGw?entry=ttu",
      image:
        "https://newtaipei.travel/content/images/attractions/38856/1920x1080_attractions-image-98jk2kap-ee872ss25z8aq.jpg",
      imageAlt: "Mitsui Outlet Park Linkou 전경",
      tags: ["린커우", "공항철도", "쇼핑", "귀국 전날"],
      stops: [
        {
          time: "10:00-10:40",
          title: "Airport MRT로 A9 Linkou 이동",
          description:
            "타이베이 메인역 또는 A1 Taipei Main에서 출발하면 공항철도 축으로 쉽게 붙습니다. 공항 접근 동선을 미리 경험하는 날이라 생각하면 마지막 날 심리적 부담이 많이 줄어듭니다.",
        },
        {
          time: "10:40-13:30",
          title: "Mitsui Outlet Park Linkou 쇼핑과 커피",
          description:
            "린커우의 메인 체류지는 사실상 이곳입니다. 대형 브랜드 쇼핑보다도, 마지막 선물과 운동화, 생활용품을 한 번에 정리하기 좋고 실내외가 섞여 있어서 날씨 영향을 덜 받습니다.",
        },
        {
          time: "13:30-14:50",
          title: "The Eatery 또는 아울렛 내 점심",
          description:
            "쇼핑 중간 식사는 안전하게 가져가는 편이 좋습니다. 일정이 늘어지면 The Eatery처럼 좌석이 안정적인 곳이 유리하고, 시간을 아끼고 싶으면 아울렛 안에서 바로 해결해도 무방합니다.",
        },
        {
          time: "15:10-16:10",
          title: "Zhulinshan Guanyin Temple",
          description:
            "린커우에서 완전히 쇼핑 일색으로 끝내기 아쉬울 때 넣기 좋은 포인트입니다. 장식 밀도가 높고 사진 포인트가 분명해서 체류 시간은 짧아도 기억에 남는 구간이 됩니다.",
        },
        {
          time: "16:30-18:00",
          title: "National Archives 또는 실내 카페 휴식",
          description:
            "비가 오거나 너무 피곤하면 이 구간은 실내 대체 동선으로 생각하면 됩니다. 마지막 밤은 무리해서 명소를 더 넣기보다 짐 정리와 면세 구매 리스트 확인 시간을 확보하는 편이 훨씬 낫습니다.",
        },
        {
          time: "18:30 이후",
          title: "숙소 복귀와 짐 정리",
          description:
            "다음 날이 이른 비행이면 이 날 밤 숙소를 A8 Chang Gung Memorial Hospital 또는 A9 Linkou로 옮기는 선택지가 강합니다. 반대로 오후 출국이면 시내 숙소를 유지하고 돌아와도 무리가 없습니다.",
        },
      ],
    },
    {
      dayIndex: "Day 4",
      title: "귀국일: 마지막 한 끼와 공항 이동",
      summary:
        "귀국일은 명소를 넣기보다 리스크를 지우는 날입니다. 체크아웃, 공항철도, 수하물, 면세 대기 시간을 반영하면 실제 자유시간은 생각보다 길지 않으니, 마지막 한 끼만 확실하게 챙기는 편이 낫습니다.",
      mapUrl: "https://www.tymetro.com.tw/tymetro-new/en/index.php",
      image:
        "https://newtaipei.travel/content/images/shops/16112/1024x768_a7da26ce-7faf-456b-9cb6-5858dfd5adbe.jpg",
      imageAlt: "출국 전 마지막 식사 예시 이미지",
      tags: ["체크아웃", "Airport MRT", "수하물 여유", "마지막 쇼핑"],
      stops: [
        {
          time: "출발 4-4.5시간 전",
          title: "호텔 체크아웃과 짐 정리 완료",
          description:
            "시내 숙소면 공항철도역 이동과 수하물 드래그 시간이 더 들어가므로 4시간 이상 여유를 두는 편이 맞습니다. 린커우나 A8 쪽 숙소면 공항 접근이 쉬워 30분 정도 더 여유가 생깁니다.",
        },
        {
          time: "출발 3-3.5시간 전",
          title: "Airport MRT 탑승",
          description:
            "Taipei Main 출발이면 역 내부 동선이 길어 생각보다 시간이 빨리 갑니다. 표를 다시 끊기보다 EasyCard 잔액을 확인하고 바로 들어가는 편이 가장 단순합니다.",
        },
        {
          time: "출발 2.5시간 전",
          title: "체크인, 수하물, 보안검색",
          description:
            "3박 4일 일정은 쇼핑품과 간식이 늘어나기 쉬워 수하물 정리 시간이 꽤 걸립니다. 올 때보다 짐이 무거워질 확률이 높으니, 셋째 날 밤에 이미 가방 배치를 끝내 두는 것이 좋습니다.",
        },
        {
          time: "남는 시간",
          title: "공항 또는 도심 마지막 소비",
          description:
            "오후 출국이라 도심 여유가 남는 경우에는 Taipei Main Underground Mall이나 시먼딩에서 마지막 쇼핑을 짧게 끝내고 이동하세요. 아침 비행이면 무리해서 도시 일정을 추가하지 않는 편이 전체 만족도가 높습니다.",
        },
      ],
    },
  ],
  food: [
    {
      type: "첫날 저녁",
      name: "Wang's Broth",
      description:
        "Longshan Temple 근처에서 바로 이어 먹기 좋은 집입니다. 미쉐린 Bib Gourmand 2025 기준으로 소개되고 있고, 따뜻한 국물과 브레이즈드 포크 계열이 강해서 첫날 저녁에 실패 확률이 낮습니다.",
      image:
        "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/5b9ea75825ef403aa2dc62be90cdcc6b.jpg?width=1000",
      imageAlt: "Wang's Broth 대표 이미지",
      meta: ["완화", "1인 100-250 TWD", "MICHELIN Bib 2025", "Longshan Temple 인접"],
    },
    {
      type: "첫날 가벼운 추가식",
      name: "Yuan Fang Guabao",
      description:
        "첫날 저녁을 너무 무겁게 먹기 싫을 때 좋은 선택지입니다. 부드러운 번 사이에 졸인 돼지고기가 들어가고, 시장 동선 사이에서 빠르게 먹고 다시 움직이기 좋습니다.",
      image:
        "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/57ab0defed67482dbdcd9e3558ba57c1.jpeg?width=1000",
      imageAlt: "Yuan Fang Guabao 대표 이미지",
      meta: ["완화", "1인 80-160 TWD", "MICHELIN Bib 2025", "짧은 체류형"],
    },
    {
      type: "둘째 날 메인 디너",
      name: "Ningxia Night Market",
      description:
        "관광객과 로컬 모두에게 검증된 저녁 카드입니다. 음식 선택지가 좁게 밀집해 있어 여러 메뉴를 짧게 나눠 먹기 좋고, 다다오청에서 넘어오는 흐름이 매우 자연스럽습니다.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ningxia_Night_Market_20250520.jpg/1200px-Ningxia_Night_Market_20250520.jpg",
      imageAlt: "닝샤 야시장 전경",
      meta: ["다퉁", "1인 200-400 TWD", "현금 유리", "18:30 이전 입장 추천"],
    },
    {
      type: "둘째 날 로컬 옵션",
      name: "Sanhe Night Market",
      description:
        "싼충에 남아 있는 로컬 무드를 더 보고 싶을 때 넣는 보조 카드입니다. 관광지 느낌이 덜하고 실제 생활권 야시장에 가까워, Taipei Bridge 건너기 전후로 취향에 따라 선택하면 됩니다.",
      image:
        "https://newtaipei.travel/content/images/attractions/1675/1920x1080_4a49915c-6744-4d0f-aa4b-6b40f2ee6a8c.jpg",
      imageAlt: "산허 야시장 전경",
      meta: ["싼충", "1인 150-300 TWD", "로컬 비중 높음", "야식용 적합"],
    },
    {
      type: "셋째 날 안정형 식사",
      name: "The Eatery",
      description:
        "린커우 일정의 핵심은 마지막 날 컨디션을 남기는 것입니다. The Eatery는 좌석, 동선, 청결도가 안정적이라 피곤한 저녁에 가장 무난한 선택이고, 우천 시 대체 카드로도 좋습니다.",
      image:
        "https://newtaipei.travel/content/images/shops/16112/1024x768_a7da26ce-7faf-456b-9cb6-5858dfd5adbe.jpg",
      imageAlt: "The Eatery 대표 이미지",
      meta: ["린커우", "예산 중상", "실내 좌석 안정적", "마지막 밤 추천"],
    },
    {
      type: "셋째 날 디저트",
      name: "Linkou Power Plant popsicles",
      description:
        "린커우 쪽에서 너무 무겁지 않은 간식을 원할 때 좋은 선택입니다. 이름과 분위기가 독특해서 짧게 들르기 좋고, 한낮 더위를 식히는 용도로도 효율적입니다.",
      image:
        "https://newtaipei.travel/content/images/shops/12597/1024x768_13772bb0111000009450.jpg",
      imageAlt: "Linkou Power Plant popsicles 대표 이미지",
      meta: ["린커우", "가벼운 간식", "짧은 체류형", "사진 포인트"],
    },
  ],
  tips: [
    {
      category: "숙소 전략",
      title: "시먼딩 2박 + 마지막 밤 선택 전환이 가장 실전적",
      description:
        "첫째 날과 둘째 날은 시먼딩이나 Taipei Main 권역이 가장 편합니다. 다만 귀국 비행이 이르면 마지막 밤만 A8 또는 A9로 옮기면 공항 이동 스트레스가 크게 줄어듭니다.",
    },
    {
      category: "교통",
      title: "Airport MRT는 첫날과 마지막 날 둘 다 축으로 잡기",
      description:
        "이 일정은 Airport MRT를 공항 이동 수단이 아니라 여행 전체의 백본으로 씁니다. 셋째 날 린커우에 미리 가 보는 이유도 마지막 날 동선을 몸으로 익히기 위해서입니다.",
    },
    {
      category: "결제",
      title: "야시장과 작은 상점은 현금 비중을 더 높게",
      description:
        "카드가 되는 곳이 점점 늘고 있지만 야시장과 오래된 상점은 아직 현금이 편한 경우가 많습니다. 하루 1,000 TWD 안팎의 현금을 따로 빼 두면 식사 때 훨씬 수월합니다.",
    },
    {
      category: "먹거리",
      title: "한 곳에서 배부르게보다 여러 곳을 짧게 끊는 편이 유리",
      description:
        "타이베이 여행은 한 끼를 완성형 식당 하나로 끝내기보다, 메인 식사와 간식을 나눠 먹을 때 만족도가 높습니다. 특히 Ximending과 야시장 구간은 이 방식이 더 잘 맞습니다.",
    },
    {
      category: "우천 대비",
      title: "비 오면 셋째 날 만족도가 오히려 높아질 수 있음",
      description:
        "비 오는 날 도심 골목과 강변은 피로도가 올라가지만, Linkou 아울렛과 실내 식사는 타격이 적습니다. 우천 예보가 강하면 둘째 날과 셋째 날 순서를 바꾸는 것도 충분히 합리적입니다.",
    },
    {
      category: "언어",
      title: "중국어 없이도 영어 이름과 지도 링크면 충분",
      description:
        "기사와 가이드는 한국어로 보되, 현장 검색은 영어 명칭으로 처리하면 됩니다. 택시나 지도 앱에서는 Ximending, Longshan Temple, Dadaocheng Wharf 같은 영어 표기가 가장 실용적입니다.",
    },
  ],
  budget: [
    {
      tier: "가볍게",
      total: "약 75만-90만원",
      breakdown: [
        { label: "항공", value: "22만-30만원" },
        { label: "숙소 3박", value: "24만-33만원" },
        { label: "식비", value: "12만-16만원" },
        { label: "교통/통신", value: "4만-6만원" },
        { label: "간식/입장", value: "5만원 내외" },
      ],
    },
    {
      tier: "표준",
      total: "약 100만-125만원",
      breakdown: [
        { label: "항공", value: "28만-40만원" },
        { label: "숙소 3박", value: "33만-48만원" },
        { label: "식비", value: "18만-25만원" },
        { label: "교통/카페", value: "6만-8만원" },
        { label: "소규모 쇼핑", value: "10만-15만원" },
      ],
    },
    {
      tier: "여유롭게",
      total: "약 135만-170만원",
      breakdown: [
        { label: "항공", value: "35만-50만원" },
        { label: "숙소 3박", value: "48만-75만원" },
        { label: "식비", value: "25만-35만원" },
        { label: "교통/택시", value: "8만-12만원" },
        { label: "쇼핑/마사지", value: "20만-35만원" },
      ],
    },
  ],
  sources: [
    {
      label: "Taipei Travel - Ximending",
      url: "https://www.travel.taipei/en/attraction/details/1694",
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
      label: "New Taipei Travel - New Taipei Metropolitan Park",
      url: "https://newtaipei.travel/en/attractions/detail/112088",
    },
    {
      label: "New Taipei Travel - Sanhe Night Market",
      url: "https://newtaipei.travel/en/attractions/detail/402199",
    },
    {
      label: "New Taipei Travel - Mitsui Outlet Park Linkou",
      url: "https://newtaipei.travel/en/attractions/detail/112984",
    },
    {
      label: "New Taipei Travel - Zhulinshan Guanyin Temple",
      url: "https://newtaipei.travel/en/attractions/detail/402184",
    },
    {
      label: "New Taipei Travel - National Archives",
      url: "https://newtaipei.travel/en/attractions/detail/403776",
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
      label: "Taoyuan Airport MRT",
      url: "https://www.tymetro.com.tw/tymetro-new/en/index.php",
    },
    {
      label: "MICHELIN - Wang's Broth",
      url: "https://guide.michelin.com/us/en/taipei-region/taipei/restaurant/hsiao-wang-steamed-minced-pork-with-pickles-in-broth",
    },
    {
      label: "MICHELIN - Yuan Fang Guabao",
      url: "https://guide.michelin.com/us/en/taipei-region/taipei/restaurant/yuan-fang-guabao",
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
  renderBudget();
  renderSources();
  initializeImageFallbacks();
}

renderGuidebook();
