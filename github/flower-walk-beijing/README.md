# Flower Walk Beijing

北京市城市花卉漫游与美育平台。项目包含城市赏花地图、花期导航、城市漫游路线、美育活动、AI 花卉导览 Mock 和原创文创衍生板块。

## 技术栈

- Next.js 15
- TypeScript
- Tailwind CSS
- Leaflet / React Leaflet
- Framer Motion
- Lucide Icons

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看页面。

## 主要结构

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  hero-section.tsx
  map-section.tsx
  flower-map.tsx
  routes-section.tsx
  calendar-section.tsx
  education-section.tsx
  ai-guide-section.tsx
  collection-section.tsx
data/
  flower-data.ts
```

## 交互

- 滚动渐显动画
- Hero 花瓣飘落与轻微视差
- Leaflet 地图 Marker 信息卡
- 横向路线卡片
- 可点击花期日历
- 本地 Mock AI 推荐
- 文创收藏本地保存
- 深浅色模式切换
- 响应式布局
