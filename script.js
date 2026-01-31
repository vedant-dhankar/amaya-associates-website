// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
    // close mobile menu if open
    if(window.innerWidth < 900){
      document.querySelector('.nav-list').style.display = 'none';
    }
  });
});

// mobile nav toggle
const t = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
t && t.addEventListener('click', ()=>{
  if(navList.style.display === 'block') navList.style.display = 'none';
  else navList.style.display = 'block';
});
