var state = {
  gender: '',
  bodyShape: '',
  size: '',
  skinTone: '',
  heightCm: 165,
  heightUnit: 'cm',
  occasions: [],
  wardrobe: {},
  currentCategory: '',
  _pendingImg: null
};

var femaleCategories = [
  'Sarees', 'Lehengas', 'Kurtis', 'Blouses', 'Dupattas',
  'Leggings', 'Salwar Suits', 'Anarkalis', 'Western Tops',
  'Jeans', 'Dresses', 'Skirts', 'Co-ord Sets', 'Boho Tops',
  'Blazers', 'Sweaters', 'Shoes', 'Heels', 'Accessories',
  'Jewellery', 'Handbags', 'Scarves', 'Sunglasses', 'Watches'
];

var maleCategories = [
  'Kurtas', 'Sherwanis', 'Nehru Jackets', 'Dhotis', 'Bandhgala',
  'Suits', 'Blazers', 'Waistcoats', 'T-Shirts', 'Shirts',
  'Jeans', 'Trousers', 'Chinos', 'Shorts', 'Ethnic Bottoms',
  'Shoes', 'Formal Shoes', 'Sneakers', 'Watches', 'Belts',
  'Ties', 'Pocket Squares', 'Sunglasses', 'Caps'
];

var femaleShapes = [
  {
    name: 'Hourglass',
    desc: 'Balanced bust & hips',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="10" rx="14" ry="9" fill="#f8bbd9"/><ellipse cx="24" cy="50" rx="14" ry="9" fill="#f8bbd9"/><rect x="18" y="18" width="12" height="24" rx="6" fill="#f8bbd9"/></svg>'
  },
  {
    name: 'Pear',
    desc: 'Wider hips than bust',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="10" rx="10" ry="8" fill="#f8bbd9"/><ellipse cx="24" cy="50" rx="16" ry="9" fill="#f8bbd9"/><path d="M18 18 Q14 36 8 48 Q16 56 24 56 Q32 56 40 48 Q34 36 30 18 Z" fill="#f8bbd9"/></svg>'
  },
  {
    name: 'Apple',
    desc: 'Fuller midsection',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="30" rx="18" ry="22" fill="#f8bbd9"/></svg>'
  },
  {
    name: 'Rectangle',
    desc: 'Straight silhouette',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="4" width="24" height="52" rx="8" fill="#f8bbd9"/></svg>'
  },
  {
    name: 'Inverted Triangle',
    desc: 'Broader shoulders',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><polygon points="4,4 44,4 32,56 16,56" fill="#f8bbd9"/></svg>'
  }
];

var maleShapes = [
  {
    name: 'Trapezoid',
    desc: 'Broad shoulders, narrow waist',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><polygon points="6,4 42,4 36,56 12,56" fill="#b3d1f8"/></svg>'
  },
  {
    name: 'Rectangle',
    desc: 'Straight, athletic build',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="4" width="28" height="52" rx="6" fill="#b3d1f8"/></svg>'
  },
  {
    name: 'Inverted Triangle',
    desc: 'V-shape, wide shoulders',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><polygon points="4,4 44,4 32,56 16,56" fill="#b3d1f8"/></svg>'
  },
  {
    name: 'Oval',
    desc: 'Rounder midsection',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><ellipse cx="24" cy="32" rx="18" ry="24" fill="#b3d1f8"/></svg>'
  },
  {
    name: 'Triangle',
    desc: 'Narrower shoulders, wider hips',
    svg: '<svg viewBox="0 0 48 60" xmlns="http://www.w3.org/2000/svg"><polygon points="16,4 32,4 44,56 4,56" fill="#b3d1f8"/></svg>'
  }
];

