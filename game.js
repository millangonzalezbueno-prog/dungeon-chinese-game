// 罪孽地下城 · 语文七下 — Platformer Edition v5
'use strict';

/* =====================================================================
   QUESTION DATABASE  (6 floors × 9 questions + boss)
   ===================================================================== */
const DB = [
  {
    floor:1, name:'杰出人物', bossName:'邓稼先之魂', bossTitle:'两弹元勋',
    color:'#1a3a6e',
    questions:[
      {q:'邓稼先是哪个国家的核武器奠基人?', opts:['中国','美国','苏联','英国'], ans:0,
       note:'邓稼先是中国核武器研制的开拓者和奠基人'},
      {q:'《邓稼先》的作者是谁?', opts:['莫言','杨振宁','余光中','冰心'], ans:1,
       note:'杨振宁与邓稼先是老朋友，亲笔撰文纪念'},
      {q:'文中"鞠躬尽瘁"形容邓稼先的什么精神?', opts:['忠诚奉献','聪明才智','谦虚谨慎','勇敢无畏'], ans:0,
       note:'鞠躬尽瘁，死而后已——形容为国奉献、不辞劳苦'},
      {q:'闻一多在《最后一次讲演》中面对的威胁是什么?', opts:['战争','特务暗杀','洪水','贫困'], ans:1,
       note:'闻一多当天被国民党特务暗杀，此文是他最后的演讲'},
      {q:'"热情澎湃、慷慨激昂"是文中描写谁演讲风格的?', opts:['邓稼先','毛泽东','闻一多','鲁迅'], ans:2,
       note:'闻一多的演讲充满激情，义愤填膺，感人至深'},
      {q:'《说和做》记述的是哪位学者?', opts:['钱学森','邓稼先','闻一多','华罗庚'], ans:2,
       note:'臧克家写《说和做》，记叙闻一多先生"做"的精神'},
      {q:'《回忆鲁迅先生》的作者是哪位女作家?', opts:['冰心','萧红','张爱玲','林徽因'], ans:1,
       note:'萧红写了《回忆鲁迅先生》，描述鲁迅的日常生活点滴'},
      {q:'"横眉冷对千夫指，俯首甘为孺子牛"出自谁的诗?', opts:['毛泽东','鲁迅','闻一多','郭沫若'], ans:1,
       note:'这是鲁迅《自嘲》中的名句，体现了他的精神品格'},
      {q:'邓稼先在哪个地方秘密研制原子弹?', opts:['北京','上海','西北荒漠','云南'], ans:2,
       note:'邓稼先在人迹罕至的西北荒漠秘密工作了28年'},
    ]
  },
  {
    floor:2, name:'家国情怀', bossName:'黄河之魂', bossTitle:'民族脊梁',
    color:'#3d1a1a',
    questions:[
      {q:'《黄河颂》的词作者是谁?', opts:['冼星海','光未然','贺绿汀','聂耳'], ans:1,
       note:'光未然作词，冼星海谱曲，合称《黄河大合唱》'},
      {q:'《黄河颂》将黄河比喻成什么?', opts:['母亲','父亲','长城','巨龙'], ans:0,
       note:'黄河——中华民族的母亲河，哺育了无数子孙'},
      {q:'《最后一课》的故事发生在哪个国家?', opts:['中国','法国','德国','英国'], ans:1,
       note:'都德《最后一课》发生在普法战争后被割让的法国阿尔萨斯'},
      {q:'《最后一课》的主人公小弗朗士最后悔的事是什么?', opts:['没努力学法语','没交作业','逃学','不听话'], ans:0,
       note:'小弗朗士悔恨自己以前没有认真学法语，而今却要失去学习机会'},
      {q:'《土地的誓言》的作者是谁?', opts:['端木蕻良','萧红','老舍','巴金'], ans:0,
       note:'端木蕻良在《土地的誓言》中表达了对东北故土的深沉思念'},
      {q:'"九一八事变"发生于哪一年?', opts:['1929','1931','1937','1945'], ans:1,
       note:'1931年9月18日，日本发动九一八事变，侵占东三省'},
      {q:'《木兰诗》中木兰替谁从军?', opts:['哥哥','父亲','丈夫','弟弟'], ans:1,
       note:'阿爷无大儿，木兰无长兄——木兰替父从军'},
      {q:'"将军百战死，壮士十年归"出自哪首诗?', opts:['《木兰诗》','《静夜思》','《春望》','《观沧海》'], ans:0,
       note:'《木兰诗》中的名句，写战争的惨烈和归来的喜悦'},
      {q:'《黄河颂》属于哪种文学体裁?', opts:['小说','散文','诗歌','戏剧'], ans:2,
       note:'《黄河颂》是组诗《黄河大合唱》中的第二乐章，体裁为诗歌'},
    ]
  },
  {
    floor:3, name:'凡人歌', bossName:'老王之影', bossTitle:'善良之魂',
    color:'#1a2e1a',
    questions:[
      {q:'《老王》的作者是谁?', opts:['冰心','杨绛','张爱玲','萧红'], ans:1,
       note:'杨绛先生写《老王》，记叙一位普通三轮车夫的善良与不幸'},
      {q:'老王送给作者的最后礼物是什么?', opts:['鸡蛋和香油','钱','书','花'], ans:0,
       note:'临死前老王踉跄地送来香油和鸡蛋，令作者心酸不已'},
      {q:'《驿路梨花》的作者是谁?', opts:['彭荆风','老舍','孙犁','汪曾祺'], ans:0,
       note:'彭荆风《驿路梨花》，故事发生在云南哀牢山的深山小屋'},
      {q:'《驿路梨花》中，是谁最早建造了那个小茅屋?', opts:['解放军','梨花','哈尼族老人','瑶族老人'], ans:0,
       note:'解放军战士为方便行人，最先建造了这个小茅屋'},
      {q:'"梨花处处开"在文中象征着什么?', opts:['春天来了','雷锋精神代代传','战争结束','丰收喜悦'], ans:1,
       note:'梨花象征助人为乐的雷锋精神，在人民中世代传承'},
      {q:'《台阶》的作者是谁?', opts:['李森祥','余华','莫言','贾平凹'], ans:0,
       note:'李森祥《台阶》，描写农村父亲为建有高台阶的新屋奋斗一生'},
      {q:'父亲为什么一定要建高台阶的新屋?', opts:['炫耀财富','获得尊重','舒适生活','儿子婚事'], ans:1,
       note:'在农村，台阶高低象征着一家人的地位，父亲渴望被尊重'},
      {q:'《卖油翁》的作者是北宋文学家？', opts:['欧阳修','苏轼','王安石','范仲淹'], ans:0,
       note:'欧阳修《卖油翁》，通过卖油翁熟能生巧说明"熟能生巧"的道理'},
      {q:'"我亦无他，唯手熟尔"说明什么道理?', opts:['天赋重要','熟能生巧','勤能补拙','知足常乐'], ans:1,
       note:'卖油翁的话揭示：没有天才，只有熟练——熟能生巧'},
    ]
  },
  {
    floor:4, name:'修身养德', bossName:'君子之影', bossTitle:'德行之主',
    color:'#2a1a3e',
    questions:[
      {q:'《陋室铭》的作者是谁?', opts:['王羲之','刘禹锡','陶渊明','苏轼'], ans:1,
       note:'刘禹锡《陋室铭》：斯是陋室，惟吾德馨'},
      {q:'"斯是陋室，惟吾德馨"中"德馨"是什么意思?', opts:['品德高尚','香气浓烈','才华横溢','家境贫寒'], ans:0,
       note:'馨：香气，这里比喻品德高尚，道德芬芳'},
      {q:'《爱莲说》中莲花象征的品格是?', opts:['富贵荣华','清廉高洁','坚韧不拔','博学多才'], ans:1,
       note:'周敦颐以莲的"出淤泥而不染"象征君子高洁的品格'},
      {q:'"出淤泥而不染，濯清涟而不妖"出自哪篇文章?', opts:['《陋室铭》','《爱莲说》','《观沧海》','《春望》'], ans:1,
       note:'周敦颐《爱莲说》中的名句，是千古传诵的咏莲佳句'},
      {q:'《河中石兽》选自纪昀的哪部作品?', opts:['《儒林外史》','《聊斋志异》','《阅微草堂笔记》','《世说新语》'], ans:2,
       note:'纪昀(字晓岚)的《阅微草堂笔记》是清代著名笔记小说集'},
      {q:'石兽最终在哪里找到?', opts:['河流下游','原来位置','河流上游','河岸边'], ans:2,
       note:'因为水流的冲击使石兽逆流而上，在上游被找到'},
      {q:'"然则天下之事，但知其一，不知其二者多矣"揭示什么道理?', opts:['做事要认真','遇事要多方考虑','读书要勤奋','为人要谦虚'], ans:1,
       note:'不能只凭表面现象或书本知识推断，要考虑实际情况'},
      {q:'《叶圣陶先生二三事》的作者是谁?', opts:['冰心','张中行','叶圣陶','汪曾祺'], ans:1,
       note:'张中行写此文，记叙了叶圣陶先生待人宽、律己严的品格'},
      {q:'叶圣陶先生在语文方面最主要的主张是什么?', opts:['多写少读','简洁明确','文字规范','多用典故'], ans:2,
       note:'叶圣陶主张语文要规范，反对生造词语，强调用词准确'},
    ]
  },
  {
    floor:5, name:'自然人生', bossName:'紫藤萝之灵', bossTitle:'生命之主',
    color:'#1a3a2a',
    questions:[
      {q:'《紫藤萝瀑布》的作者是谁?', opts:['冰心','宗璞','席慕蓉','三毛'], ans:1,
       note:'宗璞《紫藤萝瀑布》通过赏花抒发了对生命的感悟'},
      {q:'"生命的长河是无止境的"是文中的什么?', opts:['开头','结尾','中心句','题记'], ans:2,
       note:'作者由眼前的紫藤萝花联想到人生，悟出生命长河无止境'},
      {q:'《一棵小桃树》的作者是谁?', opts:['贾平凹','莫言','余华','路遥'], ans:0,
       note:'贾平凹《一棵小桃树》，以小桃树的成长比喻自己的人生经历'},
      {q:'小桃树在文中象征着什么?', opts:['童年的记忆','作者的理想与奋斗精神','农村生活','爱情'], ans:1,
       note:'小桃树历经风雨仍顽强生长，象征作者不屈的理想和奋斗精神'},
      {q:'《假如生活欺骗了你》的作者是哪国诗人?', opts:['英国','法国','俄国','美国'], ans:2,
       note:'普希金是俄国伟大的诗人，被称为"俄国文学之父"'},
      {q:'"而那过去了的，就会成为亲切的怀恋"表达了什么情感?', opts:['悲观失望','乐观向上','无所谓','愤世嫉俗'], ans:1,
       note:'普希金劝导人们要乐观地对待生活，相信未来充满希望'},
      {q:'《未选择的路》的作者是谁?', opts:['惠特曼','弗罗斯特','狄金森','爱默生'], ans:1,
       note:'美国诗人弗罗斯特的《未选择的路》是世界著名诗作'},
      {q:'诗中两条路象征着什么?', opts:['人生中的两次旅行','人生中面临的选择','自然界的岔路','战争中的两种选择'], ans:1,
       note:'两条路是比喻，象征人生中不同的选择与方向'},
      {q:'《紫藤萝瀑布》中作者的心情变化是?', opts:['高兴到悲伤','悲痛到宁静喜悦','平静到激动','无聊到充实'], ans:1,
       note:'作者由弟弟患病的悲痛，在花的感召下转为宁静和喜悦'},
    ]
  },
  {
    floor:6, name:'探索科学', bossName:'宇宙终主', bossTitle:'科学之神',
    color:'#0a0a20',
    questions:[
      {q:'《伟大的悲剧》描写的是哪次探险?', opts:['登珠峰','南极探险','北极探险','深海探测'], ans:1,
       note:'茨威格《伟大的悲剧》描述斯科特率队到达南极却发现已被人捷足先登的故事'},
      {q:'谁比斯科特更早到达南极?', opts:['沙克尔顿','阿蒙森','皮尔里','拜尔德'], ans:1,
       note:'挪威人阿蒙森比英国人斯科特早35天到达南极点'},
      {q:'《太空一日》的作者是谁?', opts:['杨利伟','翟志刚','费俊龙','刘洋'], ans:0,
       note:'杨利伟是中国首位进入太空的宇航员，此文记录了他的太空经历'},
      {q:'杨利伟在飞船上听到的神秘"敲击声"，后来证实是什么?', opts:['外星人','飞船结构热胀冷缩','宇宙噪音','发动机故障'], ans:1,
       note:'飞船在太空中由于温差变化，舱体发生热胀冷缩产生声音'},
      {q:'《带上她的眼睛》是哪种文学体裁?', opts:['散文','诗歌','科幻小说','报告文学'], ans:2,
       note:'刘慈欣的《带上她的眼睛》是科幻短篇小说'},
      {q:'《带上她的眼睛》中"她"最终在哪里?', opts:['月球基地','地球内部','太空站','南极基地'], ans:1,
       note:'那位女地质工程师的飞船沉入地球深处，永远无法返回'},
      {q:'《河中石兽》中僧侣和讲学者的错误在于什么?', opts:['不够努力','脱离实际，凭空推想','没有文化','不尊重老人'], ans:1,
       note:'他们犯了本本主义的错误，缺乏实践经验'},
      {q:'《伟大的悲剧》中"悲剧"指什么？"伟大"指什么?', opts:['探险失败；坚强意志','探险成功；伟大发现','回国无望；献身精神','第二名到达；精神可嘉'], ans:0,
       note:'"悲剧"指斯科特等人最终全部遇难；"伟大"指他们的诚信和献身精神'},
      {q:'刘慈欣是哪部科幻小说的作者?', opts:['《三体》','《流浪地球》','两部都是','《星际迷航》'], ans:2,
       note:'刘慈欣既是《三体》又是《流浪地球》的作者，中国最著名的科幻作家'},
    ]
  }
];

