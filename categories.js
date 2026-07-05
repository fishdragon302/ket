/* KET 单词主题分类
   名词按主题归类；动词/形容词/功能词由词性自动归类。
   app 通过 catOf() 读取。多词短语用与 vocab.js 完全一致的写法。
*/
window.KET_CAT_META = [
  {name:"动物",icon:"🐾"},
  {name:"食物与饮料",icon:"🍎"},
  {name:"衣物与配饰",icon:"👕"},
  {name:"人物与家庭",icon:"👨‍👩‍👧"},
  {name:"职业",icon:"💼"},
  {name:"身体与健康",icon:"🩺"},
  {name:"学校与学习",icon:"🎒"},
  {name:"运动与娱乐",icon:"⚽"},
  {name:"交通与旅行",icon:"✈️"},
  {name:"自然与天气",icon:"🌦️"},
  {name:"地点与建筑",icon:"🏙️"},
  {name:"家居与家具",icon:"🛋️"},
  {name:"科技与媒体",icon:"💻"},
  {name:"时间与日期",icon:"📅"},
  {name:"购物与金钱",icon:"🛒"},
  {name:"其他名词",icon:"📦"},
  {name:"动词·日常动作",icon:"🏃"},
  {name:"动词·情感思考",icon:"💭"},
  {name:"动词·交流表达",icon:"💬"},
  {name:"动词·移动旅行",icon:"🚶"},
  {name:"动词·其他",icon:"⚙️"},
  {name:"形容词·情绪感受",icon:"😊"},
  {name:"形容词·外观颜色",icon:"🎨"},
  {name:"形容词·性格品质",icon:"🧠"},
  {name:"形容词·其他",icon:"🏷️"},
  {name:"功能词与其他",icon:"🔤"}
];

window.KET_CAT_NOUNS = {
"动物":["animal","bat","bear","bee","beetle","bird","butterfly","camel","cat","cow","creature","crocodile","dinosaur","dog","dolphin","donkey","duck","eagle","elephant","frog","giraffe","goat","hippo","horse","insect","jellyfish","kangaroo","kitten","lion","lizard","monkey","mouse","octopus","panda","parrot","penguin","polar bear","pet","puppy","rabbit","shark","sheep","snail","snake","spider","swan","tiger","tortoise","whale","wildlife","zebra","wing","tail","nest","fur"],
"食物与饮料":["apple","barbecue","bean","biscuit","bread","breakfast","burger","butter","cake","candy","carrot","cereal","cheese","chicken","chilli","chocolate","coffee","cola","cookie","cooking","curry","dessert","dinner","egg","fast food","French fries","fruit","garlic","grape","honey","ice cream","ingredient","jam","juice","lemon","lemonade","lunch","main course","mango","meal","meat","melon","milk","mineral water","mushroom","omelette","onion","pasta","pear","pepper","picnic","pizza","potato","recipe","rice","salad","salt","sandwich","sauce","sausage","snack","soup","steak","strawberry","sugar","supper","tea","toast","tomato","vegetable","water","yoghurt"],
"衣物与配饰":["backpack","bathing suit","belt","blouse","boot","bracelet","cap","coat","earring","glove","handbag","hat","hoodie","jacket","jewellery","jumper","make-up","necklace","perfume","purse","raincoat","scarf","shirt","shoe","skirt","sock","suit","sweater","swimming costume","swimsuit","tie","T-shirt","trainer","umbrella","uniform","wallet"],
"人物与家庭":["aunt","baby","boy","boyfriend","brother","child","cousin","dad","daughter","family","father","friend","girl","girlfriend","grandchild","granddaughter","grandfather","grandma","grandmother","grandpa","grandparent","grandson","granny","guest","guy","husband","man","member","mom","mother","mum","neighbour","parent","partner","penfriend","person","sister","son","teenager","uncle","wife","woman"],
"职业":["actor","artist","assistant","boss","businessman","business person","businesswoman","career","chef","cleaner","coach","colleague","dancer","dentist","doctor","driver","engineer","explorer","farmer","footballer","football player","guide","headteacher","journalist","king","manager","mechanic","musician","nurse","occupation","painter","photographer","pilot","police officer","queen","receptionist","scientist","secretary","shop assistant","singer","staff","teacher","tennis player","tour guide","waiter","waitress","worker","writer","job"],
"身体与健康":["arm","beard","blood","body","brain","ear","eye","face","finger","foot","hair","hand","head","headache","health","heart","leg","medicine","mouth","neck","nose","pain","stomach","stomach ache","toe","tooth","toothache"],
"学校与学习":["art","biology","chemistry","class","classmate","classroom","college","course","degree","dictionary","diploma","eraser","exam","examination","geography","grade","history","homework","lesson","library","mark","maths","physics","project","pupil","question","ruler","schoolchild","science","sentence","spelling","student","subject","term","test","textbook","timetable","university","vocabulary","word","blackboard","page","paragraph","pen","pencil","pencil case","notebook","rubber","school","IT"],
"运动与娱乐":["album","badminton","ball","band","baseball","basketball","board game","camping","cartoon","character","chess","cinema","circus","climbing","clown","club","comedy","comic","competition","concert","cricket","cycling","dancing","disco","drum","festival","fishing","football","game","goal","golf","guitar","gym","hip hop","hobby","hockey","holiday","ice skating","instrument","jazz","kite","magazine","match","movie","movie star","movie theater","music","opera","party","photography","piano","player","playground","pop","poster","prize","puzzle","racket","rap","reading","review","riding","rugby","running","sailing","show","singing","skateboard","skateboarding","skating","skiing","snowboard","snowboarding","sport","sports centre","stadium","story","surfboard","surfing","swimming","table tennis","team","tennis","ticket","title","toy","video game","violin","volleyball","walking","windsurfing","fan","celebrity"],
"交通与旅行":["aeroplane","airport","bicycle","bike","boat","bridge","bus","bus station","bus stop","car","car park","crossing","flight","gate","journey","lorry","luggage","map","motorbike","motorway","parking lot","passenger","passport","petrol","petrol station","gas station","plane","platform","port","road","roundabout","scooter","ship","station","suitcase","taxi","tour","tourist","traffic","traffic light","train","tram","transport","trip","tyre","wheel","sightseeing","harbour"],
"自然与天气":["air","autumn","beach","cloud","coast","countryside","desert","environment","field","fog","forest","grass","ground","hill","ice","island","lake","moon","mountain","nature","ocean","plant","rainforest","river","rock","sea","season","sky","space","spring","storm","summer","sun","thunderstorm","tree","weather","wind","winter","wood","flower"],
"地点与建筑":["apartment","apartment building","bank","bookshop","bookstore","building","cafeteria","castle","city","city centre","department store","drugstore","factory","flat","gallery","garage","garden","grocery store","guest-house","hall","hospital","hotel","house","market","museum","office","pharmacy","place","police station","pool","post office","restaurant","roof","room","shopping centre","store","street","supermarket","swimming pool","theatre","tourist information centre","town","village","zoo","area","campsite","corner","entrance","exit","floor","wall","window","door","ceiling"],
"家居与家具":["alarm clock","armchair","bath","bathroom","bathtub","bed","bedroom","blanket","bookcase","bookshelf","bottle","bowl","box","cabinet","calendar","carpet","chair","clock","closet","comb","cooker","cup","cupboard","curtain","desk","diary","dining room","dish","drawer","envelope","fork","fridge","furniture","gift","key","kitchen","knife","lamp","letter","living room","mirror","newspaper","oven","pillow","plate","postcard","present","refrigerator","seat","shelf","sink","sitting room","soap","sofa","spoon","stamp","table","toilet","toothbrush","towel","wardrobe","washing machine","bin","picture","address","mail"],
"科技与媒体":["app","battery","blog","camera","CD","CD player","cell phone","chat","chatroom","computer","digital camera","document","DVD","DVD player","file","folder","headphones","internet","keyboard","machine","microphone","news","password","printer","program","programme","radio","screen","selfie","social media","software","speaker","tablet","technology","text message","video","web","web page","website","wifi"],
"时间与日期":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","January","February","March","April","May","June","July","August","September","October","November","December","morning","afternoon","evening","night","midday","midnight","noon","day","week","weekday","weekend","month","year","hour","minute","moment","time","date","century","birthday"],
"购物与金钱":["money","dollar","cent","euro","penny","pence","price","bill","credit card","discount","sale","receipt","customer","shopper","shopping","cheque","for sale"]
};

