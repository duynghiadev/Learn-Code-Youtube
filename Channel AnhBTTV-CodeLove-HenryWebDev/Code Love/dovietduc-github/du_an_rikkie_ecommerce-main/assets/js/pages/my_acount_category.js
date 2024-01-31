const btnCategorySave = document.querySelector('.btn_category_save');
const inputCategory = document.querySelector('.category_name');
const tbodyCategory = document.querySelector('.category_table');


function handleAddCategory(event) {
    event.preventDefault();
    // 1. Validate category
    let valueName = inputCategory.value.trim();
    let divMessage = inputCategory.nextElementSibling;
    // Khởi tạo biến thông báo form hợp lệ
    let isFormValid = true;
    if(valueName === '') {
        //1. add error to input
        inputCategory.classList.add('error');
        //2. show message error under input
        // 2.1 chọn div message của input nhập name
        divMessage.innerText = 'Danh mục không được để trống';
        isFormValid = false;
    } else {
        inputCategory.classList.remove('error');
        divMessage.innerText = '';
    }

    // 2. Kiểm tra validate thành công mới lưu dữ liệu
    if(isFormValid) {
        if(btnCategorySave.classList.contains('update')) {
            updateCategory();
        } else {
            addCategory();
        }
    }

}

function updateCategory() {
    // 1. Lấy dữ liệu từ localStorage
    let categorys = JSON.parse(localStorage.getItem('categories'));
    let idUpdate = btnCategorySave.getAttribute('data-id');
    // trim chỉ xóa space ở 2 đầu chuỗi
    let valueName = inputCategory.value.trim();
    
    // 2. cập nhật name của object có id = id đang lưu chỉnh sửa
    // hàm map loop qua các phần tử trong mảng
    // item chính là value của các phần tử
    // Nó trả về mảng mới với các giá trị return mỗi lần loop qua được push vào
    let resultCate = categorys.map(
        function(item) {
            if(item.id === idUpdate) {
                return {
                    id: item.id,
                    name: valueName
                }
            } else {
                return item;
            }
        }
    );
    // 3. lưu dữ liệu đến local
    localStorage.setItem('categories', JSON.stringify(resultCate));
    // 4. render dữ liệu theo local
    renderDataCategoryFromLocal();
    // 5. reset dữ liệu form
    document.querySelector('#category_form_add').reset();
    // 6. reset đến trạng thái add forrm
    btnCategorySave.classList.remove('update');
    btnCategorySave.removeAttribute('data-id');

}

function addCategory() {
    let valueName = inputCategory.value.trim();
    // Khi chưa có ở local thì khởi tạo mảng []
    let categorys;
    if(localStorage.getItem('categories') === null) {
        categorys = [];
    } 
    // Đã có dữ liệu ở local theo key categories
    else {
        categorys = JSON.parse(localStorage.getItem('categories'));
    }
    let objCategory = {
        id: crypto.randomUUID(),
        name: valueName
    }
    categorys.push(objCategory);
    // lưu categy to local
    localStorage.setItem('categories', JSON.stringify(categorys));
    // reset value input
    document.querySelector('#category_form_add').reset();
    // render dữ liệu dựa vào localStorage
    renderDataCategoryFromLocal();

}

function renderDataCategoryFromLocal() {
    // 1. Lấy dữ liệu category từ local
    let category = JSON.parse(localStorage.getItem('categories'));
    let htmlResult = '';

    if(category) {
        for(let i = 0; i < category.length; i++) {
            let categoryItem = category[i];
            htmlResult = htmlResult + `<tr>
                <td>${categoryItem.name}</td>
                <td>
                <button data-id="${categoryItem.id}" class="btn_common btn_edit">Edit</button>
                    <button data-id="${categoryItem.id}" class="btn_common btn_delete">Delete</button>
                </td>
            </tr>`;
        }
        // chọn tbody của table và đưa html vào
        tbodyCategory.innerHTML = htmlResult;
    }
    
}

function handleProcessCategory(event) {
    let clicked = event.target;
    let idDelete = clicked.getAttribute('data-id');
    // Kiểm tra nhấn vào button xóa
    if(clicked.classList.contains('btn_delete')) {
        if(confirm('Bạn chắc chắn muốn xóa không?')) {
            // 1. Lấy dữ liệu category từ local
            let category = JSON.parse(localStorage.getItem('categories'));
            let categoryFilter = category.filter(item => item.id !== idDelete);
            // 2. Lưu dữ liệu đã xóa vào localStorage
            localStorage.setItem('categories', JSON.stringify(categoryFilter));
            // 3. Hiển thị dữ liệu theo localStorage
            renderDataCategoryFromLocal();
        } 
    } else if(clicked.classList.contains('btn_edit')) {
        // 1. Tìm ra object đang edit
        // 1. Lấy dữ liệu category từ local
        let idUpdate = clicked.getAttribute('data-id');
        let category = JSON.parse(localStorage.getItem('categories'));
        let objEdit = category.find(item => item.id === idUpdate);
        // 2. set value objEdit cho input
        inputCategory.value = objEdit.name;
        // 3. cập nhật trạng thái cho button save là edit
        btnCategorySave.classList.add('update');
        btnCategorySave.setAttribute('data-id', idUpdate);

    }
}


// khi trang load lần đầu
renderDataCategoryFromLocal();
// Khi click thêm dữ liệu
btnCategorySave.addEventListener('click', handleAddCategory);
// Thêm sự kiện delete và edit dữ liêu
tbodyCategory.addEventListener('click', handleProcessCategory);