/* Fill-in-blank scroll pickups (2 per floor) */
const FILLS = [
  [{q:'邓稼先是中国的"两弹____人"', ans:'元勋', hint:'元=第一，勋=功勋'},
   {q:'斯是陋室，惟吾德____', ans:'馨', hint:'香气，比喻品德高尚'}],
  [{q:'黄河颂中，黄河被称为中华民族的____河', ans:'母亲', hint:'哺育了无数子孙'},
   {q:'木兰替____从军', ans:'父亲', hint:'阿爷无大儿，木兰无长兄'}],
  [{q:'老王临死前送来香油和____', ans:'鸡蛋', hint:'象征他最后的善意'},
   {q:'台阶越高，代表家庭地位越____', ans:'高', hint:'台阶与地位成正比'}],
  [{q:'出淤泥而不____', ans:'染', hint:'这是莲花最著名的品质'},
   {q:'河中石兽最终在上游被____到', ans:'找', hint:'因水流冲击逆流而上'}],
  [{q:'《紫藤萝瀑布》中：生命的____是无止境的', ans:'长河', hint:'用长河比喻生命'},
   {q:'弗罗斯特写了《未选择的____》', ans:'路', hint:'两条路象征人生选择'}],
  [{q:'杨利伟是中国第____位进入太空的宇航员', ans:'一', hint:'神舟五号，2003年'},
   {q:'刘慈欣的科幻代表作《____》获雨果奖', ans:'三体', hint:'中国科幻最高成就'}],
];

/* =====================================================================
   LEVEL GEOMETRY  (6 hand-crafted levels)
   ===================================================================== */
