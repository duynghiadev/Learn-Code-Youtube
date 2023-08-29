const carts = [
    {
        id: 1,
        title: 'Samsung Galaxy S7',
        price: 10,
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
        amount: 3,
    },

    {
        id: 2,
        title: 'google pixel ',
        price: 20,
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
        amount: 1,
    },

    {
        id: 3,
        title: 'Xiaomi Redmi Note 2',
        price: 50,
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png',
        amount: 1,
    }
];

export default carts;

// giả sử mình click vào sản phẩm số 1 -> 3-> 4
// dau vào
// tìm ra index của phần tử cần xóa
// cập nhất số lượng theo index -> carts[index].amount++