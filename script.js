const CATEGORIES = [
    { categoryId: 'dishes', title: 'מנות', icon: '🥪', subtitle: '' },
    { categoryId: 'mains', title: 'בשר / עוף', icon: '🍲', subtitle: '' },
    { categoryId: 'fish', title: 'דגים', icon: '🐟', subtitle: '' },
    { categoryId: 'salads', title: 'סלטים', icon: '🥗', subtitle: 'מחירים לפי 250 מ״ל / 500 מ״ל' },
    { categoryId: 'sides', title: 'תוספות', icon: '🍚', subtitle: '' }
];

let MENU_DATA = [];

let cart = {};
let currentCustomizingItem = null;

async function init() {
    const spinner = document.getElementById('loading-spinner');
    if(spinner) spinner.style.display = 'block';

    try {
        const { data, error } = await supabaseClient
            .from('products')
            .select('*')
            .order('name');
            
        if (error) {
            console.error("Error fetching products:", error);
            alert("שגיאה בטעינת התפריט");
        } else if (data) {
            MENU_DATA = CATEGORIES.map(cat => ({
                ...cat,
                items: data.filter(item => item.category_id === cat.categoryId)
                           .map(item => ({
                               id: item.id,
                               name: item.name,
                               image: item.image,
                               description: item.description,
                               options: item.options || [],
                               isSpecialDeal: item.is_special_deal,
                               customizable: item.customizable,
                               customizationType: item.customization_type,
                               customizationLimit: item.customization_limit,
                               customizationOptions: item.customization_options
                           }))
            })).filter(cat => cat.items.length > 0);
        }
    } catch(err) {
        console.error("Failed to fetch from DB:", err);
    }

    if(spinner) spinner.style.display = 'none';

    renderTabs();
    renderMenu();
    setupEventListeners();

    if (MENU_DATA.length > 0) {
        selectCategory(MENU_DATA[0].categoryId);
    }
}

function renderTabs() {
    const tabsContainer = document.getElementById('category-tabs');
    tabsContainer.innerHTML = '';

    MENU_DATA.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-tab';
        btn.id = `tab-${category.categoryId}`;
        btn.innerHTML = `<span>${category.icon}</span> <span>${category.title}</span>`;
        btn.onclick = () => selectCategory(category.categoryId);
        tabsContainer.appendChild(btn);
    });
}

function selectCategory(categoryId) {
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.category-section').forEach(section => section.classList.remove('active'));

    const activeTab = document.getElementById(`tab-${categoryId}`);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    const activeSection = document.getElementById(`section-${categoryId}`);
    if (activeSection) activeSection.classList.add('active');
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    MENU_DATA.forEach(category => {
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = `section-${category.categoryId}`;

        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h2 class="category-title">${category.title}</h2>
        `;
        section.appendChild(header);

        if (category.subtitle) {
            const subtitle = document.createElement('p');
            subtitle.className = 'category-subtitle';
            subtitle.textContent = category.subtitle;
            section.appendChild(subtitle);
        }

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';
        if (category.categoryId === 'dishes') {
            itemsGrid.classList.add('grid-single');
        }

        category.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';

            if (item.isSpecialDeal) {
                itemEl.classList.add('special-deal-card');
            }

            let imageHtml = item.image ? `<img src="${item.image}" class="item-image" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">` : '';
            let descriptionHtml = item.description ? `<p class="item-description">${item.description}</p>` : '';

            let optionsHtml = '<div class="price-options">';
            item.options.forEach((opt, idx) => {
                const uniqueId = `${item.id}-${idx}`;

                // Calculate total quantity for this baseId (all versions)
                let cartQty = 0;
                Object.entries(cart).forEach(([cartId, cartItem]) => {
                    const cartBaseId = cartId.split('-custom-')[0].split('-standard-')[0];
                    if (cartBaseId === uniqueId) {
                        cartQty += cartItem.quantity;
                    }
                });

                const labelDisplay = (opt.label === 'רגיל' || opt.label === 'יחידה' || opt.label === 'משפחתי') ? '' : opt.label;
                const labelHtml = labelDisplay ? `<span>${labelDisplay}</span>` : '';

                optionsHtml += `
                    <div class="price-pill">
                        <div class="price-info">
                            ${labelHtml}
                            <strong>₪${opt.price}</strong>
                        </div>
                        <div class="quantity-control">
                             <button class="qty-btn" aria-label="Decrease quantity" onclick="updateCart('${uniqueId}', '${item.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${opt.label.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', ${opt.price}, -1, '${category.categoryId}')">−</button>
                             <span class="qty-val" id="qty-${uniqueId}">${cartQty}</span>
                             <button class="qty-btn" aria-label="Increase quantity" onclick="${item.customizable ? `openCustomizationModal('${item.id}', ${idx}, '${category.categoryId}')` : `updateCart('${uniqueId}', '${item.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${opt.label.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', ${opt.price}, 1, '${category.categoryId}')`}">+</button>
                         </div>
                     </div>
                 `;
            });
            optionsHtml += '</div>';

            itemEl.innerHTML = `
                ${imageHtml}
                <div class="item-details">
                    <div class="item-header">
                        <span class="item-name">${item.name}</span>
                    </div>
                    ${descriptionHtml}
                    ${optionsHtml}
                </div>
            `;
            itemsGrid.appendChild(itemEl);
        });

        section.appendChild(itemsGrid);
        container.appendChild(section);
    });
}