function makeLevels() {
  const GH = 388;
  return [
    { // Floor 1
      width:2400, groundY:GH,
      platforms:[
        [200,320,120,16],[380,280,100,16],[520,240,130,16],
        [700,300,110,16],[860,260,140,16],[1040,220,120,16],
        [1200,300,100,16],[1350,260,130,16],[1500,220,110,16],
        [1650,300,120,16],[1800,260,100,16],[1950,320,140,16],
        [2100,280,110,16],[2200,240,100,16],
      ],
      enemies:[
        {x:500,y:GH-32,id:0},{x:900,y:GH-32,id:1},{x:1300,y:GH-32,id:2},
        {x:1700,y:GH-32,id:3},{x:2000,y:GH-32,id:4},
      ],
      boss:{x:2280,y:GH-48},
      scrolls:[{x:650,y:GH-40,fi:0},{x:1550,y:GH-40,fi:1}],
      exit:{x:2350,y:GH-40},
    },
    { // Floor 2
      width:2600, groundY:GH,
      platforms:[
        [150,300,140,16],[340,260,110,16],[500,220,120,16],
        [670,280,100,16],[820,240,130,16],[980,200,110,16],
        [1140,260,120,16],[1300,300,100,16],[1460,260,130,16],
        [1620,220,120,16],[1790,280,100,16],[1940,240,110,16],
        [2100,300,120,16],[2260,260,100,16],[2420,220,130,16],
      ],
      enemies:[
        {x:450,y:GH-32,id:0},{x:850,y:GH-32,id:1},{x:1250,y:GH-32,id:2},
        {x:1650,y:GH-32,id:3},{x:2050,y:GH-32,id:4},
      ],
      boss:{x:2500,y:GH-48},
      scrolls:[{x:700,y:GH-40,fi:0},{x:1700,y:GH-40,fi:1}],
      exit:{x:2570,y:GH-40},
    },
    { // Floor 3
      width:2500, groundY:GH,
      platforms:[
        [180,340,100,16],[330,300,110,16],[480,260,120,16],[640,220,100,16],
        [780,280,130,16],[940,240,110,16],[1100,200,120,16],
        [1260,260,100,16],[1420,300,110,16],[1580,260,130,16],
        [1740,220,100,16],[1890,280,110,16],[2040,240,120,16],
        [2200,300,100,16],[2350,260,110,16],
      ],
      enemies:[
        {x:400,y:GH-32,id:0},{x:800,y:GH-32,id:1},{x:1200,y:GH-32,id:2},
        {x:1600,y:GH-32,id:3},{x:2000,y:GH-32,id:4},
      ],
      boss:{x:2430,y:GH-48},
      scrolls:[{x:550,y:GH-40,fi:0},{x:1450,y:GH-40,fi:1}],
      exit:{x:2480,y:GH-40},
    },
    { // Floor 4
      width:2700, groundY:GH,
      platforms:[
        [200,320,130,16],[380,280,110,16],[560,240,120,16],
        [730,300,100,16],[890,260,130,16],[1060,220,110,16],
        [1230,280,120,16],[1400,240,100,16],[1570,200,130,16],
        [1750,260,110,16],[1920,300,120,16],[2080,260,100,16],
        [2250,220,130,16],[2430,280,110,16],[2590,240,100,16],
      ],
      enemies:[
        {x:480,y:GH-32,id:0},{x:900,y:GH-32,id:1},{x:1350,y:GH-32,id:2},
        {x:1780,y:GH-32,id:3},{x:2200,y:GH-32,id:4},
      ],
      boss:{x:2650,y:GH-48},
      scrolls:[{x:630,y:GH-40,fi:0},{x:1650,y:GH-40,fi:1}],
      exit:{x:2680,y:GH-40},
    },
    { // Floor 5
      width:2800, groundY:GH,
      platforms:[
        [160,330,120,16],[340,290,100,16],[500,250,130,16],[670,210,110,16],
        [840,270,120,16],[1010,230,100,16],[1170,190,130,16],
        [1340,250,110,16],[1510,290,120,16],[1680,250,100,16],
        [1850,210,130,16],[2020,270,110,16],[2190,230,120,16],
        [2360,290,100,16],[2530,250,110,16],[2700,210,120,16],
      ],
      enemies:[
        {x:520,y:GH-32,id:0},{x:980,y:GH-32,id:1},{x:1420,y:GH-32,id:2},
        {x:1860,y:GH-32,id:3},{x:2300,y:GH-32,id:4},
      ],
      boss:{x:2760,y:GH-48},
      scrolls:[{x:700,y:GH-40,fi:0},{x:1760,y:GH-40,fi:1}],
      exit:{x:2780,y:GH-40},
    },
    { // Floor 6
      width:3000, groundY:GH,
      platforms:[
        [200,340,110,16],[380,300,120,16],[560,260,100,16],[730,220,130,16],
        [910,280,110,16],[1090,240,120,16],[1270,200,100,16],
        [1450,260,130,16],[1630,300,110,16],[1810,260,120,16],
        [1990,220,100,16],[2170,280,130,16],[2360,240,110,16],
        [2550,200,120,16],[2740,260,100,16],[2900,300,110,16],
      ],
      enemies:[
        {x:560,y:GH-32,id:0},{x:1050,y:GH-32,id:1},{x:1550,y:GH-32,id:2},
        {x:2050,y:GH-32,id:3},{x:2540,y:GH-32,id:4},
      ],
      boss:{x:2950,y:GH-48},
      scrolls:[{x:800,y:GH-40,fi:0},{x:1900,y:GH-40,fi:1}],
      exit:{x:2980,y:GH-40},
    },
  ];
}

/* =====================================================================
   COLOR PALETTES per floor
   ===================================================================== */
const PAL = {
  1:{wall:'#0c1020',plat:'#2a3560',torch:'#4060ff',glow:'rgba(40,60,255,',fog:'#0c1020',accent:'#5080ff'},
  2:{wall:'#1c0808',plat:'#4a1a1a',torch:'#ff5020',glow:'rgba(255,80,32,',fog:'#1c0808',accent:'#ff7040'},
  3:{wall:'#0a1808',plat:'#1a3a15',torch:'#40c040',glow:'rgba(64,192,64,',fog:'#0a1808',accent:'#60e060'},
  4:{wall:'#1a0a2e',plat:'#3a1a5e',torch:'#c060ff',glow:'rgba(192,96,255,',fog:'#1a0a2e',accent:'#d080ff'},
  5:{wall:'#081820',plat:'#1a3a40',torch:'#00c8d8',glow:'rgba(0,200,216,',fog:'#081820',accent:'#40e0f0'},
  6:{wall:'#040408',plat:'#0a0a20',torch:'#ff8000',glow:'rgba(255,128,0,',fog:'#040408',accent:'#ffaa20'},
};

/* =====================================================================
   CANVAS + GLOBAL STATE
   ===================================================================== */
const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');
const EXPLORE_H = 420;
const BATTLE_H  = 200;
const W = 800;
cv.width  = W;
cv.height = EXPLORE_H;

const GRAVITY    = 0.45;
const JUMP_FORCE = -9.5;
const SPEED      = 3.5;
const COYOTE_MAX = 8;

let gameMode = 'explore';
let currentFloor = 0;
let levels;

let pl = {};
function resetPlayer(lv) {
  pl = {
    x: 80, y: lv.groundY - 32,
    vx: 0, vy: 0,
    w: 20, h: 32,
    onGround: false,
    facing: 1,
    state: 'idle',
    hurtTimer: 0,
    coyoteTime: 0,
    frame: 0,
    frameTimer: 0,
  };
}

let cam = { x: 0 };
let enemies = [];
let scrolls = [];
let bossDefeated = false;

let playerHP  = 100;
let playerXP  = 0;
let streakVal = 0;
let invincible = 0;

let particles = [];
let embers    = [];

let battleEnemy   = null;
let battleIsBoss  = false;
let battleQueue   = [];
let battleRound   = 0;
let battleCorrect = 0;
let battlePhase   = 'question';
let timerInterval = null;

let fillData   = null;
let fillResult = null;

let frameCount = 0;
let raf;

const keys = {};
let touchLeft = false, touchRight = false, jumpPressed = false;

/* =====================================================================
   SAVE / LOAD
   ===================================================================== */
const SAVE_KEY = 'dungeon_v5';
function saveGame() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      floor: currentFloor,
      hp: playerHP,
      xp: playerXP,
      streak: streakVal,
      defeatedEnemies: enemies.map(e => e.defeated),
      defeatedBoss: bossDefeated,
      collectedScrolls: scrolls.map(s => s.collected),
    }));
  } catch(e) {}
}
function loadGame() {
  try {
    const d = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!d) return false;
    currentFloor = Math.max(0, Math.min(5, d.floor || 0));
    playerHP     = d.hp  != null ? d.hp  : 100;
    playerXP     = d.xp  != null ? d.xp  : 0;
    streakVal    = d.streak != null ? d.streak : 0;
    return d;
  } catch(e) { return false; }
}

/* =====================================================================
   LEVEL INIT
   ===================================================================== */
