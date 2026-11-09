let deferredInstall;const installBtn=document.getElementById('installApp'),panel=document.getElementById('installPanel');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;installBtn.textContent='تثبيت التطبيق'});
window.addEventListener('appinstalled',()=>{installBtn.hidden=true;panel.close();toast('تم تثبيت حاسبة بداية')});
if(window.matchMedia('(display-mode: standalone)').matches)installBtn.hidden=true;
installBtn.onclick=async()=>{if(deferredInstall){await deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null}else panel.showModal()};document.getElementById('closeInstall').onclick=()=>panel.close();
document.getElementById('viewOrder').onclick=()=>document.querySelector('.order').scrollIntoView({behavior:'smooth'});
function updateDock(){const r=Pricing.calculate(state.qty,state.customer);document.getElementById('dockTotal').textContent=money(r.total);document.getElementById('dockCount').textContent=money(r.rows.reduce((n,p)=>n+p.qty,0));}
new MutationObserver(updateDock).observe(document.getElementById('totals'),{childList:true,subtree:true});updateDock();
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('./sw.js').catch(()=>{});
