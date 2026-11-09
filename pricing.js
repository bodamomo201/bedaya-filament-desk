(function(root){
const products=[
 {id:'p-pla',brand:'Patron',name:'PLA+',weight:'1 kg',regular:[695,675,650,625],bedaya:[675,650,625,610],color:'#00bbde'},
 {id:'p-petg',brand:'Patron',name:'PETG',weight:'1 kg',regular:[695,675,650,625],bedaya:[675,650,625,610],color:'#004c83'},
 {id:'p-matte',brand:'Patron',name:'PLA Matte',weight:'1 kg',regular:[740,720,700,675],bedaya:[720,700,675,640],color:'#b5a89b'},
 {id:'p-marble',brand:'Patron',name:'PLA Marble',weight:'1 kg',regular:[820,800,775,750],bedaya:[800,775,750,720],color:'#a9b3bc'},
 {id:'p-metal',brand:'Patron',name:'PLA Metal',weight:'1 kg',regular:[740,720,700,675],bedaya:[720,700,675,640],color:'#ac8058'},
 {id:'p-luminous',brand:'Patron',name:'PLA Luminous',weight:'1 kg',regular:[920,900,875,850],bedaya:[900,875,850,825],color:'#b8db82'},
 {id:'l-pla',brand:'LynX',name:'PLA+',weight:'1 kg',regular:[695,675,650,625],bedaya:[675,650,625,610],color:'#707f92'},
 {id:'l-petg',brand:'LynX',name:'PETG',weight:'1 kg',regular:[695,675,650,625],bedaya:[675,650,625,610],color:'#61707d'},
 {id:'ipa',brand:'IPA',name:'IPA',weight:'مستلزمات',regular:[200,200,190,185],bedaya:[200,200,185,180],color:'#87cee0'}
];
function tier(q){return q>=10?3:q>=5?2:q>=3?1:0}
function calculate(qty,customer){const type=customer==='bedaya'?'bedaya':'regular'; const count=products.filter(p=>p.brand!=='IPA').reduce((s,p)=>s+(qty[p.id]||0),0);const rows=products.filter(p=>qty[p.id]>0).map(p=>{const q=qty[p.id];const index=tier(p.brand==='IPA'?q:count);return { ...p,qty:q,tier:[1,3,5,10][index],unit:p[type][index],total:p[type][index]*q,base:p[type][0]*q}});return {count,filamentTier:[1,3,5,10][tier(count)],rows,total:rows.reduce((s,r)=>s+r.total,0),saving:rows.reduce((s,r)=>s+r.base-r.total,0)}}
root.Pricing={products,tier,calculate};if(typeof module!=='undefined')module.exports=root.Pricing;
})(typeof window!=='undefined'?window:globalThis);
