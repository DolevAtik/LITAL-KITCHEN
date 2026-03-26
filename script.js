const MENU_DATA = [
    {
        categoryId: 'dishes',
        title: 'מנות',
        icon: '🥪',
        items: [
            {
                id: 'm1',
                name: '🔥 דיל משפחתי',
                image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800',
                description: 'כולל: 2 ליטר קוסקוס, 2 ליטר מרק, 4 מפרום / עוף לבחירה, חמוצים ומטבוחה בצד',
                options: [{ label: 'משפחתי', price: 170 }],
                isSpecialDeal: true
            },
            { id: 'm2', name: 'שניצל בג׳בטה', image: 'https://images.unsplash.com/photo-1599921841143-8190e5a5c0bb?auto=format&fit=crop&q=80&w=800', description: 'עם מטבוחה, חציל מטוגן, חומוס מבושל, פלפל חריף וחמוצים בצד', options: [{ label: 'רגיל', price: 40 }] },
            { id: 'm3', name: 'מנה קוסקוס עם מפרום / עוף', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800', options: [{ label: 'רגיל', price: 50 }] },
            { id: 'm4', name: 'מנה קוסקוס צמחוני', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800', options: [{ label: 'רגיל', price: 40 }] },
            { id: 'm5', name: 'סולת 2 ליטר ', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800', options: [{ label: 'רגיל', price: 60 }] },
        ]
    },
    {
        categoryId: 'mains',
        title: 'בשר / עוף',
        icon: '🍲',
        items: [
            { id: 'main4', name: 'פשטידת מחמאר', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=800', options: [{ label: 'רגיל', price: 70 }] },
            { id: 'main5', name: 'צלי בשר - יחידה', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', options: [{ label: 'יחידה', price: 30 }] },
            { id: 'main6', name: 'צלי בשר - 5 יחידות', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', options: [{ label: '5 יחידות', price: 140 }] },
            { id: 'main7', name: 'רולדת בשר ורוטב פטריות', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', options: [{ label: 'רגיל', price: 80 }] },
            { id: 'main8', name: 'מפרום (יחידה)', image: 'https://images.unsplash.com/photo-1534080564607-c98752441091?auto=format&fit=crop&q=80&w=800', options: [{ label: 'יחידה', price: 15 }] },
            { id: 'main9', name: 'שניצל (יחידה)', image: 'https://images.unsplash.com/photo-1599921841143-8190e5a5c0bb?auto=format&fit=crop&q=80&w=800', options: [{ label: 'יחידה', price: 15 }] },
            { id: 'main10', name: 'כרע עוף (יחידה)', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800', options: [{ label: 'יחידה', price: 15 }] },
        ]
    },
    {
        categoryId: 'fish',
        title: 'דגים',
        icon: '🐟',
        items: [
            { id: 'f1', name: 'קציצות דגים (10 יח׳)', image: 'https://images.unsplash.com/photo-1534080564607-c98752441091?auto=format&fit=crop&q=80&w=800', options: [{ label: 'רגיל', price: 70 }] },
            { id: 'f2', name: 'דג טונה ברוטב מרוקאי', image: 'https://images.unsplash.com/photo-1534939561126-755ecf15a19c?auto=format&fit=crop&q=80&w=800', options: [{ label: 'יחידה', price: 25 }] },
            { id: 'f3', name: 'דג מושט ברוטב מרוקאי', image: 'https://images.unsplash.com/photo-1534939561126-755ecf15a19c?auto=format&fit=crop&q=80&w=800', options: [{ label: 'יחידה', price: 25 }] },
            { id: 'f4', name: 'דג מושט מטוגן', image: 'https://images.unsplash.com/photo-1534939561126-755ecf15a19c?auto=format&fit=crop&q=80&w=800', options: [{ label: 'יחידה', price: 25 }] },
        ]
    },
    {
        categoryId: 'salads',
        title: 'סלטים',
        icon: '🥗',
        subtitle: 'מחירים לפי 250 מ״ל / 500 מ״ל',
        items: [
            { id: 's1', name: 'מטבוחה', image: 'salads/matbuha.jpeg', options: [{ label: '250 מ"ל', price: 25 }, { label: '500 מ"ל', price: 40 }] },
            { id: 's2', name: 'חציל בעריסה', image: 'salads/eggplant_arisa.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's3', name: 'תפוח אדמה במיונז', image: 'salads/potato_salad.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's4', name: 'חציל במיונז', image: 'salads/eggplant_mayo.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's5', name: 'כרוב אדום', image: 'salads/Cabbage_mayo.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's6', name: 'כרוב תירס במיונז', image: 'salads/Cabbage_mayo_corn.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's7', name: 'כרוב גזר במיונז', image: 'salads/cabbage_carrot_mayo.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's8', name: 'כרוב חמוץ', image: 'salads/cabbage_3.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's9', name: 'סלק אדום', image: 'salads/selek.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's10', name: 'סלק ביצים', image: 'salads/egg.jpeg', options: [{ label: '250 מ"ל', price: 20 }, { label: '500 מ"ל', price: 30 }] },
            { id: 's11', name: 'טחינה', image: 'salads/thina.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's12', name: 'סלסה', image: 'salads/salsa.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's13', name: 'גזר חי חריף', image: 'salads/carrot_live.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's14', name: 'גזר מבושל', image: 'salads/carrot.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
            { id: 's15', name: 'פלפל חריף מטוגן', image: 'salads/pilpel_metugan.jpeg', options: [{ label: '250 מ"ל', price: 25 }, { label: '500 מ"ל', price: 35 }] },
            { id: 's16', name: 'חמוצי הבית', image: 'salads/hamutim.jpeg', options: [{ label: '250 מ"ל', price: 15 }, { label: '500 מ"ל', price: 25 }] },
        ]
    },
    {
        categoryId: 'sides',
        title: 'תוספות',
        icon: '🍚',
        items: [
            { id: 'side4', name: 'חומוס מרוקאי מבושל', image: 'https://images.unsplash.com/photo-1541518763039-461628879ec3?auto=format&fit=crop&q=80&w=800', options: [{ label: '1 ליטר', price: 40 }] },
            { id: 'side1', name: 'תפוח אדמה', image: 'https://images.unsplash.com/photo-1518310327277-30d7c0bb3582?auto=format&fit=crop&q=80&w=800', options: [{ label: '1 ליטר', price: 35 }, { label: '2 ליטר', price: 70 }] },
            { id: 'side2', name: 'זיתים ברוטב', image: 'https://images.unsplash.com/photo-1586516313531-1e2409f7df22?auto=format&fit=crop&q=80&w=800', options: [{ label: '1 ליטר', price: 30 }, { label: '2 ליטר', price: 60 }] },
            { id: 'side3', name: 'אורז', image: 'rice.avif', options: [{ label: '1 ליטר', price: 25 }, { label: '2 ליטר', price: 45 }] },
        ]
    }
];

let cart = {};

function init() {
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

        category.items.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';

            if (item.isSpecialDeal) {
                itemEl.classList.add('special-deal-card');
            }

            let imageHtml = item.image ? `<img src="${item.image}" class="item-image" alt="${item.name}" onerror="this.style.display='none'">` : '';
            let descriptionHtml = item.description ? `<p class="item-description">${item.description}</p>` : '';

            let optionsHtml = '<div class="price-options">';
            item.options.forEach((opt, idx) => {
                const uniqueId = `${item.id}-${idx}`;
                const cartQty = cart[uniqueId]?.quantity || 0;

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
                            <button class="qty-btn" aria-label="Increase quantity" onclick="updateCart('${uniqueId}', '${item.name.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', '${opt.label.replace(/'/g, "\\'").replace(/"/g, "&quot;")}', ${opt.price}, 1, '${category.categoryId}')">+</button>
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

function updateCart(id, name, optionLabel, price, change, categoryId) {
    if (!cart[id]) {
        if (change <= 0) return; // Prevent creating an item if we are just subtracting from 0
        cart[id] = { name, optionLabel, price, quantity: 0, categoryId };
    }

    cart[id].quantity += change;
    if (cart[id].quantity <= 0) {
        delete cart[id];
    }

    const qtyEl = document.getElementById(`qty-${id}`);
    if (qtyEl) {
        qtyEl.textContent = cart[id] ? cart[id].quantity : 0;
    }

    updateCartSummary();
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
                <span class="cart-item-opt">${labelText}</span>
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

    // Handle date validation
    dateInput.addEventListener('input', (e) => {
        if (!e.target.value) return;

        const dateObj = new Date(e.target.value);
        const day = dateObj.getDay();
        // 2 is Tuesday, 5 is Friday
        if (day !== 2 && day !== 5) {
            alert('הזמנות אפשריות לימי שלישי ושישי בלבד.');
            e.target.value = '';
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
        const date = dateInput.value;
        const deliveryType = document.querySelector('input[name="delivery"]:checked').value;

        if (!date) {
            alert('אנא בחר תאריך יום שלישי או שישי להזמנה');
            return;
        }

        const formattedDate = new Date(date).toLocaleDateString('he-IL');

        let message = `*שלום ליטל, אשמח להזמין:* 👩‍🍳\n\n`;

        Object.values(cart).forEach(item => {
            const labelText = (item.optionLabel === 'רגיל' || item.optionLabel === 'יחידה' || item.optionLabel === 'משפחתי') ? '' : ` (${item.optionLabel})`;
            message += `• ${item.quantity}x ${item.name}${labelText}\n`;
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