var occasions = [
  { icon: '💼', name: 'Office/Work' },
  { icon: '🎉', name: 'Party' },
  { icon: '💍', name: 'Wedding' },
  { icon: '🙌', name: 'Festival' },
  { icon: '❤️', name: 'Date Night' },
  { icon: '🧘', name: 'Casual Day' },
  { icon: '🏋️', name: 'Workout' },
  { icon: '🎓', name: 'College' },
  { icon: '✈️', name: 'Travel' },
  { icon: '🏖️', name: 'Beach/Resort' },
  { icon: '🍽️', name: 'Dinner Out' },
  { icon: '🛍️', name: 'Shopping' },
  { icon: '🏠', name: 'Home/Lounge' },
  { icon: '📸', name: 'Photoshoot' },
  { icon: '🎭', name: 'Cultural Event' },
  { icon: '🏆', name: 'Formal Event' },
  { icon: '🌿', name: 'Brunch/Picnic' },
  { icon: '🎪', name: 'Concert/Show' },
  { icon: '🕍', name: 'Religious Function' },
  { icon: '🥂', name: 'Cocktail Party' },
  { icon: '🤝', name: 'Business Meeting' },
  { icon: '🎂', name: 'Birthday Party' },
  { icon: '🌃', name: 'Night Out' },
  { icon: '🎁', name: 'Anniversary' }
];


/* =========================
   PAGE NAVIGATION
========================= */

function goTo(pageId) {
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });

  var page = document.getElementById(pageId);

  if (page) {
    page.classList.add('active');
  }

  window.scrollTo(0, 0);
}


/* =========================
   PROFILE SHAPES
========================= */

function buildProfileShapes() {
  var shapes = state.gender === 'male' ? maleShapes : femaleShapes;
  var grid = document.getElementById('body-shape-options');

  if (!grid) return;

  grid.innerHTML = '';

  shapes.forEach(function(shape) {
    var card = document.createElement('div');

    card.className = 'shape-card';

    card.innerHTML =
      shape.svg +
      '<span>' + shape.name + '</span>' +
      '<small>' + shape.desc + '</small>';

    if (state.bodyShape === shape.name) {
      card.classList.add('selected');
    }

    card.addEventListener('click', function() {
      document.querySelectorAll('.shape-card').forEach(function(c) {
        c.classList.remove('selected');
      });

      card.classList.add('selected');
      state.bodyShape = shape.name;
    });

    grid.appendChild(card);
  });
}


/* =========================
   SIZE
========================= */

function buildSizeGrid() {
  var sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  var grid = document.getElementById('size-grid');

  if (!grid) return;

  grid.innerHTML = '';

  sizes.forEach(function(size) {
    var btn = document.createElement('button');

    btn.type = 'button';
    btn.className = 'size-btn';
    btn.textContent = size;

    if (state.size === size) {
      btn.classList.add('selected');
    }

    btn.addEventListener('click', function() {
      document.querySelectorAll('.size-btn').forEach(function(b) {
        b.classList.remove('selected');
      });

      btn.classList.add('selected');
      state.size = size;
    });

    grid.appendChild(btn);
  });
}


/* =========================
   PROFILE BAR
========================= */

function buildProfileBar(id) {
  var el = document.getElementById(id);

  if (!el) return;

  var heightStr;

  if (state.heightUnit === 'ft') {
    heightStr = (state.heightCm / 30.48).toFixed(1) + ' ft';
  } else {
    heightStr = Math.round(state.heightCm) + ' cm';
  }

  var tags = [];

  if (state.gender) {
    tags.push(
      '<span class="profile-tag">' +
      (state.gender === 'female' ? '👩 Female' : '👨 Male') +
      '</span>'
    );
  }

  if (state.bodyShape) {
    tags.push(
      '<span class="profile-tag">🔷 ' +
      state.bodyShape +
      '</span>'
    );
  }

  if (state.size) {
    tags.push(
      '<span class="profile-tag">📏 ' +
      state.size +
      '</span>'
    );
  }

  if (state.skinTone) {
    tags.push(
      '<span class="profile-tag">🎨 ' +
      state.skinTone +
      '</span>'
    );
  }

  tags.push(
    '<span class="profile-tag">📐 ' +
    heightStr +
    '</span>'
  );

  if (state.occasions.length) {
    tags.push(
      '<span class="profile-tag">🎯 ' +
      state.occasions.slice(0, 2).join(', ') +
      (state.occasions.length > 2
        ? ' +' + (state.occasions.length - 2)
        : '') +
      '</span>'
    );
  }

  el.innerHTML = tags.join('');
}


