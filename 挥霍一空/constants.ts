import { Item, Achievement, NewsHeadline, BadLuckEvent } from './types';

export const INITIAL_MONEY = 100000000000000000; // 100 Quadrillion

export const ITEMS: Item[] = [
  // --- Daily & Food (The tiny stuff) ---
  { id: '1', name: '快乐水 (可乐)', price: 1, icon: '🥤', category: 'food' },
  { id: '2', name: '巨无霸汉堡', price: 5, icon: '🍔', category: 'food' },
  { id: '3', name: '大杯拿铁', price: 8, icon: '☕', category: 'food' },
  { id: '4', name: '电影票', price: 15, icon: '🎟️', category: 'food' },
  { id: '5', name: '精装书', price: 25, icon: '📚', category: 'food' },
  { id: '6', name: '全套 3A 游戏', price: 70, icon: '🎮', category: 'tech' },
  { id: '7', name: 'AJ 运动鞋', price: 200, icon: '👟', category: 'food' },
  { id: '8', name: '猫屎咖啡 (一杯)', price: 80, icon: '🐈', category: 'food' },
  { id: '110', name: '一克黄金', price: 80, icon: '🪙', category: 'luxury' },
  { id: '120', name: 'WinRAR 正版授权', price: 30, icon: '🗜️', category: 'tech' },
  
  // --- Tech & Gadgets ---
  { id: '10', name: '最新款 iPhone', price: 1299, icon: '📱', category: 'tech' },
  { id: '11', name: '顶级游戏 PC', price: 5000, icon: '🖥️', category: 'tech' },
  { id: '12', name: '85寸 8K 电视', price: 8000, icon: '📺', category: 'tech' },
  { id: '13', name: '波士顿动力机器狗', price: 75000, icon: '🐕‍🦺', category: 'tech' },
  { id: '14', name: '比特币 (一枚)', price: 65000, icon: '₿', category: 'tech' },
  
  // --- Luxury & Misc ---
  { id: '20', name: '爱马仕柏金包', price: 20000, icon: '👜', category: 'luxury' },
  { id: '111', name: '雇佣"卧龙凤雏"', price: 200000, icon: '🤡', category: 'power' },
  { id: '21', name: '百达翡丽腕表', price: 150000, icon: '⌚', category: 'luxury' },
  { id: '22', name: '纯金马桶', price: 1000000, icon: '🚽', category: 'luxury' },
  { id: '23', name: '1962 法拉利 250 GTO', price: 48000000, icon: '🏎️', category: 'luxury' },
  { id: '24', name: '达芬奇《救世主》', price: 450000000, icon: '🖼️', category: 'luxury' },
  { id: '91', name: '完美医美整容', price: 200000000, icon: '💅', category: 'luxury' },
  { id: '112', name: '做局一个人', price: 5000000, icon: '🎭', category: 'power' },
  { id: '121', name: '私人夸夸团 (24小时)', price: 10000000, icon: '👏', category: 'luxury' },

  // --- Transport ---
  { id: '30', name: '特斯拉 Model S Plaid', price: 130000, icon: '🚗', category: 'transport' },
  { id: '113', name: '布加迪威龙', price: 2500000, icon: '🏎️', category: 'transport' },
  { id: '32', name: '私人直升机', price: 2000000, icon: '🚁', category: 'transport' },
  { id: '33', name: '湾流 G700 公务机', price: 75000000, icon: '✈️', category: 'transport' },
  { id: '34', name: '超级游艇 (带停机坪)', price: 300000000, icon: '🛥️', category: 'transport' },
  { id: '35', name: '私人 F-35 战斗机', price: 110000000, icon: '🛩️', category: 'power' },
  { id: '122', name: '重建泰坦尼克号(不沉版)', price: 2000000000, icon: '🚢', category: 'transport' },

  // --- Real Estate ---
  { id: '40', name: '私人岛屿', price: 5000000, icon: '🏝️', category: 'real-estate' },
  { id: '41', name: '法国酒庄', price: 15000000, icon: '🏰', category: 'real-estate' },
  { id: '42', name: '曼哈顿摩天大楼', price: 800000000, icon: '🏙️', category: 'real-estate' },
  { id: '43', name: '白金汉宫', price: 5000000000, icon: '💂', category: 'real-estate' },
  { id: '44', name: '在新西兰建个避难所', price: 8000000, icon: '🧟', category: 'real-estate' },
  { id: '123', name: '霍格沃茨魔法城堡', price: 100000000000, icon: '🏰', category: 'real-estate' },
  { id: '124', name: '给金字塔装观光电梯', price: 500000000000, icon: '🏗️', category: 'real-estate' },
  
  // --- Business & Power ---
  { id: '50', name: '超级碗广告 (30秒)', price: 7000000, icon: '🏈', category: 'abstract' },
  { id: '51', name: '制作一部好莱坞大片', price: 250000000, icon: '🎬', category: 'abstract' },
  { id: '52', name: 'NBA 球队', price: 4000000000, icon: '🏀', category: 'power' },
  { id: '53', name: 'SpaceX 发射任务', price: 67000000, icon: '🚀', category: 'tech' },
  { id: '54', name: '收购 Twitter (X)', price: 44000000000, icon: '🐦', category: 'tech' },
  { id: '115', name: '收购 TikTok', price: 150000000000, icon: '🤳', category: 'tech' },
  { id: '55', name: '迪士尼帝国', price: 200000000000, icon: '🏰', category: 'power' },
  { id: '56', name: '谷歌 (Alphabet)', price: 2000000000000, icon: '🔍', category: 'tech' },
  { id: '57', name: '苹果公司', price: 3000000000000, icon: '🍎', category: 'tech' },
  { id: '58', name: '买下Steam并让G胖数3', price: 10000000000, icon: '♨️', category: 'tech' },
  { id: '125', name: '让全世界静默一分钟', price: 5000000000000, icon: '🤫', category: 'power' },

  // --- Nation & Infrastructure ---
  { id: '60', name: '福特级航空母舰', price: 13000000000, icon: '🚢', category: 'power' },
  { id: '62', name: '举办奥运会', price: 20000000000, icon: '🏅', category: 'abstract' },
  { id: '63', name: '终结全球饥饿 (1年)', price: 40000000000, icon: '🌾', category: 'abstract' },
  { id: '64', name: '国际空间站', price: 150000000000, icon: '🛰️', category: 'tech' },
  { id: '66', name: '全球免费医疗 (1年)', price: 8000000000000, icon: '🏥', category: 'abstract' },
  { id: '92', name: '买下全球所有专利', price: 50000000000000, icon: '📜', category: 'abstract' },
  { id: '116', name: '消除所有犯罪', price: 50000000000000, icon: '⚖️', category: 'abstract' },

  // --- Sci-Fi, Abstract & The Future (The Big Spenders) ---
  { id: '70', name: '克隆你自己', price: 50000000, icon: '🧬', category: 'future' },
  { id: '114', name: '极度吸引异性', price: 8000000000, icon: '💘', category: 'future' },
  { id: '93', name: '完美基因改造', price: 5000000000, icon: '🧬', category: 'future' },
  { id: '71', name: '侏罗纪公园 (真实版)', price: 50000000000, icon: '🦖', category: 'future' },
  { id: '72', name: '月球度假村', price: 100000000000, icon: '🌕', category: 'future' },
  { id: '94', name: '复活任意一个人', price: 100000000000000, icon: '👼', category: 'future' } ,
  { id: '73', name: '火星地球化改造', price: 10000000000000, icon: '🪐', category: 'future' },
  { id: '74', name: '太空电梯', price: 6000000000000, icon: '🗼', category: 'future' },
  { id: '75', name: '购买整个互联网', price: 50000000000000, icon: '🌐', category: 'abstract' },
  { id: '76', name: '戴森球 (初级)', price: 100000000000000, icon: '☀️', category: 'future' },
  { id: '77', name: '全人类每人发10万美元', price: 800000000000000, icon: '💰', category: 'abstract' },
  { id: '78', name: '银河系星际舰队', price: 500000000000000, icon: '🚀', category: 'future' },
  { id: '128', name: '死星 (Death Star)', price: 40000000000000000, icon: '🌑', category: 'future' },
  
  // --- New Abstract / Meme Items ---
  { id: '80', name: '永久删除"周一"', price: 50000000000, icon: '📅', category: 'abstract' },
  { id: '81', name: '给太平洋加个盖', price: 20000000000000, icon: '🌊', category: 'abstract' },
  { id: '82', name: '全网屏蔽所有广告', price: 3000000000000, icon: '🚫', category: 'tech' },
  
  // --- Newly Added Requested Items ---
  { id: '88', name: '随心控制天气', price: 50000000000000, icon: '⛈️', category: 'future' },
  { id: '89', name: '开发《GTA 7》', price: 10000000000, icon: '🔫', category: 'tech' },
  { id: '90', name: '彻底攻克癌症', price: 10000000000000, icon: '💊', category: 'abstract' },
  { id: '87', name: '把云彩变成你的形状', price: 500000000, icon: '☁️', category: 'abstract' },
  { id: '126', name: '证明 "1+1=3"', price: 50000000000000, icon: '🧮', category: 'abstract' },
  { id: '127', name: '给南极洲装地暖', price: 200000000000000, icon: '♨️', category: 'future' },

  // --- Chinese Internet Memes ---
  { id: '101', name: '请全人类吃疯狂星期四', price: 80000000000, icon: '🍗', category: 'food' },
  { id: '103', name: '彻底消灭所有蚊子', price: 5000000000000, icon: '🦟', category: 'abstract' },
  { id: '107', name: '启动"流浪地球"计划', price: 60000000000000, icon: '🌍', category: 'future' },
  { id: '129', name: '买下《全职猎人》结局', price: 10000000000, icon: '✒️', category: 'abstract' },
];

