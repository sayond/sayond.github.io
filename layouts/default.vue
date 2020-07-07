<template>
  <div id="main">
    <div class="spacer">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

div#main {
  height: 100vh;
  background-image: url(https://lh3.googleusercontent.com/R5Sl62SOnt79BH9yvjs4GO1g13H31rm9Zd7Cw2ebBTckIrVWQRyL0MIvllAjC2spjFPdzrydfiBfnA8nUGYVq6F0m6xv9ibxDvdDQkowPUNmLvM0uZ0rUU5QR0AhCxVNLkSbpvnM9kJbQ15g61NiE0lirWIt6CNWIE06Bc03n7KupBxHKGyruji6Dpdj1584nZ7_hHgdbKKkGNsuyCjDO_CyMzEAcnffy4B9zfYvcS8kAyLhvDVhhVUVdxaypz8odmnAeVTi3WK3ErCNGTqjr2dp3OtRtJVgp9Rp34QcsxaxlV69XPer_B32HwykdWiQNbDm7bBxEYk37WFgpvYt8r-xjJ_DcfrTVF1tIv0kf7nFKzqNmYX7n9Dm6SyBGqkuih_twaGH9WW0z7ZW0pPobHe9IJr5UOLPoWRAOpSQmSdYVRWX-w-QoY26jfdpVzyYKkqYv6zkSsvneHtQKtS4V30o3wyrPYSWCyW-WV-aIOQ3ktsJGiNJ6mCxfSvSohhY1yaTkmPS87w4ByvhNfit5o-MUGnjIj-42CcuMCK_G4k_MUdUOZBB-Lv_Jkypd87sK8QsctVU9yy4OeQnl9KmDsx5x0Ty0qU9bE-MjS2JZ1rOI9_84tjmcs7RUevzxw5EceRNqT1fL_NbMMWScWvipu7iZP80Q-wes3bv4qFrBmyhnQvQ753ZAZYIZPa7ywE=w1368-h1026-no?authuser=0);
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  z-index: -1
}
.spacer {
  width: 100%;
  position: fixed;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
</style>