/* =========================
   OCCASIONS
========================= */

function buildOccasionsGrid() {
  var grid = document.getElementById('occasions-grid');

  if (!grid) return;

  grid.innerHTML = '';

  occasions.forEach(function(occasion) {
    var card = document.createElement('div');

    card.className =
      'occasion-card' +
      (state.occasions.indexOf(occasion.name) > -1
        ? ' selected'
        : '');

    card.innerHTML =
      '<div class="oc-icon">' + occasion.icon + '</div>' +
      '<div class="oc-name">' + occasion.name + '</div>';

    card.addEventListener('click', function() {
      card.classList.toggle('selected');

      var index = state.occasions.indexOf(occasion.name);

      if (index > -1) {
        state.occasions.splice(index, 1);
      } else {
        state.occasions.push(occasion.name);
      }
    });

    grid.appendChild(card);
  });
}


/* =========================
   WARDROBE TABS
========================= */

function buildWardrobeTabs() {
  var categories =
    state.gender === 'male'
      ? maleCategories
      : femaleCategories;

  categories.forEach(function(category) {
    if (!state.wardrobe[category]) {
      state.wardrobe[category] = [];
    }
  });

  var tabs = document.getElementById('wardrobe-tabs');

  if (!tabs) return;

  tabs.innerHTML = '';

  categories.forEach(function(category, index) {
    var btn = document.createElement('button');

    btn.type = 'button';

    btn.className =
      'tab-btn' +
      (index === 0 ? ' active' : '');

    btn.textContent = category;

    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(function(b) {
        b.classList.remove('active');
      });

      btn.classList.add('active');

      buildWardrobeGrid(category);
    });

    tabs.appendChild(btn);
  });

  if (categories.length > 0) {
    buildWardrobeGrid(categories[0]);
  }
}


/* =========================
   WARDROBE GRID
========================= */

function buildWardrobeGrid(category) {
  state.currentCategory = category;

  var items = state.wardrobe[category] || [];
  var grid = document.getElementById('wardrobe-grid');

  if (!grid) return;

  grid.innerHTML = '';

  items.forEach(function(item, index) {
    var slot = document.createElement('div');

    slot.className = 'wardrobe-slot filled';

    if (item.img) {
      var img = document.createElement('img');

      img.src = item.img;
      img.alt = category;

      slot.appendChild(img);
    }

    if (item.desc) {
      var desc = document.createElement('div');

      desc.className = 'slot-desc';

      var span = document.createElement('span');
      span.textContent = item.desc;

      desc.appendChild(span);
      slot.appendChild(desc);
    }

    var removeBtn = document.createElement('button');

    removeBtn.type = 'button';
    removeBtn.className = 'slot-remove';
    removeBtn.textContent = '✕';

    removeBtn.addEventListener('click', function(event) {
      event.stopPropagation();

      state.wardrobe[category].splice(index, 1);

      buildWardrobeGrid(category);
    });

    slot.appendChild(removeBtn);

    grid.appendChild(slot);
  });

  var slotsLeft = Math.max(0, 18 - items.length);

  for (var j = 0; j < slotsLeft; j++) {
    var emptySlot = document.createElement('div');

    emptySlot.className = 'wardrobe-slot';

    emptySlot.innerHTML =
      '<div class="slot-add">＋</div>' +
      '<div class="slot-label">' +
      category +
      '</div>';

    emptySlot.addEventListener('click', function() {
      openModal(category);
    });

    grid.appendChild(emptySlot);
  }
}


/* =========================
   MODAL
========================= */

function openModal(category) {
  state.currentCategory = category;
  state._pendingImg = null;

  var title = document.getElementById('modal-title');
  var desc = document.getElementById('item-desc');
  var preview = document.getElementById('upload-preview');
  var fileInput = document.getElementById('file-input');
  var modal = document.getElementById('item-modal');

  if (title) {
    title.textContent = 'Add ' + category + ' Item';
  }

  if (desc) {
    desc.value = '';
  }

  if (preview) {
    preview.innerHTML = '📷 Click to upload photo';
  }

  if (fileInput) {
    fileInput.value = '';
  }

  if (modal) {
    modal.classList.add('open');
  }
}


