'use strict';

// ═══════════════════════════════════════════════════════════
// 1. DATABASE  (七年级下册 · 全六单元)
// ═══════════════════════════════════════════════════════════

const DB = {
  1: {
    name: '杰出人物',
    bossName: '邓稼先之灵',
    bossTitle: '献身报国 · 国之重器',
    qs: [
      { q: '邓稼先和奥本海默的突出不同点是什么？', opts: ['都是锋芒毕露', '邓稼先忠厚平实，奥本海默锋芒毕露', '都醉心权力', '两人从不交往'], ok: 1, ex: '对比凸显邓稼先朴实谦逊的气质。' },
      { q: '"锲而不舍"的正确解释是？', opts: ['放弃努力', '坚持不懈，持之以恒', '一刀而断', '随意而为'], ok: 1, ex: '锲而不舍比喻持之以恒，永不放弃。' },
      { q: '《孙权劝学》中孙权劝吕蒙学习的理由是？', opts: ['当涂掌事，不可不学', '考取功名', '为家族争光', '练习武术'], ok: 0, ex: '孙权认为吕蒙身居要职，必须学习。' },
      { q: '闻一多先生研究学问的特点是？', opts: ['说了再做', '做了再说', '说了也不做', '只说不做'], ok: 1, ex: '闻一多做了再说，专注实干，体现学者风骨。' },
      { q: '《邓稼先》引用《吊古战场文》的主要作用？', opts: ['表现英雄气概', '渲染荒凉悲壮，暗示科研艰苦', '描写自然风景', '介绍历史背景'], ok: 1, ex: '烘托罗布泊艰苦环境，致敬无私奉献精神。' },
      { q: '形容邓稼先最恰当的词语是？', opts: ['锋芒毕露，傲慢自大', '纯正无私，忠厚平实', '急功近利，追名逐利', '虚伪狡诈'], ok: 1, ex: '课文着重强调邓稼先真诚谦逊的品格。' },
      { q: '"士别三日，即更刮目相待"的含义是？', opts: ['与人分别三天应当想念', '人进步了要以新眼光看待', '读书三日即可成才', '三天之内无需问候'], ok: 1, ex: '吕蒙进步神速，应以新眼光看待进步中的人。' },
      { q: '《孙权劝学》中，鲁肃为何对吕蒙"刮目相待"？', opts: ['吕蒙武艺高超', '吕蒙饱读诗书，才学大进', '吕蒙官职升迁', '吕蒙品德高尚'], ok: 1, ex: '吕蒙听从孙权劝说，勤学苦读，令鲁肃叹服。' },
      { q: '"鞠躬尽瘁，死而后已"描述的是哪种精神？', opts: ['贪图享乐', '无私奉献，忠心报国', '追求功名', '明哲保身'], ok: 1, ex: '形容竭尽心力为国效命，直至死亡，邓稼先正是这种精神的体现。' },
    ],
    storys: [
      { text: '君视名利如粪土，许身国威壮河山。', py: 'jūn shì míng lì rú fèn tǔ', ex: '邓稼先为国家核事业无私奉献，不求名利，功绩永载史册。' },
      { text: '人家说了再做，我是做了再说。', py: 'rén jiā shuō le zài zuò，wǒ shì zuò le zài shuō', ex: '闻一多先生注重实干，体现知识分子的风骨与担当。' },
      { text: '士别三日，即更刮目相待。', py: 'shì bié sān rì，jí gèng guā mù xiāng dài', ex: '吕蒙勤奋学习，大有长进，劝勉我们不可停止成长。' },
    ],
    boss: { q: '下列关于本单元人物精神的说法，正确的是？', opts: ['邓稼先谦逊实干，吕蒙勇于学习，两者均体现积极精神', '他们都追求名利', '邓稼先看重地位，吕蒙拒绝学习', '二人均崇尚武力'], ok: 0, ex: '两人都展现积极进取、无私奉献与成长的精神。' },
  },

  2: {
    name: '家国情怀',
    bossName: '木兰将军',
    bossTitle: '替父从军 · 家国忠魂',
    qs: [
      { q: '《黄河颂》"黄河！你是中华民族的摇篮"使用了什么修辞？', opts: ['拟人', '比喻与象征', '夸张', '排比'], ok: 1, ex: '将黄河比作摇篮，象征其孕育中华文明的伟大作用。' },
      { q: '"朔气传金柝，寒光照铁衣"描写了什么？', opts: ['战争征途的艰辛', '田园风光', '宴饮欢聚', '送别情谊'], ok: 0, ex: '北风传来打更声，寒光映照铁甲，表现木兰从军征战之艰苦。' },
      { q: '《老山界》体现了红军什么精神？', opts: ['享乐主义', '畏难情绪', '顽强意志与革命乐观主义', '逃跑主义'], ok: 2, ex: '翻越老山界体现了红军坚韧不拔的意志与乐观昂扬的革命精神。' },
      { q: '"策勋十二转"中"策勋"的意思是？', opts: ['记录功勋', '免除官职', '罢免官员', '升迁送礼'], ok: 0, ex: '"策勋"指记录功勋，此处极言木兰战功卓著。' },
      { q: '《黄河颂》表达情感的核心是？', opts: ['个人哀愁', '家国情怀与抗战决心', '爱情思念', '游子思乡'], ok: 1, ex: '诗歌核心是抒发保卫黄河、保卫中华民族的爱国主义精神。' },
      { q: '"万里赴戎机，关山度若飞"写出了？', opts: ['行军速度神速，奔赴战场', '思念故乡之情', '对战争的厌倦', '享乐生活'], ok: 0, ex: '不远万里奔赴战场，翻山越岭如飞，突出行军迅疾与豪迈。' },
      { q: '《木兰诗》中"但闻燕山胡骑鸣啾啾"中"但"的意思是？', opts: ['但是', '只是，只听到', '却', '不过'], ok: 1, ex: '"但"在此处是"只是，只听到"之意，突出边塞环境的紧张。' },
      { q: '红军战士翻越老山界时，用什么态度面对艰难？', opts: ['垂头丧气', '乐观豁达，甘之如饴', '埋怨领导', '消极逃避'], ok: 1, ex: '红军以革命乐观主义精神，苦中作乐，彰显英雄本色。' },
      { q: '《木兰诗》属于哪种文学体裁？', opts: ['骈文', '乐府民歌', '律诗', '词'], ok: 1, ex: '《木兰诗》是北朝的乐府民歌，与《孔雀东南飞》并称"乐府双璧"。' },
    ],
    storys: [
      { text: '啊！黄河！你是伟大坚强！', py: 'ā！huáng hé！nǐ shì wěi dà jiān qiáng！', ex: '歌颂黄河象征中华民族不屈不挠的精神，激发爱国豪情。' },
      { text: '我们顶着天啦！', py: 'wǒ men dǐng zhe tiān la！', ex: '翻越老山界时红军的豪迈与自信，体现革命英雄主义。' },
      { text: '愿为市鞍马，从此替爷征。', py: 'yuàn wèi shì ān mǎ，cóng cǐ tì yé zhēng', ex: '木兰勇敢孝顺，甘愿代父从军，体现家国情怀。' },
    ],
    boss: { q: '以下哪个意象最能代表《木兰诗》的家国情怀？', opts: ['黄河浪涛', '"但闻燕山胡骑鸣啾啾"', '明驼千里足', '对镜帖花黄'], ok: 1, ex: '胡骑鸣啾啾表现边塞紧张，呼应保家卫国的责任与担当。' },
  },

  3: {
    name: '凡人歌',
    bossName: '阿长的记忆',
    bossTitle: '朴实关怀 · 平凡伟大',
    qs: [
      { q: '阿长为"我"买《山海经》的行为表现了她什么品质？', opts: ['愚昧迷信', '朴实善良，真心关爱孩子', '自私自利', '狡猾势利'], ok: 1, ex: '阿长不识字却努力实现孩子心愿，朴实中见伟大情怀。' },
      { q: '卖油翁"惟手熟尔"说明了什么道理？', opts: ['天赋决定一切', '熟能生巧，技艺精于勤学苦练', '运气最重要', '傲慢者无敌'], ok: 1, ex: '实践出真知，熟能生巧，勤练可超越天赋。' },
      { q: '《台阶》中父亲的核心愿望是？', opts: ['发家致富', '提高台阶以彰显尊严地位', '培养儿子成才', '外出闯荡见世面'], ok: 1, ex: '台阶越高代表地位越高，父亲渴望受到尊重，折射劳动者的尊严追求。' },
      { q: '阿长"切切察察"的描写有什么作用？', opts: ['突出她烦琐多事，但为后文铺垫，先抑后扬', '表现她英勇无畏', '体现她美丽动人', '突出她博学多才'], ok: 0, ex: '先写其缺点，再写买书之情，形成鲜明对比，令人物更加真实感人。' },
      { q: '卖油翁与陈尧咨的对话揭示了什么道理？', opts: ['人外有人，不可自矜', '蔑视他人是对的', '骄傲自满可以成功', '武力决定一切'], ok: 0, ex: '不可因一技之长而骄傲自满，技无止境，应虚心向学。' },
      { q: '《台阶》中"台阶"在文中的象征意义是？', opts: ['具体的建筑台阶', '家庭的尊严与社会地位', '财富的象征', '年龄的增长'], ok: 1, ex: '台阶是父亲追求尊严与社会认可的具体象征。' },
      { q: '鲁迅在《阿长与〈山海经〉》中对阿长的态度变化是？', opts: ['始终厌恶', '先讨厌后喜爱，转变来自买书一事', '始终喜爱', '无所谓'], ok: 1, ex: '文章以先抑后扬的手法，使阿长买书的情节产生强烈感人效果。' },
      { q: '陈尧咨对卖油翁"轻松倒油"的反应经历了哪些变化？', opts: ['始终赞叹', '先鄙视后叹服，最终哂笑离去', '一直冷漠', '勃然大怒不听解释'], ok: 1, ex: '由轻蔑到"忿然"到最终接受，揭示骄傲与谦逊的对比。' },
      { q: '《山地回忆》中妞儿的形象特点是？', opts: ['刁蛮任性', '温柔贤淑，大家闺秀', '爽朗质朴，善良热情', '懒惰散漫'], ok: 2, ex: '妞儿体现了劳动人民的善良率真与淳朴之美。' },
    ],
    storys: [
      { text: '哥儿，有画儿的"三哼经"，我给你买来了！', py: 'gēr，yǒu huàr de "sān hēng jīng"，wǒ gěi nǐ mǎi lái le！', ex: '阿长不识字却记住孩子心愿，朴实关怀令人动容。' },
      { text: '我亦无他，惟手熟尔。', py: 'wǒ yì wú tā，wéi shǒu shú ěr', ex: '卖油翁平淡一语，蕴含"熟能生巧"的深刻哲理。' },
      { text: '父亲总觉得我们家的台阶低。', py: 'fù qīn zǒng jué de wǒ men jiā de tái jiē dī', ex: '一句朴素的话，道出父辈对尊严的执念与渴望。' },
    ],
    boss: { q: '阿长与卖油翁的共同之处是？', opts: ['身份低微，却拥有令人敬佩的善良与智慧', '博学多才，名满天下', '好高骛远，不切实际', '飞扬跋扈，骄傲自大'], ok: 0, ex: '两者皆平凡中见伟大，身份卑微却品格闪光。' },
  },

  4: {
    name: '修身养德',
    bossName: '陋室主人',
    bossTitle: '安贫乐道 · 清风朗月',
    qs: [
      { q: '《陋室铭》中"惟吾德馨"一句体现了作者什么人生态度？', opts: ['追求奢华富贵', '安贫乐道，高洁志趣', '消极避世，脱离现实', '功利主义'], ok: 1, ex: '"惟吾德馨"意为只要品德高尚，陋室也不再简陋。' },
      { q: '《爱莲说》"出淤泥而不染"象征的品质是？', opts: ['与世同流合污', '洁身自好，不随俗流', '富贵骄人，高高在上', '低调内敛，随遇而安'], ok: 1, ex: '莲花出污泥而不染，象征君子在浮华世界中保持高洁品格。' },
      { q: '《驿路梨花》中"驿路梨花"的标题象征什么？', opts: ['爱情的美好', '雷锋精神与助人为乐的美德', '离别的惆怅', '春天的伤感'], ok: 1, ex: '梨花洁白如助人之心，象征代代相传的善良与奉献精神。' },
      { q: '"无丝竹之乱耳"的用意是？', opts: ['表明作者讨厌音乐', '追求清静高雅，精神自足的生活', '表达对亲人的思念', '表现贫穷困苦'], ok: 1, ex: '强调精神富足，不受世俗杂音干扰，体现高雅情趣。' },
      { q: '周敦颐《爱莲说》以莲喻君子，属于什么写作手法？', opts: ['托物言志', '借景抒情', '直抒胸臆', '侧面烘托'], ok: 0, ex: '以莲花的品格来寄托自己追求高洁人格的志向，是"托物言志"。' },
      { q: '《驿路梨花》展现的民族精神是？', opts: ['见利忘义，各自为政', '无私奉献，互帮互助', '自私自利，独善其身', '固步自封，故步自封'], ok: 1, ex: '梨花村民世代相传的助人精神，体现中华民族温情互助的美德。' },
      { q: '《陋室铭》中作者将陋室比作什么，以自励？', opts: ['诸葛亮的草庐与扬雄的玄亭', '皇宫与豪宅', '学堂与市场', '山川与河流'], ok: 0, ex: '作者以"南阳诸葛庐""西蜀子云亭"自比，表明以古贤人为榜样的志向。' },
      { q: '周敦颐对"菊"和"牡丹"的态度代表了什么？', opts: ['菊是隐逸者，牡丹是追求富贵者，他均不认同', '菊是隐逸，牡丹是富贵，他全部喜欢', '菊代表爱国，牡丹代表奉献', '无特别含义'], ok: 0, ex: '菊花代表隐逸，牡丹代表追慕富贵，两者均非他所好，唯独莲花象征君子之道。' },
      { q: '何为"铭"这种文学体裁的特点？', opts: ['篇幅较长，叙事为主', '文字简短，多用韵文，用以警诫自勉', '浪漫主义色彩浓厚', '主要记录历史事件'], ok: 1, ex: '"铭"是古代刻在器物上用来警诫自己或称述功德的文字，多押韵。' },
    ],
    storys: [
      { text: '斯是陋室，惟吾德馨。', py: 'sī shì lòu shì，wéi wú dé xīn', ex: '这是简陋的居室，只要品德高尚，居室便不再简陋。' },
      { text: '莲，花之君子者也。', py: 'lián，huā zhī jūn zǐ zhě yě', ex: '莲花是花中的君子，象征高洁、独立、不随俗流的品格。' },
      { text: '驿路梨花处处开。', py: 'yì lù lí huā chù chù kāi', ex: '雷锋精神遍地开花，助人为乐的美德代代相传。' },
    ],
    boss: { q: '《陋室铭》与《爱莲说》共同的思想精髓是？', opts: ['追求物质享受，崇尚奢华', '追求精神高洁，淡泊名利，不随俗流', '轻视劳动人民', '愤世嫉俗，逃避责任'], ok: 1, ex: '两篇均表现品德高尚、淡泊明志的人格追求。' },
  },

  5: {
    name: '自然人生',
    bossName: '紫藤守望者',
    bossTitle: '生命长河 · 永不止息',
    qs: [
      { q: '《紫藤萝瀑布》"生命的长河是无止境的"表达了什么？', opts: ['对生命的悲观绝望', '豁达乐观，相信生命生生不息', '对现实的逃避', '对个人得失的焦虑'], ok: 1, ex: '作者由紫藤萝的盛衰感悟到生命永恒，化悲痛为前行的力量。' },
      { q: '《望岳》"会当凌绝顶，一览众山小"抒发了什么？', opts: ['对绝望处境的感叹', '豪情壮志，不畏艰难，俯视一切', '游山玩水的闲情', '对家乡的思念'], ok: 1, ex: '诗人登上顶峰的豪情壮志，积极进取，俯视一切的雄心。' },
      { q: '"山重水复疑无路，柳暗花明又一村"蕴含什么哲理？', opts: ['绝境之中往往蕴含转机与希望', '绝望无出路', '旅途就此结束', '迷路无法返回'], ok: 0, ex: '困境中坚持就会发现转机，绝处逢生，充满辩证哲思。' },
      { q: '"不畏浮云遮望眼，自缘身在最高层"象征什么？', opts: ['视线被天气阻碍', '高瞻远瞩，不为小人蒙蔽，胸怀远大', '天气变化无常', '恐高症患者的感受'], ok: 1, ex: '站得高就看得远，不被眼前的"浮云"（小人或困难）遮蔽视野。' },
      { q: '《紫藤萝瀑布》中紫藤萝由衰转盛寄托了什么情感？', opts: ['感悟家族盛衰，以花叹人', '追求个人享乐', '深陷悲痛无法自拔', '逃避现实'], ok: 0, ex: '作者以花喻人，感悟生命的力量，化悲痛为奋进的动力。' },
      { q: '《己亥杂诗》"落红不是无情物，化作春泥更护花"象征什么精神？', opts: ['牺牲自我、奉献的精神', '凋零败落的悲凉', '没落衰败的无奈', '凄凉绝望的心境'], ok: 0, ex: '落花化为春泥护育新花，象征无私奉献、甘为后人铺路的精神。' },
      { q: '《望岳》是杜甫什么时期的作品，体现了怎样的心境？', opts: ['晚年，忧国忧民', '青年，意气风发，豪情万丈', '中年，壮志难酬', '老年，淡泊宁静'], ok: 1, ex: '《望岳》是杜甫青年时期作品，充满青春朝气与进取精神。' },
      { q: '《游山西村》的主旨是？', opts: ['批判农村落后', '表现田园生活之美与世外桃源式的欢乐', '赞美山水自然', '表达对城市的向往'], ok: 1, ex: '作者通过游村经历，展现淳朴的农村风情与人情之美。' },
      { q: '"沉舟侧畔千帆过，病树前头万木春"揭示了什么道理？', opts: ['旧事物消亡，新事物必然蓬勃发展', '沉船危险，要当心', '病树象征绝望', '千帆竞发无意义'], ok: 0, ex: '旧事物虽然衰亡，但新事物必然充满生机，体现历史发展的乐观规律。' },
    ],
    storys: [
      { text: '花和人都会遇到各种各样的不幸，但生命的长河是无止境的。', py: 'huā hé rén dōu huì yù dào bù xìng，dàn shēng mìng de cháng hé shì wú zhǐ jìng de', ex: '坦然面对不幸，以生命长河的眼光看待一切，豁达而深沉。' },
      { text: '不畏浮云遮望眼，自缘身在最高层。', py: 'bù wèi fú yún zhē wàng yǎn，zì yuán shēn zài zuì gāo céng', ex: '站得高则看得远，不为眼前困难所蒙蔽，充满豪迈之气。' },
      { text: '落红不是无情物，化作春泥更护花。', py: 'luò hóng bú shì wú qíng wù，huà zuò chūn ní gèng hù huā', ex: '无私奉献，甘为后人铺路，精神永不止息。' },
    ],
    boss: { q: '下列哪句诗最契合《紫藤萝瀑布》的生命哲思？', opts: ['"柳暗花明又一村"', '"化作春泥更护花"', '"沉舟侧畔千帆过，病树前头万木春"', '"人生自古谁无死"'], ok: 2, ex: '旧事物衰亡，新生命涌现，生命轮转不息，与文章主旨高度契合。' },
  },

  6: {
    name: '探索科学',
    bossName: '落日六号领航员',
    bossTitle: '地心孤勇 · 探索无畏',
    qs: [
      { q: '《太空一日》中杨利伟经历飞船共振时的表现是？', opts: ['慌张失措，大声呼救', '以坚强意志与专业素养坚持下来', '埋怨地面指挥', '主动放弃任务'], ok: 1, ex: '杨利伟镇定坚韧，体现航天员卓越的科学精神与心理素质。' },
      { q: '《带上她的眼睛》中"她"的真实身份是？', opts: ['外星人', '落日六号地航飞船的女性领航员', '普通旅游者', '科学研究员'], ok: 1, ex: '她是被困于地球内部的地航员，永远无法返回地面。' },
      { q: '科学精神的核心不包括以下哪一项？', opts: ['实事求是', '勇于创新', '迷信权威，不加质疑', '严谨细致'], ok: 2, ex: '科学精神强调质疑权威、实事求是，迷信权威与科学精神背道而驰。' },
      { q: '杨利伟在太空中说"我没有看到长城"，这体现了什么精神？', opts: ['航天员视力不佳', '诚实求真的科学态度', '设备存在缺陷', '对任务消极应付'], ok: 1, ex: '拒绝迎合期待，坚持实事求是，体现严谨诚实的科学品格。' },
      { q: '《带上她的眼睛》的叙述视角有何特点？', opts: ['第一人称有限视角，通过"我"感知女领航员的世界', '全知视角，无所不知', '第二人称，直接对话读者', '上帝视角，俯瞰一切'], ok: 0, ex: '以第一人称"我"的有限视角叙述，使读者与主人公共同经历情感震撼。' },
      { q: '"蛟龙"探海与神舟飞天共同体现了？', opts: ['个人英雄主义', '探索未知、挑战极限的科学精神', '追求名利富贵', '政治宣传目的'], ok: 1, ex: '两者均体现中国科技工作者勇于探索、不畏艰险的精神。' },
      { q: '《太空一日》文体特点是？', opts: ['小说', '叙事性散文（自述文章）', '议论文', '诗歌'], ok: 1, ex: '这是杨利伟的亲历叙述，属于叙事性散文，真实记录太空飞行感受。' },
      { q: '《带上她的眼睛》结尾"我"意识到了什么，令全文升华？', opts: ['意识到旅行无意义', '意识到女领航员永远困于地下，感受到孤独与伟大', '意识到自己粗心大意', '意识到技术可以解决一切'], ok: 1, ex: '结尾揭示真相，使前文所有细节充满了悲悯与震撼，令人久久难忘。' },
      { q: '本单元科学主题的共同精神内核是？', opts: ['遵从天意，顺应自然', '实事求是，勇敢探索，不畏牺牲', '权威至上，遵守规则', '迷信经典，不敢创新'], ok: 1, ex: '尊重事实，敢于探索未知，甘于奉献，是科学精神的永恒内核。' },
    ],
    storys: [
      { text: '我以为自己要牺牲了。', py: 'wǒ yǐ wéi zì jǐ yào xī shēng le', ex: '杨利伟平静地直面生死，坚韧不拔，折射中国航天人的英雄气概。' },
      { text: '不管走到哪里，我都不会离她更远了。', py: 'bù guǎn zǒu dào nǎ lǐ，wǒ dōu bú huì lí tā gèng yuǎn le', ex: '女领航员永困地心，这句话充满悲悯与对科学奉献精神的礼赞。' },
      { text: '我是落日六号的领航员。', py: 'wǒ shì luò rì liù hào de lǐng háng yuán', ex: '简短一句，承载着无尽的孤独、勇气与奉献，令人动容。' },
    ],
    boss: { q: '从科学精神角度审视本单元，所有篇目共同强调的是？', opts: ['遵从天意，顺其自然', '实事求是，勇敢无畏，甘于奉献', '权威至上，不可质疑', '迷信经典，循规蹈矩'], ok: 1, ex: '尊重事实，敢于探索，甘于奉献——这是一切科学精神的基石。' },
  },
};

