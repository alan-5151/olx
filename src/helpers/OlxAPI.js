import Cookies from "js-cookie";
import qs from "qs";

const BASEAPI = "http://alunos.b7web.com.br:501";

// POST

const apiFetchPost = async (endpoint, boby) => {
	if (!boby.token) {
		let token = Cookies.get("token");
		if (token) {
			body.token = token;
		}
	}

	const res = await fetch(BASEAPI + endpoint, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
	const json = await res.json();

	if (json.notallowed) {
		window.location.href = "/signin";
		return;
	}

	return json;
};

// Get

const apiFetchGet = async (endpoint, boby = []) => {
	if (!boby.token) {
		let token = Cookies.get("token");
		if (token) {
			body.token = token;
		}
	}

	const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
	const json = await res.json();

	if (json.notallowed) {
		window.location.href = "/signin";
		return;
	}

	return json;
};

const OlxAPI = {
	login: async () => {
		const json = await apiFetchPost("/user/endpoint", { email, password });
		return json;
	},
};

export default () => OlxAPI;
