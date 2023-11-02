// 1. Nơi lưu trữ các biến querySelector
const buttonSave = document.querySelector('.btn_save');
const nameSelector = document.querySelector('.name');
const priceSelector = document.querySelector('.price_product');
const imageSelector = document.querySelector('.image');
const descriptionSelector = document.querySelector('.description');
const tbodySelector = document.querySelector('tbody.product_table');
const categoryFormSelector = document.querySelector('.category_wrapper_form');





// 2. khai báo hàm
function handleAddProduct(event) {

    // Ngăn submit form làm trang load lại
    event.preventDefault();

    let isValidForm = true;
    // 1. validate name
    let valueName = nameSelector.value.trim();
    let divError = nameSelector.nextElementSibling;
    if(valueName === '') {
        // thêm class error vào nameSelector
        nameSelector.classList.add('error');
        // Hiển thị thông báo lỗi vào div
        divError.innerText = 'Tên không được để trống';

        // gán lại false khi có lỗi
        isValidForm = false;
    } else {
        // xóa class error
        nameSelector.classList.remove('error');
        // Xóa thông báo lỗi vào div
        divError.innerText = '';
    }

    // validate giá price
    let valuePrice = priceSelector.value.trim();
    let divNextErrPrice = priceSelector.nextElementSibling;
    if(valuePrice === '') {
        priceSelector.classList.add('error');
        divNextErrPrice.innerText = 'Giá không thể trống';
        isValidForm = false;
    } else if(isNaN(valuePrice) || valuePrice < 0) {
        priceSelector.classList.add('error');
        divNextErrPrice.innerText = 'Xin hãy nhập số dương';
        isValidForm = false;
    } else {
        priceSelector.classList.remove('error');
        divNextErrPrice.innerText = '';
    }

    // validate image
    let valueImage = imageSelector.value.trim();
    let divErrorImage = imageSelector.nextElementSibling;
    if(valueImage === '') {
        imageSelector.classList.add('error');
        divErrorImage.innerText = 'Ảnh không thể trống';
        isValidForm = false;
    } else {
        imageSelector.classList.remove('error');
        divErrorImage.innerText = '';
    }

    // validate decription
    let valueDes = descriptionSelector.value.trim();
    let divErrorDes = descriptionSelector.nextElementSibling;
    if(valueDes === '') {
        descriptionSelector.classList.add('error');
        divErrorDes.innerText = 'Mô tả không thể trống';
        isValidForm = false;
    } else {
        descriptionSelector.classList.remove('error');
        divErrorDes.innerText = '';
    }

    // kiểm tra form hợp lệ
    if(isValidForm) {
        let clicked = event.target;
        if(clicked.classList.contains('update')) {
            let idUpdate = clicked.getAttribute('data-id');
            handleUpdateForm(idUpdate);
        } else {
            handleSubmitForm();
        }
        // reset value form
        document.querySelector('#form_save_product').reset();
    }   
    

}

function handleUpdateForm(idUpdate) {
    // 1. Lấy tất cả dữ liệu ở localStorage
    let products = JSON.parse(localStorage.getItem('products'));

    // 2. Tìm ra index của object cần update
    let indexUpdate = products.findIndex(
        function(item) {
            if(item.id === idUpdate) {
                return true;
            } else {
                return false;
            }
        }
    );
    // 3. Thay đổi value object theo value người dùng nhập
    let valueName = nameSelector.value.trim();
    let valuePrice = priceSelector.value.trim();
    let valueImage = imageSelector.value.trim();
    let valueDes = descriptionSelector.value.trim();
    // lấy value type do người dùng chọn
    let valueType = document.querySelector('.type_product:checked').value;
    // lấy value của category select
    let valueCategory = categoryFormSelector.value;

    products[indexUpdate] = {
        id: products[indexUpdate].id,
        name: valueName,
        price: valuePrice,
        image: valueImage,
        description: valueDes,
        type: valueType,
        category_id: valueCategory
    }
    // 4. Đưa thông tin đã cập nhật vào localStorage
    localStorage.setItem('products', JSON.stringify(products));
    // 5. render theo localStorage đã update
    renderDataProduct();
    // 6. remove class update to status add
    buttonSave.classList.remove('update');
    buttonSave.removeAttribute('data-id');

}

