import {
  Binoculars,
  Brush,
  CalendarDays,
  Camera,
  Flower2,
  Footprints,
  Gift,
  Leaf,
  MapPinned,
  Palette,
  Sparkles,
  Sprout
} from "lucide-react";

export type FlowerSpot = {
  id: string;
  name: string;
  flower: string;
  season: string;
  position: [number, number];
  activities: string[];
  description: string;
};

export type WalkRoute = {
  id: string;
  title: string;
  path: string;
  flower: string;
  duration: string;
  mood: string;
  color: string;
};

export type BloomMonth = {
  month: string;
  flower: string;
  places: string[];
  description: string;
};

export type CollectionItem = {
  id: string;
  name: string;
  subtitle: string;
  story: string;
  material: string;
  colors: string[];
  accent: string;
};

export const introCards = [
  {
    title: "城市漫游",
    description: "以花卉为线索重组城市步行体验，把公园、街区和历史空间串联成柔和路线。",
    icon: Footprints
  },
  {
    title: "花期导航",
    description: "用月份、花种与盛放状态组织信息，让赏花从偶遇变成可以计划的城市日程。",
    icon: CalendarDays
  },
  {
    title: "美育体验",
    description: "从观察、记录到创作，鼓励市民在花卉中建立审美、自然知识和表达能力。",
    icon: Palette
  },
  {
    title: "文创互动",
    description: "将城市花卉转译为原创 IP 与收藏物，让一次漫步留下可被带走的品牌记忆。",
    icon: Gift
  }
];

export const flowerSpots: FlowerSpot[] = [
  {
    id: "yuyuantan",
    name: "玉渊潭公园",
    flower: "樱花",
    season: "3月下旬-4月中旬",
    position: [39.9163, 116.3185],
    activities: ["花卉写生", "摄影漫步"],
    description: "北京春季最具代表性的樱花观赏地之一，适合清晨或傍晚慢行。"
  },
  {
    id: "yuandadu",
    name: "元大都海棠花溪",
    flower: "海棠",
    season: "4月",
    position: [39.9792, 116.3941],
    activities: ["自然观察", "花色采集"],
    description: "海棠花带沿城市遗址展开，适合观察花色、枝形与社区绿化关系。"
  },
  {
    id: "botanical",
    name: "国家植物园",
    flower: "月季",
    season: "5月-6月",
    position: [39.9996, 116.2045],
    activities: ["植物识别", "花艺体验"],
    description: "植物资源丰富，可用于花卉识别、自然教育和花艺体验课程。"
  },
  {
    id: "olympic",
    name: "奥林匹克森林公园",
    flower: "四季花卉",
    season: "全年",
    position: [40.0154, 116.3883],
    activities: ["自然漫步", "摄影"],
    description: "大尺度城市绿地，适合长距离漫游、摄影和季相观察。"
  },
  {
    id: "tiantan",
    name: "天坛公园",
    flower: "古树花卉景观",
    season: "春夏秋",
    position: [39.8822, 116.4066],
    activities: ["古树观察", "建筑与植物速写"],
    description: "古建、古树和花卉景观共同构成具有北京气质的自然课堂。"
  }
];

export const routes: WalkRoute[] = [
  {
    id: "sakura",
    title: "樱花漫游线",
    path: "玉渊潭 → 北京动物园 → 紫竹院",
    flower: "樱花",
    duration: "半日",
    mood: "水岸、花影、春日轻风",
    color: "#F3D7D7"
  },
  {
    id: "begonia",
    title: "海棠漫游线",
    path: "元大都海棠花溪 → 北土城遗址公园",
    flower: "海棠",
    duration: "2小时",
    mood: "遗址、花溪、社区漫步",
    color: "#F7E0E0"
  },
  {
    id: "rose",
    title: "月季漫游线",
    path: "国家植物园 → 北京国际鲜花港",
    flower: "月季",
    duration: "一日",
    mood: "识花、花艺、园艺灵感",
    color: "#E7B7B9"
  },
  {
    id: "four-season",
    title: "四季花路",
    path: "春 樱花 · 夏 荷花 · 秋 菊花 · 冬 梅花",
    flower: "四季",
    duration: "全年",
    mood: "跟随花期更新城市记忆",
    color: "#9FB59A"
  }
];

