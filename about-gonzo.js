const workPhotos = [
  {
    "full": "assets/about-01-full.jpg",
    "caption": "",
    "alt": "Bronze-toned metal fixtures above a hospitality interior"
  },
  {
    "full": "assets/about-02-full.jpg",
    "caption": "",
    "alt": "Louis Vuitton window display framed in metal"
  },
  {
    "full": "assets/about-03-full.jpg",
    "caption": "",
    "alt": "Curved bar with vertical metal detailing and an overhead frame"
  },
  {
    "full": "assets/about-04-full.jpg",
    "caption": "",
    "alt": "Bronze-toned metal column cladding in a reception area"
  },
  {
    "full": "assets/about-05-full.jpg",
    "caption": "",
    "alt": "Glass balustrade with metal fittings around a retail atrium"
  },
  {
    "full": "assets/about-06-full.jpg",
    "caption": "",
    "alt": "Gold-toned reception staircase at Adina"
  },
  {
    "full": "assets/about-07-full.jpg",
    "caption": "",
    "alt": "Glazed dome over a retail atrium with escalators"
  },
  {
    "full": "assets/about-08-full.jpg",
    "caption": "",
    "alt": "Staircase with metal balustrade at Tiffany & Co."
  }
];
const workDialog=document.getElementById('work-dialog');const workImage=document.getElementById('work-full-image');let workIndex=0,workTrigger=null,workPreviousOverflow='';
function showWork(index){workIndex=(index+workPhotos.length)%workPhotos.length;const photo=workPhotos[workIndex];workImage.src=photo.full;workImage.alt=photo.alt;const caption=document.getElementById('work-caption');caption.textContent=photo.caption;caption.hidden=!photo.caption;document.getElementById('work-position').textContent=(workIndex+1)+' / '+workPhotos.length;}
document.querySelectorAll('.work-open').forEach(button=>button.addEventListener('click',()=>{workTrigger=button;showWork(Number(button.dataset.workIndex));workPreviousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';workDialog.showModal();document.getElementById('work-close').focus();}));
document.getElementById('work-close').addEventListener('click',()=>workDialog.close());document.getElementById('work-previous').addEventListener('click',()=>showWork(workIndex-1));document.getElementById('work-next').addEventListener('click',()=>showWork(workIndex+1));workDialog.addEventListener('keydown',event=>{if(event.key==='Tab'){const first=document.getElementById('work-close'),last=document.getElementById('work-next');if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}if(event.key==='ArrowRight'){event.preventDefault();showWork(workIndex+1);}if(event.key==='ArrowLeft'){event.preventDefault();showWork(workIndex-1);}});workDialog.addEventListener('click',event=>{if(event.target===workDialog){const r=workDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)workDialog.close();}});workDialog.addEventListener('close',()=>{document.body.style.overflow=workPreviousOverflow;if(workTrigger)workTrigger.focus({preventScroll:true});});