// ═══════════════════════════════════════════════════════════
// 2. STATE
// ═══════════════════════════════════════════════════════════

const SAVE_KEY = 'dungeon_v4';

function mkRooms() {
  const r = {};
  for (let i = 1; i <= 6; i++) r[i] = { battle: false, story: false, boss: false, qi: 0 };
  return r;
}

let G = {
  floor: 1, hp: 100, xp: 0,
  streak: 0,     // current correct-answer streak across whole session
  cleared: {},
  rooms: mkRooms(),
};

function saveGame() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(G)); } catch (_) {} }

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const s = JSON.parse(raw);
    G = s;
    if (!G.rooms)   G.rooms   = mkRooms();
    if (!G.cleared) G.cleared = {};
    if (G.streak == null) G.streak = 0;
    for (let i = 1; i <= 6; i++) {
      if (!G.rooms[i]) G.rooms[i] = { battle: false, story: false, boss: false, qi: 0 };
      if (G.rooms[i].qi == null) G.rooms[i].qi = 0;
    }
  } catch (_) {}
}

function resetGame() {
  localStorage.removeItem(SAVE_KEY);
  G = { floor: 1, hp: 100, xp: 0, streak: 0, cleared: {}, rooms: mkRooms() };
  setNotify('🌱 传说重新开始');
  showIdle(); syncUI();
}

