// 1.
function createStorage(key) {
	const store = JSON.parse(localStorage.getItem(key)) ?? {}

	const save = () => {
		localStorage.setItem(key, JSON.stringify(store))
	}

	const storage = {
		get(key) {
			return store[key]
		},
		set(key, value) {
			store[key] = value
			save()
		},
		remove(key) {
			delete store[key]
			save()
		}
	}

	return storage
}

const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullName'))
console.log(profileSetting.get('age'))
console.log(profileSetting.get('address'))

profileSetting.set('fullName', 'Duy Nghia')
profileSetting.set('age', 20)
profileSetting.set('address', 'Da Nang')

const profileSetting2 = createStorage('profile_setting_2')

console.log(profileSetting2.get('fullName'))
console.log(profileSetting2.get('age'))
console.log(profileSetting2.get('address'))

profileSetting2.set('fullName', 'Thanh Thuy')
profileSetting2.set('age', 50)
profileSetting2.set('address', 'Da Nang')

// 2:
// function createApp() {
//   const cars = [];
//   return {
//     add(car) {
//       cars.push(car);
//     },
//     show() {
//       console.log(cars);
//     },
//   };
// }
// const app = createApp();
// app.show();
// app.add("BMW");
// app.show();
// app.add("Porsche");
// app.add("Honda");