function updateCart(id, name, optionLabel, price, change, categoryId, customizations = null) {
    if (!cart[id]) {
        if (change <= 0) return; // Prevent creating an item if we are just subtracting from 0
        cart[id] = { name, optionLabel, price, quantity: 0, categoryId, customizations };
    }

    cart[id].quantity += change;
    if (cart[id].quantity <= 0) {
        delete cart[id];
    }

    // Update main menu counter
    // Find baseId (remove customization/standard uniqueness suffixes)
    const baseId = id.split('-custom-')[0].split('-standard-')[0];
    const qtyEl = document.getElementById(`qty-${baseId}`);
    if (qtyEl) {
        // Calculate total quantity for this baseId (all versions)
        let totalQty = 0;
        Object.entries(cart).forEach(([cartId, cartItem]) => {
            const cartBaseId = cartId.split('-custom-')[0].split('-standard-')[0];
            if (cartBaseId === baseId) {
                totalQty += cartItem.quantity;
            }
        });
        qtyEl.textContent = totalQty;
    }

    updateCartSummary();
}

function openCustomizationModal(itemId, optionIdx, categoryId) {
    const category = MENU_DATA.find(cat => cat.categoryId === categoryId);
    if (!category) return;
    const item = category.items.find(i => i.id === itemId);
    if (!item) return;
    const option = item.options[optionIdx];

    currentCustomizingItem = { item, option, categoryId, optionIdx, selections: {} };

    document.getElementById('custom-item-name').textContent = item.name + ' - התאמה אישית';
    const container = document.getElementById('customization-options-container');
    container.innerHTML = '';

    const subtitleEl = document.querySelector('.customization-subtitle');
    const addToCartBtn = document.getElementById('add-customized-btn');

    // Clear notes field
    const notesInput = document.getElementById('custom-item-notes');
    if (notesInput) notesInput.value = '';

    if (item.customizationType === 'quantity-limit') {
        subtitleEl.textContent = `בחר ${item.customizationLimit} עיקריות (מפרום / עוף):`;
        addToCartBtn.disabled = true;

        item.customizationOptions.forEach(opt => {
            currentCustomizingItem.selections[opt] = 0;
            const row = document.createElement('div');
            row.className = 'custom-qty-row';
            row.innerHTML = `
                <span>${opt}</span>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateCustomQty('${opt}', -1)">−</button>
                    <span class="qty-val" id="custom-qty-${opt}">0</span>
                    <button class="qty-btn" onclick="updateCustomQty('${opt}', 1)">+</button>
                </div>
            `;
            container.appendChild(row);
        });

        const info = document.createElement('div');
        info.id = 'custom-limit-info';
        info.className = 'custom-limit-info';
        info.textContent = `נשאר לבחור: ${item.customizationLimit}`;
        container.appendChild(info);

    } else {
        subtitleEl.textContent = 'מה להוריד מהמנה?';
        addToCartBtn.disabled = false;

        item.customizationOptions.forEach((opt, idx) => {
            const label = document.createElement('label');
            label.className = 'custom-option-label';
            const isDefault = opt === 'ללא שינויים';
            if (isDefault) label.classList.add('selected');

            label.innerHTML = `
                <input type="checkbox" name="custom-opt" value="${opt}" ${isDefault ? 'checked' : ''} onchange="handleCustomizationChange(this)">
                <span>${opt}</span>
            `;
            container.appendChild(label);
        });
    }

    document.getElementById('customization-modal').classList.remove('hidden');
}