function initLevel(floorIdx, savedData) {
  currentFloor  = floorIdx;
  bossDefeated  = false;
  gameMode      = 'explore';
  invincible    = 0;
  const lv = levels[floorIdx];
  const fl = floorIdx + 1;

  enemies = lv.enemies.map((e, i) => ({
    x: e.x, y: lv.groundY - 4,
    w: 28, h: 36,
    startX: e.x,
    patrolDist: 90,
    dir: 1,
    speed: 0.8 + floorIdx * 0.12,
    id: e.id,
    floor: fl,
    defeated: savedData && savedData.defeatedEnemies ? !!savedData.defeatedEnemies[i] : false,
    hurtTimer: 0,
    hp: 3,
  }));

  scrolls = lv.scrolls.map((s, i) => ({
    x: s.x, y: s.y,
    fi: s.fi,
    collected: savedData && savedData.collectedScrolls ? !!savedData.collectedScrolls[i] : false,
  }));

  if (savedData && savedData.defeatedBoss) bossDefeated = true;

  resetPlayer(lv);
  cam.x = 0;
  particles = [];
  embers    = [];

  cv.height = EXPLORE_H;
  document.getElementById('battleUI').hidden = true;
  document.getElementById('levelWinScreen').hidden = true;
  document.getElementById('deathScreen').hidden = true;
  updateHUD();
}

/* =====================================================================
   HUD
   ===================================================================== */
function updateHUD() {
  const hp = Math.max(0, Math.min(100, playerHP));
  document.getElementById('hpNum').textContent = hp;
  document.getElementById('hpFill').style.width = hp + '%';
  document.getElementById('xpNum').textContent  = playerXP;
  document.getElementById('xpFill').style.width = Math.min(playerXP / 2, 100) + '%';
  document.getElementById('flNum').textContent  = currentFloor + 1;
  document.getElementById('floorName').textContent = DB[currentFloor].name;
  document.getElementById('streakNum').textContent  = streakVal;
  const sw = document.getElementById('streakWrap');
  sw.classList.toggle('active', streakVal >= 2);
}

/* =====================================================================
   AUDIO
   ===================================================================== */
