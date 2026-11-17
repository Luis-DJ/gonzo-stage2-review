const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
window.addEventListener('resize', () => { if (innerWidth > 760) closeMenu(); });



const workPhotos = [
  {
    "full": "assets/work-01-full.jpg",
    "caption": "Roller conveyor detail"
  },
  {
    "full": "assets/work-02-full.jpg",
    "caption": "Curved vertical battens"
  },
  {
    "full": "assets/work-03-full.jpg",
    "caption": "Stair assembly in the workshop"
  },
  {
    "full": "assets/work-04-full.jpg",
    "caption": "Installed barriers and column protection"
  },
  {
    "full": "assets/work-05-full.jpg",
    "caption": "Steel frame during installation"
  },
  {
    "full": "assets/work-06-full.jpg",
    "caption": "Curved balustrade at an escalator opening"
  },
  {
    "full": "assets/work-07-full.jpg",
    "caption": "Welding a steel assembly"
  },
  {
    "full": "assets/work-08-full.jpg",
    "caption": "Indoor play structure and slide"
  },
  {
    "full": "assets/work-09-full.jpg",
    "caption": "Canopy at a building entrance"
  }
];
const workDialog=document.getElementById('work-dialog');const workImage=document.getElementById('work-full-image');let workIndex=0,workTrigger=null,workPreviousOverflow='';
function showWork(index){workIndex=(index+workPhotos.length)%workPhotos.length;const photo=workPhotos[workIndex];workImage.src=photo.full;workImage.alt=photo.caption;document.getElementById('work-caption').textContent=photo.caption;document.getElementById('work-position').textContent=(workIndex+1)+' / '+workPhotos.length;}
document.querySelectorAll('.work-open').forEach(button=>button.addEventListener('click',()=>{workTrigger=button;showWork(Number(button.dataset.workIndex));workPreviousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';workDialog.showModal();document.getElementById('work-close').focus();}));
document.getElementById('work-close').addEventListener('click',()=>workDialog.close());document.getElementById('work-previous').addEventListener('click',()=>showWork(workIndex-1));document.getElementById('work-next').addEventListener('click',()=>showWork(workIndex+1));workDialog.addEventListener('keydown',event=>{if(event.key==='Tab'){const first=document.getElementById('work-close'),last=document.getElementById('work-next');if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}if(event.key==='ArrowRight'){event.preventDefault();showWork(workIndex+1);}if(event.key==='ArrowLeft'){event.preventDefault();showWork(workIndex-1);}});workDialog.addEventListener('click',event=>{if(event.target===workDialog){const r=workDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)workDialog.close();}});workDialog.addEventListener('close',()=>{document.body.style.overflow=workPreviousOverflow;if(workTrigger)workTrigger.focus({preventScroll:true});});

