//setlocalStorage
export function setLocalStorage(key: string, value: any): void {
	if (key) {
		if (value.constructor !== String) {
			value = JSON.stringify(value)
		}
		localStorage.setItem(key, value)
	}
}

//getlocalStorage
export function getLocalStorage(key: string): any {
	const item = localStorage.getItem(key)
	if (item) {
		try {
			JSON.parse(item)
		} catch (e) {
			return item
		}
	}
	return item && JSON.parse(item)
}