let AC;
function getAC() {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
}
function beep(freq, dur, type, vol, detune) {
  type   = type   || 'square';
  vol    = vol    || 0.15;
  detune = detune || 0;
  try {
    const ac = getAC();
    const o  = ac.createOscillator();
    const g  = ac.createGain();
    o.type = type;
    o.frequency.value = freq;
    o.detune.value    = detune;
    g.gain.setValueAtTime(vol, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
    o.connect(g);
    g.connect(ac.destination);
    o.start();
    o.stop(ac.currentTime + dur);
  } catch(e) {}
}
function playSound(type) {
  switch(type) {
    case 'jump':    beep(320,0.08,'square',0.10); break;
    case 'sword':   beep(440,0.05,'sawtooth',0.12); beep(660,0.08,'sawtooth',0.08,100); break;
    case 'wrong':   beep(160,0.2,'sawtooth',0.14); beep(120,0.25,'sawtooth',0.10,-400); break;
    case 'correct': beep(660,0.08,'square',0.10); beep(880,0.12,'square',0.08); break;
    case 'victory': [523,659,784,1047].forEach(function(f,i){setTimeout(function(){beep(f,0.18,'square',0.12);},i*120);}); break;
    case 'pickup':  beep(880,0.05,'square',0.08); beep(1047,0.08,'square',0.06); break;
    case 'boss_intro': [200,160,120,100,80].forEach(function(f,i){setTimeout(function(){beep(f,0.14,'sawtooth',0.14);},i*80);}); break;
    case 'boss_win':   [523,659,784,1047,1319].forEach(function(f,i){setTimeout(function(){beep(f,0.20,'square',0.12);},i*100);}); break;
    case 'hurt':    beep(200,0.18,'sawtooth',0.18,-600); break;
    case 'die':     [200,160,120,80].forEach(function(f,i){setTimeout(function(){beep(f,0.18,'sawtooth',0.16);},i*100);}); break;
    case 'exit':    beep(523,0.15,'square',0.10); beep(784,0.20,'square',0.08); break;
  }
}

/* =====================================================================
   PARTICLES
   ===================================================================== */
function spawnParticles(x, y, color, n) {
  n = n || 8;
  for (var i=0; i<n; i++) {
    var angle = Math.random()*Math.PI*2;
    var speed = 1+Math.random()*3;
    particles.push({
      x:x, y:y,
      vx: Math.cos(angle)*speed,
      vy: Math.sin(angle)*speed - 2,
      life:1, decay:0.04+Math.random()*0.04,
      color:color, r:2+Math.random()*3,
    });
  }
}
function tickParticles() {
  particles = particles.filter(function(p) {
    p.x += p.vx; p.y += p.vy;
    p.vy += 0.1; p.life -= p.decay;
    return p.life > 0;
  });
}
function drawParticles(ox) {
  particles.forEach(function(p) {
    ctx.globalAlpha = p.life;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x - ox, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function tickEmbers() {
  if (frameCount % 5 === 0) {
    var p = PAL[currentFloor+1];
    for (var i=0; i<2; i++) {
      embers.push({
        x: Math.random()*W + cam.x,
        y: EXPLORE_H - 30 - Math.random()*180,
        vy: -0.4-Math.random()*0.5,
        vx: (Math.random()-0.5)*0.4,
        life:1, decay:0.008+Math.random()*0.01,
        color: p.torch,
      });
    }
  }
  embers = embers.filter(function(e) {
    e.x += e.vx; e.y += e.vy; e.life -= e.decay;
    return e.life > 0;
  });
}
function drawEmbers(ox) {
  embers.forEach(function(e) {
    ctx.globalAlpha = e.life * 0.6;
    ctx.fillStyle   = e.color;
    ctx.fillRect(e.x - ox, e.y, 2, 2);
  });
  ctx.globalAlpha = 1;
}

/* =====================================================================
   SPRITES
   ===================================================================== */
function drawPlayer(x, y, facing, state, frame, hurtTmr) {
  ctx.save();
  ctx.translate(x + 10, y + 16);
  if (facing < 0) ctx.scale(-1, 1);

  if (hurtTmr > 0 && (frameCount % 4 < 2)) ctx.globalAlpha = 0.45;

  // Cape
  ctx.fillStyle = '#8b0000';
  ctx.fillRect(-8,-4,3,12);

  // Body armor
  ctx.fillStyle = '#c8960c';
  ctx.fillRect(-6,-6,12,14);
  ctx.fillStyle = '#a07008';
  ctx.fillRect(-6,4,12,4);

  // Head
  ctx.fillStyle = '#c8960c';
  ctx.fillRect(-5,-16,10,10);
  ctx.fillStyle = '#2060c0';
  ctx.fillRect(-4,-13,8,3);

  // Cross on chest
  ctx.fillStyle = '#fff';
  ctx.fillRect(-1,-5,2,8);
  ctx.fillRect(-4,-2,8,2);

  // Legs
  ctx.fillStyle = '#a07008';
  var legOff = (state === 'run' && frame % 2 === 0) ? 2 : 0;
  ctx.fillRect(-5, 8, 4, 8+legOff);
  ctx.fillRect(1,  8, 4, 8-legOff);

  // Sword
  ctx.fillStyle = '#d0d0d0';
  ctx.fillRect(6,-8,3,14);
  ctx.fillStyle = '#804000';
  ctx.fillRect(4,-4,7,2);

  ctx.globalAlpha = 1;
  ctx.restore();
}

var ENEMY_C = [
  {body:'#405080',head:'#304060',eye:'#ff4040'},
  {body:'#303030',head:'#202020',eye:'#ff8000'},
  {body:'#706050',head:'#504030',eye:'#ffff00'},
  {body:'#302050',head:'#201040',eye:'#d060ff'},
  {body:'#204020',head:'#102010',eye:'#40ff40'},
  {body:'#202040',head:'#101030',eye:'#00c8ff'},
];

function drawEnemy(e, ox) {
  if (e.defeated) return;
  var sx = e.x - ox;
  var sy = e.y;
  var ci = Math.min(e.id, ENEMY_C.length-1);
  var c  = ENEMY_C[ci];

  ctx.save();
  if (e.hurtTimer > 0 && (frameCount%4 < 2)) ctx.globalAlpha = 0.45;

  ctx.fillStyle = c.body;
  ctx.fillRect(sx-8, sy-32, 16, 22);
  ctx.fillStyle = c.head;
  ctx.fillRect(sx-7, sy-46, 14, 15);
  ctx.fillStyle = c.eye;
  ctx.fillRect(sx-5, sy-42, 4, 3);
  ctx.fillRect(sx+1, sy-42, 4, 3);
  ctx.fillStyle = c.body;
  ctx.fillRect(sx-7, sy-10, 6, 10);
  ctx.fillRect(sx+1, sy-10, 6, 10);

  // HP pips
  for (var i=0; i<3; i++) {
    ctx.fillStyle = i < e.hp ? '#ff4444' : '#222';
    ctx.fillRect(sx-8+i*6, sy-54, 5, 4);
  }

  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawBoss(lv, ox) {
  if (bossDefeated) return;
  var boss = lv.boss;
  var sx = boss.x - ox;
  var sy = boss.y;
  var p  = PAL[currentFloor+1];
  var pulse = 0.6 + 0.4*Math.sin(frameCount*0.08);

  ctx.save();
  ctx.shadowColor = p.torch;
  ctx.shadowBlur  = 20*pulse;

  ctx.fillStyle = '#2a0a0a';
  ctx.fillRect(sx-14,sy-52,28,32);
  ctx.fillStyle = '#600010';
  ctx.fillRect(sx-12,sy-68,24,18);
  ctx.fillStyle = p.torch;
  ctx.fillRect(sx-8,sy-64,5,5);
  ctx.fillRect(sx+3,sy-64,5,5);

  // Crown spikes
  ctx.fillStyle = '#ffd700';
  for (var i=-2;i<=2;i++) ctx.fillRect(sx+i*5-2, sy-76+Math.abs(i)*4, 4, 5);

  // HP pips (9)
  for (var j=0; j<9; j++) {
    ctx.fillStyle = '#ff4444';
    ctx.fillRect(sx-24+j*5+1, sy-84, 4, 4);
  }

  ctx.shadowBlur = 0;
  ctx.restore();

  ctx.fillStyle = p.accent;
  ctx.font = '11px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('\u{1F451} ' + DB[currentFloor].bossName, sx, sy-90);
}

function drawScrollSprite(s, ox) {
  if (s.collected) return;
  var sx  = s.x - ox;
  var bob = Math.sin(frameCount*0.06)*3;
  ctx.save();
  ctx.fillStyle = '#d4a020';
  ctx.fillRect(sx-6, s.y-24+bob, 12, 16);
  ctx.fillStyle = '#fff8e0';
  ctx.fillRect(sx-5, s.y-22+bob, 10, 12);
  ctx.fillStyle = '#806010';
  ctx.font = '9px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('卷', sx, s.y-12+bob);
  ctx.restore();
}

function drawExit(lv, ox) {
  if (!bossDefeated) return;
  var ex = lv.exit;
  var sx = ex.x - ox;
  var pulse = 0.7 + 0.3*Math.sin(frameCount*0.05);
  ctx.save();
  ctx.shadowColor = '#ffd700';
  ctx.shadowBlur  = 18*pulse;
  ctx.font = '22px serif';
  ctx.textAlign = 'center';
  ctx.fillText('\u{1F6AA}', sx, ex.y-8);
  ctx.fillStyle = '#ffffff';
  ctx.font = '11px sans-serif';
  ctx.fillText('下一层', sx, ex.y+10);
  ctx.restore();
}

/* =====================================================================
   BACKGROUND
   ===================================================================== */
function drawBackground(ox) {
  var p  = PAL[currentFloor+1];
  var lv = levels[currentFloor];

  ctx.fillStyle = p.wall;
  ctx.fillRect(0, 0, W, EXPLORE_H);

  // Brick lines
  ctx.strokeStyle = 'rgba(255,255,255,0.04)';
  ctx.lineWidth = 1;
  var bW = 48, bH = 24;
  var bStartX = -(ox % bW);
  for (var by = 0; by < EXPLORE_H; by += bH) {
    var rowShift = (Math.floor(by/bH)%2) * (bW/2);
    for (var bx = bStartX - bW + rowShift; bx < W + bW; bx += bW) {
      ctx.strokeRect(bx, by, bW-1, bH-1);
    }
  }

  // Ground
  ctx.fillStyle = p.plat;
  ctx.fillRect(0, lv.groundY, W, EXPLORE_H - lv.groundY);
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fillRect(0, lv.groundY, W, 2);

  // Platforms
  lv.platforms.forEach(function(pl) {
    var sx = pl[0] - ox;
    if (sx > -pl[2] && sx < W) {
      ctx.fillStyle = p.plat;
      ctx.fillRect(sx, pl[1], pl[2], pl[3]);
      ctx.fillStyle = 'rgba(255,255,255,0.10)';
      ctx.fillRect(sx, pl[1], pl[2], 2);
    }
  });

  // Torches
  var tSpacing = 300;
  var tStart   = Math.floor(ox / tSpacing) * tSpacing;
  for (var tx = tStart; tx < ox + W + tSpacing; tx += tSpacing) {
    drawTorch(tx - ox, 80, p);
    drawTorch(tx - ox + 150, 190, p);
  }

  // Fog gradient
  var grad = ctx.createLinearGradient(0,0,0,EXPLORE_H);
  grad.addColorStop(0, p.fog + 'cc');
  grad.addColorStop(0.4, 'rgba(0,0,0,0)');
  grad.addColorStop(1, p.fog + '88');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, EXPLORE_H);
}

function drawTorch(tx, ty, p) {
  ctx.fillStyle = '#806030';
  ctx.fillRect(tx-2, ty, 4, 12);
  var fl = Math.sin(frameCount*0.3 + tx*0.1)*2;
  ctx.shadowColor = p.torch;
  ctx.shadowBlur  = 14 + fl;
  ctx.fillStyle   = p.torch;
  ctx.beginPath();
  ctx.ellipse(tx, ty-5+fl*0.3, 4, 8, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.beginPath();
  ctx.ellipse(tx, ty-6, 2, 4, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.shadowBlur = 0;
}

/* =====================================================================
   PHYSICS
   ===================================================================== */
function applyPhysics() {
  var lv = levels[currentFloor];

  pl.x += pl.vx;
  pl.x  = Math.max(0, Math.min(lv.width - pl.w, pl.x));

  pl.vy += GRAVITY;
  pl.y  += pl.vy;

  pl.onGround = false;

  if (pl.y + pl.h >= lv.groundY) {
    pl.y = lv.groundY - pl.h;
    pl.vy = 0;
    pl.onGround = true;
  }

  lv.platforms.forEach(function(pt) {
    var px=pt[0], py=pt[1], pw=pt[2], ph=pt[3];
    if (pl.x + pl.w > px && pl.x < px + pw) {
      if (pl.vy >= 0 && pl.y + pl.h >= py && pl.y + pl.h <= py + ph + Math.abs(pl.vy) + 2) {
        pl.y  = py - pl.h;
        pl.vy = 0;
        pl.onGround = true;
      }
    }
  });

  if (pl.onGround) {
    pl.coyoteTime = COYOTE_MAX;
  } else {
    pl.coyoteTime = Math.max(0, pl.coyoteTime - 1);
  }
}

/* =====================================================================
   ENEMY AI
   ===================================================================== */
function updateEnemies() {
  var lv = levels[currentFloor];
  enemies.forEach(function(e) {
    if (e.defeated) return;

    e.x += e.dir * e.speed;
    if (Math.abs(e.x - e.startX) > e.patrolDist) e.dir *= -1;

    if (e.hurtTimer > 0) e.hurtTimer--;

    if (gameMode === 'explore' && invincible === 0) {
      var dx = Math.abs((pl.x + pl.w/2) - e.x);
      var dy = Math.abs((pl.y + pl.h/2) - (e.y - 18));
      if (dx < 28 && dy < 34) triggerBattle(e, false);
    }
  });

  // Boss
  if (!bossDefeated && gameMode === 'explore' && invincible === 0) {
    var boss = lv.boss;
    var bdx  = Math.abs((pl.x + pl.w/2) - boss.x);
    var bdy  = Math.abs((pl.y + pl.h/2) - (boss.y - 24));
    if (bdx < 38 && bdy < 50) triggerBattle(null, true);
  }
}

function checkScrollPickups() {
  scrolls.forEach(function(s, i) {
    if (s.collected) return;
    var dx = Math.abs((pl.x + pl.w/2) - s.x);
    var dy = Math.abs((pl.y + pl.h/2) - s.y);
    if (dx < 26 && dy < 26) {
      s.collected = true;
      playSound('pickup');
      spawnParticles(s.x - cam.x, s.y, '#ffd700', 12);
      triggerFill(FILLS[currentFloor][s.fi]);
      saveGame();
    }
  });
}

function checkExit() {
  if (!bossDefeated) return;
  var ex = levels[currentFloor].exit;
  var dx = Math.abs((pl.x + pl.w/2) - ex.x);
  var dy = Math.abs((pl.y + pl.h/2) - ex.y);
  if (dx < 32 && dy < 32) showLevelWin();
}

/* =====================================================================
   BATTLE
   ===================================================================== */
function triggerBattle(enemy, isBoss) {
  if (gameMode !== 'explore') return;
  gameMode      = 'battle';
  battleEnemy   = enemy;
  battleIsBoss  = isBoss;

  var pool = DB[currentFloor].questions.slice();
  battleQueue   = [];
  battleRound   = 0;
  battleCorrect = 0;
  battlePhase   = 'question';
  pl.vx = 0; pl.vy = 0;

  // Pick 3 random questions
  for (var i=0; i<3 && pool.length; i++) {
    var idx = Math.floor(Math.random()*pool.length);
    battleQueue.push(pool.splice(idx,1)[0]);
  }

  cv.height = BATTLE_H;
  document.getElementById('battleUI').hidden = false;

  if (isBoss) {
    playSound('boss_intro');
    showBossIntro(DB[currentFloor].bossName, DB[currentFloor].bossTitle, function() { showRoundQ(); });
  } else {
    playSound('sword');
    showRoundQ();
  }
}

function showRoundQ() {
  if (battleRound >= battleQueue.length) { endBattle(); return; }
  battlePhase = 'question';
  var q = battleQueue[battleRound];
  var labels = ['A','B','C','D'];

  document.getElementById('notify').innerHTML =
    '\u{2694} 第' + (battleRound+1) + '/3 题 &nbsp;·&nbsp; 连击 ' + streakVal + '\xd7';

  document.getElementById('dynArea').innerHTML =
    '<div class="battle-q">' + q.q + '</div>' +
    '<div class="battle-opts" id="optGrid">' +
      q.opts.map(function(opt,i) {
        return '<button class="opt-btn" data-idx="' + i + '">' + labels[i] + '. ' + opt + '</button>';
      }).join('') +
    '</div>' +
    '<div class="battle-timer"><div class="timer-bar" id="timerBar" style="width:100%"></div></div>';

  document.querySelectorAll('.opt-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (battlePhase !== 'question') return;
      onAnswer(parseInt(btn.dataset.idx), q);
    });
  });

  startTimer(q);
}

function startTimer(q) {
  var timerVal = 100;
  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    timerVal -= 2.5;
    var bar = document.getElementById('timerBar');
    if (bar) bar.style.width = timerVal + '%';
    if (timerVal <= 0) {
      clearInterval(timerInterval);
      onAnswer(-1, q);
    }
  }, 120);
}

function onAnswer(selectedIdx, qObj) {
  if (battlePhase !== 'question') return;
  battlePhase = 'result';
  clearInterval(timerInterval);

  var correct = selectedIdx === qObj.ans;

  document.querySelectorAll('.opt-btn').forEach(function(btn, i) {
    btn.disabled = true;
    if (i === qObj.ans) btn.classList.add('correct');
    if (i === selectedIdx && !correct) btn.classList.add('wrong');
  });

  if (correct) {
    battleCorrect++;
    streakVal++;
    playerXP += 10 + Math.min(streakVal, 5)*2;
    playSound('correct');
    spawnParticles(W/2, BATTLE_H/2, '#40ff80', 8);
    document.getElementById('notify').innerHTML =
      '<span style="color:#40ff80">✓ 正确！</span> ' + qObj.note;
    if (battleEnemy) battleEnemy.hp = Math.max(0, battleEnemy.hp-1);
  } else {
    streakVal = 0;
    playerHP  = Math.max(0, playerHP - 15);
    invincible = 60;
    playSound('wrong');
    spawnParticles(W/2, BATTLE_H/2, '#ff4040', 8);
    document.getElementById('notify').innerHTML =
      '<span style="color:#ff4040">✗ 错了…</span> ' + qObj.note;
  }

  updateHUD();
  renderBattleCanvas();

  setTimeout(function() {
    battleRound++;
    if (battleRound < battleQueue.length) showRoundQ();
    else endBattle();
  }, 1900);
}

function endBattle() {
  clearInterval(timerInterval);
  var won = battleCorrect >= 2;

  if (won) {
    playSound('victory');
    if (battleEnemy) {
      battleEnemy.defeated = true;
      spawnParticles(battleEnemy.x - cam.x, battleEnemy.y - 20, PAL[currentFloor+1].torch, 18);
    } else {
      bossDefeated = true;
      playSound('boss_win');
      spawnParticles(levels[currentFloor].boss.x - cam.x, levels[currentFloor].boss.y - 30, '#ffd700', 28);
      if (typeof confetti === 'function') confetti({particleCount:80,spread:70,origin:{y:0.5}});
    }
    playerXP += 30;
    document.getElementById('notify').innerHTML =
      '<span style="color:#ffd700">\u{1F3C6} 胜利！ ' + battleCorrect + '/3 题正确</span>';
  } else {
    if (battleEnemy) battleEnemy.hp = 3;
    playerHP = Math.max(10, playerHP - 20);
    document.getElementById('notify').innerHTML =
      '<span style="color:#ff8888">失败… ' + battleCorrect + '/3 题正确</span>';
  }

  updateHUD();
  saveGame();

  setTimeout(function() {
    if (playerHP <= 0) {
      showDeathScreen();
    } else {
      exitBattle();
    }
  }, 1600);
}

function exitBattle() {
  gameMode = 'explore';
  document.getElementById('battleUI').hidden = true;
  cv.height  = EXPLORE_H;
  invincible = 120;
  pl.vx = 0;
  ensureGameLoop();
  updateHUD();
}

/* =====================================================================
   FILL CHALLENGE
   ===================================================================== */
function triggerFill(data) {
  gameMode   = 'fill';
  fillData   = data;
  fillResult = null;

  cv.height = BATTLE_H;
  document.getElementById('battleUI').hidden = false;

  document.getElementById('notify').textContent = '\u{1F4DC} 填空挑战 — 拣到一卷古书！';
  document.getElementById('dynArea').innerHTML =
    '<div class="battle-q">' + data.q + '</div>' +
    '<div style="margin:12px 0;text-align:center">' +
      '<input id="fillInput" class="fill-input" type="text" maxlength="8" placeholder="在此填写答案" autocomplete="off">' +
      '<button class="opt-btn" id="fillSubmit" style="margin-left:8px">确认</button>' +
    '</div>' +
    '<div style="color:#aaa;font-size:11px;text-align:center">提示: ' + data.hint + '</div>';

  var input  = document.getElementById('fillInput');
  var submit = document.getElementById('fillSubmit');
  input.focus();

  function doSubmit() {
    if (fillResult) return;
    var ans     = input.value.trim();
    var correct = ans === data.ans;
    fillResult  = correct ? 'correct' : 'wrong';
    submit.disabled = true;
    input.style.color = correct ? '#40ff80' : '#ff4040';

    if (correct) {
      playSound('correct');
      playerXP += 15;
      streakVal++;
      document.getElementById('notify').innerHTML = '<span style="color:#40ff80">✓ 正确！+15 XP</span>';
    } else {
      playSound('wrong');
      streakVal = 0;
      playerHP  = Math.max(0, playerHP - 8);
      document.getElementById('notify').innerHTML =
        '<span style="color:#ff4040">✗ 正确答案: ' + data.ans + '</span>';
    }
    updateHUD();
    saveGame();

    setTimeout(function() {
      gameMode = 'explore';
      document.getElementById('battleUI').hidden = true;
      cv.height = EXPLORE_H;
    }, 1700);
  }

  submit.addEventListener('click', doSubmit);
  input.addEventListener('keydown', function(e) { if (e.key === 'Enter') doSubmit(); });
}

/* =====================================================================
   BOSS INTRO
   ===================================================================== */
function showBossIntro(name, title, cb) {
  document.getElementById('notify').textContent = '⚠ 领主现身！';
  document.getElementById('dynArea').innerHTML =
    '<div style="text-align:center;padding:20px">' +
    '<div style="font-size:20px;color:#ff4040;font-family:\'Press Start 2P\',monospace;margin-bottom:8px">' + name + '</div>' +
    '<div style="font-size:13px;color:#ffd700;margin-bottom:14px">' + title + '</div>' +
    '<div style="font-size:11px;color:#aaa">准备迎战… 回筍3题击败3题即胜！</div>' +
    '</div>';
  setTimeout(cb, 2000);
}

/* =====================================================================
   BATTLE CANVAS
   ===================================================================== */
function renderBattleCanvas() {
  var p = PAL[currentFloor+1];
  ctx.fillStyle = p.wall;
  ctx.fillRect(0, 0, W, BATTLE_H);

  ctx.fillStyle = p.plat;
  ctx.fillRect(0, BATTLE_H-20, W, 20);
  ctx.fillStyle = 'rgba(255,255,255,0.07)';
  ctx.fillRect(0, BATTLE_H-20, W, 2);

  drawPlayer(120, BATTLE_H-52, 1, 'idle', 0, pl.hurtTimer);

  if (battleEnemy && !battleEnemy.defeated) {
    ctx.save();
    ctx.translate(W - 200, 0);
    drawEnemy({x:160, y:BATTLE_H-4, w:28, h:36, id:battleEnemy.id,
               hp:battleEnemy.hp, hurtTimer:battleEnemy.hurtTimer, defeated:false}, 0);
    ctx.restore();
  } else if (battleIsBoss && !bossDefeated) {
    var p2 = PAL[currentFloor+1];
    ctx.save();
    ctx.shadowColor = p2.torch;
    ctx.shadowBlur  = 16;
    ctx.font = '40px serif';
    ctx.textAlign = 'center';
    ctx.fillText('\u{1F479}', W-130, BATTLE_H-28);
    ctx.shadowBlur = 0;
    ctx.restore();
  }

  ctx.fillStyle = 'rgba(255,255,255,0.07)';
  ctx.font = 'bold 28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VS', W/2, BATTLE_H/2+10);

  drawParticles(0);
}