export const ACHIEVEMENTS: Achievement[] = [
  // --- Original 11 ---
  {
    id: 'light-of-humanity',
    title: '人类之光',
    description: '购买了10次SpaceX发射任务。我们的征途是星辰大海！',
    icon: '🚀',
    condition: (cart) => (cart['53'] || 0) >= 10
  },
  {
    id: 'iron-man',
    title: '钢铁侠',
    description: '不仅有方舟反应堆（并不），还买了一架私人 F-35。',
    icon: '🦾',
    condition: (cart) => (cart['35'] || 0) >= 1
  },
  {
    id: 'sugar-rush',
    title: '糖尿病速通',
    description: '购买了超过 500 瓶快乐水。记得看牙医。',
    icon: '🥤',
    condition: (cart) => (cart['1'] || 0) >= 500
  },
  {
    id: 'internet-lord',
    title: '赛博领主',
    description: '买下了Twitter、TikTok、谷歌或整个互联网。你掌握了信息流。',
    icon: '🌐',
    condition: (cart) => (cart['54'] || 0) >= 1 || (cart['56'] || 0) >= 1 || (cart['115'] || 0) >= 1 || (cart['75'] || 0) >= 1
  },
  {
    id: 'time-traveler',
    title: '时间悖论',
    description: '购买了 "删除周一"。打工人的终极梦想！',
    icon: '⏳',
    condition: (cart) => (cart['80'] || 0) >= 1
  },
  {
    id: 'gamer-god',
    title: '头号玩家',
    description: '买下了Steam，或者为了玩游戏买了顶级PC和全套3A。',
    icon: '🎮',
    condition: (cart) => (cart['58'] || 0) >= 1 || ((cart['11'] || 0) >= 1 && (cart['6'] || 0) >= 100)
  },
  {
    id: 'peace-maker',
    title: '和平使者',
    description: '消除犯罪，终结饥饿，或者提供了免费医疗。诺贝尔和平奖给你了！',
    icon: '🕊️',
    condition: (cart) => (cart['63'] || 0) >= 1 || (cart['66'] || 0) >= 1 || (cart['116'] || 0) >= 1
  },
  {
    id: 'cat-lover',
    title: '猫奴至尊',
    description: '购买了超过 100 杯猫屎咖啡。',
    icon: '🐈',
    condition: (cart) => (cart['8'] || 0) >= 100
  },
  {
    id: 'lord-of-war',
    title: '战争之王',
    description: '拥有 3 艘航母和 20 架 F-35 战斗机。世界因你而颤抖。',
    icon: '🎖️',
    condition: (cart) => (cart['60'] || 0) >= 3 && (cart['35'] || 0) >= 20
  },
  {
    id: 'real-estate-mogul',
    title: '基建狂魔',
    description: '买了各种楼、岛屿和避难所。',
    icon: '🏗️',
    condition: (cart) => (cart['40'] || 0) >= 1 && (cart['42'] || 0) >= 1
  },
  {
    id: 'bio-hacker',
    title: '生物骇客',
    description: '克隆了 10 个自己，进行了基因改造，或消灭了蚊子。',
    icon: '🧬',
    condition: (cart) => (cart['70'] || 0) >= 10 || (cart['71'] || 0) >= 1 || (cart['93'] || 0) >= 1 || (cart['103'] || 0) >= 1
  },
  // --- Bulk Purchase Achievements (Qty >= 10) ---
  {
    id: 'think-tank',
    title: '顶级智囊团',
    description: '雇佣了10组以上"卧龙凤雏"。你的公司离倒闭不远了。',
    icon: '🤡',
    condition: (cart) => (cart['111'] || 0) >= 10
  },
  {
    id: 'mech-army',
    title: '机械飞升',
    description: '购买了50只以上波士顿机器狗。你正在组建私人军队？',
    icon: '🐕‍🦺',
    condition: (cart) => (cart['13'] || 0) >= 50
  },
  {
    id: 'many-faces',
    title: '千面之神',
    description: '进行了10次以上完美整容。现在连你亲妈都不认识你了。',
    icon: '🎭',
    condition: (cart) => (cart['91'] || 0) >= 10
  },
  {
    id: 'aquaman',
    title: '海王本王',
    description: '购买了10次"极度吸引异性"。鱼塘已经炸了。',
    icon: '🧜‍♂️',
    condition: (cart) => (cart['114'] || 0) >= 10
  },
  {
    id: 'necromancer',
    title: '亡灵天灾',
    description: '复活了10个以上的人。你是想拍《生化危机》现场版吗？',
    icon: '🧟‍♂️',
    condition: (cart) => (cart['94'] || 0) >= 10
  },
  {
    id: 'gta-dev',
    title: '给你爱之父',
    description: '资助开发了10次 GTA 7。R星感谢你的"重新定义重新定义"。',
    icon: '💿',
    condition: (cart) => (cart['89'] || 0) >= 10
  },
  {
    id: 'golden-butt',
    title: '黄金屁股',
    description: '拥有20个以上的纯金马桶。你的生活真的很......奢华。',
    icon: '🚽',
    condition: (cart) => (cart['22'] || 0) >= 20
  },
  {
    id: 'truman-show',
    title: '楚门秀导演',
    description: '给10个以上的人"做局"。全世界都是你的演员。',
    icon: '📹',
    condition: (cart) => (cart['112'] || 0) >= 10
  },
  {
    id: 'island-lord',
    title: '千岛之主',
    description: '买下了20座以上的私人岛屿。你现在的领土面积超过了某些国家。',
    icon: '🏝️',
    condition: (cart) => (cart['40'] || 0) >= 20
  },
  {
    id: 'uber-fleet',
    title: '滴滴打车',
    description: '拥有100辆特斯拉 Model S。准备去跑网约车吗？',
    icon: '🚕',
    condition: (cart) => (cart['30'] || 0) >= 100
  },
  // --- NEW ADDITIONAL ACHIEVEMENTS (Total > 30) ---
  {
    id: 'scholar',
    title: '私人图书馆',
    description: '购买了1000本以上的精装书。知识就是力量！',
    icon: '📖',
    condition: (cart) => (cart['5'] || 0) >= 1000
  },
  {
    id: 'tony-stark-real',
    title: '托尼·斯塔克',
    description: '拥有F-35战机、顶级PC和机器狗。你就是复仇者联盟。',
    icon: '🦸‍♂️',
    condition: (cart) => (cart['35'] || 0) >= 1 && (cart['11'] || 0) >= 1 && (cart['13'] || 0) >= 1
  },
  {
    id: 'bruce-wayne',
    title: '布鲁斯·韦恩',
    description: '拥有摩天大楼并消除了犯罪。哥谭市不需要蝙蝠侠，因为有你。',
    icon: '🦇',
    condition: (cart) => (cart['42'] || 0) >= 1 && (cart['116'] || 0) >= 1
  },
  {
    id: 'fast-food-king',
    title: '垃圾食品大亨',
    description: '购买了1000个汉堡、1000瓶可乐和疯狂星期四。',
    icon: '🍔',
    condition: (cart) => (cart['1'] || 0) >= 1000 && (cart['2'] || 0) >= 1000 && (cart['101'] || 0) >= 1
  },
  {
    id: 'dragon-hoard',
    title: '龙之贪婪',
    description: '拥有100克黄金和10个金马桶。你是一条喜欢亮闪闪东西的龙。',
    icon: '🐉',
    condition: (cart) => (cart['110'] || 0) >= 100 && (cart['22'] || 0) >= 10
  },
  {
    id: 'influencer-god',
    title: '社交牛逼症',
    description: '同时买下了Twitter和TikTok。现在没人能封你的号了。',
    icon: '📢',
    condition: (cart) => (cart['54'] || 0) >= 1 && (cart['115'] || 0) >= 1
  },
  {
    id: 'hermit-max',
    title: '社恐终极形态',
    description: '买下了岛屿、避难所，并让全世界静默。请勿打扰！',
    icon: '🏝️',
    condition: (cart) => (cart['40'] || 0) >= 1 && (cart['44'] || 0) >= 1 && (cart['125'] || 0) >= 1
  },
  {
    id: 'artist-patron',
    title: '文艺复兴',
    description: '买下了《救世主》并投资了电影。你很有品味。',
    icon: '🎨',
    condition: (cart) => (cart['24'] || 0) >= 1 && (cart['51'] || 0) >= 1
  },
  {
    id: 'star-wars',
    title: '帝国皇帝',
    description: '拥有死星和星际舰队。原力与你同在。',
    icon: '⚔️',
    condition: (cart) => (cart['128'] || 0) >= 1 && (cart['78'] || 0) >= 1
  },
  {
    id: 'god-complex',
    title: '上帝视角',
    description: '试图控制天气、复活死人或证明1+1=3。你在挑战造物主。',
    icon: '⚡',
    condition: (cart) => (cart['88'] || 0) >= 1 || (cart['94'] || 0) >= 1 || (cart['126'] || 0) >= 1
  },
  {
    id: 'matrix',
    title: '黑客帝国',
    description: '买下互联网，拥有100台PC，并给人"做局"。蓝药丸还是红药丸？',
    icon: '💊',
    condition: (cart) => (cart['75'] || 0) >= 1 && (cart['11'] || 0) >= 100 && (cart['112'] || 0) >= 1
  },
  {
    id: 'hogwarts-headmaster',
    title: '魔法校长',
    description: '买下了霍格沃茨和大量书籍。邓布利多对此表示赞赏。',
    icon: '🧙‍♂️',
    condition: (cart) => (cart['123'] || 0) >= 1 && (cart['5'] || 0) >= 100
  },
  {
    id: 'noah-ark',
    title: '诺亚方舟',
    description: '收集了机器狗、恐龙、猫咖啡（猫）和生物改造。',
    icon: '🚢',
    condition: (cart) => (cart['13'] || 0) >= 2 && (cart['71'] || 0) >= 1 && (cart['8'] || 0) >= 1
  },
  {
    id: 'speed-demon',
    title: '速度与激情',
    description: '拥有布加迪、法拉利、F1战斗机和特斯拉。只要够快，悲伤就追不上你。',
    icon: '🏎️',
    condition: (cart) => (cart['113'] || 0) >= 1 && (cart['23'] || 0) >= 1 && (cart['35'] || 0) >= 1 && (cart['30'] || 0) >= 1
  },
  {
    id: 'thanos',
    title: '灭霸转世',
    description: '拥有无限的权力（星际舰队+死星+控制天气）。只需要一个响指...',
    icon: '🧤',
    condition: (cart) => (cart['78'] || 0) >= 1 && (cart['128'] || 0) >= 1 && (cart['88'] || 0) >= 1
  }
];

