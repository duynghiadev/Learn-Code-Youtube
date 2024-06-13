// product
let products = [
    {
        "id": "d1cec4de-cec6-4e51-8e91-2af6ce350991",
        "name": "danh mục 1",
        "price": "200",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "description": "danh mục 1",
        "type": "new_arrival",
        "category_id": "840a38fc-4530-4c9e-8bed-d3f5e06d78ca"
    },
    {
        "id": "29bb27a1-51cd-42be-8361-72009770f372",
        "name": "danh mục 2",
        "price": "300",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80",
        "description": "mô tả 2",
        "type": "new_arrival",
        "category_id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302"
    },
    {
        "id": "059dab65-891b-40aa-8e4f-525059dce395",
        "name": "danh mục 1.1",
        "price": "200",
        "image": "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
        "description": "mô tả 1.1",
        "type": "new_arrival",
        "category_id": "840a38fc-4530-4c9e-8bed-d3f5e06d78ca"
    },
    {
        "id": "a0913b2e-e39c-4e59-9a5e-1494441b58d0",
        "name": "danh mục 2.1",
        "price": "300",
        "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
        "description": "anh 2.1",
        "type": "new_arrival",
        "category_id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302"
    },
    {
        "id": "13846aa9-4a22-46b4-88c3-c31ea0674076",
        "name": "sản phẩm 2.3",
        "price": "200",
        "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        "description": "anh 2.3",
        "type": "new_arrival",
        "category_id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302"
    }
];

// category
let categories = [
    {
        "id": "840a38fc-4530-4c9e-8bed-d3f5e06d78ca",
        "name": "danh mục 1"
    },
    {
        "id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302",
        "name": "danh mục 2"
    }
]


// users
let users = [
    {
        "id": "4fd6d14d-e40a-4a9e-b81d-614d5a3bde8c",
        "name": "ducdo",
        "password": "a@A123456",
        "email": "vietduc122@gmail.com",
        "status": "active",
        cart: [
            {id: 1, name: 'giay', quantity: 1},
            {id: 2, name: 'ao', quantity: 2}
        ]
    }
]

let users = [


    {
        "id": "760a12a8-a370-4bda-b6e6-3d0837d6b8f0",
        "name": "ducdo",
        "email": "vietduc122@gmail.com",
        "password": "a@A123456",
        "status": "active",
    },

    {
        "id": "966a4be2-d0fe-42f6-afec-532741578d0e",
        "name": "ducdo2",
        "email": "tvietduc122@gmail.com",
        "password": "a@A123456",
        "status": ""
    }
]

// 1. build ra value của cart
[
    // 1 sản phảm
    {id: 1, name: 'giay the thao', quantity: 2},
    {id: 2, name: 'quan ao', quantity: 1}
]

// 2. update user đang login hay có status là active
// Thêm thuộc tính cart cho user đang active


// 3. cập nhật lại localStorage cho users



{/* <tr data-product_id="d1cec4de-cec6-4e51-8e91-2af6ce350991">              
    <td class="product-quantity" data-title="Quantity"><div class="quantity">
</tr>     */}

<tr data-product_id="059dab65-891b-40aa-8e4f-525059dce395"></tr>
<input type="text" name="quantity" value="1" title="Qty" class="qty" size="4"> 
</tr>   

<tr data-product_id="29bb27a1-51cd-42be-8361-72009770f372">
<input type="text" name="quantity" value="2" title="Qty" class="qty" size="4">
</tr>


cart = [
    {id: 'd1cec4de-cec6-4e51-8e91-2af6ce350991', name: 'danh mục 1', quantuty: '200', image: 'https://images.unsplash.com/photo-1542291026-7eec2…ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', description: 'danh mục 1', …}

    {id: '059dab65-891b-40aa-8e4f-525059dce395', name: 'danh mục 1.1', price: '200', image: 'https://images.unsplash.com/photo-1543508282-6319a…ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80', description: 'mô tả 1.1', …}

    {id: '29bb27a1-51cd-42be-8361-72009770f372', name: 'danh mục 2', price: '300', image: 'https://images.unsplash.com/photo-1549298916-b41d5…ufDB8fHx8fA%3D%3D&auto=format
]