/* =====================================================================
   DEATH SCREEN
   ===================================================================== */
function showDeathScreen() {
  gameMode = 'dead';
  playSound('die');
  document.getElementById('deathMsg').textContent =
    '你在第 ' + (currentFloor+1) + ' 层倒下了。XP: ' + playerXP;
  document.getElementById('deathScreen').hidden = false;
  document.getElementById('continueBtn').onclick = function() {
    document.getElementById('deathScreen').hidden = true;
    playerHP   = 60;
    streakVal  = 0;
    invincible = 120;
    exitBattle();
    updateHUD();
  };
  document.getElementById('deathSelectBtn').onclick = function() {
    document.getElementById('deathScreen').hidden = true;
    document.getElementById('battleUI').hidden = true;
    cv.height = EXPLORE_H;
    gameMode  = 'levelselect';
    playerHP  = 100;
    showLevelSelect();
  };
}

/* =====================================================================
   LEVEL WIN
   ===================================================================== */
function showLevelWin() {
  if (gameMode === 'levelwin') return;
  gameMode = 'levelwin';
  playSound('exit');
  cv.height = EXPLORE_H;
  document.getElementById('battleUI').hidden = true;

  var el = document.getElementById('levelWinScreen');
  document.getElementById('lwTitle').textContent =
    '第 ' + (currentFloor+1) + ' 层 · ' + DB[currentFloor].name + ' — 通关！';
  document.getElementById('lwMsg').textContent =
    'XP: ' + playerXP + ' · 连击: ' + streakVal + '\xd7';
  el.hidden = false;

  if (typeof confetti === 'function') confetti({particleCount:100,spread:80,origin:{y:0.4}});

  document.getElementById('lwSelectBtn').onclick = function() {
    document.getElementById('levelWinScreen').hidden = true;
    showLevelSelect();
  };
  document.getElementById('nextLevelBtn').textContent = '前往下一层 ▶';
  document.getElementById('nextLevelBtn').onclick = function() {
    el.hidden = true;
    if (currentFloor >= 5) {
      showGameComplete();
    } else {
      playerHP = Math.min(100, playerHP + 30);
      saveGame();
      initLevel(currentFloor + 1);
      updateHUD();
    }
  };
}

