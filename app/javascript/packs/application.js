require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
require("toastr")
require("chart.js")
require("../packs/header")
require("../packs/footer")

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import 'bootstrap';
import 'src/css/application';
import '@fortawesome/fontawesome-free/js/all';

import toastr from 'toastr'
window.toastr = toastr

import lozad from 'lozad'
window.lozad = lozad