function updateCustomQty(option, change) {
    if (!currentCustomizingItem) return;
    const { item, selections } = currentCustomizingItem;
    const currentTotal = Object.values(selections).reduce((a, b) => a + b, 0);

    if (change > 0 && currentTotal >= item.customizationLimit) return;
    if (change < 0 && selections[option] <= 0) return;

    selections[option] += change;
    document.getElementById(`custom-qty-${option}`).textContent = selections[option];

    const newTotal = Object.values(selections).reduce((a, b) => a + b, 0);
    const info = document.getElementById('custom-limit-info');
    info.textContent = `נשאר לבחור: ${item.customizationLimit - newTotal}`;

    const addToCartBtn = document.getElementById('add-customized-btn');
    addToCartBtn.disabled = (newTotal !== item.customizationLimit);
}

function handleCustomizationChange(checkbox) {
    const checkboxes = document.querySelectorAll('input[name="custom-opt"]');
    const isNoChanges = checkbox.value === 'ללא שינויים';

    if (isNoChanges && checkbox.checked) {
        // If checking "No changes", uncheck everything else
        checkboxes.forEach(cb => {
            if (cb.value !== 'ללא שינויים') {
                cb.checked = false;
                cb.parentElement.classList.remove('selected');
            }
        });
    } else if (checkbox.checked) {
        // If checking something else, uncheck "No changes"
        checkboxes.forEach(cb => {
            if (cb.value === 'ללא שינויים') {
                cb.checked = false;
                cb.parentElement.classList.remove('selected');
            }
        });
    }

    // Update visual classes for all
    checkboxes.forEach(cb => {
        if (cb.checked) cb.parentElement.classList.add('selected');
        else cb.parentElement.classList.remove('selected');
    });

    // If everything is unchecked, re-check "No changes"
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
    if (!anyChecked) {
        const defaultCb = Array.from(checkboxes).find(cb => cb.value === 'ללא שינויים');
        if (defaultCb) {
            defaultCb.checked = true;
            defaultCb.parentElement.classList.add('selected');
        }
    }
}

function addCustomizedToCart() {
    if (!currentCustomizingItem) return;

    const { item, option, categoryId, optionIdx, selections } = currentCustomizingItem;
    let selected = [];

    if (item.customizationType === 'quantity-limit') {
        Object.entries(selections).forEach(([opt, qty]) => {
            if (qty > 0) selected.push(`${qty}x ${opt}`);
        });
    } else {
        const checkboxes = document.querySelectorAll('input[name="custom-opt"]:checked');
        selected = Array.from(checkboxes).map(cb => cb.value);
    }

    // Get manual notes
    const notesInput = document.getElementById('custom-item-notes');
    const notesValue = notesInput ? notesInput.value.trim() : '';

    let finalId = `${item.id}-${optionIdx}`;
    let finalCustomizations = [];

    // Check if user chose "No changes"
    const isStandard = item.customizationType !== 'quantity-limit' && selected.length === 1 && selected[0] === 'ללא שינויים';

    if (!isStandard || notesValue) {
        // Filter out "No changes" if it somehow stayed
        const filtered = selected.filter(s => s !== 'ללא שינויים');
        if (filtered.length > 0 || notesValue) {
            const customSuffix = filtered.sort().join('|') + (notesValue ? '|' + notesValue : '');
            const hash = customSuffix.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
            // Add timestamp and random to ensure it's ALWAYS a unique row if it's a new add
            finalId += '-custom-' + Math.abs(hash) + '-' + Date.now();
            finalCustomizations = [...filtered];
            if (notesValue) finalCustomizations.push(`הערה: ${notesValue}`);
        } else {
            // It was just "No changes" even if filtered
            finalId += '-standard-' + Date.now();
        }
    } else {
        // Even for standard, if added from modal, we make it unique so it doesn't "overwrite"
        finalId += '-standard-' + Date.now();
    }

    updateCart(finalId, item.name, option.label, option.price, 1, categoryId, finalCustomizations);

    document.getElementById('customization-modal').classList.add('hidden');
    currentCustomizingItem = null;
}