export const bloomCalendar: BloomMonth[] = [
  {
    month: "3月",
    flower: "樱花",
    places: ["玉渊潭公园", "北京植物园"],
    description: "春天的第一条花路，适合摄影漫步和花瓣观察。"
  },
  {
    month: "4月",
    flower: "海棠",
    places: ["元大都海棠花溪", "陶然亭公园"],
    description: "花色柔和、枝形舒展，适合自然手账和花色采集。"
  },
  {
    month: "5月",
    flower: "月季",
    places: ["国家植物园", "北京国际鲜花港"],
    description: "城市园艺中最具亲和力的花卉之一，适合植物识别。"
  },
  {
    month: "6月",
    flower: "荷花",
    places: ["北海公园", "圆明园"],
    description: "水岸景观进入夏季状态，适合观察叶面、花形与倒影。"
  },
  {
    month: "9月",
    flower: "菊花",
    places: ["北海公园", "北京植物园"],
    description: "秋季花卉的色彩课堂，可结合传统文化与造型观察。"
  },
  {
    month: "12月",
    flower: "梅花",
    places: ["明城墙遗址公园", "香山公园"],
    description: "冬日花事更克制，适合寻找城市里的安静自然片段。"
  }
];

export const educationModules = [
  {
    title: "感知花",
    items: ["闻香", "观察", "记录"],
    description: "训练感官和观察力，从花色、气味、枝叶和生境开始认识植物。",
    icon: Binoculars
  },
  {
    title: "创作花",
    items: ["押花书签", "花瓣拼贴", "植物拓印", "自然手账"],
    description: "把赏花转化为材料实验和视觉表达，形成可收藏的学习成果。",
    icon: Brush
  },
  {
    title: "传播花",
    items: ["摄影挑战", "Flower Walk 打卡", "城市花卉护照"],
    description: "通过线上展览和线下打卡，让花卉知识在社群中流动。",
    icon: Camera
  }
];

export const aiRecommendations = [
  {
    keywords: ["周末", "海棠", "4月", "附近", "亲子"],
    place: "元大都海棠花溪",
    status: "盛花期",
    route: "海棠漫游线",
    activities: ["自然观察", "花瓣拓印"],
    reason: "步行尺度舒适，花带连续，适合周末轻量漫游。"
  },
  {
    keywords: ["樱花", "拍照", "摄影", "春天"],
    place: "玉渊潭公园",
    status: "观赏期",
    route: "樱花漫游线",
    activities: ["摄影漫步", "花卉写生"],
    reason: "水岸空间与樱花层次丰富，适合构图和光影观察。"
  },
  {
    keywords: ["月季", "识别", "花艺", "学习"],
    place: "国家植物园",
    status: "即将进入盛花期",
    route: "月季漫游线",
    activities: ["植物识别", "花艺体验"],
    reason: "植物资源集中，适合系统认识花卉品种。"
  }
];

export const collections: CollectionItem[] = [
  {
    id: "sakura-puff",
    name: "Sakura Puff",
    subtitle: "樱花团子",
    story: "圆滚滚的樱花精灵，头顶一枚柔软花瓣，像春天落进掌心。",
    material: "浅粉色毛绒质感 · 微笑表情 · Flower Walk Original",
    colors: ["#F8D5DA", "#FFF5F5", "#D6A9AF"],
    accent: "#F3D7D7"
  },
  {
    id: "haton",
    name: "Haton",
    subtitle: "海棠小漫",
    story: "浅粉白渐变的海棠小伙伴，用叶子手脚陪你走过城市花溪。",
    material: "海棠花造型 · 小叶子手脚 · 治愈系表情",
    colors: ["#F7E0E0", "#FFF9F4", "#9FB59A"],
    accent: "#F7E0E0"
  },
  {
    id: "rosie",
    name: "Rosie",
    subtitle: "月季绒球",
    story: "奶油粉色月季花球，可作为挂件，也可以成为花期护照的小守护。",
    material: "柔软绒球 · 挂件尺寸 · 原创月季 IP",
    colors: ["#F2C8C6", "#F8E8DE", "#C9959B"],
    accent: "#E7B7B9"
  }
];

export const navItems = [
  { label: "地图", href: "#map", icon: MapPinned },
  { label: "路线", href: "#routes", icon: Footprints },
  { label: "花期", href: "#calendar", icon: Flower2 },
  { label: "AI导览", href: "#ai", icon: Sparkles },
  { label: "文创", href: "#collection", icon: Sprout }
];
