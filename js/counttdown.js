// Import and configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmkbzs2m4Odi-792Iy8RwXP940HSKGunA",
  authDomain: "udaipur-hotelier.firebaseapp.com",
  databaseURL: "https://udaipur-hotelier-default-rtdb.firebaseio.com",
  projectId: "udaipur-hotelier",
  storageBucket: "udaipur-hotelier.firebasestorage.app",
  messagingSenderId: "931551837204",
  appId: "1:931551837204:web:668a9b545a6f523ecefb01"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Get device details
function getDeviceDetails() {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    time: new Date().toISOString(),
  };
}

// Track active users
function trackActiveUser() {
  const userRef = database.ref("activeUsers");
  const sessionId = `${Math.random().toString(36).substring(2)}-${Date.now()}`;

  const userData = {
    sessionId: sessionId,
    ...getDeviceDetails(),
  };

  const userEntryRef = userRef.child(sessionId);
  userEntryRef.set(userData);

  // Remove on disconnect
  userEntryRef.onDisconnect().remove();

  // Update online user count
  userRef.on("value", (snapshot) => {
    const userCount = snapshot.numChildren();
    document.getElementById("user-count").textContent = `${userCount} user${userCount > 1 ? "s" : ""} online`;
  });
}

// Initialize
trackActiveUser();
