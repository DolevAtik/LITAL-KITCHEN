// Basic JS password protection
const ADMIN_PASSWORD = "lital";

function checkAuth() {
    const isAuth = sessionStorage.getItem('lital_admin_auth');
    if (!isAuth) {
        const pswd = prompt("נא להזין סיסמת מנהל:");
        if (pswd === ADMIN_PASSWORD) {
            sessionStorage.setItem('lital_admin_auth', 'true');
            document.getElementById('admin-main').style.display = 'block';
            loadProducts();
            loadOpenDates();
        } else {
            alert("סיסמה שגויה");
            window.location.href = "index.html";
        }
    } else {
        document.getElementById('admin-main').style.display = 'block';
        loadProducts();
        loadOpenDates();
    }
}

let productsList = [];

async function loadProducts() {
    document.getElementById('products-list-loader').style.display = 'block';

    const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .order('category_id')
        .order('name');

    document.getElementById('products-list-loader').style.display = 'none';

    if (error) {
        console.error("Error fetching products:", error);
        alert("שגיאה בטעינת המוצרים");
        return;
    }

    productsList = data;
    renderProductsTable();
}

function renderProductsTable() {
    const tbody = document.getElementById('products-tbody');
    tbody.innerHTML = '';

    productsList.forEach(p => {
        const tr = document.createElement('tr');

        let pricesStr = (p.options || []).map(o => `${o.label}: ₪${o.price}`).join(', ');

        tr.innerHTML = `
            <td>${p.name} ${p.is_special_deal ? '(מבצע)' : ''}</td>
            <td>${p.category_id}</td>
            <td>${pricesStr}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct('${p.id}')">ערוך</button>
                <button class="action-btn delete-btn" onclick="deleteProduct('${p.id}')">מחק</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Option Management
const optionsContainer = document.getElementById('options-container');

function createOptionRow(label = '', price = '') {
    const div = document.createElement('div');
    div.className = 'option-row';
    div.innerHTML = `
        <input type="text" placeholder="תווית (למשל: רגיל/250מ״ל)" class="opt-label" value="${label}" required>
        <input type="number" placeholder="מחיר" class="opt-price" value="${price}" required>
        <button type="button" class="remove-opt-btn" onclick="this.parentElement.remove()">X</button>
    `;
    optionsContainer.appendChild(div);
}

document.getElementById('add-option-btn').addEventListener('click', () => createOptionRow());

document.getElementById('p-customizable').addEventListener('change', (e) => {
    document.getElementById('customization-settings').style.display = e.target.checked ? 'block' : 'none';
});

document.getElementById('p-custom-type').addEventListener('change', (e) => {
    document.getElementById('limit-group').style.display = e.target.value === 'quantity-limit' ? 'block' : 'none';
});

// Form Submit
document.getElementById('product-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const saveBtn = document.getElementById('save-btn');
    const loader = document.getElementById('save-loader');

    saveBtn.disabled = true;
    loader.style.display = 'inline-block';

    // Build options
    const optLabels = document.querySelectorAll('.opt-label');
    const optPrices = document.querySelectorAll('.opt-price');
    const options = [];
    for (let i = 0; i < optLabels.length; i++) {
        options.push({
            label: optLabels[i].value,
            price: Number(optPrices[i].value)
        });
    }

    // Customization
    let customOpts = [];
    const customOptsStr = document.getElementById('p-custom-options').value;
    if (customOptsStr) {
        customOpts = customOptsStr.split(',').map(s => s.trim()).filter(s => s);
    }

    // Image handling
    let finalImageUrl = document.getElementById('p-image-url').value || null;
    const fileInput = document.getElementById('p-image-file');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;

        const { data, error: uploadError } = await supabaseClient.storage
            .from('product-images')
            .upload(fileName, file);

        if (uploadError) {
            alert("שגיאה בהעלאת התמונה! ודא שיש ב-Supabase ב-Storage באקט בשם 'product-images' עם הרשאת Public/Insert");
            console.error("Upload error:", uploadError);
            saveBtn.disabled = false;
            loader.style.display = 'none';
            return;
        }

        const { data: publicUrlData } = supabaseClient.storage.from('product-images').getPublicUrl(fileName);
        finalImageUrl = publicUrlData.publicUrl;
    }

    const productData = {
        name: document.getElementById('p-name').value,
        category_id: document.getElementById('p-category').value,
        image: finalImageUrl,
        description: document.getElementById('p-description').value || null,
        is_special_deal: document.getElementById('p-special').checked,
        options: options,
        customizable: document.getElementById('p-customizable').checked,
        customization_type: document.getElementById('p-custom-type').value || null,
        customization_limit: document.getElementById('p-custom-limit').value ? Number(document.getElementById('p-custom-limit').value) : null,
        customization_options: customOpts.length > 0 ? customOpts : null
    };

    const editId = document.getElementById('edit-id').value;

    if (editId) {
        // Update
        const { error } = await supabaseClient.from('products').update(productData).eq('id', editId);
        if (error) { alert("שגיאה בעדכון"); console.error(error); }
        else { alert("עודכן בהצלחה!"); resetForm(); loadProducts(); }
    } else {
        // Insert
        const { error } = await supabaseClient.from('products').insert([productData]);
        if (error) { alert("שגיאה ביצירה"); console.error(error); }
        else { alert("נוצר בהצלחה!"); resetForm(); loadProducts(); }
    }

    saveBtn.disabled = false;
    loader.style.display = 'none';
});

function editProduct(id) {
    const p = productsList.find(x => x.id === id);
    if (!p) return;

    document.getElementById('edit-id').value = p.id;
    document.getElementById('p-name').value = p.name;
    document.getElementById('p-category').value = p.category_id;
    document.getElementById('p-image-url').value = p.image || '';
    document.getElementById('p-image-file').value = '';
    document.getElementById('p-description').value = p.description || '';
    document.getElementById('p-special').checked = p.is_special_deal || false;

    optionsContainer.innerHTML = '';
    (p.options || []).forEach(o => createOptionRow(o.label, o.price));

    document.getElementById('p-customizable').checked = p.customizable || false;
    document.getElementById('customization-settings').style.display = p.customizable ? 'block' : 'none';

    document.getElementById('p-custom-type').value = p.customization_type || '';
    document.getElementById('limit-group').style.display = p.customization_type === 'quantity-limit' ? 'block' : 'none';
    document.getElementById('p-custom-limit').value = p.customization_limit || '';
    document.getElementById('p-custom-options').value = (p.customization_options || []).join(', ');

    document.getElementById('save-btn').textContent = 'עדכן מוצר';
    document.getElementById('cancel-edit').style.display = 'inline-block';

    window.scrollTo(0, 0);
}

document.getElementById('cancel-edit').addEventListener('click', resetForm);

function resetForm() {
    document.getElementById('product-form').reset();
    document.getElementById('edit-id').value = '';
    optionsContainer.innerHTML = '';
    createOptionRow('רגיל', '');
    document.getElementById('customization-settings').style.display = 'none';
    document.getElementById('limit-group').style.display = 'none';
    document.getElementById('save-btn').textContent = 'שמור מוצר חדש';
    document.getElementById('cancel-edit').style.display = 'none';
}

async function deleteProduct(id) {
    if (confirm("בטוח שברצונך למחוק מוצר זה?")) {
        const { error } = await supabaseClient.from('products').delete().eq('id', id);
        if (!error) loadProducts();
        else alert("שגיאה במחיקה");
    }
}

// MIGRATION SCRIPT
document.getElementById('import-btn').addEventListener('click', async () => {
    if (confirm("פעולה זו תשפוך את כל המוצרים הקיימים הישנים בקובץ הגיבוי אל תוך סופהבייס. האם להמשיך? (מומלץ לבצע רק פעם אחת!)")) {
        const productsToInsert = [];

        OLD_MENU_DATA.forEach(cat => {
            cat.items.forEach(item => {
                productsToInsert.push({
                    category_id: cat.categoryId,
                    name: item.name,
                    image: item.image || null,
                    description: item.description || null,
                    options: item.options || [],
                    is_special_deal: item.isSpecialDeal || false,
                    customizable: item.customizable || false,
                    customization_type: item.customizationType || null,
                    customization_limit: item.customizationLimit || null,
                    customization_options: item.customizationOptions || null
                });
            });
        });

        try {
            const { error } = await supabaseClient.from('products').insert(productsToInsert);
            if (error) {
                console.error("Migration error:", error);
                alert("שגיאה בייבוא הנתונים.");
            } else {
                alert("כל המוצרים יובאו בהצלחה!");
                loadProducts();
            }
        } catch (err) {
            console.error("Migration fatal error", err);
        }
    }
});

// SPECIAL DATES MANAGEMENT
let openDatesList = [];

async function loadOpenDates() {
    const { data, error } = await supabaseClient.from('open_dates').select('*').order('date_string');
    if (!error && data) {
        openDatesList = data;
        renderOpenDates();
    }
}

function renderOpenDates() {
    const list = document.getElementById('open-dates-list');
    list.innerHTML = '';
    
    if (openDatesList.length === 0) {
        list.innerHTML = '<li style="color: #666; font-style: italic;">אין תאריכים מיוחדים פתוחים כרגע.</li>';
        return;
    }

    openDatesList.forEach(item => {
        const li = document.createElement('li');
        li.style = "display:flex; justify-content:space-between; align-items:center; padding: 10px; border: 1px solid #ddd; margin-bottom: 5px; border-radius: 5px; background: #fff;";
        
        // Format date nicely
        const [y, m, d] = item.date_string.split('-');
        const formatted = `${d}/${m}/${y}`;

        li.innerHTML = `
            <span style="font-weight: 600;">${formatted}</span>
            <button class="action-btn delete-btn" onclick="deleteOpenDate('${item.id}')" style="padding: 5px 10px; font-size: 0.8rem;">מחק</button>
        `;
        list.appendChild(li);
    });
}

document.getElementById('add-date-btn').addEventListener('click', async () => {
    const d = document.getElementById('special-date-input').value;
    if (!d) return;
    const { error } = await supabaseClient.from('open_dates').insert([{ date_string: d }]);
    if (error) {
        alert("שגיאה בהוספת תאריך. ייתכן שהוא כבר קיים.");
    } else { 
        document.getElementById('special-date-input').value = ''; 
        loadOpenDates(); 
    }
});

async function deleteOpenDate(id) {
    if (confirm("בטוח שברצונך למחוק תאריך זה?")) {
        const { error } = await supabaseClient.from('open_dates').delete().eq('id', id);
        if (!error) loadOpenDates();
    }
}

// START
createOptionRow('רגיל', '');
checkAuth();
