/**
 * Đây là ví dụ trong file markdown
 */
// Đối tượng cơ bản "động vật"
const animal = {
  speak: function (sound) {
    console.log(`${this.name} kêu: ${sound}`)
  }
}

// Đối tượng "chó" kế thừa từ "động vật"
const dog = {
  name: 'Buddy'
}

// Gọi hàm speak của động vật trên đối tượng chó bằng cách sử dụng call
animal.speak.call(dog, 'Gâu gâu') // Output: Buddy kêu: Gâu gâu