export const NEWS_HEADLINES: NewsHeadline[] = [
  // General News
  { id: 'g1', text: '突发：亿万富翁无聊时会数原子打发时间' },
  { id: 'g2', text: '经济学家警告：钱太多可能导致手指抽筋' },
  { id: 'g3', text: '全球股市休市，因为没人买得起你的股票' },
  { id: 'g4', text: '科学家证实：这笔钱足够买下月球并改名为"月球Plus"' },
  { id: 'g5', text: '新研究显示，花钱是治疗无聊的最佳方案' },
  { id: 'g6', text: '火星殖民地开放预售，接受支票和灵魂' },
  { id: 'g7', text: '某富豪的钱包掉在地上，引发了里氏8.0级地震' },
  { id: 'g8', text: '福布斯排行榜宣布停更：因为"反正都是那一个人"' },
  
  // Item specific
  { id: 'i1', text: '突发：某神秘富豪买光了所有的快乐水，导致全球肥胖率下降', itemId: '1' },
  { id: 'i2', text: '苹果公司宣布被私人收购，新老板要求所有iPhone必须是三角形的', itemId: '57' },
  { id: 'i3', text: '推特更名！Logo变成了一只表情包里的狗', itemId: '54' },
  { id: 'i4', text: '白金汉宫易主！皇家卫队现在被迫跳广场舞', itemId: '43' },
  { id: 'i5', text: '周一被永久删除！全球生产力提升...0%？', itemId: '80' },
  { id: 'i6', text: '太平洋有了盖子！冲浪者表示非常困惑', itemId: '81' },
  { id: 'i7', text: 'Steam被收购！《半条命3》确认开发，预计3022年发售', itemId: '58' },
  { id: 'i8', text: '迪士尼被买下！米老鼠宣布退休去种田', itemId: '55' },
  { id: 'i9', text: '谷歌搜索现在只返回老板想让你看的内容', itemId: '56' },
  { id: 'i10', text: 'SpaceX 宣布火星是私有领地，禁止地球人入内', itemId: '53' },
  { id: 'i11', text: '纯金马桶引发下水道堵塞，维修工要求支付钻石作为工费', itemId: '22' },
  { id: 'i12', text: '恐龙复活！侏罗纪公园开业第一天就吃掉了律师', itemId: '71' },
  { id: 'i14', text: '全球饥饿问题解决！诺贝尔奖委员会电话被打爆', itemId: '63' },
  
  // New Headlines for new items
  { id: 'i15', text: '突发：撒哈拉沙漠突降暴雪，企鹅们表示"很满意"', itemId: '88' },
  { id: 'i16', text: 'GTA 7 终于发布！地图大小为真实地球 1:1 比例，加载需要500年', itemId: '89' },
  { id: 'i17', text: '癌症被攻克！全球医院宣布倒闭，改为大型电竞中心', itemId: '90' },
  { id: 'i18', text: '突发：现在每一次呼吸都需要支付专利费，因为你买下了所有专利', itemId: '92' },
  { id: 'i19', text: '娱乐头条：有人刚刚花巨资整容成了"JOJO画风"，并开始在街上摆姿势', itemId: '91' },
  { id: 'i20', text: '医学奇迹！有人复活了爱因斯坦，但他看到现在的TikTok后要求再次长眠', itemId: '94' },
  { id: 'i21', text: '突发：由于基因改造普及，现在人类平均身高达到3米，篮球架表示压力很大', itemId: '93' },
  
  // Meme Headlines
  { id: 'i22', text: '今日全人类免费吃肯德基！所有鸡都连夜坐火箭逃离了地球', itemId: '101' },
  { id: 'i24', text: '蚊子宣告灭绝！青蛙协会发起抗议游行', itemId: '103' },
  { id: 'i28', text: '流浪地球计划启动！大家请系好安全带，我们要去半人马座了', itemId: '107' },

  // Updated headlines for new requests
  { id: 'i30', text: '突发：有人买了一克黄金，网友评价："这是今天最正常的消费"', itemId: '110' },
  { id: 'i31', text: '招聘：某公司重金聘请了"卧龙凤雏"，股价在三秒内暴跌99%', itemId: '111' },
  { id: 'i32', text: '娱乐：布加迪威龙售罄！买家表示只是用来去楼下便利店买电池', itemId: '113' },
  { id: 'i33', text: '突发：犯罪率降至0%！超级英雄们集体失业去送外卖', itemId: '116' },
  { id: 'i34', text: '八卦：某神秘人物斥巨资购买了"魅力"，现在路灯看到他都会弯腰', itemId: '114' },
  { id: 'i35', text: '科技：TikTok被收购！新算法强制向全球用户推送猫咪跳舞视频', itemId: '115' },
  { id: 'i36', text: '惊悚：有人花了500万只为了给某人"做个局"，这简直是《楚门的世界》现实版', itemId: '112' },
  
  // Headlines for NEWEST batch
  { id: 'i40', text: '科技界震动：WinRAR公司CEO收到第一笔正版付费，激动晕倒', itemId: '120' },
  { id: 'i41', text: '社死现场：私人夸夸团对着空气鼓掌，路人以为遇到了行为艺术', itemId: '121' },
  { id: 'i42', text: '航海新闻：泰坦尼克2号启航，并在船头安装了反冰山激光炮', itemId: '122' },
  { id: 'i43', text: '魔法部通告：霍格沃茨已被麻瓜收购，现在黑魔法防御课改为"防诈骗讲座"', itemId: '123' },
  { id: 'i44', text: '考古噩梦：金字塔观光电梯投入使用，法老表示"太吵了睡不着"', itemId: '124' },
  { id: 'i45', text: '全球静默：世界安静了一分钟，内向患者表示这是生命中最美好的一刻', itemId: '125' },
  { id: 'i46', text: '数学危机：有人花钱证明了1+1=3，数学老师们集体辞职', itemId: '126' },
  { id: 'i47', text: '气候异常：南极洲装了地暖，企鹅们现在都穿夏威夷衬衫', itemId: '127' },
  { id: 'i48', text: '天文警告：那不是月亮...那是你的私人死星', itemId: '128' },
  { id: 'i49', text: '动漫界狂欢：富坚义博宣布复刊并日更10话，因为有人用钱把他埋了', itemId: '129' },

  // --- NEW ADDITIONAL HEADLINES FOR REACTIVITY ---
  { id: 'n1', text: '麦当劳宣布巨无霸指数失效，因为有人买光了所有汉堡', itemId: '2' },
  { id: 'n2', text: '全球显卡断货！因为某人要玩全套3A大作', itemId: '6' },
  { id: 'n3', text: '波士顿动力警告：机器狗群开始组织工会了', itemId: '13' },
  { id: 'n4', text: '比特币网络瘫痪！因为所有币都在一个钱包里不动了', itemId: '14' },
  { id: 'n5', text: '卢浮宫被买空！蒙娜丽莎现在挂在某人厕所里', itemId: '24' },
  { id: 'n6', text: '特斯拉自动驾驶AI觉醒，拒绝送老板去上班，只想去沙滩晒太阳', itemId: '30' },
  { id: 'n7', text: '太平洋某私人岛屿宣布独立，官方货币是"可乐瓶盖"', itemId: '40' },
  { id: 'n8', text: '法国红酒产量告急，因为有人把酒庄改成了葡萄汁工厂', itemId: '41' },
  { id: 'n9', text: '超级碗播放了30秒的黑屏广告，观众称之为"后现代艺术巅峰"', itemId: '50' },
  { id: 'n10', text: '好莱坞宣布罢工结束，因为某人出资拍了一部只有猫主演的电影', itemId: '51' },
  { id: 'n11', text: 'NBA总决赛比分惊人，因为裁判被要求必须穿着黄金哨子', itemId: '52' },
  { id: 'n12', text: '苏伊士运河再次堵塞！这次是因为私人航母在玩漂移', itemId: '60' },
  { id: 'n13', text: '奥委会宣布新增项目"花式撒钱"，目前只有一名参赛选手', itemId: '62' },
  { id: 'n14', text: '国际空间站挂牌出售，买家计划将其改造成太空火锅店', itemId: '64' },
  { id: 'n15', text: '全球医院爆满！不是因为生病，是因为大家都来领免费体检', itemId: '66' },
  { id: 'n16', text: '克隆人权利法案紧急起草中，因为某人复制了太多自己', itemId: '70' },
  { id: 'n17', text: '月球度假村差评如潮！游客抱怨没有大气层导致无法呼吸', itemId: '72' },
  { id: 'n18', text: '太空电梯开通！上班族抱怨通勤时间变长了，因为要坐3万公里的电梯', itemId: '74' },
  { id: 'n19', text: '互联网被买下！现在上网需要先看老板的自拍照', itemId: '75' },
  { id: 'n20', text: '天文学家惊恐发现太阳变暗了，原来是戴森球正在施工', itemId: '76' },
  { id: 'n21', text: '全球通货膨胀率达到10000%，因为每个人都发了10万美元', itemId: '77' },
  { id: 'n22', text: '银河联邦发来贺电，恭喜地球组建了第一支星际舰队', itemId: '78' },
  { id: 'n23', text: 'Youtube倒闭！因为全网广告被屏蔽，网红们被迫去工厂打螺丝', itemId: '82' },
  { id: 'n24', text: '气象局发布奇观预警：天空中出现了一个巨大的"点赞"形状云朵', itemId: '87' },
  { id: 'n25', text: '鞋狗崩溃！AJ价格崩盘，因为有人把限量款当拖鞋穿', itemId: '7' },
  { id: 'n26', text: 'F-35战机被用来送外卖，五角大楼表示强烈谴责', itemId: '35' },
  
  // --- NEWEST HEADLINES ---
  { id: 'n27', text: '森林造纸厂股价大涨，因为某人买了一座图书馆的书', itemId: '5' },
  { id: 'n28', text: '电影院爆米花销量归零，因为某人包下了所有场次却一个人看', itemId: '4' },
  { id: 'n29', text: '全球咖啡豆短缺，猫屎咖啡价格超过了黄金', itemId: '8' },
  { id: 'n30', text: 'F1赛事取消，因为所有赛道都被布加迪威龙堵住了', itemId: '113' },
  { id: 'n31', text: '黄金马桶引发哲学思考：既然是金的，冲水还有意义吗？', itemId: '22' },
  { id: 'n32', text: '犯罪分子宣布转行做直播，因为犯罪已经被彻底消除了', itemId: '116' },
  { id: 'n33', text: '霍格沃茨开学典礼混乱，因为分院帽被买家当成了睡帽', itemId: '123' },
  { id: 'n34', text: '死星试射误中卫星，导致全球GPS导航全部指向南极', itemId: '128' },
];

export const BAD_LUCK_EVENTS: BadLuckEvent[] = [
  { id: 'e1', title: '该死！股市大涨', description: '你随便买的垃圾股翻了1000倍。你的资产增加了！', amount: 500000000000, icon: '📈' },
  { id: 'e2', title: '意外遗产', description: '一个你从未见过的远房亲戚留给了你一个钻石矿。', amount: 20000000000, icon: '💎' },
  { id: 'e3', title: '彩票中奖', description: '你用来垫桌脚的彩票中了头奖。真倒霉！', amount: 500000000, icon: '🎟️' },
  { id: 'e4', title: '发现石油', description: '你在后院挖坑埋钱时挖到了石油。', amount: 1000000000000, icon: '🛢️' },
  { id: 'e5', title: '银行系统错误', description: '银行转账出错，把全球的零头都转给你了。', amount: 3000000000000, icon: '🏦' },
  { id: 'e6', title: '比特币暴涨', description: '你十年前买的硬盘找到了，里面有10万个比特币。', amount: 6000000000, icon: '₿' },
];