function closeModalDirect() {
  var modal = document.getElementById('item-modal');

  if (modal) {
    modal.classList.remove('open');
  }

  state._pendingImg = null;
}


/* =========================
   HEIGHT
========================= */

function updateHeightDisplay() {
  var input = document.getElementById('height-input');
  var unitLabel = document.getElementById('height-unit-label');
  var slider = document.getElementById('height-slider');

  if (!input || !unitLabel || !slider) return;

  if (state.heightUnit === 'cm') {
    input.value = Math.round(state.heightCm);
    unitLabel.textContent = 'cm';

    input.min = 100;
    input.max = 220;

  } else {
    input.value = (state.heightCm / 30.48).toFixed(1);
    unitLabel.textContent = 'ft';

    input.min = 3.3;
    input.max = 7.2;
    input.step = 0.1;
  }

  slider.value = Math.round(state.heightCm);
}


function setHeightUnit(unit) {
  state.heightUnit = unit;

  var cmBtn = document.getElementById('btn-cm');
  var ftBtn = document.getElementById('btn-ft');
  var input = document.getElementById('height-input');

  if (cmBtn) {
    cmBtn.classList.toggle('toggle-active', unit === 'cm');
  }

  if (ftBtn) {
    ftBtn.classList.toggle('toggle-active', unit === 'ft');
  }

  if (input) {
    if (unit === 'cm') {
      input.step = '1';
    } else {
      input.step = '0.1';
    }
  }

  updateHeightDisplay();
}


/* =========================
   IMAGE UPLOAD
========================= */

function handleImageUpload(file) {
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('Please select an image file.');
    return;
  }

  var reader = new FileReader();

  reader.onload = function(event) {
    state._pendingImg = event.target.result;

    var preview = document.getElementById('upload-preview');

    if (preview) {
      preview.innerHTML =
        '<img src="' +
        state._pendingImg +
        '" alt="Preview">';
    }
  };

  reader.readAsDataURL(file);
}


/* =========================
   SAVE WARDROBE ITEM
========================= */

function saveWardrobeItem() {
  var category = state.currentCategory;

  if (!category) {
    alert('Please select a wardrobe category.');
    return;
  }

  var descElement = document.getElementById('item-desc');

  var description =
    descElement
      ? descElement.value.trim()
      : '';

  if (!state._pendingImg && !description) {
    alert('Please upload a photo or describe the item.');
    return;
  }

  if (!state.wardrobe[category]) {
    state.wardrobe[category] = [];
  }

  state.wardrobe[category].push({
    img: state._pendingImg,
    desc: description
  });

  closeModalDirect();

  buildWardrobeGrid(category);
}


/* =========================
   RECOMMENDATION ENGINE
========================= */