// ═══════════════════════════════════════════════════════════
// 3. CANVAS / SPRITES
// ═══════════════════════════════════════════════════════════

const cv  = document.getElementById('cv');
const ctx = cv.getContext('2d');
let rafId = null;
let scene = null;

// Floor colour palettes
const PAL = {
  1: { wall: '#0c1020', wall2: '#080c18', floor: '#060810', torch: '#4060ff', glow: 'rgba(40,60,255,', accent: '#1a2050' },
  2: { wall: '#1c0808', wall2: '#140606', floor: '#100404', torch: '#ff5020', glow: 'rgba(255,60,20,', accent: '#5a1010' },
  3: { wall: '#181008', wall2: '#120c06', floor: '#0e0a04', torch: '#e09020', glow: 'rgba(200,140,20,', accent: '#403010' },
  4: { wall: '#100818', wall2: '#0c0612', floor: '#080410', torch: '#c050ff', glow: 'rgba(180,50,255,', accent: '#30085a' },
  5: { wall: '#081408', wall2: '#060e06', floor: '#040a04', torch: '#40e040', glow: 'rgba(40,200,40,',  accent: '#103010' },
  6: { wall: '#081418', wall2: '#060e12', floor: '#040c10', torch: '#20d0ff', glow: 'rgba(20,200,255,', accent: '#103040' },
};

function startCanvas(w, h) {
  cv.width = w; cv.height = h;
  cv.style.display = 'block';
  cv.style.width   = '100%';
  cv.style.height  = h + 'px';
}

function stopCanvas() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  cv.style.display = 'none';
  scene = null;
}

// ── Background ─────────────────────────────────────────────

function drawBackground(floor, frame) {
  const W = cv.width, H = cv.height;
  const gY = H - 22;
  const p  = PAL[floor] || PAL[1];

  // Gradient sky
  const g = ctx.createLinearGradient(0, 0, 0, gY);
  g.addColorStop(0, '#020204');
  g.addColorStop(0.5, p.wall);
  g.addColorStop(1, p.wall2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, gY);

  // Stone block pattern
  const bW = 28, bH = 14;
  for (let row = 0; row <= Math.ceil(gY / bH); row++) {
    const odd = row % 2 !== 0;
    for (let col = -1; col <= Math.ceil(W / bW) + 1; col++) {
      const bx = col * bW - (odd ? bW / 2 : 0);
      const by = row * bH;
      const shade = ((row + col) % 3 === 0) ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.08)';
      ctx.fillStyle = shade;
      ctx.fillRect(bx + 1, by + 1, bW - 2, bH - 2);
      ctx.strokeStyle = 'rgba(0,0,0,0.25)';
      ctx.lineWidth = 1;
      ctx.strokeRect(bx, by, bW, bH);
    }
  }

  // Ground
  ctx.fillStyle = '#281808';
  ctx.fillRect(0, gY, W, 4);
  ctx.fillStyle = '#180e04';
  ctx.fillRect(0, gY + 4, W, H - gY - 4);

  // Floor tiles
  ctx.strokeStyle = 'rgba(0,0,0,0.3)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 28) {
    ctx.beginPath(); ctx.moveTo(x, gY + 4); ctx.lineTo(x, H); ctx.stroke();
  }

  // Torches
  const tx1 = Math.floor(W * 0.11);
  const tx2 = Math.floor(W * 0.89);
  drawTorch(tx1, 22, frame, p);
  drawTorch(tx2, 22, frame, p);

  // Embers floating up
  if (scene && scene.embers) {
    scene.embers.forEach(e => {
      ctx.fillStyle = `rgba(255,${e.g},20,${e.a.toFixed(2)})`;
      ctx.fillRect(e.x, e.y, e.sz, e.sz);
    });
  }
}

