export interface AuthResponse {
	ok: boolean;
	uuid?: string;
	name?: string;
	token?: string;
	msg?: string;
}

export interface User {
	uuid: string;
	name: string;
}