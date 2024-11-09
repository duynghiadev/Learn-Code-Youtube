// create instance axios config
const instance = axios.create({
  baseURL: "/api", // https://localhost:3000/api
  timeout: 3 * 1000, // milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// handle data before, then next went down server
instance.interceptors.request.use(
  async (config) => {
    console.log("🛫 Request interceptor triggered");
    // we not need checked accessToken for 2 this routes
    if (
      config.url.indexOf("/login") >= 0 ||
      config.url.indexOf("/refreshToken") >= 0
    ) {
      console.log("⛔ No need to check access token for login or refreshToken");
      return config;
    }

    const { token, timeExpired } = await instance.getLocalAccessToken();
    console.log("🔑 Access Token:", token);
    console.log("⏰ Token Expiry Time:", timeExpired);

    const now = new Date().getTime();
    console.log(`⏰ Current Time: ${now}`);

    if (timeExpired < now) {
      try {
        console.log("🔄 Refreshing Access Token...");
        const {
          status,
          elements: { token, timeExpired },
        } = await refreshToken();

        console.log("🔑 New Access Token:", token);
        console.log("⏰ New Token Expiry Time:", timeExpired);

        if (status === "success") {
          // set token and timeExpired localStorage
          await instance.setLocalAccessToken({ token, timeExpired });
          console.log("✅ New Access Token set successfully");
          return config;
        }
      } catch (error) {
        console.error("❌ Error refreshing token:", error);
        return Promise.reject(error);
      }
    } else {
      console.log("🔓 Token is not expired. No need to refresh.");
    }

    return config;
  },
  (err) => {
    console.error("❌ Request interceptor error:", err);
    return Promise.reject(err);
  }
);

// handle data after response from server
instance.interceptors.response.use(
  (response) => {
    console.log("🛬 Response interceptor triggered");
    return response;
  },
  (err) => {
    console.error("❌ Response interceptor error:", err);
    return Promise.reject(err);
  }
);

// start function
const btn_login = document.getElementById("_login");

if (btn_login) {
  btn_login.addEventListener("click", async () => {
    const {
      status,
      elements: { token, timeExpired },
    } = await login();

    if (status === "success") {
      // set token and timeExpired localStorage
      await instance.setLocalAccessToken({ token, timeExpired });
      console.log("✅ Logged in successfully");
    }
  });
}

const btn_getlist = document.getElementById("_getlist");
if (btn_getlist) {
  btn_getlist.addEventListener("click", async () => {
    const { status, elements } = await getUsers();

    console.table(elements);
    console.log("------------------------------------------");
  });
}

async function getUsers() {
  try {
    console.log("📡 Fetching user data...");
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching user data:", error);
    throw error;
  }
}

async function login() {
  try {
    console.log("🔐 Logging in...");
    const response = await instance.get("/login");
    return response.data;
  } catch (error) {
    console.error("❌ Error logging in:", error);
    throw error;
  }
}

async function refreshToken() {
  try {
    console.log("🔄 Refreshing access token...");
    const response = await instance.get("/refreshToken");
    return response.data;
  } catch (error) {
    console.error("❌ Error refreshing access token:", error);
    throw error;
  }
}

instance.setLocalAccessToken = async ({ token, timeExpired }) => {
  window.localStorage.setItem(
    "accessToken",
    JSON.stringify({ token, timeExpired })
  );
};

instance.getLocalAccessToken = async () => {
  const accessToken = window.localStorage.getItem("accessToken");
  return JSON.parse(accessToken);
};