function generateOutfit() {
  buildProfileBar('profile-bar-results');

  var categories =
    state.gender === 'male'
      ? maleCategories
      : femaleCategories;

  var topCats =
    state.gender === 'female'
      ? [
          'Sarees',
          'Lehengas',
          'Kurtis',
          'Blouses',
          'Western Tops',
          'Boho Tops',
          'Co-ord Sets',
          'Anarkalis',
          'Dresses',
          'Skirts',
          'Salwar Suits'
        ]
      : [
          'Kurtas',
          'Sherwanis',
          'Nehru Jackets',
          'T-Shirts',
          'Shirts',
          'Bandhgala',
          'Suits',
          'Blazers',
          'Waistcoats'
        ];

  var bottomCats =
    state.gender === 'female'
      ? [
          'Leggings',
          'Jeans',
          'Dupattas',
          'Scarves'
        ]
      : [
          'Jeans',
          'Trousers',
          'Chinos',
          'Shorts',
          'Ethnic Bottoms',
          'Dhotis'
        ];

  var footwearCats =
    state.gender === 'female'
      ? ['Shoes', 'Heels']
      : ['Shoes', 'Formal Shoes', 'Sneakers'];

  var accessoryCats =
    state.gender === 'female'
      ? [
          'Accessories',
          'Jewellery',
          'Handbags',
          'Sunglasses',
          'Watches'
        ]
      : [
          'Watches',
          'Belts',
          'Ties',
          'Pocket Squares',
          'Sunglasses',
          'Caps'
        ];

  var fullOutfitCats =
    state.gender === 'female'
      ? [
          'Sarees',
          'Lehengas',
          'Anarkalis',
          'Dresses',
          'Co-ord Sets'
        ]
      : [
          'Sherwanis',
          'Suits',
          'Bandhgala'
        ];

  var tops = [];
  var bottoms = [];
  var footwear = [];
  var accessories = [];
  var fullOutfits = [];

  categories.forEach(function(category) {
    (state.wardrobe[category] || []).forEach(function(item) {
      var obj = {
        img: item.img,
        desc: item.desc,
        category: category
      };

      if (fullOutfitCats.indexOf(category) > -1) {
        fullOutfits.push(obj);
      } else if (topCats.indexOf(category) > -1) {
        tops.push(obj);
      } else if (bottomCats.indexOf(category) > -1) {
        bottoms.push(obj);
      } else if (footwearCats.indexOf(category) > -1) {
        footwear.push(obj);
      } else if (accessoryCats.indexOf(category) > -1) {
        accessories.push(obj);
      }
    });
  });

  var total =
    tops.length +
    bottoms.length +
    footwear.length +
    accessories.length +
    fullOutfits.length;

  var resultsEl = document.getElementById('results-container');

  if (!resultsEl) return;

  if (total === 0) {
    resultsEl.innerHTML =
      '<div class="no-outfit">' +
      '<h3>Your wardrobe is empty!</h3>' +
      '<p>Go back and add at least one item to get your outfit recommendation.</p>' +
      '</div>';

    goTo('page-results');
    return;
  }

  var combos = [];

  /* Full outfits */
  fullOutfits.forEach(function(fullOutfit) {
    var combo = [fullOutfit];

    if (footwear.length) {
      combo.push(footwear[0]);
    }

    if (accessories.length) {
      combo.push(accessories[0]);
    }

    combos.push(combo);
  });

  /* Top + Bottom */
  if (tops.length && bottoms.length) {
    tops.forEach(function(top) {
      bottoms.forEach(function(bottom) {
        var combo = [top, bottom];

        if (footwear.length) {
          combo.push(footwear[0]);
        }

        if (accessories.length) {
          combo.push(accessories[0]);
        }

        combos.push(combo);
      });
    });
  }

  /* Top only */
  if (tops.length && !bottoms.length) {
    tops.forEach(function(top) {
      var combo = [top];

      if (footwear.length) {
        combo.push(footwear[0]);
      }

      accessories.forEach(function(accessory) {
        combo.push(accessory);
      });

      combos.push(combo);
    });
  }

  /* Bottom only */
  if (bottoms.length && !tops.length) {
    bottoms.forEach(function(bottom) {
      var combo = [bottom];

      if (footwear.length) {
        combo.push(footwear[0]);
      }

      accessories.forEach(function(accessory) {
        combo.push(accessory);
      });

      combos.push(combo);
    });
  }

  /* Only accessories/footwear */
  if (
    combos.length === 0 &&
    (footwear.length || accessories.length)
  ) {
    combos.push(
      footwear.concat(accessories)
    );
  }


  /* =========================
     SCORE OUTFIT
  ========================= */

  function scoreCombo(combo) {
    var score = 60;

    var shape =
      (state.bodyShape || '').toLowerCase();

    var hasFull = combo.some(function(item) {
      return fullOutfitCats.indexOf(item.category) > -1;
    });

    if (
      shape === 'hourglass' ||
      shape === 'trapezoid'
    ) {
      score += 15;
    }

    if (
      shape === 'pear' &&
      combo.some(function(item) {
        return topCats.indexOf(item.category) > -1;
      })
    ) {
      score += 10;
    }

    if (hasFull) {
      score += 10;
    }

    var tone =
      (state.skinTone || '').toLowerCase();

    if (
      (tone === 'deep' || tone === 'rich') &&
      combo.some(function(item) {
        return /bright|yellow|orange|white|gold/i.test(
          item.desc || ''
        );
      })
    ) {
      score += 8;
    }

    if (
      (tone === 'fair' || tone === 'light') &&combo.some(function(item) {
        return /bright|yellow|orange|white|gold/i.test(
          item.desc || ''
        );
      })
    ) {
      score += 8;
    }

    if (
      (tone === 'fair' || tone === 'light') &&
      combo.some(function(item) {
        return /pastel|blush|pink|lavender/i.test(
          item.desc || ''
        );
      })
    ) {
      score += 8;
    }

    if (
      state.heightCm < 160 &&
      combo.some(function(item) {
        return /midi|short|crop/i.test(
          item.desc || ''
        );
      })
    ) {
      score += 5;
    }

    if (
      state.heightCm > 170 &&
      combo.some(function(item) {
        return /maxi|floor|long/i.test(
          item.desc || ''
        );
      })
    ) {
      score += 5;
    }

    if (
      (
        state.occasions.indexOf('Wedding') > -1 ||
        state.occasions.indexOf('Festival') > -1
      ) &&
      hasFull
    ) {
      score += 12;
    }

    if (
      state.occasions.indexOf('Office/Work') > -1 &&
      combo.some(function(item) {
        return [
          'Blazers',
          'Suits',
          'Shirts',
          'Formal Shoes'
        ].indexOf(item.category) > -1;
      })
    ) {
      score += 10;
    }

    if (
      state.occasions.indexOf('Casual Day') > -1 &&
      combo.some(function(item) {
        return [
          'T-Shirts',
          'Jeans',
          'Sneakers'
        ].indexOf(item.category) > -1;
      })
    ) {
      score += 10;
    }

    return Math.min(99, score);
  }


  combos.forEach(function(combo) {
    combo._score = scoreCombo(combo);
  });

  combos.sort(function(a, b) {
    return b._score - a._score;
  });

  var best = combos[0];

  var tips = generateTips();

  var topOcc =
    state.occasions.slice(0, 2).join(' & ') ||
    'everyday wear';

  var collageHtml = best.map(function(item) {
    if (item.img) {
      return (
        '<div class="collage-item">' +
        '<img src="' +
        item.img +
        '" alt="' +
        item.category +
        '">' +
        '</div>'
      );
    }

    return (
      '<div class="collage-item">' +
      (item.desc || item.category) +
      '</div>'
    );
  }).join('');

  resultsEl.innerHTML =
    '<div class="outfit-card">' +

      '<div class="outfit-card-header">' +
        '<h3>✦ Best Match Outfit</h3>' +
        '<span class="match-score">' +
        'Match: ' +
        best._score +
        '%' +
        '</span>' +
      '</div>' +

      '<div class="collage-grid">' +
        collageHtml +
      '</div>' +

      '<div class="occasion-match">' +
        'Styled for: <strong>' +
        topOcc +
        '</strong>' +
      '</div>' +

      '<div class="outfit-tips">' +
        '<h4>Style Tips for You</h4>' +
        '<ul>' +
          tips.map(function(tip) {
            return '<li>' + tip + '</li>';
          }).join('') +
        '</ul>' +
      '</div>' +

    '</div>';

  goTo('page-results');
}


