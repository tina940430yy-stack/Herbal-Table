const recipes = [
 {id:'lotus-salad',name:'蓮荷清香沙拉',category:'沙拉',plants:['蓮'],parts:['蓮藕','蓮子（概念搭配）'],flavor:'清爽、脆口、帶有淡雅植物香氣',idea:'以蓮的不同部位作為餐桌探索起點，透過口感與色彩的搭配，呈現清新、分層的料理想像。',description:'清爽系的植物沙拉提案，從蓮藕的脆口印象延伸到不同質地的搭配。',status:'概念菜色｜食材與部位待查核',color:'#dfe8d6',shape:'salad'},
 {id:'perilla-drink',name:'紫蘇梅氣飲',category:'飲品',plants:['紫蘇'],parts:['紫蘇葉','梅子（搭配食材）'],flavor:'草本香氣、酸甜、清爽',idea:'以紫蘇葉的香氣作為飲品主題，搭配酸甜風味，探索草本植物如何進入現代日常飲食。',description:'以紫蘇的香氣為主角，搭配酸甜梅香的飲品概念。',status:'概念菜色｜配方與使用量待測試',color:'#ead8db',shape:'drink'},
 {id:'cinnamon-porridge',name:'土肉桂暖香粥',category:'湯品',plants:['肉桂'],parts:['土肉桂葉或樹皮（擇一查核）'],flavor:'溫暖、木質、帶有辛香調性',idea:'比較不同部位與品種的香氣表現，先以風味紀錄為主，不預設療效或固定食用方式。',description:'從臺灣土肉桂的香氣出發，延伸出溫暖系主食的試驗概念。',status:'概念菜色｜植物品種、部位與食安需專業確認',color:'#eadac0',shape:'soup'},
 {id:'mulberry-pancake',name:'桑葉香草煎餅',category:'點心',plants:['桑樹'],parts:['桑葉（可食性及使用方式待查）'],flavor:'穀物香、植物清香、微微烘焙氣息',idea:'將桑樹研究轉化成可被觀察的料理測試：記錄色澤、香氣、口感與接受度，並保留實驗結果。',description:'以桑樹為主題的點心開發草案，呈現植物如何從圖鑑延伸到料理試驗。',status:'概念菜色｜不可視為已確認食譜',color:'#e0e8cf',shape:'pancake'},
 {id:'shell-ginger-rice',name:'月桃葉香蒸飯',category:'主食',plants:['月桃'],parts:['月桃葉作為包裹／香氣媒介（不代表葉片食用）'],flavor:'葉香、米飯蒸氣、淡雅草本氣息',idea:'以包裹、蒸煮和香氣傳遞作為設計觀察，清楚區分接觸食材的部位與實際食用的部位。',description:'以月桃葉的包裹與香氣意象，延伸臺灣植物與料理方式的連結。',status:'概念菜色｜葉片用途需依資料與測試確認',color:'#dfe7d1',shape:'rice'},
 {id:'fishmint-noodles',name:'魚腥草青醬麵',category:'主食',plants:['魚腥草'],parts:['地上部位（食用性、來源及處理方式待查）'],flavor:'鮮明草本氣味、清新綠色調',idea:'將「氣味接受度」作為料理實驗問題之一，而不是先假設所有人都會喜歡。可設計盲測與描述詞紀錄。',description:'以魚腥草鮮明的草本氣味作為風味研究題目。',status:'概念菜色｜須先完成部位與食安查核',color:'#e1e7d3',shape:'pasta'},
 {id:'paper-mulberry-bowl',name:'構樹果香優格碗',category:'點心',plants:['構樹'],parts:['果實（物種辨識與可食性待查）'],flavor:'酸甜與果香的搭配想像',idea:'以構樹作為植物辨識與部位查核的案例；在資料確認前僅保留概念，不建議直接試吃或採集。',description:'以植物果實的外觀與季節感作為視覺概念，待完成物種和食用性查核後再決定是否發展。',status:'概念菜色｜先查核物種與食用性',color:'#e9ded0',shape:'berry'}
];
const plants = [
 {id:'桑樹',latin:'Morus alba L.（示意）',tags:['餐桌應用','生活文化'],parts:'葉、果實、枝、樹皮、根等部位可作為研究分類欄位；不同用途與可食性需逐項查證。',use:'可從桑葉飲食、果實風味、傳統栽培與生活記憶等方向蒐集資料。',related:['mulberry-pancake'],intro:'目前畢製聚焦的研究植物。建議將「部位用途」、「可食性」與「文化意義」分成不同欄位，不以單一概念概括全株。',tone:'#dfe8d6',type:'leaf'},
 {id:'肉桂／臺灣土肉桂',latin:'Cinnamomum osmophloeum（需核名）',tags:['餐桌應用','香氣與調味'],parts:'葉、樹皮等部位需依確切品種與資料分別確認，不能直接互相替代。',use:'可研究臺灣土肉桂的香氣描述、調味文化及品種辨識。',related:['cinnamon-porridge'],intro:'適合從香氣與調味切入；正式資料應確認學名、部位、料理使用方式及引用來源。',tone:'#eadcc2',type:'bark'},
 {id:'月桃',latin:'Alpinia zerumbet（示意）',tags:['香氣與調味','生活文化'],parts:'葉片可研究包裹、器物與香氣媒介等用途；請勿因此推定葉片為食用部位。',use:'可從包粽、蒸煮、編織與日常器用等文化素材延伸。',related:['shell-ginger-rice'],intro:'可用「食材接觸部位」和「實際食用部位」的差異，呈現一株植物有多種用途但不一定都入口。',tone:'#dfe8d6',type:'leaf'},
 {id:'紫蘇',latin:'Perilla frutescens（示意）',tags:['餐桌應用','香氣與調味'],parts:'葉片可作為香氣與料理研究的起點；品種、使用方式及食用安全需依可靠資料確認。',use:'可比較香氣描述詞、接受度、顏色變化與搭配方式。',related:['perilla-drink'],intro:'適合發展感官測試，例如讓試吃者用自己的詞彙描述香氣與風味，再整理常見詞群。',tone:'#e8dce0',type:'leaf'},
 {id:'蓮',latin:'Nelumbo nucifera（示意）',tags:['餐桌應用','生活文化'],parts:'蓮藕、蓮子等常見食材可作為研究切入；其他部位須分項查證用途及食用性。',use:'可從季節料理、食材質地、外觀與餐桌擺盤觀察出發。',related:['lotus-salad'],intro:'可把「部位圖譜」做成視覺化探索，但每個部位都應有對應來源與使用狀態標籤。',tone:'#f1d7d3',type:'lotus'},
 {id:'魚腥草',latin:'Houttuynia cordata（示意）',tags:['餐桌應用','生活文化'],parts:'需確認研究地區、品種辨識、使用部位與處理方式後，再決定料理開發方向。',use:'可把氣味接受度、地方飲食經驗與世代差異設計成訪談／感官觀察主題。',related:['fishmint-noodles'],intro:'風味特徵明顯，適合用來研究「熟悉／陌生的植物氣味」如何影響飲食選擇。',tone:'#e0e8d8',type:'leaf'},
 {id:'構樹',latin:'Broussonetia papyrifera（示意）',tags:['生活文化','香氣與調味'],parts:'果實、葉與韌皮等用途需分別查證；植物辨識與可食性是任何料理開發前的必要步驟。',use:'可從植物纖維、民俗利用、地方生態及部位辨識等角度探索。',related:['paper-mulberry-bowl'],intro:'適合作為「可用不等於可食」的案例；在確認來源與安全性之前，只做文化與視覺資料整理。',tone:'#e9ded0',type:'berry'}
];
const journals = [
 {date:'研究階段 01',title:'建立植物部位的查核表',description:'先把「植物名稱、學名、部位、用途、可食性、資料來源、查核狀態」整理成共同欄位，避免為了做出完整圖譜而把未確認的部位放進料理。',detail:'建議記錄：查核問題／使用的資料來源／能支持的結論／尚待確認之處／下一步行動。'},
 {date:'研究階段 02',title:'把風味觀察變成可比較的紀錄',description:'料理測試不只寫好不好吃，也可以觀察香氣、口感、顏色、處理方式與受試者的描述詞。',detail:'建議以同一張測試表記錄條件，並清楚區分團隊成員的主觀感受與可重複觀察到的差異。'},
 {date:'研究階段 03',title:'讓失敗也成為設計素材',description:'若氣味太強、口感不合、顏色改變或部位難以處理，都可以成為下一輪調整的理由。',detail:'可呈現原始版本、遇到的問題、改動項目、修正後差異；沒有實際試作前，不先填入虛構的成功結果。'}
];
const saved = new Set();
let activeRecipeFilter='全部', activePlantFilter='全部', currentRotation=0, spinning=false, toastTimer;
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
function leaf(x,y,rot,c='#789264',scale=1){return `<path d="M0 0 C-13 -19 -9 -31 1 -34 C16 -30 15 -13 0 0Z" transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})" fill="${c}" stroke="#60794e" stroke-width=".7"/>`;}
function svgDish(shape){
 const commonStart=`<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`;
 const bowl=`<ellipse cx="90" cy="91" rx="65" ry="15" fill="#d8c8aa" opacity=".6"/><ellipse cx="90" cy="74" rx="63" ry="33" fill="#fffdf4" stroke="#d5c5a7" stroke-width="2"/><ellipse cx="90" cy="70" rx="54" ry="26" fill="#f3ead6"/>`;
 const leaf=(x,y,rot,c='#789264',scale=1)=>`<path d="M0 0 C-13 -19 -9 -31 1 -34 C16 -30 15 -13 0 0Z" transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})" fill="${c}" stroke="#60794e" stroke-width=".7"/>`;
 let art='';
 if(shape==='salad'){art=bowl+`<g>${Array.from({length:6},(_,i)=>leaf(53+i*15,74+(i%2)*8,-35+i*14,['#6f8958','#9aaa79','#4f744c'][i%3],.8)).join('')}<g fill="#df9e91" stroke="#ce887c" stroke-width=".8">${[0,1,2,3,4].map((n)=>`<ellipse cx="${72+n*8}" cy="${56+(n%2)*8}" rx="5" ry="7" transform="rotate(${n*20} ${72+n*8} ${56+(n%2)*8})"/>`).join('')}</g><g fill="#e7d4a4">${[0,1,2,3].map(n=>`<circle cx="${63+n*17}" cy="${78+(n%2)*3}" r="3"/>`).join('')}</g></g>`}
 else if(shape==='drink'){art=`<ellipse cx="90" cy="110" rx="33" ry="6" fill="#c4b99e" opacity=".6"/><path d="M62 24 L119 24 L111 96 Q90 106 69 96Z" fill="#fff" opacity=".75" stroke="#cfbea2" stroke-width="2"/><path d="M66 55 L115 55 L110 94 Q90 101 70 94Z" fill="#c56d88" opacity=".82"/><path d="M67 62 L114 62 L112 78 Q87 83 68 76Z" fill="#e6a3ac" opacity=".8"/><g fill="#f3e5cd" opacity=".85"><rect x="72" y="43" width="13" height="15" rx="3" transform="rotate(-12 72 43)"/><rect x="94" y="48" width="15" height="13" rx="3" transform="rotate(18 94 48)"/><rect x="82" y="72" width="12" height="13" rx="3" transform="rotate(8 82 72)"/></g><path d="M91 24 L111 3" stroke="#789264" stroke-width="3"/><path d="M91 24 C68 4 61 20 91 24Z" fill="#82966d"/><path d="M92 23 C107 1 124 7 92 23Z" fill="#a4b58c"/>`}
 else if(shape==='soup'){art=`<ellipse cx="90" cy="99" rx="62" ry="12" fill="#d0bda0" opacity=".6"/><path d="M30 61 Q90 120 150 61 L141 92 Q90 119 39 92Z" fill="#e5d5b8" stroke="#cbb995" stroke-width="2"/><ellipse cx="90" cy="61" rx="60" ry="27" fill="#fff9e9" stroke="#c9b792" stroke-width="2"/><ellipse cx="90" cy="62" rx="51" ry="20" fill="#d9b36b"/><path d="M55 65 Q75 40 90 64 T126 62" fill="none" stroke="#f0d69c" stroke-width="4"/><g fill="#6e8256"><ellipse cx="67" cy="56" rx="9" ry="4" transform="rotate(-28 67 56)"/><ellipse cx="108" cy="71" rx="10" ry="4" transform="rotate(30 108 71)"/><ellipse cx="92" cy="49" rx="8" ry="4" transform="rotate(-10 92 49)"/></g><path d="M106 49 C90 36 95 27 105 30 C117 33 115 44 106 49Z" fill="#7f9562"/>`}
 else if(shape==='pancake'){art=`<ellipse cx="90" cy="94" rx="64" ry="13" fill="#d2c1a4" opacity=".6"/><ellipse cx="90" cy="72" rx="61" ry="31" fill="#fffdf3" stroke="#d1c1a2" stroke-width="2"/><ellipse cx="90" cy="68" rx="48" ry="24" fill="#d7a96f"/><ellipse cx="90" cy="65" rx="42" ry="18" fill="#ecc78f"/><g fill="#8b704d" opacity=".65">${[[67,61],[85,74],[103,57],[111,70],[78,52],[96,65]].map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="2.4"/>`).join('')}</g>${leaf(78,50,-30,'#708958',.7)}${leaf(111,56,38,'#8ba16e',.65)}`}
 else if(shape==='rice'){art=`<ellipse cx="90" cy="99" rx="65" ry="13" fill="#d4c5ab" opacity=".6"/><path d="M29 64 Q90 110 151 64 L141 89 Q90 119 39 89Z" fill="#d5c4a6" stroke="#c9b896" stroke-width="2"/><ellipse cx="90" cy="64" rx="61" ry="26" fill="#fff8e6" stroke="#c9b896" stroke-width="2"/><ellipse cx="90" cy="64" rx="47" ry="17" fill="#efe0bb"/><g fill="#fff8e8" stroke="#dfd1ad" stroke-width=".6">${Array.from({length:18},(_,i)=>`<ellipse cx="${57+(i*17)%68}" cy="${52+(i*11)%25}" rx="4" ry="2.5" transform="rotate(${(i*19)%70} ${57+(i*17)%68} ${52+(i*11)%25})"/>`).join('')}</g>${leaf(64,54,-35,'#76905d',.65)}${leaf(115,67,35,'#8ba173',.65)}`}
 else if(shape==='pasta'){art=`<ellipse cx="90" cy="97" rx="64" ry="13" fill="#d3c2a4" opacity=".6"/><ellipse cx="90" cy="73" rx="62" ry="30" fill="#fffdf4" stroke="#d4c3a5" stroke-width="2"/><ellipse cx="90" cy="70" rx="53" ry="22" fill="#cdd9b3"/><g fill="none" stroke="#e7ca89" stroke-width="4" stroke-linecap="round">${[0,1,2,3,4,5,6].map(i=>`<path d="M${46+i*13} ${58+(i%3)*7} q12 -12 19 0 t-8 14"/>`).join('')}</g>${leaf(65,65,-45,'#5e7e50',.7)}${leaf(112,53,20,'#76965e',.65)}<circle cx="89" cy="74" r="4" fill="#d99b8d"/><circle cx="104" cy="65" r="3" fill="#d99b8d"/>`}
 else {art=`<ellipse cx="90" cy="98" rx="64" ry="13" fill="#d3c2a4" opacity=".6"/><ellipse cx="90" cy="73" rx="62" ry="30" fill="#fffdf4" stroke="#d4c3a5" stroke-width="2"/><ellipse cx="90" cy="70" rx="52" ry="22" fill="#f3ead6"/><g fill="#5c7050">${[[60,58],[77,70],[97,58],[112,74],[80,53],[104,62]].map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="8"/>`).join('')}</g><g fill="#8d9c68">${[[68,72],[90,61],[121,61],[91,79]].map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="5"/>`).join('')}</g><circle cx="76" cy="59" r="3" fill="#d98f84"/><circle cx="101" cy="78" r="3" fill="#d98f84"/>`}
 return commonStart+art+'</svg>';
}
function svgPlant(type,tone){
 let main='';
 if(type==='bark') main=`<path d="M42 82 L93 29 L116 45 L64 98Z" fill="#a8784e" stroke="#825e3e"/><path d="M52 83 L101 35 M58 90 L109 41" stroke="#d6ad76" stroke-width="4"/><path d="M83 103 L132 57 L145 70 L95 116Z" fill="#d3ad72" stroke="#a78452"/><path d="M96 106 L137 66" stroke="#f0d2a1" stroke-width="3"/>${leaf(66,61,-45,'#819468',.75)}`;
 else if(type==='lotus') main=`<path d="M86 98 Q88 54 91 28" fill="none" stroke="#6d875b" stroke-width="3"/><path d="M90 78 C51 61 35 29 61 20 C84 17 91 49 90 78Z" fill="#f1b7b0" stroke="#d99189"/><path d="M90 78 C113 34 149 34 147 57 C142 78 117 82 90 78Z" fill="#e8a49d" stroke="#d99189"/><path d="M90 78 C79 41 93 11 108 23 C124 38 109 62 90 78Z" fill="#f5cbc1" stroke="#d99189"/><path d="M90 98 C70 73 52 73 43 87 C37 104 67 110 90 98Z" fill="#82976a"/>`;
 else if(type==='berry') main=`<path d="M65 96 Q98 60 119 25" stroke="#638052" stroke-width="3" fill="none"/>${leaf(94,62,-45,'#779063',1.05)}${leaf(111,38,42,'#90a275',.85)}<path d="M59 83 C36 65 40 53 53 53 C66 53 72 66 59 83Z" fill="#8a9a70"/><g fill="#3f5140" stroke="#657755" stroke-width=".8">${[[83,77],[91,86],[101,77],[88,67],[106,88],[74,88]].map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="8"/>`).join('')}</g><g fill="#718761">${[[80,70],[95,68],[107,80]].map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="3"/>`).join('')}</g>`;
 else main=`<path d="M88 106 Q88 66 86 27" fill="none" stroke="#71865b" stroke-width="3"/><path d="M86 58 C43 62 28 36 46 24 C65 14 82 39 86 58Z" fill="#82986c" stroke="#617b51"/><path d="M88 81 C124 78 147 54 132 39 C113 28 97 57 88 81Z" fill="#a4b48a" stroke="#71865b"/><path d="M86 95 C49 91 34 73 45 61 C61 51 79 73 86 95Z" fill="#6d8559" stroke="#617b51"/><path d="M86 58 Q64 44 48 28 M88 81 Q112 62 132 41 M86 95 Q62 82 45 63" fill="none" stroke="#c8d1ad" stroke-width="1.5"/>`;
 return `<svg viewBox="0 0 180 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="180" height="130" rx="12" fill="${tone||'#e5e8da'}"/><circle cx="140" cy="27" r="22" fill="#fffdf5" opacity=".36"/>${main}</svg>`;
}
function goPage(page){
 $$('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+page));
 $$('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 $('#mobileNav').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});
}
function recipeMarkup(r){return `<article class="recipe-card" data-recipe="${r.id}" tabindex="0" role="button" aria-label="查看${r.name}"><div class="recipe-visual" style="background:linear-gradient(135deg,${r.color},#f4ead8)"><span class="visual-label">${r.category} / 概念提案</span>${svgDish(r.shape)}</div><div class="recipe-body"><div class="recipe-title-row"><h3>${r.name}</h3><button class="bookmark ${saved.has(r.id)?'saved':''}" data-save="${r.id}" aria-label="收藏${r.name}">${saved.has(r.id)?'♥':'♡'}</button></div><div class="card-meta">${r.plants.map(p=>`<span class="mini-tag">${p}</span>`).join('')}<span class="mini-tag">${r.parts[0].split('（')[0]}</span></div><p>${r.description}</p><div class="recipe-foot"><span>${r.status.split('｜')[0]}</span><b>查看料理卡 ↗</b></div></div></article>`}
function renderRecipes(){const q=($('#recipeSearch')?.value||'').trim().toLowerCase();const items=recipes.filter(r=>(activeRecipeFilter==='全部'||r.category===activeRecipeFilter)&&(q===''||[r.name,r.category,...r.plants,...r.parts].join(' ').toLowerCase().includes(q)));$('#recipeGrid').innerHTML=items.length?items.map(recipeMarkup).join(''):`<div class="empty-state">還沒有找到符合的料理，換個關鍵字試試吧。</div>`}
function renderPlants(){const q=($('#plantSearch')?.value||'').trim().toLowerCase();const items=plants.filter(p=>(activePlantFilter==='全部'||p.tags.includes(activePlantFilter))&&(q===''||[p.id,p.latin,p.parts,p.use].join(' ').toLowerCase().includes(q)));$('#plantGrid').innerHTML=items.length?items.map(p=>`<button class="plant-card" data-plant="${p.id}"><span class="plant-illustration">${svgPlant(p.type,p.tone)}</span><span><h3>${p.id}</h3><span class="latin">${p.latin}</span><p>${p.use}</p><span class="plant-use">查看植物資料　↗</span></span></button>`).join(''):`<div class="empty-state">暫時沒有符合的植物資料。</div>`}
function renderJournal(){$('#journalTimeline').innerHTML=journals.map((j,i)=>`<article class="journal-entry" data-journal="${i}" tabindex="0"><div class="entry-meta">${j.date}　／　FIELD NOTE 0${i+1}</div><h3>${j.title}</h3><p>${j.description}</p><span class="entry-expand">展開紀錄與建議欄位　＋</span></article>`).join('')}
function openModal(html,art){$('#modalCopy').innerHTML=html;$('#modalArt').innerHTML=art||'';$('#modalBackdrop').classList.add('open');document.body.style.overflow='hidden';$('#modalClose').focus()}
function closeModal(){$('#modalBackdrop').classList.remove('open');document.body.style.overflow=''}
function openRecipe(id){const r=recipes.find(x=>x.id===id);if(!r)return;openModal(`<div class="modal-kicker">${r.category} / HERBAL DISH IDEA</div><h2 id="modalTitle">${r.name}</h2><p class="lead">${r.idea}</p><div class="info-block"><h4>使用植物</h4><p>${r.plants.join('、')}</p></div><div class="info-block"><h4>研究部位</h4><p>${r.parts.join('、')}</p></div><div class="info-block"><h4>風味觀察方向</h4><p>${r.flavor}</p></div><div class="info-block"><h4>料理概念</h4><p>${r.description}</p></div><div class="modal-note">${r.status}。本卡是網站展示用草案，並非已驗證食譜；正式開發前請查核品種、部位、食用性與料理方式。</div><div class="modal-actions"><button class="small-button" data-related-plant="${r.plants[0]}">探索相關植物 ↗</button><button class="small-button" data-close-modal>回到餐桌</button></div>`,svgDish(r.shape));}
function openPlant(id){const p=plants.find(x=>x.id===id);if(!p)return;const relevant=recipes.filter(r=>r.plants.some(x=>x===p.id||p.id.startsWith(x.split('／')[0])||x.startsWith(p.id.split('／')[0])));openModal(`<div class="modal-kicker">PLANT INDEX / 植物資料卡</div><h2 id="modalTitle">${p.id}</h2><p class="lead">${p.intro}</p><div class="info-block"><h4>植物名稱</h4><p>${p.id}｜${p.latin}</p></div><div class="info-block"><h4>部位整理方向</h4><p>${p.parts}</p></div><div class="info-block"><h4>可能的研究／生活連結</h4><p>${p.use}</p></div><div class="info-block"><h4>相關料理概念</h4><p>${relevant.length?relevant.map(r=>r.name).join('、'):'目前尚無對應料理'}</p></div><div class="modal-note">資料待查核：請補上來源、部位、用途、可食性與查核狀態。此處不主張醫療功效，也不將全株可用直接等同全株可食。</div><div class="modal-actions"><button class="small-button" data-plant-recipes="${p.id}">看相關料理 ↗</button><button class="small-button" data-close-modal>關閉資料卡</button></div>`,svgPlant(p.type,p.tone));}
function openJournal(i){const j=journals[i];openModal(`<div class="modal-kicker">FIELD NOTE / 實驗日誌版型</div><h2 id="modalTitle">${j.title}</h2><p class="lead">${j.description}</p><div class="info-block"><h4>紀錄內容建議</h4><p>${j.detail}</p></div><div class="info-block"><h4>可用的欄位</h4><p>日期與人員、研究問題、食材及部位、來源與查核狀態、操作條件、觀察紀錄、結果比較、修正方向。</p></div><div class="modal-note">目前為內容架構示例，實際的測試日期、方法和結論應由團隊完成研究後填入。</div>`,svgPlant('leaf','#e5e8d8'));}
function showToast(text){const el=$('#toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2300)}
function setWheelRotation(angle, animate=true){
 const rot=$('#wheelRotator');
 rot.style.setProperty('--wheel-angle',`${angle}deg`);
 if(!animate) rot.style.transition='none';
 rot.style.transform=`rotate(${angle}deg)`;
 if(!animate) requestAnimationFrame(()=>{rot.style.transition='transform 5s cubic-bezier(.12,.72,.09,1)'});
}
function buildWheel(){
 const rot=$('#wheelRotator');const step=360/recipes.length;
 const boardWidth=$('#tableBoard').getBoundingClientRect().width || window.innerWidth;
 const radius=Math.min(boardWidth*.385, window.innerWidth<=900?220:225);
 rot.innerHTML=recipes.map((r,i)=>`<button class="dish-pod" style="--a:${i*step}deg;--na:${-i*step}deg;--offset:-${radius}px" data-wheel-recipe="${r.id}" aria-label="查看${r.name}"><span class="dish-inner"><span class="dish-art">${svgDish(r.shape)}</span><span class="dish-name">${r.name}</span><span class="dish-type">${r.category}</span></span></button>`).join('');
 setWheelRotation(currentRotation,false);
}
function spinToRandomRecipe(fromTouch=false){
 if(spinning)return;
 spinning=true;
 const button=$('#spinButton'); if(button) button.disabled=true;
 $('#spinStatus').textContent=fromTouch?'餐桌繼續旋轉中…':'餐桌正在轉動…';
 $('#spinHint').textContent='尋找今天的料理';
 const idx=Math.floor(Math.random()*recipes.length);
 const step=360/recipes.length;
 const extraTurns=fromTouch?3+Math.floor(Math.random()*3):5+Math.floor(Math.random()*3);
 const currentMod=((currentRotation%360)+360)%360;
 const target=extraTurns*360-idx*step-currentMod;
 currentRotation+=target;
 $$('.dish-pod').forEach(x=>x.classList.remove('selected'));
 setWheelRotation(currentRotation,true);
 window.setTimeout(()=>{
   spinning=false; if(button) button.disabled=false;
   const r=recipes[idx];const pod=$(`[data-wheel-recipe="${r.id}"]`);
   if(pod)pod.classList.add('selected');
   $('#spinStatus').textContent=`今天抽到：${r.name}`;
   $('#spinHint').textContent='抽中了！點擊料理看更多';
   showToast(`餐桌停在「${r.name}」`);
   openRecipe(r.id);
 },5150);
}
function spinTable(){spinToRandomRecipe(false)}
function spinTable(){if(spinning)return;spinning=true;const button=$('#spinButton');button.disabled=true;$('#spinStatus').textContent='餐桌正在轉動…';$('#spinHint').textContent='尋找今天的料理';const idx=Math.floor(Math.random()*recipes.length);const step=360/recipes.length;const extraTurns=5+Math.floor(Math.random()*3);const currentMod=((currentRotation%360)+360)%360;const target=extraTurns*360-idx*step-currentMod;currentRotation+=target;const rot=$('#wheelRotator');rot.style.transition='transform 5s cubic-bezier(.12,.72,.09,1)';rot.style.transform=`rotate(${currentRotation}deg)`;$$('.dish-pod').forEach(x=>x.classList.remove('selected'));setTimeout(()=>{spinning=false;button.disabled=false;const r=recipes[idx];const pod=$(`[data-wheel-recipe="${r.id}"]`);if(pod)pod.classList.add('selected');$('#spinStatus').textContent=`今天抽到：${r.name}`;$('#spinHint').textContent='抽中了！打開料理卡';showToast(`餐桌停在「${r.name}」`);openRecipe(r.id)},5150)}
// Navigation and interactive controls
$$('[data-page]').forEach(el=>el.addEventListener('click',()=>goPage(el.dataset.page)));
$('#menuToggle').addEventListener('click',()=>$('#mobileNav').classList.toggle('open'));
$('#spinButton').addEventListener('click',spinTable);$('#headerSpin').addEventListener('click',()=>{goPage('home');setTimeout(spinTable,220)});$('#exploreButton').addEventListener('click',()=>{goPage('recipes');showToast('先從一道料理開始探索吧')});
$('#recipeFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeRecipeFilter=b.dataset.filter;$$('#recipeFilters .filter-btn').forEach(x=>x.classList.toggle('active',x===b));renderRecipes()});$('#plantFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activePlantFilter=b.dataset.filter;$$('#plantFilters .filter-btn').forEach(x=>x.classList.toggle('active',x===b));renderPlants()});$('#recipeSearch').addEventListener('input',renderRecipes);$('#plantSearch').addEventListener('input',renderPlants);
$('#recipeGrid').addEventListener('click',e=>{const save=e.target.closest('[data-save]');if(save){e.stopPropagation();const id=save.dataset.save;if(saved.has(id)){saved.delete(id);showToast('已取消收藏')}else{saved.add(id);showToast('已收藏這道料理')}renderRecipes();return}const card=e.target.closest('[data-recipe]');if(card)openRecipe(card.dataset.recipe)});
$('#recipeGrid').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-recipe]')){e.preventDefault();openRecipe(e.target.dataset.recipe)}});
$('#plantGrid').addEventListener('click',e=>{const card=e.target.closest('[data-plant]');if(card)openPlant(card.dataset.plant)});
$('#journalTimeline').addEventListener('click',e=>{const item=e.target.closest('[data-journal]');if(item)openJournal(Number(item.dataset.journal))});$('#journalTimeline').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-journal]')){e.preventDefault();openJournal(Number(e.target.dataset.journal))}});

$('#modalClose').addEventListener('click',closeModal);$('#modalBackdrop').addEventListener('click',e=>{if(e.target===$('#modalBackdrop'))closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
$('#modalCopy').addEventListener('click',e=>{const cl=e.target.closest('[data-close-modal]');if(cl){closeModal();return}const rel=e.target.closest('[data-related-plant]');if(rel){const name=rel.dataset.relatedPlant;closeModal();goPage('plants');const p=plants.find(x=>x.id===name||x.id.startsWith(name.split('／')[0])||name.startsWith(x.id.split('／')[0]));if(p)setTimeout(()=>openPlant(p.id),250);return}const toRecipes=e.target.closest('[data-plant-recipes]');if(toRecipes){const name=toRecipes.dataset.plantRecipes;closeModal();goPage('recipes');$('#recipeSearch').value=name.split('／')[0];activeRecipeFilter='全部';$$('#recipeFilters .filter-btn').forEach(x=>x.classList.toggle('active',x.dataset.filter==='全部'));renderRecipes();return}});
window.addEventListener('resize',()=>{if(!spinning){buildWheel();setWheelRotation(currentRotation,false);updateWheelHint()}});

// 手機：直接以手指旋轉餐桌；桌機則保留中央按鈕。
let wheelGesture=null;
let suppressWheelClickUntil=0;
function isMobileWheel(){return window.matchMedia('(max-width:760px)').matches;}
function updateWheelHint(){
 if(isMobileWheel()){
   if(!spinning) $('#spinHint').textContent='手指轉一轉，抽一道料理';
 } else if(!spinning) $('#spinHint').textContent='發現今天的草本料理';
}
function pointerAngle(e){
 const r=$('#tableBoard').getBoundingClientRect();
 return Math.atan2(e.clientY-(r.top+r.height/2),e.clientX-(r.left+r.width/2))*180/Math.PI;
}
function shortestAngle(deg){while(deg>180)deg-=360;while(deg< -180)deg+=360;return deg;}
const tableBoard=$('#tableBoard');
tableBoard.addEventListener('pointerdown',e=>{
 if(!isMobileWheel() || spinning || (e.pointerType==='mouse' && window.innerWidth>760)) return;
 if(e.button!==undefined && e.button!==0)return;
 const rect=tableBoard.getBoundingClientRect();
 const dx=e.clientX-(rect.left+rect.width/2),dy=e.clientY-(rect.top+rect.height/2);
 const radius=Math.hypot(dx,dy);
 wheelGesture={pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,lastX:e.clientX,lastY:e.clientY,lastAngle:pointerAngle(e),totalAngle:0,moved:false,mode:radius<rect.width*.22?'swipe':'rotate',lastTime:performance.now(),velocity:0};
});
tableBoard.addEventListener('pointermove',e=>{
 if(!wheelGesture || e.pointerId!==wheelGesture.pointerId || spinning)return;
 const dx=e.clientX-wheelGesture.startX,dy=e.clientY-wheelGesture.startY;
 if(!wheelGesture.moved && Math.hypot(dx,dy)>8){
   wheelGesture.moved=true;tableBoard.classList.add('is-dragging');suppressWheelClickUntil=Date.now()+800;
   try{tableBoard.setPointerCapture(e.pointerId)}catch(_){ }
 }
 if(!wheelGesture.moved)return;
 e.preventDefault();
 const now=performance.now();let delta;
 if(wheelGesture.mode==='swipe'){
   delta=(e.clientX-wheelGesture.lastX)*.82;
 } else {
   const a=pointerAngle(e);delta=shortestAngle(a-wheelGesture.lastAngle);wheelGesture.lastAngle=a;
 }
 const dt=Math.max(8,now-wheelGesture.lastTime);wheelGesture.velocity=delta/dt;
 wheelGesture.totalAngle+=delta;currentRotation+=delta;setWheelRotation(currentRotation,false);
 wheelGesture.lastX=e.clientX;wheelGesture.lastY=e.clientY;wheelGesture.lastTime=now;
 $('#spinStatus').textContent='餐桌正在跟著手指轉動…';
},{passive:false});
function endWheelGesture(e){
 if(!wheelGesture || (e && e.pointerId!==wheelGesture.pointerId))return;
 const g=wheelGesture;wheelGesture=null;tableBoard.classList.remove('is-dragging');
 if(g.moved && Math.abs(g.totalAngle)>16){
   suppressWheelClickUntil=Date.now()+900;
   spinToRandomRecipe(true);
 }
}
tableBoard.addEventListener('pointerup',endWheelGesture);
tableBoard.addEventListener('pointercancel',endWheelGesture);
tableBoard.addEventListener('lostpointercapture',()=>{if(wheelGesture)endWheelGesture()});
tableBoard.addEventListener('click',e=>{
 if(!isMobileWheel() || Date.now()<suppressWheelClickUntil)return;
 if(e.target.closest('.table-center')){spinToRandomRecipe(true);}
});
$('#wheelRotator').addEventListener('click',e=>{if(Date.now()<suppressWheelClickUntil)return;const b=e.target.closest('[data-wheel-recipe]');if(b&&!spinning)openRecipe(b.dataset.wheelRecipe)});
window.addEventListener('resize',updateWheelHint);

updateWheelHint();
renderRecipes();renderPlants();renderJournal();buildWheel();
