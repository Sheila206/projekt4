//Gallery Grid inspiration fra Claude
// ============================================
// FILTER FUNCTIONALITY
// ============================================
//Filter Buttons - denne del er hjulpet med chat
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        // Opdater aktiv knap
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});


// ============================================
// LIGHTBOX
// ============================================
//Lightbox inspiration fra Claude
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');
const closeBtn = document.getElementById('lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

let currentIndex = 0;
let visibleItems = [];

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-text h3');
    const desc = item.querySelector('.gallery-text p');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxTitle.textContent = title ? title.textContent : '';
    lightboxDesc.textContent = desc ? desc.textContent : '';
}

function showPrev() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox();
}

function showNext() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightbox();
}

// Åbn lightbox ved klik på billede
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        visibleItems = [...galleryItems].filter(i => !i.classList.contains('hidden'));
        const visibleIndex = visibleItems.indexOf(item);
        if (visibleIndex !== -1) openLightbox(visibleIndex);
    });
});

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Luk ved klik på baggrund
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