/* =========================
   STYLE TIPS
========================= */

function generateTips() {
  var tips = [];

  var shapeTips = {
    'Hourglass':
      'Wrap styles and belted outfits highlight your balanced proportions.',

    'Pear':
      'Draw attention upward with statement tops and structured shoulders.',

    'Apple':
      'Empire waist and A-line silhouettes create a flattering, elongated look.',

    'Rectangle':
      'Add curves with ruffles, peplum, or layered textures.',

    'Inverted Triangle':
      'Balance broad shoulders with flared skirts and wide-leg trousers.',

    'Trapezoid':
      'Your V-shape is ideal for fitted shirts and structured blazers.',

    'Oval':
      'Vertical patterns and monochrome outfits create a sleek, elongating effect.',

    'Triangle':
      'Structured shoulders and A-line silhouettes balance your proportions.'
  };

  if (
    state.bodyShape &&
    shapeTips[state.bodyShape]
  ) {
    tips.push(shapeTips[state.bodyShape]);
  }

  var toneTips = {
    'Fair':
      'Pastels and soft lavenders complement your skin tone beautifully.',

    'Light':
      'Rose golds and cool blues look stunning on you.',

    'Medium':
      'Earth tones and olive greens bring warmth to your complexion.',

    'Tan':
      'Bold jewel tones and coral shades make your skin glow.',

    'Deep':
      'Bright yellows and electric blues create a vivid, striking contrast.',

    'Rich':
      'Gold accents and vibrant prints celebrate your skin tone.'
  };

  if (
    state.skinTone &&
    toneTips[state.skinTone]
  ) {
    tips.push(toneTips[state.skinTone]);
  }

  if (state.heightCm < 158) {
    tips.push(
      'High-waisted bottoms and vertical stripes create a taller silhouette.'
    );
  } else if (state.heightCm > 172) {
    tips.push(
      'Maxi dresses and wide-leg trousers look especially elegant on you.'
    );
  } else {
    tips.push(
      'Your height suits both midi and maxi lengths for a balanced look.'
    );
  }

  if (
    state.occasions.indexOf('Wedding') > -1
  ) {
    tips.push(
      'Layered jewellery and heels elevate the look to festive perfection.'
    );
  }

  if (
    state.occasions.indexOf('Office/Work') > -1
  ) {
    tips.push(
      'Keep it polished with minimal accessories and neat, pressed fabrics.'
    );
  }

  if (
    state.occasions.indexOf('Date Night') > -1
  ) {
    tips.push(
      'A bold lip and shimmer accessories add romance to the look.'
    );
  }

  if (
    state.occasions.indexOf('Casual Day') > -1
  ) {
    tips.push(
      'Comfort meets style — opt for breathable fabrics and relaxed fits.'
    );
  }

  if (
    state.occasions.indexOf('Festival') > -1
  ) {
    tips.push(
      'Rich embroidery and statement accessories complete a festive look.'
    );
  }

  return tips.slice(0, 5);
}


