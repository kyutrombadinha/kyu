const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const animPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const animgif = () => {
    return new Promise((resolve, reject) => {
        var items = ["anime gif"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const loliPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["loli","loli anime", "cute loli", "loli neko"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const egirlstylePict = () => {
    return new Promise((resolve, reject) => {
        var items = ["egirl"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const ghibliPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["studio ghibli"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const kpopPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["kpop","bts","blackpink"]
        var nime = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + nime
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

const cewePict = () => {
    return new Promise((resolve, reject) => {
        var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"]
        var cewe = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cewe
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
รก}

const cowoPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"]
        var cowo = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const nekoPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["neko"]
        var cowo = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const waifuPict = () => {
    return new Promise((resolve, reject) => {
        var items = ["waifu"]
        var cowo = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}
const perfilanime = () => {
    return new Promise((resolve, reject) => {
        var items = ["profile anime"]
        var cowo = items[Math.floor(Math.random() * items.length)];
        var url = 'https://api.fdci.se/rep.php?gambar=' + cowo
        axios.get(url)
            .then(res => {
                var acak = res.data[Math.floor(Math.random() * res.data.length )]
                imageToBase64(acak)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = { animPict, cewePict, cowoPict, loliPict, egirlstylePict, ghibliPict, kpopPict, animgif, nekoPict, perfilanime,waifuPict }