function showGameComplete() {
  gameMode = 'gamecomplete';
  var el = document.getElementById('levelWinScreen');
  document.getElementById('lwTitle').textContent = '\u{1F3C6} 恭喜通关！罪孽地下城已被征服！';
  document.getElementById('lwMsg').textContent   = '最终得分: ' + playerXP + ' XP';
  document.getElementById('nextLevelBtn').textContent = '再次挑战';
  el.hidden = false;
  if (typeof confetti === 'function') confetti({particleCount:200,spread:120});
  document.getElementById('nextLevelBtn').onclick = function() {
    playerHP  = 100;
    playerXP  = 0;
    streakVal = 0;
    localStorage.removeItem(SAVE_KEY);
    el.hidden = true;
    initLevel(0);
    updateHUD();
  };
}

/* =====================================================================
   CAMERA
   ===================================================================== */
function updateCamera() {
  var lv  = levels[currentFloor];
  var tgt = pl.x - W/2 + pl.w/2;
  cam.x  += (tgt - cam.x) * 0.12;
  cam.x   = Math.max(0, Math.min(lv.width - W, cam.x));
}

/* =====================================================================
   INPUT
   ===================================================================== */
function handleInput() {
  if (gameMode !== 'explore') return;

  var left  = keys['ArrowLeft']  || keys['KeyA'] || touchLeft;
  var right = keys['ArrowRight'] || keys['KeyD'] || !touchLeft && keys['KeyD'];
  // re-check with touch
  left  = left  || touchLeft;
  right = right || (keys['ArrowRight'] || keys['KeyD'] || false);

  if (touchLeft)  { left = true; right = false; }
  if (keys['ArrowRight'] || keys['KeyD']) right = true;
  if (keys['ArrowLeft']  || keys['KeyA']) left  = true;

  if (left)       { pl.vx = -SPEED; pl.facing = -1; }
  else if (right) { pl.vx =  SPEED; pl.facing =  1; }
  else            { pl.vx *= 0.7; }

  if (jumpPressed && pl.coyoteTime > 0) {
    pl.vy = JUMP_FORCE;
    pl.coyoteTime = 0;
    playSound('jump');
  }
  jumpPressed = false;

  if (!pl.onGround)               pl.state = 'jump';
  else if (Math.abs(pl.vx) > 0.3) pl.state = 'run';
  else                             pl.state = 'idle';

  if (pl.hurtTimer > 0) pl.hurtTimer--;
  if (invincible > 0)   invincible--;

  pl.frameTimer++;
  if (pl.frameTimer > 8) { pl.frame++; pl.frameTimer = 0; }
}

/* =====================================================================
   MAIN LOOP
   ===================================================================== */
function gameLoop() {
  frameCount++;
  raf = requestAnimationFrame(gameLoop);

  if (gameMode === 'explore') {
    handleInput();
    applyPhysics();
    updateEnemies();
    checkScrollPickups();
    checkExit();
    updateCamera();
    tickParticles();
    tickEmbers();

    drawBackground(cam.x);
    drawEmbers(cam.x);

    var lv = levels[currentFloor];
    scrolls.forEach(function(s) { drawScrollSprite(s, cam.x); });
    enemies.forEach(function(e) { drawEnemy(e, cam.x); });
    drawBoss(lv, cam.x);
    drawExit(lv, cam.x);
    drawPlayer(pl.x - cam.x, pl.y, pl.facing, pl.state, pl.frame, pl.hurtTimer);
    drawParticles(cam.x);

    // Scanlines
    ctx.fillStyle = 'rgba(0,0,0,0.10)';
    for (var y=0; y<EXPLORE_H; y+=2) ctx.fillRect(0,y,W,1);

  } else if (gameMode === 'battle' || gameMode === 'fill') {
    renderBattleCanvas();
  }
}

/* =====================================================================
   TOUCH
   ===================================================================== */