// Nếu data hợp lệ thì thực thi hàm này
function handleSubmitForm() {
    // 1. lấy value input trong form
    let valueName = nameSelector.value.trim();
    let valuePrice = priceSelector.value.trim();
    let valueImage = imageSelector.value.trim();
    let valueDes = descriptionSelector.value.trim();
    // lấy value radio checked
    let valueType = document.querySelector('.type_product:checked').value;
    // Lấy value select
    let valueCategory = categoryFormSelector.value;
    // 2. phân tích dữ liệu cần lưu như thế nào?-- kết luận [{}]
    
    // khi chưa có dữ liệu về products ở localStorage chúng ta tạo mảng []
    // Khi có dữ liệu rồi chúng ta phải lấy về và đẩy thêm dữ liệu mới vào
    let products;
    if(localStorage.getItem('products') === null) {
        products = [];
    } else {
        products = JSON.parse(localStorage.getItem('products'));
    }

    let newProduct = {
        id: crypto.randomUUID(),
        name: valueName,
        price: valuePrice,
        image: valueImage,
        description: valueDes,
        type: valueType,
        category_id: valueCategory
    }

    // 3. thêm sản phẩm vào mảng
    products.push(newProduct);
    // Lưu data vào localStorage để load lại trang không mất dữ liệu
    localStorage.setItem('products', JSON.stringify(products));

    // 4. Hiển thị dữ liệu ở localStorage ra table
    renderDataProduct();
    
}

// render data , get from localStorage
function renderDataProduct() {
    let products = JSON.parse(localStorage.getItem('products'));
    if(products) {
        let productResult = '';

        for(let i = 0; i < products.length; i++) {
            let productItem = products[i];
            productResult = productResult + `<tr>
                <td>${productItem.name}</td>
                <td>${productItem.price}</td>
                <td>
                    <img src="${productItem.image}" alt=""/>
                </td>
                <td>
                    <button data-id="${productItem.id}" class="btn_common btn_edit">Edit</button>
                    <button data-id="${productItem.id}" class="btn_common btn_delete">Delete</button>
                </td>
            </tr>`;
        }

        // đưa nội dung html vào trong tbody
        tbodySelector.innerHTML = productResult;

    }
    
}

function handleProcessProduct(event) {
    let clicked = event.target;
    if(clicked.classList.contains('btn_delete')) {
        // confirm before delete
        if(confirm('Bạn chắc chắn muốn xóa sản phẩm?')) {
            // 1. Lấy tất cả dữ liệu từ localStorage
            let products = JSON.parse(localStorage.getItem('products'));
            // 2. Tìm id cần xóa ra khỏi array
            let id = clicked.getAttribute('data-id');
            // 3. Xóa object với id click ra khỏi mảng
            let productsRemoveById = products.filter(
                function(item) {
                    return item.id !== id;
                }
            );
            // 4. cập nhật lại locaStorage
            localStorage.setItem('products', JSON.stringify(productsRemoveById));
            // 5. render lại danh sách sản phẩm theo localStorage
            renderDataProduct();
            // 6. reset form
            if(id === buttonSave.getAttribute('data-id')) {
                document.querySelector('#form_save_product').reset();
                buttonSave.classList.remove('update');
                buttonSave.removeAttribute('data-id');
            }
        }
        
    } else if(clicked.classList.contains('btn_edit')) {
        // 1. Lấy tất cả dữ liệu từ localStorage
        let products = JSON.parse(localStorage.getItem('products'));
        // 2. Lấy ra object đang edit theo id
        let id = clicked.getAttribute('data-id');

        let objEdditing = products.find(
            function(item) {
                return item.id === id;
            }
        );
        // 3. Đưa dữ liệu object vào input
        // gán lại value cho input
        nameSelector.value = objEdditing.name;
        priceSelector.value = objEdditing.price;
        imageSelector.value = objEdditing.image;
        descriptionSelector.value = objEdditing.description;
        let valueTypeEdditing = objEdditing.type;
        // chọn input có value là giá trị đang edditting cho thuộc tính checked = true;
        if (valueTypeEdditing) {
            document.querySelector(`input[value=${valueTypeEdditing}]`).checked = true;
        } else {
            document.querySelector(`input[value=new_arrival]`).checked = true;
        }
        // chọn phần tử select có value là edit đang sửa cho selected
        categoryFormSelector.value = objEdditing.category_id;
        
        // 4. Thêm trạng thái vào nút save để biết update hay add
        // 4.1 Thêm class update cho button save
        buttonSave.classList.add('update');
        // 4.2 Thêm id để biết cập nhật sản phẩm nào
        buttonSave.setAttribute('data-id', id);
    }
    
}

function showCategoryInit() {
    // 1. Lấy tất cả category từ localStorage
    let categorys = JSON.parse(localStorage.getItem('categories')) || [];
    // 2. Tạo ra các options
    let resultOptionHtml = '<option value="">Chọn danh mục</option>';
    for(let i = 0; i < categorys.length; i++) {
        let categoryItem = categorys[i];
        resultOptionHtml = resultOptionHtml + 
        `<option value="${categoryItem.id}">
            ${categoryItem.name}
        </option>`;
    }
    // 3. Đưa category html vào trong dom
    categoryFormSelector.innerHTML = resultOptionHtml;

}



// Hiển thị data trong localStorage
renderDataProduct();
// 3. Nơi lắng nghe các sự kiện -- thêm mới sản phẩm
buttonSave.addEventListener('click', handleAddProduct);
// thêm sự kiện cho xóa sản phẩm và edit sản phẩm
tbodySelector.addEventListener('click', handleProcessProduct);
// Hàm tạo ra option và đưa vào category
showCategoryInit();