/* =========================
   RESET APPLICATION
========================= */

function resetApp() {
  state = {
    gender: '',
    bodyShape: '',
    size: '',
    skinTone: '',
    heightCm: 165,
    heightUnit: 'cm',
    occasions: [],
    wardrobe: {},
    currentCategory: '',
    _pendingImg: null
  };

  var results = document.getElementById('results-container');

  if (results) {
    results.innerHTML = '';
  }

  var profileBar = document.getElementById('profile-bar');

  if (profileBar) {
    profileBar.innerHTML = '';
  }

  var profileBarResults =
    document.getElementById('profile-bar-results');

  if (profileBarResults) {
    profileBarResults.innerHTML = '';
  }

  var modal =
    document.getElementById('item-modal');

  if (modal) {
    modal.classList.remove('open');
  }

  updateHeightDisplay();

  goTo('page-landing');
}
/* =========================
   DOM READY
========================= */

document.addEventListener(
  'DOMContentLoaded',
  function() {

    /* =====================
       LANDING
    ===================== */

    document
      .getElementById('get-started-btn')
      .addEventListener('click', function() {
        goTo('page-gender');
      });


    /* =====================
       GENDER
    ===================== */

    document
      .getElementById('card-female')
      .addEventListener('click', function() {

        state.gender = 'female';

        document
          .querySelectorAll('.gender-card')
          .forEach(function(card) {
            card.classList.remove('selected');
          });

        this.classList.add('selected');

        buildProfileShapes();
        buildSizeGrid();

        setTimeout(function() {
          goTo('page-profile');
        }, 200);
      });


    document
      .getElementById('card-male')
      .addEventListener('click', function() {

        state.gender = 'male';

        document
          .querySelectorAll('.gender-card')
          .forEach(function(card) {
            card.classList.remove('selected');
          });

        this.classList.add('selected');

        buildProfileShapes();
        buildSizeGrid();

        setTimeout(function() {
          goTo('page-profile');
        }, 200);
      });


    /* =====================
       BACK BUTTONS
    ===================== */

    document
      .getElementById('back-gender')
      .addEventListener('click', function() {
        goTo('page-landing');
      });


    document
      .getElementById('back-profile')
      .addEventListener('click', function() {
        goTo('page-gender');
      });


    document
      .getElementById('back-occasions')
      .addEventListener('click', function() {
        goTo('page-profile');
      });


    document
      .getElementById('back-wardrobe')
      .addEventListener('click', function() {
        goTo('page-occasions');
      });


    document
      .getElementById('back-results')
      .addEventListener('click', function() {
        goTo('page-wardrobe');
      });


    /* =====================
       PROFILE CONTINUE
    ===================== */

    document
      .getElementById('continue-profile')
      .addEventListener('click', function() {

        if (!state.bodyShape) {
          alert('Please select your body shape.');
          return;
        }

        if (!state.size) {
          alert('Please select your size.');
          return;
        }

        if (!state.skinTone) {
          alert('Please select your skin tone.');
          return;
        }

        buildOccasionsGrid();
        goTo('page-occasions');
      });
/* =====================
       OCCASIONS CONTINUE
    ===================== */

    document
      .getElementById('continue-occasions')
      .addEventListener('click', function() {

        if (state.occasions.length === 0) {
          alert('Please select at least one occasion.');
          return;
        }

        buildWardrobeTabs();
        buildProfileBar('profile-bar');

        goTo('page-wardrobe');
      });


    /* =====================
       GET OUTFIT
    ===================== */

    document
      .getElementById('get-outfit-btn')
      .addEventListener('click', function() {
        generateOutfit();
      });


    /* =====================
       START OVER
    ===================== */

    document
      .getElementById('start-over-btn')
      .addEventListener('click', function() {
        resetApp();
      });


    /* =====================
       HEIGHT — CM
    ===================== */

    document
      .getElementById('btn-cm')
      .addEventListener('click', function() {
        setHeightUnit('cm');
      });


    /* =====================
       HEIGHT — FT
    ===================== */

    document
      .getElementById('btn-ft')
      .addEventListener('click', function() {
        setHeightUnit('ft');
      });


    /* =====================
       HEIGHT INPUT
    ===================== */

    document
      .getElementById('height-input')
      .addEventListener('input', function() {

        var value = parseFloat(this.value);

        if (isNaN(value)) return;

        if (state.heightUnit === 'cm') {

          value = Math.max(100, Math.min(220, value));

          state.heightCm = value;

        } else {

          value = Math.max(3.3, Math.min(7.2, value));

          state.heightCm = value * 30.48;
        }

        document.getElementById('height-slider').value =
          Math.round(state.heightCm);
      });


    /* =====================
       HEIGHT SLIDER
    ===================== */

    document
      .getElementById('height-slider')
      .addEventListener('input', function() {

        state.heightCm = parseInt(this.value);

        updateHeightDisplay();
      });
/* =====================
       SKIN TONE
    ===================== */

    document
      .querySelectorAll('.skin-btn')
      .forEach(function(button) {

        button.addEventListener('click', function() {

          document
            .querySelectorAll('.skin-btn')
            .forEach(function(btn) {
              btn.classList.remove('selected');
            });

          this.classList.add('selected');

          state.skinTone =
            this.getAttribute('data-tone');
        });
      });


    /* =====================
       MODAL CLOSE
    ===================== */

    document
      .getElementById('modal-close-btn')
      .addEventListener('click', function() {
        closeModalDirect();
      });


    /* =====================
       CLICK OUTSIDE MODAL
    ===================== */

    document
      .getElementById('item-modal')
      .addEventListener('click', function(event) {

        if (event.target === this) {
          closeModalDirect();
        }
      });


    /* =====================
       UPLOAD ZONE
    ===================== */

    document
      .getElementById('upload-zone')
      .addEventListener('click', function() {

        document
          .getElementById('file-input')
          .click();
      });


    /* =====================
       FILE INPUT
    ===================== */

    document
      .getElementById('file-input')
      .addEventListener('change', function() {

        if (this.files && this.files.length > 0) {
          handleImageUpload(this.files[0]);
        }
      });


    /* =====================
       SAVE ITEM
    ===================== */

    document
      .getElementById('save-item-btn')
      .addEventListener('click', function() {
        saveWardrobeItem();
      });


    /* =====================
       INITIAL HEIGHT
    ===================== */

    updateHeightDisplay();

  }
);