function initTouch() {
  var btnL = document.getElementById('btnLeft');
  var btnR = document.getElementById('btnRight');
  var btnJ = document.getElementById('btnJump');

  function held(btn, onDown, onUp) {
    btn.addEventListener('touchstart',  function(e){e.preventDefault();onDown();},{passive:false});
    btn.addEventListener('touchend',    function(e){e.preventDefault();onUp();},  {passive:false});
    btn.addEventListener('touchcancel', function(e){e.preventDefault();onUp();},  {passive:false});
    btn.addEventListener('mousedown',   onDown);
    btn.addEventListener('mouseup',     onUp);
    btn.addEventListener('mouseleave',  onUp);
  }

  held(btnL, function(){touchLeft=true;},  function(){touchLeft=false;});
  held(btnR, function(){keys['ArrowRight']=true;}, function(){keys['ArrowRight']=false;});
  btnJ.addEventListener('touchstart', function(e){e.preventDefault();jumpPressed=true;},{passive:false});
  btnJ.addEventListener('mousedown',  function(){jumpPressed=true;});
}

/* =====================================================================
   SETTINGS
   ===================================================================== */
function initSettings() {
  var tog = document.getElementById('settingsToggle');
  var pan = document.getElementById('settingsPanel');
  var rst = document.getElementById('resetBtn');
  var cnf = document.getElementById('resetConfirm');
  var yes = document.getElementById('resetYes');
  var no  = document.getElementById('resetNo');

  tog.addEventListener('click', function(){ pan.hidden = !pan.hidden; });
  rst.addEventListener('click', function(){ cnf.hidden = false; });
  no.addEventListener('click',  function(){ cnf.hidden = true;  });
  yes.addEventListener('click', function() {
    localStorage.removeItem(SAVE_KEY);
    playerHP  = 100; playerXP = 0; streakVal = 0;
    pan.hidden = cnf.hidden = true;
    document.getElementById('deathScreen').hidden = true;
    document.getElementById('levelWinScreen').hidden = true;
    initLevel(0);
    updateHUD();
  });
}

/* =====================================================================
   TITLE SCREEN
   ===================================================================== */
var titleAnimRAF = null;

function showTitleScreen() {
  gameMode = 'title';
  document.getElementById('titleScreen').style.display = 'flex';
  document.getElementById('levelSelectScreen').hidden = true;
  document.getElementById('hud').style.visibility = 'hidden';
  document.getElementById('touchCtrl').style.display = 'none';
  drawTitleCanvas();

  document.getElementById('titleStartBtn').onclick = function() {
    hideTitleScreen();
    var saved = loadGame();
    initLevel(currentFloor, saved || {});
    updateHUD();
  };

  document.getElementById('titleSelectBtn').onclick = function() {
    document.getElementById('titleScreen').style.display = 'none';
    showLevelSelect();
  };
}

function hideTitleScreen() {
  document.getElementById('titleScreen').style.display = 'none';
  document.getElementById('hud').style.visibility = 'visible';
  if (titleAnimRAF) { cancelAnimationFrame(titleAnimRAF); titleAnimRAF = null; }
  ensureGameLoop();
}

function ensureGameLoop() {
  if (!raf) raf = requestAnimationFrame(gameLoop);
}

function drawTitleCanvas() {
  // Draw atmospheric dungeon background on canvas while title is up
  cv.height = EXPLORE_H;
  var p = PAL[1];

  function animFrame() {
    if (gameMode !== 'title') return;
    frameCount++;
    ctx.fillStyle = p.wall;
    ctx.fillRect(0, 0, W, EXPLORE_H);

    // Brick pattern
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (var by = 0; by < EXPLORE_H; by += 24) {
      var rowShift = (Math.floor(by/24)%2) * 24;
      for (var bx = rowShift - 48; bx < W + 48; bx += 48) {
        ctx.strokeRect(bx, by, 47, 23);
      }
    }

    // Atmospheric torches
    for (var ti = 0; ti < 5; ti++) {
      drawTorch(80 + ti * 160, 100, p);
      drawTorch(160 + ti * 160, 260, p);
    }

    // Floating embers
    tickEmbers();
    drawEmbers(0);

    // Scanlines
    ctx.fillStyle = 'rgba(0,0,0,0.10)';
    for (var y = 0; y < EXPLORE_H; y += 2) ctx.fillRect(0, y, W, 1);

    titleAnimRAF = requestAnimationFrame(animFrame);
  }
  titleAnimRAF = requestAnimationFrame(animFrame);
}

/* =====================================================================
   LEVEL SELECT SCREEN
   ===================================================================== */
var FLOOR_TOPICS = [
  '邓稼先 · 闻一多 · 鲁迅',
  '黄河颂 · 最后一课 · 木兰诗',
  '老王 · 驿路梨花 · 台阶',
  '陋室铭 · 爱莲说 · 河中石兽',
  '紫藤萝 · 小桃树 · 普希金',
  '伟大的悲剧 · 太空一日 · 刘慈欣',
];

var FLOOR_ACCENTS = ['#4060ff','#ff5020','#40c040','#c060ff','#00c8d8','#ff8000'];

function showLevelSelect() {
  gameMode = 'levelselect';
  document.getElementById('levelSelectScreen').hidden = false;
  document.getElementById('hud').style.visibility = 'hidden';
  document.getElementById('touchCtrl').style.display = 'none';

  document.getElementById('lsXP').textContent = 'XP: ' + playerXP;

  var grid = document.getElementById('lsGrid');
  grid.innerHTML = '';

  // Read save to know progress
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch(e) {}

  DB.forEach(function(fl, i) {
    var card = document.createElement('div');
    card.className = 'ls-card';
    card.style.setProperty('--card-accent', FLOOR_ACCENTS[i]);

    // Check completion: boss defeated
    var bossCleared = saved && i < currentFloor;
    if (i === currentFloor && saved && saved.defeatedBoss) bossCleared = true;
    if (bossCleared) card.classList.add('completed');

    // Enemy pips (5 enemies + 1 boss = 6 pips)
    var defeatedCount = 0;
    if (saved && saved.defeatedEnemies && i === currentFloor) {
      defeatedCount = saved.defeatedEnemies.filter(Boolean).length;
    } else if (i < (saved ? saved.floor || 0 : 0)) {
      defeatedCount = 5;
    }

    var pipsHTML = '';
    for (var p = 0; p < 5; p++) {
      pipsHTML += '<div class="ls-pip' + (p < defeatedCount ? ' done' : '') + '"></div>';
    }
    pipsHTML += '<div class="ls-pip' + (bossCleared ? ' boss' : '') + '" title="领主"></div>';

    card.innerHTML =
      '<div class="ls-num">第 ' + (i+1) + ' 层</div>' +
      '<div class="ls-name">' + fl.name + '</div>' +
      '<div class="ls-topics">' + FLOOR_TOPICS[i] + '</div>' +
      '<div class="ls-progress">' + pipsHTML + '</div>' +
      '<button class="ls-playbtn">' + (bossCleared ? '✓ 再次挑战' : '▶ 进入关卡') + '</button>';

    card.addEventListener('click', function(idx) {
      return function() {
        document.getElementById('levelSelectScreen').hidden = true;
        document.getElementById('hud').style.visibility = 'visible';
        playerHP   = 100;
        currentFloor = idx;
        // Keep XP but reset floor-specific progress
        var existingSave = null;
        try { existingSave = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch(e) {}
        initLevel(idx, idx === (existingSave ? existingSave.floor : 0) ? existingSave : {});
        gameMode = 'explore';
        updateHUD();
      };
    }(i));

    grid.appendChild(card);
  });

  document.getElementById('lsBackBtn').onclick = function() {
    document.getElementById('levelSelectScreen').hidden = true;
    showTitleScreen();
  };
}

/* =====================================================================
   KEYBOARD
   ===================================================================== */
document.addEventListener('keydown', function(e) {
  keys[e.code] = true;
  if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
    e.preventDefault();
    jumpPressed = true;
  }
  if (e.code === 'ArrowLeft' || e.code === 'ArrowRight' ||
      e.code === 'ArrowUp'   || e.code === 'ArrowDown') {
    e.preventDefault();
  }
});
document.addEventListener('keyup', function(e) {
  keys[e.code] = false;
});

/* =====================================================================
   BOOT
   ===================================================================== */
function boot() {
  levels = makeLevels();
  loadGame();
  initTouch();
  initSettings();
  showTitleScreen();
}

window.addEventListener('load', boot);
