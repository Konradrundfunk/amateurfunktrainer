'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/Formelsammlung.pdf": "fae0e29dca07fceccd012798aee8b61a",
"assets/assets/graphics/tc107b.png": "ad982f0b58151c59051d9d85dd86d0bb",
"assets/assets/graphics/td206f.png": "811483ebb1c4f705ee66509be4d65feb",
"assets/assets/graphics/th202b.png": "7f7ace9bd4abaa0f1628d6aec416834d",
"assets/assets/graphics/tc203f.png": "49a912efcd1237a51dc60447f3cd4468",
"assets/assets/graphics/tc505a.png": "7a3339421093cc050ede53343f50e762",
"assets/assets/graphics/tc301f.png": "e63667d6188eb18db3014fd985439aaf",
"assets/assets/graphics/th202c.png": "8dcf5a3eafaec9a4abbaf154e3c8aa8a",
"assets/assets/graphics/tk314b.png": "b84fe692cd961cec8e155982627ba80f",
"assets/assets/graphics/tc205f.png": "47c0efecdad60067ccbbb8ca08e6212d",
"assets/assets/graphics/tc106b.png": "2b5cdb4df31f76179a3381fbb3ea592b",
"assets/assets/graphics/tb610f.png": "a248a2f4dbb9983942f27db2a75c7c88",
"assets/assets/graphics/tg506d.png": "45686ecb92f8c85811b33b0d861c7185",
"assets/assets/graphics/td203b.png": "be70001f7ef7ac97fb7cd93fdacef94c",
"assets/assets/graphics/tb201f.png": "c347716dd93b53a49f070cbff7af06b7",
"assets/assets/graphics/te106f.png": "be760d68a525b5f79fb77ab6732b40ad",
"assets/assets/graphics/kabeldaempfung.png": "524fae491b0be73e2ae9e684984b0da7",
"assets/assets/graphics/tc604f.png": "23430d4220dd670de119053e91933c26",
"assets/assets/graphics/tc106c.png": "12afda5273df2259cd40e11c63796b9b",
"assets/assets/graphics/tb702f.png": "e0f19466b119861bab425513bd39f271",
"assets/assets/graphics/te104f.png": "71728873012e22548a0aa10cdfc16bbf",
"assets/assets/graphics/th110f.png": "b5fecf1f5d0bd7f3d8ffc8521205dd37",
"assets/assets/graphics/th202a.png": "41bdcd4a50ca705340fba7213f872bda",
"assets/assets/graphics/tb503f.png": "65a17967fada21cbd9e1245c4991106f",
"assets/assets/graphics/td203a.png": "998678ac9b5983cf388c1782ca813e88",
"assets/assets/graphics/td103f.png": "fd98c76d57f0544b0b234e8b5ba11303",
"assets/assets/graphics/tc508f.png": "b11861bf4974523ee5d2d01bca65da9f",
"assets/assets/graphics/tb402f.png": "017818b64319a02c58b6331398d08580",
"assets/assets/graphics/tb303f.png": "97bcdcdb21baa2284a41a71927248183",
"assets/assets/graphics/tc107d.png": "df23380f90478543f51a0429cccd6ce5",
"assets/assets/graphics/tj203f.png": "253811d6616f3fde5968a360414c2127",
"assets/assets/graphics/tc106d.png": "df23380f90478543f51a0429cccd6ce5",
"assets/assets/graphics/tb202f.png": "be36d7eeb75646db1da98db477e51a8a",
"assets/assets/graphics/tj201d.png": "98aee99fdafc6e11f3aadff26423b0fa",
"assets/assets/graphics/tg504a.png": "d71a79fff30fe725d9cb490fcbab2e39",
"assets/assets/graphics/tk314c.png": "c41ad58d9b29951a93aa6a1a75bb8523",
"assets/assets/graphics/tj211f.png": "4ff9ea3eeb4d8bad3eff2351fca37000",
"assets/assets/graphics/tb505f.png": "dc0aa1b4e87469722e0086f662a2b66e",
"assets/assets/graphics/tc304f.png": "8e461c6a456c89e456d34dd4283727e7",
"assets/assets/graphics/tj205f.png": "5191c5008ef8621b3fc5f8d10932aca0",
"assets/assets/graphics/tg506b.png": "db24a3ab9ef89617707823609f025f53",
"assets/assets/graphics/th202d.png": "30ce8a63dd112b248e03d04decc2d8c0",
"assets/assets/graphics/tb404f.png": "69abec1190610a787d4da71419230a26",
"assets/assets/graphics/td108f.png": "c8036d210a0589a40dcfd1e5c6fb96f1",
"assets/assets/graphics/tf204f.png": "79429ee5052b3b406611cc10279b6f32",
"assets/assets/graphics/tk314a.png": "666ffc7a866e1be962bfb0a695215e69",
"assets/assets/graphics/tc603f.png": "e15a6763fd21dad82329afe8bfa44e95",
"assets/assets/graphics/tj201a.png": "996e1e5105c2027d30ddc8a5ef52f4c6",
"assets/assets/graphics/tb611f.png": "a11ce669781f2b87a198255fcfb5a296",
"assets/assets/graphics/te103f.png": "adf224d4a6f670b51c11c7d6c67c2a56",
"assets/assets/graphics/td304f.png": "025225a1c8ab6459026a640f7f2fbd22",
"assets/assets/graphics/tc105f.png": "ad982f0b58151c59051d9d85dd86d0bb",
"assets/assets/graphics/tc305f.png": "c54889697b294ae4a12e7aa8bc6bd12b",
"assets/assets/graphics/tj201c.png": "39f6b83dadc2194aafffbefc020cc6b2",
"assets/assets/graphics/tc612f.png": "925eb5955e4b7ed49b063dbed2bac048",
"assets/assets/graphics/tj201b.png": "9a1a496543516dcdf00307bfdfb16e71",
"assets/assets/graphics/tc505b.png": "6098ee40332c9bcdcafaac6a95c7c63b",
"assets/assets/graphics/tc107c.png": "12afda5273df2259cd40e11c63796b9b",
"assets/assets/graphics/td208f.png": "9c7fd81c10e29376ef0cc6d6cf51191e",
"assets/assets/graphics/tg504d.png": "e082d3ab035496042b1107d4cdcd28e3",
"assets/assets/graphics/td202f.png": "c3d3fa9929e443fee135fee9103f79b2",
"assets/assets/graphics/td209f.png": "7fd40b7e44dc24eb5230a12317137dd8",
"assets/assets/graphics/td107f.png": "8c41b2ddffe6d9ae46e09cfa4fd35744",
"assets/assets/graphics/tc302f.png": "e2bdfd62df8080a0ed322cae064bdc91",
"assets/assets/graphics/tk314d.png": "84c69a24a8d2e77f7f980d881e1f6073",
"assets/assets/graphics/tg506a.png": "3ebaa3f0e522540c98888b3ab9d785a5",
"assets/assets/graphics/tc106a.png": "ad982f0b58151c59051d9d85dd86d0bb",
"assets/assets/graphics/tc107a.png": "2b5cdb4df31f76179a3381fbb3ea592b",
"assets/assets/graphics/tc204f.png": "d763cbaee40fed198cb2e9acb5166f0c",
"assets/assets/graphics/th209f.png": "2a785d9d1358041812eab4f2a5498947",
"assets/assets/graphics/th112f.png": "60a43f1bf635f8a45024c4968f0b694e",
"assets/assets/graphics/te105f.png": "198b16e6908b973a20723b4f575a2fec",
"assets/assets/graphics/th208f.png": "efe2ad06c484d5502d01bc6e9472e27f",
"assets/assets/graphics/tf301f.png": "fb610138d6a7c7a9ce1a30ae281d426b",
"assets/assets/graphics/tb302f.png": "cf05de662236821ec74626516007be05",
"assets/assets/graphics/td203d.png": "2014e27e613f9109d5e4353b1f3c9a06",
"assets/assets/graphics/tb204f.png": "ee04f897d1afc5cfa528eb1b28abb714",
"assets/assets/graphics/tg504c.png": "cff5bf0a0a5462d5bee8ce209de70a1c",
"assets/assets/graphics/td207f.png": "ea584e56d55e5785e590c92899cca161",
"assets/assets/graphics/td101f.png": "74b649113998ca6336b873c3efd693ed",
"assets/assets/graphics/th405f.png": "4b8a3ee5dcb6c6eb254f8d99cdfadf66",
"assets/assets/graphics/td105f.png": "a48f93e75b913693170b439a288686a0",
"assets/assets/graphics/tc509f.png": "6055c151616f5c3bca8583261667e745",
"assets/assets/graphics/td203c.png": "4d6fd56cb359c0eb155b86aa6e637f39",
"assets/assets/graphics/td201f.png": "feb48f62cbd30617221aa21dcbe4d685",
"assets/assets/graphics/ti310f.png": "78d4f5b496460680d86abe08aac21923",
"assets/assets/graphics/tg504b.png": "e9c421f5c2da9b0b279a128e808fa411",
"assets/assets/graphics/tg506c.png": "04aef614e330b057792dd2944bfad980",
"assets/assets/questions/DL_Betriebstechnik_2007.json": "28bfb3a86515c8116ee4fe2b899c2ce2",
"assets/assets/questions/DL_Technik_Klasse_E_2007.json": "0d709155d9d7eed7fd8c8845cc359f62",
"assets/assets/questions/DL_Vorschriften_2007.json": "a12e2bfe489c35850d67f6721576e952",
"assets/assets/questions/DL_Technik_Klasse_A_2007.json": "1b00a9158109feb6b0607a99594ea121",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fwfh_svg/test/images/logo.svg": "fdb46fc7657324f79bd97928651e8274",
"assets/AssetManifest.json": "1adb6bec4dbfa975638ccc757f1937b4",
"assets/NOTICES": "d10ea346455e6e3f5fede661ece4d0d7",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"js/pdf.js": "70bbf800fbb5a5d9100c1466c96daf39",
"index.html": "280338a66078461dcc5d29bc72625985",
"/": "280338a66078461dcc5d29bc72625985",
"version.json": "7c6cac74e145fc0202180eeea2f326dd",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "6ca14ee4ed50b32e06e51ffd3f874e6d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "2c1ad802e005bb94b21bd7823bb6e69c",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