/* 动词细分（未列出的动词归入「动词·其他」） */
window.KET_CAT_VERBS = {
"动词·日常动作":["bake","boil","camp","carry","catch","climb","cook","cut","dive","drop","eat","fill","fix","fit","hit","hold","hurry","jump","mix","pack","pull","push","put","run","sail","save","share","shut","sit","skate","ski","sleep","smoke","stand","start","stay","surf","throw","turn","wait","wake","walk","wash","watch","wear","work","get up","sit down","lie down","put on","take off","try on","wake up","wash up","pick up","work out","tidy up","get dressed","get fit"],
"动词·情感思考":["agree","believe","decide","enjoy","feel","forget","guess","hate","hope","know","like","love","matter","mean","mind","miss","need","prefer","remember","suppose","think","understand","want","worry"],
"动词·交流表达":["add","ask","allow","describe","discuss","excuse","explain","invite","join","point","repeat","say","seem","show","shout","sing","sound","speak","spell","suggest","tell","thank","give somebody a call"],
"动词·移动旅行":["arrive","come","cycle","drive","fall","fly","follow","go","leave","move","race","return","travel","visit","come back","fall over","get back","get off","get on","go out","grow up"]
};
/* 形容词细分（未列出的形容词归入「形容词·其他」） */
window.KET_CAT_ADJ = {
"形容词·情绪感受":["afraid","amazed","angry","bored","excited","frightened","glad","happy","interested","nervous","pleased","relaxing","sad","scared","sorry","sure","surprised","surprising","tired","unhappy","upset","worried"],
"形容词·外观颜色":["attractive","beautiful","big","dark","fat","golden","good-looking","green","high","huge","large","little","long","low","pale","pink","pretty","purple","red","round","short","slim","small","striped","tall","thin","wide","white","yellow","dirty"],
"形容词·性格品质":["brave","busy","careful","clever","friendly","funny","healthy","lazy","polite","quiet","serious","shy","strong"]
};

/* 构建反查表 */
function _buildMap(obj){var m={};for(var c in obj){obj[c].forEach(function(w){if(!(w in m))m[w]=c;});}return m;}
window.KET_NOUN_MAP=_buildMap(window.KET_CAT_NOUNS);
window.KET_VERB_MAP=_buildMap(window.KET_CAT_VERBS);
window.KET_ADJ_MAP=_buildMap(window.KET_CAT_ADJ);
