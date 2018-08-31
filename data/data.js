const data = {
  hotTags: ['日式料理', '早午餐', '沙拉', '燒烤', '漢堡', '輕食', '牛排', '生魚片', '關東煮', '平價'],
  news: [
    '今天吃飯，該吃什麼好呢？只要輸入美食欲望，立刻給你最真實、現場、生活化的評價，找餐廳再也不煩惱，就讓吃什麼，どっち幫你決定吃什麼！',
    '來自名古屋的早餐，Komeda coffee 鬆軟奶油吐司，南京松江站',
    '與小熊維尼的午茶約會！新宿「蜂蜜咖啡」限定登場',
    '七夕就是要浪漫一下！全台精選 10 家特色浪漫景觀餐廳',
  ],
  categories: [
    {
      id: 'bd3060eb-a952-4a5e-a4ec-b2cb91544786',
      className: 'rice-bowl',
      title: '中式',
      tag: '中式料理',
    },
    {
      id: '183bde18-13b3-420e-bdfe-f33d36c26d22',
      className: 'burger',
      title: '美式',
      tag: '美式料理',
    },
    {
      id: '4df916eb-6b84-4cd9-a3ba-aa80b89cb9f8',
      className: 'sushi',
      title: '日式',
      tag: '日式料理',
    },
    {
      id: '4830b325-3623-4a4e-88d5-91f879baa5e8',
      className: 'dim-sum',
      title: '港式',
      tag: '港式料理',
    },
    {
      id: '10283f0d-5e51-4503-8898-bef0d0e67dce',
      className: 'sashimi',
      title: '韓式',
      tag: '韓式料理',
    },
    {
      id: '007f4c15-4782-4560-b7c9-f5c91f4ae4bf',
      className: 'thai-food',
      title: '泰式',
      tag: '泰式料理',
    },
    {
      id: '15eedeed-0786-405d-bb8a-8e06596f6afe',
      className: 'spaguetti',
      title: '義式',
      tag: '義式料理',
    },
    {
      id: '2421f4e0-c479-4c0b-84f9-998b44a7aadd',
      className: 'croissant',
      title: '法式',
      tag: '法式料理',
    },
    {
      id: 'a25b7aa8-87b6-4ad3-8cc7-8529190ab006',
      className: 'curry',
      title: '印度',
      tag: '印度料理',
    },
    {
      id: '086f0866-1ed4-4d5d-836f-4b42ebaec24d',
      className: 'wok',
      title: '異國',
      tag: '異國料理',
    },
    {
      id: '76363331-4912-453c-ab98-4aba16dde936',
      className: 'buffet',
      title: '吃到飽',
      tag: '吃到飽',
    },
    {
      id: 'e34686f1-88b3-4219-b5fa-62d49a3a368e',
      className: 'beer',
      title: '酒吧',
      tag: '酒吧',
    },
    {
      id: '5cdce9c4-c9b5-425f-b62d-bdc903b56abd',
      className: 'grill',
      title: '燒烤',
      tag: '燒烤',
    },
    {
      id: '290a27f2-e3b6-4638-9857-7efbd06dece2',
      className: 'pot',
      title: '火鍋',
      tag: '火鍋',
    },
    {
      id: 'e64fe1f3-f627-4041-89e4-1e9ade3ada43',
      className: 'tray',
      title: '鐵板燒',
      tag: '鐵板燒',
    },
    {
      id: '84c0e0de-3e65-4ab9-bb9a-2f7433ea4a3c',
      className: 'cake-with-strawberry',
      title: '下午茶',
      tag: '下午茶',
    },
    {
      id: 'f3865f75-f4ed-431d-b130-b890b3be444f',
      className: 'lettuce',
      title: '素食',
      tag: '素食',
    },
    {
      id: '9011f22f-449c-459f-bd1b-6f2924adb39c',
      className: 'sandwich',
      title: '早午餐',
      tag: '早午餐',
    },
    {
      id: '01f558aa-ca2d-4ca2-add7-7ca945dba6e9',
      className: 'noodles',
      title: '小吃',
      tag: '小吃',
    },
    {
      id: 'bc41ee12-8b72-4bf4-9961-3919c302301b',
      className: 'breakfast',
      title: '簡餐',
      tag: '簡餐',
    },
    {
      id: '11ee2741-7a51-4907-93a4-e38a85bcbad6',
      className: 'toast',
      title: '烘焙糕點',
      tag: '烘焙糕點',
    },
    {
      id: 'c5a95896-c009-4af3-83df-aee304b84ea8',
      className: 'takeaway',
      title: '外帶',
      tag: '外帶',
    },
    {
      id: 'bea91673-c6b4-4ac3-87b4-b1b9258d9a3e',
      className: 'doll',
      title: '主題特色',
      tag: '主題特色',
    },
    {
      id: 'a3af7f04-5183-4e47-9905-8705469506d7',
      className: 'baby-boy',
      title: '親子友善',
      tag: '親子友善',
    },
    {
      id: 'e45de147-ab0a-4c26-a077-b23f03c3e51f',
      className: 'pets',
      title: '寵物友善',
      tag: '寵物友善',
    },
    {
      id: '4479113d-2297-45b8-9657-a35089d59504',
      className: 'orange-juice',
      title: '咖啡茶飲',
      tag: '飲品',
    },
    {
      id: '97c2e5f3-4397-4d47-b80f-88e62521c7f6',
      className: 'dinner-table',
      title: '其他',
      tag: '其他',
    },
  ],
  hotCategories: [
    {
      id: '1',
      className: 'sushi',
      title: '壽司',
      tag: '壽司',
    },
    {
      id: '2',
      className: 'sandwich',
      title: '早午餐',
      tag: '早午餐',
    },
    {
      id: '3',
      className: 'grill',
      title: '燒烤',
      tag: '燒烤',
    },
    {
      id: '4',
      className: 'burger',
      title: '漢堡',
      tag: '美式料理',
    },
    {
      id: '5',
      className: 'salad-bowl',
      title: '輕食',
      tag: '輕食',
    },
    {
      id: '6',
      className: 'steak',
      title: '牛排',
      tag: '牛排',
    },
    {
      id: '7',
      className: 'piece-of-cake',
      title: '甜點',
      tag: '甜點',
    },
    {
      id: '8',
      className: 'dim-sum',
      title: '港式小點',
      tag: '港式料理',
    },
    {
      id: '9',
      className: 'low-price',
      title: '平價',
      tag: '平價',
    },
    {
      id: '10',
      className: 'beer-bottles',
      title: '居酒屋',
      tag: '居酒屋',
    },
    {
      id: '11',
      className: 'coffee',
      title: '咖啡',
      tag: '咖啡',
    },
    {
      id: '12',
      className: 'thai-food',
      title: '泰國菜',
      tag: '泰式料理',
    },
    {
      id: '13',
      className: 'tea-cup',
      title: '茶',
      tag: '茶',
    },
    {
      id: '14',
      className: 'crab',
      title: '海鮮',
      tag: '海鮮',
    },
    {
      id: '15',
      className: 'fried-chicken',
      title: '炸雞',
      tag: '炸雞',
    },
    {
      id: '16',
      className: 'rice-bowl',
      title: '家常菜',
      tag: '家常菜',
    },
    {
      id: '17',
      className: 'lettuce',
      title: '素食',
      tag: '素食',
    },
    {
      id: '18',
      className: 'skewer',
      title: '串燒',
      tag: '串燒',
    },
    {
      id: '19',
      className: 'baking',
      title: 'DIY',
      tag: 'DIY',
    },
    {
      id: '20',
      className: 'spaguetti',
      title: '義大利麵',
      tag: '義式料理',
    },
    {
      id: '21',
      className: 'pot',
      title: '火鍋',
      tag: '火鍋',
    },
    {
      id: '22',
      className: 'doll',
      title: '主題特色',
      tag: '主題特色',
    },
    {
      id: '23',
      className: 'coupon',
      title: '優惠',
      tag: '優惠',
    },
    {
      id: '24',
      className: 'sprout',
      title: '季節限定',
      tag: '季節限定',
    },
    {
      id: '25',
      className: 'food-truck',
      title: '小販餐車',
      tag: '小販餐車',
    },
    {
      id: '26',
      className: 'champagne',
      title: '慶賀',
      tag: '慶賀',

    },
    {
      id: '27',
      className: 'baby-boy',
      title: '親子友善',
      tag: '親子友善',

    },
    {
      id: '28',
      className: 'pets',
      title: '寵物友善',
      tag: '寵物友善',

    },
    {
      id: '29',
      className: 'man-in-a-party-dancing-with-people',
      title: '多人',
      tag: '多人',

    },
    {
      id: '30',
      className: 'garage',
      title: '停車位',
      tag: '停車位',

    },
    {
      id: '31',
      className: 'pokecoin',
      title: '寶可夢',
      tag: '寶可夢',

    },
    {
      id: '32',
      className: 'train',
      title: '捷運沿線',
      tag: '捷運沿線',

    },
    {
      id: '33',
      className: 'superheroe-black',
      title: '漫畫',
      tag: '漫畫',

    },
    {
      id: '34',
      className: 'social-media',
      title: '拍照打卡',
      tag: '網紅',

    },
    {
      id: '35',
      className: 'sofa',
      title: '沙發',
      tag: '沙發',

    },
    {
      id: '996',
      className: 'movie',
      title: '桌邊服務',
      tag: '桌邊服務',
    },
    {
      id: '997',
      className: 'review',
      title: '特別推薦',
      tag: '特別推薦',
    },
    {
      id: '998',
      className: 'baker',
      title: '無菜單',
      tag: '無菜單',
    },
    {
      id: '999',
      className: 'delivery',
      title: '外送',
      tag: '外送',
    },
  ],
  hotTopics: [
    {
      id: '209b9815-911e-42c0-a501-6757d8c63c62',
      title: '一個人要吃什麼好？',
      link: '/tag?keyword=一個人',
    },
    {
      id: '96997512-6b97-4a5e-95cd-c7d588354a0a',
      title: '台北最適合約會的餐廳',
      link: '/tag?keyword=情人節大餐',
    },
    {
      id: '696cedc7-c4ea-4671-9c53-28897f3acb62',
      title: '怎麼吃才會瘦？秘訣在這裡',
      link: '/tag?keyword=瘦身',
    },
    {
      id: 'f7062e18-79f6-45b8-bb2b-9b883e347b15',
      title: '遛小孩的好去處！',
      link: '/tag?keyword=親子友善',
    },
    {
      id: '69a62d6f-d62e-41be-8bf5-089895c41dba',
      title: '不限時！和朋友歡聚暢聊不設限',
      link: '/tag?keyword=不限時',
    },
    {
      id: 'f70efa1f-df85-4f2b-83ee-24aeb3948396',
      title: '最適合工作的咖啡廳清單',
      link: '/tag?keyword=工作',
    },
    {
      id: '0ed42a1a-e55b-47c8-a939-ba81d381eaf4',
      title: '想找個地方開會？會議室出租',
      link: '/tag?keyword=會議室',
    },
    {
      id: 'e73418b4-b0f7-43bb-8381-355f2269900e',
      title: '寶可夢補給站！休息，充電和 Wifi',
      link: '/tag?keyword=寶可夢',
    },
    {
      id: 'bbd01354-88a2-4930-849e-66bf75c2d978',
      title: '超值會員卡大集合，辦了絕對不後悔',
      link: '/tag?keyword=會員卡',
    },
    {
      id: '0b664a52-fb2c-42e2-8e73-13e592ef6091',
      title: '無限漫畫看到飽',
      link: '/tag?keyword=漫畫',
    },
    {
      id: 'd91b94a8-7ff7-4377-b49b-1d9db14b51b4',
      title: '一起看足球賽，超大電視螢幕、啤酒',
      link: '/tag?keyword=足球',
    },
    {
      id: '056bfcdb-4b5c-4845-89b2-abfb0159cb2b',
      title: '你也可以當網紅！來這裡拍照打卡',
      link: '/tag?keyword=網紅',
    },
  ],
};

export default data;
