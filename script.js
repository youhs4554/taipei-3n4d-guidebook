const FALLBACK_IMAGE = "./assets/fallback-travel.svg";
const guidebookData = window.GUIDEBOOK_DATA;

function make(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

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

function createBadge(text, className = "badge") {
  return make("span", className, text);
}

function createSection({ eyebrow, title, description }) {
  const section = make("section", "page-section");
  const head = make("div", "section-head");

  if (eyebrow) {
    head.appendChild(make("p", "section-eyebrow", eyebrow));
  }
  if (title) {
    head.appendChild(make("h2", "", title));
  }
  if (description) {
    head.appendChild(make("p", "section-copy", description));
  }

  section.appendChild(head);
  return section;
}

function createImage(src, alt, className) {
  const image = make("img", className);
  image.src = src;
  image.alt = alt;
  image.dataset.fallback = FALLBACK_IMAGE;
  attachImageFallback(image);
  return image;
}

function createInfoCard(item) {
  const article = make("article", "info-card");
  article.appendChild(make("p", "info-label", item.label));
  article.appendChild(make("h3", "info-title", item.title || item.value));
  article.appendChild(make("p", "info-copy", item.note));
  return article;
}

function createShortcutCard(page) {
  const link = make("a", "shortcut-card");
  link.href = page.href;
  link.appendChild(make("p", "info-label", page.kicker));
  link.appendChild(make("h3", "info-title", page.navLabel));
  link.appendChild(make("p", "info-copy", page.summary));
  link.appendChild(make("span", "shortcut-arrow", "페이지 열기"));
  return link;
}

function createCallout(title, copy, badges = []) {
  const block = make("section", "callout");
  block.appendChild(make("p", "info-label", title));
  block.appendChild(make("p", "callout-copy", copy));

  if (badges.length) {
    const row = make("div", "badge-row");
    badges.forEach((badge) => row.appendChild(createBadge(badge)));
    block.appendChild(row);
  }

  return block;
}

function renderSidebar(pageId) {
  const sidebarSummary = document.querySelector("#sidebar-summary");
  const sidebarNav = document.querySelector("#sidebar-nav");
  const mobileNav = document.querySelector("#mobile-nav");
  const sidebarCallout = document.querySelector("#sidebar-callout");

  guidebookData.sidebarFacts.forEach((fact) => {
    const row = make("div", "sidebar-fact");
    row.appendChild(make("span", "sidebar-fact-label", fact.label));
    row.appendChild(make("strong", "sidebar-fact-value", fact.value));
    sidebarSummary.appendChild(row);
  });

  Object.values(guidebookData.pages).forEach((page) => {
    const desktopLink = make("a", "nav-link", page.navLabel);
    desktopLink.href = page.href;
    if (page.id === pageId) {
      desktopLink.classList.add("is-active");
    }
    sidebarNav.appendChild(desktopLink);

    const mobileLink = make("a", "mobile-link", page.navLabel);
    mobileLink.href = page.href;
    if (page.id === pageId) {
      mobileLink.classList.add("is-active");
    }
    mobileNav.appendChild(mobileLink);
  });

  sidebarCallout.appendChild(make("p", "info-label", "바로 기억할 것"));
  sidebarCallout.appendChild(
    make("p", "sidebar-callout-copy", "응급 119, 분실 110, 차량 문제는 프런트 먼저.")
  );
}

function renderPageHeader(page) {
  const pageHeader = document.querySelector("#page-header");
  pageHeader.appendChild(make("p", "page-kicker", page.kicker));
  pageHeader.appendChild(make("h1", "page-title", page.title));
  pageHeader.appendChild(make("p", "page-summary", page.summary));

  const chipRow = make("div", "badge-row");
  page.chips.forEach((chip) => chipRow.appendChild(createBadge(chip)));
  pageHeader.appendChild(chipRow);
}

function renderHome(pageBody) {
  pageBody.appendChild(
    createCallout(
      "이번 여행 톤",
      "관광 개수를 늘리기보다 쉬고 먹고 돌아오는 흐름을 유지하는 편이 두 사람 모두에게 더 잘 맞습니다.",
      ["하루 1권역", "택시 우선", "호텔 복귀 빠르게"]
    )
  );

  const quickSection = createSection({
    eyebrow: "Quick Look",
    title: "핵심만 먼저",
    description: "출발 직전에 다시 볼 만한 정보만 가장 앞에 모았습니다.",
  });
  const quickGrid = make("div", "card-grid card-grid-3");
  guidebookData.quickLook.forEach((item) => quickGrid.appendChild(createInfoCard(item)));
  quickSection.appendChild(quickGrid);
  pageBody.appendChild(quickSection);

  const baseSection = createSection({
    eyebrow: "Base",
    title: "여행 베이스",
    description: "이번 여행을 안정적으로 굴리는 데 필요한 고정 조건입니다.",
  });
  const baseGrid = make("div", "card-grid card-grid-3");
  guidebookData.overview.forEach((item) => baseGrid.appendChild(createInfoCard(item)));
  baseSection.appendChild(baseGrid);
  pageBody.appendChild(baseSection);

  const playbookSection = createSection({
    eyebrow: "Playbook",
    title: "운영 원칙",
    description: "현장에서 판단이 흔들릴 때 이 네 가지만 먼저 떠올리면 됩니다.",
  });
  const playbookGrid = make("div", "card-grid card-grid-2");
  guidebookData.homePlaybook.forEach((item) => playbookGrid.appendChild(createInfoCard(item)));
  playbookSection.appendChild(playbookGrid);
  pageBody.appendChild(playbookSection);

  const shortcutSection = createSection({
    eyebrow: "Pages",
    title: "페이지 바로 가기",
    description: "필요한 정보만 빠르게 열 수 있게 페이지를 나눴습니다.",
  });
  const shortcutGrid = make("div", "card-grid card-grid-2");
  Object.values(guidebookData.pages)
    .filter((page) => page.id !== "home")
    .forEach((page) => shortcutGrid.appendChild(createShortcutCard(page)));
  shortcutSection.appendChild(shortcutGrid);
  pageBody.appendChild(shortcutSection);
}

function createDayCard(day) {
  const article = make("article", "day-card");
  const header = make("div", "list-card-header");
  const titleBlock = make("div", "list-card-title");
  titleBlock.appendChild(make("p", "info-label", day.dayIndex));
  titleBlock.appendChild(make("h3", "", day.title));

  const mapLink = make("a", "map-link", "지도 보기");
  mapLink.href = day.mapUrl;
  mapLink.target = "_blank";
  mapLink.rel = "noreferrer noopener";

  header.appendChild(titleBlock);
  header.appendChild(mapLink);
  article.appendChild(header);

  const body = make("div", "thumb-card");
  body.appendChild(createImage(day.image, day.imageAlt, "thumb-image"));

  const content = make("div", "thumb-card-copy");
  content.appendChild(make("p", "info-copy", day.summary));

  const statRow = make("div", "stat-row");
  day.highlights.forEach((highlight) => {
    const stat = make("div", "stat-chip");
    stat.appendChild(make("span", "stat-label", highlight.label));
    stat.appendChild(make("strong", "stat-value", highlight.value));
    statRow.appendChild(stat);
  });
  content.appendChild(statRow);

  const quickList = make("ul", "quick-list");
  day.quickStops.forEach((stop) => quickList.appendChild(make("li", "", stop)));
  content.appendChild(quickList);

  const tagRow = make("div", "badge-row");
  day.tags.forEach((tag) => tagRow.appendChild(createBadge(tag, "badge badge-soft")));
  content.appendChild(tagRow);

  const details = make("details", "toggle-block");
  const summary = make("summary", "toggle-summary", `세부 동선 ${day.stops.length}개 보기`);
  details.appendChild(summary);

  const timeline = make("ul", "timeline");
  day.stops.forEach((stop) => {
    const item = make("li", "timeline-item");
    item.appendChild(make("time", "timeline-time", stop.time));
    item.appendChild(make("strong", "timeline-title", stop.title));
    item.appendChild(make("p", "timeline-copy", stop.description));
    timeline.appendChild(item);
  });
  details.appendChild(timeline);
  content.appendChild(details);

  body.appendChild(content);
  article.appendChild(body);

  return article;
}

function renderItinerary(pageBody) {
  pageBody.appendChild(
    createCallout(
      "일정 운영 기준",
      "오전은 느리게 시작하고, 오래 걸은 뒤에는 바로 앉아서 쉬는 흐름을 기본값으로 둡니다.",
      ["하루 1권역", "카페 버퍼", "3일차는 컨디션 우선"]
    )
  );

  const section = createSection({
    eyebrow: "Schedule",
    title: "Day 1-4",
    description: "기본 화면에서는 하루 요약과 핵심 순서만 보이고, 상세 타임라인은 펼쳐서 확인합니다.",
  });
  const list = make("div", "stack-list");
  guidebookData.itinerary.forEach((day) => list.appendChild(createDayCard(day)));
  section.appendChild(list);
  pageBody.appendChild(section);
}

function createFoodCard(place) {
  const article = make("article", "list-card");
  const body = make("div", "thumb-card");
  body.appendChild(createImage(place.image, place.imageAlt, "thumb-image"));

  const copy = make("div", "thumb-card-copy");
  copy.appendChild(make("p", "info-label", place.type));
  copy.appendChild(make("h3", "", place.name));
  copy.appendChild(make("p", "info-copy", place.description));

  const highlightRow = make("div", "badge-row");
  highlightRow.appendChild(createBadge(place.bestFor));
  highlightRow.appendChild(createBadge(place.caution, "badge badge-warn"));
  copy.appendChild(highlightRow);

  const metaRow = make("div", "badge-row");
  place.meta.forEach((entry) => metaRow.appendChild(createBadge(entry, "badge badge-soft")));
  copy.appendChild(metaRow);

  body.appendChild(copy);
  article.appendChild(body);
  return article;
}

function renderFood(pageBody) {
  pageBody.appendChild(
    createCallout(
      "먹는 방식",
      "줄이 길면 바로 전환하고, 양은 나눠 먹는 쪽이 혈당과 위장 모두에 더 안전합니다.",
      guidebookData.foodRules
    )
  );

  const section = createSection({
    eyebrow: "Places",
    title: "남겨둘 만한 식당",
    description: "호텔 복귀가 쉽고, 앉아서 천천히 먹기 쉬운 순서로 정리했습니다.",
  });
  const list = make("div", "stack-list");
  guidebookData.food.forEach((place) => list.appendChild(createFoodCard(place)));
  section.appendChild(list);
  pageBody.appendChild(section);
}

function createTipCard(tip) {
  const article = make("article", "info-card");
  article.appendChild(make("p", "info-label", tip.category));
  article.appendChild(make("h3", "info-title", tip.title));
  article.appendChild(make("p", "info-copy", tip.description));
  return article;
}

function renderTips(pageBody) {
  pageBody.appendChild(
    createCallout(
      "기본 원칙",
      "몸 상태가 흔들리기 시작하면 설명과 검색보다 먼저 자극을 줄이고, 앉아서 물과 간식을 챙기는 편이 맞습니다.",
      ["간식 먼저", "조용한 실내", "택시 우선"]
    )
  );

  const groupedTips = guidebookData.tips.reduce((groups, tip) => {
    if (!groups[tip.group]) {
      groups[tip.group] = [];
    }
    groups[tip.group].push(tip);
    return groups;
  }, {});

  Object.entries(groupedTips).forEach(([groupName, tips]) => {
    const section = createSection({
      eyebrow: "Tips",
      title: groupName,
      description:
        groupName === "몸 상태"
          ? "여행 중 바로 체감되는 컨디션 이슈를 먼저 정리했습니다."
          : "두 사람이 같이 움직일 때 피로를 줄이는 운영 팁입니다.",
    });
    const grid = make("div", "card-grid card-grid-2");
    tips.forEach((tip) => grid.appendChild(createTipCard(tip)));
    section.appendChild(grid);
    pageBody.appendChild(section);
  });
}

function createContactCard(contact) {
  const article = make("article", "contact-card");
  article.appendChild(make("p", "info-label", contact.label));
  article.appendChild(make("h3", "contact-value", contact.value));
  article.appendChild(make("p", "info-copy", contact.note));
  return article;
}

function createSafetyCard(card) {
  const article = make("article", "list-card");
  article.appendChild(make("p", "info-label", card.category));
  article.appendChild(make("h3", "", card.title));
  article.appendChild(make("p", "info-copy", card.description));

  const details = make("details", "toggle-block");
  details.appendChild(
    make("summary", "toggle-summary", `대응 순서 ${card.actions.length}단계 보기`)
  );

  const list = make("ul", "action-list");
  card.actions.forEach((action) => list.appendChild(make("li", "", action)));
  details.appendChild(list);
  article.appendChild(details);

  return article;
}

function renderSafety(pageBody) {
  pageBody.appendChild(
    createCallout(
      "위기 상황 기본 순서",
      "앉기 또는 눕기 -> 호텔 프런트 연결 -> 119 또는 110. 혼자 해결하려 들지 않는 쪽이 빠릅니다.",
      ["프런트 우선", "증상 기록", "보험 서류 챙기기"]
    )
  );

  const contactSection = createSection({
    eyebrow: "Contacts",
    title: "긴급 연락",
    description: "숫자와 역할만 기억해 두면 현장에서 판단이 빨라집니다.",
  });
  const contacts = make("div", "card-grid card-grid-4");
  guidebookData.emergencyContacts.forEach((contact) =>
    contacts.appendChild(createContactCard(contact))
  );
  contactSection.appendChild(contacts);
  pageBody.appendChild(contactSection);

  const safetySection = createSection({
    eyebrow: "Scenarios",
    title: "상황별 대응",
    description: "가장 흔하게 흔들릴 수 있는 상황만 남겼습니다.",
  });
  const list = make("div", "stack-list");
  guidebookData.safety.forEach((card) => list.appendChild(createSafetyCard(card)));
  safetySection.appendChild(list);
  pageBody.appendChild(safetySection);
}

function createBudgetCard(plan) {
  const article = make("article", "budget-card");
  article.appendChild(make("p", "info-label", plan.tier));
  article.appendChild(make("h3", "budget-total", plan.total));

  const list = make("ul", "budget-list");
  plan.breakdown.forEach((entry) => {
    const item = make("li", "budget-item");
    item.appendChild(make("span", "", entry.label));
    item.appendChild(make("strong", "", entry.value));
    list.appendChild(item);
  });
  article.appendChild(list);

  return article;
}

function renderBudget(pageBody) {
  pageBody.appendChild(
    createCallout(
      "예산 메모",
      "이미 공항 픽업과 샌딩이 확보된 만큼, 현지에서는 식비와 짧은 택시 비용을 넉넉히 보는 편이 현실적입니다.",
      guidebookData.budgetNotes
    )
  );

  const section = createSection({
    eyebrow: "Ranges",
    title: "1인 기준 예산 범위",
    description: "쇼핑 규모에 따라 차이가 커서, 기본 비용과 여유 비용을 나눠 보시는 편이 좋습니다.",
  });
  const grid = make("div", "card-grid card-grid-3");
  guidebookData.budget.forEach((plan) => grid.appendChild(createBudgetCard(plan)));
  section.appendChild(grid);
  pageBody.appendChild(section);
}

function renderFooter() {
  const footer = document.querySelector("#page-footer");
  footer.appendChild(make("p", "footer-copy", guidebookData.lastUpdated));
  footer.appendChild(make("p", "footer-copy", guidebookData.footerNote));

  const details = make("details", "footer-details");
  details.appendChild(make("summary", "toggle-summary", "출처 보기"));
  const list = make("ul", "source-list");
  guidebookData.sources.forEach((source) => {
    const item = make("li", "");
    const link = make("a", "source-link", source.label);
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    item.appendChild(link);
    list.appendChild(item);
  });
  details.appendChild(list);
  footer.appendChild(details);

  const backToTop = make("a", "back-to-top", "맨 위로");
  backToTop.href = "#top";
  footer.appendChild(backToTop);
}

function renderPage() {
  const pageId = document.body.dataset.page || "home";
  const page = guidebookData.pages[pageId];
  const pageBody = document.querySelector("#page-body");

  renderSidebar(pageId);
  renderPageHeader(page);

  if (pageId === "home") {
    renderHome(pageBody);
  } else if (pageId === "itinerary") {
    renderItinerary(pageBody);
  } else if (pageId === "food") {
    renderFood(pageBody);
  } else if (pageId === "tips") {
    renderTips(pageBody);
  } else if (pageId === "safety") {
    renderSafety(pageBody);
  } else if (pageId === "budget") {
    renderBudget(pageBody);
  }

  renderFooter();
}

renderPage();
