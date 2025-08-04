'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "97e44325c2a2ea65fb59411faa00bfad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "97ffa6037c5b8da8c1a58eb92e3cb7fd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2bd9634447f3672cbbebcab8a55c4402",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3cada512d6bace3393c9fa5cdfde06f",
".git/logs/refs/heads/main": "57b7f21cc43a02b1e1f6216a34d5fb68",
".git/logs/refs/remotes/origin/main": "18397d8c1bab2cf51302c5ad6d79a700",
".git/objects/00/628e43443aa4efeb73b3fbe4541c92ec9e6ab6": "dce181d3f172408dba9210d2861ba946",
".git/objects/03/8cc2fd9b83b1284c7ed6f916dc7d765bd9570a": "102656a8eaaf1c6f8f9a5266ebcba220",
".git/objects/05/ccc5485a4bb790bd81a90329f04eb60362245c": "4851f6c60b61b420674b0e60a6e15e09",
".git/objects/08/6f426a2e53ad6b516ce04109c9e75813dcdb45": "744bd62ae83766f1b99311d638afccb3",
".git/objects/0a/eb764db9aacf51248a00c24a58dffea1080649": "1dc0b2b80ce6b91ebfaa0b6eed02bfb5",
".git/objects/12/1aefd1d77e3a22e9d23e8447a1c3bd897f7d2b": "855690188cebcbed1ed4eb8e60d518c3",
".git/objects/13/488f52f6ae6f9bf58f7fa78b15ed73cb0178db": "c923fcf319c521bb18b3c825a807065d",
".git/objects/18/dacad74c60ceb266b29e97d67bfee32fc8db79": "b2fdbf233963e65f0f565b4f22ef3e67",
".git/objects/19/1f654ee645af5693f5af3264525227d2ba8377": "61aecd3fd00ce7bae4daaacee37263ea",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/afd81bf8dd38400c09131f12b653696e926b17": "7108fb7b2643fa887c5424ace6e39fd0",
".git/objects/23/3e72e54de0cf17616bbf0f6caea8975acea8cb": "4880631abc668bdd8a5f04a2f6d5574f",
".git/objects/23/c3243abe54ad964f0d05d5138b369965aaee38": "e27fafca983ba8f311ba4040af72d550",
".git/objects/28/f05f9043c7a3cb417d456103a00275e1a00752": "c2513dd8ee3f72dfb5884de4847f57c5",
".git/objects/2a/8fc878740842385abda8d009a6560533ed39fe": "97bc814c3516af3d4c3d5faa76ff4bd8",
".git/objects/30/c941cc189f1e55215b90938a67f5793fc8a747": "70e153c7ca7f6b0e67f1ef3f6790e894",
".git/objects/38/820ec13c5021681d583daacd96d85bbd36943a": "6e5668060a1c4b97f7698f2c24966bc3",
".git/objects/3a/65d7dcd05819f91c854e47d772d956c625b06d": "185b0430748e636660ee87351edb2539",
".git/objects/3f/aba1abc83611ad9dc4fd12df64ac28cdfc2148": "259cef4d723db3b8747a13590b935e26",
".git/objects/44/6897214a84c0fd70e2ef1e82f102650f4575f8": "89e3c00fc76cfc3696393081a4efbcb6",
".git/objects/44/cce9fbcac5133fa0925aeea2745d5be3c52866": "fe174814023e8fdf1d28f29a51a2e605",
".git/objects/47/b0e0b306862e8dab447a3fe297e7c649f811bd": "593f3fce403339564efaf348fdd03c67",
".git/objects/49/82ea8e803e9012f8126e7eb38f65f57b5463ec": "585ee3518c8fbe9d11bfc75aa631572b",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/968fee301626e28bb95ffa9ab98a27b7a4daa7": "06f273e451c9b2825fa9bed2725a0e57",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/94489dfcd7aec10a168997e6269664952581c5": "593f435a3920e29bef1ab2b6e8954f07",
".git/objects/55/ddf98480bbb7c28c275f14382658d72a14ddc5": "d75f79fa201943c4faa8144b06573948",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/a018c66afcec9f16c9cd0f4bbb88a037263c9f": "7800d42f45788786f98277d47dfce509",
".git/objects/5f/be39ff5caa35e3c0f84cf490ee57338a625b2d": "33ca8c515d40af41a2dc8b415616850c",
".git/objects/66/8387c99bf9f619e33e43c50f6ac14686acfc04": "ef4c7d53fe0aa2b79c2bcfe5f3fdc48c",
".git/objects/66/abbe83247391c696c734ac086c59dc25d480c3": "094d2e36c42a958054766afd9417cc09",
".git/objects/66/ae2dfee1c2eb66f6ac00a58bd815195eef3577": "e32a026d5f7b847336db879d3f9fec9e",
".git/objects/6a/1bd39290d8e694be8461b19c7136c3c40245aa": "84809f1d866ac17495df68ce219428ed",
".git/objects/6b/97d85fa243b03d3e6901cbdfa61ae5313d9059": "db548ad5db1c49a8d2af9e590c5b3727",
".git/objects/6c/a20f4bb17190a337e7133baad17ebcf7385f0c": "9c087fe159a16e493eb1ca51d92eca1a",
".git/objects/6d/8b6a19c50f824285779dec9db8e28f5903d93c": "c947698c456312d6ee7eb406d6900a3d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/b3699b055df23f0ab6330ac592834cb50d1ce1": "7855a045322ef531f05e370bcc766215",
".git/objects/72/7ddf2fdd21c9610171533290feed608200856c": "f861fdfeb87283256607223325967f61",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/015dbe8370847719308ee1563822fb71089741": "09b4126fee81a48472736e625db932cc",
".git/objects/78/9eb893ad364f62adcb91d66bf194587b7e2fc7": "757a66aef528504c1b34ffa5657adf2e",
".git/objects/79/e2469fa588f1ffc2ec5f73a660162a5e564983": "ce003553f6534f3742c07007c5e74f4f",
".git/objects/7a/64b5fde3f5fc70adb7d7240a906c8eaec3f43b": "d06b42293db41dc9a42a121a8c2b9227",
".git/objects/7b/45055f245469cc5ae239c68ded4a1d9f2efa89": "84314ebd5c13b9aa38c7d701dad9ccde",
".git/objects/7b/f0db8c90670cb3b9fb960a2e2ab1ff31107cce": "234e1ec53dceabf2c31de0ecc95f84cb",
".git/objects/7f/1e4074b9b2b5c93378efd9b3a02c71548a4522": "c22408f430fe657c04b67862c3c8c6d4",
".git/objects/7f/d1a65ac3453040a4e6d5d27c32f31b713a0d2b": "50975763d769d6576318f84a46a5c680",
".git/objects/84/848334554fd7196f0134e071f2a179649ae92c": "ee5076981129b38ac094a4db40f0e8a4",
".git/objects/85/28f233dcca6ef543afc497e7f8e97259775b26": "aab4f543154f5359af3372de0fb087b2",
".git/objects/87/1670d7b6ff438c138346e1ae46725416ce862a": "0926a1c5fcfce3810463a9fa153e0be8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/4eaf64c97081efab3de3785a6d8deee16833ed": "087d64f8306af84bb9f49f0393e188d6",
".git/objects/8f/0b68136ee057a4d079e789b73060dbb2e9a8b8": "e396e3a73bad1479e0cf368160d443f5",
".git/objects/90/bea523612b3e8ecf3aa5e61f1db7873efc343d": "c7d50db3f9b79c1b6056f228824cb4ae",
".git/objects/91/f45cb5a09aafd9a6b8e7fdc651ff1f536200ce": "9c0f1b3bec21337a2eff6f3597b82417",
".git/objects/95/57e909ee84c76d9e4cfa51d9795f240d3a41a1": "bfe19b8a220a0a6db29cf8a4ef548d68",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a0/ed11dcf98735cb624f8cc5b7cacd0f192aef54": "61e006eb7e3bbbc36d28a553200d4af0",
".git/objects/a1/8fd76ce38f52dc6a906427e6828960fab11a9d": "e4d9f59fd0aefa3f64d41174732e3aea",
".git/objects/a2/10c8794c1df6d5f1fc7dbcdfc6e64ec07d0d0f": "30637f5b898ae05a81949bae80a59932",
".git/objects/a4/fa532732fd74a9cad555130a4019f24f2155ae": "55c9c74cd8dbe81af404b6d022fb9667",
".git/objects/a5/9e34ce633d4f18556a9a727dc186200aaade1b": "ccb24a4c741da9efdeaaab9621009be8",
".git/objects/a6/c115e25f7d236068ce1fa2e6cb0e41be11dc11": "476e11d0ca0bc46cd428b0db45a598ea",
".git/objects/aa/0bbdd1405cf1e9ae43844270669b85d46d1dad": "187a8e1798713bfefd06275a636da131",
".git/objects/ae/c4d182ee6c381121284c6b5b630e1296c6c578": "54b796bb4745c71d408b6bebfeba139a",
".git/objects/b2/42bfc3cfe27599ffce8382e115782bb0564ed5": "c7a059f3a723abe860e1ff180814bc20",
".git/objects/b5/cd0ec6eae299c2095d42546bcedfac59976a12": "3a5271f0b656be805da81ce0f81d84cc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/c6adb4db9e36c01b3fe5265988aee08fd10aa2": "7bbbfdc4b45d25658c57b07956477c1c",
".git/objects/bc/4b75bdc8a782ff8eb44ea563ef65f88264a154": "3fd7ebcab538eaa2fe72e647aa4747eb",
".git/objects/bd/93a2addf1c00b32aeb671b90f1664910f3b96a": "34f890f78aa531771b5b5424d0799e81",
".git/objects/bd/f2986977d5a0effcf76b0e930a4dc6b4250c04": "c84b5e94e1ef85104148019175e7d34f",
".git/objects/bf/aea884b64b1c7730ff4f1181bcce538c136ac9": "152270e4333944857bb86c71ae9c9044",
".git/objects/c3/39090dc63378d08df66ab78113541d09a7b430": "cd29bc9d1488b8c90fb65e64d3ce2a8a",
".git/objects/c4/cf0b91e18ce12f895ecd81c3e801155f143b8d": "abd6dccb29da9980e4d88aa591c09a38",
".git/objects/c6/6cea21fd6bdf029d6879eefe9dde4fd8504d71": "fbbe633f9609ca49a895ca8b54fb3aef",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d3/2c97b0e9367e9bb9439b7247da07f790301a41": "7d366db593f6909b28eedfa27e111bed",
".git/objects/d3/8e1bd98252787a9ef90e85a5c2794ff9f22e33": "0e0ae14593ff52cb773fc4c36415af20",
".git/objects/d4/0599ef4d66b41403e891b9ffddba86704825b2": "1708f88d139fa60e7c7daa5f6bef85ec",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d4d5b9b9ead3c1491f50b72345589574567274": "84a0ea52e77989179462ef249e659898",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/de/a52d9b8975e34d02a895f947fc6af53816a07b": "33c87af76902d6dc657a4e556b97aaa6",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e7/5f05c81310e257b5e612e178e432e1f1e85978": "aaa0623bb35b37d6616a68c9ba09ff14",
".git/objects/e8/d870f0197bed9e684229dc3d0bc6761732d7a1": "2bcb60f6298a4796633bdc50ac32c85c",
".git/objects/ea/d245a1e1a5c16c1fb4f1fa9410308074628cda": "8ce4217c2050fd8db387cb42ead40e0f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e03c1072f9c323f7defebfb3118d67b77e6ac4": "9271a150a629da9b492c5a0a4f09ea3c",
".git/objects/f0/b312de3f6b2d4d8378c7974aaa4cf0141a050d": "766361377c13438fe14ea9adc8218c26",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/826cacd65d9bc9fad92528bf419c749cbc70a8": "53807cb1d150fc0553b6a4197580c258",
".git/objects/f4/1fce217fe3ebf18719df9cf23bc6c52687e0a6": "f4dacba0aebcb86eb2ce84460b2f1dde",
".git/objects/f5/b738f0a912da752f538917cc1e3cc43e5203b9": "d8cf5718e70dd4d90be9ec8c9756921d",
".git/objects/f6/201039a3e1bc99b76c1acdb763776a9808e93d": "91a7bc087bf8a379b3977f4bfb6c77b2",
".git/objects/f8/97f8981e9893f06dc0b8c45f302f30dc595095": "75123aa794fe444406bb8b039368cbd5",
".git/objects/f8/ed739182d8921a6df17f423cd48081fbad55fb": "b281267ae4c60c6f0b23e0b183e54a41",
".git/objects/fb/0be790534c493208c43b49b2e424c8e67d038d": "f9943eb13182bdbddbb51061faa932c4",
".git/ORIG_HEAD": "0d4c566b6630be76102c4b72d26665ca",
".git/refs/heads/main": "0d4c566b6630be76102c4b72d26665ca",
".git/refs/remotes/origin/main": "0d4c566b6630be76102c4b72d26665ca",
"assets/AssetManifest.bin": "8d776d916c21a77c78983179800abcde",
"assets/AssetManifest.bin.json": "730fd32531b5033ae03eba33d7a8aac9",
"assets/AssetManifest.json": "d8729eec0f25478b9a6c3131c3aa7984",
"assets/Assets/CT.png": "14945c9a6ce4073262feabfb141ab1eb",
"assets/Assets/dart.png": "6972a78ac4b2687ef6541cb95cd169c4",
"assets/Assets/EC.png": "528ccb297b73fbc92678349e4bb4e099",
"assets/Assets/ElamaranResume.pdf": "a682b2a93fa8c199ef59189b7ee41564",
"assets/Assets/ET.png": "a116c39adbf466f7b32d5d6c118345a3",
"assets/Assets/fapi.png": "210eca6fe0a6870d843dd1bba4198d3a",
"assets/Assets/fastapi.png": "f3a424aa8766efb23ecc8cae3e97dc14",
"assets/Assets/flutter.png": "75b83c82e6e5003d45d5326337894207",
"assets/Assets/NT.png": "caee230d82ec67d28fc970126f0e0877",
"assets/Assets/pf.png": "0ae93ff690dedb99c6827d778c1cd14d",
"assets/Assets/python.png": "fa414e50a694d7bb790f73ab26d53ae9",
"assets/Assets/sample.png": "fe9ea2e9f50f2f02ff02e541abcea6e1",
"assets/Assets/sql.png": "508345ed2e3f4f9766b68d2f8aa6891a",
"assets/Assets/weather.png": "5163224ef71df3fcbcfb9d59223802b9",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "2210b5e9947049e13fd6f3c1d341a511",
"assets/NOTICES": "1bd98b6cdc945c4aff25c2d5dc50712a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2e3dc24ddcbd67d0d93b88dc6883a453",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b4037cc69b59680b4bac4d914835617d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "4a81117ef03176c946abb4999496d764",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d5acb4e05b7f5a8711f135427f1d153",
"/": "9d5acb4e05b7f5a8711f135427f1d153",
"main.dart.js": "5dd77fa8a9a52260d785f3777e5bfe8d",
"manifest.json": "75ddf561701309cd388dc71fbe615148",
"version.json": "87ba34d7f308aec6cca335dd0a4ec3f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