function calculateTotal() {
    let total = 0;
    let salads250Items = [];

    Object.values(cart).forEach(item => {
        if (item.categoryId === 'salads' && item.optionLabel === '250 מ"ל') {
            for (let i = 0; i < item.quantity; i++) {
                salads250Items.push(item);
            }
        } else {
            total += item.price * item.quantity;
        }
    });

    salads250Items.sort((a, b) => b.price - a.price);

    const groupsOf6 = Math.floor(salads250Items.length / 6);
    total += groupsOf6 * 100;

    const remainderStart = groupsOf6 * 6;
    let originalPriceForGroups = 0;

    for (let i = 0; i < remainderStart; i++) {
        originalPriceForGroups += salads250Items[i].price;
    }

    for (let i = remainderStart; i < salads250Items.length; i++) {
        total += salads250Items[i].price;
    }

    const discountTextEl = document.getElementById('discount-text');
    const discountAlert = document.getElementById('discount-alert');

    if (groupsOf6 > 0) {
        const saved = originalPriceForGroups - (groupsOf6 * 100);
        discountAlert.classList.remove('hidden');
        discountTextEl.textContent = `נהדר! הופעל מבצע 6 סלטים ב-100 (חסכת ${saved} ₪)`;
    } else {
        discountAlert.classList.add('hidden');
    }

    return total;
}

function updateCartSummary() {
    let totalItems = 0;
    Object.values(cart).forEach(item => {
        totalItems += item.quantity;
    });

    const cartSummary = document.getElementById('cart-summary');
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalPriceEl = document.getElementById('cart-total-price');

    if (totalItems > 0) {
        cartSummary.classList.remove('hidden');
    } else {
        cartSummary.classList.add('hidden');
        const cartModal = document.getElementById('cart-modal');
        if (!cartModal.classList.contains('hidden')) {
            renderCartModal();
        }
    }

    cartCountEl.textContent = totalItems;

    const total = calculateTotal();
    cartTotalPriceEl.textContent = '₪' + total;

    const cartModal = document.getElementById('cart-modal');
    if (!cartModal.classList.contains('hidden')) {
        renderCartModal();
    }
}

function renderCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('cart-empty-message');
    const orderForm = document.getElementById('order-form-container');
    const modalTotal = document.getElementById('modal-total-price');

    cartItemsContainer.innerHTML = '';

    const itemEntries = Object.entries(cart);

    if (itemEntries.length === 0) {
        emptyMessage.style.display = 'block';
        orderForm.classList.add('hidden');
        modalTotal.textContent = '₪0';
        return;
    }

    emptyMessage.style.display = 'none';
    orderForm.classList.remove('hidden');

    itemEntries.forEach(([id, item]) => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        const labelText = (item.optionLabel === 'רגיל' || item.optionLabel === 'יחידה' || item.optionLabel === 'משפחתי') ? '' : ` | ${item.optionLabel}`;

        row.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-title">
                    ${item.name} 
                    <button class="cart-remove-btn" onclick="updateCart('${id}', '${item.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${item.optionLabel.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', ${item.price}, -${item.quantity}, '${item.categoryId}')" title="הסר הכל">&times;</button>
                </span>
                <span class="cart-item-opt">${labelText}${item.customizations && item.customizations.length > 0 ? `<br><span class="item-customizations-list">${item.customizations.join(', ')}</span>` : ''}</span>
            </div>
            <div class="cart-item-price">
                <div class="quantity-control modal-qty">
                    <button class="qty-btn" aria-label="Decrease quantity" onclick="updateCart('${id}', '${item.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${item.optionLabel.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', ${item.price}, -1, '${item.categoryId}')">−</button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn" aria-label="Increase quantity" onclick="updateCart('${id}', '${item.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${item.optionLabel.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', ${item.price}, 1, '${item.categoryId}')">+</button>
                </div>
                <div style="font-weight: 700;">₪${item.price * item.quantity}</div>
            </div>
        `;
        cartItemsContainer.appendChild(row);
    });

    const total = calculateTotal();
    modalTotal.textContent = '₪' + total;
}

function getNextDate(daysOffset) {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    return d;
}

function setupEventListeners() {
    const viewCartBtn = document.getElementById('view-cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartModal = document.getElementById('cart-modal');
    const checkoutBtn = document.getElementById('checkout-btn');
    const dateInput = document.getElementById('order-date');

    viewCartBtn.addEventListener('click', () => {
        renderCartModal();
        cartModal.classList.remove('hidden');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.add('hidden');
        }
    });

    const cancelCustomizationBtn = document.getElementById('cancel-customization');
    const closeCustomizationBtn = document.getElementById('close-customization');
    const customModal = document.getElementById('customization-modal');
    const addToCartFromCustomBtn = document.getElementById('add-customized-btn');

    closeCustomizationBtn.addEventListener('click', () => {
        customModal.classList.add('hidden');
        currentCustomizingItem = null;
    });

    cancelCustomizationBtn.addEventListener('click', () => {
        customModal.classList.add('hidden');
        currentCustomizingItem = null;
    });

    customModal.addEventListener('click', (e) => {
        if (e.target === customModal) {
            customModal.classList.add('hidden');
            currentCustomizingItem = null;
        }
    });

    addToCartFromCustomBtn.addEventListener('click', addCustomizedToCart);

    // Handle date validation
    dateInput.addEventListener('input', (e) => {
        const dateError = document.getElementById('date-error');
        if (!e.target.value) {
            dateError.classList.add('hidden');
            return;
        }

        const dateObj = new Date(e.target.value);
        const day = dateObj.getDay();
        // 2 is Tuesday, 5 is Friday
        if (day !== 2 && day !== 5) {
            // Reset to next valid date instead of clearing (avoids greyed-out look)
            let nextValid = new Date(dateObj);
            for (let i = 1; i <= 7; i++) {
                nextValid.setDate(nextValid.getDate() + 1);
                if (nextValid.getDay() === 2 || nextValid.getDay() === 5) break;
            }
            e.target.valueAsDate = nextValid;
            dateError.classList.remove('hidden');
        } else {
            dateError.classList.add('hidden');
        }
    });

    // Prefill the next Friday or Tuesday depending on which comes first
    let offset = 1;
    let found = false;
    while (!found && offset < 14) {
        const candidate = getNextDate(offset);
        if (candidate.getDay() === 2 || candidate.getDay() === 5) {
            dateInput.valueAsDate = candidate;
            found = true;
        }
        offset++;
    }

    checkoutBtn.addEventListener('click', () => {
        const name = document.getElementById('customer-name').value.trim();
        const date = dateInput.value;
        const deliveryType = document.querySelector('input[name="delivery"]:checked').value;

        if (!name) {
            alert('אנא הכנס שם מלא');
            return;
        }

        if (!date) {
            alert('אנא בחר תאריך יום שלישי או שישי להזמנה');
            return;
        }

        const formattedDate = new Date(date).toLocaleDateString('he-IL');

        let message = `*שם:* ${name}\n`;
        message += `*שלום ליטל, אשמח להזמין:* 👩‍🍳\n\n`;

        Object.values(cart).forEach(item => {
            const labelText = (item.optionLabel === 'רגיל' || item.optionLabel === 'יחידה' || item.optionLabel === 'משפחתי') ? '' : ` (${item.optionLabel})`;
            const custText = item.customizations && item.customizations.length > 0 ? `\n   ┗ ${item.customizations.join(', ')}` : '';
            message += `• ${item.quantity}x ${item.name}${labelText}${custText}\n`;
        });

        const total = calculateTotal();

        message += `\n*סה"כ לתשלום:* ₪${total}`;
        message += `\n*תאריך:* ${formattedDate}`;
        message += `\n*סוג הזמנה:* ${deliveryType}`;
        message += `\n\nתודה רבה!`;

        const url = `https://wa.me/972548082606?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}

document.addEventListener('DOMContentLoaded', init);