function drawTorch(tx, ty, frame, p) {
  // Bracket
  ctx.fillStyle = '#5a4010';
  ctx.fillRect(tx - 2, ty + 2, 4, 9);
  ctx.fillStyle = '#7a6020';
  ctx.fillRect(tx - 1, ty + 3, 2, 7);

  const fl  = 0.75 + Math.sin(frame * 0.21 + tx) * 0.25;
  const fl2 = 0.80 + Math.sin(frame * 0.33 + tx * 2) * 0.20;

  // Glow halo
  const gr = ctx.createRadialGradient(tx, ty, 0, tx, ty, 22 * fl);
  gr.addColorStop(0, p.glow + (0.22 * fl).toFixed(2) + ')');
  gr.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gr;
  ctx.fillRect(tx - 28, ty - 18, 56, 38);

  // Flame outer
  ctx.save();
  ctx.globalAlpha = fl * 0.65;
  ctx.fillStyle = p.torch;
  ctx.beginPath();
  ctx.ellipse(tx, ty - 3, 4 * fl2, 9 * fl, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Flame core (always white-yellow)
  ctx.save();
  ctx.globalAlpha = fl * 0.85;
  ctx.fillStyle = '#fff4a0';
  ctx.beginPath();
  ctx.ellipse(tx, ty - 4, 2.5 * fl2, 5.5 * fl, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function tickEmbers() {
  if (!scene || !scene.embers) return;
  const W = cv.width;
  scene.embers.forEach(e => {
    e.x += e.vx; e.y += e.vy;
    e.a  -= 0.012;
    if (e.a <= 0) {
      const side = Math.random() < 0.5 ? 0 : 1;
      e.x  = (side === 0 ? W * 0.11 : W * 0.89) + (Math.random() - 0.5) * 6;
      e.y  = 22 + Math.random() * 6;
      e.vx = (Math.random() - 0.5) * 0.4;
      e.vy = -0.4 - Math.random() * 0.9;
      e.a  = 0.5 + Math.random() * 0.4;
      e.g  = Math.floor(Math.random() * 80);
      e.sz = 1 + Math.random() * 1.5;
    }
  });
}

function mkEmbers() {
  const W = cv.width;
  return Array.from({ length: 22 }, () => {
    const side = Math.random() < 0.5 ? 0 : 1;
    return {
      x:  (side === 0 ? W * 0.11 : W * 0.89) + (Math.random() - 0.5) * 6,
      y:  22 - Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -0.4 - Math.random() * 0.9,
      a:  Math.random() * 0.7,
      g:  Math.floor(Math.random() * 80),
      sz: 1 + Math.random() * 1.5,
    };
  });
}

// ── Player sprite ──────────────────────────────────────────

function drawPlayer(px, py, s, bob, shk, lunge) {
  const x = Math.round(px + shk + lunge);
  const y = Math.round(py + bob);
  // Head
  ctx.fillStyle = '#e8dcc8'; ctx.fillRect(x - 4*s, y - 18*s, 8*s, 7*s);
  // Helmet visor
  ctx.fillStyle = '#c8913a'; ctx.fillRect(x - 4*s, y - 18*s, 8*s, 3*s);
  ctx.fillStyle = '#a07020'; ctx.fillRect(x - 3*s, y - 18*s, 6*s, 2*s);
  // Eyes
  ctx.fillStyle = '#080608';
  ctx.fillRect(x - 3*s, y - 15*s, 2*s, 2*s);
  ctx.fillRect(x + 1*s,  y - 15*s, 2*s, 2*s);
  // Glowing eyes
  ctx.fillStyle = 'rgba(255,200,80,0.5)';
  ctx.fillRect(x - 3*s, y - 15*s, 2*s, 1*s);
  ctx.fillRect(x + 1*s,  y - 15*s, 2*s, 1*s);
  // Body armour
  ctx.fillStyle = '#c8913a'; ctx.fillRect(x - 3*s, y - 11*s, 6*s, 9*s);
  // Cross
  ctx.fillStyle = '#8b1a1a';
  ctx.fillRect(x - 1*s, y - 10*s, 2*s, 7*s);
  ctx.fillRect(x - 3*s, y - 8*s,  6*s, 2*s);
  // Cape
  ctx.fillStyle = '#3a0808'; ctx.fillRect(x - 5*s, y - 10*s, 2*s, 10*s);
  // Arms
  ctx.fillStyle = '#d4c8b4';
  ctx.fillRect(x - 6*s, y - 11*s, 3*s, 7*s);
  ctx.fillRect(x + 3*s, y - 11*s, 3*s, 7*s);
  // Gauntlets
  ctx.fillStyle = '#c8913a';
  ctx.fillRect(x - 6*s, y - 5*s, 3*s, 2*s);
  ctx.fillRect(x + 3*s, y - 5*s, 3*s, 2*s);
  // Legs
  ctx.fillStyle = '#2a1a0a';
  ctx.fillRect(x - 3*s, y - 2*s, 2*s, 7*s);
  ctx.fillRect(x + 1*s, y - 2*s, 2*s, 7*s);
  // Boots
  ctx.fillStyle = '#1a0e06';
  ctx.fillRect(x - 4*s, y + 4*s, 3*s, 3*s);
  ctx.fillRect(x + 1*s, y + 4*s, 3*s, 3*s);
  // Sword blade
  ctx.fillStyle = '#d0d0e0'; ctx.fillRect(x + 6*s, y - 16*s, 2*s, 13*s);
  ctx.fillStyle = '#a0a0b8'; ctx.fillRect(x + 7*s, y - 16*s, 1*s, 13*s);
  // Sword guard
  ctx.fillStyle = '#c8913a'; ctx.fillRect(x + 4*s, y - 10*s, 6*s, 2*s);
  // Sword pommel
  ctx.fillStyle = '#8b1a1a'; ctx.fillRect(x + 6*s, y - 3*s, 2*s, 2*s);
}

// ── Enemy sprites ──────────────────────────────────────────

const SPRITES = {
  1(ex, ey, s, sway, a, boss) {
    const x = Math.round(ex + sway), y = ey, sc = boss ? s * 1.4 : s;
    ctx.globalAlpha = a;
    // Skull
    ctx.fillStyle = '#d8d0c0'; ctx.fillRect(x - 6*sc, y - 20*sc, 12*sc, 10*sc);
    ctx.fillStyle = '#b8b0a8'; ctx.fillRect(x - 5*sc, y - 19*sc, 10*sc, 8*sc);
    // Eye sockets
    ctx.fillStyle = '#04020a';
    ctx.fillRect(x - 4*sc, y - 17*sc, 3*sc, 4*sc);
    ctx.fillRect(x + 1*sc,  y - 17*sc, 3*sc, 4*sc);
    // Glowing soul
    ctx.fillStyle = boss ? 'rgba(120,180,255,0.9)' : 'rgba(60,120,255,0.7)';
    ctx.fillRect(x - 3*sc, y - 16*sc, 2*sc, 2*sc);
    ctx.fillRect(x + 1*sc, y - 16*sc, 2*sc, 2*sc);
    // Teeth
    ctx.fillStyle = '#c8c0b0';
    for (let i = 0; i < 4; i++) ctx.fillRect(x - 3*sc + i*2*sc, y - 11*sc, sc, 2*sc);
    // Body robe
    ctx.fillStyle = '#5a5050'; ctx.fillRect(x - 4*sc, y - 10*sc, 8*sc, 10*sc);
    // Arms
    ctx.fillStyle = '#787060';
    ctx.fillRect(x - 7*sc, y - 10*sc, 3*sc, 8*sc);
    ctx.fillRect(x + 4*sc,  y - 10*sc, 3*sc, 8*sc);
    ctx.globalAlpha = 1;
  },
  2(ex, ey, s, sway, a, boss) {
    const x = Math.round(ex + sway), y = ey, sc = boss ? s * 1.4 : s;
    ctx.globalAlpha = a;
    // Dark armour body
    ctx.fillStyle = '#481818'; ctx.fillRect(x - 5*sc, y - 20*sc, 10*sc, 20*sc);
    // Helmet
    ctx.fillStyle = '#2e0e0e'; ctx.fillRect(x - 5*sc, y - 20*sc, 10*sc, 8*sc);
    ctx.fillStyle = '#c82828';
    ctx.fillRect(x - 4*sc, y - 18*sc, 8*sc, 2*sc); // red visor
    if (boss) {
      ctx.fillStyle = '#ff4040';
      ctx.fillRect(x - 3*sc, y - 17*sc, 6*sc, 1*sc);
    }
    // Pauldrons
    ctx.fillStyle = '#6a2828';
    ctx.fillRect(x - 9*sc, y - 20*sc, 4*sc, 6*sc);
    ctx.fillRect(x + 5*sc,  y - 20*sc, 4*sc, 6*sc);
    // Sword
    ctx.fillStyle = '#a0a0b8'; ctx.fillRect(x + 5*sc, y - 16*sc, 2*sc, 13*sc);
    ctx.fillStyle = '#481818'; ctx.fillRect(x + 3*sc, y - 12*sc, 6*sc, 2*sc);
    // Legs
    ctx.fillStyle = '#2e0e0e';
    ctx.fillRect(x - 4*sc, y, 3*sc, 5*sc);
    ctx.fillRect(x + 1*sc,  y, 3*sc, 5*sc);
    ctx.globalAlpha = 1;
  },
  3(ex, ey, s, sway, a, boss) {
    const x = Math.round(ex + sway), y = ey, sc = boss ? s * 1.4 : s;
    ctx.globalAlpha = a;
    // Stone body
    ctx.fillStyle = '#686460'; ctx.fillRect(x - 5*sc, y - 22*sc, 10*sc, 22*sc);
    ctx.fillStyle = '#484440'; ctx.fillRect(x - 4*sc, y - 21*sc, 8*sc, 5*sc);
    // Eyes carved
    ctx.fillStyle = '#1a1614';
    ctx.fillRect(x - 3*sc, y - 18*sc, 2*sc, 3*sc);
    ctx.fillRect(x + 1*sc,  y - 18*sc, 2*sc, 3*sc);
    ctx.fillStyle = boss ? 'rgba(255,200,50,0.9)' : 'rgba(200,160,30,0.7)';
    ctx.fillRect(x - 2*sc, y - 17*sc, 1*sc, 1*sc);
    ctx.fillRect(x + 1*sc, y - 17*sc, 1*sc, 1*sc);
    // Stone arms
    ctx.fillStyle = '#787470';
    ctx.fillRect(x - 8*sc, y - 16*sc, 3*sc, 9*sc);
    ctx.fillRect(x + 5*sc,  y - 16*sc, 3*sc, 9*sc);
    // Cracks
    ctx.strokeStyle = '#282420'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x - sc, y - 20*sc); ctx.lineTo(x, y - 8*sc); ctx.stroke();
    ctx.globalAlpha = 1;
  },
  4(ex, ey, s, sway, a, boss) {
    const x = Math.round(ex + sway), y = ey, sc = boss ? s * 1.4 : s;
    ctx.globalAlpha = a;
    // Monk head
    ctx.fillStyle = '#d8b870'; ctx.fillRect(x - 2*sc, y - 22*sc, 4*sc, 5*sc);
    // Robe outer
    ctx.fillStyle = '#281204'; ctx.fillRect(x - 7*sc, y - 17*sc, 14*sc, 17*sc);
    // Robe inner
    ctx.fillStyle = '#180c02'; ctx.fillRect(x - 5*sc, y - 15*sc, 10*sc, 15*sc);
    // Gold sash
    ctx.fillStyle = '#c8913a'; ctx.fillRect(x - 4*sc, y - 9*sc, 8*sc, 2*sc);
    // Scroll held
    ctx.fillStyle = '#e8d8a0'; ctx.fillRect(x - 5*sc, y - 14*sc, 2*sc, 7*sc);
    ctx.fillStyle = '#c8b880';
    ctx.fillRect(x - 5*sc, y - 14*sc, 2*sc, 1*sc);
    ctx.fillRect(x - 5*sc, y - 8*sc,  2*sc, 1*sc);
    if (boss) {
      // Golden aura
      ctx.fillStyle = 'rgba(200,145,58,0.15)';
      ctx.beginPath();
      ctx.arc(x, y - 10*sc, 18*sc, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  },
  5(ex, ey, s, sway, a, boss) {
    const x = Math.round(ex + sway), y = ey, sc = boss ? s * 1.4 : s;
    ctx.globalAlpha = a;
    // Vine body
    ctx.fillStyle = '#1a5010';
    const pts = [0,-22, 4,-18, 7,-20, 5,-12, 9,-15, 7,-8, 9,-3, 4,1, 2,5, -2,5, -4,1, -9,-3, -7,-8, -9,-15, -5,-12, -7,-20, -4,-18];
    ctx.beginPath();
    ctx.moveTo(x + pts[0]*sc, y + pts[1]*sc);
    for (let i = 2; i < pts.length; i += 2) ctx.lineTo(x + pts[i]*sc, y + pts[i+1]*sc);
    ctx.closePath(); ctx.fill();
    // Vine highlights
    ctx.fillStyle = '#2a7020';
    ctx.fillRect(x - 2*sc, y - 20*sc, 4*sc, 6*sc);
    // Red eyes
    ctx.fillStyle = boss ? '#ff4040' : '#c02828';
    ctx.fillRect(x - 2*sc, y - 18*sc, 2*sc, 2*sc);
    ctx.fillRect(x + sc, y - 18*sc, 2*sc, 2*sc);
    // Tendrils
    ctx.strokeStyle = '#1a5010'; ctx.lineWidth = 2*sc;
    ctx.beginPath(); ctx.moveTo(x - 9*sc, y - 4*sc); ctx.quadraticCurveTo(x - 14*sc, y - 10*sc, x - 12*sc, y - 16*sc); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + 9*sc, y - 4*sc); ctx.quadraticCurveTo(x + 14*sc, y - 10*sc, x + 12*sc, y - 16*sc); ctx.stroke();
    ctx.globalAlpha = 1;
  },
  6(ex, ey, s, sway, a, boss) {
    const x = Math.round(ex + sway), y = ey, sc = boss ? s * 1.4 : s;
    ctx.globalAlpha = a;
    // Mech torso
    ctx.fillStyle = '#2a3c50'; ctx.fillRect(x - 6*sc, y - 20*sc, 12*sc, 20*sc);
    ctx.fillStyle = '#1a2c40'; ctx.fillRect(x - 5*sc, y - 19*sc, 10*sc, 7*sc);
    // Visor
    ctx.fillStyle = '#1a60a0'; ctx.fillRect(x - 3*sc, y - 18*sc, 6*sc, 3*sc);
    ctx.fillStyle = boss ? '#40e0ff' : '#20b0e0';
    ctx.fillRect(x - 2*sc, y - 17*sc, 4*sc, 1*sc);
    // Shoulder plates
    ctx.fillStyle = '#3a5060';
    ctx.fillRect(x - 10*sc, y - 19*sc, 4*sc, 8*sc);
    ctx.fillRect(x + 6*sc,  y - 19*sc, 4*sc, 8*sc);
    // Arm cannon
    ctx.fillStyle = '#2a3c50'; ctx.fillRect(x + 6*sc, y - 14*sc, 4*sc, 5*sc);
    ctx.fillStyle = '#1a60a0'; ctx.fillRect(x + 9*sc, y - 13*sc, 2*sc, 3*sc);
    // Legs
    ctx.fillStyle = '#1a2c40';
    ctx.fillRect(x - 4*sc, y, 3*sc, 5*sc);
    ctx.fillRect(x + 1*sc,  y, 3*sc, 5*sc);
    // Feet
    ctx.fillStyle = '#0a1c30';
    ctx.fillRect(x - 5*sc, y + 4*sc, 4*sc, 3*sc);
    ctx.fillRect(x + 1*sc,  y + 4*sc, 4*sc, 3*sc);
    ctx.globalAlpha = 1;
  },
};

// ── Particles ───────────────────────────────────────────────

function mkParticles(cx, cy, col) {
  return Array.from({ length: 50 }, () => {
    const a = Math.random() * Math.PI * 2;
    const spd = 1.5 + Math.random() * 5;
    return {
      x: cx, y: cy,
      vx: Math.cos(a) * spd, vy: Math.sin(a) * spd - 2.5,
      r: col === 'blood' ? 180 + Math.floor(Math.random()*70) : 195 + Math.floor(Math.random()*60),
      g: col === 'blood' ? 10  + Math.floor(Math.random()*30) : 70  + Math.floor(Math.random()*90),
      b: col === 'blood' ? 10  : 15,
      a: 1, sz: 2.5 + Math.random() * 4,
    };
  });
}

// ── Main render loop ────────────────────────────────────────

function renderFrame() {
  if (!scene) return;
  const W = cv.width, H = cv.height;
  const gY   = H - 22;
  const bob  = Math.sin(scene.frame * 0.065) * 2.5;
  const sway = Math.sin(scene.frame * 0.055) * 2;
  scene.frame++;

  // Background
  drawBackground(scene.floor, scene.frame);
  tickEmbers();

  // Timer bar
  const timerRatio = Math.max(0, scene.ticks / scene.maxTicks);
  const barW = Math.floor(W * 0.28), barX = Math.floor(W * 0.63), barY = 10;
  ctx.fillStyle = '#0a0408'; ctx.fillRect(barX, barY, barW, 10);
  ctx.fillStyle = timerRatio > 0.35 ? '#7a2020' : '#d01818';
  ctx.fillRect(barX, barY, Math.floor(barW * timerRatio), 10);
  ctx.strokeStyle = '#4a1818'; ctx.lineWidth = 1; ctx.strokeRect(barX, barY, barW, 10);
  const tsz = Math.max(6, Math.floor(W / 95));
  ctx.fillStyle = '#905050';
  ctx.font = `${tsz}px "Press Start 2P"`;
  ctx.fillText('TIME', barX - 38, barY + 9);

  // Round indicator (normal battles only)
  if (!scene.isBoss) {
    ctx.fillStyle = 'rgba(200,145,58,0.85)';
    ctx.font = `${tsz}px "Press Start 2P"`;
    ctx.fillText(`${scene.round + 1}/${scene.maxRounds}`, barX - 38, barY + 24);
  }

  // Enemy HP pips
  if (scene.ea > 0.05) {
    const pipSz = 7, pipGap = 3;
    const pipsW = scene.enemyMaxHP * (pipSz + pipGap) - pipGap;
    const pipX  = scene.ex - Math.floor(pipsW / 2);
    const pipY  = gY - (scene.isBoss ? 60 : 50);
    for (let i = 0; i < scene.enemyMaxHP; i++) {
      ctx.fillStyle = i < scene.enemyHP ? '#cc1a1a' : '#1a0808';
      ctx.fillRect(pipX + i * (pipSz + pipGap), pipY, pipSz, pipSz);
      ctx.strokeStyle = '#5a1a1a'; ctx.lineWidth = 1;
      ctx.strokeRect(pipX + i * (pipSz + pipGap), pipY, pipSz, pipSz);
    }
  }

  // Enemy lunge toward player on wrong answer
  const ex = scene.ex + Math.round(scene.enemyShift);
  const es = scene.isBoss ? 3.2 : 2.0;
  SPRITES[scene.floor](ex, gY, es, Math.round(sway), scene.ea, scene.isBoss);

  // Player attack slash VFX
  if (scene.phase === 'player_atk') {
    const prog = Math.min(1, (scene.frame - scene.phaseStart) / 18);
    ctx.strokeStyle = `rgba(255,215,80,${(1 - prog).toFixed(2)})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(scene.px + scene.playerShift + 24, gY - 42);
    ctx.lineTo(scene.px + scene.playerShift + 60 + prog * 75, gY - 42);
    ctx.stroke();
    ctx.strokeStyle = `rgba(255,160,40,${(0.55 - prog * 0.55).toFixed(2)})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(scene.px + scene.playerShift + 20, gY - 52);
    ctx.lineTo(scene.px + scene.playerShift + 48 + prog * 60, gY - 32);
    ctx.stroke();
  }

  // Particles
  if (scene.particles && scene.particles.length) {
    scene.particles.forEach(p => {
      ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.a.toFixed(2)})`;
      ctx.fillRect(p.x - p.sz / 2, p.y - p.sz / 2, p.sz, p.sz);
      p.x += p.vx; p.y += p.vy; p.vy += 0.3; p.a -= 0.022; p.sz *= 0.97;
    });
    scene.particles = scene.particles.filter(p => p.a > 0.02);
  }

  // Player
  drawPlayer(scene.px, gY, 2.0, bob, scene.shk, scene.playerShift);

  // Overlay text (combo, round label, result)
  drawOverlayTexts(W, H);

  rafId = requestAnimationFrame(renderFrame);
}

function drawOverlayTexts(W, H) {
  // Combo text
  if (scene.comboText && scene.comboText.a > 0) {
    const ct = scene.comboText;
    ctx.save();
    ctx.globalAlpha = Math.min(1, ct.a);
    ctx.font = `${Math.max(10, Math.floor(W / 55))}px "Press Start 2P"`;
    ctx.fillStyle = '#f0c060';
    ctx.textAlign = 'center';
    ctx.fillText(ct.text, W / 2, ct.y);
    ctx.textAlign = 'left';
    ctx.restore();
    ct.a  -= 0.025;
    ct.y  -= 0.7;
  }

  // Round transition label
  if (scene.roundLabel && scene.roundLabel.a > 0) {
    const rl = scene.roundLabel;
    ctx.save();
    ctx.globalAlpha = Math.min(1, rl.a);
    ctx.font = `${Math.max(12, Math.floor(W / 40))}px "Press Start 2P"`;
    ctx.fillStyle = '#c8913a';
    ctx.textAlign = 'center';
    ctx.fillText(rl.text, W / 2, H / 2 - 10);
    ctx.textAlign = 'left';
    ctx.restore();
    rl.a -= 0.03;
  }

  // Boss name intro
  if (scene.bossIntro && scene.bossIntro.a > 0) {
    const bi = scene.bossIntro;
    const alpha = Math.min(1, bi.a);
    ctx.save();
    ctx.globalAlpha = alpha * 0.7;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, H * 0.3, cv.width, H * 0.4);
    ctx.globalAlpha = alpha;
    ctx.font = `${Math.max(12, Math.floor(cv.width / 32))}px "Press Start 2P"`;
    ctx.fillStyle = '#8b1a1a';
    ctx.textAlign = 'center';
    ctx.fillText(bi.name, cv.width / 2, H * 0.45);
    ctx.font = `${Math.max(7, Math.floor(cv.width / 65))}px "Press Start 2P"`;
    ctx.fillStyle = '#c8913a';
    ctx.fillText(bi.title, cv.width / 2, H * 0.55);
    ctx.textAlign = 'left';
    ctx.restore();
    bi.a -= 0.012;
  }
}

// ═══════════════════════════════════════════════════════════
// 4. AUDIO
// ═══════════════════════════════════════════════════════════

function playSound(type) {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    ac.resume().then(() => {
      switch (type) {
        case 'sword': {
          // Metallic sword swing
          const o = ac.createOscillator(); const g = ac.createGain();
          o.connect(g); g.connect(ac.destination);
          o.type = 'sawtooth'; o.frequency.value = 600;
          o.frequency.exponentialRampToValueAtTime(180, ac.currentTime + 0.12);
          g.gain.value = 0.08;
          g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.25);
          o.start(); o.stop(ac.currentTime + 0.25);
          break;
        }
        case 'hit': {
          // Deep impact thud
          const o = ac.createOscillator(); const g = ac.createGain();
          o.connect(g); g.connect(ac.destination);
          o.type = 'square'; o.frequency.value = 120;
          o.frequency.exponentialRampToValueAtTime(40, ac.currentTime + 0.15);
          g.gain.value = 0.12;
          g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.3);
          o.start(); o.stop(ac.currentTime + 0.3);
          break;
        }
        case 'wrong': {
          // Dissonant buzz
          const o = ac.createOscillator(); const g = ac.createGain();
          o.connect(g); g.connect(ac.destination);
          o.type = 'sawtooth'; o.frequency.value = 200;
          o.frequency.exponentialRampToValueAtTime(80, ac.currentTime + 0.4);
          g.gain.value = 0.09;
          g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.5);
          o.start(); o.stop(ac.currentTime + 0.5);
          break;
        }
        case 'victory': {
          // Ascending triumphant tones
          [880, 1100, 1320, 1760].forEach((f, i) => {
            const o = ac.createOscillator(); const g = ac.createGain();
            o.connect(g); g.connect(ac.destination);
            o.type = 'sine'; o.frequency.value = f;
            g.gain.setValueAtTime(0, ac.currentTime + i * 0.12);
            g.gain.linearRampToValueAtTime(0.07, ac.currentTime + i * 0.12 + 0.05);
            g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + i * 0.12 + 0.4);
            o.start(ac.currentTime + i * 0.12);
            o.stop(ac.currentTime + i * 0.12 + 0.45);
          });
          break;
        }
        case 'story': {
          // Soft bell
          const o = ac.createOscillator(); const g = ac.createGain();
          o.connect(g); g.connect(ac.destination);
          o.type = 'sine'; o.frequency.value = 660;
          o.frequency.linearRampToValueAtTime(880, ac.currentTime + 0.1);
          g.gain.value = 0.06;
          g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.8);
          o.start(); o.stop(ac.currentTime + 0.9);
          break;
        }
        case 'boss_intro': {
          // Dramatic chord
          [80, 120, 160].forEach((f, i) => {
            const o = ac.createOscillator(); const g = ac.createGain();
            o.connect(g); g.connect(ac.destination);
            o.type = 'sawtooth'; o.frequency.value = f;
            g.gain.value = 0.06;
            g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 1.2);
            o.start(ac.currentTime + i * 0.05);
            o.stop(ac.currentTime + 1.3);
          });
          break;
        }
        case 'boss_win': {
          // Epic victory fanfare
          [[880,0],[1100,0.15],[1320,0.30],[1760,0.45],[2200,0.60]].forEach(([f,t]) => {
            const o = ac.createOscillator(); const g = ac.createGain();
            o.connect(g); g.connect(ac.destination);
            o.type = 'sine'; o.frequency.value = f;
            g.gain.setValueAtTime(0, ac.currentTime + t);
            g.gain.linearRampToValueAtTime(0.1, ac.currentTime + t + 0.08);
            g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + t + 0.6);
            o.start(ac.currentTime + t); o.stop(ac.currentTime + t + 0.7);
          });
          break;
        }
        case 'coin': {
          const o = ac.createOscillator(); const g = ac.createGain();
          o.connect(g); g.connect(ac.destination);
          o.type = 'sine'; o.frequency.value = 1200;
          o.frequency.exponentialRampToValueAtTime(1800, ac.currentTime + 0.1);
          g.gain.value = 0.05;
          g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.22);
          o.start(); o.stop(ac.currentTime + 0.25);
          break;
        }
      }
    });
  } catch (_) {}
}

// ═══════════════════════════════════════════════════════════
// 5. BATTLE LOGIC
// ═══════════════════════════════════════════════════════════

let locked = false;
let ticker = null;

function killTicker() {
  if (ticker) { clearInterval(ticker); ticker = null; }
}

function flashScreen(correct) {
  const el = document.getElementById('flashOverlay');
  el.className = '';
  void el.offsetWidth;
  el.className = correct ? 'flash-green' : 'flash-red';
  setTimeout(() => { el.className = ''; }, 420);
}

// ── Lunge animations ───────────────────────────────────────

function animatePlayerLunge(dist, duration) {
  let progress = 0;
  const steps = duration / 16;
  const id = setInterval(() => {
    progress++;
    if (progress < steps * 0.5) {
      scene.playerShift = (progress / (steps * 0.5)) * dist;
    } else {
      scene.playerShift = ((steps - progress) / (steps * 0.5)) * dist;
    }
    if (progress >= steps) { clearInterval(id); scene.playerShift = 0; }
  }, 16);
}

function animateEnemyLunge(dist, duration) {
  let progress = 0;
  const steps = duration / 16;
  const id = setInterval(() => {
    progress++;
    if (progress < steps * 0.4) {
      scene.enemyShift = -(progress / (steps * 0.4)) * dist;
    } else {
      scene.enemyShift = -((steps - progress) / (steps * 0.6)) * dist;
    }
    if (progress >= steps) { clearInterval(id); scene.enemyShift = 0; }
  }, 16);
}

function playerShake() {
  let shakes = 0;
  const id = setInterval(() => {
    if (!scene) { clearInterval(id); return; }
    scene.shk = shakes % 2 === 0 ? 8 : -8;
    if (++shakes > 10) { clearInterval(id); if (scene) scene.shk = 0; }
  }, 38);
}

// ── Start battle ───────────────────────────────────────────

function startBattle(floor, isBoss) {
  killTicker();
  locked = false;

  const areaW = document.getElementById('gameArea').getBoundingClientRect().width || 560;
  const H = isBoss ? 220 : 190;
  startCanvas(Math.floor(areaW - 4), H);

  const da = document.getElementById('dynArea');
  da.innerHTML = '';
  da.appendChild(cv);

  // Select questions
  const qi = G.rooms[floor].qi;
  const pool = DB[floor].qs;
  const questions = isBoss
    ? [DB[floor].boss]
    : [
        pool[qi % pool.length],
        pool[(qi + 1) % pool.length],
        pool[(qi + 2) % pool.length],
      ];

  scene = {
    floor, isBoss,
    px: Math.floor(areaW * 0.15),
    ex: Math.floor(areaW * 0.71),
    exBase: Math.floor(areaW * 0.71),
    ea: 1,
    shk: 0,
    playerShift: 0,
    enemyShift: 0,

    questions,
    round: 0,
    maxRounds: questions.length,
    enemyHP: isBoss ? 1 : 3,
    enemyMaxHP: isBoss ? 1 : 3,
    correctCount: 0,

    phase: 'idle',
    phaseStart: 0,

    comboText: null,
    roundLabel: null,
    bossIntro: isBoss ? { name: DB[floor].bossName, title: DB[floor].bossTitle, a: 2.5 } : null,

    ticks: isBoss ? 250 : 220,
    maxTicks: isBoss ? 250 : 220,

    particles: [],
    embers: mkEmbers(),
    frame: 0,
  };

  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(renderFrame);

  // DOM skeleton
  const qDiv = document.createElement('div');
  qDiv.id = 'questionText';
  da.appendChild(qDiv);

  const og = document.createElement('div');
  og.id = 'optGrid';
  da.appendChild(og);

  const fbDiv = document.createElement('div');
  fbDiv.id = 'feedbackText';
  da.appendChild(fbDiv);

  if (isBoss) {
    playSound('boss_intro');
    // Delay showing question during boss intro
    setTimeout(() => showRoundQuestion(0), 2400);
  } else {
    showRoundQuestion(0);
  }
}

// ── Show a specific round's question ──────────────────────

function showRoundQuestion(round) {
  if (!scene) return;
  scene.round = round;
  const qObj = scene.questions[round];

  const qDiv = document.getElementById('questionText');
  if (qDiv) qDiv.textContent = qObj.q;

  const fbEl = document.getElementById('feedbackText');
  if (fbEl) fbEl.textContent = '';

  const og = document.getElementById('optGrid');
  if (og) {
    og.innerHTML = '';
    qObj.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => onAnswer(i, qObj));
      og.appendChild(btn);
    });
  }

  // Reset timer
  killTicker();
  scene.ticks = scene.maxTicks;
  ticker = setInterval(() => {
    if (!scene) { killTicker(); return; }
    scene.ticks = Math.max(0, scene.ticks - 1);
    if (scene.ticks === 0) { killTicker(); if (locked) onAnswer(-1, qObj); }
  }, 100);

  locked = true;
}

// ── Process an answer ─────────────────────────────────────

function onAnswer(selectedIdx, qObj) {
  if (!locked) return;
  killTicker();
  locked = false;

  const correct = selectedIdx === qObj.ok;
  flashScreen(correct);

  // Disable buttons + highlight
  document.querySelectorAll('.opt-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === qObj.ok)         btn.classList.add('correct');
    else if (i === selectedIdx) btn.classList.add('wrong');
  });

  const fbEl = document.getElementById('feedbackText');
  if (fbEl) {
    fbEl.textContent = correct
      ? `✓ ${qObj.ex}`
      : `✗ 正确答案：${qObj.opts[qObj.ok]} — ${qObj.ex}`;
  }

  if (correct) {
    G.streak = (G.streak || 0) + 1;
    const bonus = G.streak >= 3 ? 10 : G.streak >= 2 ? 5 : 0;
    const xpGain = (scene.isBoss ? 60 : 20) + bonus;
    G.xp = Math.min(600, G.xp + xpGain);
    saveGame(); updateHUD();

    playSound('sword');
    setTimeout(() => playSound('hit'), 180);

    // Player lunges right
    scene.phase = 'player_atk';
    scene.phaseStart = scene.frame;
    animatePlayerLunge(50, 380);

    // Blood particles on impact
    setTimeout(() => {
      if (scene) {
        scene.particles.push(...mkParticles(scene.ex - 20, cv.height - 55, 'blood'));
        scene.enemyHP = Math.max(0, scene.enemyHP - 1);
      }
    }, 220);

    // Combo text
    if (G.streak >= 3) {
      scene.comboText = { text: `連 ${G.streak}×！`, a: 2.2, y: cv.height * 0.45 };
    } else if (G.streak === 2) {
      scene.comboText = { text: '连击！', a: 2.0, y: cv.height * 0.45 };
    }

    const notify = bonus > 0
      ? `⚔ 击中! +${xpGain} XP (连击+${bonus})`
      : `⚔ 击中! +${xpGain} XP`;
    setNotify(notify);

    // After animation: check result
    setTimeout(() => {
      if (!scene) return;

      if (scene.enemyHP === 0) {
        // Enemy defeated
        scene.phase = 'die';
        scene.particles.push(...mkParticles(scene.ex, cv.height - 55, 'gold'));
        let fadeSteps = 0;
        const fadeId = setInterval(() => {
          if (!scene) { clearInterval(fadeId); return; }
          if (++fadeSteps > 12) { scene.ea = 0; clearInterval(fadeId); }
          else scene.ea = Math.max(0, 1 - fadeSteps / 12);
        }, 40);

        if (scene.isBoss) {
          playSound('boss_win');
          locked = true;
          setTimeout(() => { locked = false; finishBossWin(scene.floor); }, 1100);
        } else {
          playSound('victory');
          G.rooms[scene.floor].battle = true;
          G.rooms[scene.floor].qi = (G.rooms[scene.floor].qi + scene.maxRounds) % DB[scene.floor].qs.length;
          saveGame(); updateHUD();
          setNotify(`🏆 敌人已倒下！ (${scene.correctCount + 1}/${scene.maxRounds} 击中)`);
          setTimeout(() => { stopCanvas(); showIdle(); renderRooms(); }, 1100);
        }
      } else if (!scene.isBoss) {
        scene.correctCount++;
        // Advance to next round
        setTimeout(() => advanceRound(), 200);
      }
    }, 900);

  } else {
    // Wrong answer
    G.streak = 0;
    const hpLoss = scene.isBoss ? 25 : 15;
    G.hp = Math.max(0, G.hp - hpLoss);
    saveGame(); updateHUD();

    playSound('wrong');
    playerShake();

    // Enemy lunges toward player
    animateEnemyLunge(65, 480);
    setTimeout(() => {
      if (scene) scene.particles.push(...mkParticles(scene.px + 30, cv.height - 45, 'blood'));
    }, 240);

    setNotify(`✗ -${hpLoss} HP`);

    setTimeout(() => {
      if (G.hp <= 0) { showDeathScreen(); return; }

      if (scene.isBoss) {
        // Boss: retry same question
        showRoundQuestion(0);
      } else {
        advanceRound();
      }
    }, 1100);
  }
}

// ── Advance to next round ─────────────────────────────────

function advanceRound() {
  if (!scene) return;
  const nextRound = scene.round + 1;

  if (nextRound >= scene.maxRounds) {
    // Battle over — tally result
    const hits = scene.correctCount + (scene.enemyHP === 0 ? 1 : 0);

    if (hits >= 2) {
      // Victory (2/3 or 3/3 correct)
      G.rooms[scene.floor].battle = true;
      playSound('victory');
      setNotify(`⚔ 战斗胜利！${hits}/${scene.maxRounds} 命中`);
    } else {
      // Retreat (0/3 or 1/3)
      setNotify(`✗ 败退…再来一次！${hits}/${scene.maxRounds} 命中`);
    }

    G.rooms[scene.floor].qi = (G.rooms[scene.floor].qi + scene.maxRounds) % DB[scene.floor].qs.length;
    saveGame(); updateHUD();

    setTimeout(() => { stopCanvas(); showIdle(); renderRooms(); }, 900);

  } else {
    // Show "next round" label then show next question
    scene.roundLabel = { text: `第 ${nextRound + 1} 轮`, a: 2.5 };
    setTimeout(() => showRoundQuestion(nextRound), 600);
  }
}

// ── Boss win ───────────────────────────────────────────────

function finishBossWin(floor) {
  stopCanvas();
  G.rooms[floor].boss = true;
  G.cleared[floor]    = true;
  if (floor < 6) G.floor = floor + 1;
  saveGame(); updateHUD();

  if (typeof confetti !== 'undefined') {
    confetti({ particleCount: 250, spread: 140, origin: { y: 0.5 },
      colors: ['#f0c060','#c8913a','#8b1a1a','#e8dcc8','#ffffff'] });
  }

  const msg = floor < 6
    ? `🎉 第${floor}层解放！通往第${floor + 1}层！`
    : '🏆 全部通关！六层罪孽地下城已征服！';
  setNotify(msg);

  setTimeout(() => { showIdle(); syncUI(); }, 1100);
}

// ── Story room ─────────────────────────────────────────────

function startStory(floor, sObj) {
  killTicker();
  locked = true;
  stopCanvas();
  playSound('story');

  const da = document.getElementById('dynArea');
  da.innerHTML = '';

  const wrap = document.createElement('div');
  wrap.className = 'story-wrap';

  const hdr = document.createElement('div');
  hdr.className = 'story-header';
  hdr.textContent = '◈ 典籍回廊 ◈';
  wrap.appendChild(hdr);

  const quote = document.createElement('div');
  quote.className = 'story-quote';

  const pyDiv = document.createElement('div');
  pyDiv.className = 'story-pinyin';

  const exDiv = document.createElement('div');
  exDiv.className = 'story-explain';

  const btn = document.createElement('button');
  btn.id = 'claimBtn';
  btn.textContent = '◈ 领取智慧 (+10 XP)';
  btn.style.display = 'none';

  btn.addEventListener('click', () => {
    if (!locked) return;
    G.xp = Math.min(600, G.xp + 10);
    G.rooms[floor].story = true;
    locked = false;
    playSound('coin');
    saveGame(); updateHUD();
    setNotify('✨ 智慧之光 +10 XP');
    setTimeout(() => { showIdle(); renderRooms(); }, 400);
  });

  wrap.appendChild(quote);
  wrap.appendChild(pyDiv);
  wrap.appendChild(exDiv);
  wrap.appendChild(btn);
  da.appendChild(wrap);

  // Typewriter effect
  const fullText = sObj.text;
  let i = 0;
  quote.textContent = '';

  const cursor = document.createElement('span');
  cursor.className = 'tw-cursor';
  cursor.textContent = '▌';
  quote.appendChild(cursor);

  const typeId = setInterval(() => {
    if (i < fullText.length) {
      quote.insertBefore(document.createTextNode(fullText[i]), cursor);
      i++;
    } else {
      clearInterval(typeId);
      cursor.remove();

      // Reveal pinyin + explanation after typing done
      setTimeout(() => {
        pyDiv.textContent = sObj.py || '';
        setTimeout(() => {
          exDiv.textContent = `📖 ${sObj.ex}`;
          setTimeout(() => {
            btn.style.display = '';
          }, 300);
        }, 200);
      }, 300);
    }
  }, 60);
}

// ── Death screen ───────────────────────────────────────────

function showDeathScreen() {
  stopCanvas(); killTicker(); locked = false;
  document.getElementById('deathMsg').textContent = `当前经验值: ${G.xp} XP · 连击: ${G.streak || 0}`;
  document.getElementById('deathScreen').classList.add('visible');
}

function handleDeath() {
  document.getElementById('deathScreen').classList.remove('visible');
  if (G.floor > 1) {
    G.floor--;
    const qi = G.rooms[G.floor]?.qi ?? 0;
    G.rooms[G.floor] = { battle: false, story: false, boss: false, qi };
    G.cleared[G.floor] = false;
  } else {
    G.rooms[1] = { battle: false, story: false, boss: false, qi: 0 };
  }
  G.hp = 70;
  saveGame();
  setNotify('⚰ 灵魂庇护所 — 重整旗鼓');
  showIdle(); syncUI();
}

// ═══════════════════════════════════════════════════════════
// 6. UI RENDERING
// ═══════════════════════════════════════════════════════════

function setNotify(msg) { document.getElementById('notify').textContent = msg; }

function showIdle() {
  stopCanvas();
  const da = document.getElementById('dynArea');
  da.innerHTML = '';
  const screen = document.createElement('div');
  screen.id = 'idleScreen';
  const h2 = document.createElement('h2');
  h2.textContent = '选择一个房间开始';
  const p = document.createElement('p');
  p.textContent = '完成战斗之间与剧情回廊，解锁领主挑战';
  screen.appendChild(h2); screen.appendChild(p);
  da.appendChild(screen);
}

function updateHUD() {
  document.getElementById('hpFill').style.width  = `${G.hp}%`;
  document.getElementById('hpNum').textContent   = G.hp;
  document.getElementById('xpFill').style.width  = `${Math.min(100, G.xp / 6)}%`;
  document.getElementById('xpNum').textContent   = G.xp;
  document.getElementById('flNum').textContent   = G.floor;

  const streakEl = document.getElementById('streakNum');
  if (streakEl) {
    streakEl.textContent = G.streak || 0;
    streakEl.parentElement.style.display = G.streak >= 2 ? '' : 'none';
  }
}

function renderFloorMap() {
  const list = document.getElementById('fnList');
  list.innerHTML = '';
  for (let i = 1; i <= 6; i++) {
    const unlocked  = i === 1 || !!G.cleared[i - 1];
    const isCurrent = i === G.floor;
    const isDone    = !!G.cleared[i];

    const node = document.createElement('div');
    node.className = ['floor-node', unlocked ? 'open' : '', isCurrent ? 'cur' : '', isDone ? 'clr' : ''].filter(Boolean).join(' ');
    node.innerHTML = `<div>第${i}层</div><div class="floor-node-sub">${DB[i].name}</div>`;

    if (unlocked) {
      node.addEventListener('click', () => {
        if (i !== G.floor) {
          G.floor = i; saveGame();
          setNotify(`进入第${i}层 · ${DB[i].name}`);
          showIdle(); syncUI();
        }
      });
    }
    list.appendChild(node);
  }
}

function renderRooms() {
  const f = G.floor;
  const r = G.rooms[f];
  const bossUnlocked = r.battle && r.story;
  const bossDone     = r.boss;

  const bossMsg = document.getElementById('bossMsg');
  bossMsg.classList.toggle('visible', bossUnlocked && !bossDone);

  const defs = [
    {
      type: 'battle', icon: '⚔', title: '战斗之间',
      sub:    `3轮问答 · ${DB[f].name}`,
      status: r.battle ? '✓ 已征服' : '词汇考验',
      done: r.battle, locked: false,
    },
    {
      type: 'story', icon: '📜', title: '剧情回廊',
      sub:    '阅读经典名句',
      status: r.story  ? '✓ 已征服' : '阅读典籍',
      done: r.story, locked: false,
    },
    {
      type: 'boss', icon: '👑', title: '领主之间',
      sub:    bossUnlocked ? DB[f].bossName : '先完成前两间',
      status: bossDone ? '✓ 已征服' : (bossUnlocked ? '可挑战!' : '🔒'),
      done: bossDone, locked: !bossUnlocked && !bossDone,
    },
  ];

  const grid = document.getElementById('roomGrid');
  grid.innerHTML = '';

  defs.forEach(def => {
    const card = document.createElement('div');
    card.className = ['room-card', def.locked ? 'locked' : '', def.done ? 'done' : ''].filter(Boolean).join(' ');
    card.setAttribute('role', 'listitem');
    card.innerHTML = `
      <span class="icon">${def.icon}</span>
      <div class="title">${def.title}</div>
      <div class="room-sub">${def.sub}</div>
      <div class="status">${def.status}</div>`;

    card.addEventListener('click', () => {
      if (def.locked) { setNotify('先完成战斗之间与剧情回廊！'); return; }
      if (def.done)   { setNotify(`此房间已征服 ✓`);              return; }
      setNotify('');

      if (def.type === 'battle') {
        startBattle(f, false);
      } else if (def.type === 'story') {
        const si = Math.floor(Math.random() * DB[f].storys.length);
        startStory(f, DB[f].storys[si]);
      } else {
        startBattle(f, true);
      }
    });
    grid.appendChild(card);
  });
}

function syncUI() { updateHUD(); renderFloorMap(); renderRooms(); }

// ═══════════════════════════════════════════════════════════
// 7. SETTINGS
// ═══════════════════════════════════════════════════════════

function initSettings() {
  const toggle   = document.getElementById('settingsToggle');
  const panel    = document.getElementById('settingsPanel');
  const resetBtn = document.getElementById('resetBtn');
  const confirm  = document.getElementById('resetConfirm');
  const yes      = document.getElementById('resetYes');
  const no       = document.getElementById('resetNo');
  const contBtn  = document.getElementById('continueBtn');

  toggle.addEventListener('click', () => {
    const hidden = panel.hasAttribute('hidden');
    hidden ? panel.removeAttribute('hidden') : panel.setAttribute('hidden', '');
    confirm.setAttribute('hidden', '');
  });

  resetBtn.addEventListener('click', () => confirm.removeAttribute('hidden'));
  yes.addEventListener('click', () => {
    panel.setAttribute('hidden', ''); confirm.setAttribute('hidden', '');
    resetGame();
  });
  no.addEventListener('click', () => confirm.setAttribute('hidden', ''));
  contBtn.addEventListener('click', handleDeath);
}

// ═══════════════════════════════════════════════════════════
// 8. BOOT
// ═══════════════════════════════════════════════════════════

loadGame();
initSettings();
showIdle();
syncUI();
setNotify('⚔ 罪孽地下城 · 七年级语文 · 踏上征途');
